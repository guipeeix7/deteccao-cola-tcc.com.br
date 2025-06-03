<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Permissions;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\Permissions>
 */
final class PermissionsFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = Permissions::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'name' => fake()->name,
            'guard_name' => fake()->word,
        ];
    }
}
