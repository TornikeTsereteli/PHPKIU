<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Ticket extends Model
{
    use HasFactory;

    protected $table = 'tickets';

    protected $fillable = [
        'route_id',
        'quantity',
        'total_price',
    ];

    protected $casts = [
        'route_id' => 'integer',
        'quantity' => 'integer',
        'total_price' => 'float',
    ];

    /**
     * Define the relationship to the Route model.
     * A ticket belongs to a route.
     */
    public function route(): BelongsTo
    {
        return $this->belongsTo(Route::class);
    }
}
