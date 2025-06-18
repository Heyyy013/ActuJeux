<?php

namespace App\Http\Controllers;

use App\Models\Tags;
use App\Http\Requests\StoreTagsRequest;
use App\Http\Requests\UpdateTagsRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TagsController extends Controller
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
        $tags = Tags::all();
        return Inertia::render('tag/create', [
            'tags' => $tags
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $tag = new Tags();
        $tag->nom = $request->nom;
        $tag->save();
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
        $tag = Tags::find($id);
        return Inertia::render('tag/edit', [
            'tag' => $tag
        ]);
    }

    /**
     * 
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $tag = Tags::find($id);
        $tag->nom = $request->nom;
        $tag->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $tag = Tags::find($id);
        $tag->delete();
    }
}
