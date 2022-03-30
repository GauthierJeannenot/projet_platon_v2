<?php

namespace App\Controller;


use App\Entity\Ticket;
use App\Repository\FavorisRepository;
use App\Repository\InfosUserRepository;
use App\Repository\SubCategoriesRepository;
use App\Repository\TicketRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;


class LandingController extends AbstractController
{
    // On stock le Manager Registry dans une variable $doctrine afin de pouvoir faire appel aux méthodes contenues dedans notemment getRepository() (afin de récupérer le Repository de la classe voulue) et getManager() (afin d'avoir accés aux méthodes persist() et flush())
    private $doctrine;

    public function __construct(ManagerRegistry $doctrine){
        $this->doctrine = $doctrine;
    }



    public function index(SubCategoriesRepository $subCategoriesRepository): Response
    {

        $subCategories = $subCategoriesRepository->findAll();
        //dd($subCategories);
        return $this->render('landing/index.html.twig', [
            'controller_name' => 'LandingController',
            'subCategories' => $subCategories
        ]);
    }

    public function home(TicketRepository $ticketRepository, InfosUserRepository $infosUserRepository, FavorisRepository $favorisRepository, SubCategoriesRepository $subCategoriesRepository): Response
    {

        $subCategories = $subCategoriesRepository->findAll();

        $user = $this->getUser();
        // récupérer l'avis des users ayant envoyés un ticket à notre user connecté
        $infosUser = $infosUserRepository->findAll();
        //dd($infosUser);

        // récupérer les tickets selon l'utilisateur connecté
        $tickets = $ticketRepository->findBy(['receiver' => $user->getId()]);
        //dd($tickets)
        
        // récupérer les favoris selon l'utilisateur connecté
        $favoris = $favorisRepository->findBy(['adder' => $user->getId()]);
        //dd($favoris);

        return $this->render('main/home.html.twig', [
            'tickets' => $tickets,
            'infosUser' => $infosUser,
            'favoris' => $favoris,
            'subCategories' => $subCategories
        ]);
    }
    // On crée une fonction qui permet de supprimer un ticket en fonction de son Id en utilisant la méthode find héritée du TicketRepository
    public function removeTicket($idTicket){
        $ticketRepo = $this->doctrine->getRepository(Ticket::class);
        $ticket = $ticketRepo->find($idTicket);

        $em=$this->doctrine->getManager();
    // l'action principale de cette fonction est de supprimer le ticket grâce à la méthode remove héritée du TicketRepository, la suppression du Ticket annule le cours
        $em->remove($ticket);
        $em->flush();

        return $this->redirectToRoute('platon_main_home');
    }
    // On crée une fonction qui permet de update un ticket en fonction de son id en utilisant la méthode find() héritée du TicketRepository
    public function finishClass($idTicket){
        $ticketRepo = $this->doctrine->getRepository(Ticket::class);
        $ticket = $ticketRepo->find($idTicket);
    // l'action principale de cette fonction est de mettre à jour le status du ticket grâce au setter prévu dans l'entité Ticket, indiquant ainsi que le cours à été donner et clos, le déplaçant par la suite dans l'historique des cours finis de l'utilisateur connecté
        $ticket->setStatus('3');

        $em=$this->doctrine->getManager();
        $em->flush();
        return $this->redirectToRoute('platon_main_home');
    }

}
