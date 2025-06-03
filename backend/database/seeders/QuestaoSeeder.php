<?php

namespace Database\Seeders;

use App\Models\QUESTAO;
use Illuminate\Database\Seeder;

class QuestaoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        QUESTAO::factory()->count(2000)->create();
    }
}
