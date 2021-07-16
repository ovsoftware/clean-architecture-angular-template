import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyFirstPageModule } from '@pages/my-first-page/my-first-page.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpBackendService } from './data/services/http-backend.service';
import { CommonModule } from '@angular/common';
import { DATA_GATEWAY } from './core/api/data-gateway.interface';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MyFirstPageModule,
		CommonModule
	],
	providers: [
		{ provide: DATA_GATEWAY, useExisting: HttpBackendService }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
