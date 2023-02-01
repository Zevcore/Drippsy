<?php

namespace App\Repository;

use App\Entity\Item;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\AbstractQuery;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Item>
 *
 * @method Item|null find($id, $lockMode = null, $lockVersion = null)
 * @method Item|null findOneBy(array $criteria, array $orderBy = null)
 * @method Item[]    findAll()
 * @method Item[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ItemRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Item::class);
    }

    public function add(Item $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Item $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function createEntity(array $entity)
    {
        $item = new Item();

        $item->setAll($entity);
        $this->getEntityManager()->persist($item);
        $this->getEntityManager()->flush();
    }

    public function updateEntity(string $id, array $entity): bool
    {
        $item = $this->findOneBy(['id' => $id]);

        if($item) {
            $entity['updated_at'] = new \DateTimeImmutable('now');
            $item->setAll($entity);
            $this->getEntityManager()->persist($item);
            $this->getEntityManager()->flush();

            return true;
        }
        return false;
    }

    public function findById(string $id): array
    {
        return $this->createQueryBuilder('i')
            ->where('i.id = :id')
            ->setParameter('id', $id)
            ->setMaxResults(1)
            ->getQuery()
            ->getResult();
    }

    public function findByIds(array $ids): array
    {
        $qb = new QueryBuilder($this->getEntityManager());

        return $qb->select('i')
            ->from(Item::class, 'i')
            ->where(
                $qb->expr()->orX(
                    $qb->expr()->in('i.id', $ids)
                )
            )
            ->setMaxResults(count($ids))
            ->getQuery()
            ->getResult(AbstractQuery::HYDRATE_ARRAY);
    }

    public function findRecentlyAdded(int $count): array
    {
        $lastItemId = $this->findLastItem()->getId();

        $ids = [];
        for($i = $lastItemId; $i > $lastItemId - $count; $i--) {
            $ids[] = $i;
        }

        $qb = new QueryBuilder($this->getEntityManager());

        return $qb->select('i')
            ->from(Item::class, 'i')
            ->where(
                $qb->expr()->orX(
                    $qb->expr()->in('i.id', $ids)
                )
            )
            ->orderBy("i.id", "DESC")
            ->setMaxResults(count($ids))
            ->getQuery()
            ->getResult(AbstractQuery::HYDRATE_ARRAY);
    }

    public function findLastItem(): Item
    {
        return $this->createQueryBuilder('i')
            ->orderBy('i.id', 'DESC')
            ->setMaxResults(1)
            ->getQuery()
            ->getResult()[0];
    }

//    /**
//     * @return Item[] Returns an array of Item objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('i')
//            ->andWhere('i.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('i.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Item
//    {
//        return $this->createQueryBuilder('i')
//            ->andWhere('i.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
