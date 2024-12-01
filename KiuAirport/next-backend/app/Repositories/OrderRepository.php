<?php

namespace App\Repositories;

use function PHPSTORM_META\map;

use App\Models\Order;

class OrderRepository implements OrderRepositoryInterface
{

    public function getOrderDetails()
    {

       return Order::with(['ticket.route', 'user'])->get()->map(function ($order) {
            return [
                'name' => $order->user->name,
                'start_location' => $order->ticket->route->start_location,
                'end_location' => $order->ticket->route->end_location,
                'quantity' => $order->ticket->quantity,
                'total_price' => $order->total_price,
            ];
        });

    }

    public function getOrderDetailsByUserId($userId)
    {
        return Order::with(['ticket.route', 'user'])->where('user_id',$userId)->get()->map(function ($order) {
            return [
                'name' => $order->user->name,
                'start_location' => $order->ticket->route->start_location,
                'end_location' => $order->ticket->route->end_location,
                'quantity' => $order->ticket->quantity,
                'total_price' => $order->total_price,
            ];
        });
    }

    public function createOrder($order)
    {
        Order::create([
            'ticket_id' => $order -> ticket_id,
            'user_id' => $order -> user_id,
            'total_price' => $order -> total_price
        ]);

        return true;

    }

    public function countOrderByUserId($UserId){
        return Order::where(['user_id' => $UserId])->count();
    }
}
