<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Foca;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\Foca>
 */
final class FocaFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = Foca::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'idPosicao' => \App\Models\POSICAO::factory(),
            'idCurso' => \App\Models\CURSO::factory(),
        ];
    }
}
