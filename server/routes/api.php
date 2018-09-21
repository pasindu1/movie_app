<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/moviestore', 'Moviecontroller@storemovie');

Route::get('/getCategory','Moviecontroller@getcategory');

Route::get('/getmovies','Moviecontroller@getmovieslist');

Route::get('/edit_movie','Moviecontroller@editmovie');
Route::delete('/getmovies/delete/{id}','Moviecontroller@deletemovie');
Route::get('/getmovies/edit/{id}','Moviecontroller@editmovie');

Route::put('/getmovies/update/{id}', 'Moviecontroller@updatemovie');
Route::get('/searchmovies','Moviecontroller@searchmovie');