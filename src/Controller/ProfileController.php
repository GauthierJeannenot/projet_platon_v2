<?php

namespace App\Controller;

use App\Entity\InfosUser;
use App\Entity\User;
use App\Form\ProfileType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProfileController extends AbstractController
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager){
        $this->entityManager = $entityManager;
    }
    /**
     * @Route("/profile", name="app_profile")
     */

    public function index(Request $request): Response
    {
        $InfosUser = new InfosUser();
        $form = $this->createForm(ProfileType::class, $InfosUser);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()){

            $InfosUser = $form->getData();
            $this->entityManager->persist($InfosUser);
            $this->entityManager->flush();
        }

        return $this->render('profile/index.html.twig',
        
        [
            'form' => $form->createView()
        ]);
    }
}
