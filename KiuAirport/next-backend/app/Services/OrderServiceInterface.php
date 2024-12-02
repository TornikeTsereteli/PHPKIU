<?php

namespace App\Services;

use App\Models\Order;

interface OrderServiceInterface
{
    public function getOrdersDetails();
    public function createOrder(array $routes,int $userId);
    public function getOrderDetailsByUserId($UserId);
}
