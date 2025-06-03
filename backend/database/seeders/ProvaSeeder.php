<?php

namespace Database\Seeders;

use App\Models\PROVA;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProvaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PROVA::factory()->count(2000)->create();
    }
}
