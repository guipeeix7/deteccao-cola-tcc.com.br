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
        Schema::create('endereco', function (Blueprint $table) {
            $table->integer('enderecoId')->primary();
            $table->string('cidade', 40)->nullable();
            $table->string('estado', 2)->nullable();
            $table->string('vizinhanca', 60)->nullable();
            $table->string('complemento', 100)->nullable();
            $table->integer('numero')->nullable();
            $table->integer('idUser')->nullable()->index('FK_endereco_USER');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('endereco');
    }
};
