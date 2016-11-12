import {
	Directive, ElementRef, Renderer, Input, OnInit, Output, EventEmitter, OnChanges,
	SimpleChanges, DoCheck
} from '@angular/core';
import {SelectizeOption} from "./ng2-selectize.types";
var cloneDeep =  require('lodash.clonedeep');
var isEqual = require('lodash.isequal');

let $ = require('jquery');
require('selectize');

@Directive({
	selector: '[ng2-selectize]'
})
export class Ng2SelectizeDirective implements OnInit, DoCheck {

	@Input('config') config:Selectize.IOptions<any, any>;
	@Input('options') options:SelectizeOption[];
	@Output('onValueChange') onValueChange:EventEmitter<any> = new EventEmitter(false);

	_selectize:Selectize.IApi<any, any>;
	_oldOptions:SelectizeOption[];

	ngOnInit(): void {
		this._selectize = $(this.el.nativeElement).selectize(this.config)[0].selectize;
		this._selectize.on('change', this.onSelectizeValueChange.bind(this));
		this._oldOptions = cloneDeep(this.options);
		this.onSelectizeOptionsChange()
	}

	ngDoCheck(): void {
		if (!isEqual(this._oldOptions, this.options)) {
			this.onSelectizeOptionsChange();
			this._oldOptions = cloneDeep(this.options);
		}
	}

	onSelectizeOptionsChange() {
		this._selectize.addOption(this.options);
	}

	onSelectizeValueChange($event) {
		if (this.onValueChange != null && this.onValueChange.observers != null && this.onValueChange.observers.length > 0) {
			this.onValueChange.emit($event);
		}
	}

	constructor(private el: ElementRef, private renderer: Renderer) {}
}
