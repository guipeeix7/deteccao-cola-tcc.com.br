<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Emprega;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\Emprega>
 */
final class EmpregaFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = Emprega::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'idPosicao' => \App\Models\POSICAO::factory(),
            'idConcurso' => \App\Models\CONCURSO::factory(),
        ];
    }
}
