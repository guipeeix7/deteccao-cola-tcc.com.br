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
        Schema::create('ORGAO', function (Blueprint $table) {
            $table->integer('idOrgao')->primary();
            $table->string('nomeOrgao')->nullable()->unique('nomeOrgao');
            $table->string('siglaOrgao', 20)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ORGAO');
    }
};
