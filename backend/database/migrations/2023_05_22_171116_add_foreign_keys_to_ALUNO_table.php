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
        Schema::table('ALUNO', function (Blueprint $table) {
            $table->foreign(['idUser'], 'FK_ALUNO_USER')->references(['id'])->on('users')->onUpdate('NO ACTION')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('ALUNO', function (Blueprint $table) {
            $table->dropForeign('FK_ALUNO_USER');
        });
    }
};
