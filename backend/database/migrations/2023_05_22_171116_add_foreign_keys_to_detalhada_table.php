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
        Schema::table('detalhada', function (Blueprint $table) {
            $table->foreign(['idCorrecao'], 'FK_detalhada_CORRECAO')->references(['idCorrecao'])->on('CORRECAO')->onUpdate('NO ACTION')->onDelete('SET NULL');
            $table->foreign(['idProva'], 'FK_detalhada_PROVA')->references(['idProva'])->on('PROVA')->onUpdate('NO ACTION');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('detalhada', function (Blueprint $table) {
            $table->dropForeign('FK_detalhada_CORRECAO');
            $table->dropForeign('FK_detalhada_PROVA');
        });
    }
};
