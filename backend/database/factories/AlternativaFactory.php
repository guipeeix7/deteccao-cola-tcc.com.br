<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Alternativa;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\Alternativa>
 */
final class AlternativaFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = Alternativa::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'alternativa' => fake()->paragraph(1, true),
            'idQuestao' => (\App\Models\QUESTAO::inRandomOrder()->first()->idQuestao)
        ];
    }
}
