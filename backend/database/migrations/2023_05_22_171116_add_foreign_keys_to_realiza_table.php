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
        Schema::table('realiza', function (Blueprint $table) {
            $table->foreign(['idProva'], 'FK_realiza_PROVA')->references(['idProva'])->on('PROVA')->onUpdate('NO ACTION')->onDelete('SET NULL');
            $table->foreign(['idAluno', 'idUser'], 'FK_realiza_USER')->references(['idAluno', 'idUser'])->on('ALUNO')->onUpdate('NO ACTION')->onDelete('SET NULL');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('realiza', function (Blueprint $table) {
            $table->dropForeign('FK_realiza_PROVA');
            $table->dropForeign('FK_realiza_USER');
        });
    }
};
