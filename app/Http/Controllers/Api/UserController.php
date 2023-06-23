<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use App\Models\Folder;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function register(Request $request){
        DB::beginTransaction();
        try{
            $attributes = [
                'name' => 'Nama',
                'username' => 'Username',
                'email' => 'Email',
                'storage' => 'Storage',
                'password' => 'Password',
            ];

            $messages = [
                'required' => ':attribute tidak boleh kosong.',
                'email' => ':attribute harus berupa email.',
                'numeric' => ':attribute harus berupa number.',
                'min:8' => ':attribute minimal 8 karakter.',
                'unique:users,usrname' => ':attribute tidak valid.',
            ];

            $validatedData = Validator::make($request->all(),[
                'name' => 'required',
                'username' => 'required|unique:users,username',
                'email' => 'required|email',
                'storage' => 'required|numeric',
                'password' => 'required|min:8',
            ], $messages, $attributes);

            if($validatedData->fails()){
                DB::rollback();
                return $this->getResponse('',$validatedData->getMessageBag(),422);
            }

            $create = User::create($request->all());

            if(!$create){
                DB::rollback();
                return $this->getResponse('','User gagal dibuat.',500);
            }

            $folder = Folder::create([
                'user_id' => $create->id,
                'parent_id' => null,
                'name' => $request->username,
            ]);

            if(!$folder){
                DB::rollBack();
                return $this->getResponse('','User gagal registrasi.',500);
            }

            return $this->getResponse('','User berhasil dibuat',200);
        }
        catch(\Exception $e){
            DB::rollback();
            return $this->getResponse('',$e->getMessage(),500);
        }
    }
}
