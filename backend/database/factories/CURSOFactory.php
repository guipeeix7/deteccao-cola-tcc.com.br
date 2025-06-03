<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\CURSO;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\CURSO>
 */
final class CURSOFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = CURSO::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'resumo' => fake()->text,
            'descricaoCompleta' => fake()->realText($maxNbChars = 600, $indexSize = 2),
            'precoAtual' => fake()->randomFloat(1, 20, 300),
            'precoPromocao' => fake()->randomFloat(1, 10, 300),
            'siglaCurso' => fake()->lexify('curso-???'),
            'nomeCurso' => fake()->lexify('curso-????????????'),
            'imagemCurso' => fake()->imageUrl(360,360, 'curso', true),
            'idConcurso' => (\App\Models\CONCURSO::inRandomOrder()->first()->idConcurso == null) ?
                             \App\Models\CONCURSO::factory()->create()->idConcurso :
                             \App\Models\CONCURSO::inRandomOrder()->first()->idConcurso
        ];
    }
}
