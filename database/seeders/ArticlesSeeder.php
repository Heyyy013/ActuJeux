<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ArticlesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('articles')->insert([
            [
                'titre' => 'titre1',
                'description' => 'vzarjvbizjvb',
                'categorie_id' => 1, 
                'user_id' => 1,
            ],
            [
                'titre' => 'titre2',
                'description' => 'brtgfjkgilf',
                'categorie_id' => 1, 
                'user_id' => 1,
            ],
        ]);
    }
}
