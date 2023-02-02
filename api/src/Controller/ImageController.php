<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

class ImageController extends AbstractController
{
    #[Route('/api/item/image/get', name: 'app_item_image', methods: ['GET'])]
    public function getItemImage(Request $request): void
    {
        // example source:
        // storage/[user_id]/[item_id]/1.png
        if($request->get('source')) {
            header("Content-Type: " . "image/png");
            readfile($request->get('source'));
        }
    }
}