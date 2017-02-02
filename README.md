# ng2-selectize

[![npm version](https://badge.fury.io/js/ng2-selectize.svg)](https://badge.fury.io/js/ng2-selectize)

Angular2 component for [selectize.js](https://selectize.github.io/selectize.js/)

[Hosted Example Site](http://nicholasazar.github.io/)

## Including within existing angular-cli project

1. `npm i --save jquery selectize ng2-selectize`
2. Add:
    `"../node_modules/selectize/dist/css/selectize.css",`
    `"../node_modules/selectize/dist/css/selectize.{your chosen theme}.css"`
    to the styles array within `angular-cli.json`
3. Add:
	`"../node_modules/jquery/dist/jquery.min.js",`
	`"../node_modules/ng2-selectize/src/vendors/selectize/selectize.standalone.js"` (or take from /node_modules/selectize/...)
	to the scripts array within `angular-cli.json`
3. Import module within applicable @NgModule:
   `import {Ng2SelectizeModule} from 'ng2-selectize';`
   `imports: [..., Ng2SelectizeModule, ...],`
4. Use within template: `<ng2-selectize {attributes}></ng2-selectize>`
 
## Running the demo
 ```
 cd demo
 npm i
 ng serve
 // Navigate to localhost:4200
 ```
 
## Attributes
| Attribute | Type | Default | Description | Implemented |
| --- | --- | --- | --- | --- |
| config | Object | null | Selectize config | Yes |
| options | Array | null | Available options to select from | Yes |
| placeholder | String | '' | Placeholder text to be displayed. Is overridden if hasOptionsPlaceholder/noOptionsPlaceholder are non-null | Yes |
| noOptionsPlaceholder | String | '' | Placeholder text to be displayed when no options are available | Yes |
| hasOptionsPlaceholder | String | '' | Placeholder text to be displayed when options are available | Yes |
| enabled | Boolean | true | Enables the input field when true, disabled otherwise | Yes |
| optionGroups | Object | null | Organize options within groups | Yes |

## Included Selectize Plugins
| Name | Options | Description |
| --- | --- | --- |
| dropdown_direction | {'auto', 'up', 'down'} | Control the direction in which the dropdown opens. |

