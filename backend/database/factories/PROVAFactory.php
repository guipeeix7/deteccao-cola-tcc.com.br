<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\PROVA;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\PROVA>
 */
final class PROVAFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = PROVA::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'nomeProva' => fake()->lexify('prova-????????????????'),
            'descricaoProva' => fake()->paragraph(),
            'dataAplicacao' => fake()->dateTime(),
        ];
    }
}
