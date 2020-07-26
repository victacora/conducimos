<?php


namespace App\Repository;

use App\Entity\ConState;
use Doctrine\ORM\EntityRepository;

class ConStateRepository extends EntityRepository
{
    public function findConStateById(int $idState): ?ConState
    {
        return $this->findOneBy(['id' => $idState]);
    }

    public function listConStates(): array
    {
        return $this->findAll();
    }
}
