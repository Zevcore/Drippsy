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
    public function create(Request $request, ItemRepository $itemRepository, UserRepository $userRepository): JsonResponse
    {
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
            'owner' => $userRepository->findOneBy(['email' => $request->get("owner")]),
        ]);

        return $this->json([
            'message' => 'Item added successfully!',
            'code' => Response::HTTP_CREATED
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

    #[Route('/api/item/show', name: 'app_item_show', methods: ['POST'])]
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

    #[Route('/api/item/showByIds', name: 'app_item_showByIds', methods: ['POST'])]
    public function showByIds(Request $request, ItemRepository $itemRepository): JsonResponse
    {
        if($request->get('amount')) {
            //$item = $itemRepository->findOneBy(['id' => $request->get('id')]);

            dd($itemRepository->findById('1'));

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
}
