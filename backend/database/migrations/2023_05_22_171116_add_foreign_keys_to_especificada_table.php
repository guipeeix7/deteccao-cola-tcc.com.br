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
        Schema::table('especificada', function (Blueprint $table) {
            $table->foreign(['idArea'], 'FK_especificada_AREA')->references(['idArea'])->on('AREA')->onUpdate('NO ACTION');
            $table->foreign(['idQuestao'], 'FK_especificada_QUESTAO')->references(['idQuestao'])->on('QUESTAO')->onUpdate('NO ACTION')->onDelete('SET NULL');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('especificada', function (Blueprint $table) {
            $table->dropForeign('FK_especificada_AREA');
            $table->dropForeign('FK_especificada_QUESTAO');
        });
    }
};
