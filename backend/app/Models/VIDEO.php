<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class VIDEO
 *
 * @property string|null $nomeVideo
 * @property string|null $caminho
 * @property int $idVideo
 *
 * @property Collection|Acrescentum[] $acrescenta
 * @property Collection|Incorpora[] $incorporas
 *
 * @package App\Models
 */
class VIDEO extends Model
{
	protected $table = 'VIDEO';
	protected $primaryKey = 'idVideo';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'idVideo' => 'int'
	];

	protected $fillable = [
		'nomeVideo',
		'caminho',
        'tipoVideo',
        'videoThumb'
	];

	public function acrescenta()
	{
		return $this->hasMany(Acrescenta::class, 'idVideo');
	}

	public function incorporas()
	{
		return $this->hasMany(Incorpora::class, 'idVideo');
	}
}
