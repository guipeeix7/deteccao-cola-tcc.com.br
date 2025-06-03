<?php

namespace Database\Seeders;

use App\Models\CURSO;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CursoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CURSO::factory()->count(100)->create();
    }
}
