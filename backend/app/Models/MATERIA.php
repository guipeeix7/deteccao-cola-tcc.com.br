<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

// use Carbon\Factory;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Database\Factories\MATERIAFactory;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class MATERIA
 *
 * @property int $idMateria
 * @property string|null $nomeMateria
 * @property string|null $siglaMateria
 *
 * @property Collection|Rotulada[] $rotuladas
 *
 * @package App\Models
 */
class MATERIA extends Model
{
    use HasFactory;

	protected $table = 'MATERIA';
	protected $primaryKey = 'idMateria';
	public $timestamps = false;

	protected $casts = [
		'idMateria' => 'int'
	];

	protected $fillable = [
		'nomeMateria',
		'siglaMateria'
	];

	public function rotuladas()
	{
		return $this->hasMany(Vinculada::class, 'idMateria');
	}

    public static function withSimpleSearch($params, $searchable){
        return self::where($searchable, 'LIKE' , "%".$params."%")->orderBy($searchable)->paginate(5);
    }
}
