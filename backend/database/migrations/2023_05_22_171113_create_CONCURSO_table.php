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
        Schema::create('CONCURSO', function (Blueprint $table) {
            $table->integer('notaMinima')->nullable();
            $table->text('editalUrl')->nullable();
            $table->timestamp('realizacaoEm')->nullable();
            $table->dateTime('abertoEm')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->timestamp('created_at')->nullable();
            $table->string('siglaConcurso', 60)->nullable();
            $table->string('nomeConcurso')->nullable();
            $table->integer('idConcurso')->primary();
            $table->enum('escolaridade', ['medio', 'superior'])->nullable();
            $table->text('imagemConcurso')->nullable();
            $table->integer('numeroVagas')->nullable();
            $table->boolean('possuiTesteAptidaoFisica')->nullable();
            $table->integer('idBanca')->nullable()->index('FK_CONCURSO_BANCA');

            $table->unique(['nomeConcurso', 'realizacaoEm', 'abertoEm'], 'nomeConcurso');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CONCURSO');
    }
};
