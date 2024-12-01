<?php

namespace App\Repositories;

interface OrderRepositoryInterface
{
    public function getOrderDetails();

    public function getOrderDetailsByUserId($userId);
    public function createOrder(array $data);
    public function countOrderByUserId($UserId);
}
