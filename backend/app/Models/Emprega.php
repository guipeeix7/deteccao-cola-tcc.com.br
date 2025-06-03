<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Emprega
 *
 * @property int|null $idPosicao
 * @property int|null $idConcurso
 *
 * @property CONCURSO|null $concurso
 * @property POSICAO|null $posicao
 *
 * @package App\Models
 */
class Emprega extends Model
{
	protected $table = 'emprega';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'idPosicao' => 'int',
		'idConcurso' => 'int'
	];

	public function concurso()
	{
		return $this->belongsTo(CONCURSO::class, 'idConcurso');
	}

	public function posicao()
	{
		return $this->belongsTo(POSICAO::class, 'idPosicao');
	}
}
