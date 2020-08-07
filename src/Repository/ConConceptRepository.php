<?php


namespace App\Repository;

use App\Entity\ConConcept;
use App\Repository\Query\ConConceptQuery;
use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\ORMException;
use Pagerfanta\Adapter\DoctrineORMAdapter;
use Pagerfanta\Pagerfanta;

class ConConceptRepository extends EntityRepository
{
    /**
     * @param ConConcept $ConConcept
     * @throws ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function saveConConcept(ConConcept $ConConcept)
    {
        $entityManager = $this->getEntityManager();
        $entityManager->persist($ConConcept);
        $entityManager->flush();
    }

    /**
     * @param ConConcept $ConConcept
     * @throws ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function deleteConConcept(ConConcept $ConConcept)
    {
        $entityManager = $this->getEntityManager();
        $entityManager->remove($ConConcept);
        $entityManager->flush();
    }

    public function findConConceptByName(string $name): ?ConConcept
    {
        return $this->findOneBy(['name' => $name]);
    }


    /**
     * Returns an array of arrays with each inner array having the structure:
     * @param ConConceptQuery $query
     * @return Pagerfanta
     */
    public function getConConceptCount(ConConceptQuery $query)
    {
        $qb = $this->getEntityManager()->createQueryBuilder();

        $qb->select('t')
            ->from(ConConcept::class, 't');
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
     * @param ConConcept[] $concepts
     * @throws \Exception
     */
    public function multiDelete(iterable $concepts): void
    {
        $em = $this->getEntityManager();
        $em->beginTransaction();

        try {
            foreach ($concepts as $ConConcept) {
                $em->remove($ConConcept);
            }
            $em->flush();
            $em->commit();
        } catch (\Exception $ex) {
            $em->rollback();
            throw $ex;
        }
    }
}
