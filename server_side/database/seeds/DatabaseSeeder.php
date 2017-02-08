<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

use App\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        // $this->call(UserTableSeeder::class);

        DB::table('users')->delete();

        $users = array(
                ['name' => 'A S M Sadiqul Islam', 'username' => 'sadiq', 'password' => Hash::make('1234')],
                ['name' => 'TEST', 'username' => 'TEST', 'password' => Hash::make('test')],
        );
            
        // Loop through each user above and create the record for them in the database
        foreach ($users as $user)
        {
            User::create($user);
        }

        Model::reguard();
    }
}
