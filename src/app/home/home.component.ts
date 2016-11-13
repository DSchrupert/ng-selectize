import {Component} from "@angular/core";
import {ExampleSelectizeOption} from "../ng2-selectize.types";

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent {
	multiSelectDynamicAddConfig: Selectize.IOptions<any, any> = {
		persist: true,
		labelField: 'label',
		valueField: 'value',
		plugins: ['remove_button']
	};

	multiSelectDynamicAddPlaceholder: string = "Placeholder...";

	singleSelectDynamicAddConfig: Selectize.IOptions<any, any> = {
		persist: true,
		labelField: 'label',
		valueField: 'value',
		maxItems: 1
	};

	exampleStaticOptions: ExampleSelectizeOption[] = [<ExampleSelectizeOption>{
		label: 'init',
		value: 'initValue'
	}];

	multiSelectDynamicAddOptions: ExampleSelectizeOption[] = [<ExampleSelectizeOption>{
		label: 'init',
		value: 'initValue'
	}];

	singleSelectDynamicAddOptions: ExampleSelectizeOption[] = [<ExampleSelectizeOption>{
		label: 'init',
		value: 'initValue'
	}];

	hasOrDoesntHaveOptions: ExampleSelectizeOption[] = [];
	hasOptionsPlaceholderText: string = 'Click to select options';
	noOptionsPlaceholderText: string =  'No options available...';

	selectizeIsEnabled:boolean = true;

	printValue(value) {
		console.log("Selectize value changed: ", value)
	}

	addMultiSelectDynamicAddOption() {
		this.multiSelectDynamicAddOptions.push(<ExampleSelectizeOption>{
			label: Math.random().toString(),
			value: Math.random()
		});
	}

	addSingleSelectDynamicAddOption() {
		this.singleSelectDynamicAddOptions.push(<ExampleSelectizeOption>{
			label: Math.random().toString(),
			value: Math.random()
		});
	}

	clearHasOrNotExample() {
		this.hasOrDoesntHaveOptions = [];
	}
	addOptionsToHaveOrNotExample() {
		this.hasOrDoesntHaveOptions.push(<ExampleSelectizeOption>{
			label: Math.random().toString(),
			value: Math.random()
		});
	}

	toggleEnabledState() {
		this.selectizeIsEnabled = !this.selectizeIsEnabled;
	}
}