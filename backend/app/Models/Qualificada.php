<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Qualificada
 *
 * @property int|null $idDisciplina
 * @property int|null $idQuestao
 *
 * @property DISCIPLINA|null $disciplina
 * @property QUESTAO|null $questao
 *
 * @package App\Models
 */
use Illuminate\Database\Eloquent\Factories\HasFactory;
class Qualificada extends Model
{
    use hasFactory;

	protected $table = 'qualificada';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'idDisciplina' => 'int',
		'idQuestao' => 'int'
	];

	public function disciplina()
	{
		return $this->belongsTo(DISCIPLINA::class, 'idDisciplina');
	}

	public function questao()
	{
		return $this->belongsTo(QUESTAO::class, 'idQuestao');
	}
}
