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
        Schema::table('CORRECAO', function (Blueprint $table) {
            $table->foreign(['idProfessor', 'idUser'], 'FK_CORRECAO_PROFESSOR')->references(['idProfessor', 'idUser'])->on('PROFESSOR')->onUpdate('NO ACTION')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('CORRECAO', function (Blueprint $table) {
            $table->dropForeign('FK_CORRECAO_PROFESSOR');
        });
    }
};
