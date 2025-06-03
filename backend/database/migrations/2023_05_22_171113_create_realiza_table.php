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
        Schema::create('realiza', function (Blueprint $table) {
            $table->integer('idAluno')->nullable();
            $table->integer('idUser')->nullable();
            $table->integer('idProva')->nullable()->index('FK_realiza_PROVA');
            $table->dateTime('iniciadaEmDataHora')->nullable();
            $table->dateTime('finalizadaEmDataHora')->nullable();

            $table->unique(['idAluno', 'idUser', 'idProva', 'iniciadaEmDataHora'], 'idAluno');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('realiza');
    }
};
