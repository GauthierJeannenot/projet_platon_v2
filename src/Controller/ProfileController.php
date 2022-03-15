<?php

namespace App\Controller;

use App\Entity\InfosUser;
use App\Form\ProfileType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProfileController extends AbstractController
{
    /**
     * @Route("/profile", name="app_profile")
     */
    public function index(): Response
    {
        $form = $this->createForm(ProfileType::class);

        return $this->render('profile/index.html.twig',
        
        [
            'form' => $form->createView()
        ]);
    }
}
