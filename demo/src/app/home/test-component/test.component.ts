import {Component, OnInit} from "@angular/core";

@Component({
	selector: 'test-component',
	templateUrl: 'test.component.html'
})
export class TestComponent implements OnInit {
	dataTypeList:any[] = [];
	dataTypeValue: string[] = [];

	arrayConfig = {
		create: false,
		valueField: "id",
		labelField: "name",
		delimiter: ",",
		searchField: ["name"],
		maxItems: 1,
		onInitialize: function () {},

	//	optional
		plugins: ['dropdown_direction'],
		dropdownDirection: 'down'
	};

	constructor() {
	}

	ngOnInit() {
		this.dataTypeList = [
			{
				"id": "1",
				"name": "John"
			}, {
				"id": "2",
				"name": "Sam"
			}, {
				"id": "3",
				"name": "Thomas"
			},{
				"id": "4",
				"name": "Mathew"
		}];

		this.dataTypeValue = this.dataTypeList[0].id;
	}

	onDataTypeChange($event:any) {
		console.log('value change: ', $event);
	}

}