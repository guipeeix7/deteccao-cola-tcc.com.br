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
        Schema::create('QUESTAO', function (Blueprint $table) {
            $table->integer('idQuestao')->primary();
            $table->text('nomeQuestao')->nullable();
            $table->text('descricaoQuestao')->nullable();
            $table->string('opcaoCorreta', 2)->nullable();
            $table->integer('idBanca')->nullable()->index('FK_QUESTAO_BANCA');
            $table->dateTime('dataHora')->nullable();
            $table->text('resposta')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('QUESTAO');
    }
};
