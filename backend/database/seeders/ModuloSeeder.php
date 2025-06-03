<?php

namespace Database\Seeders;

use App\Models\MODULO;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ModuloSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        MODULO::factory()->count(999)->create();
    }
}
