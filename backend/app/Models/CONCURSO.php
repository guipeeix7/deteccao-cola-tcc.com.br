<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
/**
 * Class CONCURSO
 *
 * @property int|null $notaMinima
 * @property string|null $editalUrl
 * @property Carbon|null $realizacaoEm
 * @property Carbon|null $abertoEm
 * @property Carbon|null $updatedat
 * @property Carbon|null $createdat
 * @property string|null $siglaConcurso
 * @property string|null $nomeConcurso
 * @property int $idConcurso
 * @property string|null $escolaridade
 * @property string|null $imagemConcurso
 * @property int|null $numeroVagas
 * @property bool|null $possuiTesteAptidaoFisica
 * @property int|null $idBanca
 *
 * @property BANCA|null $banca
 * @property Collection|CURSO[] $cursos
 * @property Collection|Emprega[] $empregas
 * @property Collection|Focada[] $focadas
 * @property Collection|Utiliza[] $utilizas
 *
 * @package App\Models
 */
class CONCURSO extends Model
{
    use HasFactory;
	protected $table = 'CONCURSO';
	protected $primaryKey = 'idConcurso';
	public $incrementing = true;

	protected $casts = [
		'notaMinima' => 'int',
		'realizacaoEm' => 'datetime',
		'abertoEm' => 'datetime',
		'idConcurso' => 'int',
		'numeroVagas' => 'int',
		'possuiTesteAptidaoFisica' => 'bool',
		'idBanca' => 'int'
	];

	protected $fillable = [
		'notaMinima',
		'editalUrl',
		'realizacaoEm',
		'abertoEm',
		'siglaConcurso',
		'nomeConcurso',
		'escolaridade',
		'imagemConcurso',
		'numeroVagas',
		'possuiTesteAptidaoFisica',
		'idBanca'
	];

	public function banca()
	{
		return $this->belongsTo(BANCA::class, 'idBanca');
	}

	public function cursos()
	{
		return $this->hasMany(CURSO::class, 'idConcurso');
	}

	public function emprega()
	{
		return $this->belongsToMany(POSICAO::class, 'emprega', 'idConcurso', 'idPosicao');
	}

	public function focadas()
	{
		return $this->hasMany(Focada::class, 'idConcurso');
	}

	public function utilizas()
	{
		return $this->hasMany(Utiliza::class, 'idConcurso');
	}
}
