<?php


namespace App\Repository;

use App\Entity\ConGroupConcept;
use App\Repository\Query\ConGroupConceptQuery;
use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\ORMException;
use Pagerfanta\Adapter\DoctrineORMAdapter;
use Pagerfanta\Pagerfanta;

class ConGroupConceptRepository extends EntityRepository
{
    /**
     * @param ConGroupConcept $ConGroupConcept
     * @throws ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function saveConGroupConcept(ConGroupConcept $ConGroupConcept)
    {
        $entityManager = $this->getEntityManager();
        $entityManager->persist($ConGroupConcept);
        $entityManager->flush();
    }

    /**
     * @param ConGroupConcept $ConGroupConcept
     * @throws ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function deleteConGroupConcept(ConGroupConcept $ConGroupConcept)
    {
        $entityManager = $this->getEntityManager();
        $entityManager->remove($ConGroupConcept);
        $entityManager->flush();
    }

    public function findConGroupConceptById(int $id): ?ConGroupConcept
    {
        return $this->findOneBy(['id' => $id]);
    }

    public function findConGroupConceptByName(string $name): ?ConGroupConcept
    {
        return $this->findOneBy(['name' => $name]);
    }

    /**
     * Returns an array of arrays with each inner array having the structure:
     * @param ConGroupConceptQuery $query
     * @return Pagerfanta
     */
    public function getConGroupConceptCount(ConGroupConceptQuery $query)
    {
        $qb = $this->getEntityManager()->createQueryBuilder();

        $qb->select('t')
            ->from(ConGroupConcept::class, 't');
        $orderBy = $query->getOrderBy();
        $orderBy = 't.' . $orderBy;

        $qb->addOrderBy($orderBy, $query->getOrder());

        if ($query->hasSearchTerm()) {
            $searchTerm = $query->getSearchTerm();
            $searchAnd = $qb->expr()->andX();

            if ($searchTerm->hasSearchTerm()) {
                $searchAnd->add(
                    $qb->expr()->orX(
                        $qb->expr()->like('t.name', ':searchTerm')
                    ),
                    $qb->expr()->orX(
                        $qb->expr()->like('t.description', ':searchTerm')
                    )
                );
                $qb->setParameter('searchTerm', '%' . $searchTerm->getSearchTerm() . '%');
            }

            if ($searchAnd->count() > 0) {
                $qb->andWhere($searchAnd);
            }
        }


        $q = $qb->getQuery();

        $paginator = new Pagerfanta(new DoctrineORMAdapter($q, false));
        $paginator->setMaxPerPage($query->getPageSize());
        $paginator->setCurrentPage($query->getPage());

        return $paginator;
    }

    /**
     * @param ConGroupConcept[] $conGroupConcept
     * @throws \Exception
     */
    public function multiDelete(iterable $conGroupConcept): void
    {
        $em = $this->getEntityManager();
        $em->beginTransaction();

        try {
            foreach ($conGroupConcept as $ConGroupConcept) {
                $em->remove($ConGroupConcept);
            }
            $em->flush();
            $em->commit();
        } catch (\Exception $ex) {
            $em->rollback();
            throw $ex;
        }
    }
}
