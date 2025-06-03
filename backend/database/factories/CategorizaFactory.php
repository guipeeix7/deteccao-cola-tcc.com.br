<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Categoriza;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\Categoriza>
 */
final class CategorizaFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = Categoriza::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'idAssunto' => \App\Models\ASSUNTO::factory(),
            'idQuestao' => \App\Models\QUESTAO::factory(),
        ];
    }
}
