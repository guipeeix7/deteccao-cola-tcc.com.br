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
        Schema::create('agrupa', function (Blueprint $table) {
            $table->integer('idPdf')->nullable();
            $table->integer('idCorrecao')->nullable()->index('FK_agrupa_CORRECAO');

            $table->unique(['idPdf', 'idCorrecao'], 'idPdf');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('agrupa');
    }
};
