<?php


namespace App\Repository;

use App\Entity\ConDocumentType;
use Doctrine\ORM\EntityRepository;

class ConDocumentTypeRepository extends EntityRepository
{
    public function findConDocumentTypeById(int $idDocumentType): ?ConDocumentType
    {
        return $this->findOneBy(['id' => $idDocumentType]);
    }

    public function listConDocumentTypes(): array
    {
        return $this->findAll();
    }
}
