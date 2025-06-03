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
        Schema::table('responde', function (Blueprint $table) {
            $table->foreign(['idQuestao'], 'FK_responde_QUESTAO')->references(['idQuestao'])->on('QUESTAO')->onUpdate('NO ACTION')->onDelete('SET NULL');
            $table->foreign(['idAluno', 'idUser'], 'FK_responde_USER')->references(['idAluno', 'idUser'])->on('ALUNO')->onUpdate('NO ACTION')->onDelete('SET NULL');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('responde', function (Blueprint $table) {
            $table->dropForeign('FK_responde_QUESTAO');
            $table->dropForeign('FK_responde_USER');
        });
    }
};
