<?php

namespace App\Services;



use App\Models\Route;
use App\Repositories\RouteRepositoryInterface;
use Exception;
use Illuminate\Support\Facades\Log;

class RouteService implements RouteServiceInterface
{

    protected RouteRepositoryInterface $routeRepository;

    public function __construct(RouteRepositoryInterface $routeRepository){
        $this->routeRepository = $routeRepository;
    }

    public function addRoute(array $routeData) : int{
        try {
            Log::info("RouteService: Trying to add new route");
            $result = $this->routeRepository->create($routeData);
            Log::info("RouteService: New route added successfully");
            return $result;
        } catch (Exception $e) {
            Log::error('RouteService: Failed to add new route', ['error' => $e->getMessage()]);

            throw $e;
        }
    }


    public function getAllRoutes(){
        try {
            Log::info("RouteService: Trying to get all routes");
            $result = $this->routeRepository->getAll();
            Log::info("RouteService: All routes returned successfully");
            return $result;
        } catch (Exception $e) {
            Log::error('RouteService: Failed to get all routes', ['error' => $e->getMessage()]);
            throw $e;
        }
    }

    public function deleteRoute($id) : bool{
        try {
            Log::info("RouteService: Trying to delete route");
            $result = $this->routeRepository->delete($id);
            Log::info("RouteService: Route deleted successfully");
            return $result;
        }
        catch (Exception $e) {
            Log::error('RouteService: Failed to delete route', ['error' => $e->getMessage()]);
            throw $e;
        }
    }

    public function updateRoute($id, array $routeData) : bool
    {
        try {
            Log::info("RouteService: Trying to update route");
            $result = $this->routeRepository->update($id, $routeData);
            Log::info("RouteService: Route updated successfully");
            return $result;
        } catch (Exception $e) {
            Log::error('RouteService: Failed to update route', ['error' => $e->getMessage()]);
            throw $e;
        }
    }

}
