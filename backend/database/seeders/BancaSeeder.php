<?php

namespace Database\Seeders;

use App\Models\BANCA;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BancaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        BANCA::factory()->count(999)->create();
    }
}
