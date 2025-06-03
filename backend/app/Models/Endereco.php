<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Endereco
 *
 * @property int $enderecoId
 * @property string|null $cidade
 * @property string|null $estado
 * @property string|null $vizinhanca
 * @property string|null $complemento
 * @property int|null $numero
 * @property int|null $idUser
 *
 * @property User|null $user
 *
 * @package App\Models
 */
class Endereco extends Model
{
	protected $table = 'endereco';
	protected $primaryKey = 'enderecoId';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'enderecoId' => 'int',
		'numero' => 'int',
		'idUser' => 'int'
	];

	protected $fillable = [
		'cidade',
		'estado',
		'vizinhanca',
		'complemento',
		'numero',
		'idUser'
	];

	public function user()
	{
		return $this->belongsTo(User::class, 'idUser');
	}
}
