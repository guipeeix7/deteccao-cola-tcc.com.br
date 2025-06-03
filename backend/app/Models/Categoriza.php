<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Categoriza
 *
 * @property int|null $idAssunto
 * @property int|null $idQuestao
 *
 * @property ASSUNTO|null $assunto
 * @property QUESTAO|null $questao
 *
 * @package App\Models
 */
class Categoriza extends Model
{
	protected $table = 'categoriza';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'idAssunto' => 'int',
		'idQuestao' => 'int'
	];

	public function assunto()
	{
		return $this->belongsTo(ASSUNTO::class, 'idAssunto');
	}

	public function questao()
	{
		return $this->belongsTo(QUESTAO::class, 'idQuestao');
	}
}
