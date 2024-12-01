<?php

namespace app\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Order;
use app\Services\OrderService;
use app\Services\OrderServiceInterface;
use App\Services\RouteService;
use Exception;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
//    protected OrderService $orderService;

    protected RouteService $routeService;

    public function __construct(/*OrderService $orderService,*/ RouteService $routeService)
    {
//        $this->orderService = $orderService;
        $this->routeService = $routeService;
    }
    /**
     *  Takes
     *
     * @param Request $request
     * @return bool
     */
//    public function buyTicket(Request $request) : bool {
//
//        $user = $request->user();
//
//        $request->validate([
//            'ticket_id' => ['required','integer'],
//            'total_price'=>['required']
//        ]);
//
//        $order = [
//            'ticketId' => $request->ticket_id,
//            'userId' => $user->id,
//            'totalPrice' => $request->totalPrice
//        ];
//
//        return $this->orderService->createOrder($order);
//    }

//    public function getAllTickets(Request $request) : array {
//        $user = $request->user();
//        return $this->orderService->getOrderDetailsByUserId($user->id);
//    }

    public function getRoutes(Request $request)
    {
        try {
            return $this->routeService->getAllRoutes();
        }catch (Exception $e) {
            Log::error($e->getMessage());
        }
        return null;
    }

}
