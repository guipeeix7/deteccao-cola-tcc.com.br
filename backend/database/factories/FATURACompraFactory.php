<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\FATURACompra;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\FATURACompra>
 */
final class FATURACompraFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = FATURACompra::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'idCurso' => \App\Models\CURSO::factory(),
            'idAluno' => \App\Models\ALUNO::factory(),
        ];
    }
}
