import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuardService } from './data-access-layer/auth-guard.service';
import { FrameRedirectComponent } from './frame-redirect/frame-redirect.component';

const routes: Routes = [
  { path: '', component: MessagesComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'frame-redirect', component: FrameRedirectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
