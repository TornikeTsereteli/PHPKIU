<?php

namespace App\Services;

use App\Models\Order;
use App\Repositories\OrderRepositoryInterface;
use App\Repositories\RouteRepositoryInterface;
use App\Repositories\TicketRepositoryInterface;
use Exception;
use Illuminate\Http\Client\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class OrderService
{
    protected $orderRepository;
    protected $ticketRepository;
    protected $routeRepository;

    public function __construct(OrderRepositoryInterface $orderRepository,TicketRepositoryInterface $ticketRepository,RouteRepositoryInterface $routeRepository){
        $this->orderRepository = $orderRepository;
        $this->ticketRepository = $ticketRepository;
        $this->routeRepository = $routeRepository;
    }

    public function getOrdersDetails(){
        return $this->orderRepository->getOrderDetails();
    }

    public function getOrderDetailsByUserId($UserId){
        return $this->orderRepository->getOrderDetailsByUserId($UserId);
    }

    public function createOrder($routes, $user_id) {
        $total_quantity = 0;
        foreach (array_keys($routes) as $route_id) {
            $total_quantity += $routes[$route_id];
        }
        Log::info($total_quantity);
        if ($total_quantity > 3) {
            throw new Exception("You can't buy more than 3 tickets");
        }

        foreach ($routes as $route_id) {
            $price_per_ticket = $this->routeRepository->getById($route_id)['price_per_ticket'];
            $quantity = $routes[$route_id];
            $total_price = $price_per_ticket * $quantity;

            $ticketdata = [
                'route_id' => $route_id,
                'quantity' => $total_quantity,
                'total_price' => $total_price,
            ];

            $ticket = $this->ticketRepository->create($ticketdata);

            $ticket_id = $ticket->id;

            $order = [
                'ticket_id' => $ticket_id,
                'user_id' => $user_id,
                'total_price' => $total_price
            ];

            $this->orderRepository->createOrder($order);
        }

    }



}
