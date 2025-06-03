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
        Schema::create('FATURA_compra', function (Blueprint $table) {
            $table->integer('faturaId')->primary();
            $table->string('referencia')->nullable();
            $table->tinyInteger('statusPagamento')->nullable();
            $table->tinyInteger('desconto')->nullable();
            $table->decimal('total', 7)->nullable();
            $table->decimal('totalPago', 7)->nullable();
            $table->timestamps();
            $table->integer('idAluno')->nullable();
            $table->integer('idUser')->nullable();
            $table->integer('idCurso')->nullable()->index('FK_FATURA_compra_CURSO');

            $table->index(['idAluno', 'idUser'], 'FK_FATURA_compra_USER');
            $table->unique(['referencia', 'faturaId'], 'referencia');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('FATURA_compra');
    }
};
