<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class AREA
 *
 * @property int $idArea
 * @property string|null $nomeArea
 * @property string|null $siglaArea
 *
 * @property Collection|Especificada[] $especificadas
 *
 * @package App\Models
 */
class AREA extends Model
{
    use HasFactory;
    protected $hidden = ['pivot'];

	protected $table = 'AREA';
	protected $primaryKey = 'idArea';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'idArea' => 'int'
	];

	protected $fillable = [
		'nomeArea',
		'siglaArea'
	];

	public function especificadas()
	{
		return $this->hasMany(Especificada::class, 'idArea');
	}


    public static function withSimpleSearch($params, $searchable){
        return self::where($searchable, 'LIKE' , "%".$params."%")->orderBy($searchable)->paginate(5);
    }
}
