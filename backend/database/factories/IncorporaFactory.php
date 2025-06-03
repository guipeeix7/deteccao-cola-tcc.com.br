<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Incorpora;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\Incorpora>
 */
final class IncorporaFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = Incorpora::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'idVideo' => \App\Models\VIDEO::factory(),
            'idCorrecao' => \App\Models\CORRECAO::factory(),
        ];
    }
}
