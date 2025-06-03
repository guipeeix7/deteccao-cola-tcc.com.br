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
        Schema::table('emprega', function (Blueprint $table) {
            $table->foreign(['idConcurso'], 'FK_emprega_CONCURSO')->references(['idConcurso'])->on('CONCURSO')->onUpdate('NO ACTION')->onDelete('SET NULL');
            $table->foreign(['idPosicao'], 'FK_emprega_POSICAO')->references(['idPosicao'])->on('POSICAO')->onUpdate('NO ACTION');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('emprega', function (Blueprint $table) {
            $table->dropForeign('FK_emprega_CONCURSO');
            $table->dropForeign('FK_emprega_POSICAO');
        });
    }
};
