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
        Schema::table('engloba', function (Blueprint $table) {
            $table->foreign(['idAssunto'], 'FK_engloba_ASSUNTO')->references(['idAssunto'])->on('ASSUNTO')->onUpdate('NO ACTION')->onDelete('SET NULL');
            $table->foreign(['idResumo'], 'FK_engloba_RESUMO')->references(['idResumo'])->on('RESUMO')->onUpdate('NO ACTION')->onDelete('SET NULL');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('engloba', function (Blueprint $table) {
            $table->dropForeign('FK_engloba_ASSUNTO');
            $table->dropForeign('FK_engloba_RESUMO');
        });
    }
};
