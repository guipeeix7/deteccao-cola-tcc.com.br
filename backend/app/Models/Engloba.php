<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Engloba
 *
 * @property int|null $idResumo
 * @property int|null $idAssunto
 *
 * @property ASSUNTO|null $assunto
 * @property RESUMO|null $resumo
 *
 * @package App\Models
 */
class Engloba extends Model
{
	protected $table = 'engloba';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'idResumo' => 'int',
		'idAssunto' => 'int'
	];

	public function assunto()
	{
		return $this->belongsTo(ASSUNTO::class, 'idAssunto');
	}

	public function resumo()
	{
		return $this->belongsTo(RESUMO::class, 'idResumo');
	}
}
