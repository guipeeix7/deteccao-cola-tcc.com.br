<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\PermissionsController;
use App\Http\Controllers\Admin\RolesController;

use App\Http\Controllers\System\UserController;
use App\Http\Controllers\System\Users\AdministradorController;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/**
 * Run the following routes if is the app first run
 */
Route::post('user/{user}', [UserController::class , 'update'])->name('user.update');

    Route::get('/', function () {
        echo "aloooha";
        return ['Laravel' => phpinfo()];
    });

    Route::group(['middleware' => ['auth:sanctum']], function () {

        Route::get('roles-user', [RolesController::class, 'getCurrentUserRoles']);

    });
    Route::group(['middleware' => ['auth:sanctum']], function () {
        Route::get('permissions-user', [PermissionsController::class, 'getCurrentUserPermissions']);
    });

    Route::group(['middleware' => ['auth:sanctum', 'verified']], function () {

        Route::get('current-user', [UserController::class, 'currentUserData']);



        Route::group(['middleware' => ['role:admin']], function () {
            Route::resource('role', RolesController::class);
            Route::get('role-verify-name',[ RolesController::class, 'verifyUnique']);

            Route::resource('permission', PermissionsController::class);

            Route::resource('permission', controller: PermissionsController::class);
            Route::get('permission-verify-name',[ PermissionsController::class, 'verifyUnique']);
        });
    });
    Route::put('user-confirm-info', [UserController::class, 'updateCurrentUser']);


require __DIR__.'/auth.php';
