<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\permission_roles;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\permission_roles>
 */
final class permission_rolesFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = permission_roles::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
        ];
    }
}
