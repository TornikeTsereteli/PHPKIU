<?php

namespace App\Http\Middleware;


namespace App\Http\Middleware;

use Closure;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use PharIo\Manifest\ElementCollectionException;
use Throwable;

class GlobalExceptionHandler
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        try {
            return $next($request);
        } catch (Exception $e) {
            Log::error("Caught exception: " . $e->getMessage());
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
