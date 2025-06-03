<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Organizada
 *
 * @property int|null $idQuestao
 * @property int|null $idPosicao
 *
 * @property POSICAO|null $posicao
 * @property QUESTAO|null $questao
 *
 * @package App\Models
 */
class Organizada extends Model
{
	protected $table = 'organizada';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'idQuestao' => 'int',
		'idPosicao' => 'int'
	];

	public function posicao()
	{
		return $this->belongsTo(POSICAO::class, 'idPosicao');
	}

	public function questao()
	{
		return $this->belongsTo(QUESTAO::class, 'idQuestao');
	}
}
