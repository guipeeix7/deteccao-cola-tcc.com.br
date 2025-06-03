<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Utiliza
 *
 * @property int|null $idConcurso
 * @property int|null $idProva
 *
 * @property CONCURSO|null $concurso
 * @property PROVA|null $prova
 *
 * @package App\Models
 */
class Utiliza extends Model
{
	protected $table = 'utiliza';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'idConcurso' => 'int',
		'idProva' => 'int'
	];

	public function concurso()
	{
		return $this->belongsTo(CONCURSO::class, 'idConcurso');
	}

	public function prova()
	{
		return $this->belongsTo(PROVA::class, 'idProva');
	}
}
