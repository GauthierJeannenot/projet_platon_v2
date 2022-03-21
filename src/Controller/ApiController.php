<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

class ApiController extends AbstractController 
{
    public function getData()
    {
        $cities = ['paris', 'abidjan', 'monaco','istanbul','phoenix'];

        return new JsonResponse($cities);
    }
}