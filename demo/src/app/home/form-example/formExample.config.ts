import {Validators} from "@angular/forms";
import {DEFAULT_DROPDOWN_CONFIG} from "../../selectize.configs";

let _assignIn = require('lodash.assignin');

export const FORM_GROUP_EXAMPLE = {
	requiredDropdownExample: ['', Validators.required],
	firstName: ['', Validators.required],
	lastName: ['', Validators.required]
};

export const REQUIRED_DROPDOWN_CONFIG = _assignIn({}, DEFAULT_DROPDOWN_CONFIG, {
	labelField: 'label',
	valueField: 'value'
});