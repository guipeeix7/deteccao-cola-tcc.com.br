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
        Schema::create('qualificada', function (Blueprint $table) {
            $table->integer('idDisciplina')->nullable();
            $table->integer('idQuestao')->nullable()->index('FK_qualificada_QUESTAO');

            $table->unique(['idDisciplina', 'idQuestao'], 'idDisciplina');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('qualificada');
    }
};
