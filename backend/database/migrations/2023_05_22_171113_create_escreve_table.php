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
        Schema::create('escreve', function (Blueprint $table) {
            $table->integer('idResumo')->nullable()->index('FK_escreve_RESUMO');
            $table->integer('idAluno')->nullable();
            $table->integer('idUser')->nullable();

            $table->unique(['idAluno', 'idUser', 'idResumo'], 'idAluno');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('escreve');
    }
};
