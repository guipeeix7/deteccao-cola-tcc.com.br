<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
/**
 * Class Agrega
 *
 * @property int|null $idProva
 * @property int|null $idModulo
 *
 * @property MODULO|null $modulo
 * @property PROVA|null $prova
 *
 * @package App\Models
 */
class Agrega extends Model
{
    use HasFactory;
	protected $table = 'agrega';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'idProva' => 'int',
		'idModulo' => 'int'
	];

	public function modulo()
	{
		return $this->belongsTo(MODULO::class, 'idModulo');
	}

	public function prova()
	{
		return $this->belongsTo(PROVA::class, 'idProva');
	}
}
