<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

    /**
    * @OA\Info(
    *      version="8.5",
    *      title="Drive - Muhammad Faris Shafwan",
    *      description="Ini adalah aplikasi penyimanan file yang bertujuan menyimpan data seperti memori.",
    *      @OA\Contact(
    *          email="farisbos.mfs@gmail.com"
    *      ),
    *      @OA\License(
    *          name="Muhammad Faris Shafwan",
    *          url="https://blogfarisweb.blogspot.com"
    *      )
    * )
    *
    * @OA\Server(
    *      url=L5_SWAGGER_CONST_HOST,
    *      description="Api drive",
    * )
    */
class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected function getResponse($data, $message, $code){
        return response()->json([
            'data' => $data,
            'status' => [
                'message' => $message,
                'code' => $code
            ]
        ]);
    }
}
