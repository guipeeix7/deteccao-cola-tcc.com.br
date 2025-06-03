<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Organizada;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\Organizada>
 */
final class OrganizadaFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = Organizada::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'idQuestao' => \App\Models\QUESTAO::factory(),
            'idPosicao' => \App\Models\POSICAO::factory(),
        ];
    }
}
