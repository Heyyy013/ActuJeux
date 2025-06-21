<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Articles extends Model
{
    /** @use HasFactory<\Database\Factories\ArticlesFactory> */
    use HasFactory;

    public function categories()
    {
        return $this->belongsTo(Categories::class, 'categorie_id');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function comments()
    {
        return $this->hasMany(Comments::class, 'article_id');
    }
    public function tags()
    {
        return $this->belongsToMany(Tags::class, 'articles_tags');
    }
}
