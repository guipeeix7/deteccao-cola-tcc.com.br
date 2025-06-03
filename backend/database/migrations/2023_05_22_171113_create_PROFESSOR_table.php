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
        Schema::create('PROFESSOR', function (Blueprint $table) {
            $table->string('linkedin', 200)->nullable();
            $table->string('lattes', 200)->nullable();
            $table->integer('idProfessor');
            $table->integer('idUser')->index('FK_PROFESSOR_USER');

            $table->primary(['idProfessor', 'idUser']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('PROFESSOR');
    }
};
