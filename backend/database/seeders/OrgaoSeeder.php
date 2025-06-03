<?php

namespace Database\Seeders;

use App\Models\ORGAO;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrgaoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ORGAO::factory()->count(20)->create();
    }
}
