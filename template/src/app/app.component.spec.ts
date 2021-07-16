import {TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { MyFirstPageModule } from '@pages/my-first-page/my-first-page.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent
			],
			imports: [
				BrowserModule,
				AppRoutingModule,
				MyFirstPageModule,
				RouterTestingModule
			],
			providers: []
		}).compileComponents();
	}));

	it('should create app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();

	});
});
