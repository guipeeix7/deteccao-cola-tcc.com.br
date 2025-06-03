<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Foca
 *
 * @property int|null $idPosicao
 * @property int|null $idCurso
 *
 * @property CURSO|null $curso
 * @property POSICAO|null $posicao
 *
 * @package App\Models
 */
class Foca extends Model
{
	protected $table = 'foca';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'idPosicao' => 'int',
		'idCurso' => 'int'
	];

	public function curso()
	{
		return $this->belongsTo(CURSO::class, 'idCurso');
	}

	public function posicao()
	{
		return $this->belongsTo(POSICAO::class, 'idPosicao');
	}
}
