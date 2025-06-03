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
        Schema::create('acrescenta', function (Blueprint $table) {
            $table->integer('idModulo')->nullable();
            $table->integer('idVideo')->nullable()->index('FK_acrescenta_VIDEO');

            $table->unique(['idModulo', 'idVideo'], 'idModulo');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('acrescenta');
    }
};
