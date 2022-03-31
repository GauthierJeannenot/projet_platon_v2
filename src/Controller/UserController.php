<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Ticket;
use App\Entity\Favoris;
use App\Form\UserType;
use App\Repository\FavorisRepository;
use App\Repository\SubCategoriesRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/user")
 */
class UserController extends AbstractController
{

    private $doctrine;

    public function __construct(ManagerRegistry $doctrine){
        $this->doctrine = $doctrine;
    }


    /**
     * @Route("/", name="app_user_index", methods={"GET"})
     */
    public function index(UserRepository $userRepository): Response
    {
        return $this->render('user/index.html.twig', [
            'users' => $userRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="app_user_new", methods={"GET", "POST"})
     */
    public function new(Request $request, UserRepository $userRepository): Response
    {
        $user = new User();
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $user->setRoles(['ROLE_USER']);
            $userRepository->add($user);
            return $this->redirectToRoute('app_user_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('user/new.html.twig', [
            'user' => $user,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="app_user_show", methods={"GET"})
     */
    public function show(User $user, SubCategoriesRepository $subCategoriesRepository): Response
    {
        $subCategories = $subCategoriesRepository->findAll();
        //dd($user);
        // checking des informations contenues dans user
        return $this->render('user/show.html.twig', [
            'user' => $user,
            'subCategories' => $subCategories
        ]);
    }

    public function favoris(SubCategoriesRepository $subCategoriesRepository){
        $subCategories = $subCategoriesRepository->findAll();
        return $this->render('platon_favoris', [
            'user' => $user,
            'subCategories' => $subCategories
        ]);

    }

    public function addFavorite(EntityManagerInterface $em, FavorisRepository $favorisRepository, User $user, SubCategoriesRepository $subCategoriesRepository){
        $subCategories = $subCategoriesRepository->findAll();
        // On vas chercher le FavorisRepository afin d'obtenir la méthode FindOneBy qui nous permettra de récupérer le user concerner par la page et on stock le user dans une variable $favorite
        $favorite = $favorisRepository->findOneBy([
            'added' => $user,
            'adder' => $this->getUser()]);
        //dd($favorite);


        // On vérifis que le User concerné n'est pas déjà inscrit dans nos favoris
        if(!$favorite) {
        // On instancie un nouvel objet Favoris dans notre variable $favorite
            $favorite = new Favoris();
        // On ajoute le User concerné à notre entité Favoris
            $favorite->setAdded($user);
        // On ajoute le User connecté à notre entité Favoris
            $favorite->setAdder($this->getUser());
        //On vérifis que les bonnes informations sont stockées dans notre variable
        //dd($favorite);
            
            $em->persist($favorite);
        // Si le User est déja dans nos favoris le bouton servira à l'en supprimer
        } else {
            $em->remove($favorite);
        }
        // On flush le résultat du lien
        $em->flush();


        return $this->render('user/show.html.twig', [
            'user' => $user,
            'subCategories' => $subCategories
        ]);
    }

    public function newTicket(User $user): Response
    {
        // encore une fois on regarde les informations stockées dans le user
        //dd($user);

        

        $ticket = new Ticket();
        $ticket->setReceiver($user);
        $ticket->setSender($this->getUser());
        $ticket->setStatus(0);

        $em = $this->doctrine->getManager();
        $em->persist($ticket);
        $em->flush();

        return $this->redirectToRoute('platon_main_home');
    }

    /**
     * @Route("/{id}/edit", name="app_user_edit", methods={"GET", "POST"})
     */
    public function edit(Request $request, User $user, UserRepository $userRepository): Response
    {
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $userRepository->add($user);
            return $this->redirectToRoute('app_user_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('user/edit.html.twig', [
            'user' => $user,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="app_user_delete", methods={"POST"})
     */
    public function delete(Request $request, User $user, UserRepository $userRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$user->getId(), $request->request->get('_token'))) {
            $userRepository->remove($user);
        }

        return $this->redirectToRoute('app_user_index', [], Response::HTTP_SEE_OTHER);
    }
}