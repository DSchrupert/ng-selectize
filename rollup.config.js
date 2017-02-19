export default {
	entry: 'dist/index.js',
	dest: 'dist/bundles/ng2-selectize.umd.js',
	sourceMap: false,
	format: 'umd',
	moduleName: 'ng2-selectize',
	globals: {
		'@angular/core': 'ng.core',
		'@angular/common': 'ng.common',
		'@angular/forms': 'ng.forms',
	}
}