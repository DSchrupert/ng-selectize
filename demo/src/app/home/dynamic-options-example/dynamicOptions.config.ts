import {DEFAULT_DROPDOWN_CONFIG} from "../../selectize.configs";

let _assignIn = require('lodash.assignin');

export const CURRENT_OPTIONS_CONFIG = _assignIn({}, DEFAULT_DROPDOWN_CONFIG, {
	labelField: 'label',
	valueField: 'value',
	maxItems: 10
});

export const REMOVE_OPTIONS_CONFIG = _assignIn({}, DEFAULT_DROPDOWN_CONFIG, {
	labelField: 'label',
	valueField: 'value',
	maxItems: 10
});

export const ADD_OPTIONS_CONFIG = _assignIn({}, DEFAULT_DROPDOWN_CONFIG, {
	labelField: 'label',
	valueField: 'value',
	maxItems: 10
});