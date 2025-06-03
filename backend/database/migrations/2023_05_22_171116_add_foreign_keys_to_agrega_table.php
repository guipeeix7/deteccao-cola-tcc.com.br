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
        Schema::table('agrega', function (Blueprint $table) {
            $table->foreign(['idModulo'], 'FK_agrega_MODULO')->references(['idModulo'])->on('MODULO')->onUpdate('NO ACTION')->onDelete('SET NULL');
            $table->foreign(['idProva'], 'FK_agrega_PROVA')->references(['idProva'])->on('PROVA')->onUpdate('NO ACTION');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('agrega', function (Blueprint $table) {
            $table->dropForeign('FK_agrega_MODULO');
            $table->dropForeign('FK_agrega_PROVA');
        });
    }
};
