<?php

namespace App\Controller;

use App\Repository\ArticleRepository;
use App\Repository\CategoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AppController extends AbstractController
{
    /**
     * @Route("/", name="app")
     */
    public function index(): Response
    {
        return $this->render('app/index.html.twig', []);
    }

    /**
     * Fonction de récupération de tous les articles
     * @Route("/get_all_articles", name="get_all_articles")
     * @param ArticleRepository $repo
     */
    public function getAll(ArticleRepository $repo)
    {
        $articles = $repo->findBy([],['id'=> 'DESC']);
        
        return $this->json($articles);
    }


    /**
     * Fonction de recupération des 4 derniers articles
     * @Route("/get_last_three", name="last_three_articles")
     * @param ArticleRepository $repo
     */
    public function getLastThree(ArticleRepository $repo)
    {
        $articles = $repo->findBy([],['id'=> 'DESC'],3,1);

        return $this->json($articles);
    }

    /**
     * Fonction de récupération du dernier article
     * @Route("/get_last_one", name="last_one_article")
     * @param ArticleRepository $repo
     */
    public function getLast(ArticleRepository $repo)
    {
        $article = $repo->findBy([],['id'=>'DESC'],1);
        return $this->json($article);
    }


    public function getRelated(ArticleRepository $repo)
    {

    }

    /**
     * Fonction qui renvoie les 6 derniers articles
     * @Route("/get_previous_six" , name="previous_six_articles")
     * @param ArticleRepository $repo
     */
    public function getPrevious(ArticleRepository $repo)
    {
        $articles = $repo->findBy([],['id'=>'DESC'],6);
        return $this->json($articles);
    }


    /**
     * Fonction qui renvoie 3 articles aléatoires
     * @Route("/get_random_three", name="random_3_articles")
     * @param ArticleRepository $repo
     */
    public function getRandomThree(ArticleRepository $repo)
    {
        $articles =$repo->findBy([],['id'=> 'DESC'],3);

        return $this->json($articles);
    }

    /**
     * Fonction qui recupere toutes les catégories
     * @Route("/get_all_categories", name="get_all_categories")
     * @param CategoryRepository $repo
     */
    public function getAllCat(CategoryRepository $repo)
    {   
        $cats = $repo->findBy([],['id'=> "DESC"]);

        return $this->json($cats);
    }
}
