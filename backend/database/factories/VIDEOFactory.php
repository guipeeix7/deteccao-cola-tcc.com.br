<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\VIDEO;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\VIDEO>
 */
final class VIDEOFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = VIDEO::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'nomeVideo' => fake()->optional()->word,
            'caminho' => fake()->optional()->text,
            'idVideo' => fake()->randomNumber(),
        ];
    }
}
