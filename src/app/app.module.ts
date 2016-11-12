import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {Ng2SelectizeDirective} from './ng2-selectize.directive';
import {MaterialModule, MdIconRegistry} from "@angular/material";

@NgModule({
	declarations: [AppComponent, Ng2SelectizeDirective],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		MaterialModule
	],
	providers: [MdIconRegistry],
	bootstrap: [AppComponent]
})
export class AppModule {
}
