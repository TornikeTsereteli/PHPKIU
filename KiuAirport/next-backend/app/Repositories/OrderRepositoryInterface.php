<?php

namespace App\Repositories;

interface OrderRepositoryInterface
{
    public function getOrderDetails();

    public function getOrderDetailsByUserId($userId);
    public function createOrder(Order $order);
    public function countOrderByUserId($UserId);
}
