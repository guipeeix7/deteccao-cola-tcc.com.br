<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
/**
 * Class BANCA
 *
 * @property int $idBanca
 * @property string|null $nomeBanca
 * @property string|null $siglaBanca
 * @property string|null $imagem
 *
 * @property Collection|CONCURSO[] $concursos
 * @property Collection|QUESTAO[] $questaos
 *
 * @package App\Models
 */
class BANCA extends Model
{
    use HasFactory;

	protected $table = 'BANCA';
	protected $primaryKey = 'idBanca';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'idBanca' => 'int'
	];

	protected $fillable = [
		'nomeBanca',
		'siglaBanca',
		'imagem'
	];

	public function concursos()
	{
		return $this->hasMany(CONCURSO::class, 'idBanca');
	}

	public function questaos()
	{
		return $this->hasMany(QUESTAO::class, 'idBanca');
	}
}
