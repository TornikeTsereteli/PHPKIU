<?php

namespace App\Repositories;

interface TicketRepositoryInterface
{
    public function create(array $data);
    public function getTicketsByRoute(int $routeId);
    public function getTicketsByUser(int $userId);
    public function purchaseTickets(int $routeId, int $quantity, int $userId);
    public function getTicketById(int $ticketId);
    public function updateTicketStatus(int $ticketId, string $status);
    public function delete(int $ticketId);
}
