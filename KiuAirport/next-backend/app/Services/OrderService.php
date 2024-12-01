<?php

namespace app\Services;

use App\Models\Order;
use App\Models\Ticket;
use App\Repositories\OrderRepositoryInterface;
use App\Repositories\RouteRepository;
use App\Repositories\RouteRepositoryInterface;
use App\Repositories\TicketRepositoryInterface;
use Illuminate\Http\Client\Request;
use Illuminate\Support\Facades\Http;

class OrderService
{
    protected OrderRepositoryInterface $orderRepository;
    protected RouteRepositoryInterface $routeRepository;
    protected TicketRepositoryInterface $ticketRepository;

    public function __construct(OrderRepositoryInterface $orderRepository){
        $this->orderRepository = $orderRepository;
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
        if ($total_quantity >= 3) {
            throw new \Exception("You can't buy more than 3 tickets");
        }

        $orders = [];
        foreach ($routes as $route_id) {
            $price_per_ticket = $this->routeRepository->getById($route_id)['price_per_ticket'];
            $quantity = $routes[$route_id];
            $total_price = $price_per_ticket * $quantity;

            $ticket = new Ticket([
                'route_id' => $route_id,
                'quantity' => $total_quantity,
                'total_price' => $total_price,
            ]);

            $this->ticketRepository->create($ticket);

            $ticket_id = $ticket['ticket_id'];

            $order = new Order([
                'ticket_id' => $ticket_id,
                'user_id' => $user_id,
                'total_price' => $total_price
            ]);

            $this->orderRepository->createOrder($order);
            array_push($orders, $order);
        }

        return $orders;
    }


}
