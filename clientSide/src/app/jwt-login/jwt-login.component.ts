import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import { JwtLogin } from './JwtLogin';
import { JwtLoginService } from './jwt-login.service';
import {AppConfig} from '../app.config';

@Component({
  selector: 'app-jwt-login',
  templateUrl: './jwt-login.component.html',
  styleUrls: ['./jwt-login.component.css']
})
export class JwtLoginComponent implements OnInit {

	model = new JwtLogin();

  constructor(private router: Router,
  			private jwtLoginService: JwtLoginService) { }

  onSubmit() { 

	this.jwtLoginService.verifyAuth(this.model.username, this.model.password);
	
	this.handleNext();

  }

  handleNext(){
  	if(localStorage.getItem("jwtToken")){
		//console.log(localStorage.getItem("jwtToken"));
		this.router.navigateByUrl('msg');
	}
  }

  ngOnInit() {
  }

}
