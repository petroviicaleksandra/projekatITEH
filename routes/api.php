<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\MovieTicketController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserTicketController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('ticket', TicketController::class);
Route::resource('users', UserController::class);
Route::resource('genres', GenreController::class);

Route::get('/movies', [MovieController::class, 'index']);
Route::get('/users/{id}/tickets', [UserTicketController::class, 'index'])->name('users.ticket.index');

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/tickets', [TicketController::class, 'index']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/profile', function (request $request) {
        return auth()->user();
    });
    Route::resource('ticket', TicketController::class)->only(['update', 'store', 'destroy']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/getId', [AuthController::class, 'getId']);
    Route::get('/getRole', [AuthController::class, 'getRole']);

    Route::delete('/tickets/{movie_id}', [MovieTicketController::class, 'destroy']);
});
