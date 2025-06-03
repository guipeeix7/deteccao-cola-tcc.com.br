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
        Schema::table('utiliza', function (Blueprint $table) {
            $table->foreign(['idConcurso'], 'FK_utiliza_CONCURSO')->references(['idConcurso'])->on('CONCURSO')->onUpdate('NO ACTION')->onDelete('SET NULL');
            $table->foreign(['idProva'], 'FK_utiliza_PROVA')->references(['idProva'])->on('PROVA')->onUpdate('NO ACTION')->onDelete('SET NULL');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('utiliza', function (Blueprint $table) {
            $table->dropForeign('FK_utiliza_CONCURSO');
            $table->dropForeign('FK_utiliza_PROVA');
        });
    }
};
