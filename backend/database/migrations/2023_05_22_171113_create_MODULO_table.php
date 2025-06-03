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
        Schema::create('MODULO', function (Blueprint $table) {
            $table->integer('idModulo')->primary();
            $table->integer('posicaoModulo')->nullable();
            $table->string('nomeModulo', 80)->nullable();
            $table->integer('idCurso')->nullable()->index('FK_MODULO_CURSO');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('MODULO');
    }
};
