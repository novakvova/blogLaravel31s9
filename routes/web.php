<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     //dump([12,34,12]);
// //    exit();
//     //dd([12,377,12]);
//     return view('welcome');
// });

// Route::get('/users', 'TestController@index');

Route::view('/{path?}', 'app');
