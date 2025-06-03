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
 * Class PROVA
 *
 * @property int $idProva
 * @property string|null $nomeProva
 * @property string|null $descricaoProva
 * @property Carbon|null $updatedat
 * @property Carbon|null $createdat
 * @property Carbon|null $dataAplicacao
 *
 * @property Collection|Abrange[] $abranges
 * @property Collection|Agrega[] $agregas
 * @property Collection|Detalhada[] $detalhadas
 * @property Collection|Realiza[] $realizas
 * @property Collection|Utiliza[] $utilizas
 *
 * @package App\Models
 */
class PROVA extends Model
{
    use HasFactory;
	protected $table = 'PROVA';
	protected $primaryKey = 'idProva';
	public $incrementing = true;

	protected $casts = [
		'idProva' => 'int',
		'dataAplicacao' => 'datetime'
	];

	protected $fillable = [
		'nomeProva',
		'descricaoProva',
		'dataAplicacao',
        'tempoMaximoProva'
    ];

    static function contestEnded($idProva, $uid){
        $dateHour = DB::table('realiza')->select('fimData', 'fimHora')->where('idUser', '=', $uid)->where('idProva', '=', $idProva)->first();
        if($dateHour->fimData != NULL && $dateHour->fimHora != NULL){
            return 1;
        }
        return 0;
    }

    public static function getStatsFromExam($idModulo, $idUser){
        return DB::select("
            select * FROM (
            SELECT COUNT(QUESTAO.idQuestao) AS TotalQuestions from agrega
            JOIN PROVA
                ON agrega.idProva = PROVA.idProva
            LEFT JOIN abrange
                ON PROVA.idProva = abrange.idProva
            LEFT JOIN QUESTAO
                ON abrange.idQuestao = QUESTAO.idQuestao
            LEFT JOIN responde
                ON QUESTAO.idQuestao = responde.idQuestao

            WHERE agrega.idModulo = ?
            ) AS TotalQuestionsR
            , (
            SELECT COUNT(QUESTAO.idQuestao) AS correctQuestions
            from agrega
            JOIN PROVA
                ON agrega.idProva = PROVA.idProva
            LEFT JOIN abrange
                ON PROVA.idProva = abrange.idProva
            LEFT JOIN QUESTAO
                ON abrange.idQuestao = QUESTAO.idQuestao
            LEFT JOIN responde
                ON QUESTAO.idQuestao = responde.idQuestao AND PROVA.idProva = responde.idProva

            WHERE agrega.idModulo = ?
            AND responde.idUser = ?
            AND QUESTAO.opcaoCorreta = responde.resposta
            ) AS correctQuestionsR,
            (
            SELECT COUNT(QUESTAO.idQuestao) AS wrongQuestions from agrega
            JOIN PROVA
                ON agrega.idProva = PROVA.idProva
            LEFT JOIN abrange
                ON PROVA.idProva = abrange.idProva
            LEFT JOIN QUESTAO
                ON abrange.idQuestao = QUESTAO.idQuestao
            LEFT JOIN responde
                ON QUESTAO.idQuestao = responde.idQuestao
                AND PROVA.idProva = responde.idProva
                AND responde.idUser = ?

            WHERE agrega.idModulo = ?
            AND QUESTAO.opcaoCorreta != responde.resposta
            AND responde.resposta IS NOT NULL
            ) AS wrongQuestionsR
            ;

        ", [$idModulo, $idModulo, $idUser, $idUser, $idModulo]);
    }

	public function abrange()
	{
		return $this->belongsToMany(QUESTAO::class, 'abrange', 'idProva' ,'idQuestao');
        // return $this->belongsToMany(AREA::class,'especificada','idQuestao','idArea');

	}

	public function agregas()
	{
		return $this->hasMany(Agrega::class, 'idProva');
	}

	public function detalhadas()
	{
		return $this->hasMany(Detalhada::class, 'idProva');
	}

	public function realizas()
	{
		return $this->hasMany(Realiza::class, 'idProva');
	}

	public function utilizas()
	{
		return $this->hasMany(Utiliza::class, 'idProva');
	}
}
