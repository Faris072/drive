<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Models\Folder;

class FolderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            ['uuid' => Str::uuid(), 'user_id' => 1, 'parent_id' => null, 'name' => 'developer', 'created_by' => 1, 'updated_by' => 1],
            ['uuid' => Str::uuid(), 'user_id' => 2, 'parent_id' => null, 'name' => 'admin', 'created_by' => 2, 'updated_by' => 2],
        ];

        foreach($data as $d){
            // updateOrInsert() supaya createdAt dan updatedAt nya tidak ganti
            // $condition = ['id' => $d['id']];
            Folder::create($d);
        }
    }
}
