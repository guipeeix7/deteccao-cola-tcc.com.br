<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class ModelHasRole
 *
 * @property int $roleid
 * @property string $modeltype
 * @property int $modelid
 *
 * @property Role $role
 *
 * @package App\Models
 */
class ModelHasRole extends Model
{
	protected $table = 'modelhasroles';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'roleid' => 'int',
		'modelid' => 'int'
	];

	public function role()
	{
		return $this->belongsTo(Role::class);
	}
}
