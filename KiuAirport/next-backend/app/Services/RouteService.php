<?php

namespace App\Services;



use App\Models\Route;
use App\Repositories\RouteRepositoryInterface;

class RouteService implements RouteServiceInterface
{

    protected RouteRepositoryInterface $routeRepository;

    public function __construct(RouteRepositoryInterface $routeRepository){
        $this->routeRepository = $routeRepository;
    }

    public function addRoute(array $routeData){
        $this->routeRepository->create($routeData);
    }


    public function getAllRoutes(){
        return $this->routeRepository->getAll();
    }

    public function deleteRoute($id){
        return $this->routeRepository->delete($id);
    }

    public function updateRoute($id, array $routeData)
    {
        $this->routeRepository->update($id, $routeData);
    }

}
