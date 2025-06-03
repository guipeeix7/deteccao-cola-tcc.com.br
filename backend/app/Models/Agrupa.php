<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Agrupa
 *
 * @property int|null $idPdf
 * @property int|null $idCorrecao
 *
 * @property CORRECAO|null $correcao
 * @property PDF|null $pdf
 *
 * @package App\Models
 */
class Agrupa extends Model
{
	protected $table = 'agrupa';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'idPdf' => 'int',
		'idCorrecao' => 'int'
	];

	public function correcao()
	{
		return $this->belongsTo(CORRECAO::class, 'idCorrecao');
	}

	public function pdf()
	{
		return $this->belongsTo(PDF::class, 'idPdf');
	}
}
