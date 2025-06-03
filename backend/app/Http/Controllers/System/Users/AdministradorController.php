<?php

namespace App\Http\Controllers\System\Users;

use App\Models\User;
use App\Models\Aluno;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Query\JoinClause;
use App\Http\Requests\UpdateAlunoRequest;
use App\Http\Controllers\System\UserController;
use App\Models\CONTABANCARIA;
use App\Services\UserServiceContainer;
use Illuminate\Support\Facades\Auth;
use App\Models\PEDIDOREEMBOLSO;
use App\Models\FATURACompra;

class AdministradorController extends UserController
{

    public function __construct()
    {

    }
    /**
     * Display a listing of the resource.
     */
    private function getSalesStatistics(){

    }

    public function deleteUserAccountUnderDemand($userId){
        $errorMessage = '';
        $user = DB::table('users')
        ->where('id', '=', $userId)
        ->where('status' , '=', -1)
        ->first();
        if($user){
            PEDIDOREEMBOLSO::where('idUser', '=' ,$userId)->delete();
            FATURACompra::where('idUser', '=' ,$userId)->delete();
            CONTABANCARIA::where('idUser', '=' ,$userId)->delete();
            User::where('id', '=', $userId)->delete();
        }
        else{
            $errorMessage = 'O usuário especificado não solicitou a deleção de conta.';
        }
        return ['data' => $userId, 'error' => $errorMessage];
    }
}
