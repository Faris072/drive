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
            ['id' => 1, 'uuid' => Str::uuid(), 'slug' => 'developer', 'name' => 'Developer'],
            ['id' => 2, 'uuid' => Str::uuid(), 'slug' => 'admin', 'name' => 'Administrator'],
            ['id' => 3, 'uuid' => Str::uuid(), 'slug' => 'user', 'name' => 'User'],
        ];

        foreach($data as $d){
            // updateOrInsert() supaya createdAt dan updatedAt nya tidak ganti
            $condition = ['id' => $d['id'], 'slug' => $d['slug']];
            Role::updateOrInsert($condition, $d);
        }
    }
}
