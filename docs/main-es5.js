(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+jzn":
    /*!***************************************************************************!*\
      !*** ./src/app/home/preset-value-example/presetValueExample.component.ts ***!
      \***************************************************************************/

    /*! exports provided: PresetValueExampleComponent */

    /***/
    function jzn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PresetValueExampleComponent", function () {
        return PresetValueExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _presetValueExample_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./presetValueExample.config */
      "Utp5");
      /* harmony import */


      var _selectize_configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../selectize.configs */
      "osHb");
      /* harmony import */


      var ng_selectize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-selectize */
      "OJdH");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var PresetValueExampleComponent = /*#__PURE__*/function () {
        function PresetValueExampleComponent() {
          _classCallCheck(this, PresetValueExampleComponent);

          this.singleSelectConfig = _presetValueExample_config__WEBPACK_IMPORTED_MODULE_1__["SINGLE_SELECT_PRESET_VALUE_CONFIG"];
          this.singleSelectOptions = _selectize_configs__WEBPACK_IMPORTED_MODULE_2__["ExampleValues_Frameworks"].slice(0);
          this.singleSelectValue = ['reactjs']; // Defaulted value.

          this.multiSelectConfig = _presetValueExample_config__WEBPACK_IMPORTED_MODULE_1__["MULTI_SELECT_PRESET_VALUE_CONFIG"];
          this.multiSelectOptions = _selectize_configs__WEBPACK_IMPORTED_MODULE_2__["ExampleValues_Frameworks"].slice(0);
          this.multiSelectValue = ['reactjs', 'angular'];
          this.placeholder = 'Click to select...';
        }

        _createClass(PresetValueExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onValueChange",
          value: function onValueChange($event) {
            console.log('value change: ', $event);
          }
        }]);

        return PresetValueExampleComponent;
      }();

      PresetValueExampleComponent.ɵfac = function PresetValueExampleComponent_Factory(t) {
        return new (t || PresetValueExampleComponent)();
      };

      PresetValueExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PresetValueExampleComponent,
        selectors: [["preset-value-example"]],
        decls: 24,
        vars: 14,
        consts: [[1, "example"], ["ngDefaultControl", "", 3, "config", "options", "placeholder", "ngModel", "ngModelChange"], [1, "form-inline"], [1, "ui", "segment"]],
        template: function PresetValueExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Single select dropdown with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "preset value");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " select: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ng-selectize", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PresetValueExampleComponent_Template_ng_selectize_ngModelChange_6_listener($event) {
              return ctx.singleSelectValue = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Multi select dropdown with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "preset value");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " select: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ng-selectize", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PresetValueExampleComponent_Template_ng_selectize_ngModelChange_18_listener($event) {
              return ctx.multiSelectValue = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.singleSelectConfig)("options", ctx.singleSelectOptions)("placeholder", ctx.placeholder)("ngModel", ctx.singleSelectValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current value: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 10, ctx.singleSelectValue), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.multiSelectConfig)("options", ctx.multiSelectOptions)("placeholder", ctx.placeholder)("ngModel", ctx.multiSelectValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current value: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 12, ctx.multiSelectValue), "");
          }
        },
        directives: [ng_selectize__WEBPACK_IMPORTED_MODULE_3__["NgSelectizeComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["JsonPipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PresetValueExampleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'preset-value-example',
            templateUrl: 'presetValueExample.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "/HSO":
    /*!**********************************************************************************!*\
      !*** ./src/app/home/placeholder-state-example/placeholderStateExample.config.ts ***!
      \**********************************************************************************/

    /*! exports provided: PLACEHOLDER_STATE_CONFIG */

    /***/
    function HSO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PLACEHOLDER_STATE_CONFIG", function () {
        return PLACEHOLDER_STATE_CONFIG;
      });
      /* harmony import */


      var _selectize_configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../selectize.configs */
      "osHb");

      var PLACEHOLDER_STATE_CONFIG = Object.assign({}, _selectize_configs__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_DROPDOWN_CONFIG"], {
        labelField: 'label',
        valueField: 'value'
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\nicho\Fun\ng-selectize-demo\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "7z/N":
    /*!***************************************************************************!*\
      !*** ./src/app/home/state-toggle-example/stateToggleExample.component.ts ***!
      \***************************************************************************/

    /*! exports provided: StateToggleExampleComponent */

    /***/
    function zN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StateToggleExampleComponent", function () {
        return StateToggleExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _stateToggleExample_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./stateToggleExample.config */
      "kG2V");
      /* harmony import */


      var _selectize_configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../selectize.configs */
      "osHb");
      /* harmony import */


      var ng_selectize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-selectize */
      "OJdH");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var StateToggleExampleComponent = /*#__PURE__*/function () {
        function StateToggleExampleComponent() {
          _classCallCheck(this, StateToggleExampleComponent);

          this.isEnabled = true;
          this.config = _stateToggleExample_config__WEBPACK_IMPORTED_MODULE_1__["STATE_TOGGLE_EXAMPLE_CONFIG"];
          this.options = _selectize_configs__WEBPACK_IMPORTED_MODULE_2__["ExampleValues_Frameworks"].slice(0);
          this.value = '';
        }

        _createClass(StateToggleExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleEnabledState",
          value: function toggleEnabledState() {
            this.isEnabled = !this.isEnabled;
          }
        }]);

        return StateToggleExampleComponent;
      }();

      StateToggleExampleComponent.ɵfac = function StateToggleExampleComponent_Factory(t) {
        return new (t || StateToggleExampleComponent)();
      };

      StateToggleExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: StateToggleExampleComponent,
        selectors: [["state-toggle-example"]],
        decls: 16,
        vars: 8,
        consts: [[1, "example"], ["ngDefaultControl", "", 3, "config", "options", "enabled", "ngModel", "ngModelChange"], [1, "ui", "primary", "button", 3, "click"]],
        template: function StateToggleExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dynamically update enabled/disabled state:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ng-selectize", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StateToggleExampleComponent_Template_ng_selectize_ngModelChange_3_listener($event) {
              return ctx.value = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StateToggleExampleComponent_Template_button_click_5_listener() {
              return ctx.toggleEnabledState();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Toggle Enabled State");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Is Enabled: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Value: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config)("options", ctx.options)("enabled", ctx.isEnabled)("ngModel", ctx.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isEnabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 6, ctx.value));
          }
        },
        directives: [ng_selectize__WEBPACK_IMPORTED_MODULE_3__["NgSelectizeComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["JsonPipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateToggleExampleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'state-toggle-example',
            templateUrl: 'stateToggleExample.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _dynamic_options_example_dynamicOptions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dynamic-options-example/dynamicOptions.component */
      "nV7k");
      /* harmony import */


      var _async_value_options_example_asyncValueOptions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./async-value-options-example/asyncValueOptions.component */
      "lFYF");
      /* harmony import */


      var _option_group_example_optionGroupExample_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./option-group-example/optionGroupExample.component */
      "tSmr");
      /* harmony import */


      var _multi_select_example_multiSelectExample_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./multi-select-example/multiSelectExample.component */
      "KKgn");
      /* harmony import */


      var _create_values_example_create_values_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./create-values-example/create-values-example.component */
      "Z9wD");
      /* harmony import */


      var _placeholder_state_example_placeholderStateExample_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./placeholder-state-example/placeholderStateExample.component */
      "BYJ/");
      /* harmony import */


      var _state_toggle_example_stateToggleExample_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./state-toggle-example/stateToggleExample.component */
      "7z/N");
      /* harmony import */


      var _form_example_formExample_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./form-example/formExample.component */
      "Cesw");
      /* harmony import */


      var _preset_value_example_presetValueExample_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./preset-value-example/presetValueExample.component */
      "+jzn");

      var HomeComponent = function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      };

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["home"]],
        decls: 10,
        vars: 0,
        consts: [[1, "example"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dynamic-options-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "async-value-options-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "option-group-select-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "multi-select-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "create-values-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "placeholder-state-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "state-toggle-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "form-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "preset-value-example");
          }
        },
        directives: [_dynamic_options_example_dynamicOptions_component__WEBPACK_IMPORTED_MODULE_1__["DynamicOptionsComponent"], _async_value_options_example_asyncValueOptions_component__WEBPACK_IMPORTED_MODULE_2__["AsyncValueOptionsComponent"], _option_group_example_optionGroupExample_component__WEBPACK_IMPORTED_MODULE_3__["OptionGroupExampleComponent"], _multi_select_example_multiSelectExample_component__WEBPACK_IMPORTED_MODULE_4__["MultiSelectExampleComponent"], _create_values_example_create_values_example_component__WEBPACK_IMPORTED_MODULE_5__["CreateValuesExampleComponent"], _placeholder_state_example_placeholderStateExample_component__WEBPACK_IMPORTED_MODULE_6__["PlaceholderStateExampleComponent"], _state_toggle_example_stateToggleExample_component__WEBPACK_IMPORTED_MODULE_7__["StateToggleExampleComponent"], _form_example_formExample_component__WEBPACK_IMPORTED_MODULE_8__["FormExampleComponent"], _preset_value_example_presetValueExample_component__WEBPACK_IMPORTED_MODULE_9__["PresetValueExampleComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `.angular-cli.json`.


      var environment = {
        production: false
      };
      /***/
    },

    /***/
    "BYJ/":
    /*!*************************************************************************************!*\
      !*** ./src/app/home/placeholder-state-example/placeholderStateExample.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: PlaceholderStateExampleComponent */

    /***/
    function BYJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlaceholderStateExampleComponent", function () {
        return PlaceholderStateExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _placeholderStateExample_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./placeholderStateExample.config */
      "/HSO");
      /* harmony import */


      var ng_selectize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-selectize */
      "OJdH");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var PlaceholderStateExampleComponent = /*#__PURE__*/function () {
        function PlaceholderStateExampleComponent() {
          _classCallCheck(this, PlaceholderStateExampleComponent);

          this.config = _placeholderStateExample_config__WEBPACK_IMPORTED_MODULE_1__["PLACEHOLDER_STATE_CONFIG"];
          this.options = [];
          this.hasOptionsPlaceholder = 'Click to select...';
          this.noOptionsPlaceholder = 'No options available.';
        }

        _createClass(PlaceholderStateExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "addRandomOption",
          value: function addRandomOption() {
            this.options.push({
              label: Math.random().toString(),
              value: Math.random().toString(),
              code: Math.random().toString()
            });
          }
        }, {
          key: "clearOptions",
          value: function clearOptions() {
            this.options = [];
          }
        }]);

        return PlaceholderStateExampleComponent;
      }();

      PlaceholderStateExampleComponent.ɵfac = function PlaceholderStateExampleComponent_Factory(t) {
        return new (t || PlaceholderStateExampleComponent)();
      };

      PlaceholderStateExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PlaceholderStateExampleComponent,
        selectors: [["placeholder-state-example"]],
        decls: 20,
        vars: 6,
        consts: [[1, "example"], [3, "config", "options", "noOptionsPlaceholder", "hasOptionsPlaceholder"], [1, "ui", "grid"], [1, "seven", "wide", "column"], [1, "nine", "wide", "column"], [1, "ui", "input", 2, "width", "100%"], ["type", "text", 3, "ngModel", "ngModelChange"], [1, "sixteen", "wide", "column"], [1, "ui", "primary", "button", 3, "click"], [1, "ui", "button", 3, "click"]],
        template: function PlaceholderStateExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Preset placeholders for hasOptions/noOptions state:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ng-selectize", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Placeholder when has options:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PlaceholderStateExampleComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.hasOptionsPlaceholder = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Placeholder when no options:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PlaceholderStateExampleComponent_Template_input_ngModelChange_14_listener($event) {
              return ctx.noOptionsPlaceholder = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaceholderStateExampleComponent_Template_button_click_16_listener() {
              return ctx.addRandomOption();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Add Option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaceholderStateExampleComponent_Template_button_click_18_listener() {
              return ctx.clearOptions();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Clear Options");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config)("options", ctx.options)("noOptionsPlaceholder", ctx.noOptionsPlaceholder)("hasOptionsPlaceholder", ctx.hasOptionsPlaceholder);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.hasOptionsPlaceholder);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.noOptionsPlaceholder);
          }
        },
        directives: [ng_selectize__WEBPACK_IMPORTED_MODULE_2__["NgSelectizeComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaceholderStateExampleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'placeholder-state-example',
            templateUrl: 'placeholderStateExample.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Cesw":
    /*!************************************************************!*\
      !*** ./src/app/home/form-example/formExample.component.ts ***!
      \************************************************************/

    /*! exports provided: FormExampleComponent */

    /***/
    function Cesw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormExampleComponent", function () {
        return FormExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _formExample_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./formExample.config */
      "wlKN");
      /* harmony import */


      var _selectize_configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../selectize.configs */
      "osHb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_selectize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-selectize */
      "OJdH");

      function FormExampleComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormExampleComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormExampleComponent_div_19_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "- Dropdown value must start with R.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormExampleComponent_div_19_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "- Dropdown value is required.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormExampleComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormExampleComponent_div_19_span_1_Template, 3, 0, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormExampleComponent_div_19_span_2_Template, 2, 0, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formGroupExample.get("requiredDropdownExample").hasError("doesntStartWithR"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formGroupExample.get("requiredDropdownExample").hasError("required"));
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "error": a0
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "disabled": a0
        };
      };

      var FormExampleComponent = /*#__PURE__*/function () {
        function FormExampleComponent(formBuilder) {
          _classCallCheck(this, FormExampleComponent);

          this.formBuilder = formBuilder;
          this.requiredDropdownConfig = _formExample_config__WEBPACK_IMPORTED_MODULE_1__["REQUIRED_DROPDOWN_CONFIG"];
          this.requiredDropdownOptions = _selectize_configs__WEBPACK_IMPORTED_MODULE_2__["ExampleValues_Frameworks"].slice(0);
        }

        _createClass(FormExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.formGroupExample = this.formBuilder.group(_formExample_config__WEBPACK_IMPORTED_MODULE_1__["FORM_GROUP_EXAMPLE"]);
            console.log(this.formGroupExample.controls['requiredDropdownExample']);
          }
        }, {
          key: "hasStartsWithRError",
          value: function hasStartsWithRError() {
            console.log(this.formGroupExample.controls['requiredDropdownExample'].hasError('doesntStartWithR'));
            return true;
          }
        }, {
          key: "testSetValue",
          value: function testSetValue() {
            this.formGroupExample.controls['requiredDropdownExample'].setValue(['angular', 'reactjs']);
          }
        }, {
          key: "resetForm",
          value: function resetForm() {
            this.formGroupExample.get('requiredDropdownExample').reset('');
            this.formGroupExample.get('firstName').reset('');
            this.formGroupExample.get('lastName').reset('');
          }
        }]);

        return FormExampleComponent;
      }();

      FormExampleComponent.ɵfac = function FormExampleComponent_Factory(t) {
        return new (t || FormExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]));
      };

      FormExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FormExampleComponent,
        selectors: [["form-example"]],
        decls: 33,
        vars: 21,
        consts: [[1, "ui", "segment"], [1, "ui", "form", 3, "formGroup", "ngClass"], [1, "required", "field"], [1, "two", "fields"], [1, "required", "field", 3, "ngClass"], ["placeholder", "First Name", "formControlName", "firstName"], ["class", "ui basic red pointing prompt label", "style", "margin-top: 5px;", 4, "ngIf"], ["placeholder", "Last Name", "formControlName", "lastName"], [3, "errorClass", "formControl", "config", "options", "hasOptionsPlaceholder"], [1, "field"], ["type", "text", "placeholder", "Other field..."], [1, "ui", "grid"], [1, "sixteen", "wide", "column", 2, "text-align", "right"], [1, "ui", "default", "button", 3, "click"], [1, "ui", "teal", "right", "labeled", "icon", "submit", "button", 3, "ngClass"], [1, "checkmark", "icon"], [1, "ui", "basic", "red", "pointing", "prompt", "label", 2, "margin-top", "5px"], [4, "ngIf"]],
        template: function FormExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Form Example:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FormExampleComponent_div_10_Template, 2, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FormExampleComponent_div_13_Template, 2, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Required Dropdown:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "ng-selectize", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, FormExampleComponent_div_19_Template, 3, 2, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Other Field:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormExampleComponent_Template_button_click_26_listener() {
              return ctx.testSetValue();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Set form value ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormExampleComponent_Template_button_click_28_listener() {
              return ctx.resetForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Reset ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroupExample)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, !ctx.formGroupExample.valid && ctx.formGroupExample.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.formGroupExample.get("firstName").touched && ctx.formGroupExample.get("firstName").errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroupExample.get("firstName").touched && ctx.formGroupExample.get("firstName").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.formGroupExample.get("lastName").touched && ctx.formGroupExample.get("lastName").errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroupExample.get("lastName").touched && ctx.formGroupExample.get("lastName").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorClass", "has-error")("formControl", ctx.formGroupExample.get("requiredDropdownExample"))("config", ctx.requiredDropdownConfig)("options", ctx.requiredDropdownOptions)("hasOptionsPlaceholder", "Click to select...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroupExample.get("requiredDropdownExample").touched && ctx.formGroupExample.get("requiredDropdownExample").errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c1, !ctx.formGroupExample.valid));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_selectize__WEBPACK_IMPORTED_MODULE_5__["NgSelectizeComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormExampleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'form-example',
            templateUrl: './formExample.component.html'
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "FbC6":
    /*!***********************************************************************!*\
      !*** ./src/app/home/dynamic-options-example/dynamicOptions.config.ts ***!
      \***********************************************************************/

    /*! exports provided: CURRENT_OPTIONS_CONFIG, REMOVE_OPTIONS_CONFIG, ADD_OPTIONS_CONFIG */

    /***/
    function FbC6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CURRENT_OPTIONS_CONFIG", function () {
        return CURRENT_OPTIONS_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "REMOVE_OPTIONS_CONFIG", function () {
        return REMOVE_OPTIONS_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ADD_OPTIONS_CONFIG", function () {
        return ADD_OPTIONS_CONFIG;
      });
      /* harmony import */


      var _selectize_configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../selectize.configs */
      "osHb");

      var CURRENT_OPTIONS_CONFIG = Object.assign({}, _selectize_configs__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_DROPDOWN_CONFIG"], {
        labelField: 'label',
        valueField: 'value',
        searchField: ['label', 'value'],
        maxItems: 10
      });
      var REMOVE_OPTIONS_CONFIG = Object.assign({}, _selectize_configs__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_DROPDOWN_CONFIG"], {
        labelField: 'label',
        valueField: 'value',
        searchField: ['label', 'value'],
        maxItems: 10
      });
      var ADD_OPTIONS_CONFIG = Object.assign({}, _selectize_configs__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_DROPDOWN_CONFIG"], {
        labelField: 'label',
        valueField: 'value',
        searchField: ['label', 'value'],
        maxItems: 10
      });
      /***/
    },

    /***/
    "KKgn":
    /*!***************************************************************************!*\
      !*** ./src/app/home/multi-select-example/multiSelectExample.component.ts ***!
      \***************************************************************************/

    /*! exports provided: MultiSelectExampleComponent */

    /***/
    function KKgn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MultiSelectExampleComponent", function () {
        return MultiSelectExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _multiSelectExample_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./multiSelectExample.config */
      "PvkX");
      /* harmony import */


      var _selectize_configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../selectize.configs */
      "osHb");
      /* harmony import */


      var ng_selectize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-selectize */
      "OJdH");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var MultiSelectExampleComponent = /*#__PURE__*/function () {
        function MultiSelectExampleComponent() {
          _classCallCheck(this, MultiSelectExampleComponent);

          this.options = _selectize_configs__WEBPACK_IMPORTED_MODULE_2__["ExampleValues_Frameworks"].slice(0);
          this.config = _multiSelectExample_config__WEBPACK_IMPORTED_MODULE_1__["MULTI_SELECT_CONFIG"];
          this.placeholder = 'Placeholder...';
          this.value = [];
        }

        _createClass(MultiSelectExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// for (let i = 0; i < 10; i++) {
            // 	this.addRandomOption();
            // }
          }
        }, {
          key: "addRandomOption",
          value: function addRandomOption() {
            var randomValue = Math.random().toString();
            this.options.push({
              label: randomValue,
              value: randomValue,
              code: randomValue
            });
          }
        }, {
          key: "onValueChange",
          value: function onValueChange($event) {
            console.log('Multi select option changed: ', $event);
          }
        }]);

        return MultiSelectExampleComponent;
      }();

      MultiSelectExampleComponent.ɵfac = function MultiSelectExampleComponent_Factory(t) {
        return new (t || MultiSelectExampleComponent)();
      };

      MultiSelectExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MultiSelectExampleComponent,
        selectors: [["multi-select-example"]],
        decls: 12,
        vars: 8,
        consts: [[1, "example"], ["ngDefaultControl", "", 3, "config", "options", "placeholder", "ngModel", "ngModelChange"], [1, "form-inline"], [1, "ui", "primary", "button", 3, "click"], [1, "ui", "input"], ["type", "text", 3, "ngModel", "ngModelChange"]],
        template: function MultiSelectExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dynamically add options to Multi select: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ng-selectize", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiSelectExampleComponent_Template_ng_selectize_ngModelChange_3_listener($event) {
              return ctx.value = $event;
            })("ngModelChange", function MultiSelectExampleComponent_Template_ng_selectize_ngModelChange_3_listener($event) {
              return ctx.onValueChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelectExampleComponent_Template_button_click_5_listener() {
              return ctx.addRandomOption();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add Option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiSelectExampleComponent_Template_input_ngModelChange_8_listener($event) {
              return ctx.placeholder = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config)("options", ctx.options)("placeholder", ctx.placeholder)("ngModel", ctx.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.placeholder);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current value: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 6, ctx.value), "");
          }
        },
        directives: [ng_selectize__WEBPACK_IMPORTED_MODULE_3__["NgSelectizeComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["JsonPipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiSelectExampleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'multi-select-example',
            templateUrl: './multiSelectExample.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "PvkX":
    /*!************************************************************************!*\
      !*** ./src/app/home/multi-select-example/multiSelectExample.config.ts ***!
      \************************************************************************/

    /*! exports provided: MULTI_SELECT_CONFIG */

    /***/
    function PvkX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MULTI_SELECT_CONFIG", function () {
        return MULTI_SELECT_CONFIG;
      });
      /* harmony import */


      var _selectize_configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../selectize.configs */
      "osHb");

      var MULTI_SELECT_CONFIG = Object.assign({}, _selectize_configs__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_DROPDOWN_CONFIG"], {
        labelField: 'label',
        valueField: 'value',
        maxItems: 5
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = ["app-root", ""];

      var _c1 = function _c1() {
        return {
          exact: true
        };
      };

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["", "app-root", ""]],
        attrs: _c0,
        decls: 37,
        vars: 2,
        consts: [[1, "ui", "fixed", "inverted", "menu"], [1, "ui", "container"], ["href", "#", 1, "header", "item"], ["src", "assets/avatar.jpg", 1, "logo", 2, "margin-right", "15px"], ["routerLinkActive", "active", "routerLink", "/", 1, "item", 3, "routerLinkActiveOptions"], [1, "ui", "main", "text", "container", 2, "padding-top", "100px"], [2, "text-align", "center"], [1, "ui", "header"], ["href", "https://github.com/NicholasAzar/ng-selectize"], ["href", "https://github.com/NicholasAzar/ng-selectize/pulls"], [1, "ui", "inverted", "vertical", "footer", "segment"], [1, "ui", "center", "aligned", "container"], [1, "ui", "inverted", "horizontal", "divider", "header"], [1, "github", "icon", 2, "margin-right", "0"], [2, "width", "100%", "text-align", "center"], ["href", "https://github.com/NicholasAzar"], ["src", "assets/avatar.jpg", 2, "width", "35px", "height", "35px"], [1, "ui", "horizontal", "inverted", "small", "divided", "link", "list"], ["href", "https://github.com/NicholasAzar/ng-selectize", 1, "item"], ["href", "https://github.com/NicholasAzar/ng-selectize/issues", 1, "item"], ["href", "https://github.com/NicholasAzar/ng-selectize/pulls", 1, "item"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " ng-selectize ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ng-Selectize");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "These are some basic examples highlighting the features available in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "ng-selectize");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Don't hesitate to open a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "pull request");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " for any changes you think should be added!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Repository");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Issues");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Pull Requests");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["div.main[_ngcontent-%COMP%] {\n\tpadding: 10px;\n}\n\ndiv.main[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n\tmargin-left: 100px;\n}\n\n[_nghost-%COMP%]     div.example {\n\tmargin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5tYWluIHtcblx0cGFkZGluZzogMTBweDtcbn1cblxuZGl2Lm1haW4gPiBoMSB7XG5cdG1hcmdpbi1sZWZ0OiAxMDBweDtcbn1cblxuOmhvc3QgL2RlZXAvIGRpdi5leGFtcGxlIHtcblx0bWFyZ2luLXRvcDogNTBweDtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: '[app-root]',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Utp5":
    /*!************************************************************************!*\
      !*** ./src/app/home/preset-value-example/presetValueExample.config.ts ***!
      \************************************************************************/

    /*! exports provided: SINGLE_SELECT_PRESET_VALUE_CONFIG, MULTI_SELECT_PRESET_VALUE_CONFIG */

    /***/
    function Utp5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SINGLE_SELECT_PRESET_VALUE_CONFIG", function () {
        return SINGLE_SELECT_PRESET_VALUE_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MULTI_SELECT_PRESET_VALUE_CONFIG", function () {
        return MULTI_SELECT_PRESET_VALUE_CONFIG;
      });
      /* harmony import */


      var _selectize_configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../selectize.configs */
      "osHb");

      var SINGLE_SELECT_PRESET_VALUE_CONFIG = Object.assign({}, _selectize_configs__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_DROPDOWN_CONFIG"], {
        labelField: 'label',
        valueField: 'value',
        searchField: ['label']
      });
      var MULTI_SELECT_PRESET_VALUE_CONFIG = Object.assign({}, _selectize_configs__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_DROPDOWN_CONFIG"], {
        labelField: 'label',
        valueField: 'value',
        searchField: ['label'],
        maxItems: 4
      });
      /***/
    },

    /***/
    "V+H5":
    /*!****************************************************************************!*\
      !*** ./src/app/home/create-values-example/create-values-example.config.ts ***!
      \****************************************************************************/

    /*! exports provided: CURRENT_OPTIONS_CONFIG */

    /***/
    function VH5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CURRENT_OPTIONS_CONFIG", function () {
        return CURRENT_OPTIONS_CONFIG;
      });
      /* harmony import */


      var _selectize_configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../selectize.configs */
      "osHb");

      var CURRENT_OPTIONS_CONFIG = Object.assign({}, _selectize_configs__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_DROPDOWN_CONFIG"], {
        create: true,
        labelField: 'label',
        valueField: 'value',
        maxItems: 10
      });
      /***/
    },

    /***/
    "Z9wD":
    /*!*******************************************************************************!*\
      !*** ./src/app/home/create-values-example/create-values-example.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: CreateValuesExampleComponent */

    /***/
    function Z9wD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateValuesExampleComponent", function () {
        return CreateValuesExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _create_values_example_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./create-values-example.config */
      "V+H5");
      /* harmony import */


      var ng_selectize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-selectize */
      "OJdH");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var CreateValuesExampleComponent = /*#__PURE__*/function () {
        function CreateValuesExampleComponent() {
          _classCallCheck(this, CreateValuesExampleComponent);

          this.config = _create_values_example_config__WEBPACK_IMPORTED_MODULE_1__["CURRENT_OPTIONS_CONFIG"];
          this.value = [];
        }

        _createClass(CreateValuesExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CreateValuesExampleComponent;
      }();

      CreateValuesExampleComponent.ɵfac = function CreateValuesExampleComponent_Factory(t) {
        return new (t || CreateValuesExampleComponent)();
      };

      CreateValuesExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CreateValuesExampleComponent,
        selectors: [["create-values-example"]],
        decls: 7,
        vars: 5,
        consts: [[1, "example"], [3, "ngModel", "config", "ngModelChange"]],
        template: function CreateValuesExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create Values Example: (start typing)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ng-selectize", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateValuesExampleComponent_Template_ng_selectize_ngModelChange_3_listener($event) {
              return ctx.value = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value)("config", ctx.config);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current value: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, ctx.value), "");
          }
        },
        directives: [ng_selectize__WEBPACK_IMPORTED_MODULE_2__["NgSelectizeComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateValuesExampleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'create-values-example',
            templateUrl: 'create-values-example.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _home_dynamic_options_example_dynamicOptions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./home/dynamic-options-example/dynamicOptions.component */
      "nV7k");
      /* harmony import */


      var _home_form_example_formExample_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./home/form-example/formExample.component */
      "Cesw");
      /* harmony import */


      var _home_multi_select_example_multiSelectExample_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./home/multi-select-example/multiSelectExample.component */
      "KKgn");
      /* harmony import */


      var _home_placeholder_state_example_placeholderStateExample_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./home/placeholder-state-example/placeholderStateExample.component */
      "BYJ/");
      /* harmony import */


      var _home_preset_value_example_presetValueExample_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./home/preset-value-example/presetValueExample.component */
      "+jzn");
      /* harmony import */


      var _home_state_toggle_example_stateToggleExample_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./home/state-toggle-example/stateToggleExample.component */
      "7z/N");
      /* harmony import */


      var _home_async_value_options_example_asyncValueOptions_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./home/async-value-options-example/asyncValueOptions.component */
      "lFYF");
      /* harmony import */


      var ng_selectize__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-selectize */
      "OJdH");
      /* harmony import */


      var _home_create_values_example_create_values_example_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./home/create-values-example/create-values-example.component */
      "Z9wD");
      /* harmony import */


      var _home_option_group_example_optionGroupExample_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./home/option-group-example/optionGroupExample.component */
      "tSmr"); // import {NgSelectizeModule} from './ng-selectize/ng-selectize.module';


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([{
          path: 'wip',
          component: _home_option_group_example_optionGroupExample_component__WEBPACK_IMPORTED_MODULE_16__["OptionGroupExampleComponent"]
        }, {
          path: '',
          component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
        }]), ng_selectize__WEBPACK_IMPORTED_MODULE_14__["NgSelectizeModule"] // Import the ng-selectize module.
        ]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _home_dynamic_options_example_dynamicOptions_component__WEBPACK_IMPORTED_MODULE_7__["DynamicOptionsComponent"], _home_form_example_formExample_component__WEBPACK_IMPORTED_MODULE_8__["FormExampleComponent"], _home_multi_select_example_multiSelectExample_component__WEBPACK_IMPORTED_MODULE_9__["MultiSelectExampleComponent"], _home_placeholder_state_example_placeholderStateExample_component__WEBPACK_IMPORTED_MODULE_10__["PlaceholderStateExampleComponent"], _home_preset_value_example_presetValueExample_component__WEBPACK_IMPORTED_MODULE_11__["PresetValueExampleComponent"], _home_state_toggle_example_stateToggleExample_component__WEBPACK_IMPORTED_MODULE_12__["StateToggleExampleComponent"], _home_async_value_options_example_asyncValueOptions_component__WEBPACK_IMPORTED_MODULE_13__["AsyncValueOptionsComponent"], _home_create_values_example_create_values_example_component__WEBPACK_IMPORTED_MODULE_15__["CreateValuesExampleComponent"], _home_option_group_example_optionGroupExample_component__WEBPACK_IMPORTED_MODULE_16__["OptionGroupExampleComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], ng_selectize__WEBPACK_IMPORTED_MODULE_14__["NgSelectizeModule"] // Import the ng-selectize module.
          ]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _home_dynamic_options_example_dynamicOptions_component__WEBPACK_IMPORTED_MODULE_7__["DynamicOptionsComponent"], _home_form_example_formExample_component__WEBPACK_IMPORTED_MODULE_8__["FormExampleComponent"], _home_multi_select_example_multiSelectExample_component__WEBPACK_IMPORTED_MODULE_9__["MultiSelectExampleComponent"], _home_placeholder_state_example_placeholderStateExample_component__WEBPACK_IMPORTED_MODULE_10__["PlaceholderStateExampleComponent"], _home_preset_value_example_presetValueExample_component__WEBPACK_IMPORTED_MODULE_11__["PresetValueExampleComponent"], _home_state_toggle_example_stateToggleExample_component__WEBPACK_IMPORTED_MODULE_12__["StateToggleExampleComponent"], _home_async_value_options_example_asyncValueOptions_component__WEBPACK_IMPORTED_MODULE_13__["AsyncValueOptionsComponent"], _home_create_values_example_create_values_example_component__WEBPACK_IMPORTED_MODULE_15__["CreateValuesExampleComponent"], _home_option_group_example_optionGroupExample_component__WEBPACK_IMPORTED_MODULE_16__["OptionGroupExampleComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([{
              path: 'wip',
              component: _home_option_group_example_optionGroupExample_component__WEBPACK_IMPORTED_MODULE_16__["OptionGroupExampleComponent"]
            }, {
              path: '',
              component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
            }]), ng_selectize__WEBPACK_IMPORTED_MODULE_14__["NgSelectizeModule"] // Import the ng-selectize module.
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "i5lT":
    /*!************************************************************************!*\
      !*** ./src/app/home/option-group-example/optionGroupExample.config.ts ***!
      \************************************************************************/

    /*! exports provided: OPTION_GROUP_SELECT_CONFIG */

    /***/
    function i5lT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OPTION_GROUP_SELECT_CONFIG", function () {
        return OPTION_GROUP_SELECT_CONFIG;
      });
      /* harmony import */


      var _selectize_configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../selectize.configs */
      "osHb");

      var OPTION_GROUP_SELECT_CONFIG = Object.assign({}, _selectize_configs__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_DROPDOWN_CONFIG"], {
        optgroupField: 'group',
        optgroupLabelField: 'label',
        labelField: 'label',
        valueField: 'value',
        maxItems: 5
      });
      /***/
    },

    /***/
    "kG2V":
    /*!************************************************************************!*\
      !*** ./src/app/home/state-toggle-example/stateToggleExample.config.ts ***!
      \************************************************************************/

    /*! exports provided: STATE_TOGGLE_EXAMPLE_CONFIG */

    /***/
    function kG2V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "STATE_TOGGLE_EXAMPLE_CONFIG", function () {
        return STATE_TOGGLE_EXAMPLE_CONFIG;
      });
      /* harmony import */


      var _selectize_configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../selectize.configs */
      "osHb");

      var STATE_TOGGLE_EXAMPLE_CONFIG = Object.assign({}, _selectize_configs__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_DROPDOWN_CONFIG"], {
        labelField: 'label',
        valueField: 'value'
      });
      /***/
    },

    /***/
    "lFYF":
    /*!*********************************************************************************!*\
      !*** ./src/app/home/async-value-options-example/asyncValueOptions.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: AsyncValueOptionsComponent */

    /***/
    function lFYF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AsyncValueOptionsComponent", function () {
        return AsyncValueOptionsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _asyncValueOptions_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./asyncValueOptions.config */
      "nzpn");
      /* harmony import */


      var _selectize_configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../selectize.configs */
      "osHb");
      /* harmony import */


      var ng_selectize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-selectize */
      "OJdH");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var AsyncValueOptionsComponent = /*#__PURE__*/function () {
        function AsyncValueOptionsComponent(cdr) {
          _classCallCheck(this, AsyncValueOptionsComponent);

          this.cdr = cdr;
          this.asyncOptionsConfig = _asyncValueOptions_config__WEBPACK_IMPORTED_MODULE_1__["ASYNC_DROPDOWN_CONFIG"];
          this.asyncValueConfig = _asyncValueOptions_config__WEBPACK_IMPORTED_MODULE_1__["ASYNC_DROPDOWN_CONFIG"];
          this.asyncValueOptions = _selectize_configs__WEBPACK_IMPORTED_MODULE_2__["ExampleValues_Frameworks"].slice(0);
          this.asyncValueValue = ['angular'];
          this.valueTimeout = _asyncValueOptions_config__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_VALUE_TIMEOUT"];
          this.optionsTimeout = _asyncValueOptions_config__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_OPTIONS_TIMEOUT"];
        }

        _createClass(AsyncValueOptionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setValue();
            this.setOptions();
          }
        }, {
          key: "setValue",
          value: function setValue() {
            var _this = this;

            this.currentValue = [];
            console.log("Setting currentValue in ".concat(this.valueTimeout, " second(s)."));
            setTimeout(function () {
              _this.currentValue = _this.asyncValueValue;
            }, (this.valueTimeout || _asyncValueOptions_config__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_VALUE_TIMEOUT"]) * 1000);
          }
        }, {
          key: "setOptions",
          value: function setOptions() {
            var _this2 = this;

            this.asyncOptions = null;
            this.cdr.detectChanges();
            console.log("Setting options in ".concat(this.optionsTimeout, " second(s)."));
            setTimeout(function () {
              _this2.asyncOptions = _selectize_configs__WEBPACK_IMPORTED_MODULE_2__["ExampleValues_Frameworks"].slice(0);
            }, (this.optionsTimeout || _asyncValueOptions_config__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_OPTIONS_TIMEOUT"]) * 1000);
          }
        }, {
          key: "executeScenario",
          value: function executeScenario() {
            this.setValue();
            this.setOptions();
          }
        }, {
          key: "onValueChange",
          value: function onValueChange(value) {
            console.log('current value: ' + this.currentValue);
          }
        }, {
          key: "setConfig",
          value: function setConfig() {// this.asyncOptionsConfig = null;
            // Fixme -> async options apparently doesn't work right now.
            // setTimeout(() => {
            // 	this.asyncOptionsConfig = ASYNC_DROPDOWN_CONFIG;
            // 	console.log("async config set.");
            // }, 5000); // after x milliseconds, set config.
          }
        }]);

        return AsyncValueOptionsComponent;
      }();

      AsyncValueOptionsComponent.ɵfac = function AsyncValueOptionsComponent_Factory(t) {
        return new (t || AsyncValueOptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      AsyncValueOptionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AsyncValueOptionsComponent,
        selectors: [["async-value-options-example"]],
        decls: 31,
        vars: 11,
        consts: [[1, "example"], [3, "options", "ngModel", "config", "ngModelChange"], [1, "ui", "grid"], [1, "six", "wide", "column"], [1, "ui", "mini", "right", "labeled", "input"], ["type", "number", "placeholder", "Enter time..", 3, "ngModel", "ngModelChange"], [1, "ui", "basic", "label"], [1, "four", "wide", "column"], [1, "sixteen", "wide", "column"], [1, "ui", "primary", "button", 3, "click"]],
        template: function AsyncValueOptionsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Async Example:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dropdown:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ng-selectize", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AsyncValueOptionsComponent_Template_ng_selectize_ngModelChange_5_listener($event) {
              return ctx.currentValue = $event;
            })("ngModelChange", function AsyncValueOptionsComponent_Template_ng_selectize_ngModelChange_5_listener($event) {
              return ctx.onValueChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Value timeout:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AsyncValueOptionsComponent_Template_input_ngModelChange_14_listener($event) {
              return ctx.valueTimeout = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "seconds");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Options timeout:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AsyncValueOptionsComponent_Template_input_ngModelChange_21_listener($event) {
              return ctx.optionsTimeout = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "seconds");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Value to set:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ng-selectize", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AsyncValueOptionsComponent_Template_ng_selectize_ngModelChange_27_listener($event) {
              return ctx.asyncValueValue = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsyncValueOptionsComponent_Template_button_click_29_listener() {
              return ctx.executeScenario();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Execute Scenario");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.asyncOptions)("ngModel", ctx.currentValue)("config", ctx.asyncOptionsConfig);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current value: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 9, ctx.currentValue), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.valueTimeout);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.optionsTimeout);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.asyncValueOptions)("ngModel", ctx.asyncValueValue)("config", ctx.asyncValueConfig);
          }
        },
        directives: [ng_selectize__WEBPACK_IMPORTED_MODULE_3__["NgSelectizeComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["JsonPipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsyncValueOptionsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'async-value-options-example',
            templateUrl: 'asyncValueOptions.component.html'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "nV7k":
    /*!**************************************************************************!*\
      !*** ./src/app/home/dynamic-options-example/dynamicOptions.component.ts ***!
      \**************************************************************************/

    /*! exports provided: DynamicOptionsComponent */

    /***/
    function nV7k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DynamicOptionsComponent", function () {
        return DynamicOptionsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _selectize_configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../selectize.configs */
      "osHb");
      /* harmony import */


      var _dynamicOptions_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dynamicOptions.config */
      "FbC6");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var ng_selectize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-selectize */
      "OJdH");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var DynamicOptionsComponent = /*#__PURE__*/function () {
        function DynamicOptionsComponent() {
          _classCallCheck(this, DynamicOptionsComponent);

          this.currentOptionsConfig = _dynamicOptions_config__WEBPACK_IMPORTED_MODULE_2__["CURRENT_OPTIONS_CONFIG"];
          this.value = [];
          this.removeOptions = [];
          this.removeOptionsConfig = _dynamicOptions_config__WEBPACK_IMPORTED_MODULE_2__["REMOVE_OPTIONS_CONFIG"];
          this.addOptions = [];
          this.addOptionsConfig = _dynamicOptions_config__WEBPACK_IMPORTED_MODULE_2__["ADD_OPTIONS_CONFIG"];
        }

        _createClass(DynamicOptionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentOptions = _selectize_configs__WEBPACK_IMPORTED_MODULE_1__["ExampleValues_Frameworks"].slice(0);
            this.refreshRemoveAndAddOptions();
          }
        }, {
          key: "removeSelectedOption",
          value: function removeSelectedOption() {
            var _this3 = this;

            this.currentOptions = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["differenceWith"])(this.currentOptions, this.removeOptionsValue, function (oldValue, selectedValue) {
              return oldValue[_this3.currentOptionsConfig.valueField] === selectedValue;
            });
            this.refreshRemoveAndAddOptions();
          }
        }, {
          key: "addSelectedOptions",
          value: function addSelectedOptions() {
            var _this4 = this;

            if (this.addOptionsValue && this.addOptionsValue.length > 0) {
              var optionsToAdd = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["intersectionWith"])(this.addOptions, this.addOptionsValue, function (option, value) {
                return option[_this4.addOptionsConfig.valueField] === value;
              });

              if (optionsToAdd && optionsToAdd.length > 0) {
                optionsToAdd.forEach(function (option) {
                  _this4.currentOptions.push(option);
                });
              }

              this.refreshRemoveAndAddOptions();
            }
          }
        }, {
          key: "refreshRemoveAndAddOptions",
          value: function refreshRemoveAndAddOptions() {
            var _this5 = this;

            this.removeOptions = this.currentOptions;
            this.addOptions = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["differenceWith"])(_selectize_configs__WEBPACK_IMPORTED_MODULE_1__["ExampleValues_Frameworks"], this.removeOptions, function (allValue, removedValue) {
              return allValue[_this5.currentOptionsConfig.valueField] === removedValue[_this5.removeOptionsConfig.valueField];
            });
          }
        }]);

        return DynamicOptionsComponent;
      }();

      DynamicOptionsComponent.ɵfac = function DynamicOptionsComponent_Factory(t) {
        return new (t || DynamicOptionsComponent)();
      };

      DynamicOptionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DynamicOptionsComponent,
        selectors: [["dynamic-options-example"]],
        decls: 22,
        vars: 12,
        consts: [[1, "example"], [3, "options", "ngModel", "config", "ngModelChange"], [1, "ui", "grid"], [1, "eight", "wide", "column"], [1, "ui", "button", 3, "click"], [1, "ui", "primary", "button", 3, "click"]],
        template: function DynamicOptionsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dynamic Options Example:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Current Options:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ng-selectize", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicOptionsComponent_Template_ng_selectize_ngModelChange_5_listener($event) {
              return ctx.value = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Remove Options:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ng-selectize", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicOptionsComponent_Template_ng_selectize_ngModelChange_13_listener($event) {
              return ctx.removeOptionsValue = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicOptionsComponent_Template_button_click_14_listener() {
              return ctx.removeSelectedOption();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Remove Selected Option(s)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Add Options:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ng-selectize", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicOptionsComponent_Template_ng_selectize_ngModelChange_19_listener($event) {
              return ctx.addOptionsValue = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicOptionsComponent_Template_button_click_20_listener() {
              return ctx.addSelectedOptions();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Add Selected Options(s)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.currentOptions)("ngModel", ctx.value)("config", ctx.currentOptionsConfig);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current value: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 10, ctx.value), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.removeOptions)("ngModel", ctx.removeOptionsValue)("config", ctx.removeOptionsConfig);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.addOptions)("ngModel", ctx.addOptionsValue)("config", ctx.addOptionsConfig);
          }
        },
        directives: [ng_selectize__WEBPACK_IMPORTED_MODULE_4__["NgSelectizeComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["JsonPipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicOptionsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dynamic-options-example',
            templateUrl: './dynamicOptions.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "nzpn":
    /*!******************************************************************************!*\
      !*** ./src/app/home/async-value-options-example/asyncValueOptions.config.ts ***!
      \******************************************************************************/

    /*! exports provided: ASYNC_DROPDOWN_CONFIG, DEFAULT_VALUE_TIMEOUT, DEFAULT_OPTIONS_TIMEOUT */

    /***/
    function nzpn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ASYNC_DROPDOWN_CONFIG", function () {
        return ASYNC_DROPDOWN_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_VALUE_TIMEOUT", function () {
        return DEFAULT_VALUE_TIMEOUT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_OPTIONS_TIMEOUT", function () {
        return DEFAULT_OPTIONS_TIMEOUT;
      });
      /* harmony import */


      var _selectize_configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../selectize.configs */
      "osHb");

      var ASYNC_DROPDOWN_CONFIG = Object.assign({}, _selectize_configs__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_DROPDOWN_CONFIG"], {
        labelField: 'label',
        valueField: 'value',
        searchField: ['label', 'value'],
        maxItems: 10
      });
      var DEFAULT_VALUE_TIMEOUT = 1;
      var DEFAULT_OPTIONS_TIMEOUT = 2;
      /***/
    },

    /***/
    "osHb":
    /*!**************************************!*\
      !*** ./src/app/selectize.configs.ts ***!
      \**************************************/

    /*! exports provided: Example_Placeholder, Example_Placeholder_HasOptions, Example_Placeholder_NoOptions, DEFAULT_DROPDOWN_CONFIG, SingleSelectConfig, ExampleValues_Frameworks, ExampleValues_Lanugages, ExampleValues_Colors, ExampleGroups_Colors */

    /***/
    function osHb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Example_Placeholder", function () {
        return Example_Placeholder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Example_Placeholder_HasOptions", function () {
        return Example_Placeholder_HasOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Example_Placeholder_NoOptions", function () {
        return Example_Placeholder_NoOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_DROPDOWN_CONFIG", function () {
        return DEFAULT_DROPDOWN_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SingleSelectConfig", function () {
        return SingleSelectConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExampleValues_Frameworks", function () {
        return ExampleValues_Frameworks;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExampleValues_Lanugages", function () {
        return ExampleValues_Lanugages;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExampleValues_Colors", function () {
        return ExampleValues_Colors;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExampleGroups_Colors", function () {
        return ExampleGroups_Colors;
      });
      /**
       * Created by nicho on 12/17/2016.
       */


      var Example_Placeholder = 'Placeholder...';
      var Example_Placeholder_HasOptions = 'Click to select options';
      var Example_Placeholder_NoOptions = 'No options available...';
      var DEFAULT_DROPDOWN_CONFIG = {
        highlight: false,
        create: false,
        persist: true,
        plugins: ['dropdown_direction', 'remove_button'],
        dropdownDirection: 'down'
      };
      var SingleSelectConfig = Object.assign({}, DEFAULT_DROPDOWN_CONFIG, {
        labelField: 'label',
        valueField: 'value',
        plugins: ['remove_button'],
        maxItems: 1
      });
      var ExampleValues_Frameworks = [{
        label: 'Angular',
        value: 'angular',
        code: 'NG'
      }, {
        label: 'ReactJS',
        value: 'reactjs',
        code: 'RJS'
      }, {
        label: 'Ember JS',
        value: 'emberjs',
        code: 'emjs'
      }, {
        label: 'Ruby on Rails',
        value: 'ruby_on_rails',
        code: 'ROR'
      }];
      var ExampleValues_Lanugages = [{
        label: 'JavaScript',
        value: 'javascript',
        code: 'js'
      }, {
        label: 'C++',
        value: 'c++',
        code: 'cpp'
      }, {
        label: 'Java',
        value: 'java',
        code: 'j'
      }, {
        label: 'Cascading Style Sheets',
        value: 'css',
        code: 'css'
      }, {
        label: 'Oracle SQL',
        value: 'oracle_sql',
        code: 'osql'
      }];
      var ExampleValues_Colors = [{
        label: 'Red',
        value: 'red',
        group: 'colors'
      }, {
        label: 'Blue',
        value: 'blue',
        group: 'colors'
      }, {
        label: 'Green',
        value: 'green',
        group: 'colors'
      }, {
        label: 'Dog',
        value: 'dog',
        group: 'animals'
      }];
      var ExampleGroups_Colors = [{
        group: 'colors',
        label: 'The colors'
      }, {
        group: 'animals',
        label: 'The Animals'
      }];
      /***/
    },

    /***/
    "tSmr":
    /*!***************************************************************************!*\
      !*** ./src/app/home/option-group-example/optionGroupExample.component.ts ***!
      \***************************************************************************/

    /*! exports provided: OptionGroupExampleComponent */

    /***/
    function tSmr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OptionGroupExampleComponent", function () {
        return OptionGroupExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _optionGroupExample_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./optionGroupExample.config */
      "i5lT");
      /* harmony import */


      var _selectize_configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../selectize.configs */
      "osHb");
      /* harmony import */


      var ng_selectize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-selectize */
      "OJdH");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var OptionGroupExampleComponent = /*#__PURE__*/function () {
        function OptionGroupExampleComponent() {
          _classCallCheck(this, OptionGroupExampleComponent);

          this.options = _selectize_configs__WEBPACK_IMPORTED_MODULE_2__["ExampleValues_Colors"].slice(0);
          this.optgroups = _selectize_configs__WEBPACK_IMPORTED_MODULE_2__["ExampleGroups_Colors"].slice(0);
          this.config = _optionGroupExample_config__WEBPACK_IMPORTED_MODULE_1__["OPTION_GROUP_SELECT_CONFIG"];
          this.placeholder = 'Placeholder...';
          this.value = [];
        }

        _createClass(OptionGroupExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OptionGroupExampleComponent;
      }();

      OptionGroupExampleComponent.ɵfac = function OptionGroupExampleComponent_Factory(t) {
        return new (t || OptionGroupExampleComponent)();
      };

      OptionGroupExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OptionGroupExampleComponent,
        selectors: [["option-group-select-example"]],
        decls: 8,
        vars: 8,
        consts: [[1, "example"], ["ngDefaultControl", "", 3, "config", "optgroups", "options", "placeholder", "ngModel", "ngModelChange"], [1, "form-inline"]],
        template: function OptionGroupExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Option Groups: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ng-selectize", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OptionGroupExampleComponent_Template_ng_selectize_ngModelChange_3_listener($event) {
              return ctx.value = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config)("optgroups", ctx.optgroups)("options", ctx.options)("placeholder", ctx.placeholder)("ngModel", ctx.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current value: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, ctx.value), "");
          }
        },
        directives: [ng_selectize__WEBPACK_IMPORTED_MODULE_3__["NgSelectizeComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["JsonPipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OptionGroupExampleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'option-group-select-example',
            templateUrl: './optionGroupExample.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "wlKN":
    /*!*********************************************************!*\
      !*** ./src/app/home/form-example/formExample.config.ts ***!
      \*********************************************************/

    /*! exports provided: startWithR, FORM_GROUP_EXAMPLE, REQUIRED_DROPDOWN_CONFIG */

    /***/
    function wlKN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "startWithR", function () {
        return startWithR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FORM_GROUP_EXAMPLE", function () {
        return FORM_GROUP_EXAMPLE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "REQUIRED_DROPDOWN_CONFIG", function () {
        return REQUIRED_DROPDOWN_CONFIG;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _selectize_configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../selectize.configs */
      "osHb");

      var startWithR = function startWithR(control) {
        return control.value && control.value.toLowerCase().startsWith('r') ? null : {
          doesntStartWithR: true
        };
      };

      var FORM_GROUP_EXAMPLE = {
        requiredDropdownExample: ['angular', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])],
        firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
      };
      var REQUIRED_DROPDOWN_CONFIG = Object.assign({}, _selectize_configs__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_DROPDOWN_CONFIG"], {
        labelField: 'label',
        valueField: 'value',
        searchField: ['label', 'value'],
        maxItems: 2
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map