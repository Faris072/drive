<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use App\Models\Folder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

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
                'unique' => ':attribute tidak valid.',
            ];

            $validatedData = Validator::make($request->all(),[
                'name' => 'required',
                'username' => 'required|unique:users,username',
                'email' => 'required|email|unique:users,email',
                // 'storage' => 'required|numeric',
                'password' => 'required|min:8',
            ], $messages, $attributes);

            if($validatedData->fails()){
                DB::rollback();
                return $this->getResponse('',$validatedData->getMessageBag(),422);
            }

            $request['password'] = bcrypt($request->password);

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

            DB::commit();
            return $this->getResponse('','User berhasil dibuat',200);
        }
        catch(\Exception $e){
            DB::rollback();
            return $this->getResponse('',$e->getMessage(),500);
        }
    }

    public function login(Request $request){
        try{
            $user = User::where('username', $request->username)->orWhere('email',$request->email)->first();

            if(!$user || !Hash::check($request->password, $user->password)){
                return $this->getResponse('','Username atau Password tidak ditemukan.',401);
            }

            $token = $user->createToken('drive_token')->plainTextToken;

            $data = [
                'id' => $user->uuid,
                'name' => $user->name,
                'username' => $user->username,
                'email' => $user->email,
                'storage' => $user->storage
            ];

            $me = [
                'me' => $data,
                'token' => $token
            ];

            return $this->getResponse($me,'Login berhasil.',200);
        }
        catch(\Exception $e){
            return $this->getResponse('',$e->getMessage(),500);
        }
    }

    public function me(){
        try{
            $user = User::with(['role'])->find(auth()->user()->id);
            $data = [
                'id' => $user->uuid,
                'name' => $user->name,
                'username' => $user->username,
                'email' => $user->email,
                'storage' => $user->storage,
                'role_id' => $user->role->uuid,
                'role' => [
                    'id' => $user->role->uuid,
                    'name' => $user->role->name,
                    'slug' => $user->role->slug,
                ],
            ];
            return $this->getResponse($data,'Data berhasil dimuat.',200);
        }
        catch(\Exception $e){
            return $this->getResponse('',$e->getMessage(),500);
        }
    }

    public function logout(){
        try{
            $logout = auth('sanctum')->user()->tokens()->delete();
            if(!$logout){
                return $this->getResponse('','Logout gagal',400);
            }

            return $this->getResponse('','Logout berhasil.',200);
        }
        catch(\Exception $e){
            return $this->getResponse('',$e->getMessage(),500);
        }
    }
}
