<?php


namespace App\Repository;

use App\Entity\ConCity;
use Doctrine\ORM\EntityRepository;

class ConCityRepository extends EntityRepository
{
    public function findConCityById(int $idCity): ?ConCity
    {
        return $this->findOneBy(['id' => $idCity]);
    }

    public function listConCities(): array
    {
        return $this->findAll();
    }
}
