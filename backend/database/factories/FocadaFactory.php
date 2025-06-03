<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Focada;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\Focada>
 */
final class FocadaFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = Focada::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'idQuestao' => \App\Models\QUESTAO::factory(),
            'idConcurso' => \App\Models\CONCURSO::factory(),
        ];
    }
}
