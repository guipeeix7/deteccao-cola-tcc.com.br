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
        Schema::create('incorpora', function (Blueprint $table) {
            $table->integer('idVideo')->nullable();
            $table->integer('idCorrecao')->nullable()->index('FK_incorpora_CORRECAO');

            $table->unique(['idVideo', 'idCorrecao'], 'idVideo');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('incorpora');
    }
};
