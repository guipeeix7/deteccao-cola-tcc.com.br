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
        Schema::create('organizada', function (Blueprint $table) {
            $table->integer('idQuestao')->nullable();
            $table->integer('idPosicao')->nullable()->index('FK_organizada_POSICAO');

            $table->unique(['idQuestao', 'idPosicao'], 'idQuestao');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('organizada');
    }
};
