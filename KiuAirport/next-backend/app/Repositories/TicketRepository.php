<?php

namespace App\Repositories;

use App\Models\Order;
use App\Models\Ticket;
use Illuminate\Support\Facades\Log;

class TicketRepository implements TicketRepositoryInterface
{
    public function create(array $data)
    {
        try {
            Log::info('Trying to create ticket');
            Log::info('Ticket created successfully');
            return Ticket::create($data);
        } catch (\Exception $e) {
            Log::error('Failed to create ticket: '.$e->getMessage());

            throw $e;
        }
    }
}
