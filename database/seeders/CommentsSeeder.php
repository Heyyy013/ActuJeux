<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CommentsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('comments')->insert([
            [
                'contenu' => 'commentaire 1',
                'article_id' => 1,
                'user_id' => 1,
            ],
            [
                'contenu' => 'commentaire 2',
                'article_id' => 1,
                'user_id' => 1,
            ],
            [
                'contenu' => 'commentaire 3',
                'article_id' => 1,
                'user_id' => 1,
            ],
        ]);
    }
}
