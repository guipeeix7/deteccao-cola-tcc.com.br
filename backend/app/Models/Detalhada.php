<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Detalhada
 *
 * @property int|null $idProva
 * @property int|null $idCorrecao
 *
 * @property CORRECAO|null $correcao
 * @property PROVA|null $prova
 *
 * @package App\Models
 */
class Detalhada extends Model
{
	protected $table = 'detalhada';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'idProva' => 'int',
		'idCorrecao' => 'int'
	];

	public function correcao()
	{
		return $this->belongsTo(CORRECAO::class, 'idCorrecao');
	}

	public function prova()
	{
		return $this->belongsTo(PROVA::class, 'idProva');
	}
}
