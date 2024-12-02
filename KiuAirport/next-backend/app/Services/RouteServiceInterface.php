<?php

namespace App\Services;

interface RouteServiceInterface
{
    public function addRoute(array $routeData) : bool;
    public function getAllRoutes();
    public function deleteRoute($id);
    public function updateRoute($id, array $routeData) ;
}
