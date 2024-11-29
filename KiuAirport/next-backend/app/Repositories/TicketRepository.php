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

    public function getTicketsByRoute(int $routeId)
    {
        return Ticket::where('route_id', $routeId)->get();
    }

    public function getTicketsByUser(int $userId)
    {

    }

    public function purchaseTickets(int $routeId, int $quantity, int $userId)
    {
    }

    public function getTicketById(int $ticketId)
    {
    }

    public function updateTicketStatus(int $ticketId, string $status)
    {

    }

    public function delete(int $ticketId)
    {
        Ticket::destroy($ticketId);
    }
}
