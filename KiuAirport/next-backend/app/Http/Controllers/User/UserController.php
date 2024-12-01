<?php

namespace app\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Order;
use app\Services\OrderServiceInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class UserController extends Controller
{
    protected OrderServiceInterface $orderService;
    /**
     *  Takes
     *
     * @param Request $request
     * @return bool
     */
    public function buyTicket(Request $request) : bool {
        $user = $request->user();

//        $request->validate([
//            'ticket_id' => ['required','integer'],
//            'total_price'=>['required']
//        ]);


        $routes = $request->all();
        $user_id = $request->user()->id;
        return $this->orderService->createOrder($routes, $user_id);
    }

    public function getAllTickets(Request $request) : array {
        $userId = $request->input('user_id');

        return $this->orderService->getOrderDetailsByUserId($userId);
    }


}
