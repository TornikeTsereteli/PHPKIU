<?php

namespace App\Services;



use App\Models\Route;
use App\Repositories\RouteRepositoryInterface;

class RouteService
{

    protected $routeRepository;

    public function __construct(RouteRepositoryInterface $routeRepository){
        $this->routeRepository = $routeRepository;
    }

    public function addRoute(array $routeData){
        $this->routeRepository->create($routeData);
    }


    public function getAllRoutes(){
        return $this->routeRepository->getAll();
    }


    public function getRoutesByName($from)
    {

    }
    // route // start_location, end_location
    public function deleteRoute($id){
        return $this->routeRepository->delete($id);
    }

    // start_location, end_location, price_per_ticket
    public function updateRoute($id, array $routeData)
    {
        $this->routeRepository->update($id, $routeData);
    }

}
