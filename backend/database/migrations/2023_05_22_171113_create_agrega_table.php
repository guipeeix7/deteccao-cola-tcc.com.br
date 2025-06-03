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
        Schema::create('agrega', function (Blueprint $table) {
            $table->integer('idProva')->nullable()->index('FK_agrega_PROVA');
            $table->integer('idModulo')->nullable();

            $table->unique(['idModulo', 'idProva'], 'idModulo');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('agrega');
    }
};
