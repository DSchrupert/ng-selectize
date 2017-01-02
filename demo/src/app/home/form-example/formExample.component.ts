import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder} from "@angular/forms";
import {FORM_GROUP_EXAMPLE, REQUIRED_DROPDOWN_CONFIG} from "./formExample.config";
import {ExampleValues_Frameworks} from "../../selectize.configs";

let _cloneDeep = require('lodash.clonedeep');

@Component({
	selector: 'form-example',
	templateUrl: './formExample.component.html'
})
export class FormExampleComponent implements OnInit {

	requiredDropdownConfig: any = REQUIRED_DROPDOWN_CONFIG;
	requiredDropdownOptions: any = _cloneDeep(ExampleValues_Frameworks);
	formGroupExample: FormGroup;

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.formGroupExample = this.formBuilder.group(FORM_GROUP_EXAMPLE);
	}
}