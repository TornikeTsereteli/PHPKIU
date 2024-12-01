<?php

namespace App\Repositories;

use App\Models\Order;
use Illuminate\Support\Facades\Log;
use function PHPSTORM_META\map;

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

    public function createOrder(array $data)
    {
        return Order::create($data);
    }

    public function countOrderByUserId($UserId){
        return Order::where(['user_id' => $UserId])->count();
    }
}
