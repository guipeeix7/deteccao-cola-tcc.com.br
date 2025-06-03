<?php

namespace Database\Seeders;

use App\Models\Integra;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class IntegraSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Integra::factory()->count(999)->create();
    }
}
