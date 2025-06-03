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
        Schema::create('PEDIDOREEMBOLSO', function (Blueprint $table) {
            $table->tinyInteger('statusReembolso')->nullable();
            $table->text('textoExplicativo')->nullable();
            $table->integer('reembolsoId')->primary();
            $table->string('imagemComprovante', 122)->nullable();
            $table->integer('idAluno')->nullable();
            $table->integer('idUser')->nullable();
            $table->integer('faturaId')->nullable()->index('FK_PEDIDOREEMBOLSO_FATURA');
            $table->timestamp('TIMESTAMP')->nullable();

            $table->unique(['idAluno', 'idUser'], 'idAluno');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('PEDIDOREEMBOLSO');
    }
};
