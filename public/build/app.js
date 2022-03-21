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
      }, "Catalogue"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("input", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF6QjtBQWlGRSxpRUFBZUUsR0FBZjs7Ozs7Ozs7Ozs7QUN4Rko7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50L0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9jb25uZXhpb24uY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvaW5zY3JpcHRpb24uY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5cblxuaW1wb3J0ICcuL3N0eWxlcy9jb25uZXhpb24uY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvaW5zY3JpcHRpb24uY3NzJztcblxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBBcHAgfSBmcm9tICcuL2NvbXBvbmVudC9BcHAnO1xuXG5cblxubGV0IHJlYWN0Um9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcblxuaWYocmVhY3RSb290ICE9IHVuZGVmaW5lZCl7XG4gICBcbiAgICBSZWFjdERPTS5yZW5kZXIoPEFwcC8+LCByZWFjdFJvb3QpO1xufVxuXG4iLCJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuLy8gY29uc3QgY2l0aWVzID0gWydwYXJpcycsICdhYmlkamFuJywgJ21vbmFjbycsICdpc3RhbmJ1bCcsICdwaG9lbml4J107XG5cblxuICBleHBvcnQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHN0YXRlID0gLy8gbGUgc3RhdGUgZXN0IGwnZXRhdCBkZSBub3RyZSBjb21wb3NhbnQgKGRvbm5lZXMgc3VydmVpbGxlZXMgcGFyIFJlYWN0KVxuICAgIHtcbiAgICAgIGNpdGllcyA6W10sIFxuICAgICAgY2l0eTonJyxcbiAgICAgIHN1Z2dlc3Rpb246JydcbiAgICAgIFxuICAgIH07XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpXG4gICAge1xuICAgICAgd2luZG93LmZldGNoKCdhcGlfZGF0YScpXG4gICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSlcbiAgICAgIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSkgXG4gICAgICAudGhlbihmdW5jdGlvbih2aWxsZXMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaXRpZXM6IHZpbGxlc30pO1xuICAgICAgXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgb25DaGFuZ2VJbnB1dCA9IChldmVudCkgPT57XG4gICAgICAvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpXG5cbiAgICAgIGxldCBzdWdnZXN0aW9ucyA9IFtdO1xuXG4gICAgICBpZihldmVudC50YXJnZXQudmFsdWUgPT09ICcnKVxuICAgICAge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjaXR5OiBldmVudC50YXJnZXQudmFsdWUsIHN1Z2dlc3Rpb25zOicnXG4gICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vUGFyY291cnMgZGUgdG91dGVzIGxlcyB2aWxsZXMgYSBsYSByZWNoZXJjaGUgZGUgbGEgc2Fpc2llXG4gICAgICBmb3IgKGxldCBjaXR5IG9mIHRoaXMuc3RhdGUuY2l0aWVzKVxuICAgICAge1xuICAgICAgICAvLyBFc3QtY2UgcXVlIGxhIHZpbGxlIGNvbnRpZW50IGxhIHNhaXNpZVxuICAgICAgICBpZiAoY2l0eS5pbmNsdWRlcyhldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKSkpXG4gICAgICAgIHtcbiAgICAgICAgICAvL291aSwgZW5yZWdpc3RyZW1lbnQgZGUgbGEgdmlsbGUgZGFucyBsZXMgc3VnZ2VzdGlvbnNcbiAgICAgICAgICBzdWdnZXN0aW9ucy5wdXNoKGNpdHkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfVxuXG4gICAgIFxuICAgICAgY29uc29sZS50YWJsZShzdWdnZXN0aW9ucylcblxuICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGNpdHk6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgICAgICBzdWdnZXN0aW9uOiBzdWdnZXN0aW9ucy5qb2luKClcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuICAgIHJlbmRlcigpe1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiQXBwLWhlYWRlclwiPlxuXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjaXR5XCI+Q2F0YWxvZ3VlPC9sYWJlbD4gICAgICAgIFxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiY2l0eVwiIHZhbHVlPXt0aGlzLnN0YXRlLmNpdHl9IG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZUlucHV0IH0vPlxuXG4gICAgICAgICAgPHA+e3RoaXMuc3RhdGUuc3VnZ2VzdGlvbn08L3A+XG5cblxuICAgICAgICAgIFxuICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIH1cblxuXG4gICAgZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJBcHAiLCJyZWFjdFJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidW5kZWZpbmVkIiwicmVuZGVyIiwiY2l0aWVzIiwiY2l0eSIsInN1Z2dlc3Rpb24iLCJldmVudCIsInN1Z2dlc3Rpb25zIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsInN0YXRlIiwiaW5jbHVkZXMiLCJ0b0xvd2VyQ2FzZSIsInB1c2giLCJjb25zb2xlIiwidGFibGUiLCJqb2luIiwid2luZG93IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwidmlsbGVzIiwib25DaGFuZ2VJbnB1dCIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=