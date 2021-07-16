import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyFirstPageModule } from '@pages/my-first-page/my-first-page.module';
import { AppRoutingModule } from './app-routing.module';
import { DataGateway } from './core/api/data-gateway.interface';
import { HttpBackendService } from './data/services/http-backend.service';
import { CommonModule } from '@angular/common';

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
		{ provide: DataGateway, useExisting: HttpBackendService }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
