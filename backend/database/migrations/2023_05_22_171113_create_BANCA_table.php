<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('BANCA', function (Blueprint $table) {
            $table->integer('idBanca')->primary();
            $table->string('nomeBanca', 120)->nullable();
            $table->string('siglaBanca', 20)->nullable();
            $table->text('imagem')->nullable();

            $table->unique(['nomeBanca', 'siglaBanca'], 'nomeBanca');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('BANCA');
    }
};
