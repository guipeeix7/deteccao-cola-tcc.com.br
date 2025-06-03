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
        Schema::create('ASSUNTO', function (Blueprint $table) {
            $table->integer('idAssunto')->primary();
            $table->string('nomeAssunto', 120)->nullable();
            $table->integer('idAssuntoPai')->nullable();

            $table->unique(['idAssuntoPai', 'idAssunto', 'nomeAssunto'], 'idAssuntoPai');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ASSUNTO');
    }
};
