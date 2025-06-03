<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Telefone;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\Telefone>
 */
final class TelefoneFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = Telefone::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'idTelefone' => fake()->randomNumber(),
            'telefone' => fake()->optional()->randomNumber(),
            'idUser' => \App\Models\User::factory(),
        ];
    }
}
