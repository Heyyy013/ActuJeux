<?php

use App\Http\Controllers\ArticlesController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\CommentsController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\LikesController;
use App\Http\Controllers\RolesController;
use App\Http\Controllers\TagsController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\AdminPass;
use App\Http\Middleware\AuthorPass;
use App\Http\Middleware\WebMasterPass;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [ArticlesController::class, 'index'])->name('home');



// ROUTE POUR AUTEUR
Route::middleware([AuthorPass::class])->group(function () {
    Route::get('/article/create', [ArticlesController::class, 'create']);
    Route::post('/article/post', [ArticlesController::class, 'store']);
    Route::get('/article/{id}/edit', [ArticlesController::class, 'edit']);
    Route::put('/article/update/{id}', [ArticlesController::class, 'update']);
    Route::delete('/article/{id}', [ArticlesController::class, 'destroy']);
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
});

// ROUTE POUR WEBMASTER
Route::middleware([WebMasterPass::class])->group(function () {

    Route::get('/tag/create', [TagsController::class, 'create']);
    Route::get('/tag/{id}', [TagsController::class, 'show']);
    Route::post('/tag/post', [TagsController::class, 'store']);
    Route::get('/tag/{id}/edit', [TagsController::class, 'edit']);
    Route::put('/tag/update/{id}', [TagsController::class, 'update']);
    Route::delete('/tag/{id}', [TagsController::class, 'destroy']);

    Route::get('/categorie/create', [CategoriesController::class, 'create']);
    Route::post('/categorie/post', [CategoriesController::class, 'store']);
    Route::get('/categorie/{id}/edit', [CategoriesController::class, 'edit']);
    Route::put('/categorie/update/{id}', [CategoriesController::class, 'update']);
    Route::delete('/categorie/{id}', [CategoriesController::class, 'destroy']);
});


// ROUTE POUR ADMIN
Route::middleware([AdminPass::class])->group(function () {

    Route::get('/user/{id}/edit', [UserController::class, 'edit']);
    Route::put('/user/update/{id}', [UserController::class, 'update']);


    Route::get('/role/create', [RolesController::class, 'create']);
    Route::post('/role/post', [RolesController::class, 'store']);
    Route::get('/role/{id}/edit', [RolesController::class, 'edit']);
    Route::put('/role/update/{id}', [RolesController::class, 'update']);
    Route::delete('/role/{id}', [RolesController::class, 'destroy']);
});

Route::middleware(['auth', 'verified'])->group(function () {
    // ROUTE POUR LECTEUR
    // Route::get('/comment/create', [CommentsController::class, 'create']);
    Route::post('/comment/post', [CommentsController::class, 'store']);
    Route::get('/comment/{id}/edit', [CommentsController::class, 'edit']);
    Route::put('/comment/update/{id}', [CommentsController::class, 'update']);
    Route::delete('/comment/{id}', [CommentsController::class, 'destroy']);
    // Route::get('/comment/{id}', [CommentsController::class, 'show']);

    Route::post('/like', [LikesController::class, 'toggle'])->middleware('auth');



    Route::get('/article/{id}', [ArticlesController::class, 'show']);
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
