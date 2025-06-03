<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\CONTABANCARIA;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\CONTABANCARIA>
 */
final class CONTABANCARIAFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = CONTABANCARIA::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
            'idContaBancaria' => fake()->randomNumber(),
            'agencia' => fake()->optional()->randomNumber(),
            'numeroConta' => fake()->optional()->randomNumber(),
            'pix' => fake()->optional()->text,
            'idUser' => \App\Models\User::factory(),
        ];
    }
}
