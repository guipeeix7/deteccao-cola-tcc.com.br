<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class ALUNO
 *
 * @property int $idAluno
 * @property string|null $metasEObjetivos
 * @property int $idUser
 *
 * @property User $user
 * @property Collection|FATURACompra[] $faturacompras
 * @property Collection|PEDIDOREEMBOLSO[] $pedidoreembolsos
 * @property Collection|Escreve[] $escreves
 * @property Collection|Realiza[] $realizas
 * @property Collection|Responde[] $respondes
 *
 * @package App\Models
 */
class ALUNO extends Model
{
	protected $table = 'ALUNO';
	public $incrementing = false;
	public $timestamps = false;
	protected $primaryKey = 'idAluno';

	protected $casts = [
		'idAluno' => 'int',
		'idUser' => 'int'
	];

	protected $fillable = [
		'metasEObjetivos',
        'idUser'
	];

	public function user()
	{
		return $this->belongsTo(User::class, 'idUser' ,'id');
	}

	public function faturacompras()
	{
		return $this->hasMany(FATURACompra::class, 'idAluno');
	}

	public function pedidoreembolsos()
	{
		return $this->hasMany(PEDIDOREEMBOLSO::class, 'idAluno');
	}

	public function escreves()
	{
		return $this->hasMany(Escreve::class, 'idAluno');
	}

	public function realizas()
	{
		return $this->hasMany(Realiza::class, 'idAluno');
	}

	public function respondes()
	{
		return $this->hasMany(Responde::class, 'idAluno');
	}
}
