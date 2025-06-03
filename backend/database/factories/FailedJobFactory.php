<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\FailedJob;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\FailedJob>
 */
final class FailedJobFactory extends Factory
{
    /**
    * The name of the factory's corresponding model.
    *
    * @var string
    */
    protected $model = FailedJob::class;

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
