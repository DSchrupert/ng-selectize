/// <reference path="../../../typings/globals/jquery/index.d.ts" />
/// <reference path="../../../typings/globals/selectize/index.d.ts" />

import {
	Directive, ElementRef, Renderer, Input, OnInit, Output, EventEmitter, OnChanges,
	SimpleChanges, DoCheck, SimpleChange
} from '@angular/core';

var cloneDeep = require('lodash.clonedeep');
var isEqual = require('lodash.isequal');

let $ = require('jquery');
require('selectize');

@Directive({
	selector: '[ng2-selectize]'
})
export class Ng2SelectizeDirective implements OnInit, OnChanges, DoCheck {

	@Input('config') config: Selectize.IOptions<any, any>;
	@Input('options') options: any[];
	@Input('optionGroups') optionGroups: any[];
	@Input('placeholder') placeholder: string;
	@Input('hasOptionsPlaceholder') hasOptionsPlaceholder: string;
	@Input('noOptionsPlaceholder') noOptionsPlaceholder: string;
	@Input('enabled') enabled: boolean;

	@Output('onValueChange') onValueChange: EventEmitter<any> = new EventEmitter(false);

	_selectize: any;
	// _selectize:Selectize.IApi<any, any>; // FIXME Selectize.IApi does not provide typings to required instance variables (ie. settings).
	_oldOptions: any[];

	ngOnInit(): void {
		this._selectize = $(this.el.nativeElement).selectize(this.config)[0].selectize;
		this._selectize.on('change', this.onSelectizeValueChange.bind(this));
		this._oldOptions = cloneDeep(this.options);
		this.onSelectizeOptionsChange();
		this.onSelectizeOptionGroupChange();
		if (this.placeholder != null && this.placeholder.length > 0) {
			this.updatePlaceholder();
		}
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
			if (changes.hasOwnProperty('optionGroups')) {
				this.onSelectizeOptionGroupChange();
			}
		}
	}

	/**
	 * Implementing deep check for option comparison
	 * FIXME: Potential performance issues.
	 */
	ngDoCheck(): void {
		if (!isEqual(this._oldOptions, this.options)) {
			this.onSelectizeOptionsChange();
			this._oldOptions = cloneDeep(this.options);
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
	onEnabledStatusChange():void {
		if (this.enabled) {
			this._selectize.enable();
		} else {
			this._selectize.disable();
		}
	}

	/**
	 * Triggered when a change is detected with the given set of options.
	 */
	onSelectizeOptionsChange(): void {
		this._selectize.clearCache();
		if (this.options == null || this.options.length == 0) {
			this._selectize.clearOptions();
		} else {
			this._selectize.addOption(this.options);
		}
		this.updatePlaceholder();
	}

	/**
	 * Triggered when a change is detected with the given set of option groups.
	 */
	onSelectizeOptionGroupChange():void {
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
	onSelectizeValueChange($event): void {
		if (this.onValueChange != null && this.onValueChange.observers != null && this.onValueChange.observers.length > 0) {
			this.onValueChange.emit($event);
		}
	}

	/**
	 * Returns the applicable placeholder.
	 */
	getPlaceholder(): string {
		var newPlaceholder: string;
		if (this.options != null && this.options.length > 0 && this.hasOptionsPlaceholder != null && this.hasOptionsPlaceholder.length > 0) {
			newPlaceholder = this.hasOptionsPlaceholder;
		} else if ((this.options == null || this.options.length == 0) && (this.noOptionsPlaceholder != null && this.noOptionsPlaceholder.length > 0)) { // no options
			newPlaceholder = this.noOptionsPlaceholder
		} else {
			newPlaceholder = this.placeholder;
		}
		return newPlaceholder;
	}

	constructor(private el: ElementRef, private renderer: Renderer) {
	}
}
