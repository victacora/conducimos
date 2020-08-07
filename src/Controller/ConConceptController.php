<?php

namespace App\Controller;

use App\Entity\ConConcept;
use App\Form\MultiUpdate\MultiUpdateTable;
use App\Form\MultiUpdate\MultiUpdateTableDTO;
use App\Form\ConConceptEditForm;
use App\Form\Toolbar\ConConceptToolbarForm;
use App\Repository\Query\ConConceptQuery;
use App\Repository\ConConceptRepository;
use Doctrine\ORM\ORMException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Exception;

/**
 * @Route(path="/admin/concepts")
 * @Security("is_granted('view_concepts')")
 */
class ConConceptController extends AbstractController
{
    /**
     * @Route(path="/", defaults={"page": 1}, name="concepts", methods={"GET"})
     * @Route(path="/page/{page}", requirements={"page": "[1-9]\d*"}, name="concept_paginated", methods={"GET"})
     *
     * @param ConConceptRepository $repository
     * @param Request $request
     * @param int $page
     * @return Response
     */
    public function listConConcepts(ConConceptRepository $repository, Request $request, $page)
    {
        $query = new ConConceptQuery();
        $query->setPage($page);

        $form = $this->getToolbarForm($query);
        $form->setData($query);
        $form->submit($request->query->all(), false);

        if (!$form->isValid()) {
            $query->resetByFormError($form->getErrors());
        }

        $currentConcepts = $repository->getConConceptCount($query);

        return $this->render('concept/index.html.twig', [
            'currentConcepts' => $currentConcepts,
            'query' => $query,
            'toolbarForm' => $form->createView(),
            'multiUpdateForm' => $this->getMultiUpdateForm($repository)->createView(),
        ]);
    }

    /**
     * @Route(path="/{id}/edit", name="concepts_edit", methods={"GET", "POST"})
     * @Security("is_granted('manage_concepts')")
     */
    public function editAction(ConConcept $ConConcept, ConConceptRepository $repository, Request $request)
    {
        $editForm = $this->createForm(ConConceptEditForm::class, $ConConcept, [
            'action' => $this->generateUrl('concepts_edit', ['id' => $ConConcept->getId()]),
            'method' => 'POST',
        ]);

        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            try {

                $this->validateName($ConConcept, $repository);
                $repository->saveConConcept($ConConcept);
                $this->flashSuccess('action.update.success');

                return $this->redirectToRoute('concepts');
            } catch (ORMException $ex) {
                $this->flashError('action.update.error', ['%reason%' => $ex->getMessage()]);
            } catch (Exception $ex) {
                $this->flashError('action.update.error', ['%reason%' => $ex->getMessage()]);
            }
        }

        return $this->render('concept/edit.html.twig', [
            'currentConcept' => $ConConcept,
            'form' => $editForm->createView()
        ]);
    }

    public function validateName(ConConcept $ConConcept, ConConceptRepository $repository)
    {
        $ConConceptName = $repository->findConConceptByName($ConConcept->getName());
        if (isset($ConConceptName) && strcmp($ConConcept->getName(), $ConConceptName->getName()) == 0 && $ConConcept->getId() !== $ConConceptName->getId()) {
            throw new Exception('Ya existe un concepto con el nombre ingresado. ' . $ConConceptName->getName() . '. Por favor ingrese otro. ');
        }
    }


    /**
     * @Route(path="/create", name="concepts_create", methods={"GET", "POST"})
     * @Security("is_granted('manage_concepts')")
     */
    public function createAction(ConConceptRepository $repository, Request $request)
    {
        $ConConcept = new ConConcept();

        $editForm = $this->createForm(ConConceptEditForm::class, $ConConcept, [
            'action' => $this->generateUrl('concepts_create'),
            'method' => 'POST',
        ]);

        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            try {

                $this->validateName($ConConcept, $repository);
                $repository->saveConConcept($ConConcept);
                $this->flashSuccess('action.update.success');

                return $this->redirectToRoute('concepts');
            } catch (ORMException $ex) {
                $this->flashError('action.update.error', ['%reason%' => $ex->getMessage()]);
            } catch (Exception $ex) {
                $this->flashError('action.update.error', ['%reason%' => $ex->getMessage()]);
            }
        }

        return $this->render('concept/edit.html.twig', [
            'currentConcept' => $ConConcept,
            'form' => $editForm->createView()
        ]);
    }

    /**
     * @Route(path="/multi-delete", name="concepts_multi_delete", methods={"POST"})
     * @Security("is_granted('delete_concepts')")
     */
    public function multiDelete(ConConceptRepository $repository, Request $request)
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

        return $this->redirectToRoute('concepts');
    }

    protected function getMultiUpdateForm(ConConceptRepository $repository): FormInterface
    {
        $dto = new MultiUpdateTableDTO();
        $dto->addDelete($this->generateUrl('concepts_multi_delete'));

        return $this->createForm(MultiUpdateTable::class, $dto, [
            'action' => $this->generateUrl('concepts'),
            'repository' => $repository,
            'method' => 'POST',
        ]);
    }

    /**
     * @param ConConceptQuery $query
     * @return \Symfony\Component\Form\FormInterface
     */
    protected function getToolbarForm(ConConceptQuery $query)
    {
        return $this->createForm(ConConceptToolbarForm::class, $query, [
            'action' => $this->generateUrl('concepts', [
                'page' => $query->getPage(),
            ]),
            'method' => 'GET',
        ]);
    }
}
