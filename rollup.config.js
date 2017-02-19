export default {
	entry: 'dist/index.js',
	dest: 'dist/bundles/ng-selectize.umd.js',
	sourceMap: false,
	format: 'umd',
	moduleName: 'ng-selectize',
	globals: {
		'@angular/core': 'ng.core',
		'@angular/common': 'ng.common',
		'@angular/forms': 'ng.forms',
	}
}