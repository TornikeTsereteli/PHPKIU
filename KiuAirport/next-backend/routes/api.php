<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\User\UserController;
use App\Http\Middleware\AdminMiddleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['auth:sanctum'])->get('/test2', function (Request $request) {
    return $request->user();
});


Route::middleware(['auth:sanctum',AdminMiddleware::class])->get('/test4', function (Request $request) {
    return $request->user();
});



Route::prefix('user')->middleware(['auth:sanctum'])->group(function () {
    Route::get('/routes',[UserController::class,'getRoutes']); // +
    Route::post('/buy-ticket',[UserController::class,'buyTicket']); // ? -
    Route::get('/order-history',[UserController::class,'getOrderHistory']); // +
});


Route::prefix('admin')->middleware(['auth:sanctum',AdminMiddleware::class])->group(function () {
    Route::get('/routes',[AdminController::class,'getRoutes']);   // +
    Route::post('/add-route',[AdminController::class,'addRoute']); // +
    Route::post('/delete-route',[AdminController::class,'deleteRoute']); // +
    Route::post('/update-route',[AdminController::class,'updateRoute']);  // +
    Route::get('/orders',[AdminController::class,'getAllOrdersDetails']); // + but have unexpected behaviour if ticketId didnot exist so maybe I should do inner join not left
});
