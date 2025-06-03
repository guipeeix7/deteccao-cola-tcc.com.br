<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Acrescenta;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\Acrescenta>
 */
final class AcrescentaFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = Acrescenta::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'idModulo' => \App\Models\MODULO::inRandomOrder()->first()->idModulo,
            'idVideo' => \App\Models\VIDEO::inRandomOrder()->first()->idVideo,
        ];
    }
}
