<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\ASSUNTO;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\ASSUNTO>
 */
final class ASSUNTOFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = ASSUNTO::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition()
    {
        var_dump(\App\Models\ASSUNTO::factory()->create()->idAssunto  );

        return [
            'nomeAssunto' => fake()->lexify('assunto-?????????????'),
            'idAssuntoPai' => (\App\Models\ASSUNTO::inRandomOrder()->first() == NULL) ?
                               \App\Models\ASSUNTO::factory()->create()->idAssunto :
                               \App\Models\ASSUNTO::inRandomOrder()->first()->idAssunto,
        ];
    }
}
