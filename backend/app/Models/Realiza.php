<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Realiza
 *
 * @property int|null $idAluno
 * @property int|null $idUser
 * @property int|null $idProva
 * @property Carbon|null $iniciadaEmDataHora
 * @property Carbon|null $finalizadaEmDataHora
 *
 * @property PROVA|null $prova
 * @property ALUNO|null $aluno
 *
 * @package App\Models
 */
class Realiza extends Model
{
	protected $table = 'realiza';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'idAluno' => 'int',
		'idUser' => 'int',
		'idProva' => 'int',
        'inicioData' => 'date',
        'FimData' => 'date'
	];

	protected $fillable = [
        'inicioData' => 'date',
        'FimData' => 'date',
        'idProva' => 'int',
		'idAluno' => 'int',
		'idUser' => 'int',
        'inicioHora' => 'time',
        'fimHora' => 'datetime'
	];

	public function prova()
	{
		return $this->belongsTo(PROVA::class, 'idProva');
	}

	public function aluno()
	{
		return $this->belongsTo(ALUNO::class, 'idAluno')
					->where('ALUNO.idAluno', '=', 'realiza.idAluno')
					->where('ALUNO.idUser', '=', 'realiza.idUser');
	}
}
