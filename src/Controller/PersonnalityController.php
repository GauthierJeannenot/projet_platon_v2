<?php

namespace App\Controller;

use App\Entity\Personnality;
use App\Form\PersonnalityType;
use App\Repository\PersonnalityRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/personnality")
 */
class PersonnalityController extends AbstractController
{
    /**
     * @Route("/", name="app_personnality_index", methods={"GET"})
     */
    public function index(PersonnalityRepository $personnalityRepository): Response
    {
        return $this->render('personnality/index.html.twig', [
            'personnalities' => $personnalityRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="app_personnality_new", methods={"GET", "POST"})
     */
    public function new(Request $request, PersonnalityRepository $personnalityRepository): Response
    {
        $personnality = new Personnality();
        $form = $this->createForm(PersonnalityType::class, $personnality);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $personnalityRepository->add($personnality);
            return $this->redirectToRoute('app_personnality_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('personnality/new.html.twig', [
            'personnality' => $personnality,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="app_personnality_show", methods={"GET"})
     */
    public function show(Personnality $personnality): Response
    {
        return $this->render('personnality/show.html.twig', [
            'personnality' => $personnality,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="app_personnality_edit", methods={"GET", "POST"})
     */
    public function edit(Request $request, Personnality $personnality, PersonnalityRepository $personnalityRepository): Response
    {
        $form = $this->createForm(PersonnalityType::class, $personnality);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $personnalityRepository->add($personnality);
            return $this->redirectToRoute('app_personnality_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('personnality/edit.html.twig', [
            'personnality' => $personnality,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="app_personnality_delete", methods={"POST"})
     */
    public function delete(Request $request, Personnality $personnality, PersonnalityRepository $personnalityRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$personnality->getId(), $request->request->get('_token'))) {
            $personnalityRepository->remove($personnality);
        }

        return $this->redirectToRoute('app_personnality_index', [], Response::HTTP_SEE_OTHER);
    }
}
