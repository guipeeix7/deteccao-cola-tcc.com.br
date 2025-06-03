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
        Schema::table('qualificada', function (Blueprint $table) {
            $table->foreign(['idDisciplina'], 'FK_qualificada_DISCIPLINA')->references(['idDisciplina'])->on('DISCIPLINA')->onUpdate('NO ACTION');
            $table->foreign(['idQuestao'], 'FK_qualificada_QUESTAO')->references(['idQuestao'])->on('QUESTAO')->onUpdate('NO ACTION')->onDelete('SET NULL');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('qualificada', function (Blueprint $table) {
            $table->dropForeign('FK_qualificada_DISCIPLINA');
            $table->dropForeign('FK_qualificada_QUESTAO');
        });
    }
};
