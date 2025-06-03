<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;
    protected $fillable = [
        'country',
        'state',
        'city',
        'neighborhood',
        'complement',
        'number',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    protected $table = 'ADDRESS';
}
