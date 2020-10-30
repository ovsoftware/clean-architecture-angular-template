import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MyFirstPageModule } from '@pages/my-first-page/my-first-page.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyFirstPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
