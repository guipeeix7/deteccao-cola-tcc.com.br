<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Responde;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\Responde>
 */
final class RespondeFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = Responde::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'idAluno' => \App\Models\ALUNO::factory(),
            'idQuestao' => \App\Models\QUESTAO::factory(),
            'resposta' => fake()->optional()->text,
            'dataHora' => fake()->optional()->dateTime(),
            'idUser' => fake()->optional()->randomNumber(),
        ];
    }
}
