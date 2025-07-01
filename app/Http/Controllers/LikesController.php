<?php

namespace App\Http\Controllers;

use App\Models\Likes;
use App\Http\Requests\StoreLikesRequest;
use App\Http\Requests\UpdateLikesRequest;
use App\Models\Articles;
use Illuminate\Http\Request;

class LikesController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function toggle(Request $request)
    {
        $article = Articles::findOrFail($request->article_id);
        $user = auth()->user();

        if ($article->likedByUsers()->where('user_id', $user->id)->exists()) {
            $article->likedByUsers()->detach($user->id);
        } else {
            $article->likedByUsers()->attach($user->id);
        }

        return back();
    }

    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreLikesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Likes $likes)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Likes $likes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLikesRequest $request, Likes $likes)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Likes $likes)
    {
        //
    }
}
