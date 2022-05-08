import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HighlightDirective } from './highlight.directive';
import { Assignment3Component } from './assignment3/assignment3.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    LoginPageComponent,
    HighlightDirective,
    Assignment3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Root App Component (1 tipical for the app)
})
export class AppModule { }
