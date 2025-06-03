<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class ModelHasPermission
 *
 * @property int $permissionid
 * @property string $modeltype
 * @property int $modelid
 *
 * @property Permission $permission
 *
 * @package App\Models
 */
class ModelHasPermission extends Model
{
	protected $table = 'modelhaspermissions';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'permissionid' => 'int',
		'modelid' => 'int'
	];

	public function permission()
	{
		return $this->belongsTo(Permission::class);
	}
}
