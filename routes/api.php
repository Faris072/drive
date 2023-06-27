<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('user/register','App\Http\Controllers\Api\UserController@register');
Route::post('user/login','App\Http\Controllers\Api\UserController@login');
Route::post('user/logout','App\Http\Controllers\Api\UserController@logout');
Route::group(['middleware' => ['auth:sanctum']], function(){
    Route::group(['prefix' => 'user'], function(){
        Route::get('me', 'App\Http\Controllers\Api\UserController@me');
    });
});
