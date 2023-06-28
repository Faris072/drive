<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use App\Models\Folder;
use App\Models\File;
use App\Models\User;

class DriveController extends Controller
{
    public function createFolder(Request $request){
        DB::beginTransaction();
        try{
            $attributes = [
                'name' => 'Nama',
                'parent_id' => 'Folder tujuan',
            ];

            $messages = [
                'required' => ':attribute wajib di isi.',
                'uuid' => 'Id :attribute tidak valid.',
            ];

            $validatedData = Validator::make($request->all(),[
                'name' => 'required',
                'parent_id' => 'required|uuid',
                'user_id' => 'uuid'
            ],$messages, $attributes);

            if($validatedData->fails()){
                DB::rollBack();
                return $this->getResponse('',$validatedData->getMessageBag(), 422);
            }

            $parent = Folder::firstWhere('uuid', $request->parent_id);
            if(!$parent){
                return $this->getResponse('','Folder asal tidak ditemukan',404);
            }

            $createFolder = Folder::create([
                'user_id' => auth()->user()->id,
                'name' => $request->name,
                'parent_id' => $parent->id,
                'created_by' => auth()->user()->id,
                'updated_by' => auth()->user()->id,
            ]);

            if(!$createFolder){
                DB::rollBack();
                return $this->getResponse('','Folder gagal ditambahkan.',500);
            }

            DB::commit();
            return $this->getResponse($createFolder,'Folder berhasil ditambahkan.',200);
        }
        catch(\Exception $e){
            DB::rollBack();
            return $this->getResponse('',$e->getMessage(),500);
        }
    }

    public function deleteFolder($id){
        DB::beginTransaction();
        try{
            $folder = Folder::firstWhere('uuid',$id);
            if(!$folder){
                DB::rollback();
                return $this->getResponse('','Folder tidak ditemukan',404);
            }

            $delete = $folder->forceDelete();
            if(!$delete){
                DB::rollback();
                return $this->getResponse('','Hapus folder gagal.',500);
            }

            DB::commit();
            return $this->getResponse('','Hapus folder berhasil',200);
        }
        catch(\Exception $e){
            DB::rollback();
            return $this->getResponse('',$e->getMessage(),500);
        }
    }

    public function createFile(Request $request){
        DB::beginTransaction();
        try{
            $attributes = [
                'folder_id' => 'Folder asal',
            ];

            $messages = [
                'required' => ':attribute tidak boleh kosong.',
                'uuid' => 'Id :attribute tidak valid',
                'mimes' => 'Format :attribute tidak falid',
                'exists' => ':attribute tidak ditemukan'
            ];

            $validatedData = Validator::make($request->all(),[
                'folder_id' => 'required|uuid|exists:folders,uuid',//exists bernilai true jika ada di db. kebalikan dari exists adalah unique
                'files.*' => 'required|mimes:jpg,jpeg,png,svg,xls,doc,docx,pdf'
            ],$messages,$attributes);

            if($validatedData->fails()){
                DB::rollback();
                return $this->getResponse('',$validatedData->getMessageBag(),422);
            }

            foreach($request['files'] as $f){
                $name = time().random_int(1,100).$f->getClientOriginalName();
                $path = 'files/'. $request->folder_id;
                $data = [
                    'user_id' => auth()->user()->id,
                    'folder_id' => Folder::firstWhere('uuid',$request->folder_id)->id,
                    'name' => $name,
                    'original_name' => $f->getClientOriginalName(),
                    'extension' => $f->getClientOriginalExtension(),
                    'size' => $f->getSize(),
                    'mime_type' => $f->getMimeType(),
                    'is_image' => substr($f->getMimeType(), 0, 5) == 'image' ? true : false,
                    'path' => $path,
                    'created_by' => auth()->user()->id,
                    'updated_by' => auth()->user()->id,
                ];

                $store = File::create($data);
                if(!$store){
                    DB::rollback();
                    return $this->getResponse('','File gagal diupload.',500);
                }

                $f->storeAs($path, $data['name']);
            }

            DB::commit();
            return $this->getResponse('','File berhasil diupload.',200);
        }
        catch(\Exception $e){
            return $this->getResponse('',$e->getMessage(),500);
        }
    }

    public function deleteFile($id){
        DB::beginTransaction();
        try{
            $file = File::firstWhere('uuid',$id);
            if(!$file){
                DB::rollback();
                return $this->getResponse('','File tidak ditemukan',404);
            }

            $delete = $file->forceDelete();
            if(!$delete){
                DB::rollback();
                return $this->getResponse('','File gagal dihapus',500);
            }

            Storage::delete($file->path.'/'.$file->name);

            DB::commit();
            return $this->getResponse('','File berhasil dihapus',200);
        }
        catch(\Exception $e){
            DB::rollback();
            return $this->getResponse('',$e->getMessage(),500);
        }
    }

    public function showFolder($id){
        try{
            $folder = Folder::firstWhere('uuid',$id);
            if(!$folder){
                return $this->getResponse('','Folder tidak ditemukan',404);
            }

            $folders = Folder::with(['parent'])->where('parent_id',$folder->id)->get();
            $files = File::where('folder_id', $folder->id)->get();

            $dataFolder = [];
            foreach($folders as $f){
                $dataFolder[] = [
                    'id' => $f->uuid,
                    'name' => $f->name,
                    'parent_name' => $f->parent->name,
                    'created_by' => User::find($f->created_by),
                    'updated_by' => User::find($f->updated_by),
                ];
            }

            $dataFile = [];
            foreach($files as $f){
                $dataFile[] = [
                    'id' => $f->uuid,
                    'name' => $f->name,
                    'original_name' => $f->original_name,
                    'path' => $f->path,
                    'link' => route('render-file',$f->uuid),
                    'size' => $f->size,
                    'mime_type' => $f->mime_type,
                    'extension' => $f->extension,
                    'is_image' => $f->is_image,
                ];
            }

            $data = [
                'folders' => $dataFolder,
                'files' => $dataFile,
            ];

            return $this->getResponse($data,'Data berhasil ditampilkan',200);
        }
        catch(\Exception $e){
            return $this->getResponse('',$e->getMessage(),500);
        }
    }

    public function renderFile($id){
        $file = File::firstWhere('uuid',$id);
        return response()->file($file->path.$file->name);
    }

    public function showFile($id){
        try{
            $file = File::firstWhere('uuid',$id);
            if(!$file){
                return $this->getResponse('','File tidak ditemukan',404);
            }

            $data = [
                'id' => $file->uuid,
                'link' => route('render-file',$id),
                'name' => $file->name,
                'original_name' => $file->original_name,
                'size' => $file->size,
                'mime_type' => $file->mime_type,
                'extension' => $file->extension,
                'path' => $file->path,
                'is_image' => $file->is_image,
            ];
            return $this->getResponse($data,'File berhasil ditampilkan',200);
        }
        catch(\Exception $e){
            return $this->getResponse('',$e->getMessage(),500);
        }
    }
}
