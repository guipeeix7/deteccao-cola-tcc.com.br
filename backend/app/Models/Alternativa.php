<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Testing\Fluent\Concerns\Has;

/**
 * Class Alternativa
 *
 * @property int $alternativaId
 * @property string|null $alternativa
 * @property int|null $idQuestao
 *
 * @property QUESTAO|null $questao
 *
 * @package App\Models
 */
class Alternativa extends Model
{
    use HasFactory;
	protected $table = 'alternativa';
	protected $primaryKey = 'alternativaId';
	public $incrementing = true;
	public $timestamps = false;

	protected $casts = [
		'alternativaId' => 'int',
		'idQuestao' => 'int'
	];

	protected $fillable = [
		'alternativa',
		'idQuestao'
	];

	public function questao()
	{
		return $this->belongsTo(QUESTAO::class, 'idQuestao');
	}
}
