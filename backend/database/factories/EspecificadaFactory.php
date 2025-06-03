<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Especificada;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\Especificada>
 */
final class EspecificadaFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = Especificada::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'idArea' => \App\Models\AREA::factory(),
            'idQuestao' => \App\Models\QUESTAO::factory(),
        ];
    }
}
