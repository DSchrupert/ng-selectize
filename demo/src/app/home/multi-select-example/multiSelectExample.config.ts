import {DEFAULT_DROPDOWN_CONFIG} from "../../selectize.configs";

const _assignIn = require('lodash.assignin');

export const MULTI_SELECT_CONFIG:Selectize.IOptions<any, any> = _assignIn({}, DEFAULT_DROPDOWN_CONFIG, {
	labelField: 'label',
	valueField: 'value',
	maxItems: 5
});
