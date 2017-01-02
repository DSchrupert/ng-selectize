import {Component, OnInit} from '@angular/core';
import {STATE_TOGGLE_EXAMPLE_CONFIG} from "./stateToggleExample.config";
import {ExampleValues_Frameworks} from "../../selectize.configs";

const _cloneDeep = require('lodash.clonedeep');

@Component({
	selector: 'state-toggle-example',
	templateUrl: 'stateToggleExample.component.html'
})
export class StateToggleExampleComponent implements OnInit {

	isEnabled:boolean = true;
	config:any = STATE_TOGGLE_EXAMPLE_CONFIG;
	options: any = _cloneDeep(ExampleValues_Frameworks);
	value: string;

	constructor() {}

	ngOnInit() {}

	toggleEnabledState() {
		this.isEnabled = !this.isEnabled;
	}
}