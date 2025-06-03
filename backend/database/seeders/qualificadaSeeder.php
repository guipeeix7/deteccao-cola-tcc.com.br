<?php

namespace Database\Seeders;

use App\Models\Qualificada;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class qualificadaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Qualificada::factory()->count(1000)->create();
    }
}
