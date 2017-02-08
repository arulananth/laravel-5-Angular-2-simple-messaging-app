<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class MessageTest extends TestCase
{
	use WithoutMiddleware;

    /**
     * List all message.
     *
     * @return void
     */
    public function testListAllMessage()
    {
        $this->get('/message', [])
             ->seeJson([
                 'success' => true,
             ]);
    }
}
