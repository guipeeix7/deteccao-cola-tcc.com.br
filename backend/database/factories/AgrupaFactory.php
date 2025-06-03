<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Agrupa;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\Agrupa>
 */
final class AgrupaFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = Agrupa::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'idPdf' => \App\Models\PDF::factory(),
            'idCorrecao' => \App\Models\CORRECAO::factory(),
        ];
    }
}
