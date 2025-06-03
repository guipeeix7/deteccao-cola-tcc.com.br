<?php

namespace Database\Seeders;

use App\Models\BANCA;
use App\Models\CONCURSO;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ConcursoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CONCURSO::factory()->count(100)->create();
    }
}
