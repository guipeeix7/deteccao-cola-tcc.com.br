<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
/**
 * Class ASSUNTO
 *
 * @property int $idAssunto
 * @property string|null $nomeAssunto
 * @property int|null $idAssuntoPai
 *
 * @property ASSUNTO|null $assunto
 * @property Collection|ASSUNTO[] $assuntos
 * @property Collection|Categoriza[] $categorizas
 * @property Collection|Engloba[] $englobas
 *
 * @package App\Models
 */
class ASSUNTO extends Model
{
    use HasFactory;
    protected $table = 'ASSUNTO';
	protected $primaryKey = 'idAssunto';
	public $incrementing = true;
	public $timestamps = false;

	protected $casts = [
		'idAssunto' => 'int',
		'idAssuntoPai' => 'int'
	];

	protected $fillable = [
        'idAssunto',
		'nomeAssunto',
		'ativo',
		'idAssuntoPai'
	];

	public function assunto()
	{
		return $this->belongsTo(ASSUNTO::class, 'idAssuntoPai');
	}

	public function assuntos()
	{
		return $this->hasMany(ASSUNTO::class, 'idAssuntoPai');
	}

	public function categoriza()
	{
		return $this->hasMany(Categoriza::class, 'idAssunto');
	}

	public function engloba()
	{
		return $this->hasMany(Engloba::class, 'idAssunto');
	}
}
