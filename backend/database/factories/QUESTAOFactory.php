<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\QUESTAO;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\QUESTAO>
 */
final class QUESTAOFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = QUESTAO::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */

    public function definition(): array
    {


        return [
            'nomeQuestao' => fake()->text,
            'descricaoQuestao' => fake()->text,
            'opcaoCorreta' => NULL,
            'idBanca' => (  \App\Models\BANCA::inRandomOrder()->first()->idBanca == null) ?
                            \App\Models\BANCA::factory()->create()->idBanca :
                            \App\Models\BANCA::inRandomOrder()->first()->idBanca,
        ];
    }
}
