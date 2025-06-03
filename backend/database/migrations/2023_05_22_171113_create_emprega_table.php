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
        Schema::create('emprega', function (Blueprint $table) {
            $table->integer('idPosicao')->nullable();
            $table->integer('idConcurso')->nullable()->index('FK_emprega_CONCURSO');

            $table->unique(['idPosicao', 'idConcurso'], 'idPosicao');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('emprega');
    }
};
