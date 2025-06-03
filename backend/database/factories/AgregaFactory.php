<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Agrega;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\Agrega>
 */
final class AgregaFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = Agrega::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'idProva' => \App\Models\PROVA::inRandomOrder()->first()->idProva,
            'idModulo' => \App\Models\MODULO::inRandomOrder()->first()->idModulo,
        ];
    }
}
