<?php

namespace App\Http\Controllers;

use App\Models\Articles;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticlesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articles = Articles::with(['comments', 'tags', 'categories'])->get();
        return Inertia::render('welcome', [
            'articles' => $articles,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $articles = Articles::all();
        return Inertia::render('article/create', ['articles' => $articles]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $article = new Articles();
        $article->titre = $request->titre;
        $article->description = $request->description;
        $article->categorie_id = $request->categorie_id;
        $article->user_id = $request->user_id;
        $article->save();
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $article = Articles::with(['tags', 'comments'])->find($id);
        return Inertia::render('article/detail', ['article' => $article]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $article = Articles::find($id);
        return Inertia::render('article/edit', ['article' => $article]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $article = Articles::find($id);
        $article->titre = $request->titre;
        $article->description = $request->description;
        $article->categorie_id = $request->categorie_id;
        $article->user_id = $request->user_id;
        $article->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $article = Articles::find($id);
        $article->delete();
    }
}
