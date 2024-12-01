<?php

namespace app\Services;

use App\Models\Order;

interface OrderServiceInterface
{
    public function getOrdersDetails();
    public function getOrderDetails(int $orderId);
    public function createOrder(Order $order);
    public function getOrderDetailsByUserId($UserId);
}
