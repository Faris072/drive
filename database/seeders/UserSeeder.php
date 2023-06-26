<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            ['id' => 1, 'uuid' => Str::uuid(), 'role_id' => 1, 'username' => 'developer', 'name' => 'Developer', 'email' => 'farisbos.mfs@gmail.com', 'storage' => 100000, 'password' => bcrypt(123456), 'is_active' => true],
            ['id' => 2, 'uuid' => Str::uuid(), 'role_id' => 2, 'username' => 'admin', 'name' => 'Administrator', 'email' => 'admin@gmail.com', 'storage' => 100000, 'password' => bcrypt(123456), 'is_active' => true],
        ];

        foreach($data as $d){
            // updateOrInsert() supaya createdAt dan updatedAt nya tidak ganti
            $condition = ['id' => $d['id'],'username' => $d['username']];
            User::updateOrInsert($condition, $d);
        }
    }
}
