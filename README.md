# ng2-selectize

[![npm version](https://badge.fury.io/js/ng2-selectize.svg)](https://badge.fury.io/js/ng2-selectize)

Angular2 directive for [selectize.js](https://selectize.github.io/selectize.js/)

## Including within existing angular-cli project

1. `npm i --save jquery selectize ng2-selectize`
2. Add:
    `"../node_modules/selectize/dist/css/selectize.css",`
    `"../node_modules/selectize/dist/css/selectize.{your chosen theme}.css"`
    to the styles array within `angular-cli.json`
3. Include directive within applicable module:
   `import {Ng2SelectizeDirective} from 'ng2-selectize';`
   `declarations: [Ng2SelectizeDirective, ...],`
4. Use within template: `<input type="text" ng2-selectize {options}/>`
 
## Running the example
 ```
 npm i
 ng serve
 // Navigate to localhost:4200
 ```
 
## Attributes
| Attribute | Type | Description |
| --- | --- | --- |
| config              | Object   | Selectize config                     |
| options             | Array    | Available options to select from     |
| onValueChange       | Function | Callback function when value changes |