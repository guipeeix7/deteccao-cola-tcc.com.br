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
        Schema::table('acrescenta', function (Blueprint $table) {
            $table->foreign(['idModulo'], 'FK_acrescenta_MODULO')->references(['idModulo'])->on('MODULO')->onUpdate('NO ACTION')->onDelete('SET NULL');
            $table->foreign(['idVideo'], 'FK_acrescenta_VIDEO')->references(['idVideo'])->on('VIDEO')->onUpdate('NO ACTION')->onDelete('SET NULL');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('acrescenta', function (Blueprint $table) {
            $table->dropForeign('FK_acrescenta_MODULO');
            $table->dropForeign('FK_acrescenta_VIDEO');
        });
    }
};
