<?php

namespace Database\Seeders;

use App\Models\Abrange;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AbrangeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Abrange::factory()->count(999)->create();
    }
}
