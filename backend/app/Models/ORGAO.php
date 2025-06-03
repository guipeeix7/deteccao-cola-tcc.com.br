<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

// use Carbon\Factory;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Database\Factories\ORGAOFactory;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class ORGAO
 *
 * @property int $idOrgao
 * @property string|null $nomeOrgao
 * @property string|null $siglaOrgao
 *
 * @property Collection|Rotulada[] $rotuladas
 *
 * @package App\Models
 */
class ORGAO extends Model
{
    use HasFactory;

	protected $table = 'ORGAO';
	protected $primaryKey = 'idOrgao';
	// public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'idOrgao' => 'int'
	];

	protected $fillable = [
		'nomeOrgao',
		'siglaOrgao'
	];

	public function rotuladas()
	{
		return $this->hasMany(Rotulada::class, 'idOrgao');
	}

    public static function withSimpleSearch($params, $searchable){
        return self::where($searchable, 'LIKE' , "%".$params."%")->orderBy($searchable)->paginate(5);
    }
    // protected static newFactory() :Factory{
    //     return ORGAOFactory::new();
    // }
}
