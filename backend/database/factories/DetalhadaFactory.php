<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Detalhada;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\Detalhada>
 */
final class DetalhadaFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = Detalhada::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'idProva' => \App\Models\PROVA::factory(),
            'idCorrecao' => \App\Models\CORRECAO::factory(),
        ];
    }
}
