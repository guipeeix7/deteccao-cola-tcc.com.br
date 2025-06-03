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
        Schema::create('CURSO', function (Blueprint $table) {
            $table->text('resumo')->nullable();
            $table->text('descricaoCompleta')->nullable();
            $table->decimal('precoAtual', 10)->nullable();
            $table->decimal('precoPromocao', 10)->nullable();
            $table->string('siglaCurso', 20)->nullable();
            $table->string('nomeCurso', 180)->nullable()->unique('nomeCurso');
            $table->integer('idCurso')->primary();
            $table->string('imagemCurso', 200)->nullable();
            $table->integer('idConcurso')->nullable()->index('FK_CURSO_CONCURSO');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CURSO');
    }
};
