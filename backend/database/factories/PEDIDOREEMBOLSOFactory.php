<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\PEDIDOREEMBOLSO;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\PEDIDOREEMBOLSO>
 */
final class PEDIDOREEMBOLSOFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = PEDIDOREEMBOLSO::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'statusReembolso' => fake()->optional()->boolean,
            'textoExplicativo' => fake()->optional()->text,
            'reembolsoId' => fake()->randomNumber(),
            'imagemComprovante' => fake()->optional()->word,
            'idAluno' => \App\Models\ALUNO::factory(),
            'idUser' => fake()->optional()->randomNumber(),
            'faturaId' => \App\Models\FATURACompra::factory(),
            'TIMESTAMP' => fake()->optional()->dateTime(),
        ];
    }
}
