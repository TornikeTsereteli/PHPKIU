<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use PHPUnit\Framework\Exception;

class AdminMiddleware
{
    public function handle(Request $request, Closure $next)
    {

//        throw new Exception($request);

        // Check if the user is authenticated and is an admin
        if (auth()->check() && auth()->user()->isAdmin()) {
            return $next($request);
        }
//        throw new Exception();

//        throw new Exception(auth()->user()->isAdmin());
        // If not admin, redirect to a specific page (e.g., home or login page)
        return redirect('/home')->with('error', 'You do not have admin access');
    }
}
