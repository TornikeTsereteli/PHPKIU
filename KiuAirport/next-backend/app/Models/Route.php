<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Route extends Model
{
    //
    use HasFactory;

    protected $table = 'routes';

    protected $fillable = [
        'start_location',
        'end_location',
        'price_per_ticket'
    ];



    function casts() : array
    {
        return [
            'start_location' => 'string',
            'end_location' => 'string',
            'price_per_ticket' => 'float'
        ];
    }
}
