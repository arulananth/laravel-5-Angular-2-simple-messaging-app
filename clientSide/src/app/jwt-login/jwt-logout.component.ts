import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';

@Component({
  selector: 'app-jwt-logout',
  template: ''
})
export class JwtLogoutComponent implements OnInit {

  constructor(private router: Router) {

  }

  logout(){
  	localStorage.setItem("jwtToken", '');

  	this.router.navigateByUrl('login');
  }

  ngOnInit() {

  	this.logout();
  }

}
