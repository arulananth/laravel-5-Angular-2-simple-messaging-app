<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class AuthTest extends TestCase
{
    /**
     * Login test
     *
     * @return void
     */
    public function testLogin()
    {
         $this->post('/authenticate', ['username' => 'sadiq', 'password' => '1234'])
             ->seeJson([
                 'jwtAuth' => true,
             ]);
    }

    /**
     * Login failure test
     *
     * @return void
     */
    public function testLoginFailure()
    {
         $this->post('/authenticate', ['username' => 'sadiq', 'password' => 'wrong_password'])
             ->seeJsonEquals([
                 'error' => 'invalid_credentials',
             ]);
    }

    /**
     * Authentication required directory POST /message test
     *
     * @return void
     */
    public function testAuthenticationPOSTMessage()
    {
         $this->post('/message', ['contents' => 'test'])
             ->seeJsonEquals([
                 'error' => 'token_not_provided',
             ]);
    }

    /**
     * Authentication required directory GET /message test
     *
     * @return void
     */
    public function testAuthenticationGETTMessage()
    {
         $this->get('/message', [])
             ->seeJsonEquals([
                 'error' => 'token_not_provided',
             ]);
    }


    /**
     * Invalid token test
     *
     * @return void
     */
    public function testInvalidToken()
    {
         $this->get('/message', ['token' => 'this is an invalid token'])
             ->seeJsonEquals([
                 'error' => 'token_not_provided',
             ]);
    }
}
