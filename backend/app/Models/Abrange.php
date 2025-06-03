<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
/**
 * Class Abrange
 *
 * @property int|null $idProva
 * @property int|null $idQuestao
 *
 * @property QUESTAO|null $questao
 * @property PROVA|null $prova
 *
 * @package App\Models
 */
class Abrange extends Model
{
    use HasFactory;
	protected $table = 'abrange';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'idProva' => 'int',
		'idQuestao' => 'int'
	];

	public function questao()
	{
		return $this->belongsTo(QUESTAO::class, 'idQuestao');
	}

	public function prova()
	{
		return $this->belongsTo(PROVA::class, 'idProva');
	}
}
