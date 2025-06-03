<?php

namespace Database\Seeders;

use App\Models\AREA;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AreaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        AREA::factory()->count(999)->create();
    }
}
