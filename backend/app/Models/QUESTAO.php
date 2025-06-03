<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
/**
 * Class QUESTAO
 *
 * @property int $idQuestao
 * @property string|null $nomeQuestao
 * @property string|null $descricaoQuestao
 * @property string|null $opcaoCorreta
 * @property int|null $idBanca
 * @property Carbon|null $dataHora
 * @property string|null $resposta
 *
 * @property BANCA|null $banca
 * @property Collection|Abrange[] $abranges
 * @property Collection|Alternativa[] $alternativas
 * @property Collection|Categoriza[] $categorizas
 * @property Collection|Especificada[] $especificadas
 * @property Collection|Explicada[] $explicadas
 * @property Collection|Focada[] $focadas
 * @property Collection|Organizada[] $organizadas
 * @property Collection|Qualificada[] $qualificadas
 * @property Collection|Responde[] $respondes
 * @property Collection|Rotulada[] $rotuladas
 *
 * @package App\Models
 */
class QUESTAO extends Model
{
    use HasFactory;

	protected $table = 'QUESTAO';
	protected $primaryKey = 'idQuestao';
	public $incrementing = true;
	public $timestamps = false;
    protected $hidden = ['pivot'];

	protected $casts = [
		'idQuestao' => 'int',
		'idBanca' => 'int',
		'dataHora' => 'datetime'
	];

	protected $fillable = [
		'nomeQuestao',
		'descricaoQuestao',
		'opcaoCorreta',
		'idBanca',
		'dataHora',
		'resposta'
	];

	public function banca()
	{
		return $this->belongsTo(BANCA::class, 'idBanca');
	}

	public function abranges()
	{
		return $this->hasMany(Abrange::class, 'idQuestao');
	}

	public function alternativas()
	{
		return $this->hasMany(Alternativa::class, 'idQuestao');
	}

	public function categoriza()
	{
		return $this->belongsToMany(ASSUNTO::class,'categoriza', 'idQuestao', 'idAssunto');
	}

	public function especificadas()
	{
		return $this->belongsToMany(AREA::class,'especificada','idQuestao','idArea');
	}

	public function explicada()
	{
		return $this->belongsToMany(CORRECAO::class,'explicada', 'idQUestao', 'idCorrecao');
	}

	public function focadas()
	{
		return $this->belongsToMany(CONCURSO::class, 'focada', 'idQuestao', 'idConcurso');
	}

	public function organizadas()
	{
		return $this->belongsToMany(POSICAO::class, 'organizada', 'idQuestao', 'idPosicao');
	}

	public function qualificadas()
	{
		return $this->belongsToMany(DISCIPLINA::class, 'qualificada', 'idQuestao','idDisciplina');
	}

	public function responde()
	{
		return $this->hasMany(Responde::class, 'idQuestao');
	}

	public function rotuladas()
	{
		return $this->belongsToMany(ORGAO::class, 'rotulada', 'idQuestao', 'idOrgao');
	}
}
