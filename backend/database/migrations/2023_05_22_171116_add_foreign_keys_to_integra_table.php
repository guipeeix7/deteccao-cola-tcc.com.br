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
        Schema::table('integra', function (Blueprint $table) {
            $table->foreign(['idModulo'], 'FK_integra_MODULO')->references(['idModulo'])->on('MODULO')->onUpdate('NO ACTION')->onDelete('SET NULL');
            $table->foreign(['idPdf'], 'FK_integra_PDF')->references(['idPdf'])->on('PDF')->onUpdate('NO ACTION')->onDelete('SET NULL');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('integra', function (Blueprint $table) {
            $table->dropForeign('FK_integra_MODULO');
            $table->dropForeign('FK_integra_PDF');
        });
    }
};
