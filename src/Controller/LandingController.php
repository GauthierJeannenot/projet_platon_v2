<?php

namespace App\Controller;

use App\Entity\InfosUser;
use App\Entity\Ticket;
use App\Repository\InfosUserRepository;
use App\Repository\TicketRepository;
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

    public function home(TicketRepository $ticketRepository,    InfosUserRepository $infosUserRepository): Response
    {
        $user = $this->getUser();

        // ajouter les knowledges de la table InfosUser du User concerné
        // récupérer l'avis des users ayant envoyés un ticket à notre user connecté
        $infosUser = $infosUserRepository->findAll();
        //dd($infosUser);
        $tickets = $ticketRepository->findBy(['receiver' => $user->getId()]);
        return $this->render('main/home.html.twig', [
            'tickets' => $tickets,
            'infosUser' => $infosUser
        ]);
    }
}
