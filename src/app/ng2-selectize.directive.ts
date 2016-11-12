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
	@Input('placeholder') placeholder: string;
	@Output('onValueChange') onValueChange: EventEmitter<any> = new EventEmitter(false);

	_selectize: any;
	// _selectize:Selectize.IApi<any, any>; // Selectize.IApi does not provide typings to required instance variables.
	_oldOptions: any[];

	ngOnInit(): void {
		this._selectize = $(this.el.nativeElement).selectize(this.config)[0].selectize;
		this._selectize.on('change', this.onSelectizeValueChange.bind(this));
		this._oldOptions = cloneDeep(this.options);
		this.onSelectizeOptionsChange();
		if (this.placeholder != null && this.placeholder.length > 0) {
			this.updatePlaceholder();
		}
		console.log("Selectize options: ", this.options);
	}

	/**
	 * Change detection for primitive types.
	 * @param changes
	 */
	ngOnChanges(changes: SimpleChanges): void {
		if (changes.hasOwnProperty('placeholder') && this._selectize != null) {
			this.updatePlaceholder();
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
	}

	/**
	 * Update the current placeholder based on the given input parameter.
	 */
	updatePlaceholder():void {
		this._selectize.settings.placeholder = this.placeholder;
		this._selectize.updatePlaceholder();
	}

	/**
	 * Triggered when a change is detected with the given set of options.
	 */
	onSelectizeOptionsChange():void {
		this._selectize.addOption(this.options);
	}

	/**
	 * Dispatches change event when a value change is detected.
	 * @param $event
	 */
	onSelectizeValueChange($event):void {
		if (this.onValueChange != null && this.onValueChange.observers != null && this.onValueChange.observers.length > 0) {
			this.onValueChange.emit($event);
		}
	}

	constructor(private el: ElementRef, private renderer: Renderer) {
	}
}
