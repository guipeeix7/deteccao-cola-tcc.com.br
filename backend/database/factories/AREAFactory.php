<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\AREA;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\AREA>
 */
final class AREAFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = AREA::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'nomeArea' => fake()->lexify('area-????????????????'),
            'siglaArea' => fake()->lexify('sigla-area-??'),
        ];
    }
}
