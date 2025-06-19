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
                'titre' => 'GTA 6 : Le Retour Triomphal de Rockstar',
                'description' => "Après plus d'une décennie d'attente, Grand Theft Auto VI est enfin en route. Annoncé officiellement par Rockstar Games, le jeu sortira au printemps 2026 (probablement en mai), d'abord sur PlayStation 5 et Xbox Series X|S. La version PC reste à confirmer.

Ce nouvel opus marquera un retour à Vice City, dans un État fictif nommé Leonida, inspiré de la Floride. La carte sera immense, avec des zones urbaines, rurales, marécageuses, et même sous-marines. L’univers promet d’être le plus vivant et détaillé jamais conçu par Rockstar.

Pour la première fois dans la série, GTA 6 proposera un duo de protagonistes : Lucia, première femme jouable dans un GTA principal, et Jason, son partenaire dans une trame inspirée de Bonnie & Clyde. Ensemble, ils évolueront dans une intrigue moderne mêlant crime organisé, réseaux sociaux et satire de la société contemporaine.

Le jeu bénéficiera de nombreuses améliorations techniques : une IA dynamique, des bâtiments explorables, des cycles jour/nuit réalistes, et une immersion totale grâce à la puissance des consoles de nouvelle génération. Le système de police, les interactions sociales et les mécaniques de gameplay ont été repensés pour enrichir l’expérience.

Malgré les fuites et les changements internes chez Rockstar, GTA 6 s’annonce comme le jeu le plus ambitieux de la saga, et probablement l’un des plus attendus de l’histoire du jeu vidéo.",
                'categorie_id' => 3,
                'user_id' => 3,
                'img' => '/images/gta6.webp',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'titre' => 'titre2',
                'description' => 'brtgfjkgilf',
                'categorie_id' => 1,
                'user_id' => 1,
                'img' => '',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
