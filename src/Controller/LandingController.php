<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;


class LandingController extends AbstractController
{
    public function index(): Response
    {
        return $this->render('landing/index.html.twig', [
            'controller_name' => 'LandingController',
        ]);
    }

    public function home(): Response
    {
        return $this->render('main/home.html.twig', [
            'controller_name' => 'LandingController',
        ]);
    }
}
