<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Integra;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\Integra>
 */
final class IntegraFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = Integra::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'idModulo' => \App\Models\MODULO::inRandomOrder()->first()->idModulo,
            'idPdf' => \App\Models\PDF::inRandomOrder()->first()->idPdf,
        ];
    }
}
