<?php

namespace App\Services;

use App\Repositories\OrderRepositoryInterface;

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
}
