<?php

namespace App\Http\Controllers;

use App\Models\Likes;
use App\Http\Requests\StoreLikesRequest;
use App\Http\Requests\UpdateLikesRequest;
use App\Models\Articles;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LikesController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function toggle($id)
{
    $article = Articles::findOrFail($id);
    $user = Auth::user();

    if ($article->likedBy()->where('user_id', $user->id)->exists()) {
        $article->likedBy()->detach($user->id);
    } else {
        $article->likedBy()->attach($user->id);
    }

    return back(); // ou return redirect()->back(); ou Inertia::redirect...
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
