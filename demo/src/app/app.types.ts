export interface ExampleSelectizeOption {
	label: string;
	value: any;
}

export interface ExampleGroupableOption extends ExampleSelectizeOption{
	group: any;
}

export interface ExampleGroup {
	id: string;
	data: any;
}