import { Routes, RouterModule } from '@angular/router';

import { MsgComponent } from './msg/msg.component';
import { JwtLoginComponent } from './jwt-login/jwt-login.component';
import { JwtLogoutComponent } from './jwt-login/jwt-logout.component';
import { AuthGuard } from './auth-guard/auth-guard';

const appRoutes: Routes = [
    { path: 'msg', component: MsgComponent , canActivate: [AuthGuard]},
    { path: 'logout', component: JwtLogoutComponent , canActivate: [AuthGuard]},
    { path: 'login', component: JwtLoginComponent },

    // otherwise redirect to login
    { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);