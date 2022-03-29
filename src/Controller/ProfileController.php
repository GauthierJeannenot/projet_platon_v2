<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\InfosUser;
use App\Form\ProfileType;
use App\Repository\SubCategoriesRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProfileController extends AbstractController
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }
    /**
     * @Route("/profile", name="app_profile")
     */

    public function index(Request $request, SubCategoriesRepository $subCategoriesRepository): Response
    {
        $subCategories = $subCategoriesRepository->findAll();
        $InfosUser = new InfosUser();
        // $InfosUser = $this->getUser()->getInfosUser();
        //  if (!$InfosUser) {
        //      $InfosUser = new InfosUser();
        //  }


        $form = $this->createForm(ProfileType::class, $InfosUser);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $InfosUser = $form->getData();
            $this->getUser()->setInfosUser($InfosUser);
            $this->entityManager->persist($InfosUser);
            $this->entityManager->flush();
            return $this->redirectToRoute("platon_main_home");
        }

        return $this->render(
            'profile/index.html.twig',

            [
                'subCategories' => $subCategories,
                'form' => $form->createView()
            ]
        );
    }
}
