<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class Integra
 *
 * @property int|null $idModulo
 * @property int|null $idPdf
 *
 * @property MODULO|null $modulo
 * @property PDF|null $pdf
 *
 * @package App\Models
 */
class Integra extends Model
{
    use HasFactory;
	protected $table = 'integra';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'idModulo' => 'int',
		'idPdf' => 'int'
	];

	public function modulo()
	{
		return $this->belongsTo(MODULO::class, 'idModulo');
	}

	public function pdf()
	{
		return $this->belongsTo(PDF::class, 'idPdf');
	}
}
