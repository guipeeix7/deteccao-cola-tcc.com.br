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
        Schema::create('POSICAO', function (Blueprint $table) {
            $table->integer('idPosicao')->primary();
            $table->string('nomePosicao')->nullable()->unique('nomePosicao');
            $table->string('siglaPosicao', 30)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('POSICAO');
    }
};
