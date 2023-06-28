<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes;

    protected $guarded = ['id','uuid'];

    protected $hidden = ['id', 'password'];

    protected static function boot(){
        parent::boot();

        static::creating(function($model){
            $model->uuid = Str::uuid();
            $model->is_active = true;
            $model->storage = 10000;
            $model->role_id = 3;
        });
    }

    public function role(){
        return $this->belongsTo(Role::class, 'role_id','id');
    }

    public function folders(){
        return $this->hasMany(Folder::class, 'user_id','id');
    }

    public function files(){
        return $this->hasMany(File::class,'user_id','id');
    }
}
