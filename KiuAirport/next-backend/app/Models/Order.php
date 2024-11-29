<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Order extends Model
{
    //
    use HasFactory;
    protected $fillable = [
        'ticket_id',
        'user_id',
        'total_price',
    ];

    protected $casts = [
        'ticket_id' => 'integer',
        'user_id' => 'integer',
        'total_price' => 'float',
    ];

    public function ticket(): BelongsTo
    {
        return $this->belongsTo(Ticket::class);
    }
}
