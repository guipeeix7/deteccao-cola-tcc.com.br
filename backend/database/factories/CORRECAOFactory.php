<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\CORRECAO;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\CORRECAO>
 */
final class CORRECAOFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = CORRECAO::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        $professor = (\App\Models\PROFESSOR::inRandomOrder()->first()->idProfessor == null) ?
                              \App\Models\PROFESSOR::factory()->create():
                              \App\Models\PROFESSOR::inRandomOrder()->first();
        return [
            'textoCorrecao' => fake()->paragraph(3),
            'idProfessor' => $professor->idProfessor,
            'idUser' => $professor->idUser,
        ];
    }
}
