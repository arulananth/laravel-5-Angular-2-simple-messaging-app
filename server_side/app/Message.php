<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Message extends Model
{
	/**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['message', 'name'];

    /**
     * get message owner or user
     */
    public function user()
    {
    	return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * get message owner or user
     */
    public function owner()
    {
    	return $this->belongsTo(User::class, 'user_id');
    }
}
