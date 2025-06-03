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
        Schema::table('MODULO', function (Blueprint $table) {
            $table->foreign(['idCurso'], 'FK_MODULO_CURSO')->references(['idCurso'])->on('CURSO')->onUpdate('NO ACTION');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('MODULO', function (Blueprint $table) {
            $table->dropForeign('FK_MODULO_CURSO');
        });
    }
};
