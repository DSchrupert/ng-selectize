import {Input, OnInit, OnChanges, SimpleChanges, DoCheck, forwardRef, Component, ViewChild} from "@angular/core";
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from "@angular/forms";
import {noop} from "rxjs/util/noop";

const cloneDeep = require('lodash.clonedeep');
const isEqual = require('lodash.isequal');
const _find = require('lodash.find');
const _differenceWith = require('lodash.differencewith');

let $ = require('jquery');
require('../vendors/selectize/selectize.standalone');

export const SELECTIZE_VALUE_ACCESSOR: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => Ng2SelectizeComponent),
	multi: true
};

@Component({
	selector: 'ng2-selectize',
	template: `<select #selectizeInput></select>`,
	providers: [SELECTIZE_VALUE_ACCESSOR]
})
export class Ng2SelectizeComponent implements OnInit, OnChanges, DoCheck, ControlValueAccessor {
	@Input('config') config: any;
	// @Input('config') config: Selectize.IOptions<any, any>;
	@Input('options') options: any[];
	@Input('optionGroups') optionGroups: any[];
	@Input('placeholder') placeholder: string;
	@Input('hasOptionsPlaceholder') hasOptionsPlaceholder: string;
	@Input('noOptionsPlaceholder') noOptionsPlaceholder: string;
	@Input('enabled') enabled: boolean;
	@Input('ngModel') _value: string[];

	@ViewChild('selectizeInput') selectizeInput: any;

	private _selectize: any;
	private _oldOptions: any[];

	private _oldOptionGroups: any[];
	// Control value accessors.
	private onTouchedCallback: () => void = noop;
	private onChangeCallback: (_: any) => void = noop;

	constructor() {}

	ngOnInit(): void {
		this._selectize = $(this.selectizeInput.nativeElement).selectize(this.config)[0].selectize;
		this._selectize.on('change', this.onSelectizeValueChange.bind(this));
		this._selectize.on('option_add', this.onSelectizeOptionAdd.bind(this));
		this._selectize.on('option_remove', this.onSelectizeOptionRemove.bind(this));

		this.onSelectizeOptionsChange();
		this.onSelectizeOptionGroupChange();
		if (this.placeholder && this.placeholder.length > 0) {
			this.updatePlaceholder();
		}
		this._oldOptions = cloneDeep(this.options);
		this._oldOptionGroups = cloneDeep(this.optionGroups);
	}

	/**
	 * Change detection for primitive types.
	 */
	ngOnChanges(changes: SimpleChanges): void {
		if (this._selectize != null) {
			if (changes.hasOwnProperty('placeholder') || changes.hasOwnProperty('hasOptionsPlaceholder') || changes.hasOwnProperty('noOptionsPlaceholder')) {
				this.updatePlaceholder();
			}
			if (changes.hasOwnProperty('enabled')) {
				this.onEnabledStatusChange();
			}
		}
	}

	/**
	 * Implementing deep check for option comparison
	 */
	ngDoCheck(): void {
		if (!isEqual(this._oldOptions, this.options)) {
			this.onSelectizeOptionsChange();
			this._oldOptions = cloneDeep(this.options);
		}
		if (!isEqual(this._oldOptionGroups, this.optionGroups)) {
			this.onSelectizeOptionGroupChange();
			this._oldOptionGroups = cloneDeep(this.optionGroups);
		}
	}

	/**
	 * Refresh selected values when options change.
	 */
	onSelectizeOptionAdd(optionValue:string): void {
		if (this.value) {
			const items = typeof this.value === 'string' ? [this.value] : this.value;
			if (_find(items, (value:any) => {
					return value === optionValue
				})) {
				this.selectize.addItem(optionValue, true);
			}
		}
	}

	onSelectizeOptionRemove(optionValue:any): void {
		if (this.value) {
			const items = typeof this.value === 'string' ? [this.value] : this.value;
			if (_find(items, (value:any) => {
					return value === optionValue
				})) {
				this.selectize.removeItem(optionValue, true);
			}
		}
	}

	/**
	 * Update the current placeholder based on the given input parameter.
	 */
	updatePlaceholder(): void {
		this._selectize.settings.placeholder = this.getPlaceholder();
		this._selectize.updatePlaceholder();
	}

	/**
	 * Called when a change is detected in the 'enabled' input field.
	 * Sets the selectize state based on the new value.
	 */
	onEnabledStatusChange(): void {
		this.enabled ? this.selectize.enable() : this.selectize.disable();
	}

	/**
	 * Triggered when a change is detected with the given set of options.
	 */
	onSelectizeOptionsChange(): void {
		const optionsRemoved = _differenceWith(this._oldOptions, this.options, (oldValue:any, newValue:any) => {
			return oldValue[this.selectize.settings.valueField] === newValue[this.selectize.settings.valueField];
		});

		const newOptionsAdded = _differenceWith(this.options, this._oldOptions, (oldValue:any, newValue:any) => {
			return oldValue[this.selectize.settings.valueField] === newValue[this.selectize.settings.valueField];
		});

		if (optionsRemoved && optionsRemoved.length > 0) {
			optionsRemoved.forEach((option:any) => {
				this.selectize.removeOption(option[this.selectize.settings.valueField]);
			});
		}

		if (newOptionsAdded && newOptionsAdded.length > 0) {
			newOptionsAdded.forEach((option:any) => {
				this.selectize.addOption(option);
			});
		}

		setTimeout(() => {
			this.value = this.selectize.getValue();
		});
		this.updatePlaceholder();
	}

	/**
	 * Triggered when a change is detected with the given set of option groups.
	 */
	onSelectizeOptionGroupChange(): void {
		if (this.optionGroups != null && this.optionGroups.length > 0) {
			this.optionGroups.forEach((optionGroup) => {
				this._selectize.addOptionGroup(optionGroup.id, optionGroup);
			});
		}
	}

	/**
	 * Dispatches change event when a value change is detected.
	 * @param $event
	 */
	onSelectizeValueChange($event:any): void {
		this.value = $event;
	}

	/**
	 * Returns the applicable placeholder.
	 */
	getPlaceholder(): string {
		let newPlaceholder: string;
		if (this.options != null && this.options.length > 0 && this.hasOptionsPlaceholder != null && this.hasOptionsPlaceholder.length > 0) {
			newPlaceholder = this.hasOptionsPlaceholder;
		} else if ((this.options == null || this.options.length == 0) && (this.noOptionsPlaceholder != null && this.noOptionsPlaceholder.length > 0)) { // no options
			newPlaceholder = this.noOptionsPlaceholder
		} else {
			newPlaceholder = this.placeholder;
		}
		return newPlaceholder;
	}

	/**
	 * Implementation from ControlValueAccessor
	 * @param obj
	 */
	writeValue(obj: any): void {
		if (obj && obj !== this._value) {
			this._value = obj;
		}
	}

	/**
	 * Implementation from ControlValueAccessor, callback for (ngModelChange)
	 * @param fn
	 */
	registerOnChange(fn: any): void {
		this.onChangeCallback = fn;
	}

	/**
	 * Implementation from ControlValueAccessor
	 * @param fn
	 */
	registerOnTouched(fn: any): void {
		this.onTouchedCallback = fn;
	}

	/**
	 * Expose selectize instance variable.
	 * @returns {any}
	 */
	get selectize(): any {
		return this._selectize;
	}

	get value(): string[] {
		return this._value;
	}

	set value(value: string[]) {
		if (value !== this._value) {
			this._value = value;
			this.onChangeCallback(value);
		}
	}
}
