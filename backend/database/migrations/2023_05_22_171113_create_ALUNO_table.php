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
        Schema::create('ALUNO', function (Blueprint $table) {
            $table->integer('idAluno');
            $table->text('metasEObjetivos')->nullable();
            $table->integer('idUser')->index('FK_ALUNO_USER');

            $table->primary(['idAluno', 'idUser']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ALUNO');
    }
};
