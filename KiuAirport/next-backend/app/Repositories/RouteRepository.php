<?php

namespace App\Repositories;

use App\Models\Route;
use Exception;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;

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

    public function create(array $routeData): bool
    {
        try {
            Route::create($routeData);
            return true;
        } catch (Exception $e) {
            Log::error($e->getMessage());
            return false;
        }
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
