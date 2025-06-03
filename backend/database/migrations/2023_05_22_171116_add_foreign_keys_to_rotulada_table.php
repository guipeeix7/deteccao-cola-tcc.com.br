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
        Schema::table('rotulada', function (Blueprint $table) {
            $table->foreign(['idOrgao'], 'FK_rotulada_ORGAO')->references(['idOrgao'])->on('ORGAO')->onUpdate('NO ACTION')->onDelete('SET NULL');
            $table->foreign(['idQuestao'], 'FK_rotulada_QUESTAO')->references(['idQuestao'])->on('QUESTAO')->onUpdate('NO ACTION')->onDelete('SET NULL');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('rotulada', function (Blueprint $table) {
            $table->dropForeign('FK_rotulada_ORGAO');
            $table->dropForeign('FK_rotulada_QUESTAO');
        });
    }
};
