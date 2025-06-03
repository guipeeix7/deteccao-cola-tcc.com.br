<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Utiliza;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\Utiliza>
 */
final class UtilizaFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = Utiliza::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'idConcurso' => \App\Models\CONCURSO::factory(),
            'idProva' => \App\Models\PROVA::factory(),
        ];
    }
}
