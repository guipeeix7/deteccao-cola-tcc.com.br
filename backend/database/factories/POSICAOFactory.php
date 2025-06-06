<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\POSICAO;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\POSICAO>
 */
final class POSICAOFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = POSICAO::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'nomePosicao' => fake()->word,
            'siglaPosicao' => fake()->word,
        ];
    }
}
