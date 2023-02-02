<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{
    private UserPasswordHasherInterface $hasher;

    public function __construct(UserPasswordHasherInterface $hasher)
    {
        $this->hasher = $hasher;
    }

    public function load(ObjectManager $manager): void
    {
        foreach($this->getData() as $data) {
            $user = new User();

            $user->setEmail($data['email']);
            $user->setFirstname($data['firstname']);
            $user->setLastname($data['lastname']);
            $user->setDateOfBirth($data['dob']);
            $user->setStreet($data['street']);
            $user->setStreetNumber($data['number']);
            $user->setCity($data['city']);
            $user->setPostalCode($data['pc']);
            $user->setPassword($this->hasher->hashPassword($user, $data['password']));

            $manager->persist($user);
        }
        $manager->flush();
    }

    /**
     * @throws \Exception
     */
    public function getData(): array
    {
        return [
            0 => [
                'email' => 'test@test.pl',
                'firstname' => 'John',
                'lastname' => 'Smith',
                'dob' => new \DateTimeImmutable('now'),
                'street' => 'Street',
                'number' => random_int(0, 100),
                'city' => 'City',
                'pc' => '02032',
                'password' => 'test123',
            ],
            1 => [
                'email' => 'test1@test.pl',
                'firstname' => 'Bryan',
                'lastname' => 'Kovalsky',
                'dob' => new \DateTimeImmutable('now'),
                'street' => 'Street',
                'number' => random_int(0, 100),
                'city' => 'City',
                'pc' => '02032',
                'password' => 'test123',
            ],
            2 => [
                'email' => 'test2@test.pl',
                'firstname' => 'Will',
                'lastname' => 'Test',
                'dob' => new \DateTimeImmutable('now'),
                'street' => 'Street',
                'number' => random_int(0, 100),
                'city' => 'City',
                'pc' => '02032',
                'password' => 'test123',
            ]
        ];
    }

    public static function getExampleUser(): User
    {
        $user = new User();

        $user->setEmail('test@test.pl');
        $user->setFirstname('John');
        $user->setLastname('Smith');
        $user->setDateOfBirth(new \DateTimeImmutable('now'));
        $user->setStreet('Street');
        $user->setStreetNumber(random_int(0, 100));
        $user->setCity('City');
        $user->setPostalCode('02032');
        $user->setPassword('');

        return $user;
    }
}
