<?php

namespace Database\Seeders;

use App\Models\RESUMO;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ResumoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        RESUMO::factory()->count(9999)->create();

    }
}
