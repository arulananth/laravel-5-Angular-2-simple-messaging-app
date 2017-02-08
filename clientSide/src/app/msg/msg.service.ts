import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Msg } from './msg';
import {AppConfig} from '../app.config';

@Injectable()
export class MsgService {

  
  socket = io(AppConfig.SOCKET_IO);


  constructor() { }

  getMsgs(){
   var xhReq = new XMLHttpRequest();
   var url = AppConfig.API_ENDPOINT + '/message' + "?token="+localStorage.getItem("jwtToken");
 	xhReq.open("GET", url, false);
	xhReq.send(null);
	var serverResponse = xhReq.response;
	//console.log(JSON.parse(xhReq.response).messages);
	return JSON.parse(xhReq.response).messages;
  }

  onSubmit(message) { 
  //console.log(this.model.message);
	  var http = new XMLHttpRequest();
	  var url = AppConfig.API_ENDPOINT + "/message" + "?token="
	  + localStorage.getItem("jwtToken");
	  var params = "contents="+ message ;//+ "&token="+this.token;
	  http.open("POST", url, false);

	  //Send the proper header information along with the request
	  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	  http.send(params);

	  this.socket.emit('chat.message', 'New Message');

  }

}
