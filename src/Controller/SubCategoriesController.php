<?php

namespace App\Controller;

use App\Entity\Catalogue;
use App\Entity\SubCategories;
use App\Entity\User;
use App\Form\SubCategoriesType;
use App\Repository\SubCategoriesRepository;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/sub/categories")
 */
class SubCategoriesController extends AbstractController
{
    /**
     * @Route("/", name="app_sub_categories_index", methods={"GET"})
     */
    public function index(SubCategoriesRepository $subCategoriesRepository): Response
    {
        return $this->render('sub_categories/index.html.twig', [
            'sub_categories' => $subCategoriesRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="app_sub_categories_new", methods={"GET", "POST"})
     */
    public function new(Request $request, SubCategoriesRepository $subCategoriesRepository): Response
    {
        $subCategory = new SubCategories();
        $form = $this->createForm(SubCategoriesType::class, $subCategory);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $subCategoriesRepository->add($subCategory);
            return $this->redirectToRoute('app_sub_categories_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('sub_categories/new.html.twig', [
            'sub_category' => $subCategory,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="app_sub_categories_show", methods={"GET"})
     */
    public function show(SubCategories $subCategory, SubCategoriesRepository $subCategoriesRepository): Response
    {
        // Ici on pratique une méthode barbare, le fait que notre nav soit positionnée dans le layout ne nous arrange pas
        // Pour mieux faire il faudrait se diriger vers une injection de controller avec un controller qui géree une view de la nav que l'on injecterait par la suite avec renderController dans le twig
        $subCategories = $subCategoriesRepository->findAll();

        return $this->render('sub_categories/show.html.twig', [
            'sub_category' => $subCategory,
            'subCategories' => $subCategories
        ]);
    }

    /**
     * @Route("/{id}/edit", name="app_sub_categories_edit", methods={"GET", "POST"})
     */
    public function edit(Request $request, SubCategories $subCategory, SubCategoriesRepository $subCategoriesRepository): Response
    {
        $form = $this->createForm(SubCategoriesType::class, $subCategory);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $subCategoriesRepository->add($subCategory);
            return $this->redirectToRoute('app_sub_categories_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('sub_categories/edit.html.twig', [
            'sub_category' => $subCategory,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="app_sub_categories_delete", methods={"POST"})
     */
    public function delete(Request $request, SubCategories $subCategory, SubCategoriesRepository $subCategoriesRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$subCategory->getId(), $request->request->get('_token'))) {
            $subCategoriesRepository->remove($subCategory);
        }

        return $this->redirectToRoute('app_sub_categories_index', [], Response::HTTP_SEE_OTHER);
    }
}
