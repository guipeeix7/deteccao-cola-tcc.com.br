<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Engloba;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\Engloba>
 */
final class EnglobaFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = Engloba::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'idResumo' => \App\Models\RESUMO::factory(),
            'idAssunto' => \App\Models\ASSUNTO::factory(),
        ];
    }
}
