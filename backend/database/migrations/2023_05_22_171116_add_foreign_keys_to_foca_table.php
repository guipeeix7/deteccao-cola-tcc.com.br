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
        Schema::table('foca', function (Blueprint $table) {
            $table->foreign(['idCurso'], 'FK_foca_CURSO')->references(['idCurso'])->on('CURSO')->onUpdate('NO ACTION')->onDelete('SET NULL');
            $table->foreign(['idPosicao'], 'FK_foca_POSICAO')->references(['idPosicao'])->on('POSICAO')->onUpdate('NO ACTION');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('foca', function (Blueprint $table) {
            $table->dropForeign('FK_foca_CURSO');
            $table->dropForeign('FK_foca_POSICAO');
        });
    }
};
