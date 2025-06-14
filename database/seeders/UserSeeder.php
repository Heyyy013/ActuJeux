<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'name' => 'Admin',
                'email' => 'admin@site.test',
                'password' => Hash::make('password'),
                'role_id' => 1,
            ],
            [
                'name' => 'WebMaster',
                'email' => 'webmaster@site.test',
                'password' => Hash::make('password'),
                'role_id' => 2,
            ],
            [
                'name' => 'Auteur',
                'email' => 'auteur@site.test',
                'password' => Hash::make('password'),
                'role_id' => 3,
            ],
            [
                'name' => 'Lecteur',
                'email' => 'lecteur@site.test',
                'password' => Hash::make('password'),
                'role_id' => 4,
            ],
        ]);
    }
}
