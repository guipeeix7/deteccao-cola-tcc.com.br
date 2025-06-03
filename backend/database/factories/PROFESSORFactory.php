<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\PROFESSOR;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\PROFESSOR>
 */
final class PROFESSORFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = PROFESSOR::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'linkedin' => fake()->url(),
            'lattes' => fake()->url(),
            'idUser' => (\App\Models\User::inRandomOrder()->first()->id == null) ?
                         \App\Models\User::factory()->create()->id :
                         \App\Models\User::inRandomOrder()->first()->id,
        ];
    }
}
