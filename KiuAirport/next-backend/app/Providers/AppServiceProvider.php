<?php

namespace App\Providers;

use App\Models\User;
use App\Repositories\OrderRepository;
use App\Repositories\OrderRepositoryInterface;
use App\Repositories\RouteRepository;
use App\Repositories\RouteRepositoryInterface;
use App\Repositories\TicketRepository;
use App\Repositories\TicketRepositoryInterface;
use App\Services\OrderService;
use App\Services\OrderServiceInterface;
use App\Services\RouteService;
use App\Services\RouteServiceInterface;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
        $this->app->bind(RouteRepositoryInterface::class, RouteRepository::class);
        $this->app->bind(RouteServiceInterface::class,RouteService::class);
        $this->app->bind(OrderRepositoryInterface::class, OrderRepository::class);
        $this->app->bind(TicketRepositoryInterface::class, TicketRepository::class);
        $this->app->bind(OrderServiceInterface::class,OrderService::class);

    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        ResetPassword::createUrlUsing(function (object $notifiable, string $token) {
            return config('app.frontend_url')."/password-reset/$token?email={$notifiable->getEmailForPasswordReset()}";
        });

//        Gate::define('isAdmin', function (User $user) {
//            return $user->is_admin == 1;
//        });
    }
}
