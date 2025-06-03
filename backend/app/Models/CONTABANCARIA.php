<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class CONTABANCARIUM
 *
 * @property int $idContaBancaria
 * @property int|null $agencia
 * @property int|null $numeroConta
 * @property string|null $pix
 * @property int|null $idUser
 *
 * @property User|null $user
 *
 * @package App\Models
 */
class CONTABANCARIA extends Model
{
	protected $table = 'CONTABANCARIA';
	protected $primaryKey = 'idContaBancaria';
	public $incrementing = true;
	public $timestamps = false;

        protected $casts = [
            'idContaBancaria' => 'int',
            'agencia' => 'int',
            'numeroConta' => 'int',
            'idUser' => 'int'
	];

	protected $fillable = [
		'agencia',
		'numeroConta',
		'pix',
		'idUser'
	];

	public function user()
	{
		return $this->belongsTo(User::class, 'idUser');
	}
}
