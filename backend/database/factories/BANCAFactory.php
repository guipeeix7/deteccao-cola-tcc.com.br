<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\BANCA;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\BANCA>
 */
final class BANCAFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = BANCA::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'idBanca' => \App\Models\BANCA::orderBy('idBanca','desc')->first()->idBanca+1,
            'nomeBanca' => fake()->lexify('banca-?????????????????'),
            'siglaBanca' => fake()->lexify('banca-???'),
            'imagem' => fake()->imageUrl(640, 480, 'brands', true),
        ];
    }
}
