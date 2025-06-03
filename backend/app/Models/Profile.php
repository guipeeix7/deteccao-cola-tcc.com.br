<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'nickname',
        'CPF',
        'bornDate',
        'status',
        'lastIpAddress',
        'telephone',
    ];

    protected $casts = [
        'bornDate' => 'date',
        'updatedAt' => 'datetime',
        'createdAt' => 'datetime',
    ];


    public function user()
    {
        return $this->belongsTo(User::class);
    }


    protected $table = 'PROFILE';
}
