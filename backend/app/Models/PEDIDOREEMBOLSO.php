<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

/**
 * Class PEDIDOREEMBOLSO
 *
 * @property int|null $statusReembolso
 * @property string|null $textoExplicativo
 * @property int $reembolsoId
 * @property string|null $imagemComprovante
 * @property int|null $idAluno
 * @property int|null $idUser
 * @property int|null $faturaId
 * @property Carbon|null $TIMESTAMP
 *
 * @property ALUNO|null $aluno
 * @property FATURACompra|null $faturacompra
 *
 * @package App\Models
 */
class PEDIDOREEMBOLSO extends Model
{
	protected $table = 'PEDIDOREEMBOLSO';
	protected $primaryKey = 'reembolsoId';
	public $incrementing = true;
	public $timestamps = false;

	protected $casts = [
		'reembolsoId' => 'int',
		'idAluno' => 'int',
		'idUser' => 'int',
		'faturaId' => 'int',
	];

	protected $fillable = [
		'statusReembolso',
		'textoExplicativo',
		'imagemComprovante',
		'idAluno',
		'idUser',
		'faturaId',
		'createdAtDate',
		'createdAtTime',
		'updatedAtDate',
		'updatedAtTime',
	];

	public function aluno()
	{
		return $this->belongsTo(ALUNO::class, 'idAluno')
					->where('ALUNO.idAluno', '=', 'PEDIDOREEMBOLSO.idAluno')
					->where('ALUNO.idUser', '=', 'PEDIDOREEMBOLSO.idUser');
	}

	public function faturacompra()
	{
		return $this->belongsTo(FATURACompra::class, 'faturaId');
	}

    public static function courseRefounded($courseId, $userId){
        return DB::table('FATURA_compra AS Fc')
        ->leftJoin('PEDIDOREEMBOLSO AS PR', 'Fc.faturaId','=', 'PR.faturaID')
        ->where('PR.idUser', '=', $userId)
        ->where('Fc.idCurso', '=', $courseId)
        ->where('PR.statusReembolso', '=', 'accepted')
        // opened
        ->exists();
    }
}
