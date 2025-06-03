<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\PDF;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\PDF>
 */
final class PDFFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = PDF::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'nomePdf' => fake()->word,
            'caminho' => fake()->text,
            'tipoPdf' => fake()->url
        ];
    }
}
