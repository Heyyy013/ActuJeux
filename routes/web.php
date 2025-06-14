<?php

use App\Http\Controllers\ArticlesController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\CommentsController;
use App\Http\Controllers\TagsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [ArticlesController::class, 'index'])->name('home');
Route::get('/article/create', [ArticlesController::class, 'create']);
Route::post('/article/post', [ArticlesController::class, 'store']);
Route::get('/article/{id}', [ArticlesController::class, 'show']);
Route::get('/article/{id}/edit', [ArticlesController::class, 'edit']);
Route::put('/article/update/{id}', [ArticlesController::class, 'update']);
Route::delete('/article/{id}', [ArticlesController::class, 'destroy']);

Route::get('/tag/create', [TagsController::class, 'create']);
Route::post('/tag/post', [TagsController::class, 'store']);
Route::get('/tag/{id}', [TagsController::class, 'show']);
Route::get('/tag/{id}/edit', [TagsController::class, 'edit']);
Route::put('/tag/update/{id}', [TagsController::class, 'update']);
Route::delete('/tag/{id}', [TagsController::class, 'destroy']);


Route::get('/comment/create', [CommentsController::class, 'create']);
Route::post('/comment/post', [CommentsController::class, 'store']);
Route::get('/comment/{id}', [CommentsController::class, 'show']);
Route::get('/comment/{id}/edit', [CommentsController::class, 'edit']);
Route::put('/comment/update/{id}', [CommentsController::class, 'update']);
Route::delete('/comment/{id}', [CommentsController::class, 'destroy']);


Route::get('/categorie/create', [CategoriesController::class, 'create']);
Route::post('/categorie/post', [CategoriesController::class, 'store']);
Route::get('/categorie/{id}/edit', [CategoriesController::class, 'edit']);
Route::put('/categorie/update/{id}', [CategoriesController::class, 'update']);
Route::delete('/categorie/{id}', [CategoriesController::class, 'destroy']);



Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
