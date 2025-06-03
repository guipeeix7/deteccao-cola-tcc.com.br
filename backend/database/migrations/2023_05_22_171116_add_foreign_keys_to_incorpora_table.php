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
        Schema::table('incorpora', function (Blueprint $table) {
            $table->foreign(['idCorrecao'], 'FK_incorpora_CORRECAO')->references(['idCorrecao'])->on('CORRECAO')->onUpdate('NO ACTION')->onDelete('SET NULL');
            $table->foreign(['idVideo'], 'FK_incorpora_VIDEO')->references(['idVideo'])->on('VIDEO')->onUpdate('NO ACTION')->onDelete('SET NULL');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('incorpora', function (Blueprint $table) {
            $table->dropForeign('FK_incorpora_CORRECAO');
            $table->dropForeign('FK_incorpora_VIDEO');
        });
    }
};
