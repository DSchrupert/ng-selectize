import {Component, OnInit} from "@angular/core";

@Component({
	selector: 'test-component',
	templateUrl: 'test.component.html'
})
export class TestComponent implements OnInit {
	dataTypeList = [];
	dataTypeValue: string[] = [];

	arrayConfig = {
		create: false,
		valueField: "name",
		labelField: "name",
		delimiter: ",",
		searchField: "name",
		maxItems: 1,
		onInitialize: function () {},

	//	optional
		plugins: ['dropdown_direction'],
		dropdownDirection: 'down'
	};

	constructor() {
	}

	ngOnInit() {
		this.dataTypeList = [{"name": "John"},
			{"name": "Sam"},
			{"name": "Master "},
			{"name": "Mathew"}];

		this.dataTypeValue = ["Sam"];
	}

	onDataTypeChange($event) {
		console.log('value change: ', $event);
	}

}