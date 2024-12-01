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

        $request->validate([
            'ticket_id' => ['required','integer'],
            'total_price'=>['required']
        ]);

        $order = [
            'ticketId' => $request->ticket_id,
            'userId' => $user->id,
            'totalPrice' => $request->totalPrice
        ];

        return $this->orderService->createOrder($order);
    }

    public function getAllTickets(Request $request) : array {
        $user = $request->user();
        return $this->orderService->getOrderDetailsByUserId($user->id);
    }

}
