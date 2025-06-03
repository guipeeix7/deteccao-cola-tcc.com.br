<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\DB;
/**
 * Class CURSO
 *
 * @property string|null $resumo
 * @property string|null $descricaoCompleta
 * @property float|null $precoAtual
 * @property float|null $precoPromocao
 * @property string|null $siglaCurso
 * @property string|null $nomeCurso
 * @property int $idCurso
 * @property string|null $imagemCurso
 * @property int|null $idConcurso
 *
 * @property CONCURSO|null $concurso
 * @property Collection|FATURACompra[] $faturacompras
 * @property Collection|MODULO[] $modulos
 * @property Collection|Foca[] $focas
 *
 * @package App\Models
 */
class CURSO extends Model
{
    use HasFactory;
	protected $table = 'CURSO';
	protected $primaryKey = 'idCurso';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'precoAtual' => 'float',
		'precoPromocao' => 'float',
		'idCurso' => 'int',
		'idConcurso' => 'int'
	];

	protected $fillable = [
		'resumo',
		'descricaoCompleta',
		'precoAtual',
		'precoPromocao',
		'siglaCurso',
		'nomeCurso',
		'imagemCurso',
		'idConcurso'
	];



    public static function getStatusFromCourse($idCurso, $idUser){
        return DB::select("
            SELECT * FROM(
                SELECT COUNT(QUESTAO.idQuestao) AS TotalQuestions FROM CURSO
                LEFT JOIN MODULO  ON MODULO.idCurso = ?
                LEFT JOIN agrega  ON MODULO.idModulo = agrega.idModulo
                LEFT JOIN PROVA   ON agrega.idProva = PROVA.idProva
                LEFT JOIN abrange ON abrange.idProva = PROVA.idProva
                LEFT JOIN QUESTAO ON abrange.idQuestao = QUESTAO.idQuestao
            ) AS Total,
            (
                SELECT COUNT(QUESTAO.idQuestao) AS TotalCorrectQuestions FROM CURSO
                LEFT JOIN MODULO  ON MODULO.idCurso = ?
                LEFT JOIN agrega  ON MODULO.idModulo = agrega.idModulo
                LEFT JOIN PROVA   ON agrega.idProva = PROVA.idProva
                LEFT JOIN abrange ON abrange.idProva = PROVA.idProva
                LEFT JOIN QUESTAO ON abrange.idQuestao = QUESTAO.idQuestao
                LEFT JOIN responde ON QUESTAO.opcaoCorreta = responde.resposta
                    AND responde.idProva = PROVA.idProva
                    AND responde.idUser = ?
                WHERE QUESTAO.opcaoCorreta = responde.resposta
            ) AS correct
            ",
            [
                $idCurso, $idCurso, $idUser
            ]);
    }

    /**
     * Function to know if user has paid the course
     * @param $courseId id of desired course
     * @param $userId authenticated user id
     */
    public static function isPaidCourse(int $courseId, int $userId):int{
        return (DB::table('fatura_compra')
        ->where('idUser', '=', $userId)
        ->where('statusPagamento','=' ,'approved')
        ->where('idCurso', '=', $courseId)
        // ->where('total','=','totalPago')
        ->exists() == true) ? 1 : 0;
    }

	public function concurso()
	{
		return $this->belongsTo(CONCURSO::class, 'idConcurso');
	}

	public function faturacompras()
	{
		return $this->hasMany(FATURACompra::class, 'idCurso');
	}

	public function modulos()
	{
		return $this->hasMany(MODULO::class, 'idCurso');
	}

	public function foca()
	{
		return $this->hasMany(Foca::class, 'idCurso');
	}
}
