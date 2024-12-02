<?php

namespace app\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Services\OrderService;
use App\Services\OrderServiceInterface;
use App\Services\RouteService;
use App\Services\RouteServiceInterface;
use Exception;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    protected OrderServiceInterface $orderService;

    protected RouteServiceInterface $routeService;

    public function __construct(RouteServiceInterface $routeService,OrderServiceInterface  $orderService)
    {
        $this->orderService = $orderService;
        $this->routeService = $routeService;
    }

    public function buyTicket(Request $request){
        $routes = $request->all();
        $user_id = $request->user()->id;
        return $this->orderService->createOrder($routes,$user_id);
    }

    public function getOrderHistory(Request $request)
    {
        $user = $request->user();
        return $this->orderService->getOrderDetailsByUserId($user->id);
    }

    public function getRoutes(Request $request)
    {
        return $this->routeService->getAllRoutes();
    }

}
