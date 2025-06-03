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
        Schema::create('explicada', function (Blueprint $table) {
            $table->integer('idQUestao')->nullable();
            $table->integer('idCorrecao')->nullable()->index('FK_explicada_CORRECAO');

            $table->unique(['idQUestao', 'idCorrecao'], 'idQUestao');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('explicada');
    }
};
