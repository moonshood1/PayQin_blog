<?php

namespace App\Events;

use ApiPlatform\Core\EventListener\EventPriorities;
use App\Entity\Article;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use Symfony\Component\HttpKernel\KernelEvents;

class ArticleDateSubscriber implements EventSubscriberInterface
{
    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::VIEW => ['setDateForArticle',EventPriorities::PRE_VALIDATE]
        ];
    }


    public function setDateForArticle(ViewEvent $event)
    {
        $article = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();
        
        if ($article instanceof Article && $method === "POST") {
            $date = new \DateTime();
            $article->setCreatedAt($date);
        }
    }
}   
