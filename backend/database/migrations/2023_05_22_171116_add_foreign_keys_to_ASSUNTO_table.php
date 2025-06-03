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
        Schema::table('ASSUNTO', function (Blueprint $table) {
            $table->foreign(['idAssuntoPai'], 'FK_ASSUNTO')->references(['idAssunto'])->on('ASSUNTO')->onUpdate('NO ACTION')->onDelete('NO ACTION');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('ASSUNTO', function (Blueprint $table) {
            $table->dropForeign('FK_ASSUNTO');
        });
    }
};
