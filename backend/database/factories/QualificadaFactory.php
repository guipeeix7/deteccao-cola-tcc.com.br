<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Qualificada;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\Qualificada>
 */
final class QualificadaFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = Qualificada::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'idDisciplina' => (\App\Models\DISCIPLINA::inRandomOrder()->first()->idDisciplina),
            'idQuestao' => (\App\Models\QUESTAO::inRandomOrder()->first()->idQuestao),
        ];
    }
}
