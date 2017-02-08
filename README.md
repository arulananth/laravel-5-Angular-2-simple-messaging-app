# Simple Message App

A simple messaging app.

Video demo is attached in `message_app.mp4`


## Installation

### Git Repository
At first clone
```sh
$ git clone https://github.com/SadiqUltra/laravel-5-Angular-2-simple-messaging-app.git
$ cd laravel-5-Angular-2-simple-messaging-app/
```

### Server Side

This app requires lamp or lemp server in server side. 
Laravel 5.1 (LTS) used in server side. 
* PHP >= 5.5.9,  PHP 7.* recommended
* OpenSSL PHP Extension
* PDO PHP Extension
* Mbstring PHP Extension
* Tokenizer PHP Extension
* XML PHP Extension
* Mysql/ MariaDB / Sqlite / Postgresql database

server_side/public directory will be the root of apache or Nginx server. As laravel do. 
I assume that server is ready and you know.

```sh
$ cp server_side <YOUR DESIRED LOCATION>
$ cd server_side
$ composer install
$ mv .env.example .env
$ php artisan key:generate
```

Then set database, username and password. Those configurations are located in .env file

```sh
$ vim .env
```

[vim usages: Press `i` to start writing, after writing, press `Esc` then press `Ctrl+z+z` to save]

After that, you need to migrate and seed database via this command

```sh
php artisan migrate --seed
```

### Client Side
You need the latest version of node and npm installed on your machine
Angular 2 used in client side.

```sh
$ cd clientSide
$ npm install
$ npm install -g @angular/cli
```

Change API_ENDPOINT according to your server api url, its located to clientSide/src/app/app.config.ts

```sh
$ vim  src/app/app.config.ts
```

You can run development version via this command
```sh
$ ng serve
```

Or you can build a production version with that command.
```sh
$ ng build --target=production --environment=prod
```

You will found the production build version at clientSide/dist/ folder. Copy those
files into your server root directory.

```sh
$ cp -a dist/. <SERVER ROOT dIRECTORY>
```

And also add a .htaccess file in the root of your server.

```sh
$ vim .htaccess
```

Then insert those lines and save. 

```sh
<IfModule mod_rewrite.c>
    <IfModule mod_negotiation.c>
        Options -MultiViews
    </IfModule>

    RewriteEngine On

    # Redirect Trailing Slashes If Not A Folder...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^(.*)/$ /$1 [L,R=301]

    # Handle Front Controller...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.php [L]
</IfModule>
```

### Socket.io

To enable realtime chat I have used socket.io
Just use those command and u are ready to go.

```sh
$ cd socket.io
$ node index.js
```

Note: You may need to enable port 3000. Use those command to enable port and after that stop again run index.js 

```sh
$ iptables -I INPUT 1 -i eth0 -p tcp --dport 3000 -j ACCEPT
```

User1:
username: sadiq
password: 1234

User2:
username: test
password: test


Now your simple messaging app is ready.

Thanks

### My contact details

For any kind of support feel free to contact me.

A S M Sadiqul Islam

Email: sadikultra@gmail.com

phone: 8801865790054

skype: sadiq.su

LinkedIn: https://linkedin.com/in/asmsadiqulislam