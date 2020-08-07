<?php


namespace App\Repository;

use App\Entity\ConCurrentYear;
use App\Repository\Query\ConCurrentYearQuery;
use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\ORMException;
use Pagerfanta\Adapter\DoctrineORMAdapter;
use Pagerfanta\Pagerfanta;

class ConCurrentYearRepository extends EntityRepository
{
    /**
     * @param ConCurrentYear $conCurrentYear
     * @throws ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function saveConCurrentYear(ConCurrentYear $conCurrentYear)
    {
        $entityManager = $this->getEntityManager();
        $entityManager->persist($conCurrentYear);
        $entityManager->flush();
    }

    /**
     * @param ConCurrentYear $conCurrentYear
     * @throws ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function deleteConCurrentYear(ConCurrentYear $conCurrentYear)
    {
        $entityManager = $this->getEntityManager();
        $entityManager->remove($conCurrentYear);
        $entityManager->flush();
    }

    public function findConCurrentYearByYear(int $year): ?ConCurrentYear
    {
        return $this->findOneBy(['year' => $year]);
    }

    public function findConCurrentYearByStatus(bool $enabled): ?ConCurrentYear
    {
        return $this->findOneBy(['enabled' => $enabled]);
    }

    /**
     * Returns an array of arrays with each inner array having the structure:
     * @param ConCurrentYearQuery $query
     * @return Pagerfanta
     */
    public function getConCurrentYearCount(ConCurrentYearQuery $query)
    {
        $qb = $this->getEntityManager()->createQueryBuilder();

        $qb->select('t')
            ->from(ConCurrentYear::class, 't');
        $orderBy = $query->getOrderBy();
        $orderBy = 't.' . $orderBy;

        $qb->addOrderBy($orderBy, $query->getOrder());

        if ($query->hasSearchTerm()) {
            $searchTerm = $query->getSearchTerm();
            $searchAnd = $qb->expr()->andX();

            if ($searchTerm->hasSearchTerm()) {
                $searchAnd->add(
                    $qb->expr()->orX(
                        $qb->expr()->like('t.year', ':searchTerm')
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
     * @param ConCurrentYear[] $years
     * @throws \Exception
     */
    public function multiDelete(iterable $years): void
    {
        $em = $this->getEntityManager();
        $em->beginTransaction();

        try {
            foreach ($years as $conCurrentYear) {
                $em->remove($conCurrentYear);
            }
            $em->flush();
            $em->commit();
        } catch (\Exception $ex) {
            $em->rollback();
            throw $ex;
        }
    }
}
