<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AddSanctumTokenHeader
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if (isset($request->token) && empty($request->bearerToken())) {
            $request->headers->set('Authorization', 'Bearer ' . $request->token);
        }

        return $next($request);
    }
}
