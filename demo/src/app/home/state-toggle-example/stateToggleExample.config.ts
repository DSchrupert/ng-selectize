import {DEFAULT_DROPDOWN_CONFIG} from "../../selectize.configs";
const _assignIn = require('lodash.assignin');

export const STATE_TOGGLE_EXAMPLE_CONFIG = _assignIn({}, DEFAULT_DROPDOWN_CONFIG, {
	labelField: 'label',
	valueField: 'value'
});