<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\DISCIPLINA;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\DISCIPLINA>
 */
final class DISCIPLINAFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = DISCIPLINA::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'nomeDisciplina' => fake()->lexify('discp-????????'),
        ];
    }
}
