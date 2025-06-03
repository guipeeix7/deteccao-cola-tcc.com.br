<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Rotulada
 *
 * @property int|null $idQuestao
 * @property int|null $idMateria
 *
 * @property MATERIA|null $orgao
 * @property QUESTAO|null $questao
 *
 * @package App\Models
 */
class Vinculada extends Model
{
	protected $table = 'vinculada';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'idQuestao' => 'int',
		'idMateria' => 'int'
	];

	public function orgao()
	{
		return $this->belongsTo(MATERIA::class, 'idMateria');
	}

	public function questao()
	{
		return $this->belongsTo(QUESTAO::class, 'idQuestao');
	}
}
