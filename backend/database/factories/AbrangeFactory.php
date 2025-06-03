<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Abrange;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\Abrange>
 */
final class AbrangeFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = Abrange::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'idProva' => \App\Models\PROVA::inRandomOrder()->first()->idProva,
            'idQuestao' => \App\Models\QUESTAO::inRandomOrder()->first()->idQuestao,
        ];
    }
}
