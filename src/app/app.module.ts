import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuardService } from './data-access-layer/auth-guard.service';
import { AdalService } from './data-access-layer/adal.service';
import { RepositoryService } from './data-access-layer/repository.service';
import { HttpClientModule } from '@angular/common/http';
import { FrameRedirectComponent } from './frame-redirect/frame-redirect.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessagesComponent,
    FrameRedirectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AdalService, 
    AuthGuardService,
    RepositoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
