/// <reference path="../../../typings/globals/jquery/index.d.ts" />
/// <reference path="../../../typings/globals/selectize/index.d.ts" />

import {Component} from "@angular/core";
import {ExampleSelectizeOption, ExampleGroupableOption, ExampleGroup} from "../app.types";

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent {
	multiSelectDynamicAddConfig: Selectize.IOptions<any, any> = <Selectize.IOptions<any, any>>{
		persist: true,
		labelField: 'label',
		valueField: 'value',
		plugins: ['remove_button']
	};

	multiSelectDynamicAddPlaceholder: string = "Placeholder...";

	singleSelectDynamicAddConfig: Selectize.IOptions<any, any> = <Selectize.IOptions<any, any>>{
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


	// Option groups example
	optionGroupExampleConfig: Selectize.IOptions<any, any> = <Selectize.IOptions<any, any>>{
		optgroupField: 'group',
		labelField: 'label',
		valueField: 'value',
		render: {
			optgroup_header: function (data, escape) {
				return '<div class="optgroup-header">' + escape(data.data) + '</div>';
			}
		}
	};

	optionGroupExampleOptions: ExampleGroupableOption[] = [<ExampleGroupableOption>{
		label: 'Red',
		value: 'red',
		group: 'colors'
	},<ExampleGroupableOption>{
		label: 'Blue',
		value: 'blue',
		group: 'colors'
	},<ExampleGroupableOption>{
		label: 'Green',
		value: 'green',
		group: 'colors'
	},<ExampleGroupableOption>{
		label: 'Dog',
		value: 'dog',
		group: 'animals'
	}];

	optionGroupExampleGroups: ExampleGroup[] = [
		<ExampleGroup> {
			id: 'colors',
			data: 'The colors'
		}, <ExampleGroup> {
			id: 'animals',
			data: 'The Animals'
		}
	];

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
