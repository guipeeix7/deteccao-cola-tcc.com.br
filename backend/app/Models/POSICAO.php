<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
/**
 * Class POSICAO
 *
 * @property int $idPosicao
 * @property string|null $nomePosicao
 * @property string|null $siglaPosicao
 *
 * @property Collection|Emprega[] $empregas
 * @property Collection|Foca[] $focas
 * @property Collection|Organizada[] $organizadas
 *
 * @package App\Models
 */
class POSICAO extends Model
{
    use HasFactory;

	protected $table = 'POSICAO';
	protected $primaryKey = 'idPosicao';
	public $incrementing = true;
	public $timestamps = false;

	protected $casts = [
		'idPosicao' => 'int'
	];

	protected $fillable = [
		'nomePosicao',
		'siglaPosicao'
	];

	public function empregas()
	{
		return $this->hasMany(Emprega::class, 'idPosicao');
	}

	public function focas()
	{
		return $this->hasMany(Foca::class, 'idPosicao');
	}

	public function organizadas()
	{
		return $this->hasMany(Organizada::class, 'idPosicao');
	}
}
