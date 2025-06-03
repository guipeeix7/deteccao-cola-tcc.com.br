<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\CONCURSO;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\CONCURSO>
 */
final class CONCURSOFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = CONCURSO::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'idBanca' => \App\Models\CONCURSO::orderBy('idBanca','desc')->first()->idBanca+1,
            'notaMinima' => fake()->randomNumber(),
            'editalUrl' => fake()->url,
            'realizacaoEm' => fake()->dateTime(),
            'abertoEm' => fake()->dateTime(),
            'siglaConcurso' => fake()->lexify('concurso-???'),
            'nomeConcurso' => fake()->lexify('concurso-????????????'),
            'escolaridade' => fake()->randomElement(['medio', 'superior']),
            'imagemConcurso' => fake()->imageUrl(360,360, 'contest', true),
            'numeroVagas' => fake()->randomNumber(),
            'possuiTesteAptidaoFisica' => fake()->boolean,
            'idBanca' => (\App\Models\BANCA::inRandomOrder()->first()->idBanca == null) ?
                            \App\Models\BANCA::factory()->create()->idBanca :
                            \App\Models\BANCA::inRandomOrder()->first()->idBanca
            ,
        ];
    }
}
