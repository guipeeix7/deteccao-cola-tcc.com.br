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
        Schema::create('abrange', function (Blueprint $table) {
            $table->integer('idProva')->nullable();
            $table->integer('idQuestao')->nullable()->index('FK_abrange_ABRANGE');

            $table->unique(['idProva', 'idQuestao'], 'idProva');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('abrange');
    }
};
