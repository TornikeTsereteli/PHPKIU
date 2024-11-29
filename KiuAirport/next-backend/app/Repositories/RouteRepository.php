<?php

namespace App\Repositories;

use App\Models\Route;
use Illuminate\Support\Collection;

class RouteRepository implements RouteRepositoryInterface
{
    public function getAll(): Collection
    {
        return Route::all();
    }

    public function getById(int $id): Route
    {
        return Route::find($id);
    }

    public function create(array $data): bool
    {
        Route::create($data);
        return true;
    }

    public function update(int $id, array $data): bool
    {
        $route = Route::find($id);
        if ($route) {
            return $route->update($data);
        }
        return false;
    }

    public function delete(int $id): bool
    {
        $route = Route::find($id);
        if ($route) {
            return $route->delete();
        }
        return false;
    }

    public function exists(int $id): bool
    {
        return Route::where('id', $id)->exists();
    }
}
