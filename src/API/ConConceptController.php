<?php

declare(strict_types=1);


namespace App\API;


use App\Repository\ConConceptRepository;
use FOS\RestBundle\Controller\Annotations\RouteResource;
use FOS\RestBundle\View\View;
use FOS\RestBundle\View\ViewHandlerInterface;
use Nelmio\ApiDocBundle\Annotation\Security as ApiSecurity;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Component\HttpFoundation\Response;

/**
 * @RouteResource("concept")
 * @Security("is_granted('IS_AUTHENTICATED_REMEMBERED')")
 */
class ConConceptController extends BaseApiController
{
    /**
     * @var ConConceptRepository
     */
    protected $repository;

    /**
     * @var ViewHandlerInterface
     */
    protected $viewHandler;

    /**
     * @param ViewHandlerInterface $viewHandler
     * @param ConConceptRepository $repository
     */
    public function __construct(ViewHandlerInterface $viewHandler, ConConceptRepository $repository)
    {
        $this->viewHandler = $viewHandler;
        $this->repository = $repository;
    }

    /**
     * Delete a concept
     * @ApiSecurity(name="apiUser")
     * @ApiSecurity(name="apiToken")
     */
    public function deleteAction(int $id): Response
    {
        $concept = $this->repository->find($id);

        if (null === $concept) {
            throw new NotFoundException();
        }

        $this->repository->deleteConConcept($concept);

        $view = new View(null, Response::HTTP_NO_CONTENT);

        return $this->viewHandler->handle($view);
    }
}
