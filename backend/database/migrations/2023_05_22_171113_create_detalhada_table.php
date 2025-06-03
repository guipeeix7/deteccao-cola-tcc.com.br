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
        Schema::create('detalhada', function (Blueprint $table) {
            $table->integer('idProva')->nullable();
            $table->integer('idCorrecao')->nullable()->index('FK_detalhada_CORRECAO');

            $table->unique(['idProva', 'idCorrecao'], 'idProva');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('detalhada');
    }
};
