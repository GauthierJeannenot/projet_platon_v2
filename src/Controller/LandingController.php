<?php

namespace App\Controller;


use App\Entity\Ticket;
use App\Repository\InfosUserRepository;
use App\Repository\TicketRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;


class LandingController extends AbstractController
{

    private $doctrine;

    public function __construct(ManagerRegistry $doctrine){
        $this->doctrine = $doctrine;
    }



    public function index(): Response
    {
        return $this->render('landing/index.html.twig', [
            'controller_name' => 'LandingController',
        ]);
    }

    public function home(TicketRepository $ticketRepository, InfosUserRepository $infosUserRepository): Response
    {
        $user = $this->getUser();
        // récupérer l'avis des users ayant envoyés un ticket à notre user connecté
        $infosUser = $infosUserRepository->findAll();
        //dd($infosUser);
        $tickets = $ticketRepository->findBy(['receiver' => $user->getId()]);
        return $this->render('main/home.html.twig', [
            'tickets' => $tickets,
            'infosUser' => $infosUser
        ]);
    }

    public function removeTicket($idTicket){
        $ticketRepo = $this->doctrine->getRepository(Ticket::class);
        $ticket = $ticketRepo->find($idTicket);

        $em=$this->doctrine->getManager();
        $em->remove($ticket);
        $em->flush();

        return $this->redirectToRoute('platon_main_home');
    }

    public function finishClass($idTicket){
        $ticketRepo = $this->doctrine->getRepository(Ticket::class);
        $ticket = $ticketRepo->find($idTicket);

        $ticket->setStatus('3');

        $em=$this->doctrine->getManager();
        $em->flush();
        return $this->redirectToRoute('platon_main_home');
    }

}
