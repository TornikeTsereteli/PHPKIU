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
        $ticketId = $request->input('ticket_id');
        $userId = $request->input('user_id');
        $totalPrice = $request->input('total_price');

        $order = new Order([
            'ticketId' => $ticketId,
            'userId' => $userId,
            'totalPrice' => $totalPrice
        ]);

        return $this->orderService->createOrder($order);
    }

    public function getAllTickets(Request $request) : array {
        $userId = $request->input('user_id');

        return $this->orderService->getOrderDetailsByUserId($userId);
    }


}
