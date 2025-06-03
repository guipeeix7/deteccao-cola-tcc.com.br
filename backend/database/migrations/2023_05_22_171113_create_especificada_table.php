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
        Schema::create('especificada', function (Blueprint $table) {
            $table->integer('idArea')->nullable();
            $table->integer('idQuestao')->nullable()->index('FK_especificada_QUESTAO');

            $table->unique(['idArea', 'idQuestao'], 'idArea');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('especificada');
    }
};
