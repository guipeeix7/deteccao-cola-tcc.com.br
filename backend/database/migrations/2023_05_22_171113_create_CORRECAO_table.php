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
        Schema::create('CORRECAO', function (Blueprint $table) {
            $table->integer('idCorrecao')->primary();
            $table->text('textoCorrecao')->nullable();
            $table->timestamps();
            $table->integer('idProfessor')->nullable();
            $table->integer('idUser')->nullable();

            $table->unique(['idProfessor', 'idUser'], 'idProfessor');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CORRECAO');
    }
};
