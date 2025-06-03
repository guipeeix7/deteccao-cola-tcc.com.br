<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Rotulada;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\Rotulada>
 */
final class RotuladaFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = Rotulada::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'idQuestao' => \App\Models\QUESTAO::factory(),
            'idOrgao' => \App\Models\ORGAO::factory(),
        ];
    }
}
