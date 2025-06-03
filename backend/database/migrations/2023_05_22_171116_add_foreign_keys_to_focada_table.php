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
        Schema::table('focada', function (Blueprint $table) {
            $table->foreign(['idConcurso'], 'FK_focada_CONCURSO')->references(['idConcurso'])->on('CONCURSO')->onUpdate('NO ACTION')->onDelete('SET NULL');
            $table->foreign(['idQuestao'], 'FK_focada_QUESTAO')->references(['idQuestao'])->on('QUESTAO')->onUpdate('NO ACTION')->onDelete('SET NULL');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('focada', function (Blueprint $table) {
            $table->dropForeign('FK_focada_CONCURSO');
            $table->dropForeign('FK_focada_QUESTAO');
        });
    }
};
