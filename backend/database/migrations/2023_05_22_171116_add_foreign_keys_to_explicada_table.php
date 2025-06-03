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
        Schema::table('explicada', function (Blueprint $table) {
            $table->foreign(['idCorrecao'], 'FK_explicada_CORRECAO')->references(['idCorrecao'])->on('CORRECAO')->onUpdate('NO ACTION')->onDelete('SET NULL');
            $table->foreign(['idQUestao'], 'FK_explicada_QUESTAO')->references(['idQuestao'])->on('QUESTAO')->onUpdate('NO ACTION');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('explicada', function (Blueprint $table) {
            $table->dropForeign('FK_explicada_CORRECAO');
            $table->dropForeign('FK_explicada_QUESTAO');
        });
    }
};
