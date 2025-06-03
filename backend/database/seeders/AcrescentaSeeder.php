<?php

namespace Database\Seeders;

use App\Models\Acrescenta;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AcrescentaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Acrescenta::factory()->count(999)->create();
    }
}
