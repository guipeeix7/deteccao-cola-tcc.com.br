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
        Schema::table('abrange', function (Blueprint $table) {
            $table->foreign(['idQuestao'], 'FK_abrange_ABRANGE')->references(['idQuestao'])->on('QUESTAO')->onUpdate('NO ACTION')->onDelete('SET NULL');
            $table->foreign(['idProva'], 'FK_abrange_PROVA')->references(['idProva'])->on('PROVA')->onUpdate('NO ACTION')->onDelete('SET NULL');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('abrange', function (Blueprint $table) {
            $table->dropForeign('FK_abrange_ABRANGE');
            $table->dropForeign('FK_abrange_PROVA');
        });
    }
};
