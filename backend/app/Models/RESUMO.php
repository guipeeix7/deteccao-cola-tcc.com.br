<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
/**
 * Class RESUMO
 *
 * @property int $idResumo
 * @property string|null $nome
 * @property string|null $texto
 * @property int|null $visibilidade
 * @property Carbon|null $updatedat
 * @property Carbon|null $createdat
 *
 * @property Collection|Engloba[] $englobas
 * @property Collection|Escreve[] $escreves
 *
 * @package App\Models
 */
class RESUMO extends Model
{
    use HasFactory;
	protected $table = 'RESUMO';
	protected $primaryKey = 'idResumo';
	public $incrementing = true;

	protected $casts = [
		'idResumo' => 'int',
		'visibilidade' => 'int'
	];

	protected $fillable = [
		'nome',
		'texto',
		'visibilidade'
	];

	public function engloba()
	{
		return $this->belongsToMany(ASSUNTO::class ,'engloba',  'idResumo' , 'idAssunto');
	}

	public function escreve()
	{
		return $this->belongsToMany(User::class,'escreve', 'idResumo', 'idUser');
	}
}
