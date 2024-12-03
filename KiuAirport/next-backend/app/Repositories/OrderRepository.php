<?php

namespace App\Repositories;

use App\Models\Order;
use Illuminate\Support\Facades\Log;
use function PHPSTORM_META\map;

class OrderRepository implements OrderRepositoryInterface
{

    public function getOrderDetails()
    {
        try {
            Log::info('Fetching all order details');
            $orderDetails = Order::with(['ticket.route', 'user'])->get()->map(function ($order) {
                return [
                    'name' => $order->user->name,
                    'start_location' => $order->ticket->route->start_location,
                    'end_location' => $order->ticket->route->end_location,
                    'quantity' => $order->ticket->quantity,
                    'total_price' => $order->total_price,
                ];
            });

            Log::info('Order details fetched successfully');
            return $orderDetails;
        }  catch (\Exception $e) {
            Log::error('Could not retrieve order details');

            throw $e;
        }
    }

    public function getOrderDetailsByUserId($userId)
    {
        try {
            Log::info('Fetching order details for ' , ['user_id' => $userId]);
            $orderDetails = Order::with(['ticket.route', 'user'])->where('user_id',$userId)->get()->map(function ($order) {
                return [
                    'name' => $order->user->name,
                    'start_location' => $order->ticket->route->start_location,
                    'end_location' => $order->ticket->route->end_location,
                    'quantity' => $order->ticket->quantity,
                    'total_price' => $order->total_price,
                ];
            });

            Log::info('Order details fetched successfully', ['user_id' => $userId, 'order_count' => $orderDetails->count()]);
            return $orderDetails;
        }  catch (\Exception $e) {
            Log::error('Could not retrieve order details for ' , ['user_id' => $userId, 'error' => $e->getMessage()]);

            throw $e;
        }
    }

    public function createOrder(array $data)
    {
        try {
            $order = Order::create($data);

            Log::info("Order created with id {$order->id}");

            return $order;
        } catch (\Exception $e) {
            Log::error('Failed to create order: ',
                [
                    'error' => $e->getMessage(),
                    'data' => $order
                ]);

            throw $e;
        }
    }
}
