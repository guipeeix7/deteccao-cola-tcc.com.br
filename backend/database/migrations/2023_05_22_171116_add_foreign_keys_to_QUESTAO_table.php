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
        Schema::table('QUESTAO', function (Blueprint $table) {
            $table->foreign(['idBanca'], 'FK_QUESTAO_BANCA')->references(['idBanca'])->on('BANCA')->onUpdate('NO ACTION')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('QUESTAO', function (Blueprint $table) {
            $table->dropForeign('FK_QUESTAO_BANCA');
        });
    }
};
