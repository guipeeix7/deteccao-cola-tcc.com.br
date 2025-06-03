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
        Schema::table('alternativa', function (Blueprint $table) {
            $table->foreign(['idQuestao'], 'FK_alternativa_2')->references(['idQuestao'])->on('QUESTAO')->onUpdate('NO ACTION')->onDelete('NO ACTION');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('alternativa', function (Blueprint $table) {
            $table->dropForeign('FK_alternativa_2');
        });
    }
};
