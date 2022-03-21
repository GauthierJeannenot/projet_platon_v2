"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_connexion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/connexion.css */ "./assets/styles/connexion.css");
/* harmony import */ var _styles_inscription_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/inscription.css */ "./assets/styles/inscription.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _component_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/App */ "./assets/component/App.jsx");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)





var reactRoot = document.getElementById('root');

if (reactRoot != undefined) {
  react_dom__WEBPACK_IMPORTED_MODULE_3__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_component_App__WEBPACK_IMPORTED_MODULE_4__.App, null), reactRoot);
}

/***/ }),

/***/ "./assets/component/App.jsx":
/*!**********************************!*\
  !*** ./assets/component/App.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
























function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // const cities = ['paris', 'abidjan', 'monaco', 'istanbul', 'phoenix'];

var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App() {
    var _this;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", // le state est l'etat de notre composant (donnees surveillees par React)
    {
      cities: [],
      city: '',
      suggestion: ''
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeInput", function (event) {
      // console.log(event.target.value)
      var suggestions = [];

      if (event.target.value === '') {
        _this.setState({
          city: event.target.value,
          suggestions: ''
        });

        return;
      } //Parcours de toutes les villes a la recherche de la saisie


      var _iterator = _createForOfIteratorHelper(_this.state.cities),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var city = _step.value;

          // Est-ce que la ville contient la saisie
          if (city.includes(event.target.value.toLowerCase())) {
            //oui, enregistrement de la ville dans les suggestions
            suggestions.push(city);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      console.table(suggestions);

      _this.setState({
        city: event.target.value,
        suggestion: suggestions.join()
      });
    });

    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.fetch('api_data').then(function (response) {
        return response.json();
      }).then(function (villes) {
        this.setState({
          cities: villes
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("div", {
        className: "App"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("header", {
        className: "App-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("label", {
        htmlFor: "city"
      }, "Quelle ville"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("input", {
        type: "text",
        id: "city",
        value: this.state.city,
        onChange: this.onChangeInput
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("p", null, this.state.suggestion)));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_22__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./assets/styles/connexion.css":
/*!*************************************!*\
  !*** ./assets/styles/connexion.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/inscription.css":
/*!***************************************!*\
  !*** ./assets/styles/inscription.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-e0a77f"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF6QjtBQWlGRSxpRUFBZUUsR0FBZjs7Ozs7Ozs7Ozs7QUN4Rko7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9jb25uZXhpb24uY3NzPzBhNzEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9pbnNjcmlwdGlvbi5jc3M/MjAwNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuXG5cbmltcG9ydCAnLi9zdHlsZXMvY29ubmV4aW9uLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2luc2NyaXB0aW9uLmNzcyc7XG5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi9jb21wb25lbnQvQXBwJztcblxuXG5cbmxldCByZWFjdFJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG5cbmlmKHJlYWN0Um9vdCAhPSB1bmRlZmluZWQpe1xuICAgXG4gICAgUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgcmVhY3RSb290KTtcbn1cblxuIiwiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5cbi8vIGNvbnN0IGNpdGllcyA9IFsncGFyaXMnLCAnYWJpZGphbicsICdtb25hY28nLCAnaXN0YW5idWwnLCAncGhvZW5peCddO1xuXG5cbiAgZXhwb3J0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBzdGF0ZSA9IC8vIGxlIHN0YXRlIGVzdCBsJ2V0YXQgZGUgbm90cmUgY29tcG9zYW50IChkb25uZWVzIHN1cnZlaWxsZWVzIHBhciBSZWFjdClcbiAgICB7XG4gICAgICBjaXRpZXMgOltdLCBcbiAgICAgIGNpdHk6JycsXG4gICAgICBzdWdnZXN0aW9uOicnXG4gICAgICBcbiAgICB9O1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKVxuICAgIHtcbiAgICAgIHdpbmRvdy5mZXRjaCgnYXBpX2RhdGEnKVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpXG4gICAgICB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pIFxuICAgICAgLnRoZW4oZnVuY3Rpb24odmlsbGVzKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2l0aWVzOiB2aWxsZXN9KTtcbiAgICAgIFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIG9uQ2hhbmdlSW5wdXQgPSAoZXZlbnQpID0+e1xuICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKVxuXG4gICAgICBsZXQgc3VnZ2VzdGlvbnMgPSBbXTtcblxuICAgICAgaWYoZXZlbnQudGFyZ2V0LnZhbHVlID09PSAnJylcbiAgICAgIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY2l0eTogZXZlbnQudGFyZ2V0LnZhbHVlLCBzdWdnZXN0aW9uczonJ1xuICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvL1BhcmNvdXJzIGRlIHRvdXRlcyBsZXMgdmlsbGVzIGEgbGEgcmVjaGVyY2hlIGRlIGxhIHNhaXNpZVxuICAgICAgZm9yIChsZXQgY2l0eSBvZiB0aGlzLnN0YXRlLmNpdGllcylcbiAgICAgIHtcbiAgICAgICAgLy8gRXN0LWNlIHF1ZSBsYSB2aWxsZSBjb250aWVudCBsYSBzYWlzaWVcbiAgICAgICAgaWYgKGNpdHkuaW5jbHVkZXMoZXZlbnQudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCkpKVxuICAgICAgICB7XG4gICAgICAgICAgLy9vdWksIGVucmVnaXN0cmVtZW50IGRlIGxhIHZpbGxlIGRhbnMgbGVzIHN1Z2dlc3Rpb25zXG4gICAgICAgICAgc3VnZ2VzdGlvbnMucHVzaChjaXR5KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH1cblxuICAgICBcbiAgICAgIGNvbnNvbGUudGFibGUoc3VnZ2VzdGlvbnMpXG5cbiAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjaXR5OiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICAgICAgc3VnZ2VzdGlvbjogc3VnZ2VzdGlvbnMuam9pbigpXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG5cbiAgICByZW5kZXIoKXtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIkFwcC1oZWFkZXJcIj5cblxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2l0eVwiPlF1ZWxsZSB2aWxsZTwvbGFiZWw+ICAgICAgICBcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImNpdHlcIiB2YWx1ZT17dGhpcy5zdGF0ZS5jaXR5fSBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VJbnB1dCB9Lz5cblxuICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLnN1Z2dlc3Rpb259PC9wPlxuXG5cbiAgICAgICAgICBcbiAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgICB9XG5cblxuICAgIGV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RE9NIiwiQXBwIiwicmVhY3RSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInVuZGVmaW5lZCIsInJlbmRlciIsImNpdGllcyIsImNpdHkiLCJzdWdnZXN0aW9uIiwiZXZlbnQiLCJzdWdnZXN0aW9ucyIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJzdGF0ZSIsImluY2x1ZGVzIiwidG9Mb3dlckNhc2UiLCJwdXNoIiwiY29uc29sZSIsInRhYmxlIiwiam9pbiIsIndpbmRvdyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInZpbGxlcyIsIm9uQ2hhbmdlSW5wdXQiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9