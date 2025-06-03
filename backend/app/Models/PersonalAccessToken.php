<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class PersonalAccessToken
 *
 * @property int $id
 * @property string $tokenabletype
 * @property int $tokenableid
 * @property string $name
 * @property string $token
 * @property string|null $abilities
 * @property Carbon|null $lastusedat
 * @property Carbon|null $expiresat
 * @property Carbon|null $createdat
 * @property Carbon|null $updatedat
 *
 * @package App\Models
 */
class PersonalAccessToken extends Model
{
	protected $table = 'personalaccesstokens';

	protected $casts = [
		'tokenableid' => 'int',
		'lastusedat' => 'datetime',
		'expiresat' => 'datetime'
	];

	protected $hidden = [
		'token'
	];

	protected $fillable = [
		'tokenabletype',
		'tokenableid',
		'name',
		'token',
		'abilities',
		'lastusedat',
		'expiresat'
	];
}
