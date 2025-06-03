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
        Schema::table('categoriza', function (Blueprint $table) {
            $table->foreign(['idAssunto'], 'FK_categoriza_ASSUNTO')->references(['idAssunto'])->on('ASSUNTO')->onUpdate('NO ACTION');
            $table->foreign(['idQuestao'], 'FK_categoriza_QUESTAO')->references(['idQuestao'])->on('QUESTAO')->onUpdate('NO ACTION')->onDelete('SET NULL');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('categoriza', function (Blueprint $table) {
            $table->dropForeign('FK_categoriza_ASSUNTO');
            $table->dropForeign('FK_categoriza_QUESTAO');
        });
    }
};
