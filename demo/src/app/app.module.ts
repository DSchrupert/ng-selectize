import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {PerformanceComponent} from "./performance/performance.component";
import {Ng2SelectizeModule} from "../../../src/ng2-selectize/ng2-selectize.module";
import {AddOptionComponent} from "./add-option/add-option.component";
import {FormExampleComponent} from "./home/form-example/formExample.component";
import {MultiSelectExampleComponent} from "./home/multi-select-example/multiSelectExample.component";
import {StateToggleExampleComponent} from "./home/state-toggle-example/stateToggleExample.component";
import {PlaceholderStateExampleComponent} from "./home/placeholder-state-example/placeholderStateExample.component";
import {PresetValueExampleComponent} from "./home/preset-value-example/presetValueExample.component";
import {TestComponent} from "./home/test-component/test.component";
import {DynamicOptionsComponent} from "./home/dynamic-options-example/dynamicOptions.component";

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		PerformanceComponent,
		AddOptionComponent,
		MultiSelectExampleComponent,
		FormExampleComponent,
		StateToggleExampleComponent,
		PlaceholderStateExampleComponent,
		PresetValueExampleComponent,
		TestComponent,
		DynamicOptionsComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		RouterModule.forRoot([
			{path: 'performance', component: PerformanceComponent},
			{path: 'wip', component: DynamicOptionsComponent},
			{path: '', component: HomeComponent}
		]),
		Ng2SelectizeModule // Import the ng2-selectize module.
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
