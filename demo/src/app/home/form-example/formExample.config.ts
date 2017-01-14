import {Validators, AbstractControl, ValidatorFn} from "@angular/forms";
import {DEFAULT_DROPDOWN_CONFIG} from "../../selectize.configs";

let _assignIn = require('lodash.assignin');

export const startWithR = (control: AbstractControl):any => {
	return control.value && control.value.toLowerCase().startsWith('r') ? null : {doesntStartWithR: true};
};

export const FORM_GROUP_EXAMPLE = {
	requiredDropdownExample: ['', Validators.compose([Validators.required, startWithR])],
	firstName: ['', Validators.required],
	lastName: ['', Validators.required]
};

export const REQUIRED_DROPDOWN_CONFIG = _assignIn({}, DEFAULT_DROPDOWN_CONFIG, {
	labelField: 'label',
	valueField: 'value'
});