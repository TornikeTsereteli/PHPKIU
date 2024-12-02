<?php

namespace App\Repositories;

use App\Models\Order;
use Illuminate\Support\Facades\Log;
use function PHPSTORM_META\map;

class OrderRepository implements OrderRepositoryInterface
{

    public function getOrderDetails()
    {
           return  Order::join('tickets', 'orders.ticket_id', '=', 'tickets.id')
               ->join('routes', 'tickets.route_id', '=', 'routes.id')
               ->join('users', 'orders.user_id', '=', 'users.id')
               ->select(
                   'users.name as user_name',
                   'routes.start_location',
                   'routes.end_location',
                   'tickets.quantity',
                   'orders.total_price'
               )
               ->get();


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


}
