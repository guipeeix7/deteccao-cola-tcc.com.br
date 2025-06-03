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
        Schema::create('focada', function (Blueprint $table) {
            $table->integer('idQuestao')->nullable();
            $table->integer('idConcurso')->nullable()->index('FK_focada_CONCURSO');

            $table->unique(['idQuestao', 'idConcurso'], 'idQuestao');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('focada');
    }
};
