<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Alternative
 *
 * @property int $tQuestionId
 * @property string|null $alternativa
 * @property int $idAlternativa
 *
 * @property Tquestion $tquestion
 *
 * @package App\Models
 */
class Alternative extends Model
{
	protected $table = 'alternatives';
	protected $primaryKey = 'idAlternativa';
	public $incrementing = true;
	public $timestamps = false;

	protected $casts = [
		'tQuestionId' => 'int',
		'idAlternativa' => 'int'
	];

	protected $fillable = [
		'tQuestionId',
		'alternativa'
	];

	public function tquestion()
	{
		return $this->belongsTo(Tquestion::class, 'tQuestionId');
	}
}
