<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Services\RouteService;
use Illuminate\Http\Request;

class UserController extends Controller
{
    protected $routeServicve;

    public function __construct(RouteService $routeServicve){
        $this->routeServicve = $routeServicve;
    }

    public function getRoutes(Request $request){
        return $this->routeServicve->getAllRoutes();
    }


}
