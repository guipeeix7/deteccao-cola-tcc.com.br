<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\RESUMO;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\RESUMO>
 */
final class RESUMOFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = RESUMO::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'nome' => fake()->lexify('resumo-????????????????'),
            'texto' => fake()->paragraph(8),
            'visibilidade' => fake()->boolean,
        ];
    }
}
