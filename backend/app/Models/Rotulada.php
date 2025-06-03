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
 * @property int|null $idOrgao
 *
 * @property ORGAO|null $orgao
 * @property QUESTAO|null $questao
 *
 * @package App\Models
 */
class Rotulada extends Model
{
	protected $table = 'rotulada';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'idQuestao' => 'int',
		'idOrgao' => 'int'
	];

	public function orgao()
	{
		return $this->belongsTo(ORGAO::class, 'idOrgao');
	}

	public function questao()
	{
		return $this->belongsTo(QUESTAO::class, 'idQuestao');
	}
}
