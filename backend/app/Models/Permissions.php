<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Models\Permission as SpatiePermission;

class Permissions extends SpatiePermission
{
    protected $fillable = ['name', 'guard_name'];
    public $guard_name = 'web';

    use HasFactory;
}
