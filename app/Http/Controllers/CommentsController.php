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
        $comments = Comments::all();
        return Inertia::render('comment/create', ['comments' => $comments]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $comment = new Comments();
        $comment->description = $request->description;
        $comment->article_id = $request->article_id;
        $comment->save();
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $comment = Comments::find($id);
        return Inertia::render('/comment/{id}', ['comment' => $comment]);
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
        $comment->description = $request->description;
        $comment->article_id = $request->article_id;
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
