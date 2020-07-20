<?php

namespace App\Controller;

use App\Entity\ConCurrentYear;
use App\Form\MultiUpdate\MultiUpdateTable;
use App\Form\MultiUpdate\MultiUpdateTableDTO;
use App\Form\ConCurrentYearEditForm;
use App\Form\Toolbar\ConCurrentYearToolbarForm;
use App\Repository\Query\ConCurrentYearQuery;
use App\Repository\ConCurrentYearRepository;
use Doctrine\ORM\ORMException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route(path="/admin/current-years")
 * @Security("is_granted('view_current_year')")
 */
class ConCurrentYearController extends AbstractController
{
    /**
     * @Route(path="/", defaults={"page": 1}, name="current-years", methods={"GET"})
     * @Route(path="/page/{page}", requirements={"page": "[1-9]\d*"}, name="current_year_paginated", methods={"GET"})
     *
     * @param ConCurrentYearRepository $repository
     * @param Request $request
     * @param int $page
     * @return Response
     */
    public function listConCurrentYears(ConCurrentYearRepository $repository, Request $request, $page)
    {
        $query = new ConCurrentYearQuery();
        $query->setPage($page);

        $form = $this->getToolbarForm($query);
        $form->setData($query);
        $form->submit($request->query->all(), false);

        if (!$form->isValid()) {
            $query->resetByFormError($form->getErrors());
        }

        $currentYears = $repository->getConCurrentYearCount($query);

        return $this->render('current-year/index.html.twig', [
            'currentYears' => $currentYears,
            'query' => $query,
            'toolbarForm' => $form->createView(),
            'multiUpdateForm' => $this->getMultiUpdateForm($repository)->createView(),
        ]);
    }

    /**
     * @Route(path="/{id}/edit", name="current_years_edit", methods={"GET", "POST"})
     * @Security("is_granted('manage_current_year')")
     */
    public function editAction(ConCurrentYear $conCurrentYear, ConCurrentYearRepository $repository, Request $request)
    {
        $editForm = $this->createForm(ConCurrentYearEditForm::class, $conCurrentYear, [
            'action' => $this->generateUrl('current_years_edit', ['id' => $conCurrentYear->getId()]),
            'method' => 'POST',
        ]);

        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            try {
                $repository->saveConCurrentYear($conCurrentYear);
                $this->flashSuccess('action.update.success');

                return $this->redirectToRoute('current-years');
            } catch (ORMException $ex) {
                $this->flashError('action.update.error', ['%reason%' => $ex->getMessage()]);
            }
        }

        return $this->render('current-year/edit.html.twig', [
            'currentYear' => $conCurrentYear,
            'form' => $editForm->createView()
        ]);
    }

    /**
     * @Route(path="/create", name="current_years_create", methods={"GET", "POST"})
     * @Security("is_granted('manage_current_year')")
     */
    public function createAction(ConCurrentYearRepository $repository, Request $request)
    {
        $conCurrentYear = new ConCurrentYear();

        $editForm = $this->createForm(ConCurrentYearEditForm::class, $conCurrentYear, [
            'action' => $this->generateUrl('current_years_create'),
            'method' => 'POST',
        ]);

        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            try {
                $repository->saveConCurrentYear($conCurrentYear);
                $this->flashSuccess('action.update.success');

                return $this->redirectToRoute('current-years');
            } catch (ORMException $ex) {
                $this->flashError('action.update.error', ['%reason%' => $ex->getMessage()]);
            }
        }

        return $this->render('current-year/edit.html.twig', [
            'currentYear' => $conCurrentYear,
            'form' => $editForm->createView()
        ]);
    }

    /**
     * @Route(path="/multi-delete", name="current_year_multi_delete", methods={"POST"})
     * @Security("is_granted('delete_current_year')")
     */
    public function multiDelete(ConCurrentYearRepository $repository, Request $request)
    {
        $form = $this->getMultiUpdateForm($repository);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            try {
                /** @var MultiUpdateTableDTO $dto */
                $dto = $form->getData();
                $repository->multiDelete($dto->getEntities());
                $this->flashSuccess('action.delete.success');
            } catch (\Exception $ex) {
                $this->flashError('action.delete.error', ['%reason%' => $ex->getMessage()]);
            }
        }

        return $this->redirectToRoute('current-years');
    }

    protected function getMultiUpdateForm(ConCurrentYearRepository $repository): FormInterface
    {
        $dto = new MultiUpdateTableDTO();
        $dto->addDelete($this->generateUrl('current_year_multi_delete'));

        return $this->createForm(MultiUpdateTable::class, $dto, [
            'action' => $this->generateUrl('current-years'),
            'repository' => $repository,
            'method' => 'POST',
        ]);
    }

    /**
     * @param ConCurrentYearQuery $query
     * @return \Symfony\Component\Form\FormInterface
     */
    protected function getToolbarForm(ConCurrentYearQuery $query)
    {
        return $this->createForm(ConCurrentYearToolbarForm::class, $query, [
            'action' => $this->generateUrl('current-years', [
                'page' => $query->getPage(),
            ]),
            'method' => 'GET',
        ]);
    }
}
