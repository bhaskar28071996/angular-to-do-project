import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './auth-pages/login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskInfoComponent } from './post-login/task-info/task-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    TaskInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
