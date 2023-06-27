<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            ['uuid' => Str::uuid(), 'slug' => 'developer', 'name' => 'Developer'],
            ['uuid' => Str::uuid(), 'slug' => 'admin', 'name' => 'Administrator'],
            ['uuid' => Str::uuid(), 'slug' => 'user', 'name' => 'User'],
        ];

        foreach($data as $d){
            // updateOrInsert() supaya createdAt dan updatedAt nya tidak ganti
            $condition = ['slug' => $d['slug']];
            Role::updateOrInsert($condition, $d);
        }
    }
}
