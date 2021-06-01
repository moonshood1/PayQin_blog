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
     * Fonction de recupération de l'article suivant le premier 
     * @Route("/get_the_next", name="get_the_next_one")
     * @param ArticleRepository $repo
     */
    public function getNext(ArticleRepository $repo)
    {
        $main = $repo->findBy([],['id'=>'DESC'],1);
        $mainCatNumber = $main[0]->getCategory()->getId();
        $article = $repo->findBy(['category'=> $mainCatNumber],['id'=> 'DESC'],1,1);

        return $this->json($article);   
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

  
    /**
     * Fonction de récupération de l'article suivant le main dans la meme catégorie
     * @Route("/get_main_next_one_after",name="related_one_next_main")
     */
    public function getRelatedNextAfter(ArticleRepository $repo)
    {
        $main = $repo->findBy([],['id'=>'DESC'],1);
        $mainCatNumber = $main[0]->getCategory()->getId();
        $article = $repo->findBy(['category'=> $mainCatNumber],['id'=> 'DESC'],1,2);

        return $this->json($article);
    }


    /**
     * Fonction de récupération  des 3 derniers articles liés au main et suivant le second
     * @Route("/get_related_two", name="related_three_articles")
     * @param ArticleRepository $repo
     */
    public function getRelated(ArticleRepository $repo)
    {
        $main = $repo->findBy([],['id'=>'DESC'],1);
        $mainCatNumber = $main[0]->getCategory()->getId();
        $articles = $repo->findBy(['category'=> $mainCatNumber],['id'=> 'DESC'],2,3);

        return $this->json($articles);
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
