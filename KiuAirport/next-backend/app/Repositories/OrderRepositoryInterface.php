<?php

namespace App\Repositories;

interface OrderRepositoryInterface
{
    public function getOrderDetails();

    public function getOrderDetailsByUserId($userId);
}
