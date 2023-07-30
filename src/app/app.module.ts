
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UserAuthModule } from './user-auth/user-auth.module';
import { ReactiveFormsDemoModule } from './reactive-forms-demo/reactive-forms-demo.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserAuthModule,
    ReactiveFormsDemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
