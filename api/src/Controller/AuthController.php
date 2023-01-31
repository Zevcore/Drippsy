<?php
declare(strict_types=1);

namespace App\Controller;

use App\Entity\ApiToken;
use App\Entity\User;
use App\Repository\ApiTokenRepository;
use App\Repository\UserRepository;
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
    #[Route('/api/auth/register', name: 'app_auth_register', methods: ['POST'])]
    public function register(Request $request, UserRepository $userRepository, UserPasswordHasherInterface $userPasswordHasher, ManagerRegistry $doctrine): JsonResponse
    {
        // Check if user exists
        if($userRepository->findOneBy(['email' => $request->get('email')])) {
            return $this->json([
                'message' => sprintf('User with email %s already exists!', $request->get('email')),
                'code' => Response::HTTP_CONFLICT
            ]);
        }
        
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

        $entityManager->persist($user);
        $entityManager->flush();
        
        return $this->json([
            'message' => 'User added successfully!',
            'code' => Response::HTTP_CREATED
        ]);
    }

    #[Route('/api/auth/login', name: 'app_auth_login', methods: ['POST'])]
    public function login(Request $request,
                          UserRepository $userRepository, 
                          UserPasswordHasherInterface $userPasswordHasher,
                          ManagerRegistry $doctrine,
                          ApiTokenRepository $apiTokenRepository
    ): JsonResponse
    {
        $userData = [
            'email' => $request->get('email'),
            'password' => $request->get('password')
        ];
        
        // Get user
        $user = $userRepository->findOneBy(['email' => $userData['email']]);
        
        // Check if user exists
        if($user === null) {
            $message = sprintf("User with email %s does not exist!", $request->get('email'));
            
            return $this->json([
                'message' => $message,
                'code' => Response::HTTP_NOT_FOUND
            ]);
        }
        
        // Check if password is valid
        if(!$userPasswordHasher->isPasswordValid($user, $userData['password'])) {
            $message = sprintf("Password for email %s is invalid!", $userData['email']);

            return $this->json([
                'message' => $message,
                'code' => Response::HTTP_UNAUTHORIZED
            ]);
        }
        
        $entityManager = $doctrine->getManager();
        
        // Remove old token if exists
        $oldToken = $apiTokenRepository->findOneBy(['user' => $user]);
        if($oldToken !== null) {
            $entityManager->remove($oldToken);
            $entityManager->flush();
        }
        
        // Generate token
        $token = $this->generateToken($user);

        // Add token to db
        $entityManager->persist($token);
        $entityManager->flush();

        return $this->json([
            'token' => $token->getToken(),
            'code' => Response::HTTP_OK
        ]);
    }

    /**
     * @throws Exception
     */
    protected function prepareDateOfBirth(string $date): DateTimeImmutable
    {
        return new DateTimeImmutable($date);
    }

    /**
     * @throws Exception
     */
    protected function generateToken(User $user)
    {
        $token = new ApiToken();
        $token->setUser($user);
        $token->setToken(base64_encode($user->getEmail() . bin2hex(random_bytes(20))));
        
        return $token;
    }
}
