<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
/**
 * Class PROFESSOR
 *
 * @property string|null $linkedin
 * @property string|null $lattes
 * @property int $idProfessor
 * @property int $idUser
 *
 * @property User $user
 * @property Collection|CORRECAO[] $correcaos
 *
 * @package App\Models
 */
class PROFESSOR extends Model
{
    use HasFactory;
	protected $table = 'PROFESSOR';
	public $incrementing = false;
	public $timestamps = false;
	protected $primaryKey = 'idProfessor';

	protected $casts = [
		'idProfessor' => 'int',
		'idUser' => 'int'
	];

	protected $fillable = [
		'linkedin',
		'lattes',
        'idUser'
	];

	public function user()
	{
		return $this->belongsTo(User::class,  'idProfessor', 'idUser');
	}

	public function correcaos()
	{
		return $this->hasMany(CORRECAO::class, 'idProfessor');
	}
}
