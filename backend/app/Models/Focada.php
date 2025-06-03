<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Focada
 *
 * @property int|null $idQuestao
 * @property int|null $idConcurso
 *
 * @property CONCURSO|null $concurso
 * @property QUESTAO|null $questao
 *
 * @package App\Models
 */
class Focada extends Model
{
	protected $table = 'focada';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'idQuestao' => 'int',
		'idConcurso' => 'int'
	];

	public function concurso()
	{
		return $this->belongsTo(CONCURSO::class, 'idConcurso');
	}

	public function questao()
	{
		return $this->belongsTo(QUESTAO::class, 'idQuestao');
	}
}
