<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Repositories\RouteRepository;
use App\Repositories\RouteRepositoryInterface;
use App\Services\RouteService;
use Illuminate\Http\Request;


class AdminController extends Controller
{
    protected $routeService;

    public function __construct(RouteService $routeService)
    {
        $this->routeService = $routeService;
    }


    public function getRoutes(Request $request){
        return $this->routeService->getAllRoutes();
    }

    public function adminTest(Request $request ) : int
    {
        $user = $request->user();

        return $user->id;
    }

    public function updateRoutes(Request $request){
        $this->routeService->updateRoute($request);
    }

    public function deleteRoute(Request $request)
    {
        $this->routeService->deleteRoute($request);
    }

    public function getAllOrders(Request $request)
    {

    }



}
