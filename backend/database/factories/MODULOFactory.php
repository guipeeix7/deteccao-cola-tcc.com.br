<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\MODULO;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\MODULO>
 */
final class MODULOFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = MODULO::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'posicaoModulo' => fake()->randomNumber(),
            'nomeModulo' => fake()->lexify('modulo-??????'),
            'idCurso' =>  (\App\Models\CURSO::inRandomOrder()->first()->idCurso == null) ?
                            \App\Models\CURSO::factory()->create()->idCurso :
                            \App\Models\CURSO::inRandomOrder()->first()->idCurso
        ];
    }
}
