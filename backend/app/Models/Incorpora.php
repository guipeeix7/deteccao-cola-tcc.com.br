<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Incorpora
 *
 * @property int|null $idVideo
 * @property int|null $idCorrecao
 *
 * @property CORRECAO|null $correcao
 * @property VIDEO|null $video
 *
 * @package App\Models
 */
class Incorpora extends Model
{
	protected $table = 'incorpora';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'idVideo' => 'int',
		'idCorrecao' => 'int'
	];

	public function correcao()
	{
		return $this->belongsTo(CORRECAO::class, 'idCorrecao');
	}

	public function video()
	{
		return $this->belongsTo(VIDEO::class, 'idVideo');
	}
}
