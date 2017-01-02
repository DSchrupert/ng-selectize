
import {DEFAULT_DROPDOWN_CONFIG} from "../selectize.configs";
const _assignIn = require('lodash.assignin');

export const PERFORMANCE_CONFIG: any = _assignIn({}, DEFAULT_DROPDOWN_CONFIG, {
	labelField: 'label',
	valueField: 'value'
});