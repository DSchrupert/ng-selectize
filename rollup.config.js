export default {
	entry: 'dist/index.js',
	dest: 'dist/bundles/ng2-selectize.umd.js',
	sourceMap: false,
	format: 'umd',
	moduleName: 'ng2-selectize',
	globals: {
		'@angular/core': 'ng.core',
		'rxjs/Observable': 'Rx',
		'rxjs/ReplaySubject': 'Rx',
		'rxjs/add/operator/map': 'Rx.Observable.prototype',
		'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
		'rxjs/add/observable/fromEvent': 'Rx.Observable',
		'rxjs/add/observable/of': 'Rx.Observable'
	},
	external: ['sifter'],
	paths: {
		sifter: './src/vendors/selectize/selectize.standalone.js'
	}
}