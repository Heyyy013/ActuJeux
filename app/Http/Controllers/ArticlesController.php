<?php

namespace App\Http\Controllers;

use App\Models\Articles;
use App\Models\Categories;
use App\Models\Tags;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticlesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Categories::all();
        $tags = Tags::all();
        $articles = Articles::with(['tags', 'categories'])->get();
        return Inertia::render('welcome', [
            'articles' => $articles,
            'categories' => $categories,
            'tags' => $tags,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $articles = Articles::all();
        $categories = Categories::all();
        $tags = Tags::all();
        return Inertia::render('article/create', ['articles' => $articles, 'categories' => $categories, 'tags' => $tags]);
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
        if ($request->has('tags_id')) {
            $article->tags()->attach($request->tags_id);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $article = Articles::with(['tags', 'comments.user'])->find($id);
        return Inertia::render('article/detail', ['article' => $article]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $article = Articles::with(['categories', 'tags'])->find($id);
        $categories = Categories::all();
        $tags = Tags::all();
        return Inertia::render('article/edit', ['article' => $article, 'categories' => $categories, 'tags' => $tags]);
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
        $article->tags()->detach();
        if ($request->has('tags_id')) {
            $article->tags()->attach($request->tags_id);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $article = Articles::find($id);
        if ($article->tags) {
            $article->tags()->detach();
        }
        $article->delete();
    }
}
