<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/


Route::group(['middleware' => 'cors'], function()
{
    Route::post('authenticate', 'AuthenticateController@authenticate');


	//b) GET /messages/: return a list of messages
	//c) POST /message/?contents=CONTENT: post a message for storage ...
	Route::resource('message', 'MessageController', ['only' => ['index', 'store']]);
});