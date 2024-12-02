<?php

namespace App\Repositories;

use App\Models\Order;
use App\Models\Ticket;

class TicketRepository implements TicketRepositoryInterface
{
    public function create(array $data)
    {
       return Ticket::create($data);
    }
}
