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
        Schema::table('organizada', function (Blueprint $table) {
            $table->foreign(['idPosicao'], 'FK_organizada_POSICAO')->references(['idPosicao'])->on('POSICAO')->onUpdate('NO ACTION')->onDelete('SET NULL');
            $table->foreign(['idQuestao'], 'FK_organizada_QUESTAO')->references(['idQuestao'])->on('QUESTAO')->onUpdate('NO ACTION')->onDelete('SET NULL');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('organizada', function (Blueprint $table) {
            $table->dropForeign('FK_organizada_POSICAO');
            $table->dropForeign('FK_organizada_QUESTAO');
        });
    }
};
