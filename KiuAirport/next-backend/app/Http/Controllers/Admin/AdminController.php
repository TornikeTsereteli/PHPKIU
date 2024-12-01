<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Route;
use App\Repositories\RouteRepository;
use App\Repositories\RouteRepositoryInterface;
use App\Services\OrderService;
use App\Services\RouteService;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;


class AdminController extends Controller
{
    protected $routeService;
    protected $orderService;

    public function __construct(RouteService $routeService, OrderService $orderService)
    {
        $this->routeService = $routeService;
        $this->orderService = $orderService;
    }


    public function getRoutes(Request $request){
        return $this->routeService->getAllRoutes();
    }

    public function addRoute(Request $request)
    {

        Log::info("trying validating request data ... ", [$request]);

        $request->validate([
            'start_location' => ['required', 'string', 'max:50'],
            'end_location' => ['required', 'string', 'max:50'],
            'price_per_ticket' => ['required'],
            'departure_time' => [],
        ]);

        Log::info("request is validated");

        Log::info("trying to create routeData ... ");
        $routeData = [
            'start_location' => $request->start_location,
            'end_location' => $request->end_location,
            'price_per_ticket' => $request->price_per_ticket,
            'departure_time' => $request->departure_time
        ];

        Log::info("trying to sent data ... ", $routeData);
        try {
            $this->routeService->addRoute($routeData);
        }catch (Exception $e){
            Log::error("failed to add route");
        }
    }

    public function updateRoute(Request $request){
        $this->routeService->updateRoute($request);
    }

    public function deleteRoute(Request $request)
    {
        $this->routeService->deleteRoute($request);
    }

    public function getAllOrdersDetails(Request $request)
    {
        return $this->orderService->getOrdersDetails();
    }



}
