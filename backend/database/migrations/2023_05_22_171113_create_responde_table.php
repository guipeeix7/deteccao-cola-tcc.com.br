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
        Schema::create('responde', function (Blueprint $table) {
            $table->integer('idAluno')->nullable();
            $table->integer('idQuestao')->nullable();
            $table->text('resposta')->nullable();
            $table->dateTime('dataHora')->nullable();
            $table->integer('idUser')->nullable();

            $table->index(['idAluno', 'idUser'], 'FK_responde_USER');
            $table->unique(['idQuestao', 'idAluno', 'idUser'], 'idQuestao');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('responde');
    }
};
