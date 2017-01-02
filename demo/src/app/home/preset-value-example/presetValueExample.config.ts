import {DEFAULT_DROPDOWN_CONFIG} from "../../selectize.configs";
const _assignIn = require('lodash.assignin');

export const SINGLE_SELECT_PRESET_VALUE_CONFIG = _assignIn({}, DEFAULT_DROPDOWN_CONFIG, {
	labelField: 'label',
	valueField: 'value',
	searchField: ['label', 'value']
});

export const MULTI_SELECT_PRESET_VALUE_CONFIG = _assignIn({}, DEFAULT_DROPDOWN_CONFIG, {
	labelField: 'label',
	valueField: 'value',
	searchField: ['label', 'value'],
	maxItems: 4
});