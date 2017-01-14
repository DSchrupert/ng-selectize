import {Component, OnInit, ChangeDetectorRef} from "@angular/core";
import {MULTI_SELECT_CONFIG} from "./multiSelectExample.config";
import {ExampleSelectizeOption} from "../../app.types";
import {ExampleValues_Frameworks} from "../../selectize.configs";

const _cloneDeep = require('lodash.clonedeep');

@Component({
	selector: 'multi-select-example',
	templateUrl: './multiSelectExample.component.html'
})
export class MultiSelectExampleComponent implements OnInit {

	options: ExampleSelectizeOption[] = _cloneDeep(ExampleValues_Frameworks);
	config: Selectize.IOptions<any, any> = MULTI_SELECT_CONFIG;
	placeholder: string = 'Placeholder...';
	value:string[];

	constructor(private cdr:ChangeDetectorRef) {}

	ngOnInit(): void {}

	addRandomOption() {
		this.options.push(<ExampleSelectizeOption>{
			label: Math.random().toString(),
			value: Math.random().toString(),
			code: Math.random().toString()
		});
		this.cdr.detectChanges();
	}

	onValueChange($event:any) {
		console.log("Multi select option changed: ", $event);
	}
}