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
        Schema::table('escreve', function (Blueprint $table) {
            $table->foreign(['idAluno', 'idUser'], 'FK_escreve_ALUNO')->references(['idAluno', 'idUser'])->on('ALUNO')->onUpdate('NO ACTION')->onDelete('SET NULL');
            $table->foreign(['idResumo'], 'FK_escreve_RESUMO')->references(['idResumo'])->on('RESUMO')->onUpdate('NO ACTION')->onDelete('SET NULL');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('escreve', function (Blueprint $table) {
            $table->dropForeign('FK_escreve_ALUNO');
            $table->dropForeign('FK_escreve_RESUMO');
        });
    }
};
