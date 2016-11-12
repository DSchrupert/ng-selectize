import {Component, OnInit, OnChanges, SimpleChanges} from "@angular/core";
import {ExampleSelectizeOption} from "../ng2-selectize.types";

@Component({
	selector: 'performance',
	templateUrl: './performance.component.html'
})
export class PerformanceComponent implements OnInit {

	performanceTestConfig: Selectize.IOptions<any, any> = {
		persist: true,
		labelField: 'label',
		valueField: 'value',
		plugins: ['remove_button']
	};
	optionsLength:number = 100;
	options: ExampleSelectizeOption[];

	ngOnInit(): void {
		this.options = this.generateRandomOptions();
	}

	onOptionsCountChange(newValue) {
		this.options = this.generateRandomOptions();
	}

	printValue($event) {
		console.log("Selectize Value: ", $event);
	}

	generateRandomOptions(): ExampleSelectizeOption[] {
		var list: ExampleSelectizeOption[] = [];
		for (var i = 0; i < this.optionsLength; i++) {

			var randomNumber = Math.floor((Math.random() * this.optionsLength) + 1);
			var option: ExampleSelectizeOption = <ExampleSelectizeOption>{
				label: randomNumber.toString(),
				value: randomNumber
			};
			list.push(option);
		}

		return list;
	}

}