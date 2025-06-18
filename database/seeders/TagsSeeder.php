<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TagsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tags')->insert([
            [
                'nom' => 'aventure'
            ],
            [
                'nom' => 'action'
            ],
            [
                'nom' => 'plateforme'
            ],
        ]);
        DB::table('articles_tags')->insert([
            [
                'articles_id' => 1,
                'tags_id' => 1,
            ],
            [
                'articles_id' => 1,
                'tags_id' => 2,
            ],
        ]);
    }
}
