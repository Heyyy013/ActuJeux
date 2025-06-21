<?php

namespace App\Http\Controllers;

use App\Models\Roles;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function edit($id)
    {
        $user = User::with(['roles'])->find($id);
        $roles = Roles::all();
        return Inertia::render('user/edit', [
            'user' => $user,
            'roles' => $roles,
        ]);
    }

    /**
     * 
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $user->name = $request->name;
        $user->role_id = $request->role_id;
        $user->save();
    }
}
