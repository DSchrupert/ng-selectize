import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {Ng2SelectizeDirective} from './ng2-selectize.directive';
import {MaterialModule, MdIconRegistry} from "@angular/material";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {PerformanceComponent} from "./performance/performance.component";

@NgModule({
	declarations: [AppComponent, HomeComponent, PerformanceComponent, Ng2SelectizeDirective],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		MaterialModule,
		RouterModule.forRoot([
			{path: 'performance', component: PerformanceComponent},
			{path: '', component: HomeComponent}
		])
	],
	providers: [MdIconRegistry],
	bootstrap: [AppComponent]
})
export class AppModule {
}
