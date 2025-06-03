<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Escreve;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\Escreve>
 */
final class EscreveFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = Escreve::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'idResumo' => \App\Models\RESUMO::factory(),
            'idAluno' => \App\Models\ALUNO::factory(),
            'idUser' => fake()->optional()->randomNumber(),
        ];
    }
}
