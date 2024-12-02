<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Route;
use App\Repositories\RouteRepository;
use App\Repositories\RouteRepositoryInterface;
use App\Services\OrderService;
use App\Services\OrderServiceInterface;
use App\Services\RouteService;
use App\Services\RouteServiceInterface;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use function Pest\Laravel\json;


class AdminController extends Controller
{
    protected RouteServiceInterface $routeService;
    protected OrderServiceInterface $orderService;

    public function __construct(RouteServiceInterface $routeService, OrderServiceInterface $orderService)
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

        $request->validate([
            'id'=> ['required','int'],
            'start_location' => ['required', 'string', 'max:50'],
            'end_location' => ['required', 'string', 'max:50'],
            'price_per_ticket' => ['required'],
            'departure_time' => [],

        ]);

        $routeData = [
            'start_location' => $request->start_location,
            'end_location' => $request->end_location,
            'price_per_ticket' => $request->price_per_ticket,
            'departure_time' => $request->departure_time
        ];


        $this->routeService->updateRoute($request->id,$routeData);
    }

    public function deleteRoute(Request $request)
    {
        $request->validate([
            'id'=> ['required','int'],
        ]);

        $this->routeService->deleteRoute($request->id);
    }

    public function getAllOrdersDetails(Request $request)
    {
        Log::info("trying to get data from Orders table ... ", [$request]);
        $orders = $this->orderService->getOrdersDetails();
        Log::info("successfully get data from Orders table ... ", [$orders]);
        return $orders;

    }



}
