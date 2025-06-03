<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class PDF
 *
 * @property int $idPdf
 * @property string|null $nomePdf
 * @property string|null $caminho
 *
 * @property Collection|Agrupa[] $agrupas
 * @property Collection|Integra[] $integras
 *
 * @package App\Models
 */
class PDF extends Model
{
    use HasFactory;
	protected $table = 'PDF';
	protected $primaryKey = 'idPdf';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'idPdf' => 'int'
	];

	protected $fillable = [
		'nomePdf',
		'caminho'
	];

	public function agrupas()
	{
		return $this->hasMany(Agrupa::class, 'idPdf');
	}

	public function integras()
	{
		return $this->hasMany(Integra::class, 'idPdf');
	}
}
