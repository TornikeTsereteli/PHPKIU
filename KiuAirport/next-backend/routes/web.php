<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Middleware\AdminMiddleware;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});


use Illuminate\Support\Facades\Mail;

//Route::get('/send-test-email', function () {
//    Mail::raw('Test email from Laravel', function ($message) {
//        $message->to('tornike.tsereteli2003@gmail.com')
//            ->subject('Test Email');
//    });
//
//    return 'Test email sent!';
//});
//
//
//Route::get("/test", function () {
//    return 0;
//});




Route::get('/send-test-email', function () {
    Mail::raw('Test email from Laravel', function ($message) {
        $message->to('tornike.tsereteli2003@gmail.com')
            ->subject('Test Email');
    });

    return 'Test email sent!';
});

//
//Route::get("/test", function () {
//    return 0;
//});

Route::get('UnAuthorized', function () {
    return response()->json([
        'message' => 'You are not authorized to access this resource.',
    ], 403);
});





require __DIR__.'/auth.php';
