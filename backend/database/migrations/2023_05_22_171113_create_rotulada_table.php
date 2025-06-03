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
        Schema::create('rotulada', function (Blueprint $table) {
            $table->integer('idQuestao')->nullable();
            $table->integer('idOrgao')->nullable()->index('FK_rotulada_ORGAO');

            $table->unique(['idQuestao', 'idOrgao'], 'idQuestao');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rotulada');
    }
};
