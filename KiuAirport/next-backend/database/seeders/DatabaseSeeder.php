<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $this->call([
            RouteSeeder::class,
        ]);

        User::create([
            'name' => 'tornike Admin',
            'email' => 'tornike.tsereteli2003@gmail.com',
            'password' => Hash::make('Ocaml22!'),
            'email_verified_at' => now(),
            'is_admin' => true,
        ]);
    }
}
