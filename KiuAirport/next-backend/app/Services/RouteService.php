<?php

namespace App\Services;



use App\Models\Route;
use App\Repositories\RouteRepositoryInterface;
use Exception;
use Illuminate\Support\Facades\Log;

class RouteService implements RouteServiceInterface
{

    protected RouteRepositoryInterface $routeRepository;

    public function __construct(RouteRepositoryInterface $routeRepository){
        $this->routeRepository = $routeRepository;
    }

    public function addRoute(array $routeData) : bool{
        return $this->routeRepository->create($routeData);
    }


    public function getAllRoutes(){
        return $this->routeRepository->getAll();
    }

    public function deleteRoute($id) : bool{
        return $this->routeRepository->delete($id);
    }

    public function updateRoute($id, array $routeData) : bool
    {
        return $this->routeRepository->update($id, $routeData);
    }

}
