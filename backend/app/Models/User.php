<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'created_at',
        'updated_at',
        'apelido',
        'cpf',
        'dataNascimento',
        'status',
        'lastIpAddress',
        'fotoPerfil',
        'password',
        'telefone',
        'schoolSufix'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $dates = [
        'email_verified_at',
        'created_at',
        'updated_at',
        'dataNascimento',
    ];

    // public function profile()
    // {
    //     return $this->hasOne(Professor::class);
    // }
    public static function schoolUser($user){
        $query = DB::table('users')
        ->select('schoolSufix')
        ->where('schoolSufix', 'IS NOT', NULL);
        if($user && $user->hasRole('client')){
            $query->where("schoolSufix" , "=", $user->schoolSufix);
        }
        $data = $query->get()
        ->pluck('schoolSufix');
        return $data; 
    }
    
    public function professor(){
        return $this->hasOne(PROFESSOR::class, 'idUser');
    }

    public function aluno(){
        return $this->hasOne(ALUNO::class,'idUser');
    }

    public function address()
    {
        return $this->hasOne(Address::class, 'user_id');
    }
}
