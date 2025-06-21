<?php

namespace App\Http\Controllers;

use App\Models\Comments;
use App\Http\Requests\StoreCommentsRequest;
use App\Http\Requests\UpdateCommentsRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CommentsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $comment = new Comments();
        $comment->contenu = $request->contenu;
        $comment->article_id = $request->article_id;
        $comment->user_id = auth()->id();
        $comment->save();
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $comment = Comments::find($id);
        return Inertia::render('comment/edit', [
            'comment' => $comment
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $comment = Comments::find($id);
        $comment->contenu = $request->contenu;
        $comment->article_id = $request->article_id;
        $comment->user_id = auth()->id();
        $comment->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $comment = Comments::find($id);
        $comment->delete();
    }
}
