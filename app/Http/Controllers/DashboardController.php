<?php

namespace App\Http\Controllers;

use App\Models\Articles;
use App\Models\Categories;
use App\Models\Roles;
use App\Models\Tags;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $categories = Categories::all();
        $articles = Articles::all();
        $tags = Tags::all();
        $roles = Roles::all();

        return Inertia::render('dashboard', [
            'categories' => $categories,
            'tags' => $tags,
            'roles' => $roles,
            'articles' => $articles,
        ]);
    }
}
