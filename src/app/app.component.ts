import {Component} from '@angular/core';
import {SelectizeOption} from "./ng2-selectize.types";

@Component({
	selector: '[app-root]',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Angular 2 Selectize Example';

	selectizeConfig:Selectize.IOptions<any, any> = {
		persist: true,
		labelField: 'label',
		valueField: 'value'
	};

	selectizeOptions:SelectizeOption[] = [<SelectizeOption>{
		label: 'init',
		value: 'value'
	}];

	onSelectizeValueChange(something) {
		console.log("Selectize value changed: ", something)
	}

	addOption() {
		this.selectizeOptions.push(<SelectizeOption>{
			label: Math.random().toString(),
			value: Math.random()
		});
	}
}
