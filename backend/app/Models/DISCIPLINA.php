<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class DISCIPLINA
 *
 * @property int $idDisciplina
 * @property string|null $nomeDisciplina
 *
 * @property Collection|Qualificada[] $qualificadas
 *
 * @package App\Models
 */
class DISCIPLINA extends Model
{
    use HasFactory;

	protected $table = 'DISCIPLINA';
	protected $primaryKey = 'idDisciplina';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'idDisciplina' => 'int'
	];

	protected $fillable = [
		'nomeDisciplina'
	];

	public function qualificada()
	{
		return $this->hasMany(Qualificada::class, 'idDisciplina');
	}

    public static function withSimpleSearch($params, $searchable){
        return self::where($searchable, 'LIKE' , "%".$params."%")->orderBy($searchable)->paginate(5);
    }
}
