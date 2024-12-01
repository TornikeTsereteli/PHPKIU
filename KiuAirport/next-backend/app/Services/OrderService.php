<?php

namespace App\Services;

use App\Models\Order;
use App\Repositories\OrderRepositoryInterface;
use Illuminate\Http\Client\Request;
use Illuminate\Support\Facades\Http;

class OrderService
{
    protected $orderRepository;

    public function __construct(OrderRepositoryInterface $orderRepository){
        $this->orderRepository = $orderRepository;
    }

    public function getOrdersDetails(){
        return $this->orderRepository->getOrderDetails();
    }

    public function getOrderDetailsByUserId($UserId){
        return $this->orderRepository->getOrderDetailsByUserId($UserId);
    }

    public function createOrder($order) {
        $userId = $order['user_id'];
        if ($this->orderRepository->countOrderByUserId($userId) >= 3) {
            throw new \Exception("You can't buy more than 3 tickets");
        }

        return $this->orderRepository->createOrder($order);
    }


}
