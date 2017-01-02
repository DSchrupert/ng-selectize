export interface ExampleSelectizeOption {
	label: string;
	value: string;
	code: string;
}

export interface ExampleGroupableOption extends ExampleSelectizeOption{
	group: any;
}

export interface ExampleGroup {
	id: string;
	data: any;
}