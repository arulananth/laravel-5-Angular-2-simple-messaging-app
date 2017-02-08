import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {AppConfig} from '../app.config';

@Injectable()
export class JwtLoginService {


  constructor() { }

  verifyAuth(username, password){

 	var http = new XMLHttpRequest();
	var url = AppConfig.API_ENDPOINT + "/authenticate";
	var params = "username="+username 
				+"&password="+password;
	http.open("POST", url, false);

	//Send the proper header information along with the request
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	http.send(params);
	
	//http.onreadystatechange = function() {//Call a function when the state changes.
	    if(http.readyState == 4 && http.status == 200) {
	    	var token = JSON.parse(http.response).token;
	    	localStorage.setItem("jwtToken", token);
			//console.log(localStorage.getItem("jwtToken"));
	    }else{
	    	localStorage.setItem("jwtToken", '');
	    }
	//}
	}

}
