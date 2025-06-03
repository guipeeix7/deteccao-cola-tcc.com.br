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
        Schema::create('integra', function (Blueprint $table) {
            $table->integer('idModulo')->nullable();
            $table->integer('idPdf')->nullable()->index('FK_integra_PDF');

            $table->unique(['idModulo', 'idPdf'], 'idModulo');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('integra');
    }
};
