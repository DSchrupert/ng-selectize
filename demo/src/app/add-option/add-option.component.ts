import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {ExampleSelectizeOption} from "../app.types";

@Component({
    selector: 'add-option',
    templateUrl: 'add-option.component.html'
})
export class AddOptionComponent implements OnInit {

	@Output() addedOption:EventEmitter<ExampleSelectizeOption> = new EventEmitter<ExampleSelectizeOption>(false);
	@Input() fieldId:string;


	constructor() { }

    ngOnInit() { }

	displayOptionPopup() {
		// JQuery('#' + this.fieldId + '_popup').popup({
		// 	boundary: '#' + this.fieldId + '_boundary'
		// })
	}


    addOption() {

	}

}