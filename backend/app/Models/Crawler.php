<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Crawler
 *
 * @property int|null $questionId
 * @property int|null $filterId
 * @property Carbon|null $lastUpdateAt
 * @property int $crawlerId
 * @property int|null $page
 * @property string|null $siteName
 * @property int|null $status
 *
 * @property Collection|Tquestion[] $tquestions
 *
 * @package App\Models
 */
class Crawler extends Model
{
	protected $table = 'crawler';
	protected $primaryKey = 'crawlerId';
	public $incrementing = true;
	public $timestamps = false;

	protected $casts = [
		'filterId' => 'int',
		'lastUpdateAt' => 'datetime',
		'crawlerId' => 'int',
		'lastQuestionId' => 'int',
		'page' => 'int',
		'status' => 'int'
	];

	protected $fillable = [
		'filterId',
		'lastUpdateAt',
		'page',
		'lastQuestionId',
        'siteUrl',
		'siteName',
		'status'
	];

	public function tquestions()
	{
		return $this->hasMany(Tquestion::class, 'crawlerId');
	}
}
