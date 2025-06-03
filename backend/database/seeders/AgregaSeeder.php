<?php

namespace Database\Seeders;

use App\Models\Agrega;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AgregaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Agrega::factory()->count(999)->create();
    }
}
