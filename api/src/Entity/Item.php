<?php

namespace App\Entity;

use App\Enums\Categories;
use App\Enums\State;
use App\Repository\ItemRepository;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Persistence\ManagerRegistry;

#[ORM\Entity(repositoryClass: ItemRepository::class)]
class Item
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $description = null;

    #[ORM\Column(length: 255)]
    private ?string $price = null;

    #[ORM\Column(length: 255)]
    private ?Categories $category = null;

    #[ORM\Column(length: 255)]
    private ?State $state = null;

    #[ORM\Column(length: 255)]
    private ?string $quantity = null;

    #[ORM\Column]
    private ?bool $visibility = null;

    #[ORM\Column(length: 255)]
    private ?string $size = null;

    #[ORM\Column(length: 255)]
    private ?string $color = null;

    #[ORM\Column(length: 255)]
    private ?string $brand = null;

    #[ORM\Column(length: 255)]
    private ?string $type = null;

    #[ORM\Column]
    private array $thumbnails = [];

    #[ORM\ManyToOne(inversedBy: 'items')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $owner = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $created_at = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $updated_at = null;

    public function setId(int $id): self
    {
        $this->id = $id;

        return $this;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getPrice(): ?string
    {
        return $this->price;
    }

    public function setPrice(string $price): self
    {
        $this->price = $price;

        return $this;
    }

    /**
     * @return Categories|null
     */
    public function getCategory(): ?Categories
    {
        return $this->category;
    }

    /**
     * @param Categories|null $category
     */
    public function setCategory(?Categories $category): void
    {
        $this->category = $category;
    }

    /**
     * @return State|null
     */
    public function getState(): ?State
    {
        return $this->state;
    }

    /**
     * @param State|null $state
     */
    public function setState(?State $state): void
    {
        $this->state = $state;
    }


    public function getQuantity(): ?string
    {
        return $this->quantity;
    }

    public function setQuantity(string $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
    }

    public function isVisibility(): ?bool
    {
        return $this->visibility;
    }

    public function setVisibility(bool $visibility): self
    {
        $this->visibility = $visibility;

        return $this;
    }

    public function getSize(): ?string
    {
        return $this->size;
    }

    public function setSize(string $size): self
    {
        $this->size = $size;

        return $this;
    }

    public function getColor(): ?string
    {
        return $this->color;
    }

    public function setColor(string $color): self
    {
        $this->color = $color;

        return $this;
    }

    public function getBrand(): ?string
    {
        return $this->brand;
    }

    public function setBrand(string $brand): self
    {
        $this->brand = $brand;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getThumbnails(): array
    {
        return $this->thumbnails;
    }

    public function setThumbnails(array $thumbnails): self
    {
        $this->thumbnails = $thumbnails;

        return $this;
    }

    public function getOwner(): ?User
    {
        return $this->owner;
    }

    public function setOwner(?User $owner): self
    {
        $this->owner = $owner;

        return $this;
    }

    public function setAll(array $entity): Item
    {
        $this->setName( $entity['name'] ?? $this->getName());
        $this->setDescription($entity['description'] ?? $this->getDescription());
        $this->setPrice($entity['price'] ?? $this->getPrice());
        $this->setCategory($entity['category'] ?? $this->getCategory());
        $this->setState($entity['state'] ?? $this->getState());
        $this->setQuantity($entity['quantity'] ?? $this->getQuantity());
        $this->setVisibility($entity['visibility'] ?? $this->isVisibility());
        $this->setSize($entity['size'] ??  $this->getSize());
        $this->setColor($entity['color'] ?? $this->getColor());
        $this->setBrand($entity['brand'] ?? $this->getBrand());
        $this->setType($entity['type'] ?? $this->getType());
        $this->setThumbnails($entity['thumbnails'] ?? $this->getThumbnails());
        $this->setCreatedAt($entity['created_at'] ?? $this->getCreatedAt());
        $this->setUpdatedAt($entity['updated_at'] ?? $this->getUpdatedAt());
        $this->setOwner($entity['owner'] ?? $this->getOwner());

        return $this;
    }

    public function getAll(): array
    {
        $arr = [];

        foreach($this as $key => $item) {
            $arr[$key] = $item;
        }

        return $arr;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeImmutable $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updated_at;
    }

    public function setUpdatedAt(\DateTimeImmutable $updated_at): self
    {
        $this->updated_at = $updated_at;

        return $this;
    }


}
