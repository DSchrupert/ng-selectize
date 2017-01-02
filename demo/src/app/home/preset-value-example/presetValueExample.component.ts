import {Component, OnInit} from "@angular/core";
import {SINGLE_SELECT_PRESET_VALUE_CONFIG, MULTI_SELECT_PRESET_VALUE_CONFIG} from "./presetValueExample.config";
import {ExampleValues_Frameworks} from "../../selectize.configs";

const _cloneDeep = require('lodash.clonedeep');

@Component({
    selector: 'preset-value-example',
    templateUrl: 'presetValueExample.component.html'
})
export class PresetValueExampleComponent implements OnInit {

	singleSelectConfig:any = SINGLE_SELECT_PRESET_VALUE_CONFIG;
	singleSelectOptions:any = _cloneDeep(ExampleValues_Frameworks);
	singleSelectValue:string[] = ['reactjs']; // Defaulted value.

	multiSelectConfig:any = MULTI_SELECT_PRESET_VALUE_CONFIG;
	multiSelectOptions:any = _cloneDeep(ExampleValues_Frameworks);
	multiSelectValue:string[] = ['reactjs', 'angular2'];

	placeholder:string = 'Click to select...';

    constructor() { }

    ngOnInit() { }

	onValueChange($event) {
    	console.log('value change: ', $event);
	}

}