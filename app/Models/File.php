<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\SoftDeletes;

class File extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = ['id','uuid'];
    protected $hidden = ['uuid'];

    public function user(){
        return $this->belongsTo(User::class,'user_id','id');
    }

    public function folder(){
        return $this->belongsTo(Folder::class,'folder_id','id');
    }

    protected static function boot(){
        parent::boot();

        static::creating(function($model){
            $model->uuid = Str::uuid();
        });
    }
}
