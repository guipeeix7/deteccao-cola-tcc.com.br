<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\ALUNO;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\ALUNO>
 */
final class ALUNOFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = ALUNO::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'idAluno' => fake()->randomNumber(),
            'metasEObjetivos' => fake()->optional()->text,
            'idUser' => \App\Models\User::factory(),
        ];
    }
}
