<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Realiza;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\Realiza>
 */
final class RealizaFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = Realiza::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'idAluno' => \App\Models\ALUNO::factory(),
            'idUser' => fake()->optional()->randomNumber(),
            'idProva' => \App\Models\PROVA::factory(),
            'iniciadaEmDataHora' => fake()->optional()->dateTime(),
            'finalizadaEmDataHora' => fake()->optional()->dateTime(),
        ];
    }
}
