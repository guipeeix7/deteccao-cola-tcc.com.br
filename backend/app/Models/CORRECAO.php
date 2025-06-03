<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\DB;
/**
 * Class CORRECAO
 *
 * @property int $idCorrecao
 * @property string|null $textoCorrecao
 * @property Carbon|null $createdat
 * @property Carbon|null $updatedat
 * @property int|null $idProfessor
 * @property int|null $idUser
 *
 * @property PROFESSOR|null $professor
 * @property Collection|Agrupa[] $agrupas
 * @property Collection|Detalhada[] $detalhadas
 * @property Collection|Explicada[] $explicadas
 * @property Collection|Incorpora[] $incorporas
 *
 * @package App\Models
 */
class CORRECAO extends Model
{
    use HasFactory;
	protected $table = 'CORRECAO';
	protected $primaryKey = 'idCorrecao';
	public $incrementing = true;

	protected $casts = [
		'idCorrecao' => 'int',
		'idProfessor' => 'int',
		'idUser' => 'int'
	];

	protected $fillable = [
		'textoCorrecao',
		'idProfessor',
		'idUser',
		'correcaoSelecionada',
	];

    public static function collectCorrectionsByQuestionId(int $questionId){
        // return DB::table('CORRECAO')

        // ->where()
    }
    public static function checkIfExistsByQuestion(int $idQuestao){
        return DB::table('CORRECAO')
        ->select(DB::raw('COUNT(explicada.idCorrecao) AS TOTAL'), 'CORRECAO.idCorrecao')
        ->leftJoin('explicada', 'CORRECAO.idCorrecao', 'explicada.idCorrecao')
        ->where('idQuestao', '=', $idQuestao)
        ->where('correcaoSelecionada', '=', '1')
        ->groupBy('explicada.idQuestao', 'CORRECAO.idCorrecao')
        ->first();
    }

    public static function selectCorrectionByQuestion($idQuestao, $idCorrecao){
        $hasCorrect = self::checkIfExistsByQuestion($idQuestao);

        if($hasCorrect?->idCorrecao == $idCorrecao){

            DB::table('CORRECAO')
            ->leftJoin('explicada', 'CORRECAO.idCorrecao', 'explicada.idCorrecao')
            ->where('CORRECAO.idCorrecao', '=', $idCorrecao)
            ->update(['correcaoSelecionada' => false]);

            return -2;
        }

        if($hasCorrect?->TOTAL >= 1){
            DB::table('CORRECAO')
            ->leftJoin('explicada', 'CORRECAO.idCorrecao', 'explicada.idCorrecao')
            ->where('idQuestao', '=', $idQuestao)
            ->where('correcaoSelecionada', '=', '1')
            ->update(['correcaoSelecionada' => false]);
        }

        $correction = DB::table('CORRECAO')
        ->where('idCorrecao', $idCorrecao)
        ->update(['correcaoSelecionada' => true]);

        return $correction;
    }

	public function professor()
	{
		return $this->belongsTo(PROFESSOR::class, 'idProfessor')
					->where('PROFESSOR.idProfessor', '=', 'CORRECAO.idProfessor')
					->where('PROFESSOR.idUser', '=', 'CORRECAO.idUser');
	}

	public function agrupa()
	{
		return $this->belongsToMany(PDF::class, 'agrupa', 'idCorrecao', 'idPdf');
	}

	public function detalhadas()
	{
		return $this->hasMany(Detalhada::class, 'idCorrecao');
	}

	public function explicada()
	{
		return $this->hasMany(Explicada::class, 'idCorrecao');
	}

	// public function incorporam()
	// {
	// 	return $this->hasMany(Incorpora::class, 'idCorrecao');
	// }
    public function incorpora(){
        return $this->belongsToMany(VIDEO::class, 'incorpora', 'idCorrecao', 'idVideo');
    }
}
