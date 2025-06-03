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
        Schema::create('engloba', function (Blueprint $table) {
            $table->integer('idResumo')->nullable();
            $table->integer('idAssunto')->nullable()->index('FK_engloba_ASSUNTO');

            $table->unique(['idResumo', 'idAssunto'], 'idResumo');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('engloba');
    }
};
