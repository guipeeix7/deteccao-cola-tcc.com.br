<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Especificada
 *
 * @property int|null $idArea
 * @property int|null $idQuestao
 *
 * @property AREA|null $area
 * @property QUESTAO|null $questao
 *
 * @package App\Models
 */
class Especificada extends Model
{
	protected $table = 'especificada';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'idArea' => 'int',
		'idQuestao' => 'int'
	];

	public function area()
	{
		return $this->belongsTo(AREA::class, 'idArea');
	}

	public function questao()
	{
		return $this->belongsTo(QUESTAO::class, 'idQuestao');
	}
}
