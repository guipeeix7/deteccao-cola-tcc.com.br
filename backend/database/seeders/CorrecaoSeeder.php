<?php

namespace Database\Seeders;

use App\Models\CORRECAO;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CorrecaoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CORRECAO::factory()->count(999)->create();
    }
}
