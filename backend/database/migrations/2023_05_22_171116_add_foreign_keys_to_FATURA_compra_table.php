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
        Schema::table('FATURA_compra', function (Blueprint $table) {
            $table->foreign(['idCurso'], 'FK_FATURA_compra_CURSO')->references(['idCurso'])->on('CURSO')->onUpdate('NO ACTION')->onDelete('NO ACTION');
            $table->foreign(['idAluno', 'idUser'], 'FK_FATURA_compra_USER')->references(['idAluno', 'idUser'])->on('ALUNO')->onUpdate('NO ACTION')->onDelete('NO ACTION');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('FATURA_compra', function (Blueprint $table) {
            $table->dropForeign('FK_FATURA_compra_CURSO');
            $table->dropForeign('FK_FATURA_compra_USER');
        });
    }
};
