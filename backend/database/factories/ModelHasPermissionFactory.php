<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\ModelHasPermission;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\ModelHasPermission>
 */
final class ModelHasPermissionFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = ModelHasPermission::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'permission_id' => \App\Models\Permission::factory(),
        ];
    }
}
