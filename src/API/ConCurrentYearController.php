<?php

declare(strict_types=1);


namespace App\API;

use App\Entity\ConCurrentYear;
use App\Form\API\ConCurrentYearApiEditForm;
use App\Repository\ConCurrentYearRepository;
use FOS\RestBundle\Controller\Annotations\RouteResource;
use FOS\RestBundle\View\View;
use FOS\RestBundle\View\ViewHandlerInterface;
use Nelmio\ApiDocBundle\Annotation\Security as ApiSecurity;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Swagger\Annotations as SWG;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

/**
 * @RouteResource("current_year")
 * @Security("is_granted('IS_AUTHENTICATED_REMEMBERED')")
 */
class ConCurrentYearController extends BaseApiController
{
    /**
     * @var ConCurrentYearRepository
     */
    protected $repository;

    /**
     * @var ViewHandlerInterface
     */
    protected $viewHandler;

    /**
     * @param ViewHandlerInterface $viewHandler
     * @param ConCurrentYearRepository $repository
     */
    public function __construct(ViewHandlerInterface $viewHandler, ConCurrentYearRepository $repository)
    {
        $this->viewHandler = $viewHandler;
        $this->repository = $repository;
    }


    /**
     * Creates a new current year
     * @ApiSecurity(name="apiUser")
     * @ApiSecurity(name="apiToken")
     */
    public function postAction(Request $request): Response
    {
        if (!$this->isGranted('manage_current_year')) {
            throw new AccessDeniedHttpException('User cannot create current year');
        }

        $currentYear = new ConCurrentYear();

        $form = $this->createForm(ConCurrentYearApiEditForm::class, $currentYear);

        $form->submit($request->request->all());

        if ($form->isValid()) {
            $this->repository->saveConCurrentYear($currentYear);

            $view = new View($currentYear, 200);
            $view->getContext()->setGroups(['Default', 'Entity', 'ConCurrentYear']);

            return $this->viewHandler->handle($view);
        }

        $view = new View($form);
        $view->getContext()->setGroups(['Default', 'Entity', 'ConCurrentYear']);

        return $this->viewHandler->handle($view);
    }

    /**
     * Delete a current year
     * @ApiSecurity(name="apiUser")
     * @ApiSecurity(name="apiToken")
     */
    public function deleteAction(int $id): Response
    {
        $currentYear = $this->repository->find($id);

        if (null === $currentYear) {
            throw new NotFoundException();
        }

        $this->repository->deleteConCurrentYear($currentYear);

        $view = new View(null, Response::HTTP_NO_CONTENT);

        return $this->viewHandler->handle($view);
    }
}
