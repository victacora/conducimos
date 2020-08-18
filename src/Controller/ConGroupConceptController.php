<?php

namespace App\Controller;

use App\Entity\ConGroupConcept;
use App\Form\MultiUpdate\MultiUpdateTable;
use App\Form\MultiUpdate\MultiUpdateTableDTO;
use App\Form\ConGroupConceptEditForm;
use App\Form\Toolbar\ConGroupConceptToolbarForm;
use App\Repository\Query\ConGroupConceptQuery;
use App\Repository\ConGroupConceptRepository;
use Doctrine\ORM\ORMException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Exception;

/**
 * @Route(path="/admin/group_concept")
 * @Security("is_granted('view_group_concepts')")
 */
class ConGroupConceptController extends AbstractController
{
    /**
     * @Route(path="/", defaults={"page": 1}, name="group-concepts", methods={"GET"})
     * @Route(path="/page/{page}", requirements={"page": "[1-9]\d*"}, name="group_concept_paginated", methods={"GET"})
     *
     * @param ConGroupConceptRepository $repository
     * @param Request $request
     * @param int $page
     * @return Response
     */
    public function listConGroupConcepts(ConGroupConceptRepository $repository, Request $request, $page)
    {
        $query = new ConGroupConceptQuery();
        $query->setPage($page);

        $form = $this->getToolbarForm($query);
        $form->setData($query);
        $form->submit($request->query->all(), false);

        if (!$form->isValid()) {
            $query->resetByFormError($form->getErrors());
        }

        $currentGroupConcepts = $repository->getConGroupConceptCount($query);

        return $this->render('concept-group/index.html.twig', [
            'currentGroupConcepts' => $currentGroupConcepts,
            'query' => $query,
            'toolbarForm' => $form->createView(),
            'multiUpdateForm' => $this->getMultiUpdateForm($repository)->createView(),
        ]);
    }

    /**
     * @Route(path="/{id}/edit", name="group_concepts_edit", methods={"GET", "POST"})
     * @Security("is_granted('manage_group_concepts')")
     */
    public function editAction(ConGroupConcept $ConGroupConcept, ConGroupConceptRepository $repository, Request $request)
    {
        $editForm = $this->createForm(ConGroupConceptEditForm::class, $ConGroupConcept, [
            'action' => $this->generateUrl('group_concepts_edit', ['id' => $ConGroupConcept->getId()]),
            'method' => 'POST',
        ]);

        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            try {

                $this->validateName($ConGroupConcept, $repository);
                $repository->saveConGroupConcept($ConGroupConcept);
                $this->flashSuccess('action.update.success');

                return $this->redirectToRoute('concepts');
            } catch (ORMException $ex) {
                $this->flashError('action.update.error', ['%reason%' => $ex->getMessage()]);
            } catch (Exception $ex) {
                $this->flashError('action.update.error', ['%reason%' => $ex->getMessage()]);
            }
        }

        return $this->render('concept-group/edit.html.twig', [
            'currentGroupConcept' => $ConGroupConcept,
            'form' => $editForm->createView()
        ]);
    }

    public function validateName(ConGroupConcept $ConGroupConcept, ConGroupConceptRepository $repository)
    {
        $ConGroupConceptName = $repository->findConGroupConceptByName($ConGroupConcept->getName());
        if (isset($ConGroupConceptName) && strcmp($ConGroupConcept->getName(), $ConGroupConceptName->getName()) == 0 && $ConGroupConcept->getId() !== $ConGroupConceptName->getId()) {
            throw new Exception('Ya existe un tarifario con el nombre ingresado. ' . $ConGroupConceptName->getName() . '. Por favor ingrese otro. ');
        }
    }


    /**
     * @Route(path="/create", name="group_concepts_create", methods={"GET", "POST"})
     * @Security("is_granted('manage_group_concepts')")
     */
    public function createAction(ConGroupConceptRepository $repository, Request $request)
    {
        $conGroupConcept = new ConGroupConcept();

        $editForm = $this->createForm(ConGroupConceptEditForm::class, $conGroupConcept, [
            'action' => $this->generateUrl('group_concepts_create'),
            'method' => 'POST',
        ]);

        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            try {

                $this->validateName($conGroupConcept, $repository);
                $repository->saveConGroupConcept($conGroupConcept);
                $this->flashSuccess('action.update.success');

                return $this->redirectToRoute('concepts');
            } catch (ORMException $ex) {
                $this->flashError('action.update.error', ['%reason%' => $ex->getMessage()]);
            } catch (Exception $ex) {
                $this->flashError('action.update.error', ['%reason%' => $ex->getMessage()]);
            }
        }

        return $this->render('concept-group/edit.html.twig', [
            'currentGroupConcept' => $conGroupConcept,
            'form' => $editForm->createView()
        ]);
    }

    /**
     * @Route(path="/multi-delete", name="group_concepts_multi_delete", methods={"POST"})
     * @Security("is_granted('delete_group_concepts')")
     */
    public function multiDelete(ConGroupConceptRepository $repository, Request $request)
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

        return $this->redirectToRoute('group-concepts');
    }

    protected function getMultiUpdateForm(ConGroupConceptRepository $repository): FormInterface
    {
        $dto = new MultiUpdateTableDTO();
        $dto->addDelete($this->generateUrl('group_concepts_multi_delete'));

        return $this->createForm(MultiUpdateTable::class, $dto, [
            'action' => $this->generateUrl('group-concepts'),
            'repository' => $repository,
            'method' => 'POST',
        ]);
    }

    /**
     * @param ConGroupConceptQuery $query
     * @return \Symfony\Component\Form\FormInterface
     */
    protected function getToolbarForm(ConGroupConceptQuery $query)
    {
        return $this->createForm(ConGroupConceptToolbarForm::class, $query, [
            'action' => $this->generateUrl('group-concepts', [
                'page' => $query->getPage(),
            ]),
            'method' => 'GET',
        ]);
    }
}
