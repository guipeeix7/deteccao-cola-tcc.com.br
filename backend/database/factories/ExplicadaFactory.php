<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Explicada;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\Explicada>
 */
final class ExplicadaFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = Explicada::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'idQUestao' => \App\Models\QUESTAO::factory(),
            'idCorrecao' => \App\Models\CORRECAO::factory(),
        ];
    }
}
