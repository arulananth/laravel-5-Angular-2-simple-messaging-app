import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MomentModule} from 'angular2-moment/moment.module';

import { MsgService } from './msg.service';
import { Msg } from './msg';
import {AppConfig} from '../app.config';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.css']
})
export class MsgComponent implements OnInit {
  
  msgs: Object;
  model: Msg;
  
  constructor(
        private router: Router,
        private msgService: MsgService) { }

  onSubmit() {

    this.msgService.onSubmit(this.model.message);
    this.model.message = '';
    this.msgs = this.msgService.getMsgs();
  }

  ngOnInit() {
    this.model= new Msg();
    this.msgs = this.msgService.getMsgs();

    this.msgService.socket.on('chat.message', function(message) {
      // just simple refresh, to keep secure
      this.msgs = this.msgService.getMsgs();
      
    }.bind(this));
  }

}
