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
        try {
            Log::info('Trying to get all route');
            $result = Route::all();

            Log::info('Routes fetched successfully');
            return $result;
        } catch (Exception $e) {
            Log::error('Failed to fetch routes', ['error' => $e->getMessage()]);
            throw $e;
        }
    }

    public function getById(int $id): Route
    {
        try {
            Log::info('Trying to get Route by id = ' + $id);
            $result = Route::find($id);

            Log::info('Route fetched successfully');
            return $result;
        } catch (\Exception $e) {
            Log::error('Failed to fetch routes', ['error' => $e->getMessage()]);
            throw $e;
        }
    }

    public function create(array $routeData): bool
    {
        try {
            Log::info('Trying to create a new route.', ['route_data' => $routeData]);

            Route::create($routeData);
            Log::info('Route created successfully.', ['route_data' => $routeData]);

            return true;
        } catch (\Exception $e) {
            Log::error('Failed to create route.', [
                'route_data' => $routeData,
                'error' => $e->getMessage(),
            ]);

            return false;
        }
    }


    public function update(int $id, array $data): bool
    {
        try {
            Log::info('Trying to update route.', ['route_id' => $id, 'update_data' => $data]);

            $route = Route::find($id);
            if ($route) {
                $result = $route->update($data);
                Log::info('Route updated successfully.', ['route_id' => $id, 'updated_data' => $data]);
                return $result;
            }

            Log::warning('Route not found for update.', ['route_id' => $id]);
            return false;
        } catch (\Exception $e) {
            Log::error('Failed to update route.', [
                'route_id' => $id,
                'update_data' => $data,
                'error' => $e->getMessage(),
            ]);
            return false;
        }
    }

    public function delete(int $id): bool
    {
        try {
            Log::info('Trying to delete route.', ['route_id' => $id]);

            $route = Route::find($id);
            if ($route) {
                $route->delete();
                Log::info('Route deleted successfully.', ['route_id' => $id]);
                return true;
            }

            Log::warning('Route not found for deletion.', ['route_id' => $id]);
            return false;
        } catch (\Exception $e) {
            Log::error('Failed to delete route.', [
                'route_id' => $id,
                'error' => $e->getMessage(),
            ]);
            return false;
        }
    }


    public function exists(int $id): bool
    {
        try {
            Log::info('Checking if route with given id exists or not', ['route_id' => $id]);
            return Route::where('id', $id)->exists();
        } catch (\Exception $e) {
            Log::error('Failed to check if route with given id exists or not.', []);

            throw $e;
        }
    }
}
