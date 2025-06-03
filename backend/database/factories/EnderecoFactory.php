<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Endereco;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\Endereco>
 */
final class EnderecoFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = Endereco::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'enderecoId' => fake()->randomNumber(),
            'cidade' => fake()->optional()->word,
            'estado' => fake()->optional()->word,
            'vizinhanca' => fake()->optional()->word,
            'complemento' => fake()->optional()->word,
            'numero' => fake()->optional()->randomNumber(),
            'idUser' => \App\Models\User::factory(),
        ];
    }
}
