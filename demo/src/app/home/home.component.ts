/// <reference path="../../../typings/globals/selectize/index.d.ts" />

import {Component} from '@angular/core';
import {ExampleSelectizeOption, ExampleGroupableOption, ExampleGroup} from "../app.types";
import {SingleSelectConfig, ExampleValues_Frameworks,
	ExampleValues_Colors, ExampleGroups_Colors, Example_Placeholder_HasOptions,
	Example_Placeholder_NoOptions
} from "../selectize.configs";

const _cloneDeep = require('lodash.clonedeep');

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent {
	singleSelectDynamicAddConfig: Selectize.IOptions<any, any> = SingleSelectConfig;

	exampleStaticOptions: ExampleSelectizeOption[] = _cloneDeep(ExampleValues_Frameworks);



	singleSelectDynamicAddOptions: ExampleSelectizeOption[] = _cloneDeep(ExampleValues_Frameworks);

	hasOrDoesntHaveOptions: ExampleSelectizeOption[] = [];
	hasOptionsPlaceholderText: string = _cloneDeep(Example_Placeholder_HasOptions);
	noOptionsPlaceholderText: string = _cloneDeep(Example_Placeholder_NoOptions);

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

	optionGroupExampleOptions: ExampleGroupableOption[] = ExampleValues_Colors;

	optionGroupExampleGroups: ExampleGroup[] = ExampleGroups_Colors;


	printValue(value) {
		console.log("Selectize value changed: ", value)
	}

	addSingleSelectDynamicAddOption() {
		this.singleSelectDynamicAddOptions.push(<ExampleSelectizeOption>{
			label: Math.random().toString(),
			value: Math.random().toString(),
			code: Math.random().toString()
		});
	}

	clearHasOrNotExample() {
		this.hasOrDoesntHaveOptions = [];
	}
	addOptionsToHaveOrNotExample() {
		this.hasOrDoesntHaveOptions.push(<ExampleSelectizeOption>{
			label: Math.random().toString(),
			value: Math.random().toString(),
			code: Math.random().toString()
		});
	}

	toggleEnabledState() {
		this.selectizeIsEnabled = !this.selectizeIsEnabled;
	}
}
