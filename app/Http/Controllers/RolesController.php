<?php

namespace App\Http\Controllers;

use App\Models\Roles;
use App\Http\Requests\StoreRolesRequest;
use App\Http\Requests\UpdateRolesRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RolesController extends Controller
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
        $roles = Roles::all();
        return Inertia::render('article/create', ['roles' => $roles]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $article = new Roles();
        $article->nom = $request->nom;
        $article->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(Roles $roles) {}

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $role = Roles::find($id);
        return Inertia::render('role/{id}/edit', ['role' => $role]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $article = Roles::find($id);
        $article->nom = $request->nom;
        $article->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $role = Roles::find($id);
        $role->delete();
    }
}
