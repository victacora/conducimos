<?php


namespace App\Repository;

use App\Entity\ConGroupConceptConcepts;
use App\Repository\Query\ConGroupConceptQuery;
use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\ORMException;
use Pagerfanta\Adapter\DoctrineORMAdapter;
use Pagerfanta\Pagerfanta;

class ConGroupConceptConceptsRepository extends EntityRepository
{
    /**
     * @param ConGroupConceptConcepts $ConGroupConceptConcepts
     * @throws ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function saveConGroupConcept(ConGroupConceptConcepts $ConGroupConceptConcepts)
    {
        $entityManager = $this->getEntityManager();
        $entityManager->persist($ConGroupConceptConcepts);
        $entityManager->flush();
    }

    /**
     * @param ConGroupConceptConcepts $ConGroupConceptConcepts
     * @throws ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function deleteConGroupConcept(ConGroupConceptConcepts $ConGroupConceptConcepts)
    {
        $entityManager = $this->getEntityManager();
        $entityManager->remove($ConGroupConceptConcepts);
        $entityManager->flush();
    }

    public function findConGroupConceptByName(int $id): ?ConGroupConceptConcepts
    {
        return $this->findOneBy(['id' => $id]);
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
            ->from(ConGroupConceptConcepts::class, 't');
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
     * @param ConGroupConceptConcepts[] $conGroupConceptConcepts
     * @throws \Exception
     */
    public function multiDelete(iterable $conGroupConceptConcepts): void
    {
        $em = $this->getEntityManager();
        $em->beginTransaction();

        try {
            foreach ($conGroupConceptConcepts as $ConGroupConceptConcepts) {
                $em->remove($ConGroupConceptConcepts);
            }
            $em->flush();
            $em->commit();
        } catch (\Exception $ex) {
            $em->rollback();
            throw $ex;
        }
    }
}
