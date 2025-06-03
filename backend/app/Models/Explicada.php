<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Explicada
 *
 * @property int|null $idQUestao
 * @property int|null $idCorrecao
 *
 * @property CORRECAO|null $correcao
 * @property QUESTAO|null $questao
 *
 * @package App\Models
 */
class Explicada extends Model
{
	protected $table = 'explicada';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'idQUestao' => 'int',
		'idCorrecao' => 'int'
	];

	protected $fillable = [
		'idQUestao',
		'idCorrecao'
    ];

	public function correcao()
	{
		return $this->belongsTo(CORRECAO::class, 'idCorrecao');
	}

	public function questao()
	{
		return $this->belongsTo(QUESTAO::class, 'idQUestao');
	}
}
