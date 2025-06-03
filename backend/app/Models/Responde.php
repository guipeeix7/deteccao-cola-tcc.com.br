<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
/**
 * Class Responde
 *
 * @property int|null $idAluno
 * @property int|null $idQuestao
 * @property string|null $resposta
 * @property Carbon|null $dataHora
 * @property int|null $idUser
 *
 * @property QUESTAO|null $questao
 * @property ALUNO|null $aluno
 *
 * @package App\Models
 */
class Responde extends Model
{
	protected $table = 'responde';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'idAluno' => 'int',
		'idQuestao' => 'int',
		'data' => 'date',
		// 'hora' => 'time',
		'idUser' => 'int',
        'resposta' => 'int',
        'idProva' => 'int'
	];

	protected $fillable = [
		'resposta',
		'date',
		'time',
        'idProva'
	];

	public function questao()
	{
		return $this->belongsTo(QUESTAO::class, 'idQuestao');
	}

	public function aluno()
	{
		return $this->belongsTo(ALUNO::class, 'idAluno')
					->where('ALUNO.idAluno', '=', 'responde.idAluno')
					->where('ALUNO.idUser', '=', 'responde.idUser');
	}
}
