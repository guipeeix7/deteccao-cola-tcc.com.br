<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Escreve
 *
 * @property int|null $idResumo
 * @property int|null $idAluno
 * @property int|null $idUser
 *
 * @property ALUNO|null $aluno
 * @property RESUMO|null $resumo
 *
 * @package App\Models
 */
class Escreve extends Model
{
	protected $table = 'escreve';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'idResumo' => 'int',
		'idAluno' => 'int',
		'idUser' => 'int'
	];

	public function aluno()
	{
		return $this->belongsTo(ALUNO::class, 'idAluno')
					->where('ALUNO.idAluno', '=', 'escreve.idAluno')
					->where('ALUNO.idUser', '=', 'escreve.idUser');
	}

	public function resumo()
	{
		return $this->belongsTo(RESUMO::class, 'idResumo');
	}
}
