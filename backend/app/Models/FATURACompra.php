<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class FATURACompra
 *
 * @property int $faturaId
 * @property string|null $referencia
 * @property int|null $statusPagamento
 * @property int|null $desconto
 * @property float|null $total
 * @property float|null $totalPago
 * @property Carbon|null $createdat
 * @property Carbon|null $updatedat
 * @property int|null $idAluno
 * @property int|null $idUser
 * @property int|null $idCurso
 *
 * @property CURSO|null $curso
 * @property ALUNO|null $aluno
 * @property Collection|PEDIDOREEMBOLSO[] $pedidoreembolsos
 *
 * @package App\Models
 */
class FATURACompra extends Model
{
	protected $table = 'fatura_compra';
	protected $primaryKey = 'faturaId';
	public $incrementing = true;

	protected $casts = [
		'faturaId' => 'int',
		'statusPagamento' => 'int',
		'desconto' => 'int',
		'total' => 'float',
		'totalPago' => 'float',
		'idAluno' => 'int',
		'idUser' => 'int',
		'idCurso' => 'int'
	];

	protected $fillable = [
		'referencia',
		'statusPagamento',
		'desconto',
		'total',
		'totalPago',
		'idAluno',
		'idUser',
		'idCurso',
		'paymentType',
		'qr_code',
		'qr_code_base64',
		'ticket_url',
	];

	public function curso()
	{
		return $this->belongsTo(CURSO::class, 'idCurso');
	}

	public function aluno()
	{
		return $this->belongsTo(ALUNO::class, 'idAluno')
					->where('ALUNO.idAluno', '=', 'FATURAcompra.idAluno')
					->where('ALUNO.idUser', '=', 'FATURAcompra.idUser');
	}

	public function pedidoreembolsos()
	{
		return $this->hasMany(PEDIDOREEMBOLSO::class, 'faturaId');
	}
}
