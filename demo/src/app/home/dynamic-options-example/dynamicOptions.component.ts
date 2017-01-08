import {Component, OnInit} from "@angular/core";
import {ExampleValues_Frameworks} from "../../selectize.configs";
import {REMOVE_OPTIONS_CONFIG, CURRENT_OPTIONS_CONFIG, ADD_OPTIONS_CONFIG} from "./dynamicOptions.config";

let _cloneDeep = require('lodash.clonedeep');

const _differenceWith = require('lodash.differencewith');
const _intersectionWith = require('lodash.intersectionwith');

@Component({
	selector: 'dynamic-options-example',
	templateUrl: './dynamicOptions.component.html'
})
export class DynamicOptionsComponent implements OnInit {

	currentOptions:any = _cloneDeep(ExampleValues_Frameworks);
	currentOptionsConfig = CURRENT_OPTIONS_CONFIG;
	value:string[];

	removeOptions:any = this.currentOptions;
	removeOptionsConfig = REMOVE_OPTIONS_CONFIG;
	removeOptionsValue:string[];

	addOptions:any = [];
	addOptionsConfig = ADD_OPTIONS_CONFIG;
	addOptionsValue:string[];

	constructor() {}

	ngOnInit(): void {
	}

	removeSelectedOption() {
		this.currentOptions = _differenceWith(this.currentOptions, this.removeOptionsValue, (oldValue, selectedValue) => {
			return oldValue[this.currentOptionsConfig.valueField] === selectedValue;
		});
		this.refreshRemoveAndAddOptions();
	}

	addSelectedOptions() {
		if (this.addOptionsValue && this.addOptionsValue.length > 0) {
			let optionsToAdd = _intersectionWith(this.addOptions, this.addOptionsValue, (option, value) => {
				return option[this.addOptionsConfig.valueField] === value;
			});
			if (optionsToAdd && optionsToAdd.length > 0) {
				optionsToAdd.forEach((option) => {
					this.currentOptions.push(option);
				});
			}
			this.refreshRemoveAndAddOptions();
		}
	}

	refreshRemoveAndAddOptions() {
		this.removeOptions = this.currentOptions;

		this.addOptions = _differenceWith(ExampleValues_Frameworks, this.removeOptions, (allValue, removedValue) => {
			return allValue[this.currentOptionsConfig.valueField] === removedValue[this.removeOptionsConfig.valueField];
		});
	}
}