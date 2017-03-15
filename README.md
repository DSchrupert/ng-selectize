# ng-selectize

[![npm version](https://badge.fury.io/js/ng-selectize.svg)](https://badge.fury.io/js/ng-selectize)

Angular (2,4,...) component for [selectize.js](https://selectize.github.io/selectize.js/)

[Hosted Example Site](https://nicholasazar.github.io/ng-selectize)


## Including within existing angular-cli project
1. `npm i --save ng-selectize jquery selectize`
2. Add the following to the styles array within `.angular-cli.json`:
	```javascript
	
    "../node_modules/selectize/dist/css/selectize.css",
    "../node_modules/selectize/dist/css/selectize.{your chosen theme}.css"
    ```
    (the semantic-ui theme has been added to ng-selectize/selectize/selectize.semantic.css if needed)
3. Add the following to the scripts array within `.angular-cli.json`
	```javascript
	"../node_modules/jquery/dist/jquery.min.js",
	"../node_modules/ng-selectize/selectize/selectize.standalone.js" (or take from /node_modules/selectize/...)
	```

3. Import module within applicable `@NgModule`:
	```javascript
	import {NgSelectizeModule} from 'ng-selectize';
	imports: [..., NgSelectizeModule, ...],
	```
4. Use within template: `<ng-selectize [config]="..." [options] = "..." {other-attributes}></ng-selectize>`
 
## Using with SystemJS
See [Issue #28](https://github.com/NicholasAzar/ng-selectize/issues/28)
 
## Running the demo
 ```javascript
 
 git pull git@github.com:NicholasAzar/ng-selectize-demo.git
 cd ng-selectize-demo
 npm i
 npm start
 // navigate to localhost:4200
 ```

## Docs
The docs directory within this repo is the result of `ng build --prod --aot` from the [ng-selectize-demo](https://github.com/NicholasAzar/ng-selectize-demo) repository. It can be accessed from the hosted example site above.

## Attributes
| Attribute | Type | Default | Description | Implemented |
| --- | --- | --- | --- | --- |
| config | Object | null | Selectize config | Yes |
| options | Array | null | Available options to select from | Yes |
| placeholder | String | '' | Placeholder text to be displayed. Is overridden if hasOptionsPlaceholder/noOptionsPlaceholder are non-null | Yes |
| noOptionsPlaceholder | String | '' | Placeholder text to be displayed when no options are available | Yes |
| hasOptionsPlaceholder | String | '' | Placeholder text to be displayed when options are available | Yes |
| enabled | Boolean | true | Enables the input field when true, disabled otherwise | Yes |
| formControl | FormControl | null | Form control field to be used to set value and/or validation. | Yes |
| errorClass | String | 'has-error' | CSS Class to be added to the field when  | Yes |
| optionGroups | Object | null | Organize options within groups | Yes |

## Included Selectize Plugins
| Name | Options | Description |
| --- | --- | --- |
| dropdown_direction | {'auto', 'up', 'down'} | Control the direction in which the dropdown opens. |

