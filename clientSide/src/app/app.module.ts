import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing }        from './app.routings';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MsgComponent } from './msg/msg.component';
import { MsgService } from './msg/msg.service';
import { JwtLoginService } from './jwt-login/jwt-login.service';
import { Msg } from './msg/msg';
import { JwtLogin } from './jwt-login/JwtLogin';
import { JwtLoginComponent } from './jwt-login/jwt-login.component';
import { JwtLogoutComponent } from './jwt-login/jwt-logout.component';
import { AuthGuard } from './auth-guard/auth-guard';
import {MomentModule} from 'angular2-moment/moment.module';

@NgModule({
  declarations: [
    AppComponent,
    MsgComponent,
    JwtLoginComponent,
    JwtLogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModule,
    MomentModule
  ],
  providers: [ Msg, MsgService, JwtLoginService, JwtLogin, AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
