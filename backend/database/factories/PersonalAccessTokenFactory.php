<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\PersonalAccessToken;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\PersonalAccessToken>
 */
final class PersonalAccessTokenFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = PersonalAccessToken::class;

    /**
    * Define the model's default state.
    *
    * @return array
    */
    public function definition(): array
    {
        return [
        ];
    }
}
