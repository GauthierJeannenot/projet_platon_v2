<?php

namespace App\Controller;

use App\Repository\SubCategoriesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HowToController extends AbstractController
{
    /**
     * @Route("/how/to", name="app_how_to")
     */
    public function index(SubCategoriesRepository $subCategoriesRepository): Response
    {
        $subCategories = $subCategoriesRepository->findAll();
        return $this->render('how_to/index.html.twig', [
            'controller_name' => 'HowToController',
            'subCategories' => $subCategories
        ]);
    }
}
