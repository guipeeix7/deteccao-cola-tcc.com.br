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
        Schema::table('CURSO', function (Blueprint $table) {
            $table->foreign(['idConcurso'], 'FK_CURSO_CONCURSO')->references(['idConcurso'])->on('CONCURSO')->onUpdate('NO ACTION')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('CURSO', function (Blueprint $table) {
            $table->dropForeign('FK_CURSO_CONCURSO');
        });
    }
};
