import {ExampleSelectizeOption, ExampleGroupableOption, ExampleGroup} from "./app.types";
/**
 * Created by nicho on 12/17/2016.
 */

let _assignIn = require('lodash.assignin');

export const Example_Placeholder:string = 'Placeholder...';
export const Example_Placeholder_HasOptions:string = 'Click to select options';
export const Example_Placeholder_NoOptions:string = 'No options available...';

export const DEFAULT_DROPDOWN_CONFIG:any = {
	highlight: false,
	create:false,
	persist:true,
	plugins: ['dropdown_direction', 'remove_button'],
	dropdownDirection: 'down'
};


export const SingleSelectConfig: Selectize.IOptions<any, any> = _assignIn({}, DEFAULT_DROPDOWN_CONFIG, {
	labelField: 'label',
	valueField: 'value',
	plugins: ['remove_button'],
	maxItems: 1
});


export const ExampleValues_Frameworks:ExampleSelectizeOption[] = <ExampleSelectizeOption[]>[
	{
		label: 'Angular 2',
		value: 'angular2',
		code: 'NG2'
	}, {
		label: 'ReactJS',
		value: 'reactjs',
		code: 'RJS'
	}, {
		label: 'Ember JS',
		value: 'emberjs',
		code: 'emjs'
	}, {
		label: 'Ruby on Rails',
		value: 'ruby_on_rails',
		code: 'ROR'
	}
];

export const ExampleValues_Lanugages:ExampleSelectizeOption[] = <ExampleSelectizeOption[]> [
	{
		label: 'JavaScript',
		value: 'javascript',
		code: 'js'
	}, {
		label: 'C++',
		value: 'c++',
		code: 'cpp'
	}, {
		label: 'Java',
		value: 'java',
		code: 'j'
	}, {
		label: 'Cascading Style Sheets',
		value: 'css',
		code: 'css'
	}, {
		label: 'Oracle SQL',
		value: 'oracle_sql',
		code: 'osql'
	}
];

export const ExampleValues_Colors:ExampleGroupableOption[] = <ExampleGroupableOption[]> [
	{
		label: 'Red',
		value: 'red',
		group: 'colors'
	}, {
		label: 'Blue',
		value: 'blue',
		group: 'colors'
	}, {
		label: 'Green',
		value: 'green',
		group: 'colors'
	}, {
		label: 'Dog',
		value: 'dog',
		group: 'animals'
	}
];

export const ExampleGroups_Colors:ExampleGroup[] = <ExampleGroup[]> [
	{
		id: 'colors',
		data: 'The colors'
	}, {
		id: 'animals',
		data: 'The Animals'
	}
];
