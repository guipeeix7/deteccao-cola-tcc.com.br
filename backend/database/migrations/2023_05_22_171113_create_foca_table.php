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
        Schema::create('foca', function (Blueprint $table) {
            $table->integer('idPosicao')->nullable();
            $table->integer('idCurso')->nullable()->index('FK_foca_CURSO');

            $table->unique(['idPosicao', 'idCurso'], 'idPosicao');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('foca');
    }
};
