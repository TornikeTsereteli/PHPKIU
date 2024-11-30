<?php

namespace App\Services;

use App\Repositories\OrderRepositoryInterface;

class OrderService
{
    protected $orderRepository;

    public function __construct(OrderRepositoryInterface $orderRepository){
        $this->orderRepository = $orderRepository;
    }

    public function getOrders(){
        return $this->orderRepository->getOrders();
    }
}
