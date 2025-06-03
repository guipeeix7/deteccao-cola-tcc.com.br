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
        Schema::create('categoriza', function (Blueprint $table) {
            $table->integer('idAssunto')->nullable();
            $table->integer('idQuestao')->nullable()->index('FK_categoriza_QUESTAO');

            $table->unique(['idAssunto', 'idQuestao'], 'idAssunto');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categoriza');
    }
};
