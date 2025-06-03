<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Tquestion
 *
 * @property int|null $numeroQuestaoAtual
 * @property int $idQuestao
 * @property int|null $concursoId
 * @property string|null $assinanteAvancado
 * @property string|null $nomeAssunto
 * @property string|null $orgaoNome
 * @property string|null $editalFicticio
 * @property int|null $numeroPosts
 * @property string|null $anulada
 * @property int|null $possuiComentario
 * @property string|null $urlConcurso
 * @property string|null $assuntoUrl
 * @property string|null $nomeMateria
 * @property string|null $orgaoOculto
 * @property string|null $orgaoUrl
 * @property string|null $caminhoLogotipoOrgao
 * @property string|null $gabaritoPreliminar
 * @property string|null $aceitouTermosForum
 * @property string|null $hash
 * @property string|null $desatualizadaComGabaritoPreliminar
 * @property string|null $enunciado
 * @property string|null $possuiResolucaoDaBanca
 * @property string|null $numeroConcursos
 * @property string|null $formatoQuestao
 * @property string|null $bancaUrl
 * @property string|null $possuiPostsNaoVistos
 * @property string|null $concursoAno
 * @property string|null $tipoQuestao
 * @property string|null $desatualizadaComGabaritoDefinivo
 * @property string|null $tempoTotalCronometroSegundos
 * @property string|null $status
 * @property string|null $cargoSigla
 * @property int|null $idMateria
 * @property string|null $dataAtual
 * @property string|null $materiaUrl
 * @property int|null $possuiComentarioVideo
 * @property string|null $bancaSigla
 * @property string|null $orgaoSigla
 * @property string|null $questaoOculta
 * @property string|null $concursoArea
 * @property int|null $crawlerId
 * @property int|null $idAlternativaCorreta
 * @property int|null $idQuestaoSistemaBase
 *
 * @property Crawler|null $crawler
 * @property Collection|Alternativa[] $alternativas
 *
 * @package App\Models
 */
class Tquestion extends Model
{
	protected $table = 'tquestions';
	protected $primaryKey = 'idQuestao';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'numeroQuestaoAtual' => 'int',
		'idQuestao' => 'int',
		'concursoId' => 'int',
		'numeroPosts' => 'int',
		'possuiComentario' => 'int',
		'idMateria' => 'int',
		'possuiComentarioVideo' => 'int',
		'crawlerId' => 'int',
		'idAlternativaCorreta' => 'int'
	];

	protected $fillable = [
        'idQuestao',
		'numeroQuestaoAtual',
		'concursoId',
		'assinanteAvancado',
		'nomeAssunto',
		'orgaoNome',
		'editalFicticio',
		'numeroPosts',
		'anulada',
		'possuiComentario',
		'urlConcurso',
		'assuntoUrl',
		'nomeMateria',
		'orgaoOculto',
		'orgaoUrl',
		'caminhoLogotipoOrgao',
		'gabaritoPreliminar',
		'aceitouTermosForum',
		'hash',
		'desatualizadaComGabaritoPreliminar',
		'enunciado',
		'possuiResolucaoDaBanca',
		'numeroConcursos',
		'formatoQuestao',
		'bancaUrl',
		'possuiPostsNaoVistos',
		'concursoAno',
		'tipoQuestao',
		'desatualizadaComGabaritoDefinivo',
		'tempoTotalCronometroSegundos',
		'status',
		'cargoSigla',
		'idMateria',
		'dataAtual',
		'materiaUrl',
		'possuiComentarioVideo',
		'bancaSigla',
		'orgaoSigla',
		'questaoOculta',
		'concursoArea',
		'crawlerId',
		'comentario',
		'idAlternativaCorreta',
		'idQuestaoSistemaBase'
	];

	public function crawler()
	{
		return $this->belongsTo(Crawler::class, 'crawlerId');
	}

	public function alternativas()
	{
		return $this->hasMany(Alternativa::class, 'tQuestionId');
	}
}
