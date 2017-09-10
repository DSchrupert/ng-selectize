import {
	Input,
	OnInit,
	OnChanges,
	SimpleChanges,
	DoCheck,
	forwardRef,
	Component,
	ViewChild,
	Output,
	EventEmitter, IterableDiffers, IterableDiffer, IterableChangeRecord, IterableChanges
} from '@angular/core';
import {
	NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl
} from '@angular/forms';

declare const $: any;

import cloneDeep from 'lodash.clonedeep';

export const SELECTIZE_VALUE_ACCESSOR: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => NgSelectizeComponent),
	multi: true
};

@Component({
	selector: 'ng-selectize',
	template: `<select #selectizeInput></select>`,
	providers: [SELECTIZE_VALUE_ACCESSOR]
})
export class NgSelectizeComponent implements OnInit, OnChanges, DoCheck, ControlValueAccessor {

	@Input() config: any;
	private _options: any[];
	private _options_differ: IterableDiffer<any>;
	private _optgroups: any[];
	private _optgroups_differ: IterableDiffer<any>;

	@Input() placeholder: string;
	@Input() hasOptionsPlaceholder: string;
	@Input() noOptionsPlaceholder: string;
	@Input() enabled = true;
	@Input() value: string[];
	@Input() formControl: FormControl;
	@Input() errorClass: string;

	@Output() onBlur: EventEmitter<void> = new EventEmitter<void>(false);

	@ViewChild('selectizeInput') selectizeInput: any;

	private selectize: any;

	// Control value accessors.
	private onTouchedCallback: () => {};
	private onChangeCallback: (_: any) => {};

	constructor(private _differs: IterableDiffers) {
	}

	ngOnInit(): void {
		this.reset();
	}

	reset() {
		this.selectize = $(this.selectizeInput.nativeElement).selectize(this.config)[0].selectize;
		this.selectize.on('change', this.onSelectizeValueChange.bind(this));
		this.selectize.on('blur', this.onBlurEvent.bind(this));

		this.updatePlaceholder();
		this.onEnabledStatusChange();
	}

	/**
	 * Change detection for primitive types.
	 */
	ngOnChanges(changes: SimpleChanges): void {
		if (this.selectize) {
			if (changes.hasOwnProperty('placeholder') || changes.hasOwnProperty('hasOptionsPlaceholder')
				|| changes.hasOwnProperty('noOptionsPlaceholder')) {
				this.updatePlaceholder();
			}
			if (changes.hasOwnProperty('enabled')) {
				this.onEnabledStatusChange();
			}
		}
	}

	/**
	 * Implementing deep check for option comparison
	 *
	 * FIXME -> Implement deep check to only compare against label and value fields.
	 */
	ngDoCheck(): void {
		if (this._options_differ) {
			const changes = this._options_differ.diff(this._options);
			if (changes) {
				this._applyOptionsChanges(changes);
			}
		}
		if (this._optgroups_differ) {
			const changes = this._optgroups_differ.diff(this._optgroups);
			if (changes) {
				this._applyOptionGroupChanges(changes);
			}
		}
	}

	private _applyOptionsChanges(changes: IterableChanges<any>): void {
		changes.forEachAddedItem((record: IterableChangeRecord<any>) => {
			this.onSelectizeOptionAdd(record.item);
		});
		changes.forEachRemovedItem((record: IterableChangeRecord<any>) => {
			this.onSelectizeOptionRemove(record.item);
		});
		this.updatePlaceholder();
		this.evalHasError();
	}

	private _applyOptionGroupChanges(changes: any): void {
		changes.forEachAddedItem((record: IterableChangeRecord<any>) => {
			this.onSelectizeOptGroupAdd(record.item);
		});
		changes.forEachRemovedItem((record: IterableChangeRecord<any>) => {
			this.onSelectizeOptGroupRemove(record.item);
		});
		this.updatePlaceholder();
		this.evalHasError();
	}

	onBlurEvent() {
		if (this.formControl) {
			this.formControl.markAsTouched();
		}
		this.onBlur.emit();
		this.evalHasError();
	}

	onSelectizeOptGroupAdd(optgroup: any): void {
		this.selectize.addOptionGroup(optgroup[this.getOptgroupField()], optgroup);
	}

	onSelectizeOptGroupRemove(optgroup: any): void {
		this.selectize.removeOptionGroup(optgroup[this.getOptgroupField()]);
	}

	/**
	 * Refresh selected values when options change.
	 */
	onSelectizeOptionAdd(option: any): void {
		this.selectize.addOption(cloneDeep(option));
		const valueField = this.getValueField();
		if (this.value) {
			const items = typeof this.value === 'string' ? [this.value] : this.value;
			if (items.find(value => value === option[valueField])) {
				this.selectize.addItem(option[valueField], true);
			}
		}
	}

	onSelectizeOptionRemove(option: any): void {
		this.selectize.removeOption(option[this.getValueField()]);
	}

	evalHasError() {
		const parent = $(this.selectize.$control).parent();
		if (this.formControl) {
			if (this.formControl.touched && this.formControl.invalid) {
				parent.addClass(this.errorClass || 'has-error');
			} else if (parent.hasClass('has-error')) {
				parent.removeClass(this.errorClass || 'has-error');
			}
		}
	}

	/**
	 * Update the current placeholder based on the given input parameter.
	 */
	updatePlaceholder(): void {
		if (this.selectize.items.length === 0 && this.selectize.settings.placeholder !== this.getPlaceholder()) {
			this.selectize.settings.placeholder = this.getPlaceholder();
			this.selectize.updatePlaceholder();
			this.selectize.showInput(); // Without this, when options are cleared placeholder only appears after focus.
		}
	}

	/**
	 * Called when a change is detected in the 'enabled' input field.
	 * Sets the selectize state based on the new value.
	 */
	onEnabledStatusChange(): void {
		this.enabled ? this.selectize.enable() : this.selectize.disable();
	}

	/**
	 * Dispatches change event when a value change is detected.
	 * @param $event
	 */
	onSelectizeValueChange($event: any): void {
		// In some cases this gets called before registerOnChange.
		if (this.onChangeCallback) {
			this.onChangeCallback(this.selectize.getValue());
		}
	}

	/**
	 * Returns the applicable placeholder.
	 */
	getPlaceholder(): string {
		if (this.hasOptionsPlaceholder) {
			if (this.options && this.options.length > 0) {
				return this.hasOptionsPlaceholder;
			}
		}
		if (this.noOptionsPlaceholder) {
			if (!this.options || this.options.length === 0) {
				return this.noOptionsPlaceholder;
			}
		}
		return this.placeholder;
	}

	/**
	 * Implementation from ControlValueAccessor
	 *
	 * Empty check on 'obj' removed due to restriction on resetting the field.
	 * From testing, async should still function appropriately.
	 *
	 * FIXME This might not be necessary anymore..
	 *
	 * @param obj
	 */
	writeValue(obj: any): void {
		if (obj !== this.value) {
			this.value = obj;
		}
		this.selectize.setValue(this.value);
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

	getValueField(): string {
		return this.config['valueField'] ? this.config['valueField'] : 'value';
	}

	getOptgroupField(): string {
		return this.config['optgroupField'] ? this.config['optgroupField'] : 'optgroup';
	}

	@Input()
	set options(value: any[]) {
		this._options = value;
		if (!this._options_differ && value) {
			this._options_differ = this._differs.find(value).create();
		}
	}

	get options(): any[] {
		return this._options;
	}

	@Input()
	set optgroups(value: any[]) {
		this._optgroups = value;
		if (!this._optgroups_differ && value) {
			this._optgroups_differ = this._differs.find(value).create();
		}
	}

	get optgroups(): any[] {
		return this._optgroups;
	}
}
