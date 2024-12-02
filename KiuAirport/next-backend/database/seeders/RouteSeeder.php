<?php

namespace Database\Seeders;

use App\Models\Route;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RouteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        Route::create([
            'start_location' => 'Kopitnari',
            'end_location' => 'Batumi',
            'price_per_ticket' => 25,
            'departure_time' => '2024-12-01 14:00:00',
        ]);

        Route::create([
            'start_location' => 'Kopitnari',
            'end_location' => 'Kutaisi',
            'price_per_ticket' => 10,
            'departure_time' => '2024-12-02 08:30:00',
        ]);

        Route::create([
            'start_location' => 'Kopitnari',
            'end_location' => 'KIU',
            'price_per_ticket' => 10,
            'departure_time' => '2024-12-03 18:00:00',
        ]);


        Route::create([
            'start_location' => 'Kopitnari',
            'end_location' => 'Tbilisi',
            'price_per_ticket' => 25,
            'departure_time' => '2024-12-03 18:00:00',
        ]);


        Route::create([
            'start_location' => 'Kopitnari',
            'end_location' => 'Terjola',
            'price_per_ticket' => 15,
            'departure_time' => '2024-12-03 18:00:00',
        ]);


        Route::create([
            'start_location' => 'Kopitnari',
            'end_location' => 'Khodasheni',
            'price_per_ticket' => 35,
            'departure_time' => '2024-12-03 18:00:00',
        ]);


        Route::create([
            'start_location' => 'Kopitnari',
            'end_location' => 'Lanchkhuti',
            'price_per_ticket' => 10,
            'departure_time' => '2024-12-03 18:00:00',
        ]);


    }
}
