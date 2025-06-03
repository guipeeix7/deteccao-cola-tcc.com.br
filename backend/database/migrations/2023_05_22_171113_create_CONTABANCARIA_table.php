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
        Schema::create('CONTABANCARIA', function (Blueprint $table) {
            $table->integer('idContaBancaria')->primary();
            $table->integer('agencia')->nullable();
            $table->bigInteger('numeroConta')->nullable();
            $table->text('pix')->nullable();
            $table->integer('idUser')->nullable()->index('FK_CONTABANCARIA_USER');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CONTABANCARIA');
    }
};
