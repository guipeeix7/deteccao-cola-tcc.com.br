<?php

namespace Database\Seeders;

use App\Models\DISCIPLINA;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DisciplinaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DISCIPLINA::factory()->count(9999)->create();
    }
}
