<?php
declare(strict_types=1);

namespace App\Controller;

use App\Entity\Item;
use App\Enums\Categories;
use App\Enums\State;
use App\Repository\ItemRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ItemController extends AbstractController
{
    #[Route('/api/item/create', name: 'app_item_create', methods: ['POST'])]
    public function create(Request $request, ItemRepository $itemRepository, UserRepository $userRepository): JsonResponse
    {
        $owner = $userRepository->findOneBy(['email' => $request->get("owner")]);
        if($owner) {
            $date = new \DateTimeImmutable('now');

            $itemRepository->createEntity([
                'name' => $request->get('name'),
                'description' => $request->get("description"),
                'price' => $request->get('price'),
                'category' => Categories::getCategory($request->get("category")),
                'state' => State::getState($request->get("state")),
                'quantity' => $request->get('quantity'),
                'visibility' => true,
                'size' => $request->get('size'),
                'color' => $request->get('color'),
                'brand' => $request->get('brand'),
                'type' => $request->get('type'),
                'thumbnails' => [],
                'owner' => $owner,
                'created_at' => $date,
                'updated_at' => $date
            ]);

            $item = $itemRepository->findOneBy(['created_at' => $date]);
            if($item) {
                $itemRepository->updateEntity($item->getId(), $this->getItemsImageSource($request->files->get('files'), $owner->getId(), $item->getId()));

                return $this->json([
                    'message' => "Item created successfully!",
                    'code' => Response::HTTP_CREATED
                ]);
            }
        }

        return $this->json([
            'message' => "User does not exist!",
            'code' => Response::HTTP_BAD_REQUEST
        ]);
    }

    #[Route('/api/item/update', name: 'app_item_update', methods: ['POST'])]
    public function update(Request $request, ItemRepository $itemRepository): JsonResponse
    {
        $id = $request->get('id');
        if($itemRepository->updateEntity($id, $request->request->all())) {
            return $this->json([
                'message' => 'Item updated successfully!',
                'code' => Response::HTTP_ACCEPTED,
            ]);
        }

        return $this->json([
            'message' => 'Item can not be updated!',
            'code' => Response::HTTP_NOT_MODIFIED,
        ]);

    }

    #[Route('/api/item/delete', name: 'app_item_delete', methods: ['POST'])]
    public function delete(Request $request, ItemRepository $itemRepository): JsonResponse
    {
        $item = $itemRepository->findOneBy(['id' => $request->get('id')]);
        if($item) {
            $itemRepository->remove($item, true);

            return $this->json([
                'message' => 'Item has been deleted!',
                'code' => Response::HTTP_ACCEPTED,
            ]);
        }

        return $this->json([
            'message' => 'Item do not exist!',
            'code' => Response::HTTP_NOT_FOUND,
        ]);
    }

    #[Route('/api/item/show', name: 'app_item_show', methods: ['GET'])]
    public function show(Request $request, ItemRepository $itemRepository): JsonResponse
    {
        $item = $itemRepository->findOneBy(['id' => $request->get('id')]);

        if($item) {
            return $this->json([
                'item' => $item->getAll(),
                'code' => Response::HTTP_FOUND,
            ]);
        }

        return $this->json([
            'message' => 'Item do not exist!',
            'code' => Response::HTTP_NOT_FOUND,
        ]);
    }

    #[Route('/api/item/showByIds', name: 'app_item_showByIds', methods: ['GET'])]
    public function showByIds(Request $request, ItemRepository $itemRepository): JsonResponse
    {
        $ids = explode(",", $request->get('ids'));

        $items = $itemRepository->findByIds($ids);

        if($items) {
            return $this->json([
                'item' => $items,
                'code' => Response::HTTP_FOUND,
            ]);
        }

        return $this->json([
            'message' => 'Items do not exist!',
            'code' => Response::HTTP_NOT_FOUND,
        ]);
    }

    #[Route('/api/item/showRecentlyAdded', name: 'app_item_showRecentlyAdded', methods: ['GET'])]
    public function showRecentlyAdded(Request $request, ItemRepository $itemRepository): JsonResponse
    {
        $count = $request->get('count');
        if($count) {
            return $this->json([
                'items' => $itemRepository->findRecentlyAdded((int) $count),
                'code' => Response::HTTP_FOUND,
            ]);
        }

        return $this->json([
            'message' => 'Count not provided',
            'code' => Response::HTTP_BAD_REQUEST,
        ]);
    }

    public function getItemsImageSource(array $files, int $ownerId, int $itemId): array
    {
        $filePaths = [];
        foreach($files as $file) {
            $file->move(
                "storage",
                $file->getClientOriginalName()
            );

            $filePaths[] = sprintf("storage/%s/%s/%s", $ownerId, $itemId, $file->getClientOriginalName());
        }

        return  [
            'thumbnails' => $filePaths
        ];
    }
}
