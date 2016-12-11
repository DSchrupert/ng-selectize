# ng2-selectize

[![npm version](https://badge.fury.io/js/ng2-selectize.svg)](https://badge.fury.io/js/ng2-selectize)

Angular2 directive for [selectize.js](https://selectize.github.io/selectize.js/)

[Hosted Example Site](http://nicholasazar.github.io/)

## Including within existing angular-cli project

1. `npm i --save jquery selectize ng2-selectize`
2. Add:
    `"../node_modules/selectize/dist/css/selectize.css",`
    `"../node_modules/selectize/dist/css/selectize.{your chosen theme}.css"`
    to the styles array within `angular-cli.json`
3. Import module within applicable @NgModule:
   `import {Ng2SelectizeModule} from 'ng2-selectize';`
   `imports: [..., Ng2SelectizeModule, ...],`
4. Use within template: `<input type="text" ng2-selectize {attributes}/>`
 
## Running the demo
 ```
 cd demo
 npm i
 ng serve
 // Navigate to localhost:4200
 ```
 
## Attributes
| Attribute | Type | Description | Implemented |
| --- | --- | --- | --- |
| config | Object | Selectize config | Yes |
| options | Array | Available options to select from | Yes |
| onValueChange | Function | Callback function when value changes | Yes |
| placeholder | String | Placeholder text to be displayed. Is overridden if hasOptionsPlaceholder/noOptionsPlaceholder are non-null | Yes |
| noOptionsPlaceholder | String | Placeholder text to be displayed when no options are available | Yes |
| hasOptionsPlaceholder | String | Placeholder text to be displayed when options are available | Yes |
| enabled | boolean | Enables the input field when true, disabled otherwise | Yes |
| optionGroups | Object | Organize options within groups | Yes |