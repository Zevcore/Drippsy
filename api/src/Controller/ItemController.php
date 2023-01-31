<?php
declare(strict_types=1);

namespace App\Controller;

use App\Entity\Item;
use App\Enums\Categories;
use App\Enums\State;
use App\Repository\ItemRepository;
use App\Repository\UserRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ItemController extends AbstractController
{
    #[Route('/api/item/create', name: 'app_item_create', methods: ['POST'])]
    public function create(Request $request, ManagerRegistry $doctrine, UserRepository $userRepository): JsonResponse
    {
        $entityManager = $doctrine->getManager();

        $item = new Item();
        $item->setName($request->get('name'));
        $item->setDescription($request->get('description'));
        $item->setPrice($request->get('price'));
        $item->setCategory(Categories::getCategory($request->get("category")));
        $item->setState(State::getState($request->get("state")));
        $item->setQuantity($request->get('quantity'));
        $item->setVisibility(true);
        $item->setSize($request->get('size'));
        $item->setColor($request->get('color'));
        $item->setBrand($request->get('brand'));
        $item->setType($request->get('type'));
        $item->setThumbnails([]);
        $item->setOwner($userRepository->findOneBy(['email' => $request->get("owner")]));

        $entityManager->persist($item);
        $entityManager->flush();

        return $this->json([
            'message' => 'Item added successfully!',
            'code' => Response::HTTP_CREATED
        ]);
    }

    #[Route('/api/item/update', name: 'app_item_update', methods: ['POST'])]
    public function update(Request $request): JsonResponse
    {

    }

    #[Route('/api/item/delete', name: 'app_item_delete', methods: ['POST'])]
    public function delete(Request $request): JsonResponse
    {

    }

    #[Route('/api/item/show', name: 'app_item_show', methods: ['POST'])]
    public function show(Request $request): JsonResponse
    {

    }
}
