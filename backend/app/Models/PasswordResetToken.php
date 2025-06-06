<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class PasswordResetToken
 *
 * @property string $email
 * @property string $token
 * @property Carbon|null $createdat
 *
 * @package App\Models
 */
class PasswordResetToken extends Model
{
	protected $table = 'passwordresettokens';
	protected $primaryKey = 'email';
	public $incrementing = false;
	public $timestamps = false;

	protected $hidden = [
		'token'
	];

	protected $fillable = [
		'token'
	];
}
