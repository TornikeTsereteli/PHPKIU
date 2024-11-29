<?php

namespace App\Services;

use App\Repositories\RouteRepositoryInterface;

class RouteService
{

    protected $routeRepository;

    public function __construct(RouteRepositoryInterface $routeRepository){
        $this->routeRepository = $routeRepository;
    }


    public function getAllRoutes(){
        return $this->routeRepository->getAll();
    }


    public function getRoutesByName($from)
    {

    }
    // route // start_location, end_location
    public function deleteRoute($RouteDto){

    }

    // start_location, end_location, price_per_ticket
    public function updateRoute($RouteDto)
    {

    }

}