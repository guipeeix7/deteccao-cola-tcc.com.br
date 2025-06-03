<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class FailedJob
 *
 * @property int $id
 * @property string $uuid
 * @property string $connection
 * @property string $queue
 * @property string $payload
 * @property string $exception
 * @property Carbon $failedat
 *
 * @package App\Models
 */
class FailedJob extends Model
{
	protected $table = 'failedjobs';
	public $timestamps = false;

	protected $casts = [
		'failedat' => 'datetime'
	];

	protected $fillable = [
		'uuid',
		'connection',
		'queue',
		'payload',
		'exception',
		'failedat'
	];
}
