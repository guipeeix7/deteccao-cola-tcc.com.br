<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
/**
 * Class Acrescentum
 *
 * @property int|null $idModulo
 * @property int|null $idVideo
 *
 * @property MODULO|null $modulo
 * @property VIDEO|null $video
 *
 * @package App\Models
 */
class Acrescenta extends Model
{
    use HasFactory;
	protected $table = 'acrescenta';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'idModulo' => 'int',
		'idVideo' => 'int'
	];

	public function modulo()
	{
		return $this->belongsTo(MODULO::class, 'idModulo');
	}

	public function video()
	{
		return $this->belongsTo(VIDEO::class, 'idVideo');
	}
}
