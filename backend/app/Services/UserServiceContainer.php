<?php
namespace App\Services;

use App\Models\ALUNO;
use App\Models\PROFESSOR;
use App\Models\User;

class UserServiceContainer {
    public function linkNewEmptyAluno(int $userId = 0)
    {
        $data = [];
        $user = User::find($userId);
        $aluno = ALUNO::where('idUser', '=', $user->id)->first();
        if($aluno){
            $this->destroyAluno($aluno);
            return print(json_encode(["message" => "aluno destroyed"]));
        }else{
            $data = Aluno::create(
                [
                    'metasEObjetivos' => '',
                    'idUser' => $user->id
                    ]
                );
            return print(json_encode($data));
        }
    }

    public function destroyAluno(Aluno $aluno)
    {
        $deleted = $aluno->delete();
        return $deleted;
    }


    public function linkNewEmptyProfessor(int $userId = 0)
    {
        $data = [];
        $user = User::find($userId);
        $professor = PROFESSOR::where('idUser', '=', $user->id)->first();
        if($professor){
            $this->destroyProfessor($professor);
            return print(json_encode(["message" => "professor destroyed"]));
        }else{
            $data = PROFESSOR::create(
                [
                    'linkedin' => '',
                    'lattes' => '',
                    'idUser' => $user->id
                    ]
                );
            return print(json_encode($data));
        }
    }

    public function destroyProfessor(Professor $professor)
    {
        $deleted = $professor->delete();
        return $deleted;
    }
}

?>
