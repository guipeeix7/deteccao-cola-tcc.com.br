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
        Schema::table('agrupa', function (Blueprint $table) {
            $table->foreign(['idCorrecao'], 'FK_agrupa_CORRECAO')->references(['idCorrecao'])->on('CORRECAO')->onUpdate('NO ACTION')->onDelete('SET NULL');
            $table->foreign(['idPdf'], 'FK_agrupa_PDF')->references(['idPdf'])->on('PDF')->onUpdate('NO ACTION')->onDelete('SET NULL');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('agrupa', function (Blueprint $table) {
            $table->dropForeign('FK_agrupa_CORRECAO');
            $table->dropForeign('FK_agrupa_PDF');
        });
    }
};
