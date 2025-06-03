<?php

namespace Database\Seeders;

use App\Models\POSICAO;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PosicaoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        POSICAO::factory()->count(2000)->create();
    }
}
