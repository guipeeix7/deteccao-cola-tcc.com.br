<?php

namespace Database\Seeders;

use App\Models\ASSUNTO;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AssuntoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ASSUNTO::factory()->count(2)->create();
    }
}
