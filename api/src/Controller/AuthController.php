<?php
declare(strict_types=1);

namespace App\Controller;

use App\Entity\User;
use DateTimeImmutable;
use Doctrine\Persistence\ManagerRegistry;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;

class AuthController extends AbstractController
{
    /**
     * @throws Exception
     */
    #[Route('/api/register', name: 'app_auth', methods: ['POST'])]
    public function register(Request $request, UserPasswordHasherInterface $userPasswordHasher, ManagerRegistry $doctrine): JsonResponse
    {
        // TODO: 
        // - check if user already exists
        // - validate request
        
        $entityManager = $doctrine->getManager();
        $user = new User();
        
        $user->setEmail($request->get('email'));
        $user->setFirstname($request->get('firstname'));
        $user->setLastname($request->get('lastname'));
        $user->setPassword($userPasswordHasher->hashPassword($user, $request->get('password')));
        $user->setDateOfBirth($this->prepareDateOfBirth($request->get('date_of_birth')));
        $user->setStreet($request->get('street'));
        $user->setStreetNumber($request->get('street_number'));
        $user->setCity($request->get('city'));
        $user->setPostalCode($request->get('postal_code'));
        
        $user->setRoles('ROLE_USER');
        $entityManager->persist($user);
        $entityManager->flush();
        
        return $this->json([
            'message' => 'User added successfully!',
            'code' => Response::HTTP_CREATED
        ]);
    }

    /**
     * @throws Exception
     */
    protected function prepareDateOfBirth(string $date): DateTimeImmutable
    {
        return new DateTimeImmutable($date);
    }
}
