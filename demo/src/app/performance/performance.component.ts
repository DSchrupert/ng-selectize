import {Component, OnInit, OnChanges, SimpleChanges} from "@angular/core";
import {ExampleSelectizeOption} from "../app.types";
import {PERFORMANCE_CONFIG} from "./performance.config";

@Component({
	selector: 'performance',
	templateUrl: './performance.component.html'
})
export class PerformanceComponent implements OnInit {

	config = PERFORMANCE_CONFIG;
	optionsLength:number = 100;
	options: ExampleSelectizeOption[];

	ngOnInit(): void {
		this.options = this.generateRandomOptions();
	}

	onOptionsCountChange(newValue) {
		this.options = this.generateRandomOptions();
	}

	generateRandomOptions(): ExampleSelectizeOption[] {
		const list: ExampleSelectizeOption[] = [];
		for (let i = 0; i < this.optionsLength; i++) {

			const randomNumber = Math.floor((Math.random() * this.optionsLength) + 1);
			const option: ExampleSelectizeOption = <ExampleSelectizeOption>{
				label: randomNumber.toString(),
				value: randomNumber.toString(),
				code: randomNumber.toString()
			};
			list.push(option);
		}

		return list;
	}

}