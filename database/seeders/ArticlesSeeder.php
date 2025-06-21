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
                'titre' => "Zelda: TOTK – Une suite magistrale qui redéfinit l'aventure sur Switch",
                'description' => "Sorti en mai 2023, The Legend of Zelda: Tears of the Kingdom s'impose comme une œuvre phare de l'univers vidéoludique. Suite directe du légendaire Breath of the Wild, ce nouvel opus propulse Link dans un Hyrule métamorphosé, désormais scindé entre ciel, terre et souterrains. Cette verticalité donne au monde une dimension nouvelle, enrichissant l’exploration et la sensation de liberté. L’une des grandes innovations du jeu réside dans l’introduction des pouvoirs comme l’amalgame, permettant aux joueurs de fusionner objets et matériaux pour créer des armes et véhicules inédits. Ce système encourage une créativité débordante, transformant le gameplay en véritable terrain d’expérimentation. Visuellement, malgré les limites de la Nintendo Switch, le jeu reste splendide : son esthétique pastel et ses environnements poétiques offrent des panoramas saisissants, notamment dans les îles célestes. Le retour des donjons classiques ravit les fans de la première heure, tout en cohabitant harmonieusement avec l’approche libre et organique introduite dans Breath of the Wild. Acclamé par la critique avec une moyenne de 96/100 sur Metacritic, Tears of the Kingdom est considéré comme l’un des meilleurs jeux de la décennie. Riche, inventif, audacieux, il prouve que Nintendo sait encore repousser les limites de ses propres créations, tout en respectant l’âme de la série.",
                'categorie_id' => 2,
                'user_id' => 1,
                'img' => 'https://upload.wikimedia.org/wikipedia/fr/thumb/7/74/The_Legend_of_Zelda_Tears_of_the_Kingdom_Logo.webp/1024px-The_Legend_of_Zelda_Tears_of_the_Kingdom_Logo.webp.png',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
