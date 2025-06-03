<?php

namespace Database\Seeders;

use App\Models\PROFESSOR;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProfessorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PROFESSOR::factory()->count(10)->create();
    }
}
