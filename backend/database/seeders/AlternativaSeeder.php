<?php

namespace Database\Seeders;

use App\Models\Alternativa;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AlternativaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Alternativa::factory()->count(9999)->create();
    }
}
