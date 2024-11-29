<?php

namespace App\Repositories;

use App\Models\Route;
use Illuminate\Support\Collection;

interface RouteRepositoryInterface
{
    /**
     * Get all routes.
     *
     * @return Collection
     */
    public function getAll(): Collection;

    /**
     * Get a specific route by ID.
     *
     * @param int $id
     * @return Route
     */
    public function getById(int $id): Route;

    /**
     * Add a new route.
     *
     * @param array $data
     * @return bool
     */
    public function create(array $data): bool;

    /**
     * Update an existing route.
     *
     * @param int $id
     * @param array $data
     * @return bool
     */
    public function update(int $id, array $data): bool;

    /**
     * Delete a route by ID.
     *
     * @param int $id
     * @return bool
     */
    public function delete(int $id): bool;

    /**
     * Check if a route exists by ID.
     *
     * @param int $id
     * @return bool
     */
    public function exists(int $id): bool;
}
