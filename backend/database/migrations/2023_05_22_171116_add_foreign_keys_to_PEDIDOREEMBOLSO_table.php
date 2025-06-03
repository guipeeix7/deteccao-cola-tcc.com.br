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
        Schema::table('PEDIDOREEMBOLSO', function (Blueprint $table) {
            $table->foreign(['idAluno', 'idUser'], 'FK_PEDIDOREEMBOLSO_ALUNO')->references(['idAluno', 'idUser'])->on('ALUNO')->onUpdate('NO ACTION')->onDelete('CASCADE');
            $table->foreign(['faturaId'], 'FK_PEDIDOREEMBOLSO_FATURA')->references(['faturaId'])->on('FATURA_compra')->onUpdate('NO ACTION')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('PEDIDOREEMBOLSO', function (Blueprint $table) {
            $table->dropForeign('FK_PEDIDOREEMBOLSO_ALUNO');
            $table->dropForeign('FK_PEDIDOREEMBOLSO_FATURA');
        });
    }
};
