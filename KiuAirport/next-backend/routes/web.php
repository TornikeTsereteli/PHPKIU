<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});


use Illuminate\Support\Facades\Mail;

Route::get('/send-test-email', function () {
    Mail::raw('Test email from Laravel', function ($message) {
        $message->to('tornike.tsereteli2003@gmail.com')
            ->subject('Test Email');
    });

    return 'Test email sent!';
});


Route::get("/test", function () {
    return 0;
});


require __DIR__.'/auth.php';
