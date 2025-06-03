<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
/**
 * Class MODULO
 *
 * @property int $idModulo
 * @property int|null $posicaoModulo
 * @property string|null $nomeModulo
 * @property int|null $idCurso
 *
 * @property CURSO|null $curso
 * @property Collection|Acrescenta[] $acrescenta
 * @property Collection|Agrega[] $agregas
 * @property Collection|Integra[] $integras
 *
 * @package App\Models
 */
class MODULO extends Model
{
    use HasFactory;
	protected $table = 'MODULO';
	protected $primaryKey = 'idModulo';
	public $incrementing = true;
	public $timestamps = false;

	protected $casts = [
		'idModulo' => 'int',
		'posicaoModulo' => 'int',
		'idCurso' => 'int'
	];

	protected $fillable = [
		'posicaoModulo',
		'nomeModulo',
		'idCurso',
        'moduloAberto'
	];

	public function curso()
	{
		return $this->belongsTo(CURSO::class, 'idCurso');
	}

	public function acrescenta()
	{
		return $this->belongsToMany(VIDEO::class, 'acrescenta', 'idModulo', 'idVideo');
	}

	public function agrega()
	{
		return $this->belongsToMany(PROVA::class, 'agrega', 'idModulo' ,'idProva');
	}

	public function integra()
	{
		return $this->belongsToMany(PDF::class, 'integra', 'idModulo', 'idPdf');
	}
}
