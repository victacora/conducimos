(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// ------------------- INLINED ADMIN-LTE DEFINITIONS -------------------
// require('../vendor/kevinpapst/adminlte-bundle/Resources/assets/admin-lte');
// this was replaced to save around 300kb by:
// - removing moment locales which are not used
// - removing fullcalendar locales which are not used
// - removing icheck which is not used
// - removing jquery-ui which is not used
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

global.$ = global.jQuery = $;

__webpack_require__(/*! bootstrap-sass */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap.js");

__webpack_require__(/*! jquery-slimscroll */ "./node_modules/jquery-slimscroll/jquery.slimscroll.js");

__webpack_require__(/*! select2 */ "./node_modules/select2/dist/js/select2.js");

__webpack_require__(/*! select2/dist/js/i18n/ar */ "./node_modules/select2/dist/js/i18n/ar.js");

__webpack_require__(/*! select2/dist/js/i18n/cs */ "./node_modules/select2/dist/js/i18n/cs.js");

__webpack_require__(/*! select2/dist/js/i18n/da */ "./node_modules/select2/dist/js/i18n/da.js");

__webpack_require__(/*! select2/dist/js/i18n/de */ "./node_modules/select2/dist/js/i18n/de.js");

__webpack_require__(/*! select2/dist/js/i18n/es */ "./node_modules/select2/dist/js/i18n/es.js");

__webpack_require__(/*! select2/dist/js/i18n/eu */ "./node_modules/select2/dist/js/i18n/eu.js");

__webpack_require__(/*! select2/dist/js/i18n/fr */ "./node_modules/select2/dist/js/i18n/fr.js");

__webpack_require__(/*! select2/dist/js/i18n/he */ "./node_modules/select2/dist/js/i18n/he.js");

__webpack_require__(/*! select2/dist/js/i18n/hu */ "./node_modules/select2/dist/js/i18n/hu.js");

__webpack_require__(/*! select2/dist/js/i18n/it */ "./node_modules/select2/dist/js/i18n/it.js");

__webpack_require__(/*! select2/dist/js/i18n/ja */ "./node_modules/select2/dist/js/i18n/ja.js");

__webpack_require__(/*! select2/dist/js/i18n/ko */ "./node_modules/select2/dist/js/i18n/ko.js");

__webpack_require__(/*! select2/dist/js/i18n/nl */ "./node_modules/select2/dist/js/i18n/nl.js");

__webpack_require__(/*! select2/dist/js/i18n/pl */ "./node_modules/select2/dist/js/i18n/pl.js");

__webpack_require__(/*! select2/dist/js/i18n/pt-BR */ "./node_modules/select2/dist/js/i18n/pt-BR.js");

__webpack_require__(/*! select2/dist/js/i18n/ro */ "./node_modules/select2/dist/js/i18n/ro.js");

__webpack_require__(/*! select2/dist/js/i18n/ru */ "./node_modules/select2/dist/js/i18n/ru.js");

__webpack_require__(/*! select2/dist/js/i18n/sk */ "./node_modules/select2/dist/js/i18n/sk.js");

__webpack_require__(/*! select2/dist/js/i18n/sv */ "./node_modules/select2/dist/js/i18n/sv.js");

__webpack_require__(/*! select2/dist/js/i18n/tr */ "./node_modules/select2/dist/js/i18n/tr.js");

__webpack_require__(/*! select2/dist/js/i18n/vi */ "./node_modules/select2/dist/js/i18n/vi.js");

__webpack_require__(/*! select2/dist/js/i18n/zh-CN */ "./node_modules/select2/dist/js/i18n/zh-CN.js");

var Moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

global.moment = Moment;

__webpack_require__(/*! moment/locale/ar */ "./node_modules/moment/locale/ar.js");

__webpack_require__(/*! moment/locale/cs */ "./node_modules/moment/locale/cs.js");

__webpack_require__(/*! moment/locale/da */ "./node_modules/moment/locale/da.js");

__webpack_require__(/*! moment/locale/de */ "./node_modules/moment/locale/de.js");

__webpack_require__(/*! moment/locale/de-ch */ "./node_modules/moment/locale/de-ch.js");

__webpack_require__(/*! moment/locale/eo */ "./node_modules/moment/locale/eo.js");

__webpack_require__(/*! moment/locale/es */ "./node_modules/moment/locale/es.js");

__webpack_require__(/*! moment/locale/eu */ "./node_modules/moment/locale/eu.js");

__webpack_require__(/*! moment/locale/fr */ "./node_modules/moment/locale/fr.js");

__webpack_require__(/*! moment/locale/he */ "./node_modules/moment/locale/he.js");

__webpack_require__(/*! moment/locale/hu */ "./node_modules/moment/locale/hu.js");

__webpack_require__(/*! moment/locale/it */ "./node_modules/moment/locale/it.js");

__webpack_require__(/*! moment/locale/ja */ "./node_modules/moment/locale/ja.js");

__webpack_require__(/*! moment/locale/ko */ "./node_modules/moment/locale/ko.js");

__webpack_require__(/*! moment/locale/nl */ "./node_modules/moment/locale/nl.js");

__webpack_require__(/*! moment/locale/pl */ "./node_modules/moment/locale/pl.js");

__webpack_require__(/*! moment/locale/pt-br */ "./node_modules/moment/locale/pt-br.js");

__webpack_require__(/*! moment/locale/ro */ "./node_modules/moment/locale/ro.js");

__webpack_require__(/*! moment/locale/ru */ "./node_modules/moment/locale/ru.js");

__webpack_require__(/*! moment/locale/sk */ "./node_modules/moment/locale/sk.js");

__webpack_require__(/*! moment/locale/sv */ "./node_modules/moment/locale/sv.js");

__webpack_require__(/*! moment/locale/tr */ "./node_modules/moment/locale/tr.js");

__webpack_require__(/*! moment/locale/vi */ "./node_modules/moment/locale/vi.js");

__webpack_require__(/*! moment/locale/zh-cn */ "./node_modules/moment/locale/zh-cn.js");

__webpack_require__(/*! daterangepicker */ "./node_modules/daterangepicker/daterangepicker.js");

var Sortable = __webpack_require__(/*! sortablejs/Sortable.min */ "./node_modules/sortablejs/Sortable.min.js");

global.Sortable = Sortable; // ------ AdminLTE framework ------

__webpack_require__(/*! ./sass/bootstrap.scss */ "./assets/sass/bootstrap.scss");

__webpack_require__(/*! ./sass/fontawesome.scss */ "./assets/sass/fontawesome.scss");

__webpack_require__(/*! admin-lte/dist/css/AdminLTE.min.css */ "./node_modules/admin-lte/dist/css/AdminLTE.min.css");

__webpack_require__(/*! admin-lte/dist/css/skins/_all-skins.css */ "./node_modules/admin-lte/dist/css/skins/_all-skins.css");

__webpack_require__(/*! ../vendor/kevinpapst/adminlte-bundle/Resources/assets/admin-lte-extensions.scss */ "./vendor/kevinpapst/adminlte-bundle/Resources/assets/admin-lte-extensions.scss");

global.$.AdminLTE = {};
global.$.AdminLTE.options = {};

__webpack_require__(/*! admin-lte/dist/js/adminlte.min */ "./node_modules/admin-lte/dist/js/adminlte.min.js"); // ------------------- INLINED ADMIN-LTE DEFINITIONS -------------------
// ---------------------------------------------------------------------


__webpack_require__(/*! ./sass/app.scss */ "./assets/sass/app.scss"); // ------ Kimai itself ------


__webpack_require__(/*! ./js/KimaiWebLoader.js */ "./assets/js/KimaiWebLoader.js");

global.KimaiPaginatedBoxWidget = __webpack_require__(/*! ./js/widgets/KimaiPaginatedBoxWidget */ "./assets/js/widgets/KimaiPaginatedBoxWidget.js")["default"];
global.KimaiReloadPageWidget = __webpack_require__(/*! ./js/widgets/KimaiReloadPageWidget */ "./assets/js/widgets/KimaiReloadPageWidget.js")["default"]; // ------ Autocomplete for tags only ------

__webpack_require__(/*! jquery-ui/ui/widgets/autocomplete */ "./node_modules/jquery-ui/ui/widgets/autocomplete.js");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./assets/js/KimaiConfiguration.js":
/*!*****************************************!*\
  !*** ./assets/js/KimaiConfiguration.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiConfiguration; });
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiConfiguration: handling all configuration and runtime settings
 */
var KimaiConfiguration =
/*#__PURE__*/
function () {
  function KimaiConfiguration(configurations) {
    _classCallCheck(this, KimaiConfiguration);

    this._configurations = configurations;
  }

  _createClass(KimaiConfiguration, [{
    key: "get",
    value: function get(name) {
      return this._configurations[name];
    }
  }, {
    key: "has",
    value: function has(name) {
      return name in this._configurations;
    }
  }]);

  return KimaiConfiguration;
}();



/***/ }),

/***/ "./assets/js/KimaiContainer.js":
/*!*************************************!*\
  !*** ./assets/js/KimaiContainer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiContainer; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _KimaiConfiguration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./KimaiConfiguration */ "./assets/js/KimaiConfiguration.js");
/* harmony import */ var _KimaiTranslation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./KimaiTranslation */ "./assets/js/KimaiTranslation.js");
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./KimaiPlugin */ "./assets/js/KimaiPlugin.js");









function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiContainer
 *
 * ServiceContainer for Kimai
 */




var KimaiContainer =
/*#__PURE__*/
function () {
  /**
   * Create a new Container with the given configurations and translations.
   *
   * @param {Object} configuration
   * @param {Object} translation
   */
  function KimaiContainer(configuration, translation) {
    _classCallCheck(this, KimaiContainer);

    if (!(configuration instanceof _KimaiConfiguration__WEBPACK_IMPORTED_MODULE_8__["default"])) {
      throw new Error('Configuration needs to a KimaiConfiguration instance');
    }

    this._configuration = configuration;

    if (!(translation instanceof _KimaiTranslation__WEBPACK_IMPORTED_MODULE_9__["default"])) {
      throw new Error('Configuration needs to a KimaiTranslation instance');
    }

    this._translation = translation;
    this._plugins = [];
  }
  /**
   * Register a new Plugin.
   *
   * @param {KimaiPlugin} plugin
   * @returns {KimaiPlugin}
   */


  _createClass(KimaiContainer, [{
    key: "registerPlugin",
    value: function registerPlugin(plugin) {
      if (!(plugin instanceof _KimaiPlugin__WEBPACK_IMPORTED_MODULE_10__["default"])) {
        throw new Error('Invalid plugin given, needs to be a KimaiPlugin instance');
      }

      plugin.setContainer(this);

      this._plugins.push(plugin);

      return plugin;
    }
    /**
     * @param {string} name
     * @returns {KimaiPlugin}
     */

  }, {
    key: "getPlugin",
    value: function getPlugin(name) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._plugins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var plugin = _step.value;

          if (plugin.getId() !== null && plugin.getId() === name) {
            return plugin;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      throw new Error('Unknown plugin: ' + name);
    }
    /**
     * @returns {Array<KimaiPlugin>}
     */

  }, {
    key: "getPlugins",
    value: function getPlugins() {
      return this._plugins;
    }
    /**
     * @returns {KimaiTranslation}
     */

  }, {
    key: "getTranslation",
    value: function getTranslation() {
      return this._translation;
    }
    /**
     * @returns {KimaiConfiguration}
     */

  }, {
    key: "getConfiguration",
    value: function getConfiguration() {
      return this._configuration;
    }
  }]);

  return KimaiContainer;
}();



/***/ }),

/***/ "./assets/js/KimaiLoader.js":
/*!**********************************!*\
  !*** ./assets/js/KimaiLoader.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiLoader; });
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _KimaiTranslation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./KimaiTranslation */ "./assets/js/KimaiTranslation.js");
/* harmony import */ var _KimaiConfiguration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./KimaiConfiguration */ "./assets/js/KimaiConfiguration.js");
/* harmony import */ var _KimaiContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./KimaiContainer */ "./assets/js/KimaiContainer.js");
/* harmony import */ var _plugins_KimaiActiveRecordsDuration_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plugins/KimaiActiveRecordsDuration.js */ "./assets/js/plugins/KimaiActiveRecordsDuration.js");
/* harmony import */ var _plugins_KimaiDatatableColumnView_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./plugins/KimaiDatatableColumnView.js */ "./assets/js/plugins/KimaiDatatableColumnView.js");
/* harmony import */ var _plugins_KimaiThemeInitializer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./plugins/KimaiThemeInitializer */ "./assets/js/plugins/KimaiThemeInitializer.js");
/* harmony import */ var _plugins_KimaiDateRangePicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./plugins/KimaiDateRangePicker */ "./assets/js/plugins/KimaiDateRangePicker.js");
/* harmony import */ var _plugins_KimaiDatatable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./plugins/KimaiDatatable */ "./assets/js/plugins/KimaiDatatable.js");
/* harmony import */ var _plugins_KimaiToolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./plugins/KimaiToolbar */ "./assets/js/plugins/KimaiToolbar.js");
/* harmony import */ var _plugins_KimaiAPI__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./plugins/KimaiAPI */ "./assets/js/plugins/KimaiAPI.js");
/* harmony import */ var _plugins_KimaiSelectDataAPI__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./plugins/KimaiSelectDataAPI */ "./assets/js/plugins/KimaiSelectDataAPI.js");
/* harmony import */ var _plugins_KimaiDateTimePicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./plugins/KimaiDateTimePicker */ "./assets/js/plugins/KimaiDateTimePicker.js");
/* harmony import */ var _plugins_KimaiAlternativeLinks__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./plugins/KimaiAlternativeLinks */ "./assets/js/plugins/KimaiAlternativeLinks.js");
/* harmony import */ var _plugins_KimaiAjaxModalForm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./plugins/KimaiAjaxModalForm */ "./assets/js/plugins/KimaiAjaxModalForm.js");
/* harmony import */ var _plugins_KimaiActiveRecords__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./plugins/KimaiActiveRecords */ "./assets/js/plugins/KimaiActiveRecords.js");
/* harmony import */ var _plugins_KimaiRecentActivities__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./plugins/KimaiRecentActivities */ "./assets/js/plugins/KimaiRecentActivities.js");
/* harmony import */ var _plugins_KimaiEvent__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./plugins/KimaiEvent */ "./assets/js/plugins/KimaiEvent.js");
/* harmony import */ var _plugins_KimaiAPILink__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./plugins/KimaiAPILink */ "./assets/js/plugins/KimaiAPILink.js");
/* harmony import */ var _plugins_KimaiAlert__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./plugins/KimaiAlert */ "./assets/js/plugins/KimaiAlert.js");
/* harmony import */ var _plugins_KimaiAutocomplete__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./plugins/KimaiAutocomplete */ "./assets/js/plugins/KimaiAutocomplete.js");
/* harmony import */ var _plugins_KimaiFormSelect__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./plugins/KimaiFormSelect */ "./assets/js/plugins/KimaiFormSelect.js");
/* harmony import */ var _plugins_KimaiForm__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./plugins/KimaiForm */ "./assets/js/plugins/KimaiForm.js");
/* harmony import */ var _plugins_KimaiDatePicker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./plugins/KimaiDatePicker */ "./assets/js/plugins/KimaiDatePicker.js");
/* harmony import */ var _plugins_KimaiConfirmationLink__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./plugins/KimaiConfirmationLink */ "./assets/js/plugins/KimaiConfirmationLink.js");
/* harmony import */ var _plugins_KimaiMultiUpdateTable__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./plugins/KimaiMultiUpdateTable */ "./assets/js/plugins/KimaiMultiUpdateTable.js");
/* harmony import */ var _plugins_KimaiDateUtils__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./plugins/KimaiDateUtils */ "./assets/js/plugins/KimaiDateUtils.js");





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiLoader: bootstrap the application and all plugins
 */




























var KimaiLoader =
/*#__PURE__*/
function () {
  function KimaiLoader(configurations, translations) {
    _classCallCheck(this, KimaiLoader);

    // set the current locale for all javascript components
    moment__WEBPACK_IMPORTED_MODULE_4___default.a.locale(configurations['locale'].replace('_', '-').toLowerCase());
    var kimai = new _KimaiContainer__WEBPACK_IMPORTED_MODULE_7__["default"](new _KimaiConfiguration__WEBPACK_IMPORTED_MODULE_6__["default"](configurations), new _KimaiTranslation__WEBPACK_IMPORTED_MODULE_5__["default"](translations));
    kimai.registerPlugin(new _plugins_KimaiEvent__WEBPACK_IMPORTED_MODULE_21__["default"]());
    kimai.registerPlugin(new _plugins_KimaiAPI__WEBPACK_IMPORTED_MODULE_14__["default"]());
    kimai.registerPlugin(new _plugins_KimaiAlert__WEBPACK_IMPORTED_MODULE_23__["default"]());
    kimai.registerPlugin(new _plugins_KimaiDateUtils__WEBPACK_IMPORTED_MODULE_30__["default"]());
    kimai.registerPlugin(new _plugins_KimaiFormSelect__WEBPACK_IMPORTED_MODULE_25__["default"]('.selectpicker'));
    kimai.registerPlugin(new _plugins_KimaiConfirmationLink__WEBPACK_IMPORTED_MODULE_28__["default"]('confirmation-link'));
    kimai.registerPlugin(new _plugins_KimaiActiveRecordsDuration_js__WEBPACK_IMPORTED_MODULE_8__["default"]('[data-since]'));
    kimai.registerPlugin(new _plugins_KimaiDatatableColumnView_js__WEBPACK_IMPORTED_MODULE_9__["default"]('data-column-visibility'));
    kimai.registerPlugin(new _plugins_KimaiDateRangePicker__WEBPACK_IMPORTED_MODULE_11__["default"]('input[data-daterangepickerenable="on"]'));
    kimai.registerPlugin(new _plugins_KimaiDateTimePicker__WEBPACK_IMPORTED_MODULE_16__["default"]('input[data-datetimepicker="on"]'));
    kimai.registerPlugin(new _plugins_KimaiDatePicker__WEBPACK_IMPORTED_MODULE_27__["default"]('input[data-datepickerenable="on"]'));
    kimai.registerPlugin(new _plugins_KimaiDatatable__WEBPACK_IMPORTED_MODULE_12__["default"]('section.content', 'table.dataTable'));
    kimai.registerPlugin(new _plugins_KimaiToolbar__WEBPACK_IMPORTED_MODULE_13__["default"]('form.header-search', 'toolbar-action'));
    kimai.registerPlugin(new _plugins_KimaiSelectDataAPI__WEBPACK_IMPORTED_MODULE_15__["default"]('select[data-related-select]'));
    kimai.registerPlugin(new _plugins_KimaiAlternativeLinks__WEBPACK_IMPORTED_MODULE_17__["default"]('.alternative-link'));
    kimai.registerPlugin(new _plugins_KimaiAjaxModalForm__WEBPACK_IMPORTED_MODULE_18__["default"]('.modal-ajax-form'));
    kimai.registerPlugin(new _plugins_KimaiRecentActivities__WEBPACK_IMPORTED_MODULE_20__["default"]('li.notifications-menu'));
    kimai.registerPlugin(new _plugins_KimaiActiveRecords__WEBPACK_IMPORTED_MODULE_19__["default"]('li.messages-menu', 'li.messages-menu-empty'));
    kimai.registerPlugin(new _plugins_KimaiAPILink__WEBPACK_IMPORTED_MODULE_22__["default"]('api-link'));
    kimai.registerPlugin(new _plugins_KimaiAutocomplete__WEBPACK_IMPORTED_MODULE_24__["default"]('.js-autocomplete'));
    kimai.registerPlugin(new _plugins_KimaiForm__WEBPACK_IMPORTED_MODULE_26__["default"]());
    kimai.registerPlugin(new _plugins_KimaiThemeInitializer__WEBPACK_IMPORTED_MODULE_10__["default"]());
    kimai.registerPlugin(new _plugins_KimaiMultiUpdateTable__WEBPACK_IMPORTED_MODULE_29__["default"]()); //kimai.registerPlugin(new KimaiPauseRecord('li.messages-menu ul.menu li'));
    // notify all listeners that Kimai plugins can now be registered

    kimai.getPlugin('event').trigger('kimai.pluginRegister', {
      'kimai': kimai
    }); // initialize all plugins

    kimai.getPlugins().map(function (plugin) {
      plugin.init();
    }); // notify all listeners that Kimai is now ready to be used

    kimai.getPlugin('event').trigger('kimai.initialized', {
      'kimai': kimai
    });
    this.kimai = kimai;
  }

  _createClass(KimaiLoader, [{
    key: "getKimai",
    value: function getKimai() {
      return this.kimai;
    }
  }]);

  return KimaiLoader;
}();



/***/ }),

/***/ "./assets/js/KimaiPlugin.js":
/*!**********************************!*\
  !*** ./assets/js/KimaiPlugin.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiPlugin; });
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _KimaiContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KimaiContainer */ "./assets/js/KimaiContainer.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiPlugin: base class for all plugins
 */


var KimaiPlugin =
/*#__PURE__*/
function () {
  function KimaiPlugin() {
    _classCallCheck(this, KimaiPlugin);
  }

  _createClass(KimaiPlugin, [{
    key: "init",

    /**
     * Overwrite this method to initialize your plugin.
     *
     * It is called AFTER setContainer() and AFTER DOMContentLoaded was fired.
     * You don't have access to the container before this method!
     */
    value: function init() {}
    /**
     * If you return an ID, you indicate that your plugin can be used by other plugins.
     *
     * @returns {string|null}
     */

  }, {
    key: "getId",
    value: function getId() {
      return null;
    }
    /**
     * @param {KimaiContainer} core
     */

  }, {
    key: "setContainer",
    value: function setContainer(core) {
      if (!(core instanceof _KimaiContainer__WEBPACK_IMPORTED_MODULE_1__["default"])) {
        throw new Error('Plugin was given an invalid KimaiContainer');
      }

      this._core = core;
    }
    /**
     * This function returns null, if xou call it BEFORE init().
     *
     * @returns {KimaiContainer}
     */

  }, {
    key: "getContainer",
    value: function getContainer() {
      return this._core;
    }
  }]);

  return KimaiPlugin;
}();



/***/ }),

/***/ "./assets/js/KimaiTranslation.js":
/*!***************************************!*\
  !*** ./assets/js/KimaiTranslation.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiTranslation; });
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiTranslation: handling translation strings
 */
var KimaiTranslation =
/*#__PURE__*/
function () {
  function KimaiTranslation(translations) {
    _classCallCheck(this, KimaiTranslation);

    this._translations = translations;
  }

  _createClass(KimaiTranslation, [{
    key: "get",
    value: function get(name) {
      return this._translations[name];
    }
  }, {
    key: "has",
    value: function has(name) {
      return name in this._translations;
    }
  }]);

  return KimaiTranslation;
}();



/***/ }),

/***/ "./assets/js/KimaiWebLoader.js":
/*!*************************************!*\
  !*** ./assets/js/KimaiWebLoader.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _KimaiLoader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./KimaiLoader */ "./assets/js/KimaiLoader.js");











function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * Main JS application file for Kimai 2. This file should be included in all pages.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] Wrapper class for loading Kimai app in browser script scope
 */


(function (root, factory) {
  if (typeof define === 'function' && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
    define([], function () {
      return root.KimaiWebLoader = factory();
    });
  } else if (( false ? undefined : _typeof(module)) === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.KimaiWebLoader = factory();
  }
})(typeof self !== 'undefined' ? self : undefined, function () {
  var KimaiWebLoader =
  /*#__PURE__*/
  function (_KimaiLoader) {
    _inherits(KimaiWebLoader, _KimaiLoader);

    function KimaiWebLoader() {
      _classCallCheck(this, KimaiWebLoader);

      return _possibleConstructorReturn(this, _getPrototypeOf(KimaiWebLoader).apply(this, arguments));
    }

    return KimaiWebLoader;
  }(_KimaiLoader__WEBPACK_IMPORTED_MODULE_10__["default"]);

  return KimaiWebLoader;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./assets/js/plugins/KimaiAPI.js":
/*!***************************************!*\
  !*** ./assets/js/plugins/KimaiAPI.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiAPI; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");












function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiAPI: easy access to API methods
 */



var KimaiAPI =
/*#__PURE__*/
function (_KimaiPlugin) {
  _inherits(KimaiAPI, _KimaiPlugin);

  function KimaiAPI() {
    _classCallCheck(this, KimaiAPI);

    return _possibleConstructorReturn(this, _getPrototypeOf(KimaiAPI).apply(this, arguments));
  }

  _createClass(KimaiAPI, [{
    key: "getId",
    value: function getId() {
      return 'api';
    }
  }, {
    key: "get",
    value: function get(url, data, callbackSuccess, callbackError) {
      jquery__WEBPACK_IMPORTED_MODULE_11___default.a.ajax({
        url: url,
        headers: {
          'X-AUTH-SESSION': true,
          'Content-Type': 'application/json'
        },
        method: 'GET',
        data: data,
        dataType: 'json',
        success: callbackSuccess,
        error: callbackError
      });
    }
  }, {
    key: "patch",
    value: function patch(url, data, callbackSuccess, callbackError) {
      jquery__WEBPACK_IMPORTED_MODULE_11___default.a.ajax({
        url: url,
        headers: {
          'X-AUTH-SESSION': true,
          'Content-Type': 'application/json'
        },
        method: 'PATCH',
        data: data,
        dataType: 'json',
        success: callbackSuccess,
        error: callbackError
      });
    }
  }, {
    key: "delete",
    value: function _delete(url, callbackSuccess, callbackError) {
      jquery__WEBPACK_IMPORTED_MODULE_11___default.a.ajax({
        url: url,
        headers: {
          'X-AUTH-SESSION': true,
          'Content-Type': 'application/json'
        },
        method: 'DELETE',
        dataType: 'json',
        success: callbackSuccess,
        error: callbackError
      });
    }
  }]);

  return KimaiAPI;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_12__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiAPILink.js":
/*!*******************************************!*\
  !*** ./assets/js/plugins/KimaiAPILink.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiAPILink; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");












function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * Needs to be initialized with a class name.
 *
 * A link like <a href=# class=remoteLink> can be activated with:
 * new KimaiAPILink('remoteLink')
 *
 * Allows to assign the given selector to any element, which then is used as click-handler
 * calling an API method and trigger the event from data-event attribute afterwards.
 *
 * @param selector
 */

var KimaiAPILink =
/*#__PURE__*/
function (_KimaiPlugin) {
  _inherits(KimaiAPILink, _KimaiPlugin);

  function KimaiAPILink(selector) {
    var _this;

    _classCallCheck(this, KimaiAPILink);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(KimaiAPILink).call(this));
    _this.selector = selector;
    return _this;
  }

  _createClass(KimaiAPILink, [{
    key: "init",
    value: function init() {
      var self = this;
      document.addEventListener('click', function (event) {
        var target = event.target;

        while (target !== null && !target.matches('body')) {
          if (target.classList.contains(self.selector)) {
            (function () {
              var attributes = target.dataset;
              var url = attributes['href'];

              if (!url) {
                url = target.getAttribute('href');
              }

              if (attributes.question !== undefined) {
                self.getContainer().getPlugin('alert').question(attributes.question, function (value) {
                  if (value) {
                    self._callApi(url, attributes);
                  }
                });
              } else {
                self._callApi(url, attributes);
              }

              event.preventDefault();
              event.stopPropagation();
            })();
          }

          target = target.parentNode;
        }
      });
    }
  }, {
    key: "_callApi",
    value: function _callApi(url, attributes) {
      var method = attributes['method'];
      var eventName = attributes['event'];
      var API = this.getContainer().getPlugin('api');
      var eventing = this.getContainer().getPlugin('event');
      var alert = this.getContainer().getPlugin('alert');

      var successHandle = function successHandle(result) {
        eventing.trigger(eventName);

        if (attributes.msgSuccess) {
          alert.success(attributes.msgSuccess);
        }
      };

      var errorHandle = function errorHandle(xhr, err) {
        var message = 'action.update.error';

        if (attributes.msgError) {
          message = attributes.msgError;
        }

        if (xhr.responseJSON && xhr.responseJSON.message) {
          err = xhr.responseJSON.message;
        }

        alert.error(message, err);
      };

      if (method === 'PATCH') {
        var data = {};

        if (attributes.payload) {
          data = attributes.payload;
        }

        API.patch(url, data, successHandle, errorHandle);
      } else if (method === 'DELETE') {
        API["delete"](url, successHandle, errorHandle);
      }
    }
  }]);

  return KimaiAPILink;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_11__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiActiveRecords.js":
/*!*************************************************!*\
  !*** ./assets/js/plugins/KimaiActiveRecords.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiActiveRecords; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");
















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiActiveRecords: responsible to display the users active records
 */


var KimaiActiveRecords =
/*#__PURE__*/
function (_KimaiPlugin) {
  _inherits(KimaiActiveRecords, _KimaiPlugin);

  function KimaiActiveRecords(selector, selectorEmpty) {
    var _this;

    _classCallCheck(this, KimaiActiveRecords);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(KimaiActiveRecords).call(this));
    _this.selector = selector;
    _this.selectorEmpty = selectorEmpty;
    return _this;
  }

  _createClass(KimaiActiveRecords, [{
    key: "getId",
    value: function getId() {
      return 'active-records';
    }
  }, {
    key: "init",
    value: function init() {
      var menu = document.querySelector(this.selector); // the menu can be hidden if user has no permissions to see it

      if (menu === null) {
        return;
      }

      var dropdown = menu.querySelector('ul.dropdown-menu');
      this.attributes = dropdown.dataset;
      this.itemList = dropdown.querySelector('li > ul.menu');
      this.label = menu.querySelector('a > span.label');
      var self = this;

      var handle = function handle() {
        self.reloadActiveRecords();
      };

      document.addEventListener('kimai.timesheetUpdate', handle);
      document.addEventListener('kimai.activityUpdate', handle);
      document.addEventListener('kimai.projectUpdate', handle);
      document.addEventListener('kimai.customerUpdate', handle);
    }
  }, {
    key: "emptyList",
    value: function emptyList() {
      this.itemList.innerHTML = '';
    }
  }, {
    key: "_toggleMenu",
    value: function _toggleMenu(hasEntries) {
      var menu = document.querySelector(this.selector);
      var menuEmpty = document.querySelector(this.selectorEmpty);
      menu.style.display = hasEntries ? 'inline-block' : 'none';

      if (menuEmpty !== null) {
        menuEmpty.style.display = !hasEntries ? 'inline-block' : 'none';
      }
    }
  }, {
    key: "setEntries",
    value: function setEntries(entries) {
      this._toggleMenu(entries.length > 0);

      if (entries.length === 0) {
        this.label.innerText = '';
        this.emptyList();
        return;
      }

      var htmlToInsert = '';
      var durations = this.getContainer().getPlugin('timesheet-duration');
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var timesheet = _step.value;
          htmlToInsert += "<li>" + "<a href=\"".concat(this.attributes['href'].replace('000', timesheet.id), "\" data-event=\"kimai.timesheetStop kimai.timesheetUpdate\" class=\"api-link\" data-method=\"PATCH\" data-msg-error=\"timesheet.stop.error\" data-msg-success=\"timesheet.stop.success\">") + "<div class=\"pull-left\">" + "<i class=\"".concat(this.attributes['icon'], " fa-2x\"></i>") + "</div>" + "<h4>" + "<span>".concat(timesheet.activity.name, "</span>") + "<small>" + "<span data-title=\"true\" data-since=\"".concat(timesheet.begin, "\" data-format=\"").concat(this.attributes['format'], "\">").concat(durations.formatDuration(timesheet.duration, this.attributes['format']), "</span>") + "</small>" + "</h4>" + "<p>".concat(timesheet.project.name, " (").concat(timesheet.project.customer.name, ")</p>") + "</a>" + "</li>";
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (this.label.dataset.warning < entries.length) {
        this.label.classList = 'label label-danger';
      } else {
        this.label.classList = 'label label-warning';
      }

      this.label.innerText = entries.length;
      this.itemList.innerHTML = htmlToInsert;
      durations.updateRecords();
    }
  }, {
    key: "reloadActiveRecords",
    value: function reloadActiveRecords() {
      var self = this;
      var API = this.getContainer().getPlugin('api');
      API.get(this.attributes['api'], {}, function (result) {
        self.setEntries(result);
      });
    }
  }]);

  return KimaiActiveRecords;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_15__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiActiveRecordsDuration.js":
/*!*********************************************************!*\
  !*** ./assets/js/plugins/KimaiActiveRecordsDuration.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiActiveRecordsDuration; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");



















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiActiveRecordsDuration: activate the updates for all active timesheet records on this page
 */



var KimaiActiveRecordsDuration =
/*#__PURE__*/
function (_KimaiPlugin) {
  _inherits(KimaiActiveRecordsDuration, _KimaiPlugin);

  function KimaiActiveRecordsDuration(selector) {
    var _this;

    _classCallCheck(this, KimaiActiveRecordsDuration);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(KimaiActiveRecordsDuration).call(this));
    _this.selector = selector;
    return _this;
  }

  _createClass(KimaiActiveRecordsDuration, [{
    key: "getId",
    value: function getId() {
      return 'timesheet-duration';
    }
  }, {
    key: "init",
    value: function init() {
      this.updateRecords();
      var self = this;

      var handle = function handle() {
        self.updateRecords();
      };

      this._updatesHandler = setInterval(handle, 10000); // this will probably not work as expected, as other event-handler might need longer to update the DOM

      document.addEventListener('kimai.timesheetUpdate', handle);
    }
  }, {
    key: "unregisterUpdates",
    value: function unregisterUpdates() {
      clearInterval(this._updatesHandler);
    }
  }, {
    key: "updateRecords",
    value: function updateRecords() {
      var durations = [];
      var activeRecords = document.querySelectorAll(this.selector);

      if (activeRecords.length === 0) {
        document.title = document.querySelector('body').dataset['title'];
        return;
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = activeRecords[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var record = _step.value;
          var since = record.getAttribute('data-since');
          var format = record.getAttribute('data-format');
          var duration = this.formatDuration(since, format);

          if (record.getAttribute('data-title') !== null && duration !== '?') {
            durations.push(duration);
          }

          record.textContent = duration;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (durations.length === 0) {
        return;
      }

      var title = durations.shift();
      var prefix = ' | ';
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = durations.slice(0, 2)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _duration = _step2.value;
          title += prefix + _duration;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      document.title = title;
    }
  }, {
    key: "formatDuration",
    value: function formatDuration(since, format) {
      var duration = moment__WEBPACK_IMPORTED_MODULE_18___default.a.duration(moment__WEBPACK_IMPORTED_MODULE_18___default()(new Date()).diff(moment__WEBPACK_IMPORTED_MODULE_18___default()(since)));
      var hours = parseInt(duration.asHours()).toString();
      var minutes = duration.minutes();
      var seconds = duration.seconds();

      if (hours < 0 || minutes < 0 || seconds < 0) {
        return '?';
      } // special case for hours, as they can overflow the 24h barrier - Kimai does not support days as duration unit


      if (hours.length === 1) {
        hours = '0' + hours;
      }

      return format.replace('%h', hours).replace('%m', ('0' + minutes).substr(-2)).replace('%s', ('0' + seconds).substr(-2));
    }
  }]);

  return KimaiActiveRecordsDuration;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_19__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiAjaxModalForm.js":
/*!*************************************************!*\
  !*** ./assets/js/plugins/KimaiAjaxModalForm.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiAjaxModalForm; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _KimaiReducedClickHandler__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./KimaiReducedClickHandler */ "./assets/js/plugins/KimaiReducedClickHandler.js");















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiAjaxModalForm
 *
 * allows to assign the given selector to any element, which then is used as click-handler:
 * opening a modal with the content from the URL given in the elements 'data-href' or 'href' attribute
 */



var KimaiAjaxModalForm =
/*#__PURE__*/
function (_KimaiReducedClickHan) {
  _inherits(KimaiAjaxModalForm, _KimaiReducedClickHan);

  function KimaiAjaxModalForm(selector) {
    var _this;

    _classCallCheck(this, KimaiAjaxModalForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(KimaiAjaxModalForm).call(this));
    _this.selector = selector;
    return _this;
  }

  _createClass(KimaiAjaxModalForm, [{
    key: "getId",
    value: function getId() {
      return 'modal';
    }
  }, {
    key: "init",
    value: function init() {
      var self = this;
      this.modal = jquery__WEBPACK_IMPORTED_MODULE_14___default()('#remote_form_modal');
      this.modal.on('hide.bs.modal', function () {
        self.getContainer().getPlugin('event').trigger('modal-hide');
      });
      this.modal.on('hidden.bs.modal', function () {
        // kill all references, so GC can kick in
        self.getContainer().getPlugin('form').destroyForm(self._getFormIdentifier());
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('#remote_form_modal .modal-body').replaceWith('');
      });
      this.modal.on('show.bs.modal', function () {
        self.getContainer().getPlugin('event').trigger('modal-show');
      });
      this.modal.on('shown.bs.modal', function () {
        // workaround for autofocus attribute, as the modal "steals" it
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(self._getFormIdentifier()).find('input[type=text],textarea,select').filter(':not("[data-datetimepicker=on]")').filter(':visible:first').focus().delay(1000).focus();
      });

      this._addClickHandler(this.selector, function (href) {
        self.openUrlInModal(href);
      });
    }
  }, {
    key: "openUrlInModal",
    value: function openUrlInModal(url, errorHandler) {
      var self = this;

      if (errorHandler === undefined) {
        errorHandler = function errorHandler(xhr, err) {
          if (xhr.status === undefined || xhr.status !== 403) {
            window.location = url;
          }
        };
      }

      jquery__WEBPACK_IMPORTED_MODULE_14___default.a.ajax({
        url: url,
        success: function success(html) {
          self._openFormInModal(html);
        },
        error: errorHandler
      });
    }
    /**
     * Returns the CSS selector for the modal form.
     * 
     * @returns {string}
     * @private
     */

  }, {
    key: "_getFormIdentifier",
    value: function _getFormIdentifier() {
      return '#remote_form_modal .modal-content form';
    }
  }, {
    key: "_openFormInModal",
    value: function _openFormInModal(html) {
      var self = this;

      var formIdentifier = this._getFormIdentifier(); // if any of these is found in a response, the form will be re-displayed


      var flashErrorIdentifier = 'div.alert-error'; // messages to show above the form

      var flashMessageIdentifier = 'div.alert';
      var form = jquery__WEBPACK_IMPORTED_MODULE_14___default()(formIdentifier);
      var remoteModal = this.modal; // will be (re-)activated later

      form.off('submit'); // load new form from given content

      if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(html).find('#form_modal .modal-content').length > 0) {
        // switch classes, in case the modal type changed
        remoteModal.on('hidden.bs.modal', function () {
          if (remoteModal.hasClass('modal-danger')) {
            remoteModal.removeClass('modal-danger');
          }
        });

        if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(html).find('#form_modal').hasClass('modal-danger')) {
          remoteModal.addClass('modal-danger');
        }

        jquery__WEBPACK_IMPORTED_MODULE_14___default()('#remote_form_modal .modal-content').replaceWith(jquery__WEBPACK_IMPORTED_MODULE_14___default()(html).find('#form_modal .modal-content')); // activate new loaded widgets

        self.getContainer().getPlugin('form').activateForm(formIdentifier);
      } // show error flash messages


      var flashMessages = jquery__WEBPACK_IMPORTED_MODULE_14___default()(html).find(flashMessageIdentifier);

      if (flashMessages.length > 0) {
        jquery__WEBPACK_IMPORTED_MODULE_14___default()('#remote_form_modal .modal-body').prepend(flashMessages);
      } // -----------------------------------------------------------------------
      // a fix for firefox focus problems with datepicker in modal
      // see https://github.com/kevinpapst/kimai2/issues/618


      var enforceModalFocusFn = jquery__WEBPACK_IMPORTED_MODULE_14___default.a.fn.modal.Constructor.prototype.enforceFocus;

      jquery__WEBPACK_IMPORTED_MODULE_14___default.a.fn.modal.Constructor.prototype.enforceFocus = function () {};

      remoteModal.on('hidden.bs.modal', function () {
        jquery__WEBPACK_IMPORTED_MODULE_14___default.a.fn.modal.Constructor.prototype.enforceFocus = enforceModalFocusFn;
      }); // -----------------------------------------------------------------------

      this.getContainer().getPlugin('toolbar').hide();
      remoteModal.modal('show'); // the new form that was loaded via ajax

      form = jquery__WEBPACK_IMPORTED_MODULE_14___default()(formIdentifier); // click handler for modal save button, to send forms via ajax

      form.on('submit', function (event) {
        var btn = jquery__WEBPACK_IMPORTED_MODULE_14___default()(formIdentifier + ' button[type=submit]').button('loading');
        var eventName = form.attr('data-form-event');
        var events = self.getContainer().getPlugin('event');
        var alert = self.getContainer().getPlugin('alert');
        event.preventDefault();
        event.stopPropagation();
        jquery__WEBPACK_IMPORTED_MODULE_14___default.a.ajax({
          url: form.attr('action'),
          type: form.attr('method'),
          data: form.serialize(),
          success: function success(html) {
            btn.button('reset');
            var hasFieldError = jquery__WEBPACK_IMPORTED_MODULE_14___default()(html).find('#form_modal .modal-content .has-error').length > 0;
            var hasFormError = jquery__WEBPACK_IMPORTED_MODULE_14___default()(html).find('#form_modal .modal-content ul.list-unstyled li.text-danger').length > 0;
            var hasFlashError = jquery__WEBPACK_IMPORTED_MODULE_14___default()(html).find(flashErrorIdentifier).length > 0;

            if (hasFieldError || hasFormError || hasFlashError) {
              self._openFormInModal(html);
            } else {
              events.trigger(eventName); // try to find form defined messages first ...

              var msg = form.attr('data-msg-success');

              if (msg === null || msg === undefined) {
                // ... but if none was available, check the response to find server rendered flash-message
                var flashMessage = jquery__WEBPACK_IMPORTED_MODULE_14___default()(html).find('section.content div.row div.alert.alert-success');

                if (flashMessage.length > 0) {
                  var flashContent = flashMessage.contents();

                  if (flashContent.length === 3) {
                    msg = flashContent[2].textContent;
                  }
                }
              } // ... and if even that is not available, we use a generic fallback message


              if (msg === null || msg === undefined) {
                msg = 'action.update.success';
              }

              remoteModal.modal('hide');
              alert.success(msg);
            }

            return false;
          },
          error: function error(xhr, err) {
            var message = form.attr('data-msg-error');

            if (message === null || message === undefined) {
              message = 'action.update.error';
            }

            if (xhr.responseJSON && xhr.responseJSON.message) {
              err = xhr.responseJSON.message;
            } else if (xhr.status && xhr.statusText) {
              err = '[' + xhr.status + '] ' + xhr.statusText;
            }

            alert.error(message, err); // this is useful for changing form fields and retrying to save (and in development to test form changes)

            setTimeout(function () {
              btn.button('reset');
            }, 1500);
          }
        });
      });
    }
  }]);

  return KimaiAjaxModalForm;
}(_KimaiReducedClickHandler__WEBPACK_IMPORTED_MODULE_15__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiAlert.js":
/*!*****************************************!*\
  !*** ./assets/js/plugins/KimaiAlert.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiAlert; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");














function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiAlert: notifications for Kimai
 */



var KimaiAlert =
/*#__PURE__*/
function (_KimaiPlugin) {
  _inherits(KimaiAlert, _KimaiPlugin);

  function KimaiAlert() {
    _classCallCheck(this, KimaiAlert);

    return _possibleConstructorReturn(this, _getPrototypeOf(KimaiAlert).apply(this, arguments));
  }

  _createClass(KimaiAlert, [{
    key: "getId",
    value: function getId() {
      return 'alert';
    }
  }, {
    key: "error",
    value: function error(title, message) {
      var translation = this.getContainer().getTranslation();

      if (translation.has(title)) {
        title = translation.get(title);
      }

      if (translation.has(message)) {
        message = translation.get(message);
      }

      sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a.fire({
        icon: 'error',
        title: title.replace('%reason%', ''),
        text: message
      });
    }
  }, {
    key: "success",
    value: function success(message) {
      var translation = this.getContainer().getTranslation();

      if (translation.has(message)) {
        message = translation.get(message);
      }

      sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a.fire({
        timer: 2000,
        timerProgressBar: true,
        toast: true,
        position: 'top',
        showConfirmButton: false,
        icon: 'success',
        title: message
      });
    }
    /**
     * Callback receives a value and needs to decide what should happen with it
     *
     * @param message
     * @param callback
     */

  }, {
    key: "question",
    value: function question(message, callback) {
      var translation = this.getContainer().getTranslation();

      if (translation.has(message)) {
        message = translation.get(message);
      }

      sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a.fire({
        title: message,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: translation.get('confirm'),
        cancelButtonText: translation.get('cancel')
      }).then(function (result) {
        callback(result.value);
      });
    }
  }]);

  return KimaiAlert;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_14__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiAlternativeLinks.js":
/*!****************************************************!*\
  !*** ./assets/js/plugins/KimaiAlternativeLinks.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiAlternativeLinks; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _KimaiReducedClickHandler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./KimaiReducedClickHandler */ "./assets/js/plugins/KimaiReducedClickHandler.js");












function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiAlternativeLinks
 *
 * allows to assign the given selector to any element, which then is used as click-handler
 * redirecting to the URL given in the elements 'data-href' or 'href' attribute
 */



var KimaiAlternativeLinks =
/*#__PURE__*/
function (_KimaiReducedClickHan) {
  _inherits(KimaiAlternativeLinks, _KimaiReducedClickHan);

  function KimaiAlternativeLinks(selector) {
    var _this;

    _classCallCheck(this, KimaiAlternativeLinks);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(KimaiAlternativeLinks).call(this));
    _this.selector = selector;
    return _this;
  }

  _createClass(KimaiAlternativeLinks, [{
    key: "init",
    value: function init() {
      this._addClickHandler(this.selector, function (href) {
        window.location = href;
      });
    }
  }]);

  return KimaiAlternativeLinks;
}(_KimaiReducedClickHandler__WEBPACK_IMPORTED_MODULE_12__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiAutocomplete.js":
/*!************************************************!*\
  !*** ./assets/js/plugins/KimaiAutocomplete.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiAutocomplete; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");

















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


/**
 * Supporting auto-complete fields via API.
 * Currently used for timesheet tagging in toolbar and edit dialogs.
 */

var KimaiAutocomplete =
/*#__PURE__*/
function (_KimaiPlugin) {
  _inherits(KimaiAutocomplete, _KimaiPlugin);

  function KimaiAutocomplete(selector) {
    var _this;

    _classCallCheck(this, KimaiAutocomplete);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(KimaiAutocomplete).call(this));
    _this.selector = selector;
    return _this;
  }

  _createClass(KimaiAutocomplete, [{
    key: "init",
    value: function init() {
      this.minChars = this.getContainer().getConfiguration().get('autoComplete');
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'autocomplete';
    }
  }, {
    key: "splitTagList",
    value: function splitTagList(val) {
      return val.split(/,\s*/);
    }
  }, {
    key: "extractLastTag",
    value: function extractLastTag(term) {
      return this.splitTagList(term).pop();
    }
  }, {
    key: "activateAutocomplete",
    value: function activateAutocomplete(selector) {
      var self = this;
      jquery__WEBPACK_IMPORTED_MODULE_16___default()(selector + ' ' + this.selector).each(function (index) {
        var currentField = jquery__WEBPACK_IMPORTED_MODULE_16___default()(this);
        var apiUrl = currentField.attr('data-autocomplete-url');
        var API = self.getContainer().getPlugin('api');
        currentField // don't navigate away from the field on tab when selecting an item
        .on("keydown", function (event) {
          if (event.keyCode === jquery__WEBPACK_IMPORTED_MODULE_16___default.a.ui.keyCode.TAB && jquery__WEBPACK_IMPORTED_MODULE_16___default()(this).autocomplete("instance").menu.active) {
            event.preventDefault();
          }
        }).autocomplete({
          source: function source(request, response) {
            var lastEntry = self.extractLastTag(request.term);
            API.get(apiUrl, {
              'name': lastEntry
            }, function (data) {
              response(data);
            });
          },
          search: function search() {
            // custom minLength
            var term = self.extractLastTag(this.value);

            if (term.length < self.minChars) {
              return false;
            }
          },
          focus: function focus() {
            // prevent value inserted on focus
            return false;
          },
          select: function select(event, ui) {
            var terms = self.splitTagList(this.value); // remove the current input

            terms.pop(); // check if selected tag is already in list

            if (!terms.includes(ui.item.value)) {
              // add the selected item
              terms.push(ui.item.value);
            } // add placeholder to get the comma-and-space at the end


            terms.push("");
            this.value = terms.join(", ");
            $(this).trigger('change');
            return false;
          }
        });
      });
    }
  }, {
    key: "destroyAutocomplete",
    value: function destroyAutocomplete(selector) {
      jquery__WEBPACK_IMPORTED_MODULE_16___default()(selector + ' ' + this.selector).each(function (index) {
        var currentField = jquery__WEBPACK_IMPORTED_MODULE_16___default()(this);
        currentField.autocomplete("destroy");
        currentField.removeData('autocomplete');
      });
    }
  }]);

  return KimaiAutocomplete;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_17__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/plugins/KimaiConfirmationLink.js":
/*!****************************************************!*\
  !*** ./assets/js/plugins/KimaiConfirmationLink.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiConfirmationLink; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");












function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * Needs to be initialized with a class name.
 *
 * Allows to assign the given selector to any element, which then is used as click-handler
 * calling an API method and trigger the event from data-event attribute afterwards.
 *
 * @param selector
 */

var KimaiConfirmationLink =
/*#__PURE__*/
function (_KimaiPlugin) {
  _inherits(KimaiConfirmationLink, _KimaiPlugin);

  function KimaiConfirmationLink(selector) {
    var _this;

    _classCallCheck(this, KimaiConfirmationLink);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(KimaiConfirmationLink).call(this));
    _this.selector = selector;
    return _this;
  }

  _createClass(KimaiConfirmationLink, [{
    key: "init",
    value: function init() {
      var self = this;
      document.addEventListener('click', function (event) {
        var target = event.target;

        while (target !== null && !target.matches('body')) {
          if (target.classList.contains(self.selector)) {
            (function () {
              var attributes = target.dataset; // is this a link? 

              var url = attributes['href']; // or another HTML element with a custom href 

              if (!url) {
                url = target.getAttribute('href');
              } // or is this a button?


              var form = null;

              if (target.type === 'submit' && target.form !== undefined) {
                form = target.form;
              }

              if (attributes.question !== undefined) {
                self.getContainer().getPlugin('alert').question(attributes.question, function (value) {
                  if (value) {
                    if (form === null) {
                      document.location = url;
                    } else {
                      if (url !== null) {
                        form.action = url;
                      }

                      form.submit();
                    }
                  }
                });
              }

              event.preventDefault();
              event.stopPropagation();
            })();
          }

          target = target.parentNode;
        }
      });
    }
  }]);

  return KimaiConfirmationLink;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_11__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiDatatable.js":
/*!*********************************************!*\
  !*** ./assets/js/plugins/KimaiDatatable.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiDatatable; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");
















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiDatatable: handles functionality for the datatable
 */



var KimaiDatatable =
/*#__PURE__*/
function (_KimaiPlugin) {
  _inherits(KimaiDatatable, _KimaiPlugin);

  function KimaiDatatable(contentAreaSelector, tableSelector) {
    var _this;

    _classCallCheck(this, KimaiDatatable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(KimaiDatatable).call(this));
    _this.contentArea = contentAreaSelector;
    _this.selector = tableSelector;
    return _this;
  }

  _createClass(KimaiDatatable, [{
    key: "getId",
    value: function getId() {
      return 'datatable';
    }
  }, {
    key: "init",
    value: function init() {
      var dataTable = document.querySelector(this.selector); // not every page contains a dataTable

      if (dataTable === null) {
        return;
      }

      var attributes = dataTable.dataset;
      var events = attributes['reloadEvent'];

      if (events === undefined) {
        return;
      }

      var self = this;

      var handle = function handle() {
        self.reloadDatatable();
      };

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = events.split(' ')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var eventName = _step.value;
          document.addEventListener(eventName, handle);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (this.getContainer().getConfiguration().get('autoReloadDatatable')) {
        document.addEventListener('toolbar-change', handle);
      } else {
        document.addEventListener('pagination-change', handle);
        document.addEventListener('filter-change', handle);
      }
    }
  }, {
    key: "reloadDatatable",
    value: function reloadDatatable() {
      var contentArea = this.contentArea;
      var durations = this.getContainer().getPlugin('timesheet-duration');
      var toolbarSelector = this.getContainer().getPlugin('toolbar').getSelector();
      var form = jquery__WEBPACK_IMPORTED_MODULE_15___default()(toolbarSelector);
      var loading = '<div class="overlay"><i class="fas fa-sync fa-spin"></i></div>';
      jquery__WEBPACK_IMPORTED_MODULE_15___default()(contentArea).append(loading); // remove the empty fields to prevent errors

      var formData = jquery__WEBPACK_IMPORTED_MODULE_15___default()(toolbarSelector + ' :input').filter(function (index, element) {
        return jquery__WEBPACK_IMPORTED_MODULE_15___default()(element).val() != '';
      }).serialize();
      jquery__WEBPACK_IMPORTED_MODULE_15___default.a.ajax({
        url: form.attr('action'),
        type: form.attr('method'),
        data: formData,
        success: function success(html) {
          jquery__WEBPACK_IMPORTED_MODULE_15___default()(contentArea).replaceWith(jquery__WEBPACK_IMPORTED_MODULE_15___default()(html).find(contentArea));
          durations.updateRecords();
        },
        error: function error(xhr, err) {
          form.submit();
        }
      });
    }
  }]);

  return KimaiDatatable;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_16__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiDatatableColumnView.js":
/*!*******************************************************!*\
  !*** ./assets/js/plugins/KimaiDatatableColumnView.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiDatatableColumnView; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");












function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiDatatableColumnView: manages the visibility of data-table columns in cookies
 */




var KimaiDatatableColumnView =
/*#__PURE__*/
function (_KimaiPlugin) {
  _inherits(KimaiDatatableColumnView, _KimaiPlugin);

  function KimaiDatatableColumnView(dataAttribute) {
    var _this;

    _classCallCheck(this, KimaiDatatableColumnView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(KimaiDatatableColumnView).call(this));
    _this.dataAttribute = dataAttribute;
    return _this;
  }

  _createClass(KimaiDatatableColumnView, [{
    key: "getId",
    value: function getId() {
      return 'datatable-column-visibility';
    }
  }, {
    key: "init",
    value: function init() {
      var dataTable = document.querySelector('[' + this.dataAttribute + ']');

      if (dataTable === null) {
        return;
      }

      this.id = dataTable.getAttribute(this.dataAttribute);
      this.modal = document.getElementById('modal_' + this.id);
      this.bindButtons();
    }
  }, {
    key: "bindButtons",
    value: function bindButtons() {
      var self = this;
      this.modal.querySelector('button[data-type=save]').addEventListener('click', function () {
        self.saveVisibility();
      });
      this.modal.querySelector('button[data-type=reset]').addEventListener('click', function () {
        self.resetVisibility();
      });
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var checkbox = _step.value;
          checkbox.addEventListener('click', function () {
            self.changeVisibility(checkbox.getAttribute('name'));
          });
        };

        for (var _iterator = this.modal.querySelectorAll('form input[type=checkbox]')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "saveVisibility",
    value: function saveVisibility() {
      var form = this.modal.getElementsByTagName('form')[0];
      var settings = {};
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = form.querySelectorAll('input[type=checkbox]')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var checkbox = _step2.value;
          settings[checkbox.getAttribute('name')] = checkbox.checked;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.set(form.getAttribute('name'), JSON.stringify(settings), {
        expires: 365
      });
      jquery__WEBPACK_IMPORTED_MODULE_12___default()(this.modal).modal('toggle');
    }
  }, {
    key: "resetVisibility",
    value: function resetVisibility() {
      var form = this.modal.getElementsByTagName('form')[0];
      js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.remove(form.getAttribute('name'));
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = form.querySelectorAll('input[type=checkbox]')[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var checkbox = _step3.value;

          if (!checkbox.checked) {
            checkbox.click();
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      jquery__WEBPACK_IMPORTED_MODULE_12___default()(this.modal).modal('toggle');
    }
  }, {
    key: "changeVisibility",
    value: function changeVisibility(columnName) {
      var table = document.getElementById('datatable_' + this.id).getElementsByClassName('dataTable')[0];
      var column = 0;
      var foundColumn = false;
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = table.getElementsByTagName('th')[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var columnElement = _step4.value;

          if (columnElement.getAttribute('data-field') === columnName) {
            foundColumn = true;
            break;
          }

          column++;
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
            _iterator4["return"]();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      if (!foundColumn) {
        return;
      }

      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = table.getElementsByTagName('tr')[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var rowElement = _step5.value;
          rowElement.children[column].classList.toggle('hidden');
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
            _iterator5["return"]();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }
    }
  }]);

  return KimaiDatatableColumnView;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_13__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiDatePicker.js":
/*!**********************************************!*\
  !*** ./assets/js/plugins/KimaiDatePicker.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiDatePicker; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);












function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiDatePicker: single date selects (currently unused)
 */




var KimaiDatePicker =
/*#__PURE__*/
function (_KimaiPlugin) {
  _inherits(KimaiDatePicker, _KimaiPlugin);

  function KimaiDatePicker(selector) {
    var _this;

    _classCallCheck(this, KimaiDatePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(KimaiDatePicker).call(this));
    _this.selector = selector;
    return _this;
  }

  _createClass(KimaiDatePicker, [{
    key: "getId",
    value: function getId() {
      return 'date-picker';
    }
  }, {
    key: "activateDatePicker",
    value: function activateDatePicker(selector) {
      var TRANSLATE = this.getContainer().getTranslation();
      var DATE_UTILS = this.getContainer().getPlugin('date');
      jquery__WEBPACK_IMPORTED_MODULE_11___default()(selector + ' ' + this.selector).each(function (index) {
        var localeFormat = jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).data('format');
        jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).daterangepicker({
          singleDatePicker: true,
          showDropdowns: true,
          autoUpdateInput: false,
          locale: {
            format: localeFormat,
            firstDay: moment__WEBPACK_IMPORTED_MODULE_13___default()().startOf('week').format('d'),
            applyLabel: TRANSLATE.get('confirm'),
            cancelLabel: TRANSLATE.get('cancel'),
            customRangeLabel: TRANSLATE.get('customRange'),
            daysOfWeek: DATE_UTILS.getWeekDaysShort(),
            monthNames: DATE_UTILS.getMonthNames()
          }
        });
        jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).on('apply.daterangepicker', function (ev, picker) {
          jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).val(picker.startDate.format(localeFormat));
          jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).trigger("change");
        });
      });
    }
  }, {
    key: "destroyDatePicker",
    value: function destroyDatePicker(selector) {
      jquery__WEBPACK_IMPORTED_MODULE_11___default()(selector + ' ' + this.selector).each(function (index) {
        if (jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).data('daterangepicker') !== undefined) {
          jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).daterangepicker('destroy');
          jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).data('daterangepicker').remove();
        }
      });
    }
  }]);

  return KimaiDatePicker;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_12__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiDateRangePicker.js":
/*!***************************************************!*\
  !*** ./assets/js/plugins/KimaiDateRangePicker.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiDateRangePicker; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);












function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiDateRangePicker: activate the (daterange picker) compound field in toolbar
 */




var KimaiDateRangePicker =
/*#__PURE__*/
function (_KimaiPlugin) {
  _inherits(KimaiDateRangePicker, _KimaiPlugin);

  function KimaiDateRangePicker(selector) {
    var _this;

    _classCallCheck(this, KimaiDateRangePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(KimaiDateRangePicker).call(this));
    _this.selector = selector;
    return _this;
  }

  _createClass(KimaiDateRangePicker, [{
    key: "getId",
    value: function getId() {
      return 'date-range-picker';
    }
  }, {
    key: "activateDateRangePicker",
    value: function activateDateRangePicker(selector) {
      var TRANSLATE = this.getContainer().getTranslation();
      var DATE_UTILS = this.getContainer().getPlugin('date');
      jquery__WEBPACK_IMPORTED_MODULE_11___default()(selector + ' ' + this.selector).each(function (index) {
        var localeFormat = jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).data('format');
        var separator = jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).data('separator');
        var rangesList = {};
        rangesList[TRANSLATE.get('today')] = [moment__WEBPACK_IMPORTED_MODULE_13___default()(), moment__WEBPACK_IMPORTED_MODULE_13___default()()];
        rangesList[TRANSLATE.get('yesterday')] = [moment__WEBPACK_IMPORTED_MODULE_13___default()().subtract(1, 'days'), moment__WEBPACK_IMPORTED_MODULE_13___default()().subtract(1, 'days')];
        rangesList[TRANSLATE.get('thisWeek')] = [moment__WEBPACK_IMPORTED_MODULE_13___default()().startOf('week'), moment__WEBPACK_IMPORTED_MODULE_13___default()().endOf('week')];
        rangesList[TRANSLATE.get('lastWeek')] = [moment__WEBPACK_IMPORTED_MODULE_13___default()().subtract(1, 'week').startOf('week'), moment__WEBPACK_IMPORTED_MODULE_13___default()().subtract(1, 'week').endOf('week')];
        rangesList[TRANSLATE.get('thisMonth')] = [moment__WEBPACK_IMPORTED_MODULE_13___default()().startOf('month'), moment__WEBPACK_IMPORTED_MODULE_13___default()().endOf('month')];
        rangesList[TRANSLATE.get('lastMonth')] = [moment__WEBPACK_IMPORTED_MODULE_13___default()().subtract(1, 'month').startOf('month'), moment__WEBPACK_IMPORTED_MODULE_13___default()().subtract(1, 'month').endOf('month')];
        rangesList[TRANSLATE.get('thisYear')] = [moment__WEBPACK_IMPORTED_MODULE_13___default()().startOf('year'), moment__WEBPACK_IMPORTED_MODULE_13___default()().endOf('year')];
        rangesList[TRANSLATE.get('lastYear')] = [moment__WEBPACK_IMPORTED_MODULE_13___default()().subtract(1, 'year').startOf('year'), moment__WEBPACK_IMPORTED_MODULE_13___default()().subtract(1, 'year').endOf('year')];
        jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).daterangepicker({
          showDropdowns: true,
          autoUpdateInput: false,
          autoApply: false,
          linkedCalendars: false,
          locale: {
            separator: separator,
            format: localeFormat,
            firstDay: moment__WEBPACK_IMPORTED_MODULE_13___default()().startOf('week').format('d'),
            applyLabel: TRANSLATE.get('confirm'),
            cancelLabel: TRANSLATE.get('cancel'),
            customRangeLabel: TRANSLATE.get('customRange'),
            daysOfWeek: DATE_UTILS.getWeekDaysShort(),
            monthNames: DATE_UTILS.getMonthNames()
          },
          ranges: rangesList,
          alwaysShowCalendars: true
        });
        jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).on('apply.daterangepicker', function (ev, picker) {
          jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).val(picker.startDate.format(localeFormat) + ' - ' + picker.endDate.format(localeFormat));
          jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).data('begin', picker.startDate.format(localeFormat));
          jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).data('end', picker.endDate.format(localeFormat));
          jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).trigger("change");
        });
      });
    }
  }, {
    key: "destroyDateRangePicker",
    value: function destroyDateRangePicker(selector) {
      jquery__WEBPACK_IMPORTED_MODULE_11___default()(selector + ' ' + this.selector).each(function (index) {
        if (jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).data('daterangepicker') !== undefined) {
          jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).daterangepicker('destroy');
          jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).data('daterangepicker').remove();
        }
      });
    }
  }]);

  return KimaiDateRangePicker;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_12__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiDateTimePicker.js":
/*!**************************************************!*\
  !*** ./assets/js/plugins/KimaiDateTimePicker.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiDateTimePicker; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");












function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiDateTimePicker: activate the (datetime picker) field in timesheet edit dialog
 */



var KimaiDateTimePicker =
/*#__PURE__*/
function (_KimaiPlugin) {
  _inherits(KimaiDateTimePicker, _KimaiPlugin);

  function KimaiDateTimePicker(selector) {
    var _this;

    _classCallCheck(this, KimaiDateTimePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(KimaiDateTimePicker).call(this));
    _this.selector = selector;
    return _this;
  }

  _createClass(KimaiDateTimePicker, [{
    key: "getId",
    value: function getId() {
      return 'date-time-picker';
    }
  }, {
    key: "activateDateTimePicker",
    value: function activateDateTimePicker(selector) {
      var TRANSLATE = this.getContainer().getTranslation();
      var CONFIG = this.getContainer().getConfiguration();
      var DATE_UTILS = this.getContainer().getPlugin('date');
      jquery__WEBPACK_IMPORTED_MODULE_11___default()(selector + ' ' + this.selector).each(function (index) {
        var localeFormat = jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).data('format');
        jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).daterangepicker({
          singleDatePicker: true,
          timePicker: true,
          timePicker24Hour: CONFIG.get('twentyFourHours'),
          showDropdowns: true,
          autoUpdateInput: false,
          locale: {
            format: localeFormat,
            firstDay: moment().startOf('week').format('d'),
            applyLabel: TRANSLATE.get('confirm'),
            cancelLabel: TRANSLATE.get('cancel'),
            customRangeLabel: TRANSLATE.get('customRange'),
            daysOfWeek: DATE_UTILS.getWeekDaysShort(),
            monthNames: DATE_UTILS.getMonthNames()
          }
        });
        jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).on('apply.daterangepicker', function (ev, picker) {
          jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).val(picker.startDate.format(localeFormat));
          jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).trigger("change");
        });
      });
    }
  }, {
    key: "destroyDateTimePicker",
    value: function destroyDateTimePicker(selector) {
      jquery__WEBPACK_IMPORTED_MODULE_11___default()(selector + ' ' + this.selector).each(function (index) {
        if (jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).data('daterangepicker') !== undefined) {
          jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).daterangepicker('destroy');
          jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).data('daterangepicker').remove();
        }
      });
    }
  }]);

  return KimaiDateTimePicker;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_12__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiDateUtils.js":
/*!*********************************************!*\
  !*** ./assets/js/plugins/KimaiDateUtils.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiDateUtils; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);












function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiDateUtils: responsible for handling date specific tasks
 */



var KimaiDateUtils =
/*#__PURE__*/
function (_KimaiPlugin) {
  _inherits(KimaiDateUtils, _KimaiPlugin);

  function KimaiDateUtils() {
    _classCallCheck(this, KimaiDateUtils);

    return _possibleConstructorReturn(this, _getPrototypeOf(KimaiDateUtils).apply(this, arguments));
  }

  _createClass(KimaiDateUtils, [{
    key: "getId",
    value: function getId() {
      return 'date';
    }
  }, {
    key: "getWeekDaysShort",
    value: function getWeekDaysShort() {
      return moment__WEBPACK_IMPORTED_MODULE_12___default.a.localeData().weekdaysShort();
    }
  }, {
    key: "getMonthNames",
    value: function getMonthNames() {
      return moment__WEBPACK_IMPORTED_MODULE_12___default.a.localeData().months();
    }
  }]);

  return KimaiDateUtils;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_11__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiEvent.js":
/*!*****************************************!*\
  !*** ./assets/js/plugins/KimaiEvent.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiEvent; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");














function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiEvent: helper to trigger events
 */


var KimaiEvent =
/*#__PURE__*/
function (_KimaiPlugin) {
  _inherits(KimaiEvent, _KimaiPlugin);

  function KimaiEvent() {
    _classCallCheck(this, KimaiEvent);

    return _possibleConstructorReturn(this, _getPrototypeOf(KimaiEvent).apply(this, arguments));
  }

  _createClass(KimaiEvent, [{
    key: "getId",
    value: function getId() {
      return 'event';
    }
  }, {
    key: "trigger",
    value: function trigger(name, details) {
      if (name === null || name === undefined) {
        return;
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = name.split(' ')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var event = _step.value;
          var triggerEvent = new Event(event);

          if (details !== undefined) {
            triggerEvent = new CustomEvent(name, {
              detail: details
            });
          }

          document.dispatchEvent(triggerEvent);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);

  return KimaiEvent;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_13__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiForm.js":
/*!****************************************!*\
  !*** ./assets/js/plugins/KimaiForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiForm; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");












function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiForm: basic functions for all forms
 */


var KimaiForm =
/*#__PURE__*/
function (_KimaiPlugin) {
  _inherits(KimaiForm, _KimaiPlugin);

  function KimaiForm() {
    _classCallCheck(this, KimaiForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(KimaiForm).apply(this, arguments));
  }

  _createClass(KimaiForm, [{
    key: "getId",
    value: function getId() {
      return 'form';
    }
  }, {
    key: "activateForm",
    value: function activateForm(formSelector, container) {
      this.getContainer().getPlugin('date-range-picker').activateDateRangePicker(formSelector);
      this.getContainer().getPlugin('date-time-picker').activateDateTimePicker(formSelector);
      this.getContainer().getPlugin('date-picker').activateDatePicker(formSelector);
      this.getContainer().getPlugin('autocomplete').activateAutocomplete(formSelector);
      this.getContainer().getPlugin('form-select').activateSelectPicker(formSelector, container);
    }
  }, {
    key: "destroyForm",
    value: function destroyForm(formSelector) {
      this.getContainer().getPlugin('form-select').destroySelectPicker(formSelector);
      this.getContainer().getPlugin('autocomplete').destroyAutocomplete(formSelector);
      this.getContainer().getPlugin('date-picker').destroyDatePicker(formSelector);
      this.getContainer().getPlugin('date-time-picker').destroyDateTimePicker(formSelector);
      this.getContainer().getPlugin('date-range-picker').destroyDateRangePicker(formSelector);
    }
  }]);

  return KimaiForm;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_11__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiFormSelect.js":
/*!**********************************************!*\
  !*** ./assets/js/plugins/KimaiFormSelect.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiFormSelect; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.splice */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.define-properties */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.entries */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_33__);

































function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiFormSelect: enhanced functionality for HTML select's
 */



var KimaiFormSelect =
/*#__PURE__*/
function (_KimaiPlugin) {
  _inherits(KimaiFormSelect, _KimaiPlugin);

  function KimaiFormSelect(selector) {
    var _this;

    _classCallCheck(this, KimaiFormSelect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(KimaiFormSelect).call(this));
    _this.selector = selector;
    return _this;
  }

  _createClass(KimaiFormSelect, [{
    key: "getId",
    value: function getId() {
      return 'form-select';
    }
  }, {
    key: "activateSelectPicker",
    value: function activateSelectPicker(selector, container) {
      var elementSelector = this.selector;
      var options = {};

      if (container !== undefined) {
        options = {
          dropdownParent: $(container)
        };
      } // Function to match the name of the parent and not only the names of the children
      // Based on the original matcher function of Select2: https://github.com/select2/select2/blob/5765090318c4d382ae56463cfa25ba8ca7bdd495/src/js/select2/defaults.js#L272
      // More information: https://select2.org/searching | https://github.com/select2/docs/blob/develop/pages/11.searching/docs.md


      function matcher(params, data) {
        // Always return the object if there is nothing to compare
        if (jquery__WEBPACK_IMPORTED_MODULE_33___default.a.trim(params.term) === '') {
          return data;
        } // Check whether options has children


        var hasChildren = data.children && data.children.length > 0; // Split search param by space to search for all terms and convert all to uppercase

        var terms = params.term.toUpperCase().split(' ');
        var original = data.text.toUpperCase(); // Always return the parent option including its children, when the name matches one of the params
        // Check if the text contains all or at least one of the terms

        var foundAll = true;
        var foundOne = false;
        var missingTerms = [];
        terms.forEach(function (item, index) {
          if (original.indexOf(item) > -1) {
            foundOne = true;
          } else {
            foundAll = false;
            missingTerms.push(item);
          }
        }); // If the option element contains all terms, return it

        if (foundAll) {
          return data;
        } // Do a recursive check for options with children


        if (hasChildren) {
          // If the parent already contains one or more search terms, proceed only with the missing ones
          // First: Clone the original params object...
          var newParams = jquery__WEBPACK_IMPORTED_MODULE_33___default.a.extend(true, {}, params);

          if (foundOne) {
            newParams.term = missingTerms.join(' ');
          } else {
            newParams.term = params.term;
          } // Clone the data object if there are children
          // This is required as we modify the object to remove any non-matches


          var match = jquery__WEBPACK_IMPORTED_MODULE_33___default.a.extend(true, {}, data); // Check each child of the option

          for (var c = data.children.length - 1; c >= 0; c--) {
            var child = data.children[c];
            var matches = matcher(newParams, child); // If there wasn't a match, remove the object in the array

            if (matches === null) {
              match.children.splice(c, 1);
            }
          } // If any children matched, return the new object


          if (match.children.length > 0) {
            return match;
          }
        } // If the option or its children do not contain the term, don't return anything


        return null;
      }

      options = _objectSpread({}, options, {}, {
        language: this.getContainer().getConfiguration().get('locale').replace('_', '-'),
        theme: "bootstrap",
        matcher: matcher
      });
      jquery__WEBPACK_IMPORTED_MODULE_33___default()(selector + ' ' + elementSelector).select2(options);
      jquery__WEBPACK_IMPORTED_MODULE_33___default()('body').on('reset', 'form', function (event) {
        setTimeout(function () {
          jquery__WEBPACK_IMPORTED_MODULE_33___default()(event.target).find(elementSelector).trigger('change');
        }, 10);
      });
    }
  }, {
    key: "destroySelectPicker",
    value: function destroySelectPicker(selector) {
      jquery__WEBPACK_IMPORTED_MODULE_33___default()(selector + ' ' + this.selector).select2('destroy');
    }
  }, {
    key: "updateOptions",
    value: function updateOptions(selectIdentifier, data) {
      var select = jquery__WEBPACK_IMPORTED_MODULE_33___default()(selectIdentifier);
      var emptyOption = jquery__WEBPACK_IMPORTED_MODULE_33___default()(selectIdentifier + ' option[value=""]');
      var selectedValue = select.val();
      select.find('option').remove().end().find('optgroup').remove().end();

      if (emptyOption.length !== 0) {
        select.append('<option value="">' + emptyOption.text() + '</option>');
      }

      var htmlOptions = '';
      var emptyOptions = '';

      for (var _i = 0, _Object$entries = Object.entries(data); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        if (key === '__empty__') {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = value[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var entity = _step.value;
              emptyOptions += '<option value="' + entity.id + '">' + entity.name + '</option>';
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          continue;
        }

        htmlOptions += '<optgroup label="' + key + '">';
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = value[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _entity = _step2.value;
            htmlOptions += '<option value="' + _entity.id + '">' + _entity.name + '</option>';
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
              _iterator2["return"]();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        htmlOptions += '</optgroup>';
      }

      select.append(htmlOptions);
      select.append(emptyOptions); // if available, re-select the previous selected option (mostly usable for global activities)

      select.val(selectedValue); // if we don't trigger the change, the other selects won't reset

      select.trigger('change'); // if select2 is active, this will tell the select to refresh

      if (select.hasClass('selectpicker')) {
        select.trigger('change.select2');
      }
    }
  }]);

  return KimaiFormSelect;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_32__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/plugins/KimaiMultiUpdateTable.js":
/*!****************************************************!*\
  !*** ./assets/js/plugins/KimaiMultiUpdateTable.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiMultiUpdateTable; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_15__);















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiMultiUpdateForm: handle the multi update checkbox list and form
 */



var KimaiMultiUpdateTable =
/*#__PURE__*/
function (_KimaiPlugin) {
  _inherits(KimaiMultiUpdateTable, _KimaiPlugin);

  function KimaiMultiUpdateTable() {
    _classCallCheck(this, KimaiMultiUpdateTable);

    return _possibleConstructorReturn(this, _getPrototypeOf(KimaiMultiUpdateTable).apply(this, arguments));
  }

  _createClass(KimaiMultiUpdateTable, [{
    key: "init",
    value: function init() {
      var self = this;
      jquery__WEBPACK_IMPORTED_MODULE_15___default()('body').on('change', '#multi_update_all', function (event) {
        jquery__WEBPACK_IMPORTED_MODULE_15___default()('.multi_update_single').prop('checked', jquery__WEBPACK_IMPORTED_MODULE_15___default()(event.target).prop('checked'));
        self.toggleForm();
      }).on('change', '.multi_update_single', function (event) {
        self.toggleForm();
      }).on('change', '#multi_update_table_action', function (event) {
        var selectedItem = jquery__WEBPACK_IMPORTED_MODULE_15___default()('#multi_update_table_action option:selected');
        var selectedVal = selectedItem.val();

        if (selectedVal === '') {
          return;
        }

        var form = jquery__WEBPACK_IMPORTED_MODULE_15___default()('#multi_update_form form');
        var selectedText = selectedItem.text();
        var ids = self.getSelectedIds();
        var question = form.attr('data-question').replace(/%action%/, selectedText).replace(/%count%/, ids.length);
        self.getContainer().getPlugin('alert').question(question, function (value) {
          if (value) {
            form.attr('action', selectedVal).submit();
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_15___default()('#multi_update_table_action').val('').trigger('change');
          }
        });
      });
    }
  }, {
    key: "getSelectedIds",
    value: function getSelectedIds() {
      var ids = [];
      jquery__WEBPACK_IMPORTED_MODULE_15___default()('.multi_update_single:checked').each(function (i) {
        ids[i] = $(this).val();
      });
      return ids;
    }
  }, {
    key: "toggleForm",
    value: function toggleForm() {
      var ids = this.getSelectedIds();
      jquery__WEBPACK_IMPORTED_MODULE_15___default()('#multi_update_table_entities').val(ids.join(','));

      if (ids.length > 0) {
        jquery__WEBPACK_IMPORTED_MODULE_15___default()('#multi_update_form').show();
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_15___default()('#multi_update_form').hide();
      }
    }
  }]);

  return KimaiMultiUpdateTable;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_14__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/plugins/KimaiRecentActivities.js":
/*!****************************************************!*\
  !*** ./assets/js/plugins/KimaiRecentActivities.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiRecentActivities; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");

















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiRecentActivities: responsible to reload the users recent activities
 */


var KimaiRecentActivities =
/*#__PURE__*/
function (_KimaiPlugin) {
  _inherits(KimaiRecentActivities, _KimaiPlugin);

  function KimaiRecentActivities(selector) {
    var _this;

    _classCallCheck(this, KimaiRecentActivities);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(KimaiRecentActivities).call(this));
    _this.selector = selector;
    return _this;
  }

  _createClass(KimaiRecentActivities, [{
    key: "getId",
    value: function getId() {
      return 'recent-activities';
    }
  }, {
    key: "init",
    value: function init() {
      var menu = document.querySelector(this.selector); // the menu can be hidden if user has no permissions to see it

      if (menu === null) {
        return;
      }

      var dropdown = menu.querySelector('ul.dropdown-menu');
      this.attributes = dropdown.dataset;
      this.itemList = dropdown.querySelector('li > ul.menu');
      var self = this;

      var handle = function handle() {
        self.reloadRecentActivities();
      }; // don't block initial browser rendering


      setTimeout(handle, 500);
      document.addEventListener('kimai.timesheetStop', handle);
      document.addEventListener('kimai.activityUpdate', handle);
      document.addEventListener('kimai.projectUpdate', handle);
      document.addEventListener('kimai.customerUpdate', handle);
    }
  }, {
    key: "emptyList",
    value: function emptyList() {
      this.itemList.innerHTML = '';
    }
  }, {
    key: "setEntries",
    value: function setEntries(entries) {
      if (entries.length === 0) {
        this.emptyList();
        return;
      }

      var htmlToInsert = '';
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var timesheet = _step.value;
          var label = this.attributes['template'].replace('%customer%', timesheet.project.customer.name).replace('%project%', timesheet.project.name).replace('%activity%', timesheet.activity.name);
          htmlToInsert += "<li>" + "<a href=\"".concat(this.attributes['href'].replace('000', timesheet.id), "\" data-event=\"kimai.timesheetStart kimai.timesheetUpdate\" class=\"api-link\" data-method=\"PATCH\" data-msg-error=\"timesheet.start.error\" data-msg-success=\"timesheet.start.success\">") + "<i class=\"".concat(this.attributes['icon'], "\"></i> ").concat(label) + "</a>" + "</li>";
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.itemList.innerHTML = htmlToInsert;
    }
  }, {
    key: "reloadRecentActivities",
    value: function reloadRecentActivities() {
      var self = this;
      var API = this.getContainer().getPlugin('api');
      API.get(this.attributes['api'], {}, function (result) {
        self.setEntries(result);
      });
    }
  }]);

  return KimaiRecentActivities;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_16__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiReducedClickHandler.js":
/*!*******************************************************!*\
  !*** ./assets/js/plugins/KimaiReducedClickHandler.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiReducedClickHandler; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");












function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiReducedClickHandler: abstract class
 */



var KimaiReducedClickHandler =
/*#__PURE__*/
function (_KimaiPlugin) {
  _inherits(KimaiReducedClickHandler, _KimaiPlugin);

  function KimaiReducedClickHandler() {
    _classCallCheck(this, KimaiReducedClickHandler);

    return _possibleConstructorReturn(this, _getPrototypeOf(KimaiReducedClickHandler).apply(this, arguments));
  }

  _createClass(KimaiReducedClickHandler, [{
    key: "_addClickHandler",
    value: function _addClickHandler(selector, callback) {
      jquery__WEBPACK_IMPORTED_MODULE_11___default()('body').on('click', selector, function (event) {
        // just in case an inner element is editable, than this should not be triggered
        if (event.target.parentNode.isContentEditable || event.target.isContentEditable) {
          return;
        } // handles the "click" on table rows or list elements


        var target = event.target;

        if (event.currentTarget.matches('tr') || event.currentTarget.matches('li')) {
          while (target !== null && !target.matches('body')) {
            // when an element within the row is clicked, that can trigger stuff itself, we don't want the event to be processed
            // don't act if a link, button or form element was clicked
            if (target.matches('a') || target.matches('button') || target.matches('input')) {
              return;
            }

            target = target.parentNode;
          }
        }

        event.preventDefault();
        event.stopPropagation();
        var href = jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).attr('data-href');

        if (!href) {
          href = jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).attr('href');
        }

        callback(href);
      });
    }
  }]);

  return KimaiReducedClickHandler;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_12__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiSelectDataAPI.js":
/*!*************************************************!*\
  !*** ./assets/js/plugins/KimaiSelectDataAPI.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiSelectDataAPI; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_25__);
























function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiSelectDataAPI: <select> boxes with dynamic data from API
 */




var KimaiSelectDataAPI =
/*#__PURE__*/
function (_KimaiPlugin) {
  _inherits(KimaiSelectDataAPI, _KimaiPlugin);

  function KimaiSelectDataAPI(selector) {
    var _this;

    _classCallCheck(this, KimaiSelectDataAPI);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(KimaiSelectDataAPI).call(this));
    _this.selector = selector;
    return _this;
  }

  _createClass(KimaiSelectDataAPI, [{
    key: "getId",
    value: function getId() {
      return 'select-data-api';
    }
  }, {
    key: "init",
    value: function init() {
      this.activateApiSelects(this.selector);
    }
  }, {
    key: "activateApiSelects",
    value: function activateApiSelects(selector) {
      var self = this;
      var API = this.getContainer().getPlugin('api');
      jquery__WEBPACK_IMPORTED_MODULE_23___default()('body').on('change', selector, function (event) {
        var targetSelect = '#' + this.dataset['relatedSelect']; // if the related target select does not exist, we do not need to load the related data

        if (jquery__WEBPACK_IMPORTED_MODULE_23___default()(targetSelect).length === 0) {
          return;
        }

        var formPrefix = jquery__WEBPACK_IMPORTED_MODULE_23___default()(this).parents('form').first().attr('name');

        if (formPrefix === undefined || formPrefix === null) {
          formPrefix = '';
        } else {
          formPrefix += '_';
        }

        var newApiUrl = self._buildUrlWithFormFields(this.dataset['apiUrl'], formPrefix);

        var selectValue = jquery__WEBPACK_IMPORTED_MODULE_23___default()(this).val();

        if (selectValue === '' || Array.isArray(selectValue) && selectValue.length === 0) {
          if (this.dataset['emptyUrl'] === undefined) {
            self._updateSelect(targetSelect, {});

            jquery__WEBPACK_IMPORTED_MODULE_23___default()(targetSelect).attr('disabled', 'disabled');
            return;
          }

          newApiUrl = self._buildUrlWithFormFields(this.dataset['emptyUrl'], formPrefix);
        }

        jquery__WEBPACK_IMPORTED_MODULE_23___default()(targetSelect).removeAttr('disabled');
        API.get(newApiUrl, {}, function (data) {
          self._updateSelect(targetSelect, data);
        });
      });
    }
  }, {
    key: "_buildUrlWithFormFields",
    value: function _buildUrlWithFormFields(apiUrl, formPrefix) {
      var newApiUrl = apiUrl;
      apiUrl.split('?')[1].split('&').forEach(function (item) {
        var _item$split = item.split('='),
            _item$split2 = _slicedToArray(_item$split, 2),
            key = _item$split2[0],
            value = _item$split2[1];

        var decoded = decodeURIComponent(value);
        var test = decoded.match(/%(.*)%/);

        if (test !== null) {
          var targetField = jquery__WEBPACK_IMPORTED_MODULE_23___default()('#' + formPrefix + test[1]);
          var newValue = '';

          if (targetField.length === 0) {// debug: this case for example happens in duration only mode, when the end field is not found
            //console.log('ERROR: Cannot find field with name "' + test[1] + '" by selector: #' + formPrefix + test[1]);
          } else {
            if (targetField.val() !== null) {
              newValue = targetField.val();

              if (newValue !== '') {
                // having that special case here is far from being perfect... but for now it works ;-)
                if (targetField.data('daterangepicker') !== undefined) {
                  if (key === 'begin' || key === 'start' || targetField.data('daterangepicker').singleDatePicker) {
                    newValue = targetField.data('daterangepicker').startDate.format(moment__WEBPACK_IMPORTED_MODULE_25___default.a.HTML5_FMT.DATETIME_LOCAL_SECONDS);
                  } else if (key === 'end') {
                    newValue = targetField.data('daterangepicker').endDate.format(moment__WEBPACK_IMPORTED_MODULE_25___default.a.HTML5_FMT.DATETIME_LOCAL_SECONDS);
                  }
                } else if (targetField.data('format') !== undefined) {
                  if (moment__WEBPACK_IMPORTED_MODULE_25___default()(newValue, targetField.data('format')).isValid()) {
                    newValue = moment__WEBPACK_IMPORTED_MODULE_25___default()(newValue, targetField.data('format')).format(moment__WEBPACK_IMPORTED_MODULE_25___default.a.HTML5_FMT.DATETIME_LOCAL_SECONDS);
                  }
                }
              }
            }
          }

          if (Array.isArray(newValue)) {
            newValue = newValue.join(',');
          }

          newApiUrl = newApiUrl.replace(value, newValue);
        }
      });
      return newApiUrl;
    }
  }, {
    key: "_updateSelect",
    value: function _updateSelect(selectName, data) {
      var options = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var apiData = _step.value;
          var title = '__empty__';

          if (apiData.hasOwnProperty('parentTitle') && apiData.parentTitle !== null) {
            title = apiData.parentTitle;
          }

          if (!options.hasOwnProperty(title)) {
            options[title] = [];
          }

          options[title].push(apiData);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var ordered = {};
      Object.keys(options).sort().forEach(function (key) {
        ordered[key] = options[key];
      });
      this.getContainer().getPlugin('form-select').updateOptions(selectName, ordered);
    }
  }]);

  return KimaiSelectDataAPI;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_24__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiThemeInitializer.js":
/*!****************************************************!*\
  !*** ./assets/js/plugins/KimaiThemeInitializer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiThemeInitializer; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiThemeInitializer: initialize theme functionality
 */



var KimaiThemeInitializer =
/*#__PURE__*/
function (_KimaiPlugin) {
  _inherits(KimaiThemeInitializer, _KimaiPlugin);

  function KimaiThemeInitializer() {
    _classCallCheck(this, KimaiThemeInitializer);

    return _possibleConstructorReturn(this, _getPrototypeOf(KimaiThemeInitializer).apply(this, arguments));
  }

  _createClass(KimaiThemeInitializer, [{
    key: "init",
    value: function init() {
      this.registerGlobalAjaxErrorHandler();
      this.registerAutomaticAlertRemove('div.alert-success', 5000); // activate the dropdown functionality

      jquery__WEBPACK_IMPORTED_MODULE_14___default()('.dropdown-toggle').dropdown(); // activate the tooltip functionality

      jquery__WEBPACK_IMPORTED_MODULE_14___default()('[data-toggle="tooltip"]').tooltip(); // activate all form plugins

      this.getContainer().getPlugin('form').activateForm('.content-wrapper form', 'body');
    }
    /**
     * redirect access denied / session timeouts to login page
     */

  }, {
    key: "registerGlobalAjaxErrorHandler",
    value: function registerGlobalAjaxErrorHandler() {
      var loginUrl = this.getContainer().getConfiguration().get('login');
      var alert = this.getContainer().getPlugin('alert');
      var translation = this.getContainer().getTranslation().get('login.required');
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).ajaxError(function (event, jqxhr, settings, thrownError) {
        if (jqxhr.status !== undefined && jqxhr.status === 403) {
          var loginRequired = jqxhr.getResponseHeader('login-required');

          if (loginRequired !== null) {
            alert.question(translation, function (result) {
              if (result === true) {
                window.location.replace(loginUrl);
              }
            });
          }
        }
      });
    }
    /**
     * auto hide success messages, as they are just meant as user feedback and not as a permanent information
     *
     * @param {string} selector
     * @param {integer} interval
     */

  }, {
    key: "registerAutomaticAlertRemove",
    value: function registerAutomaticAlertRemove(selector, interval) {
      var self = this;
      this._alertRemoveHandler = setInterval(function () {
        self.hideAlert(selector);
      }, interval);
    }
  }, {
    key: "unregisterAutomaticAlertRemove",
    value: function unregisterAutomaticAlertRemove() {
      clearInterval(this._alertRemoveHandler);
    }
    /**
     * @param {string} selector
     */

  }, {
    key: "hideAlert",
    value: function hideAlert(selector) {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(selector).alert('close');
    }
  }]);

  return KimaiThemeInitializer;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_15__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiToolbar.js":
/*!*******************************************!*\
  !*** ./assets/js/plugins/KimaiToolbar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiToolbar; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");














function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiToolbar: some event listener to handle the toolbar/data-table filter, toolbar and navigation
 */



var KimaiToolbar =
/*#__PURE__*/
function (_KimaiPlugin) {
  _inherits(KimaiToolbar, _KimaiPlugin);

  function KimaiToolbar(formSelector, formSubmitActionClass) {
    var _this;

    _classCallCheck(this, KimaiToolbar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(KimaiToolbar).call(this));
    _this.formSelector = formSelector;
    _this.actionClass = formSubmitActionClass;
    return _this;
  }

  _createClass(KimaiToolbar, [{
    key: "getId",
    value: function getId() {
      return 'toolbar';
    }
  }, {
    key: "init",
    value: function init() {
      var formSelector = this.getSelector();
      var self = this;
      var EVENT = self.getContainer().getPlugin('event');

      this._registerPagination(formSelector, EVENT);

      this._registerSortableTables(formSelector, EVENT);

      this._registerAlternativeSubmitActions(formSelector, this.actionClass);

      this._registerSearchButtons(formSelector);

      jquery__WEBPACK_IMPORTED_MODULE_13___default()('body') // prevent that the dropdown closes, when a form input is changed - eg. a select option was clicked
      .on('click', formSelector + ' .dropdown-menu', function (event) {
        event.stopPropagation();
      }) // prevent that a click into the search field will close the dropdown
      .on('click', '.select2-search__field', function (event) {
        event.stopPropagation();
      }) // prevent that the dropdown closes when a optgroup header is clicked
      .on('click', '.select2-results__group', function (event) {
        event.stopPropagation();
      }) // prevent that a click into a daterangepicker will close the dropdown
      .on('click', '.daterangepicker', function (event) {
        event.stopPropagation();
      }) // prevent that clicks in the dropdown elements, but outside of elements will close the dropdown (eg border besides the search field)
      .on('click', '.select2-container', function (event) {
        event.stopPropagation();
      }); // Reset the page if filter values are changed, otherwise we might end up with a limited set of data, 
      // which does not support the given page - and it would be just wrong to stay in the same page

      jquery__WEBPACK_IMPORTED_MODULE_13___default()(formSelector + ' input').change(function (event) {
        switch (event.target.id) {
          case 'order':
          case 'orderBy':
          case 'page':
            break;

          default:
            jquery__WEBPACK_IMPORTED_MODULE_13___default()(formSelector + ' input#page').val(1);
            break;
        }

        self.triggerChange();
      }); // when user selected a new customer or project, reset the pagination back to 1
      // and then find out if the results should be reloaded

      jquery__WEBPACK_IMPORTED_MODULE_13___default()(formSelector + ' select').change(function (event) {
        var reload = true;

        switch (event.target.id) {
          case 'customer':
            if (jquery__WEBPACK_IMPORTED_MODULE_13___default()(formSelector + ' select#project').length > 0) {
              reload = false;
            }

            break;

          case 'project':
            if (jquery__WEBPACK_IMPORTED_MODULE_13___default()(formSelector + ' select#activity').length > 0) {
              reload = false;
            }

            break;
        }

        jquery__WEBPACK_IMPORTED_MODULE_13___default()(formSelector + ' input#page').val(1);

        if (reload) {
          self.triggerChange();
        }
      }); // close all open selectpicker upon choosing any dropdown option

      jquery__WEBPACK_IMPORTED_MODULE_13___default()(formSelector + ' select.selectpicker').on('change', function (event) {
        jquery__WEBPACK_IMPORTED_MODULE_13___default()('.bootstrap-select.open').removeClass('open');
      });
    }
    /**
     * The search toggle button is not part of this component, but it is directly connected to it.
     * @private
     */

  }, {
    key: "_registerSearchButtons",
    value: function _registerSearchButtons(formSelector) {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('body') // only for mobile experience currently: show the search form field
      .on('click', '.btn-search.search-toggle', function (event) {
        event.preventDefault();
        event.stopPropagation();
        jquery__WEBPACK_IMPORTED_MODULE_13___default()(formSelector).parent('section').toggleClass('search-open');
        jquery__WEBPACK_IMPORTED_MODULE_13___default()(formSelector).toggleClass('hidden-xs');
        jquery__WEBPACK_IMPORTED_MODULE_13___default()(formSelector + ' input#searchTerm').dropdown('toggle');
        jquery__WEBPACK_IMPORTED_MODULE_13___default()(formSelector + ' input#searchTerm').focus();
      }) // hide the search form field
      .on('click', formSelector + ' a.search-cancel', function (event) {
        event.preventDefault();
        event.stopPropagation();
        jquery__WEBPACK_IMPORTED_MODULE_13___default()(formSelector).parent('section').toggleClass('search-open');
        jquery__WEBPACK_IMPORTED_MODULE_13___default()(formSelector + ' input#searchTerm').dropdown('toggle');
        jquery__WEBPACK_IMPORTED_MODULE_13___default()(formSelector).toggleClass('hidden-xs');
      });
    }
    /**
     * Some actions utilize the filter from the search form and submit it to another URL.
     * @private
     */

  }, {
    key: "_registerAlternativeSubmitActions",
    value: function _registerAlternativeSubmitActions(toolbarSelector, actionBtnClass) {
      document.addEventListener('click', function (event) {
        var target = event.target;

        while (target !== null && !target.matches('body')) {
          if (target.classList.contains(actionBtnClass)) {
            var form = document.querySelector(toolbarSelector);

            if (form === null) {
              return;
            }

            var prevAction = form.action;
            var prevMethod = form.method;
            form.target = '_blank';
            form.action = target.href;

            if (target.dataset.method !== undefined) {
              form.method = target.dataset.method;
            }

            form.submit();
            form.target = '';
            form.action = prevAction;
            form.method = prevMethod;
            event.preventDefault();
            event.stopPropagation();
          }

          target = target.parentNode;
        }
      });
    }
    /**
     * Sortable datatables use hidden fields in the toolbar filter/search form
     * @private
     */

  }, {
    key: "_registerSortableTables",
    value: function _registerSortableTables(formSelector, EVENT) {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('body').on('click', 'th.sortable', function (event) {
        var $header = jquery__WEBPACK_IMPORTED_MODULE_13___default()(event.target);
        var order = 'DESC';
        var orderBy = $header.data('order');

        if ($header.hasClass('sorting_desc')) {
          order = 'ASC';
        }

        jquery__WEBPACK_IMPORTED_MODULE_13___default()(formSelector + ' input#orderBy').val(orderBy);
        jquery__WEBPACK_IMPORTED_MODULE_13___default()(formSelector + ' input#order').val(order); // triggers the page reset - see below

        jquery__WEBPACK_IMPORTED_MODULE_13___default()(formSelector + ' input#order').trigger('change'); // triggers the datatable reload - search for the event name

        EVENT.trigger('filter-change');
      });
    }
    /**
     * This catches all clicks on the pagination and prevents the default action, as we want to reload the page via JS
     * @private
     */

  }, {
    key: "_registerPagination",
    value: function _registerPagination(formSelector, EVENT) {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('body').on('click', 'div.navigation ul.pagination li a', function (event) {
        var pager = jquery__WEBPACK_IMPORTED_MODULE_13___default()(formSelector + " input#page");

        if (pager.length === 0) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();
        var urlParts = jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).attr('href').split('/');
        var page = urlParts[urlParts.length - 1];
        pager.val(page);
        pager.trigger('change');
        EVENT.trigger('pagination-change');
        return false;
      });
    }
  }, {
    key: "hide",
    value: function hide() {
      var toggle = jquery__WEBPACK_IMPORTED_MODULE_13___default()(this.getSelector() + ' #searchTerm.dropdown-toggle');

      if (toggle.parent().hasClass('open')) {
        toggle.dropdown('toggle');
      }
    }
    /**
     * Triggers an event, that everyone can listen for.
     */

  }, {
    key: "triggerChange",
    value: function triggerChange() {
      this.getContainer().getPlugin('event').trigger('toolbar-change');
    }
    /**
     * Returns the CSS selector to target the toolbar form.
     * 
     * @returns {string}
     */

  }, {
    key: "getSelector",
    value: function getSelector() {
      return this.formSelector;
    }
  }]);

  return KimaiToolbar;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_14__["default"]);



/***/ }),

/***/ "./assets/js/widgets/KimaiPaginatedBoxWidget.js":
/*!******************************************************!*\
  !*** ./assets/js/widgets/KimaiPaginatedBoxWidget.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiPaginatedBoxWidget; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_12__);













function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiPaginatedBoxWidget: handles box widgets that have a pagination
 */


var KimaiPaginatedBoxWidget =
/*#__PURE__*/
function () {
  function KimaiPaginatedBoxWidget(boxId) {
    _classCallCheck(this, KimaiPaginatedBoxWidget);

    this.selector = boxId;
    this.overlay = jquery__WEBPACK_IMPORTED_MODULE_12___default()('<div class="overlay"><div class="fas fa-sync fa-spin"></div></div>');
    this.widget = jquery__WEBPACK_IMPORTED_MODULE_12___default()(this.selector);
    this.href = this.widget.data('href');
    this.events = this.widget.data('reload').split(' ');
    var self = this;

    var reloadPage = function reloadPage(event) {
      var page = jquery__WEBPACK_IMPORTED_MODULE_12___default()(self.selector + ' .box-tools').data('page');

      var url = self._buildUrl(page);

      self.loadPage(url);
    };

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var eventName = _step.value;
        document.addEventListener(eventName, reloadPage);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    this.widget.on('click', '.box-tools ul.pagination a', function (event) {
      event.preventDefault();
      self.loadPage(jquery__WEBPACK_IMPORTED_MODULE_12___default()(event.currentTarget).attr('href'));
    });
  }

  _createClass(KimaiPaginatedBoxWidget, [{
    key: "_showOverlay",
    value: function _showOverlay() {
      this.widget.append(this.overlay);
    }
  }, {
    key: "_hideOverlay",
    value: function _hideOverlay() {
      jquery__WEBPACK_IMPORTED_MODULE_12___default()(this.overlay).remove();
    }
  }, {
    key: "loadPage",
    value: function loadPage(url) {
      var self = this;
      var selector = this.selector;

      self._showOverlay();

      jquery__WEBPACK_IMPORTED_MODULE_12___default.a.ajax({
        url: url,
        data: {},
        success: function success(response) {
          var html = jquery__WEBPACK_IMPORTED_MODULE_12___default()(response);
          jquery__WEBPACK_IMPORTED_MODULE_12___default()(selector + ' .box-tools').replaceWith(html.find('.box-tools'));
          jquery__WEBPACK_IMPORTED_MODULE_12___default()(selector + ' .box-body').replaceWith(html.find('.box-body'));
          jquery__WEBPACK_IMPORTED_MODULE_12___default()(selector + ' .box-title').replaceWith(html.find('.box-title'));

          if (jquery__WEBPACK_IMPORTED_MODULE_12___default()(selector + ' .box-footer').length > 0) {
            jquery__WEBPACK_IMPORTED_MODULE_12___default()(selector + ' .box-footer').replaceWith(html.find('.box-footer'));
          }

          jquery__WEBPACK_IMPORTED_MODULE_12___default()(selector + ' .box-body [data-toggle="tooltip"]').tooltip();
          self.widget.removeData('error-retry');

          self._hideOverlay();
        },
        dataType: 'html',
        error: function error(jqXHR, textStatus, errorThrown) {
          if (jqXHR.status !== undefined && jqXHR.status === 500) {
            if (self.widget.data('error-retry') !== undefined) {
              // TODO show error message ?
              return;
            }

            var page = jquery__WEBPACK_IMPORTED_MODULE_12___default()(selector + ' .box-tools').data('page');

            if (page > 1) {
              self.widget.data('error-retry', 1);

              var url = self._buildUrl(page - 1);

              self.loadPage(url);
            }
          }

          self._hideOverlay();
        }
      });
    }
  }, {
    key: "_buildUrl",
    value: function _buildUrl(page) {
      return this.href.replace('1', page);
    }
  }], [{
    key: "create",
    value: function create(elementId) {
      return new KimaiPaginatedBoxWidget(elementId);
    }
  }]);

  return KimaiPaginatedBoxWidget;
}();



/***/ }),

/***/ "./assets/js/widgets/KimaiReloadPageWidget.js":
/*!****************************************************!*\
  !*** ./assets/js/widgets/KimaiReloadPageWidget.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiReloadPageWidget; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_11__);












function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiReloadPageWidget: a simple helper to reload the page on events
 */


var KimaiReloadPageWidget =
/*#__PURE__*/
function () {
  function KimaiReloadPageWidget(events, fullReload) {
    _classCallCheck(this, KimaiReloadPageWidget);

    this.overlay = jquery__WEBPACK_IMPORTED_MODULE_11___default()('<div class="overlay-wrapper"><div class="overlay"><div class="fas fa-sync fa-spin"></div></div></div>');
    this.widget = jquery__WEBPACK_IMPORTED_MODULE_11___default()('div.content-wrapper');
    var self = this;

    var reloadPage = function reloadPage(event) {
      if (fullReload) {
        document.location.reload(true);
      } else {
        self.loadPage(document.location);
      }
    };

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = events.split(' ')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var eventName = _step.value;
        document.addEventListener(eventName, reloadPage);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  _createClass(KimaiReloadPageWidget, [{
    key: "_showOverlay",
    value: function _showOverlay() {
      this.widget.append(this.overlay);
    }
  }, {
    key: "_hideOverlay",
    value: function _hideOverlay() {
      jquery__WEBPACK_IMPORTED_MODULE_11___default()(this.overlay).remove();
    }
  }, {
    key: "loadPage",
    value: function loadPage(url) {
      var self = this;

      self._showOverlay();

      jquery__WEBPACK_IMPORTED_MODULE_11___default.a.ajax({
        url: url,
        data: {},
        success: function success(response) {
          jquery__WEBPACK_IMPORTED_MODULE_11___default()('section.content').replaceWith(jquery__WEBPACK_IMPORTED_MODULE_11___default()(response).find('section.content'));
          document.dispatchEvent(new Event('kimai.reloadPage'));

          self._hideOverlay();
        },
        dataType: 'html',
        error: function error(jqXHR, textStatus, errorThrown) {
          self._hideOverlay();

          document.location = url;
        }
      });
    }
  }], [{
    key: "create",
    value: function create(events, fullReload) {
      if (fullReload === undefined || fullReload === null) {
        fullReload = false;
      }

      return new KimaiReloadPageWidget(events, fullReload);
    }
  }]);

  return KimaiReloadPageWidget;
}();



/***/ }),

/***/ "./assets/sass/app.scss":
/*!******************************!*\
  !*** ./assets/sass/app.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/sass/bootstrap.scss":
/*!************************************!*\
  !*** ./assets/sass/bootstrap.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/sass/fontawesome.scss":
/*!**************************************!*\
  !*** ./assets/sass/fontawesome.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./vendor/kevinpapst/adminlte-bundle/Resources/assets/admin-lte-extensions.scss":
/*!**************************************************************************************!*\
  !*** ./vendor/kevinpapst/adminlte-bundle/Resources/assets/admin-lte-extensions.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./assets/app.js","runtime","vendors~app~calendar~conducimos","vendors~app~calendar~chart","vendors~app~conducimos","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9LaW1haUNvbmZpZ3VyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0tpbWFpQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9LaW1haUxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvS2ltYWlQbHVnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0tpbWFpVHJhbnNsYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0tpbWFpV2ViTG9hZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wbHVnaW5zL0tpbWFpQVBJLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wbHVnaW5zL0tpbWFpQVBJTGluay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGx1Z2lucy9LaW1haUFjdGl2ZVJlY29yZHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BsdWdpbnMvS2ltYWlBY3RpdmVSZWNvcmRzRHVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BsdWdpbnMvS2ltYWlBamF4TW9kYWxGb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wbHVnaW5zL0tpbWFpQWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BsdWdpbnMvS2ltYWlBbHRlcm5hdGl2ZUxpbmtzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wbHVnaW5zL0tpbWFpQXV0b2NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wbHVnaW5zL0tpbWFpQ29uZmlybWF0aW9uTGluay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGx1Z2lucy9LaW1haURhdGF0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGx1Z2lucy9LaW1haURhdGF0YWJsZUNvbHVtblZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BsdWdpbnMvS2ltYWlEYXRlUGlja2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wbHVnaW5zL0tpbWFpRGF0ZVJhbmdlUGlja2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wbHVnaW5zL0tpbWFpRGF0ZVRpbWVQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BsdWdpbnMvS2ltYWlEYXRlVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BsdWdpbnMvS2ltYWlFdmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGx1Z2lucy9LaW1haUZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BsdWdpbnMvS2ltYWlGb3JtU2VsZWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wbHVnaW5zL0tpbWFpTXVsdGlVcGRhdGVUYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGx1Z2lucy9LaW1haVJlY2VudEFjdGl2aXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BsdWdpbnMvS2ltYWlSZWR1Y2VkQ2xpY2tIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wbHVnaW5zL0tpbWFpU2VsZWN0RGF0YUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGx1Z2lucy9LaW1haVRoZW1lSW5pdGlhbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BsdWdpbnMvS2ltYWlUb29sYmFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy93aWRnZXRzL0tpbWFpUGFnaW5hdGVkQm94V2lkZ2V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy93aWRnZXRzL0tpbWFpUmVsb2FkUGFnZVdpZGdldC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Fzcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Fzcy9ib290c3RyYXAuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Fzcy9mb250YXdlc29tZS5zY3NzIiwid2VicGFjazovLy8uL3ZlbmRvci9rZXZpbnBhcHN0L2FkbWlubHRlLWJ1bmRsZS9SZXNvdXJjZXMvYXNzZXRzL2FkbWluLWx0ZS1leHRlbnNpb25zLnNjc3MiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJnbG9iYWwiLCJqUXVlcnkiLCJNb21lbnQiLCJtb21lbnQiLCJTb3J0YWJsZSIsIkFkbWluTFRFIiwib3B0aW9ucyIsIktpbWFpUGFnaW5hdGVkQm94V2lkZ2V0IiwiS2ltYWlSZWxvYWRQYWdlV2lkZ2V0IiwiS2ltYWlDb25maWd1cmF0aW9uIiwiY29uZmlndXJhdGlvbnMiLCJfY29uZmlndXJhdGlvbnMiLCJuYW1lIiwiS2ltYWlDb250YWluZXIiLCJjb25maWd1cmF0aW9uIiwidHJhbnNsYXRpb24iLCJFcnJvciIsIl9jb25maWd1cmF0aW9uIiwiS2ltYWlUcmFuc2xhdGlvbiIsIl90cmFuc2xhdGlvbiIsIl9wbHVnaW5zIiwicGx1Z2luIiwiS2ltYWlQbHVnaW4iLCJzZXRDb250YWluZXIiLCJwdXNoIiwiZ2V0SWQiLCJLaW1haUxvYWRlciIsInRyYW5zbGF0aW9ucyIsImxvY2FsZSIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImtpbWFpIiwicmVnaXN0ZXJQbHVnaW4iLCJLaW1haUV2ZW50IiwiS2ltYWlBUEkiLCJLaW1haUFsZXJ0IiwiS2ltYWlEYXRlVXRpbHMiLCJLaW1haUZvcm1TZWxlY3QiLCJLaW1haUNvbmZpcm1hdGlvbkxpbmsiLCJLaW1haUFjdGl2ZVJlY29yZHNEdXJhdGlvbiIsIktpbWFpRGF0YXRhYmxlQ29sdW1uVmlldyIsIktpbWFpRGF0ZVJhbmdlUGlja2VyIiwiS2ltYWlEYXRlVGltZVBpY2tlciIsIktpbWFpRGF0ZVBpY2tlciIsIktpbWFpRGF0YXRhYmxlIiwiS2ltYWlUb29sYmFyIiwiS2ltYWlTZWxlY3REYXRhQVBJIiwiS2ltYWlBbHRlcm5hdGl2ZUxpbmtzIiwiS2ltYWlBamF4TW9kYWxGb3JtIiwiS2ltYWlSZWNlbnRBY3Rpdml0aWVzIiwiS2ltYWlBY3RpdmVSZWNvcmRzIiwiS2ltYWlBUElMaW5rIiwiS2ltYWlBdXRvY29tcGxldGUiLCJLaW1haUZvcm0iLCJLaW1haVRoZW1lSW5pdGlhbGl6ZXIiLCJLaW1haU11bHRpVXBkYXRlVGFibGUiLCJnZXRQbHVnaW4iLCJ0cmlnZ2VyIiwiZ2V0UGx1Z2lucyIsIm1hcCIsImluaXQiLCJjb3JlIiwiX2NvcmUiLCJfdHJhbnNsYXRpb25zIiwicm9vdCIsImZhY3RvcnkiLCJkZWZpbmUiLCJLaW1haVdlYkxvYWRlciIsIm1vZHVsZSIsImV4cG9ydHMiLCJzZWxmIiwidXJsIiwiZGF0YSIsImNhbGxiYWNrU3VjY2VzcyIsImNhbGxiYWNrRXJyb3IiLCJhamF4IiwiaGVhZGVycyIsIm1ldGhvZCIsImRhdGFUeXBlIiwic3VjY2VzcyIsImVycm9yIiwic2VsZWN0b3IiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsIm1hdGNoZXMiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImF0dHJpYnV0ZXMiLCJkYXRhc2V0IiwiZ2V0QXR0cmlidXRlIiwicXVlc3Rpb24iLCJ1bmRlZmluZWQiLCJnZXRDb250YWluZXIiLCJ2YWx1ZSIsIl9jYWxsQXBpIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJwYXJlbnROb2RlIiwiZXZlbnROYW1lIiwiQVBJIiwiZXZlbnRpbmciLCJhbGVydCIsInN1Y2Nlc3NIYW5kbGUiLCJyZXN1bHQiLCJtc2dTdWNjZXNzIiwiZXJyb3JIYW5kbGUiLCJ4aHIiLCJlcnIiLCJtZXNzYWdlIiwibXNnRXJyb3IiLCJyZXNwb25zZUpTT04iLCJwYXlsb2FkIiwicGF0Y2giLCJzZWxlY3RvckVtcHR5IiwibWVudSIsInF1ZXJ5U2VsZWN0b3IiLCJkcm9wZG93biIsIml0ZW1MaXN0IiwibGFiZWwiLCJoYW5kbGUiLCJyZWxvYWRBY3RpdmVSZWNvcmRzIiwiaW5uZXJIVE1MIiwiaGFzRW50cmllcyIsIm1lbnVFbXB0eSIsInN0eWxlIiwiZGlzcGxheSIsImVudHJpZXMiLCJfdG9nZ2xlTWVudSIsImxlbmd0aCIsImlubmVyVGV4dCIsImVtcHR5TGlzdCIsImh0bWxUb0luc2VydCIsImR1cmF0aW9ucyIsInRpbWVzaGVldCIsImlkIiwiYWN0aXZpdHkiLCJiZWdpbiIsImZvcm1hdER1cmF0aW9uIiwiZHVyYXRpb24iLCJwcm9qZWN0IiwiY3VzdG9tZXIiLCJ3YXJuaW5nIiwidXBkYXRlUmVjb3JkcyIsImdldCIsInNldEVudHJpZXMiLCJfdXBkYXRlc0hhbmRsZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJhY3RpdmVSZWNvcmRzIiwicXVlcnlTZWxlY3RvckFsbCIsInRpdGxlIiwicmVjb3JkIiwic2luY2UiLCJmb3JtYXQiLCJ0ZXh0Q29udGVudCIsInNoaWZ0IiwicHJlZml4Iiwic2xpY2UiLCJEYXRlIiwiZGlmZiIsImhvdXJzIiwicGFyc2VJbnQiLCJhc0hvdXJzIiwidG9TdHJpbmciLCJtaW51dGVzIiwic2Vjb25kcyIsInN1YnN0ciIsIm1vZGFsIiwib24iLCJkZXN0cm95Rm9ybSIsIl9nZXRGb3JtSWRlbnRpZmllciIsInJlcGxhY2VXaXRoIiwiZmluZCIsImZpbHRlciIsImZvY3VzIiwiZGVsYXkiLCJfYWRkQ2xpY2tIYW5kbGVyIiwiaHJlZiIsIm9wZW5VcmxJbk1vZGFsIiwiZXJyb3JIYW5kbGVyIiwic3RhdHVzIiwid2luZG93IiwibG9jYXRpb24iLCJodG1sIiwiX29wZW5Gb3JtSW5Nb2RhbCIsImZvcm1JZGVudGlmaWVyIiwiZmxhc2hFcnJvcklkZW50aWZpZXIiLCJmbGFzaE1lc3NhZ2VJZGVudGlmaWVyIiwiZm9ybSIsInJlbW90ZU1vZGFsIiwib2ZmIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiYWN0aXZhdGVGb3JtIiwiZmxhc2hNZXNzYWdlcyIsInByZXBlbmQiLCJlbmZvcmNlTW9kYWxGb2N1c0ZuIiwiZm4iLCJDb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsImVuZm9yY2VGb2N1cyIsImhpZGUiLCJidG4iLCJidXR0b24iLCJhdHRyIiwiZXZlbnRzIiwidHlwZSIsInNlcmlhbGl6ZSIsImhhc0ZpZWxkRXJyb3IiLCJoYXNGb3JtRXJyb3IiLCJoYXNGbGFzaEVycm9yIiwibXNnIiwiZmxhc2hNZXNzYWdlIiwiZmxhc2hDb250ZW50IiwiY29udGVudHMiLCJzdGF0dXNUZXh0Iiwic2V0VGltZW91dCIsIktpbWFpUmVkdWNlZENsaWNrSGFuZGxlciIsImdldFRyYW5zbGF0aW9uIiwiaGFzIiwiU3dhbCIsImZpcmUiLCJpY29uIiwidGV4dCIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsImNhbGxiYWNrIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInRoZW4iLCJtaW5DaGFycyIsImdldENvbmZpZ3VyYXRpb24iLCJ2YWwiLCJzcGxpdCIsInRlcm0iLCJzcGxpdFRhZ0xpc3QiLCJwb3AiLCJlYWNoIiwiaW5kZXgiLCJjdXJyZW50RmllbGQiLCJhcGlVcmwiLCJrZXlDb2RlIiwidWkiLCJUQUIiLCJhdXRvY29tcGxldGUiLCJhY3RpdmUiLCJzb3VyY2UiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJsYXN0RW50cnkiLCJleHRyYWN0TGFzdFRhZyIsInNlYXJjaCIsInNlbGVjdCIsInRlcm1zIiwiaW5jbHVkZXMiLCJpdGVtIiwiam9pbiIsInJlbW92ZURhdGEiLCJhY3Rpb24iLCJzdWJtaXQiLCJjb250ZW50QXJlYVNlbGVjdG9yIiwidGFibGVTZWxlY3RvciIsImNvbnRlbnRBcmVhIiwiZGF0YVRhYmxlIiwicmVsb2FkRGF0YXRhYmxlIiwidG9vbGJhclNlbGVjdG9yIiwiZ2V0U2VsZWN0b3IiLCJsb2FkaW5nIiwiYXBwZW5kIiwiZm9ybURhdGEiLCJlbGVtZW50IiwiZGF0YUF0dHJpYnV0ZSIsImdldEVsZW1lbnRCeUlkIiwiYmluZEJ1dHRvbnMiLCJzYXZlVmlzaWJpbGl0eSIsInJlc2V0VmlzaWJpbGl0eSIsImNoZWNrYm94IiwiY2hhbmdlVmlzaWJpbGl0eSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2V0dGluZ3MiLCJjaGVja2VkIiwiQ29va2llcyIsInNldCIsIkpTT04iLCJzdHJpbmdpZnkiLCJleHBpcmVzIiwicmVtb3ZlIiwiY2xpY2siLCJjb2x1bW5OYW1lIiwidGFibGUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY29sdW1uIiwiZm91bmRDb2x1bW4iLCJjb2x1bW5FbGVtZW50Iiwicm93RWxlbWVudCIsImNoaWxkcmVuIiwidG9nZ2xlIiwiVFJBTlNMQVRFIiwiREFURV9VVElMUyIsImxvY2FsZUZvcm1hdCIsImRhdGVyYW5nZXBpY2tlciIsInNpbmdsZURhdGVQaWNrZXIiLCJzaG93RHJvcGRvd25zIiwiYXV0b1VwZGF0ZUlucHV0IiwiZmlyc3REYXkiLCJzdGFydE9mIiwiYXBwbHlMYWJlbCIsImNhbmNlbExhYmVsIiwiY3VzdG9tUmFuZ2VMYWJlbCIsImRheXNPZldlZWsiLCJnZXRXZWVrRGF5c1Nob3J0IiwibW9udGhOYW1lcyIsImdldE1vbnRoTmFtZXMiLCJldiIsInBpY2tlciIsInN0YXJ0RGF0ZSIsInNlcGFyYXRvciIsInJhbmdlc0xpc3QiLCJzdWJ0cmFjdCIsImVuZE9mIiwiYXV0b0FwcGx5IiwibGlua2VkQ2FsZW5kYXJzIiwicmFuZ2VzIiwiYWx3YXlzU2hvd0NhbGVuZGFycyIsImVuZERhdGUiLCJDT05GSUciLCJ0aW1lUGlja2VyIiwidGltZVBpY2tlcjI0SG91ciIsImxvY2FsZURhdGEiLCJ3ZWVrZGF5c1Nob3J0IiwibW9udGhzIiwiZGV0YWlscyIsInRyaWdnZXJFdmVudCIsIkV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJkaXNwYXRjaEV2ZW50IiwiZm9ybVNlbGVjdG9yIiwiY29udGFpbmVyIiwiYWN0aXZhdGVEYXRlUmFuZ2VQaWNrZXIiLCJhY3RpdmF0ZURhdGVUaW1lUGlja2VyIiwiYWN0aXZhdGVEYXRlUGlja2VyIiwiYWN0aXZhdGVBdXRvY29tcGxldGUiLCJhY3RpdmF0ZVNlbGVjdFBpY2tlciIsImRlc3Ryb3lTZWxlY3RQaWNrZXIiLCJkZXN0cm95QXV0b2NvbXBsZXRlIiwiZGVzdHJveURhdGVQaWNrZXIiLCJkZXN0cm95RGF0ZVRpbWVQaWNrZXIiLCJkZXN0cm95RGF0ZVJhbmdlUGlja2VyIiwiZWxlbWVudFNlbGVjdG9yIiwiZHJvcGRvd25QYXJlbnQiLCJtYXRjaGVyIiwicGFyYW1zIiwidHJpbSIsImhhc0NoaWxkcmVuIiwidG9VcHBlckNhc2UiLCJvcmlnaW5hbCIsImZvdW5kQWxsIiwiZm91bmRPbmUiLCJtaXNzaW5nVGVybXMiLCJmb3JFYWNoIiwiaW5kZXhPZiIsIm5ld1BhcmFtcyIsImV4dGVuZCIsIm1hdGNoIiwiYyIsImNoaWxkIiwic3BsaWNlIiwibGFuZ3VhZ2UiLCJ0aGVtZSIsInNlbGVjdDIiLCJzZWxlY3RJZGVudGlmaWVyIiwiZW1wdHlPcHRpb24iLCJzZWxlY3RlZFZhbHVlIiwiZW5kIiwiaHRtbE9wdGlvbnMiLCJlbXB0eU9wdGlvbnMiLCJPYmplY3QiLCJrZXkiLCJlbnRpdHkiLCJwcm9wIiwidG9nZ2xlRm9ybSIsInNlbGVjdGVkSXRlbSIsInNlbGVjdGVkVmFsIiwic2VsZWN0ZWRUZXh0IiwiaWRzIiwiZ2V0U2VsZWN0ZWRJZHMiLCJpIiwic2hvdyIsInJlbG9hZFJlY2VudEFjdGl2aXRpZXMiLCJpc0NvbnRlbnRFZGl0YWJsZSIsImN1cnJlbnRUYXJnZXQiLCJhY3RpdmF0ZUFwaVNlbGVjdHMiLCJ0YXJnZXRTZWxlY3QiLCJmb3JtUHJlZml4IiwicGFyZW50cyIsImZpcnN0IiwibmV3QXBpVXJsIiwiX2J1aWxkVXJsV2l0aEZvcm1GaWVsZHMiLCJzZWxlY3RWYWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsIl91cGRhdGVTZWxlY3QiLCJyZW1vdmVBdHRyIiwiZGVjb2RlZCIsImRlY29kZVVSSUNvbXBvbmVudCIsInRlc3QiLCJ0YXJnZXRGaWVsZCIsIm5ld1ZhbHVlIiwiSFRNTDVfRk1UIiwiREFURVRJTUVfTE9DQUxfU0VDT05EUyIsImlzVmFsaWQiLCJzZWxlY3ROYW1lIiwiYXBpRGF0YSIsImhhc093blByb3BlcnR5IiwicGFyZW50VGl0bGUiLCJvcmRlcmVkIiwia2V5cyIsInNvcnQiLCJ1cGRhdGVPcHRpb25zIiwicmVnaXN0ZXJHbG9iYWxBamF4RXJyb3JIYW5kbGVyIiwicmVnaXN0ZXJBdXRvbWF0aWNBbGVydFJlbW92ZSIsInRvb2x0aXAiLCJsb2dpblVybCIsImFqYXhFcnJvciIsImpxeGhyIiwidGhyb3duRXJyb3IiLCJsb2dpblJlcXVpcmVkIiwiZ2V0UmVzcG9uc2VIZWFkZXIiLCJpbnRlcnZhbCIsIl9hbGVydFJlbW92ZUhhbmRsZXIiLCJoaWRlQWxlcnQiLCJmb3JtU3VibWl0QWN0aW9uQ2xhc3MiLCJhY3Rpb25DbGFzcyIsIkVWRU5UIiwiX3JlZ2lzdGVyUGFnaW5hdGlvbiIsIl9yZWdpc3RlclNvcnRhYmxlVGFibGVzIiwiX3JlZ2lzdGVyQWx0ZXJuYXRpdmVTdWJtaXRBY3Rpb25zIiwiX3JlZ2lzdGVyU2VhcmNoQnV0dG9ucyIsImNoYW5nZSIsInRyaWdnZXJDaGFuZ2UiLCJyZWxvYWQiLCJwYXJlbnQiLCJ0b2dnbGVDbGFzcyIsImFjdGlvbkJ0bkNsYXNzIiwicHJldkFjdGlvbiIsInByZXZNZXRob2QiLCIkaGVhZGVyIiwib3JkZXIiLCJvcmRlckJ5IiwicGFnZXIiLCJ1cmxQYXJ0cyIsInBhZ2UiLCJib3hJZCIsIm92ZXJsYXkiLCJ3aWRnZXQiLCJyZWxvYWRQYWdlIiwiX2J1aWxkVXJsIiwibG9hZFBhZ2UiLCJfc2hvd092ZXJsYXkiLCJfaGlkZU92ZXJsYXkiLCJqcVhIUiIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsImVsZW1lbnRJZCIsImZ1bGxSZWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QkFBdEIsQ0FESjtBQUdBNUYsa0JBQVEsQ0FBQ3FRLGFBQVQsQ0FBdUIsSUFBSUgsS0FBSixDQUFVLGtCQUFWLENBQXZCOztBQUNBOVEsY0FBSSxDQUFDNlksWUFBTDtBQUNILFNBVE87QUFVUnJZLGdCQUFRLEVBQUUsTUFWRjtBQVdSRSxhQUFLLEVBQUUsZUFBU29ZLEtBQVQsRUFBZ0JDLFVBQWhCLEVBQTRCQyxXQUE1QixFQUF5QztBQUM1Q2haLGNBQUksQ0FBQzZZLFlBQUw7O0FBQ0FqWSxrQkFBUSxDQUFDc0csUUFBVCxHQUFvQmpILEdBQXBCO0FBQ0g7QUFkTyxPQUFaO0FBZ0JIOzs7MkJBcENheUksTSxFQUFRd1EsVSxFQUFZO0FBQzlCLFVBQUlBLFVBQVUsS0FBSzNYLFNBQWYsSUFBNEIyWCxVQUFVLEtBQUssSUFBL0MsRUFBcUQ7QUFDakRBLGtCQUFVLEdBQUcsS0FBYjtBQUNIOztBQUNELGFBQU8sSUFBSWhkLHFCQUFKLENBQTBCd00sTUFBMUIsRUFBa0N3USxVQUFsQyxDQUFQO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNMLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0gSU5MSU5FRCBBRE1JTi1MVEUgREVGSU5JVElPTlMgLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyByZXF1aXJlKCcuLi92ZW5kb3Iva2V2aW5wYXBzdC9hZG1pbmx0ZS1idW5kbGUvUmVzb3VyY2VzL2Fzc2V0cy9hZG1pbi1sdGUnKTtcclxuLy8gdGhpcyB3YXMgcmVwbGFjZWQgdG8gc2F2ZSBhcm91bmQgMzAwa2IgYnk6XHJcbi8vIC0gcmVtb3ZpbmcgbW9tZW50IGxvY2FsZXMgd2hpY2ggYXJlIG5vdCB1c2VkXHJcbi8vIC0gcmVtb3ZpbmcgZnVsbGNhbGVuZGFyIGxvY2FsZXMgd2hpY2ggYXJlIG5vdCB1c2VkXHJcbi8vIC0gcmVtb3ZpbmcgaWNoZWNrIHdoaWNoIGlzIG5vdCB1c2VkXHJcbi8vIC0gcmVtb3ZpbmcganF1ZXJ5LXVpIHdoaWNoIGlzIG5vdCB1c2VkXHJcblxyXG5jb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbmdsb2JhbC4kID0gZ2xvYmFsLmpRdWVyeSA9ICQ7XHJcblxyXG5yZXF1aXJlKCdib290c3RyYXAtc2FzcycpO1xyXG5yZXF1aXJlKCdqcXVlcnktc2xpbXNjcm9sbCcpO1xyXG5cclxucmVxdWlyZSgnc2VsZWN0MicpO1xyXG5yZXF1aXJlKCdzZWxlY3QyL2Rpc3QvanMvaTE4bi9hcicpO1xyXG5yZXF1aXJlKCdzZWxlY3QyL2Rpc3QvanMvaTE4bi9jcycpO1xyXG5yZXF1aXJlKCdzZWxlY3QyL2Rpc3QvanMvaTE4bi9kYScpO1xyXG5yZXF1aXJlKCdzZWxlY3QyL2Rpc3QvanMvaTE4bi9kZScpO1xyXG5yZXF1aXJlKCdzZWxlY3QyL2Rpc3QvanMvaTE4bi9lcycpO1xyXG5yZXF1aXJlKCdzZWxlY3QyL2Rpc3QvanMvaTE4bi9ldScpO1xyXG5yZXF1aXJlKCdzZWxlY3QyL2Rpc3QvanMvaTE4bi9mcicpO1xyXG5yZXF1aXJlKCdzZWxlY3QyL2Rpc3QvanMvaTE4bi9oZScpO1xyXG5yZXF1aXJlKCdzZWxlY3QyL2Rpc3QvanMvaTE4bi9odScpO1xyXG5yZXF1aXJlKCdzZWxlY3QyL2Rpc3QvanMvaTE4bi9pdCcpO1xyXG5yZXF1aXJlKCdzZWxlY3QyL2Rpc3QvanMvaTE4bi9qYScpO1xyXG5yZXF1aXJlKCdzZWxlY3QyL2Rpc3QvanMvaTE4bi9rbycpO1xyXG5yZXF1aXJlKCdzZWxlY3QyL2Rpc3QvanMvaTE4bi9ubCcpO1xyXG5yZXF1aXJlKCdzZWxlY3QyL2Rpc3QvanMvaTE4bi9wbCcpO1xyXG5yZXF1aXJlKCdzZWxlY3QyL2Rpc3QvanMvaTE4bi9wdC1CUicpO1xyXG5yZXF1aXJlKCdzZWxlY3QyL2Rpc3QvanMvaTE4bi9ybycpO1xyXG5yZXF1aXJlKCdzZWxlY3QyL2Rpc3QvanMvaTE4bi9ydScpO1xyXG5yZXF1aXJlKCdzZWxlY3QyL2Rpc3QvanMvaTE4bi9zaycpO1xyXG5yZXF1aXJlKCdzZWxlY3QyL2Rpc3QvanMvaTE4bi9zdicpO1xyXG5yZXF1aXJlKCdzZWxlY3QyL2Rpc3QvanMvaTE4bi90cicpO1xyXG5yZXF1aXJlKCdzZWxlY3QyL2Rpc3QvanMvaTE4bi92aScpO1xyXG5yZXF1aXJlKCdzZWxlY3QyL2Rpc3QvanMvaTE4bi96aC1DTicpO1xyXG5cclxuY29uc3QgTW9tZW50ID0gcmVxdWlyZSgnbW9tZW50Jyk7XHJcbmdsb2JhbC5tb21lbnQgPSBNb21lbnQ7XHJcbnJlcXVpcmUoJ21vbWVudC9sb2NhbGUvYXInKTtcclxucmVxdWlyZSgnbW9tZW50L2xvY2FsZS9jcycpO1xyXG5yZXF1aXJlKCdtb21lbnQvbG9jYWxlL2RhJyk7XHJcbnJlcXVpcmUoJ21vbWVudC9sb2NhbGUvZGUnKTtcclxucmVxdWlyZSgnbW9tZW50L2xvY2FsZS9kZS1jaCcpO1xyXG5yZXF1aXJlKCdtb21lbnQvbG9jYWxlL2VvJyk7XHJcbnJlcXVpcmUoJ21vbWVudC9sb2NhbGUvZXMnKTtcclxucmVxdWlyZSgnbW9tZW50L2xvY2FsZS9ldScpO1xyXG5yZXF1aXJlKCdtb21lbnQvbG9jYWxlL2ZyJyk7XHJcbnJlcXVpcmUoJ21vbWVudC9sb2NhbGUvaGUnKTtcclxucmVxdWlyZSgnbW9tZW50L2xvY2FsZS9odScpO1xyXG5yZXF1aXJlKCdtb21lbnQvbG9jYWxlL2l0Jyk7XHJcbnJlcXVpcmUoJ21vbWVudC9sb2NhbGUvamEnKTtcclxucmVxdWlyZSgnbW9tZW50L2xvY2FsZS9rbycpO1xyXG5yZXF1aXJlKCdtb21lbnQvbG9jYWxlL25sJyk7XHJcbnJlcXVpcmUoJ21vbWVudC9sb2NhbGUvcGwnKTtcclxucmVxdWlyZSgnbW9tZW50L2xvY2FsZS9wdC1icicpO1xyXG5yZXF1aXJlKCdtb21lbnQvbG9jYWxlL3JvJyk7XHJcbnJlcXVpcmUoJ21vbWVudC9sb2NhbGUvcnUnKTtcclxucmVxdWlyZSgnbW9tZW50L2xvY2FsZS9zaycpO1xyXG5yZXF1aXJlKCdtb21lbnQvbG9jYWxlL3N2Jyk7XHJcbnJlcXVpcmUoJ21vbWVudC9sb2NhbGUvdHInKTtcclxucmVxdWlyZSgnbW9tZW50L2xvY2FsZS92aScpO1xyXG5yZXF1aXJlKCdtb21lbnQvbG9jYWxlL3poLWNuJyk7XHJcblxyXG5yZXF1aXJlKCdkYXRlcmFuZ2VwaWNrZXInKTtcclxuXHJcbmNvbnN0IFNvcnRhYmxlID0gcmVxdWlyZSgnc29ydGFibGVqcy9Tb3J0YWJsZS5taW4nKTtcclxuZ2xvYmFsLlNvcnRhYmxlID0gU29ydGFibGU7XHJcblxyXG4vLyAtLS0tLS0gQWRtaW5MVEUgZnJhbWV3b3JrIC0tLS0tLVxyXG5yZXF1aXJlKCcuL3Nhc3MvYm9vdHN0cmFwLnNjc3MnKTtcclxucmVxdWlyZSgnLi9zYXNzL2ZvbnRhd2Vzb21lLnNjc3MnKTtcclxucmVxdWlyZSgnYWRtaW4tbHRlL2Rpc3QvY3NzL0FkbWluTFRFLm1pbi5jc3MnKTtcclxucmVxdWlyZSgnYWRtaW4tbHRlL2Rpc3QvY3NzL3NraW5zL19hbGwtc2tpbnMuY3NzJyk7XHJcbnJlcXVpcmUoJy4uL3ZlbmRvci9rZXZpbnBhcHN0L2FkbWlubHRlLWJ1bmRsZS9SZXNvdXJjZXMvYXNzZXRzL2FkbWluLWx0ZS1leHRlbnNpb25zLnNjc3MnKTtcclxuXHJcbmdsb2JhbC4kLkFkbWluTFRFID0ge307XHJcbmdsb2JhbC4kLkFkbWluTFRFLm9wdGlvbnMgPSB7fTtcclxucmVxdWlyZSgnYWRtaW4tbHRlL2Rpc3QvanMvYWRtaW5sdGUubWluJyk7XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0gSU5MSU5FRCBBRE1JTi1MVEUgREVGSU5JVElPTlMgLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbnJlcXVpcmUoJy4vc2Fzcy9hcHAuc2NzcycpO1xyXG5cclxuLy8gLS0tLS0tIEtpbWFpIGl0c2VsZiAtLS0tLS1cclxucmVxdWlyZSgnLi9qcy9LaW1haVdlYkxvYWRlci5qcycpO1xyXG5nbG9iYWwuS2ltYWlQYWdpbmF0ZWRCb3hXaWRnZXQgPSByZXF1aXJlKCcuL2pzL3dpZGdldHMvS2ltYWlQYWdpbmF0ZWRCb3hXaWRnZXQnKS5kZWZhdWx0O1xyXG5nbG9iYWwuS2ltYWlSZWxvYWRQYWdlV2lkZ2V0ID0gcmVxdWlyZSgnLi9qcy93aWRnZXRzL0tpbWFpUmVsb2FkUGFnZVdpZGdldCcpLmRlZmF1bHQ7XHJcblxyXG4vLyAtLS0tLS0gQXV0b2NvbXBsZXRlIGZvciB0YWdzIG9ubHkgLS0tLS0tXHJcbnJlcXVpcmUoJ2pxdWVyeS11aS91aS93aWRnZXRzL2F1dG9jb21wbGV0ZScpO1xyXG4iLCIvKlxyXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgS2ltYWkgdGltZS10cmFja2luZyBhcHAuXHJcbiAqXHJcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXHJcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxyXG4gKi9cclxuXHJcbi8qIVxyXG4gKiBbS0lNQUldIEtpbWFpQ29uZmlndXJhdGlvbjogaGFuZGxpbmcgYWxsIGNvbmZpZ3VyYXRpb24gYW5kIHJ1bnRpbWUgc2V0dGluZ3NcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLaW1haUNvbmZpZ3VyYXRpb24ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5fY29uZmlndXJhdGlvbnMgPSBjb25maWd1cmF0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICBnZXQobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWd1cmF0aW9uc1tuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICBoYXMobmFtZSkge1xyXG4gICAgICAgIHJldHVybiBuYW1lIGluIHRoaXMuX2NvbmZpZ3VyYXRpb25zO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvKlxyXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgS2ltYWkgdGltZS10cmFja2luZyBhcHAuXHJcbiAqXHJcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXHJcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxyXG4gKi9cclxuXHJcbi8qIVxyXG4gKiBbS0lNQUldIEtpbWFpQ29udGFpbmVyXHJcbiAqXHJcbiAqIFNlcnZpY2VDb250YWluZXIgZm9yIEtpbWFpXHJcbiAqL1xyXG5cclxuaW1wb3J0IEtpbWFpQ29uZmlndXJhdGlvbiBmcm9tICcuL0tpbWFpQ29uZmlndXJhdGlvbic7XHJcbmltcG9ydCBLaW1haVRyYW5zbGF0aW9uIGZyb20gJy4vS2ltYWlUcmFuc2xhdGlvbic7XHJcbmltcG9ydCBLaW1haVBsdWdpbiBmcm9tICcuL0tpbWFpUGx1Z2luJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtpbWFpQ29udGFpbmVyIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBDb250YWluZXIgd2l0aCB0aGUgZ2l2ZW4gY29uZmlndXJhdGlvbnMgYW5kIHRyYW5zbGF0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlndXJhdGlvblxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHRyYW5zbGF0aW9uXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb24sIHRyYW5zbGF0aW9uKSB7XHJcbiAgICAgICAgaWYgKCEoY29uZmlndXJhdGlvbiBpbnN0YW5jZW9mIEtpbWFpQ29uZmlndXJhdGlvbikpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb25maWd1cmF0aW9uIG5lZWRzIHRvIGEgS2ltYWlDb25maWd1cmF0aW9uIGluc3RhbmNlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xyXG5cclxuICAgICAgICBpZiAoISh0cmFuc2xhdGlvbiBpbnN0YW5jZW9mIEtpbWFpVHJhbnNsYXRpb24pKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29uZmlndXJhdGlvbiBuZWVkcyB0byBhIEtpbWFpVHJhbnNsYXRpb24gaW5zdGFuY2UnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdHJhbnNsYXRpb24gPSB0cmFuc2xhdGlvbjtcclxuICAgICAgICB0aGlzLl9wbHVnaW5zID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIG5ldyBQbHVnaW4uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtLaW1haVBsdWdpbn0gcGx1Z2luXHJcbiAgICAgKiBAcmV0dXJucyB7S2ltYWlQbHVnaW59XHJcbiAgICAgKi9cclxuICAgIHJlZ2lzdGVyUGx1Z2luKHBsdWdpbikge1xyXG4gICAgICAgIGlmICghKHBsdWdpbiBpbnN0YW5jZW9mIEtpbWFpUGx1Z2luKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcGx1Z2luIGdpdmVuLCBuZWVkcyB0byBiZSBhIEtpbWFpUGx1Z2luIGluc3RhbmNlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwbHVnaW4uc2V0Q29udGFpbmVyKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLl9wbHVnaW5zLnB1c2gocGx1Z2luKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBsdWdpbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcbiAgICAgKiBAcmV0dXJucyB7S2ltYWlQbHVnaW59XHJcbiAgICAgKi9cclxuICAgIGdldFBsdWdpbihuYW1lKSB7XHJcbiAgICAgICAgZm9yIChsZXQgcGx1Z2luIG9mIHRoaXMuX3BsdWdpbnMpIHtcclxuICAgICAgICAgICAgaWYgKHBsdWdpbi5nZXRJZCgpICE9PSBudWxsICYmIHBsdWdpbi5nZXRJZCgpID09PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGx1Z2luO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBwbHVnaW46ICcgKyBuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm5zIHtBcnJheTxLaW1haVBsdWdpbj59XHJcbiAgICAgKi9cclxuICAgIGdldFBsdWdpbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsdWdpbnM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJucyB7S2ltYWlUcmFuc2xhdGlvbn1cclxuICAgICAqL1xyXG4gICAgZ2V0VHJhbnNsYXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zbGF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybnMge0tpbWFpQ29uZmlndXJhdGlvbn1cclxuICAgICAqL1xyXG4gICAgZ2V0Q29uZmlndXJhdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlndXJhdGlvbjtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiLypcclxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEtpbWFpIHRpbWUtdHJhY2tpbmcgYXBwLlxyXG4gKlxyXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxyXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cclxuICovXHJcblxyXG4vKiFcclxuICogW0tJTUFJXSBLaW1haUxvYWRlcjogYm9vdHN0cmFwIHRoZSBhcHBsaWNhdGlvbiBhbmQgYWxsIHBsdWdpbnNcclxuICovXHJcblxyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBLaW1haVRyYW5zbGF0aW9uIGZyb20gXCIuL0tpbWFpVHJhbnNsYXRpb25cIjtcclxuaW1wb3J0IEtpbWFpQ29uZmlndXJhdGlvbiBmcm9tIFwiLi9LaW1haUNvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IEtpbWFpQ29udGFpbmVyIGZyb20gXCIuL0tpbWFpQ29udGFpbmVyXCI7XHJcbmltcG9ydCBLaW1haUFjdGl2ZVJlY29yZHNEdXJhdGlvbiBmcm9tICcuL3BsdWdpbnMvS2ltYWlBY3RpdmVSZWNvcmRzRHVyYXRpb24uanMnO1xyXG5pbXBvcnQgS2ltYWlEYXRhdGFibGVDb2x1bW5WaWV3IGZyb20gJy4vcGx1Z2lucy9LaW1haURhdGF0YWJsZUNvbHVtblZpZXcuanMnO1xyXG5pbXBvcnQgS2ltYWlUaGVtZUluaXRpYWxpemVyIGZyb20gXCIuL3BsdWdpbnMvS2ltYWlUaGVtZUluaXRpYWxpemVyXCI7XHJcbmltcG9ydCBLaW1haURhdGVSYW5nZVBpY2tlciBmcm9tIFwiLi9wbHVnaW5zL0tpbWFpRGF0ZVJhbmdlUGlja2VyXCI7XHJcbmltcG9ydCBLaW1haURhdGF0YWJsZSBmcm9tIFwiLi9wbHVnaW5zL0tpbWFpRGF0YXRhYmxlXCI7XHJcbmltcG9ydCBLaW1haVRvb2xiYXIgZnJvbSBcIi4vcGx1Z2lucy9LaW1haVRvb2xiYXJcIjtcclxuaW1wb3J0IEtpbWFpQVBJIGZyb20gXCIuL3BsdWdpbnMvS2ltYWlBUElcIjtcclxuaW1wb3J0IEtpbWFpU2VsZWN0RGF0YUFQSSBmcm9tIFwiLi9wbHVnaW5zL0tpbWFpU2VsZWN0RGF0YUFQSVwiO1xyXG5pbXBvcnQgS2ltYWlEYXRlVGltZVBpY2tlciBmcm9tIFwiLi9wbHVnaW5zL0tpbWFpRGF0ZVRpbWVQaWNrZXJcIjtcclxuaW1wb3J0IEtpbWFpQWx0ZXJuYXRpdmVMaW5rcyBmcm9tIFwiLi9wbHVnaW5zL0tpbWFpQWx0ZXJuYXRpdmVMaW5rc1wiO1xyXG5pbXBvcnQgS2ltYWlBamF4TW9kYWxGb3JtIGZyb20gXCIuL3BsdWdpbnMvS2ltYWlBamF4TW9kYWxGb3JtXCI7XHJcbmltcG9ydCBLaW1haUFjdGl2ZVJlY29yZHMgZnJvbSBcIi4vcGx1Z2lucy9LaW1haUFjdGl2ZVJlY29yZHNcIjtcclxuaW1wb3J0IEtpbWFpUmVjZW50QWN0aXZpdGllcyBmcm9tIFwiLi9wbHVnaW5zL0tpbWFpUmVjZW50QWN0aXZpdGllc1wiO1xyXG5pbXBvcnQgS2ltYWlFdmVudCBmcm9tIFwiLi9wbHVnaW5zL0tpbWFpRXZlbnRcIjtcclxuaW1wb3J0IEtpbWFpQVBJTGluayBmcm9tIFwiLi9wbHVnaW5zL0tpbWFpQVBJTGlua1wiO1xyXG5pbXBvcnQgS2ltYWlBbGVydCBmcm9tIFwiLi9wbHVnaW5zL0tpbWFpQWxlcnRcIjtcclxuaW1wb3J0IEtpbWFpQXV0b2NvbXBsZXRlIGZyb20gXCIuL3BsdWdpbnMvS2ltYWlBdXRvY29tcGxldGVcIjtcclxuaW1wb3J0IEtpbWFpRm9ybVNlbGVjdCBmcm9tIFwiLi9wbHVnaW5zL0tpbWFpRm9ybVNlbGVjdFwiO1xyXG5pbXBvcnQgS2ltYWlGb3JtIGZyb20gXCIuL3BsdWdpbnMvS2ltYWlGb3JtXCI7XHJcbmltcG9ydCBLaW1haURhdGVQaWNrZXIgZnJvbSBcIi4vcGx1Z2lucy9LaW1haURhdGVQaWNrZXJcIjtcclxuaW1wb3J0IEtpbWFpQ29uZmlybWF0aW9uTGluayBmcm9tIFwiLi9wbHVnaW5zL0tpbWFpQ29uZmlybWF0aW9uTGlua1wiO1xyXG5pbXBvcnQgS2ltYWlNdWx0aVVwZGF0ZVRhYmxlIGZyb20gXCIuL3BsdWdpbnMvS2ltYWlNdWx0aVVwZGF0ZVRhYmxlXCI7XHJcbmltcG9ydCBLaW1haURhdGVVdGlscyBmcm9tIFwiLi9wbHVnaW5zL0tpbWFpRGF0ZVV0aWxzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLaW1haUxvYWRlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbnMsIHRyYW5zbGF0aW9ucykge1xyXG4gICAgICAgIC8vIHNldCB0aGUgY3VycmVudCBsb2NhbGUgZm9yIGFsbCBqYXZhc2NyaXB0IGNvbXBvbmVudHNcclxuICAgICAgICBtb21lbnQubG9jYWxlKGNvbmZpZ3VyYXRpb25zWydsb2NhbGUnXS5yZXBsYWNlKCdfJywgJy0nKS50b0xvd2VyQ2FzZSgpKTtcclxuXHJcbiAgICAgICAgY29uc3Qga2ltYWkgPSBuZXcgS2ltYWlDb250YWluZXIoXHJcbiAgICAgICAgICAgIG5ldyBLaW1haUNvbmZpZ3VyYXRpb24oY29uZmlndXJhdGlvbnMpLFxyXG4gICAgICAgICAgICBuZXcgS2ltYWlUcmFuc2xhdGlvbih0cmFuc2xhdGlvbnMpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAga2ltYWkucmVnaXN0ZXJQbHVnaW4obmV3IEtpbWFpRXZlbnQoKSk7XHJcbiAgICAgICAga2ltYWkucmVnaXN0ZXJQbHVnaW4obmV3IEtpbWFpQVBJKCkpO1xyXG4gICAgICAgIGtpbWFpLnJlZ2lzdGVyUGx1Z2luKG5ldyBLaW1haUFsZXJ0KCkpO1xyXG4gICAgICAgIGtpbWFpLnJlZ2lzdGVyUGx1Z2luKG5ldyBLaW1haURhdGVVdGlscygpKTtcclxuICAgICAgICBraW1haS5yZWdpc3RlclBsdWdpbihuZXcgS2ltYWlGb3JtU2VsZWN0KCcuc2VsZWN0cGlja2VyJykpO1xyXG4gICAgICAgIGtpbWFpLnJlZ2lzdGVyUGx1Z2luKG5ldyBLaW1haUNvbmZpcm1hdGlvbkxpbmsoJ2NvbmZpcm1hdGlvbi1saW5rJykpO1xyXG4gICAgICAgIGtpbWFpLnJlZ2lzdGVyUGx1Z2luKG5ldyBLaW1haUFjdGl2ZVJlY29yZHNEdXJhdGlvbignW2RhdGEtc2luY2VdJykpO1xyXG4gICAgICAgIGtpbWFpLnJlZ2lzdGVyUGx1Z2luKG5ldyBLaW1haURhdGF0YWJsZUNvbHVtblZpZXcoJ2RhdGEtY29sdW1uLXZpc2liaWxpdHknKSk7XHJcbiAgICAgICAga2ltYWkucmVnaXN0ZXJQbHVnaW4obmV3IEtpbWFpRGF0ZVJhbmdlUGlja2VyKCdpbnB1dFtkYXRhLWRhdGVyYW5nZXBpY2tlcmVuYWJsZT1cIm9uXCJdJykpO1xyXG4gICAgICAgIGtpbWFpLnJlZ2lzdGVyUGx1Z2luKG5ldyBLaW1haURhdGVUaW1lUGlja2VyKCdpbnB1dFtkYXRhLWRhdGV0aW1lcGlja2VyPVwib25cIl0nKSk7XHJcbiAgICAgICAga2ltYWkucmVnaXN0ZXJQbHVnaW4obmV3IEtpbWFpRGF0ZVBpY2tlcignaW5wdXRbZGF0YS1kYXRlcGlja2VyZW5hYmxlPVwib25cIl0nKSk7XHJcbiAgICAgICAga2ltYWkucmVnaXN0ZXJQbHVnaW4obmV3IEtpbWFpRGF0YXRhYmxlKCdzZWN0aW9uLmNvbnRlbnQnLCAndGFibGUuZGF0YVRhYmxlJykpO1xyXG4gICAgICAgIGtpbWFpLnJlZ2lzdGVyUGx1Z2luKG5ldyBLaW1haVRvb2xiYXIoJ2Zvcm0uaGVhZGVyLXNlYXJjaCcsICd0b29sYmFyLWFjdGlvbicpKTtcclxuICAgICAgICBraW1haS5yZWdpc3RlclBsdWdpbihuZXcgS2ltYWlTZWxlY3REYXRhQVBJKCdzZWxlY3RbZGF0YS1yZWxhdGVkLXNlbGVjdF0nKSk7XHJcbiAgICAgICAga2ltYWkucmVnaXN0ZXJQbHVnaW4obmV3IEtpbWFpQWx0ZXJuYXRpdmVMaW5rcygnLmFsdGVybmF0aXZlLWxpbmsnKSk7XHJcbiAgICAgICAga2ltYWkucmVnaXN0ZXJQbHVnaW4obmV3IEtpbWFpQWpheE1vZGFsRm9ybSgnLm1vZGFsLWFqYXgtZm9ybScpKTtcclxuICAgICAgICBraW1haS5yZWdpc3RlclBsdWdpbihuZXcgS2ltYWlSZWNlbnRBY3Rpdml0aWVzKCdsaS5ub3RpZmljYXRpb25zLW1lbnUnKSk7XHJcbiAgICAgICAga2ltYWkucmVnaXN0ZXJQbHVnaW4obmV3IEtpbWFpQWN0aXZlUmVjb3JkcygnbGkubWVzc2FnZXMtbWVudScsICdsaS5tZXNzYWdlcy1tZW51LWVtcHR5JykpO1xyXG4gICAgICAgIGtpbWFpLnJlZ2lzdGVyUGx1Z2luKG5ldyBLaW1haUFQSUxpbmsoJ2FwaS1saW5rJykpO1xyXG4gICAgICAgIGtpbWFpLnJlZ2lzdGVyUGx1Z2luKG5ldyBLaW1haUF1dG9jb21wbGV0ZSgnLmpzLWF1dG9jb21wbGV0ZScpKTtcclxuICAgICAgICBraW1haS5yZWdpc3RlclBsdWdpbihuZXcgS2ltYWlGb3JtKCkpO1xyXG4gICAgICAgIGtpbWFpLnJlZ2lzdGVyUGx1Z2luKG5ldyBLaW1haVRoZW1lSW5pdGlhbGl6ZXIoKSk7XHJcbiAgICAgICAga2ltYWkucmVnaXN0ZXJQbHVnaW4obmV3IEtpbWFpTXVsdGlVcGRhdGVUYWJsZSgpKTtcclxuICAgICAgICAvL2tpbWFpLnJlZ2lzdGVyUGx1Z2luKG5ldyBLaW1haVBhdXNlUmVjb3JkKCdsaS5tZXNzYWdlcy1tZW51IHVsLm1lbnUgbGknKSk7XHJcblxyXG4gICAgICAgIC8vIG5vdGlmeSBhbGwgbGlzdGVuZXJzIHRoYXQgS2ltYWkgcGx1Z2lucyBjYW4gbm93IGJlIHJlZ2lzdGVyZWRcclxuICAgICAgICBraW1haS5nZXRQbHVnaW4oJ2V2ZW50JykudHJpZ2dlcigna2ltYWkucGx1Z2luUmVnaXN0ZXInLCB7J2tpbWFpJzoga2ltYWl9KTtcclxuXHJcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBhbGwgcGx1Z2luc1xyXG4gICAgICAgIGtpbWFpLmdldFBsdWdpbnMoKS5tYXAocGx1Z2luID0+IHsgcGx1Z2luLmluaXQoKTsgfSk7XHJcblxyXG4gICAgICAgIC8vIG5vdGlmeSBhbGwgbGlzdGVuZXJzIHRoYXQgS2ltYWkgaXMgbm93IHJlYWR5IHRvIGJlIHVzZWRcclxuICAgICAgICBraW1haS5nZXRQbHVnaW4oJ2V2ZW50JykudHJpZ2dlcigna2ltYWkuaW5pdGlhbGl6ZWQnLCB7J2tpbWFpJzoga2ltYWl9KTtcclxuXHJcbiAgICAgICAgdGhpcy5raW1haSA9IGtpbWFpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEtpbWFpKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmtpbWFpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvKlxyXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgS2ltYWkgdGltZS10cmFja2luZyBhcHAuXHJcbiAqXHJcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXHJcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxyXG4gKi9cclxuXHJcbi8qIVxyXG4gKiBbS0lNQUldIEtpbWFpUGx1Z2luOiBiYXNlIGNsYXNzIGZvciBhbGwgcGx1Z2luc1xyXG4gKi9cclxuXHJcbmltcG9ydCBLaW1haUNvbnRhaW5lciBmcm9tIFwiLi9LaW1haUNvbnRhaW5lclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2ltYWlQbHVnaW4ge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3ZlcndyaXRlIHRoaXMgbWV0aG9kIHRvIGluaXRpYWxpemUgeW91ciBwbHVnaW4uXHJcbiAgICAgKlxyXG4gICAgICogSXQgaXMgY2FsbGVkIEFGVEVSIHNldENvbnRhaW5lcigpIGFuZCBBRlRFUiBET01Db250ZW50TG9hZGVkIHdhcyBmaXJlZC5cclxuICAgICAqIFlvdSBkb24ndCBoYXZlIGFjY2VzcyB0byB0aGUgY29udGFpbmVyIGJlZm9yZSB0aGlzIG1ldGhvZCFcclxuICAgICAqL1xyXG4gICAgaW5pdCgpIHtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIElmIHlvdSByZXR1cm4gYW4gSUQsIHlvdSBpbmRpY2F0ZSB0aGF0IHlvdXIgcGx1Z2luIGNhbiBiZSB1c2VkIGJ5IG90aGVyIHBsdWdpbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3N0cmluZ3xudWxsfVxyXG4gICAgICovXHJcbiAgICBnZXRJZCgpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7S2ltYWlDb250YWluZXJ9IGNvcmVcclxuICAgICAqL1xyXG4gICAgc2V0Q29udGFpbmVyKGNvcmUpIHtcclxuICAgICAgICBpZiAoIShjb3JlIGluc3RhbmNlb2YgS2ltYWlDb250YWluZXIpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUGx1Z2luIHdhcyBnaXZlbiBhbiBpbnZhbGlkIEtpbWFpQ29udGFpbmVyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NvcmUgPSBjb3JlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIG51bGwsIGlmIHhvdSBjYWxsIGl0IEJFRk9SRSBpbml0KCkuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge0tpbWFpQ29udGFpbmVyfVxyXG4gICAgICovXHJcbiAgICBnZXRDb250YWluZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvcmU7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi8qXHJcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBLaW1haSB0aW1lLXRyYWNraW5nIGFwcC5cclxuICpcclxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcclxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXHJcbiAqL1xyXG5cclxuLyohXHJcbiAqIFtLSU1BSV0gS2ltYWlUcmFuc2xhdGlvbjogaGFuZGxpbmcgdHJhbnNsYXRpb24gc3RyaW5nc1xyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtpbWFpVHJhbnNsYXRpb24ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRyYW5zbGF0aW9ucykge1xyXG4gICAgICAgIHRoaXMuX3RyYW5zbGF0aW9ucyA9IHRyYW5zbGF0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICBnZXQobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cmFuc2xhdGlvbnNbbmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgaGFzKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gbmFtZSBpbiB0aGlzLl90cmFuc2xhdGlvbnM7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi8qXHJcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBLaW1haSB0aW1lLXRyYWNraW5nIGFwcC5cclxuICpcclxuICogTWFpbiBKUyBhcHBsaWNhdGlvbiBmaWxlIGZvciBLaW1haSAyLiBUaGlzIGZpbGUgc2hvdWxkIGJlIGluY2x1ZGVkIGluIGFsbCBwYWdlcy5cclxuICpcclxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcclxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXHJcbiAqL1xyXG5cclxuLyohXHJcbiAqIFtLSU1BSV0gV3JhcHBlciBjbGFzcyBmb3IgbG9hZGluZyBLaW1haSBhcHAgaW4gYnJvd3NlciBzY3JpcHQgc2NvcGVcclxuICovXHJcblxyXG5pbXBvcnQgS2ltYWlMb2FkZXIgZnJvbSBcIi4vS2ltYWlMb2FkZXJcIjtcclxuXHJcbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xyXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG4gICAgICAgIGRlZmluZShbXSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHJvb3QuS2ltYWlXZWJMb2FkZXIgPSBmYWN0b3J5KCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xyXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByb290LktpbWFpV2ViTG9hZGVyID0gZmFjdG9yeSgpO1xyXG4gICAgfVxyXG59KHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY2xhc3MgS2ltYWlXZWJMb2FkZXIgZXh0ZW5kcyBLaW1haUxvYWRlciB7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEtpbWFpV2ViTG9hZGVyO1xyXG5cclxufSkpO1xyXG4iLCIvKlxyXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgS2ltYWkgdGltZS10cmFja2luZyBhcHAuXHJcbiAqXHJcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXHJcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxyXG4gKi9cclxuXHJcbi8qIVxyXG4gKiBbS0lNQUldIEtpbWFpQVBJOiBlYXN5IGFjY2VzcyB0byBBUEkgbWV0aG9kc1xyXG4gKi9cclxuXHJcbmltcG9ydCBqUXVlcnkgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IEtpbWFpUGx1Z2luIGZyb20gXCIuLi9LaW1haVBsdWdpblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2ltYWlBUEkgZXh0ZW5kcyBLaW1haVBsdWdpbiB7XHJcblxyXG4gICAgZ2V0SWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICdhcGknO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCh1cmwsIGRhdGEsIGNhbGxiYWNrU3VjY2VzcywgY2FsbGJhY2tFcnJvcikge1xyXG4gICAgICAgIGpRdWVyeS5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdYLUFVVEgtU0VTU0lPTic6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgc3VjY2VzczogY2FsbGJhY2tTdWNjZXNzLFxyXG4gICAgICAgICAgICBlcnJvcjogY2FsbGJhY2tFcnJvclxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHBhdGNoKHVybCwgZGF0YSwgY2FsbGJhY2tTdWNjZXNzLCBjYWxsYmFja0Vycm9yKSB7XHJcbiAgICAgICAgalF1ZXJ5LmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ1gtQVVUSC1TRVNTSU9OJzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGNhbGxiYWNrU3VjY2VzcyxcclxuICAgICAgICAgICAgZXJyb3I6IGNhbGxiYWNrRXJyb3JcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUodXJsLCBjYWxsYmFja1N1Y2Nlc3MsIGNhbGxiYWNrRXJyb3IpIHtcclxuICAgICAgICBqUXVlcnkuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnWC1BVVRILVNFU1NJT04nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGNhbGxiYWNrU3VjY2VzcyxcclxuICAgICAgICAgICAgZXJyb3I6IGNhbGxiYWNrRXJyb3JcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiLypcclxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEtpbWFpIHRpbWUtdHJhY2tpbmcgYXBwLlxyXG4gKlxyXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxyXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cclxuICovXHJcblxyXG5pbXBvcnQgS2ltYWlQbHVnaW4gZnJvbSBcIi4uL0tpbWFpUGx1Z2luXCI7XHJcblxyXG4vKipcclxuICogTmVlZHMgdG8gYmUgaW5pdGlhbGl6ZWQgd2l0aCBhIGNsYXNzIG5hbWUuXHJcbiAqXHJcbiAqIEEgbGluayBsaWtlIDxhIGhyZWY9IyBjbGFzcz1yZW1vdGVMaW5rPiBjYW4gYmUgYWN0aXZhdGVkIHdpdGg6XHJcbiAqIG5ldyBLaW1haUFQSUxpbmsoJ3JlbW90ZUxpbmsnKVxyXG4gKlxyXG4gKiBBbGxvd3MgdG8gYXNzaWduIHRoZSBnaXZlbiBzZWxlY3RvciB0byBhbnkgZWxlbWVudCwgd2hpY2ggdGhlbiBpcyB1c2VkIGFzIGNsaWNrLWhhbmRsZXJcclxuICogY2FsbGluZyBhbiBBUEkgbWV0aG9kIGFuZCB0cmlnZ2VyIHRoZSBldmVudCBmcm9tIGRhdGEtZXZlbnQgYXR0cmlidXRlIGFmdGVyd2FyZHMuXHJcbiAqXHJcbiAqIEBwYXJhbSBzZWxlY3RvclxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2ltYWlBUElMaW5rIGV4dGVuZHMgS2ltYWlQbHVnaW4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgIHdoaWxlICh0YXJnZXQgIT09IG51bGwgJiYgIXRhcmdldC5tYXRjaGVzKCdib2R5JykpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGYuc2VsZWN0b3IpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IHRhcmdldC5kYXRhc2V0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdXJsID0gYXR0cmlidXRlc1snaHJlZiddO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzLnF1ZXN0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5nZXRDb250YWluZXIoKS5nZXRQbHVnaW4oJ2FsZXJ0JykucXVlc3Rpb24oYXR0cmlidXRlcy5xdWVzdGlvbiwgZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX2NhbGxBcGkodXJsLCBhdHRyaWJ1dGVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fY2FsbEFwaSh1cmwsIGF0dHJpYnV0ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9jYWxsQXBpKHVybCwgYXR0cmlidXRlcylcclxuICAgIHtcclxuICAgICAgICBjb25zdCBtZXRob2QgPSBhdHRyaWJ1dGVzWydtZXRob2QnXTtcclxuICAgICAgICBjb25zdCBldmVudE5hbWUgPSBhdHRyaWJ1dGVzWydldmVudCddO1xyXG4gICAgICAgIGNvbnN0IEFQSSA9IHRoaXMuZ2V0Q29udGFpbmVyKCkuZ2V0UGx1Z2luKCdhcGknKTtcclxuICAgICAgICBjb25zdCBldmVudGluZyA9IHRoaXMuZ2V0Q29udGFpbmVyKCkuZ2V0UGx1Z2luKCdldmVudCcpO1xyXG4gICAgICAgIGNvbnN0IGFsZXJ0ID0gdGhpcy5nZXRDb250YWluZXIoKS5nZXRQbHVnaW4oJ2FsZXJ0Jyk7XHJcbiAgICAgICAgY29uc3Qgc3VjY2Vzc0hhbmRsZSA9IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBldmVudGluZy50cmlnZ2VyKGV2ZW50TmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzLm1zZ1N1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0LnN1Y2Nlc3MoYXR0cmlidXRlcy5tc2dTdWNjZXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgZXJyb3JIYW5kbGUgPSBmdW5jdGlvbih4aHIsIGVycikge1xyXG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9ICdhY3Rpb24udXBkYXRlLmVycm9yJztcclxuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXMubXNnRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBhdHRyaWJ1dGVzLm1zZ0Vycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh4aHIucmVzcG9uc2VKU09OICYmIHhoci5yZXNwb25zZUpTT04ubWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgZXJyID0geGhyLnJlc3BvbnNlSlNPTi5tZXNzYWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFsZXJ0LmVycm9yKG1lc3NhZ2UsIGVycik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ1BBVENIJykge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHt9O1xyXG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlcy5wYXlsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhICA9IGF0dHJpYnV0ZXMucGF5bG9hZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBBUEkucGF0Y2godXJsLCBkYXRhLCBzdWNjZXNzSGFuZGxlLCBlcnJvckhhbmRsZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09ICdERUxFVEUnKSB7XHJcbiAgICAgICAgICAgIEFQSS5kZWxldGUodXJsLCBzdWNjZXNzSGFuZGxlLCBlcnJvckhhbmRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvKlxyXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgS2ltYWkgdGltZS10cmFja2luZyBhcHAuXHJcbiAqXHJcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXHJcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxyXG4gKi9cclxuXHJcbi8qIVxyXG4gKiBbS0lNQUldIEtpbWFpQWN0aXZlUmVjb3JkczogcmVzcG9uc2libGUgdG8gZGlzcGxheSB0aGUgdXNlcnMgYWN0aXZlIHJlY29yZHNcclxuICovXHJcblxyXG5pbXBvcnQgS2ltYWlQbHVnaW4gZnJvbSAnLi4vS2ltYWlQbHVnaW4nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2ltYWlBY3RpdmVSZWNvcmRzIGV4dGVuZHMgS2ltYWlQbHVnaW4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBzZWxlY3RvckVtcHR5KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3I7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RvckVtcHR5ID0gc2VsZWN0b3JFbXB0eTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJZCgpIHtcclxuICAgICAgICByZXR1cm4gJ2FjdGl2ZS1yZWNvcmRzJztcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpO1xyXG5cclxuICAgICAgICAvLyB0aGUgbWVudSBjYW4gYmUgaGlkZGVuIGlmIHVzZXIgaGFzIG5vIHBlcm1pc3Npb25zIHRvIHNlZSBpdFxyXG4gICAgICAgIGlmIChtZW51ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duID0gbWVudS5xdWVyeVNlbGVjdG9yKCd1bC5kcm9wZG93bi1tZW51Jyk7XHJcblxyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcyA9IGRyb3Bkb3duLmRhdGFzZXQ7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdCA9IGRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3IoJ2xpID4gdWwubWVudScpO1xyXG4gICAgICAgIHRoaXMubGFiZWwgPSBtZW51LnF1ZXJ5U2VsZWN0b3IoJ2EgPiBzcGFuLmxhYmVsJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZSA9IGZ1bmN0aW9uKCkgeyBzZWxmLnJlbG9hZEFjdGl2ZVJlY29yZHMoKTsgfTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2ltYWkudGltZXNoZWV0VXBkYXRlJywgaGFuZGxlKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdraW1haS5hY3Rpdml0eVVwZGF0ZScsIGhhbmRsZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2ltYWkucHJvamVjdFVwZGF0ZScsIGhhbmRsZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2ltYWkuY3VzdG9tZXJVcGRhdGUnLCBoYW5kbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGVtcHR5TGlzdCgpIHtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIF90b2dnbGVNZW51KGhhc0VudHJpZXMpIHtcclxuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKTtcclxuICAgICAgICBjb25zdCBtZW51RW1wdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JFbXB0eSk7XHJcblxyXG4gICAgICAgIG1lbnUuc3R5bGUuZGlzcGxheSA9IGhhc0VudHJpZXMgPyAnaW5saW5lLWJsb2NrJyA6ICdub25lJztcclxuICAgICAgICBpZiAobWVudUVtcHR5ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG1lbnVFbXB0eS5zdHlsZS5kaXNwbGF5ID0gIWhhc0VudHJpZXMgPyAnaW5saW5lLWJsb2NrJyA6ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RW50cmllcyhlbnRyaWVzKSB7XHJcbiAgICAgICAgdGhpcy5fdG9nZ2xlTWVudShlbnRyaWVzLmxlbmd0aCA+IDApO1xyXG5cclxuICAgICAgICBpZiAoZW50cmllcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5pbm5lclRleHQgPSAnJztcclxuICAgICAgICAgICAgdGhpcy5lbXB0eUxpc3QoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGh0bWxUb0luc2VydCA9ICcnO1xyXG4gICAgICAgIGNvbnN0IGR1cmF0aW9ucyA9IHRoaXMuZ2V0Q29udGFpbmVyKCkuZ2V0UGx1Z2luKCd0aW1lc2hlZXQtZHVyYXRpb24nKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgdGltZXNoZWV0IG9mIGVudHJpZXMpIHtcclxuICAgICAgICAgICAgaHRtbFRvSW5zZXJ0ICs9XHJcbiAgICAgICAgICAgICAgICAgICAgYDxsaT5gICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYDxhIGhyZWY9XCIkeyB0aGlzLmF0dHJpYnV0ZXNbJ2hyZWYnXS5yZXBsYWNlKCcwMDAnLCB0aW1lc2hlZXQuaWQpIH1cIiBkYXRhLWV2ZW50PVwia2ltYWkudGltZXNoZWV0U3RvcCBraW1haS50aW1lc2hlZXRVcGRhdGVcIiBjbGFzcz1cImFwaS1saW5rXCIgZGF0YS1tZXRob2Q9XCJQQVRDSFwiIGRhdGEtbXNnLWVycm9yPVwidGltZXNoZWV0LnN0b3AuZXJyb3JcIiBkYXRhLW1zZy1zdWNjZXNzPVwidGltZXNoZWV0LnN0b3Auc3VjY2Vzc1wiPmAgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJwdWxsLWxlZnRcIj5gICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgPGkgY2xhc3M9XCIkeyB0aGlzLmF0dHJpYnV0ZXNbJ2ljb24nXSB9IGZhLTJ4XCI+PC9pPmAgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYDwvZGl2PmAgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYDxoND5gICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgPHNwYW4+JHsgdGltZXNoZWV0LmFjdGl2aXR5Lm5hbWUgfTwvc3Bhbj5gICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgPHNtYWxsPmAgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgPHNwYW4gZGF0YS10aXRsZT1cInRydWVcIiBkYXRhLXNpbmNlPVwiJHsgdGltZXNoZWV0LmJlZ2luIH1cIiBkYXRhLWZvcm1hdD1cIiR7IHRoaXMuYXR0cmlidXRlc1snZm9ybWF0J10gfVwiPiR7IGR1cmF0aW9ucy5mb3JtYXREdXJhdGlvbih0aW1lc2hlZXQuZHVyYXRpb24sIHRoaXMuYXR0cmlidXRlc1snZm9ybWF0J10pIH08L3NwYW4+YCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYDwvc21hbGw+YCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgPC9oND5gICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA8cD4keyB0aW1lc2hlZXQucHJvamVjdC5uYW1lIH0gKCR7IHRpbWVzaGVldC5wcm9qZWN0LmN1c3RvbWVyLm5hbWUgfSk8L3A+YCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGA8L2E+YCArXHJcbiAgICAgICAgICAgICAgICAgICAgYDwvbGk+YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxhYmVsLmRhdGFzZXQud2FybmluZyA8IGVudHJpZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuY2xhc3NMaXN0ID0gJ2xhYmVsIGxhYmVsLWRhbmdlcic7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5jbGFzc0xpc3QgPSAnbGFiZWwgbGFiZWwtd2FybmluZyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGFiZWwuaW5uZXJUZXh0ID0gZW50cmllcy5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5pbm5lckhUTUwgPSBodG1sVG9JbnNlcnQ7XHJcblxyXG4gICAgICAgIGR1cmF0aW9ucy51cGRhdGVSZWNvcmRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVsb2FkQWN0aXZlUmVjb3JkcygpIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICBjb25zdCBBUEk9IHRoaXMuZ2V0Q29udGFpbmVyKCkuZ2V0UGx1Z2luKCdhcGknKTtcclxuXHJcbiAgICAgICAgQVBJLmdldCh0aGlzLmF0dHJpYnV0ZXNbJ2FwaSddLCB7fSwgZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHNlbGYuc2V0RW50cmllcyhyZXN1bHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvKlxyXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgS2ltYWkgdGltZS10cmFja2luZyBhcHAuXHJcbiAqXHJcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXHJcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxyXG4gKi9cclxuXHJcbi8qIVxyXG4gKiBbS0lNQUldIEtpbWFpQWN0aXZlUmVjb3Jkc0R1cmF0aW9uOiBhY3RpdmF0ZSB0aGUgdXBkYXRlcyBmb3IgYWxsIGFjdGl2ZSB0aW1lc2hlZXQgcmVjb3JkcyBvbiB0aGlzIHBhZ2VcclxuICovXHJcblxyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBLaW1haVBsdWdpbiBmcm9tICcuLi9LaW1haVBsdWdpbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLaW1haUFjdGl2ZVJlY29yZHNEdXJhdGlvbiBleHRlbmRzIEtpbWFpUGx1Z2luIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGdldElkKCkge1xyXG4gICAgICAgIHJldHVybiAndGltZXNoZWV0LWR1cmF0aW9uJztcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmVjb3JkcygpO1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZSA9IGZ1bmN0aW9uKCkgeyBzZWxmLnVwZGF0ZVJlY29yZHMoKTsgfTtcclxuICAgICAgICB0aGlzLl91cGRhdGVzSGFuZGxlciA9IHNldEludGVydmFsKGhhbmRsZSwgMTAwMDApO1xyXG4gICAgICAgIC8vIHRoaXMgd2lsbCBwcm9iYWJseSBub3Qgd29yayBhcyBleHBlY3RlZCwgYXMgb3RoZXIgZXZlbnQtaGFuZGxlciBtaWdodCBuZWVkIGxvbmdlciB0byB1cGRhdGUgdGhlIERPTVxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tpbWFpLnRpbWVzaGVldFVwZGF0ZScsIGhhbmRsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdW5yZWdpc3RlclVwZGF0ZXMoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl91cGRhdGVzSGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUmVjb3JkcygpIHtcclxuICAgICAgICBsZXQgZHVyYXRpb25zID0gW107XHJcbiAgICAgICAgY29uc3QgYWN0aXZlUmVjb3JkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zZWxlY3Rvcik7XHJcblxyXG4gICAgICAgIGlmIChhY3RpdmVSZWNvcmRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5kYXRhc2V0Wyd0aXRsZSddO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IobGV0IHJlY29yZCBvZiBhY3RpdmVSZWNvcmRzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpbmNlID0gcmVjb3JkLmdldEF0dHJpYnV0ZSgnZGF0YS1zaW5jZScpO1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtYXQgPSByZWNvcmQuZ2V0QXR0cmlidXRlKCdkYXRhLWZvcm1hdCcpO1xyXG4gICAgICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuZm9ybWF0RHVyYXRpb24oc2luY2UsIGZvcm1hdCk7XHJcbiAgICAgICAgICAgIGlmIChyZWNvcmQuZ2V0QXR0cmlidXRlKCdkYXRhLXRpdGxlJykgIT09IG51bGwgJiYgZHVyYXRpb24gIT09ICc/Jykge1xyXG4gICAgICAgICAgICAgICAgZHVyYXRpb25zLnB1c2goZHVyYXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlY29yZC50ZXh0Q29udGVudCA9IGR1cmF0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGR1cmF0aW9ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRpdGxlID0gZHVyYXRpb25zLnNoaWZ0KCk7XHJcbiAgICAgICAgbGV0IHByZWZpeCA9ICcgfCAnO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBkdXJhdGlvbiBvZiBkdXJhdGlvbnMuc2xpY2UoMCwgMikpIHtcclxuICAgICAgICAgICAgdGl0bGUgKz0gcHJlZml4ICsgZHVyYXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybWF0RHVyYXRpb24oc2luY2UsIGZvcm1hdCkge1xyXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gbW9tZW50LmR1cmF0aW9uKG1vbWVudChuZXcgRGF0ZSgpKS5kaWZmKG1vbWVudChzaW5jZSkpKTtcclxuXHJcbiAgICAgICAgbGV0IGhvdXJzID0gcGFyc2VJbnQoZHVyYXRpb24uYXNIb3VycygpKS50b1N0cmluZygpO1xyXG4gICAgICAgIGxldCBtaW51dGVzID0gZHVyYXRpb24ubWludXRlcygpO1xyXG4gICAgICAgIGxldCBzZWNvbmRzID0gZHVyYXRpb24uc2Vjb25kcygpO1xyXG5cclxuICAgICAgICBpZiAoaG91cnMgPCAwIHx8IG1pbnV0ZXMgPCAwIHx8IHNlY29uZHMgPCAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnPyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzcGVjaWFsIGNhc2UgZm9yIGhvdXJzLCBhcyB0aGV5IGNhbiBvdmVyZmxvdyB0aGUgMjRoIGJhcnJpZXIgLSBLaW1haSBkb2VzIG5vdCBzdXBwb3J0IGRheXMgYXMgZHVyYXRpb24gdW5pdFxyXG4gICAgICAgIGlmIChob3Vycy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgaG91cnMgPSAnMCcgKyBob3VycztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmb3JtYXQucmVwbGFjZSgnJWgnLCBob3VycykucmVwbGFjZSgnJW0nLCAoJzAnK21pbnV0ZXMpLnN1YnN0cigtMikpLnJlcGxhY2UoJyVzJywgKCcwJytzZWNvbmRzKS5zdWJzdHIoLTIpKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgS2ltYWkgdGltZS10cmFja2luZyBhcHAuXHJcbiAqXHJcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXHJcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxyXG4gKi9cclxuXHJcbi8qIVxyXG4gKiBbS0lNQUldIEtpbWFpQWpheE1vZGFsRm9ybVxyXG4gKlxyXG4gKiBhbGxvd3MgdG8gYXNzaWduIHRoZSBnaXZlbiBzZWxlY3RvciB0byBhbnkgZWxlbWVudCwgd2hpY2ggdGhlbiBpcyB1c2VkIGFzIGNsaWNrLWhhbmRsZXI6XHJcbiAqIG9wZW5pbmcgYSBtb2RhbCB3aXRoIHRoZSBjb250ZW50IGZyb20gdGhlIFVSTCBnaXZlbiBpbiB0aGUgZWxlbWVudHMgJ2RhdGEtaHJlZicgb3IgJ2hyZWYnIGF0dHJpYnV0ZVxyXG4gKi9cclxuXHJcbmltcG9ydCBqUXVlcnkgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IEtpbWFpUmVkdWNlZENsaWNrSGFuZGxlciBmcm9tIFwiLi9LaW1haVJlZHVjZWRDbGlja0hhbmRsZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtpbWFpQWpheE1vZGFsRm9ybSBleHRlbmRzIEtpbWFpUmVkdWNlZENsaWNrSGFuZGxlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJZCgpIHtcclxuICAgICAgICByZXR1cm4gJ21vZGFsJztcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLm1vZGFsID0galF1ZXJ5KCcjcmVtb3RlX2Zvcm1fbW9kYWwnKTtcclxuICAgICAgICB0aGlzLm1vZGFsLm9uKCdoaWRlLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLmdldENvbnRhaW5lcigpLmdldFBsdWdpbignZXZlbnQnKS50cmlnZ2VyKCdtb2RhbC1oaWRlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBraWxsIGFsbCByZWZlcmVuY2VzLCBzbyBHQyBjYW4ga2ljayBpblxyXG4gICAgICAgICAgICBzZWxmLmdldENvbnRhaW5lcigpLmdldFBsdWdpbignZm9ybScpLmRlc3Ryb3lGb3JtKHNlbGYuX2dldEZvcm1JZGVudGlmaWVyKCkpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNyZW1vdGVfZm9ybV9tb2RhbCAubW9kYWwtYm9keScpLnJlcGxhY2VXaXRoKCcnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5tb2RhbC5vbignc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi5nZXRDb250YWluZXIoKS5nZXRQbHVnaW4oJ2V2ZW50JykudHJpZ2dlcignbW9kYWwtc2hvdycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubW9kYWwub24oJ3Nob3duLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyB3b3JrYXJvdW5kIGZvciBhdXRvZm9jdXMgYXR0cmlidXRlLCBhcyB0aGUgbW9kYWwgXCJzdGVhbHNcIiBpdFxyXG4gICAgICAgICAgICBqUXVlcnkoc2VsZi5fZ2V0Rm9ybUlkZW50aWZpZXIoKSkuZmluZCgnaW5wdXRbdHlwZT10ZXh0XSx0ZXh0YXJlYSxzZWxlY3QnKS5maWx0ZXIoJzpub3QoXCJbZGF0YS1kYXRldGltZXBpY2tlcj1vbl1cIiknKS5maWx0ZXIoJzp2aXNpYmxlOmZpcnN0JykuZm9jdXMoKS5kZWxheSgxMDAwKS5mb2N1cygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9hZGRDbGlja0hhbmRsZXIodGhpcy5zZWxlY3RvciwgZnVuY3Rpb24oaHJlZikge1xyXG4gICAgICAgICAgICBzZWxmLm9wZW5VcmxJbk1vZGFsKGhyZWYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5VcmxJbk1vZGFsKHVybCwgZXJyb3JIYW5kbGVyKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChlcnJvckhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBlcnJvckhhbmRsZXIgPSBmdW5jdGlvbih4aHIsIGVycikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IHVuZGVmaW5lZCB8fCB4aHIuc3RhdHVzICE9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB1cmw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBqUXVlcnkuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihodG1sKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLl9vcGVuRm9ybUluTW9kYWwoaHRtbCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnJvckhhbmRsZXJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIENTUyBzZWxlY3RvciBmb3IgdGhlIG1vZGFsIGZvcm0uXHJcbiAgICAgKiBcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfZ2V0Rm9ybUlkZW50aWZpZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuICcjcmVtb3RlX2Zvcm1fbW9kYWwgLm1vZGFsLWNvbnRlbnQgZm9ybSc7XHJcbiAgICB9XHJcblxyXG4gICAgX29wZW5Gb3JtSW5Nb2RhbChodG1sKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGxldCBmb3JtSWRlbnRpZmllciA9IHRoaXMuX2dldEZvcm1JZGVudGlmaWVyKCk7XHJcbiAgICAgICAgLy8gaWYgYW55IG9mIHRoZXNlIGlzIGZvdW5kIGluIGEgcmVzcG9uc2UsIHRoZSBmb3JtIHdpbGwgYmUgcmUtZGlzcGxheWVkXHJcbiAgICAgICAgbGV0IGZsYXNoRXJyb3JJZGVudGlmaWVyID0gJ2Rpdi5hbGVydC1lcnJvcic7XHJcbiAgICAgICAgLy8gbWVzc2FnZXMgdG8gc2hvdyBhYm92ZSB0aGUgZm9ybVxyXG4gICAgICAgIGxldCBmbGFzaE1lc3NhZ2VJZGVudGlmaWVyID0gJ2Rpdi5hbGVydCc7XHJcbiAgICAgICAgbGV0IGZvcm0gPSBqUXVlcnkoZm9ybUlkZW50aWZpZXIpO1xyXG4gICAgICAgIGxldCByZW1vdGVNb2RhbCA9IHRoaXMubW9kYWw7XHJcblxyXG4gICAgICAgIC8vIHdpbGwgYmUgKHJlLSlhY3RpdmF0ZWQgbGF0ZXJcclxuICAgICAgICBmb3JtLm9mZignc3VibWl0Jyk7XHJcblxyXG4gICAgICAgIC8vIGxvYWQgbmV3IGZvcm0gZnJvbSBnaXZlbiBjb250ZW50XHJcbiAgICAgICAgaWYgKGpRdWVyeShodG1sKS5maW5kKCcjZm9ybV9tb2RhbCAubW9kYWwtY29udGVudCcpLmxlbmd0aCA+IDAgKSB7XHJcbiAgICAgICAgICAgIC8vIHN3aXRjaCBjbGFzc2VzLCBpbiBjYXNlIHRoZSBtb2RhbCB0eXBlIGNoYW5nZWRcclxuICAgICAgICAgICAgcmVtb3RlTW9kYWwub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZW1vdGVNb2RhbC5oYXNDbGFzcygnbW9kYWwtZGFuZ2VyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdGVNb2RhbC5yZW1vdmVDbGFzcygnbW9kYWwtZGFuZ2VyJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGpRdWVyeShodG1sKS5maW5kKCcjZm9ybV9tb2RhbCcpLmhhc0NsYXNzKCdtb2RhbC1kYW5nZXInKSkge1xyXG4gICAgICAgICAgICAgICAgcmVtb3RlTW9kYWwuYWRkQ2xhc3MoJ21vZGFsLWRhbmdlcicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBqUXVlcnkoJyNyZW1vdGVfZm9ybV9tb2RhbCAubW9kYWwtY29udGVudCcpLnJlcGxhY2VXaXRoKFxyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KGh0bWwpLmZpbmQoJyNmb3JtX21vZGFsIC5tb2RhbC1jb250ZW50JylcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGFjdGl2YXRlIG5ldyBsb2FkZWQgd2lkZ2V0c1xyXG4gICAgICAgICAgICBzZWxmLmdldENvbnRhaW5lcigpLmdldFBsdWdpbignZm9ybScpLmFjdGl2YXRlRm9ybShmb3JtSWRlbnRpZmllcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzaG93IGVycm9yIGZsYXNoIG1lc3NhZ2VzXHJcbiAgICAgICAgbGV0IGZsYXNoTWVzc2FnZXMgPSBqUXVlcnkoaHRtbCkuZmluZChmbGFzaE1lc3NhZ2VJZGVudGlmaWVyKTtcclxuICAgICAgICBpZiAoZmxhc2hNZXNzYWdlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnI3JlbW90ZV9mb3JtX21vZGFsIC5tb2RhbC1ib2R5JykucHJlcGVuZChmbGFzaE1lc3NhZ2VzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gYSBmaXggZm9yIGZpcmVmb3ggZm9jdXMgcHJvYmxlbXMgd2l0aCBkYXRlcGlja2VyIGluIG1vZGFsXHJcbiAgICAgICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9rZXZpbnBhcHN0L2tpbWFpMi9pc3N1ZXMvNjE4XHJcbiAgICAgICAgbGV0IGVuZm9yY2VNb2RhbEZvY3VzRm4gPSBqUXVlcnkuZm4ubW9kYWwuQ29uc3RydWN0b3IucHJvdG90eXBlLmVuZm9yY2VGb2N1cztcclxuICAgICAgICBqUXVlcnkuZm4ubW9kYWwuQ29uc3RydWN0b3IucHJvdG90eXBlLmVuZm9yY2VGb2N1cyA9IGZ1bmN0aW9uKCkge307XHJcbiAgICAgICAgcmVtb3RlTW9kYWwub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgalF1ZXJ5LmZuLm1vZGFsLkNvbnN0cnVjdG9yLnByb3RvdHlwZS5lbmZvcmNlRm9jdXMgPSBlbmZvcmNlTW9kYWxGb2N1c0ZuO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkuZ2V0UGx1Z2luKCd0b29sYmFyJykuaGlkZSgpO1xyXG4gICAgICAgIHJlbW90ZU1vZGFsLm1vZGFsKCdzaG93Jyk7XHJcblxyXG4gICAgICAgIC8vIHRoZSBuZXcgZm9ybSB0aGF0IHdhcyBsb2FkZWQgdmlhIGFqYXhcclxuICAgICAgICBmb3JtID0galF1ZXJ5KGZvcm1JZGVudGlmaWVyKTtcclxuXHJcbiAgICAgICAgLy8gY2xpY2sgaGFuZGxlciBmb3IgbW9kYWwgc2F2ZSBidXR0b24sIHRvIHNlbmQgZm9ybXMgdmlhIGFqYXhcclxuICAgICAgICBmb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ0biA9IGpRdWVyeShmb3JtSWRlbnRpZmllciArICcgYnV0dG9uW3R5cGU9c3VibWl0XScpLmJ1dHRvbignbG9hZGluZycpO1xyXG4gICAgICAgICAgICBjb25zdCBldmVudE5hbWUgPSBmb3JtLmF0dHIoJ2RhdGEtZm9ybS1ldmVudCcpO1xyXG4gICAgICAgICAgICBjb25zdCBldmVudHMgPSBzZWxmLmdldENvbnRhaW5lcigpLmdldFBsdWdpbignZXZlbnQnKTtcclxuICAgICAgICAgICAgY29uc3QgYWxlcnQgPSBzZWxmLmdldENvbnRhaW5lcigpLmdldFBsdWdpbignYWxlcnQnKTtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgalF1ZXJ5LmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBmb3JtLmF0dHIoJ2FjdGlvbicpLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogZm9ybS5hdHRyKCdtZXRob2QnKSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGZvcm0uc2VyaWFsaXplKCksXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihodG1sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuLmJ1dHRvbigncmVzZXQnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaGFzRmllbGRFcnJvciA9IGpRdWVyeShodG1sKS5maW5kKCcjZm9ybV9tb2RhbCAubW9kYWwtY29udGVudCAuaGFzLWVycm9yJykubGVuZ3RoID4gMDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaGFzRm9ybUVycm9yID0galF1ZXJ5KGh0bWwpLmZpbmQoJyNmb3JtX21vZGFsIC5tb2RhbC1jb250ZW50IHVsLmxpc3QtdW5zdHlsZWQgbGkudGV4dC1kYW5nZXInKS5sZW5ndGggPiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBoYXNGbGFzaEVycm9yID0galF1ZXJ5KGh0bWwpLmZpbmQoZmxhc2hFcnJvcklkZW50aWZpZXIpLmxlbmd0aCA+IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoYXNGaWVsZEVycm9yIHx8IGhhc0Zvcm1FcnJvciB8fCBoYXNGbGFzaEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX29wZW5Gb3JtSW5Nb2RhbChodG1sKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudHMudHJpZ2dlcihldmVudE5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJ5IHRvIGZpbmQgZm9ybSBkZWZpbmVkIG1lc3NhZ2VzIGZpcnN0IC4uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbXNnID0gZm9ybS5hdHRyKCdkYXRhLW1zZy1zdWNjZXNzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtc2cgPT09IG51bGwgfHwgbXNnID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIC4uLiBidXQgaWYgbm9uZSB3YXMgYXZhaWxhYmxlLCBjaGVjayB0aGUgcmVzcG9uc2UgdG8gZmluZCBzZXJ2ZXIgcmVuZGVyZWQgZmxhc2gtbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZsYXNoTWVzc2FnZSA9IGpRdWVyeShodG1sKS5maW5kKCdzZWN0aW9uLmNvbnRlbnQgZGl2LnJvdyBkaXYuYWxlcnQuYWxlcnQtc3VjY2VzcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZsYXNoTWVzc2FnZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZsYXNoQ29udGVudCA9IGZsYXNoTWVzc2FnZS5jb250ZW50cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmbGFzaENvbnRlbnQubGVuZ3RoID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyA9IGZsYXNoQ29udGVudFsyXS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIC4uLiBhbmQgaWYgZXZlbiB0aGF0IGlzIG5vdCBhdmFpbGFibGUsIHdlIHVzZSBhIGdlbmVyaWMgZmFsbGJhY2sgbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobXNnID09PSBudWxsIHx8IG1zZyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgPSAnYWN0aW9uLnVwZGF0ZS5zdWNjZXNzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdGVNb2RhbC5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5zdWNjZXNzKG1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGZvcm0uYXR0cignZGF0YS1tc2ctZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZSA9PT0gbnVsbCB8fCBtZXNzYWdlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9ICdhY3Rpb24udXBkYXRlLmVycm9yJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5yZXNwb25zZUpTT04gJiYgeGhyLnJlc3BvbnNlSlNPTi5tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVyciA9IHhoci5yZXNwb25zZUpTT04ubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHhoci5zdGF0dXMgJiYgeGhyLnN0YXR1c1RleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyID0gJ1snICsgeGhyLnN0YXR1cyArJ10gJyArIHhoci5zdGF0dXNUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhbGVydC5lcnJvcihtZXNzYWdlLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgdXNlZnVsIGZvciBjaGFuZ2luZyBmb3JtIGZpZWxkcyBhbmQgcmV0cnlpbmcgdG8gc2F2ZSAoYW5kIGluIGRldmVsb3BtZW50IHRvIHRlc3QgZm9ybSBjaGFuZ2VzKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5idXR0b24oJ3Jlc2V0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTUwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvKlxyXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgS2ltYWkgdGltZS10cmFja2luZyBhcHAuXHJcbiAqXHJcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXHJcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxyXG4gKi9cclxuXHJcbi8qIVxyXG4gKiBbS0lNQUldIEtpbWFpQWxlcnQ6IG5vdGlmaWNhdGlvbnMgZm9yIEtpbWFpXHJcbiAqL1xyXG5cclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXHJcbmltcG9ydCBLaW1haVBsdWdpbiBmcm9tIFwiLi4vS2ltYWlQbHVnaW5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtpbWFpQWxlcnQgZXh0ZW5kcyBLaW1haVBsdWdpbiB7XHJcblxyXG4gICAgZ2V0SWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICdhbGVydCc7XHJcbiAgICB9XHJcblxyXG4gICAgZXJyb3IodGl0bGUsIG1lc3NhZ2UpIHtcclxuICAgICAgICBjb25zdCB0cmFuc2xhdGlvbiA9IHRoaXMuZ2V0Q29udGFpbmVyKCkuZ2V0VHJhbnNsYXRpb24oKTtcclxuICAgICAgICBpZiAodHJhbnNsYXRpb24uaGFzKHRpdGxlKSkge1xyXG4gICAgICAgICAgICB0aXRsZSA9IHRyYW5zbGF0aW9uLmdldCh0aXRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0cmFuc2xhdGlvbi5oYXMobWVzc2FnZSkpIHtcclxuICAgICAgICAgICAgbWVzc2FnZSA9IHRyYW5zbGF0aW9uLmdldChtZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLnJlcGxhY2UoJyVyZWFzb24lJywgJycpLFxyXG4gICAgICAgICAgICB0ZXh0OiBtZXNzYWdlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Y2Nlc3MobWVzc2FnZSkge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gdGhpcy5nZXRDb250YWluZXIoKS5nZXRUcmFuc2xhdGlvbigpO1xyXG5cclxuICAgICAgICBpZiAodHJhbnNsYXRpb24uaGFzKG1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB0cmFuc2xhdGlvbi5nZXQobWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICB0aW1lcjogMjAwMCxcclxuICAgICAgICAgICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgICAgICAgICAgdG9hc3Q6IHRydWUsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2sgcmVjZWl2ZXMgYSB2YWx1ZSBhbmQgbmVlZHMgdG8gZGVjaWRlIHdoYXQgc2hvdWxkIGhhcHBlbiB3aXRoIGl0XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2VcclxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xyXG4gICAgICovXHJcbiAgICBxdWVzdGlvbihtZXNzYWdlLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gdGhpcy5nZXRDb250YWluZXIoKS5nZXRUcmFuc2xhdGlvbigpO1xyXG5cclxuICAgICAgICBpZiAodHJhbnNsYXRpb24uaGFzKG1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB0cmFuc2xhdGlvbi5nZXQobWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgaWNvbjogJ3F1ZXN0aW9uJyxcclxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IHRyYW5zbGF0aW9uLmdldCgnY29uZmlybScpLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiB0cmFuc2xhdGlvbi5nZXQoJ2NhbmNlbCcpXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHJlc3VsdC52YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi8qXHJcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBLaW1haSB0aW1lLXRyYWNraW5nIGFwcC5cclxuICpcclxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcclxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXHJcbiAqL1xyXG5cclxuLyohXHJcbiAqIFtLSU1BSV0gS2ltYWlBbHRlcm5hdGl2ZUxpbmtzXHJcbiAqXHJcbiAqIGFsbG93cyB0byBhc3NpZ24gdGhlIGdpdmVuIHNlbGVjdG9yIHRvIGFueSBlbGVtZW50LCB3aGljaCB0aGVuIGlzIHVzZWQgYXMgY2xpY2staGFuZGxlclxyXG4gKiByZWRpcmVjdGluZyB0byB0aGUgVVJMIGdpdmVuIGluIHRoZSBlbGVtZW50cyAnZGF0YS1ocmVmJyBvciAnaHJlZicgYXR0cmlidXRlXHJcbiAqL1xyXG5cclxuaW1wb3J0IGpRdWVyeSBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgS2ltYWlSZWR1Y2VkQ2xpY2tIYW5kbGVyIGZyb20gXCIuL0tpbWFpUmVkdWNlZENsaWNrSGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2ltYWlBbHRlcm5hdGl2ZUxpbmtzIGV4dGVuZHMgS2ltYWlSZWR1Y2VkQ2xpY2tIYW5kbGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5fYWRkQ2xpY2tIYW5kbGVyKHRoaXMuc2VsZWN0b3IsIGZ1bmN0aW9uKGhyZWYpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gaHJlZjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiLypcclxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEtpbWFpIHRpbWUtdHJhY2tpbmcgYXBwLlxyXG4gKlxyXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxyXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cclxuICovXHJcblxyXG5pbXBvcnQgalF1ZXJ5IGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBLaW1haVBsdWdpbiBmcm9tIFwiLi4vS2ltYWlQbHVnaW5cIjtcclxuXHJcbi8qKlxyXG4gKiBTdXBwb3J0aW5nIGF1dG8tY29tcGxldGUgZmllbGRzIHZpYSBBUEkuXHJcbiAqIEN1cnJlbnRseSB1c2VkIGZvciB0aW1lc2hlZXQgdGFnZ2luZyBpbiB0b29sYmFyIGFuZCBlZGl0IGRpYWxvZ3MuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLaW1haUF1dG9jb21wbGV0ZSBleHRlbmRzIEtpbWFpUGx1Z2luIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5taW5DaGFycyA9IHRoaXMuZ2V0Q29udGFpbmVyKCkuZ2V0Q29uZmlndXJhdGlvbigpLmdldCgnYXV0b0NvbXBsZXRlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICdhdXRvY29tcGxldGUnO1xyXG4gICAgfVxyXG5cclxuICAgIHNwbGl0VGFnTGlzdCh2YWwpIHtcclxuICAgICAgICByZXR1cm4gdmFsLnNwbGl0KC8sXFxzKi8pO1xyXG4gICAgfVxyXG5cclxuICAgIGV4dHJhY3RMYXN0VGFnKHRlcm0pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcGxpdFRhZ0xpc3QodGVybSkucG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGVBdXRvY29tcGxldGUoc2VsZWN0b3IpIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICBcclxuICAgICAgICBqUXVlcnkoc2VsZWN0b3IgKyAnICcgKyB0aGlzLnNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRGaWVsZCA9IGpRdWVyeSh0aGlzKTtcclxuICAgICAgICAgICAgY29uc3QgYXBpVXJsID0gY3VycmVudEZpZWxkLmF0dHIoJ2RhdGEtYXV0b2NvbXBsZXRlLXVybCcpO1xyXG4gICAgICAgICAgICBjb25zdCBBUEkgPSBzZWxmLmdldENvbnRhaW5lcigpLmdldFBsdWdpbignYXBpJyk7XHJcblxyXG4gICAgICAgICAgICBjdXJyZW50RmllbGRcclxuICAgICAgICAgICAgICAgIC8vIGRvbid0IG5hdmlnYXRlIGF3YXkgZnJvbSB0aGUgZmllbGQgb24gdGFiIHdoZW4gc2VsZWN0aW5nIGFuIGl0ZW1cclxuICAgICAgICAgICAgICAgIC5vbihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IGpRdWVyeS51aS5rZXlDb2RlLlRBQiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykuYXV0b2NvbXBsZXRlKFwiaW5zdGFuY2VcIikubWVudS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmF1dG9jb21wbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogZnVuY3Rpb24gKHJlcXVlc3QsIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0RW50cnkgPSBzZWxmLmV4dHJhY3RMYXN0VGFnKHJlcXVlc3QudGVybSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBUEkuZ2V0KGFwaVVybCwgeyduYW1lJzogbGFzdEVudHJ5fSwgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjdXN0b20gbWluTGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVybSA9IHNlbGYuZXh0cmFjdExhc3RUYWcodGhpcy52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGVybS5sZW5ndGggPCBzZWxmLm1pbkNoYXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb2N1czogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJldmVudCB2YWx1ZSBpbnNlcnRlZCBvbiBmb2N1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Q6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXJtcyA9IHNlbGYuc3BsaXRUYWdMaXN0KHRoaXMudmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgY3VycmVudCBpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVybXMucG9wKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgc2VsZWN0ZWQgdGFnIGlzIGFscmVhZHkgaW4gbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0ZXJtcy5pbmNsdWRlcyh1aS5pdGVtLnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZCB0aGUgc2VsZWN0ZWQgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlcm1zLnB1c2godWkuaXRlbS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgcGxhY2Vob2xkZXIgdG8gZ2V0IHRoZSBjb21tYS1hbmQtc3BhY2UgYXQgdGhlIGVuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVybXMucHVzaChcIlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdGVybXMuam9pbihcIiwgXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykudHJpZ2dlcignY2hhbmdlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveUF1dG9jb21wbGV0ZShzZWxlY3Rvcikge1xyXG4gICAgICAgIGpRdWVyeShzZWxlY3RvciArICcgJyArIHRoaXMuc2VsZWN0b3IpLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudEZpZWxkID0galF1ZXJ5KHRoaXMpO1xyXG4gICAgICAgICAgICBjdXJyZW50RmllbGQuYXV0b2NvbXBsZXRlKFwiZGVzdHJveVwiKTtcclxuICAgICAgICAgICAgY3VycmVudEZpZWxkLnJlbW92ZURhdGEoJ2F1dG9jb21wbGV0ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvKlxyXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgS2ltYWkgdGltZS10cmFja2luZyBhcHAuXHJcbiAqXHJcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXHJcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxyXG4gKi9cclxuXHJcbmltcG9ydCBLaW1haVBsdWdpbiBmcm9tIFwiLi4vS2ltYWlQbHVnaW5cIjtcclxuXHJcbi8qKlxyXG4gKiBOZWVkcyB0byBiZSBpbml0aWFsaXplZCB3aXRoIGEgY2xhc3MgbmFtZS5cclxuICpcclxuICogQWxsb3dzIHRvIGFzc2lnbiB0aGUgZ2l2ZW4gc2VsZWN0b3IgdG8gYW55IGVsZW1lbnQsIHdoaWNoIHRoZW4gaXMgdXNlZCBhcyBjbGljay1oYW5kbGVyXHJcbiAqIGNhbGxpbmcgYW4gQVBJIG1ldGhvZCBhbmQgdHJpZ2dlciB0aGUgZXZlbnQgZnJvbSBkYXRhLWV2ZW50IGF0dHJpYnV0ZSBhZnRlcndhcmRzLlxyXG4gKlxyXG4gKiBAcGFyYW0gc2VsZWN0b3JcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtpbWFpQ29uZmlybWF0aW9uTGluayBleHRlbmRzIEtpbWFpUGx1Z2luIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICB3aGlsZSAodGFyZ2V0ICE9PSBudWxsICYmICF0YXJnZXQubWF0Y2hlcygnYm9keScpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhzZWxmLnNlbGVjdG9yKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB0YXJnZXQuZGF0YXNldDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaXMgdGhpcyBhIGxpbms/IFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB1cmwgPSBhdHRyaWJ1dGVzWydocmVmJ107XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb3IgYW5vdGhlciBIVE1MIGVsZW1lbnQgd2l0aCBhIGN1c3RvbSBocmVmIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb3IgaXMgdGhpcyBhIGJ1dHRvbj9cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC50eXBlID09PSAnc3VibWl0JyAmJiB0YXJnZXQuZm9ybSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0gPSB0YXJnZXQuZm9ybTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzLnF1ZXN0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5nZXRDb250YWluZXIoKS5nZXRQbHVnaW4oJ2FsZXJ0JykucXVlc3Rpb24oYXR0cmlidXRlcy5xdWVzdGlvbiwgZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH3CoGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXJsICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtLmFjdGlvbiA9IHVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnN1Ym1pdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi8qXHJcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBLaW1haSB0aW1lLXRyYWNraW5nIGFwcC5cclxuICpcclxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcclxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXHJcbiAqL1xyXG5cclxuLyohXHJcbiAqIFtLSU1BSV0gS2ltYWlEYXRhdGFibGU6IGhhbmRsZXMgZnVuY3Rpb25hbGl0eSBmb3IgdGhlIGRhdGF0YWJsZVxyXG4gKi9cclxuXHJcbmltcG9ydCBqUXVlcnkgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IEtpbWFpUGx1Z2luIGZyb20gXCIuLi9LaW1haVBsdWdpblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2ltYWlEYXRhdGFibGUgZXh0ZW5kcyBLaW1haVBsdWdpbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29udGVudEFyZWFTZWxlY3RvciwgdGFibGVTZWxlY3Rvcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZW50QXJlYSA9IGNvbnRlbnRBcmVhU2VsZWN0b3I7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RvciA9IHRhYmxlU2VsZWN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICdkYXRhdGFibGUnO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YVRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgLy8gbm90IGV2ZXJ5IHBhZ2UgY29udGFpbnMgYSBkYXRhVGFibGVcclxuICAgICAgICBpZiAoZGF0YVRhYmxlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBkYXRhVGFibGUuZGF0YXNldDtcclxuICAgICAgICBjb25zdCBldmVudHMgPSBhdHRyaWJ1dGVzWydyZWxvYWRFdmVudCddO1xyXG5cclxuICAgICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlID0gZnVuY3Rpb24oKSB7IHNlbGYucmVsb2FkRGF0YXRhYmxlKCk7IH07XHJcblxyXG4gICAgICAgIGZvciAobGV0IGV2ZW50TmFtZSBvZiBldmVudHMuc3BsaXQoJyAnKSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdldENvbnRhaW5lcigpLmdldENvbmZpZ3VyYXRpb24oKS5nZXQoJ2F1dG9SZWxvYWREYXRhdGFibGUnKSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b29sYmFyLWNoYW5nZScsIGhhbmRsZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncGFnaW5hdGlvbi1jaGFuZ2UnLCBoYW5kbGUpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmaWx0ZXItY2hhbmdlJywgaGFuZGxlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVsb2FkRGF0YXRhYmxlKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRBcmVhID0gdGhpcy5jb250ZW50QXJlYTtcclxuICAgICAgICBjb25zdCBkdXJhdGlvbnMgPSB0aGlzLmdldENvbnRhaW5lcigpLmdldFBsdWdpbigndGltZXNoZWV0LWR1cmF0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgdG9vbGJhclNlbGVjdG9yID0gdGhpcy5nZXRDb250YWluZXIoKS5nZXRQbHVnaW4oJ3Rvb2xiYXInKS5nZXRTZWxlY3RvcigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGZvcm0gPSBqUXVlcnkodG9vbGJhclNlbGVjdG9yKTtcclxuICAgICAgICBsZXQgbG9hZGluZyA9ICc8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPjxpIGNsYXNzPVwiZmFzIGZhLXN5bmMgZmEtc3BpblwiPjwvaT48L2Rpdj4nO1xyXG4gICAgICAgIGpRdWVyeShjb250ZW50QXJlYSkuYXBwZW5kKGxvYWRpbmcpO1xyXG5cclxuICAgICAgICAvLyByZW1vdmUgdGhlIGVtcHR5IGZpZWxkcyB0byBwcmV2ZW50IGVycm9yc1xyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IGpRdWVyeSh0b29sYmFyU2VsZWN0b3IgKyAnIDppbnB1dCcpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBqUXVlcnkoZWxlbWVudCkudmFsKCkgIT0gJyc7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zZXJpYWxpemUoKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5LmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IGZvcm0uYXR0cignYWN0aW9uJyksXHJcbiAgICAgICAgICAgIHR5cGU6IGZvcm0uYXR0cignbWV0aG9kJyksXHJcbiAgICAgICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihodG1sKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoY29udGVudEFyZWEpLnJlcGxhY2VXaXRoKFxyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeShodG1sKS5maW5kKGNvbnRlbnRBcmVhKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9ucy51cGRhdGVSZWNvcmRzKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIGVycikge1xyXG4gICAgICAgICAgICAgICAgZm9ybS5zdWJtaXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgS2ltYWkgdGltZS10cmFja2luZyBhcHAuXHJcbiAqXHJcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXHJcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxyXG4gKi9cclxuXHJcbi8qIVxyXG4gKiBbS0lNQUldIEtpbWFpRGF0YXRhYmxlQ29sdW1uVmlldzogbWFuYWdlcyB0aGUgdmlzaWJpbGl0eSBvZiBkYXRhLXRhYmxlIGNvbHVtbnMgaW4gY29va2llc1xyXG4gKi9cclxuXHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBqUXVlcnkgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IEtpbWFpUGx1Z2luIGZyb20gXCIuLi9LaW1haVBsdWdpblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2ltYWlEYXRhdGFibGVDb2x1bW5WaWV3IGV4dGVuZHMgS2ltYWlQbHVnaW4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRhdGFBdHRyaWJ1dGUpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuZGF0YUF0dHJpYnV0ZSA9IGRhdGFBdHRyaWJ1dGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICdkYXRhdGFibGUtY29sdW1uLXZpc2liaWxpdHknO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgbGV0IGRhdGFUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1snICsgdGhpcy5kYXRhQXR0cmlidXRlICsgJ10nKTtcclxuICAgICAgICBpZiAoZGF0YVRhYmxlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pZCA9IGRhdGFUYWJsZS5nZXRBdHRyaWJ1dGUodGhpcy5kYXRhQXR0cmlidXRlKTtcclxuICAgICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsXycgKyB0aGlzLmlkKTtcclxuICAgICAgICB0aGlzLmJpbmRCdXR0b25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEJ1dHRvbnMoKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMubW9kYWwucXVlcnlTZWxlY3RvcignYnV0dG9uW2RhdGEtdHlwZT1zYXZlXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNlbGYuc2F2ZVZpc2liaWxpdHkoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbltkYXRhLXR5cGU9cmVzZXRdJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2VsZi5yZXNldFZpc2liaWxpdHkoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBmb3IgKGxldCBjaGVja2JveCBvZiB0aGlzLm1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0gaW5wdXRbdHlwZT1jaGVja2JveF0nKSkge1xyXG4gICAgICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuY2hhbmdlVmlzaWJpbGl0eShjaGVja2JveC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzYXZlVmlzaWJpbGl0eSgpIHtcclxuICAgICAgICBjb25zdCBmb3JtID0gdGhpcy5tb2RhbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZm9ybScpWzBdO1xyXG4gICAgICAgIGxldCBzZXR0aW5ncyA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IGNoZWNrYm94IG9mIGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1jaGVja2JveF0nKSkge1xyXG4gICAgICAgICAgICBzZXR0aW5nc1tjaGVja2JveC5nZXRBdHRyaWJ1dGUoJ25hbWUnKV0gPSBjaGVja2JveC5jaGVja2VkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBDb29raWVzLnNldChmb3JtLmdldEF0dHJpYnV0ZSgnbmFtZScpLCBKU09OLnN0cmluZ2lmeShzZXR0aW5ncyksIHtleHBpcmVzOiAzNjV9KTtcclxuICAgICAgICBqUXVlcnkodGhpcy5tb2RhbCkubW9kYWwoJ3RvZ2dsZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0VmlzaWJpbGl0eSgpIHtcclxuICAgICAgICBjb25zdCBmb3JtID0gdGhpcy5tb2RhbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZm9ybScpWzBdO1xyXG4gICAgICAgIENvb2tpZXMucmVtb3ZlKGZvcm0uZ2V0QXR0cmlidXRlKCduYW1lJykpO1xyXG4gICAgICAgIGZvciAobGV0IGNoZWNrYm94IG9mIGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1jaGVja2JveF0nKSkge1xyXG4gICAgICAgICAgICBpZiAoIWNoZWNrYm94LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrYm94LmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMubW9kYWwpLm1vZGFsKCd0b2dnbGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VWaXNpYmlsaXR5KGNvbHVtbk5hbWUpIHtcclxuICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRhdGFibGVfJyArIHRoaXMuaWQpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RhdGFUYWJsZScpWzBdO1xyXG4gICAgICAgIGxldCBjb2x1bW4gPSAwO1xyXG4gICAgICAgIGxldCBmb3VuZENvbHVtbiA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAobGV0IGNvbHVtbkVsZW1lbnQgb2YgdGFibGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RoJykpIHtcclxuICAgICAgICAgICAgaWYgKGNvbHVtbkVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWZpZWxkJykgPT09IGNvbHVtbk5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGZvdW5kQ29sdW1uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbHVtbisrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFmb3VuZENvbHVtbikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCByb3dFbGVtZW50IG9mIHRhYmxlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0cicpKSB7XHJcbiAgICAgICAgICAgIHJvd0VsZW1lbnQuY2hpbGRyZW5bY29sdW1uXS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi8qXHJcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBLaW1haSB0aW1lLXRyYWNraW5nIGFwcC5cclxuICpcclxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcclxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXHJcbiAqL1xyXG5cclxuLyohXHJcbiAqIFtLSU1BSV0gS2ltYWlEYXRlUGlja2VyOiBzaW5nbGUgZGF0ZSBzZWxlY3RzIChjdXJyZW50bHkgdW51c2VkKVxyXG4gKi9cclxuXHJcbmltcG9ydCBqUXVlcnkgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IEtpbWFpUGx1Z2luIGZyb20gJy4uL0tpbWFpUGx1Z2luJztcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLaW1haURhdGVQaWNrZXIgZXh0ZW5kcyBLaW1haVBsdWdpbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJZCgpIHtcclxuICAgICAgICByZXR1cm4gJ2RhdGUtcGlja2VyJztcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZURhdGVQaWNrZXIoc2VsZWN0b3IpIHtcclxuICAgICAgICBjb25zdCBUUkFOU0xBVEUgPSB0aGlzLmdldENvbnRhaW5lcigpLmdldFRyYW5zbGF0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgREFURV9VVElMUyA9IHRoaXMuZ2V0Q29udGFpbmVyKCkuZ2V0UGx1Z2luKCdkYXRlJyk7XHJcblxyXG4gICAgICAgIGpRdWVyeShzZWxlY3RvciArICcgJyArIHRoaXMuc2VsZWN0b3IpLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcclxuICAgICAgICAgICAgbGV0IGxvY2FsZUZvcm1hdCA9IGpRdWVyeSh0aGlzKS5kYXRhKCdmb3JtYXQnKTtcclxuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmRhdGVyYW5nZXBpY2tlcih7XHJcbiAgICAgICAgICAgICAgICBzaW5nbGVEYXRlUGlja2VyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2hvd0Ryb3Bkb3duczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9VcGRhdGVJbnB1dDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb2NhbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IGxvY2FsZUZvcm1hdCxcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdERheTogbW9tZW50KCkuc3RhcnRPZignd2VlaycpLmZvcm1hdCgnZCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwcGx5TGFiZWw6IFRSQU5TTEFURS5nZXQoJ2NvbmZpcm0nKSxcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxMYWJlbDogVFJBTlNMQVRFLmdldCgnY2FuY2VsJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tUmFuZ2VMYWJlbDogVFJBTlNMQVRFLmdldCgnY3VzdG9tUmFuZ2UnKSxcclxuICAgICAgICAgICAgICAgICAgICBkYXlzT2ZXZWVrOiBEQVRFX1VUSUxTLmdldFdlZWtEYXlzU2hvcnQoKSxcclxuICAgICAgICAgICAgICAgICAgICBtb250aE5hbWVzOiBEQVRFX1VUSUxTLmdldE1vbnRoTmFtZXMoKSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBqUXVlcnkodGhpcykub24oJ2FwcGx5LmRhdGVyYW5nZXBpY2tlcicsIGZ1bmN0aW9uKGV2LCBwaWNrZXIpIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS52YWwocGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQobG9jYWxlRm9ybWF0KSk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveURhdGVQaWNrZXIoc2VsZWN0b3IpIHtcclxuICAgICAgICBqUXVlcnkoc2VsZWN0b3IgKyAnICcgKyB0aGlzLnNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgICAgICAgIGlmIChqUXVlcnkodGhpcykuZGF0YSgnZGF0ZXJhbmdlcGlja2VyJykgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmRhdGVyYW5nZXBpY2tlcignZGVzdHJveScpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmRhdGEoJ2RhdGVyYW5nZXBpY2tlcicpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi8qXHJcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBLaW1haSB0aW1lLXRyYWNraW5nIGFwcC5cclxuICpcclxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcclxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXHJcbiAqL1xyXG5cclxuLyohXHJcbiAqIFtLSU1BSV0gS2ltYWlEYXRlUmFuZ2VQaWNrZXI6IGFjdGl2YXRlIHRoZSAoZGF0ZXJhbmdlIHBpY2tlcikgY29tcG91bmQgZmllbGQgaW4gdG9vbGJhclxyXG4gKi9cclxuXHJcbmltcG9ydCBqUXVlcnkgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IEtpbWFpUGx1Z2luIGZyb20gJy4uL0tpbWFpUGx1Z2luJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2ltYWlEYXRlUmFuZ2VQaWNrZXIgZXh0ZW5kcyBLaW1haVBsdWdpbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJZCgpIHtcclxuICAgICAgICByZXR1cm4gJ2RhdGUtcmFuZ2UtcGlja2VyJztcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZURhdGVSYW5nZVBpY2tlcihzZWxlY3Rvcikge1xyXG4gICAgICAgIGNvbnN0IFRSQU5TTEFURSA9IHRoaXMuZ2V0Q29udGFpbmVyKCkuZ2V0VHJhbnNsYXRpb24oKTtcclxuICAgICAgICBjb25zdCBEQVRFX1VUSUxTID0gdGhpcy5nZXRDb250YWluZXIoKS5nZXRQbHVnaW4oJ2RhdGUnKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KHNlbGVjdG9yICsgJyAnICsgdGhpcy5zZWxlY3RvcikuZWFjaChmdW5jdGlvbihpbmRleCkge1xyXG4gICAgICAgICAgICBsZXQgbG9jYWxlRm9ybWF0ID0galF1ZXJ5KHRoaXMpLmRhdGEoJ2Zvcm1hdCcpO1xyXG4gICAgICAgICAgICBsZXQgc2VwYXJhdG9yID0galF1ZXJ5KHRoaXMpLmRhdGEoJ3NlcGFyYXRvcicpO1xyXG4gICAgICAgICAgICBsZXQgcmFuZ2VzTGlzdCA9IHt9O1xyXG5cclxuICAgICAgICAgICAgcmFuZ2VzTGlzdFtUUkFOU0xBVEUuZ2V0KCd0b2RheScpXSA9IFttb21lbnQoKSwgbW9tZW50KCldO1xyXG4gICAgICAgICAgICByYW5nZXNMaXN0W1RSQU5TTEFURS5nZXQoJ3llc3RlcmRheScpXSA9IFttb21lbnQoKS5zdWJ0cmFjdCgxLCAnZGF5cycpLCBtb21lbnQoKS5zdWJ0cmFjdCgxLCAnZGF5cycpXTtcclxuICAgICAgICAgICAgcmFuZ2VzTGlzdFtUUkFOU0xBVEUuZ2V0KCd0aGlzV2VlaycpXSA9IFttb21lbnQoKS5zdGFydE9mKCd3ZWVrJyksIG1vbWVudCgpLmVuZE9mKCd3ZWVrJyldO1xyXG4gICAgICAgICAgICByYW5nZXNMaXN0W1RSQU5TTEFURS5nZXQoJ2xhc3RXZWVrJyldID0gW21vbWVudCgpLnN1YnRyYWN0KDEsICd3ZWVrJykuc3RhcnRPZignd2VlaycpLCBtb21lbnQoKS5zdWJ0cmFjdCgxLCAnd2VlaycpLmVuZE9mKCd3ZWVrJyldO1xyXG4gICAgICAgICAgICByYW5nZXNMaXN0W1RSQU5TTEFURS5nZXQoJ3RoaXNNb250aCcpXSA9IFttb21lbnQoKS5zdGFydE9mKCdtb250aCcpLCBtb21lbnQoKS5lbmRPZignbW9udGgnKV07XHJcbiAgICAgICAgICAgIHJhbmdlc0xpc3RbVFJBTlNMQVRFLmdldCgnbGFzdE1vbnRoJyldID0gW21vbWVudCgpLnN1YnRyYWN0KDEsICdtb250aCcpLnN0YXJ0T2YoJ21vbnRoJyksIG1vbWVudCgpLnN1YnRyYWN0KDEsICdtb250aCcpLmVuZE9mKCdtb250aCcpXTtcclxuICAgICAgICAgICAgcmFuZ2VzTGlzdFtUUkFOU0xBVEUuZ2V0KCd0aGlzWWVhcicpXSA9IFttb21lbnQoKS5zdGFydE9mKCd5ZWFyJyksIG1vbWVudCgpLmVuZE9mKCd5ZWFyJyldO1xyXG4gICAgICAgICAgICByYW5nZXNMaXN0W1RSQU5TTEFURS5nZXQoJ2xhc3RZZWFyJyldID0gW21vbWVudCgpLnN1YnRyYWN0KDEsICd5ZWFyJykuc3RhcnRPZigneWVhcicpLCBtb21lbnQoKS5zdWJ0cmFjdCgxLCAneWVhcicpLmVuZE9mKCd5ZWFyJyldO1xyXG5cclxuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmRhdGVyYW5nZXBpY2tlcih7XHJcbiAgICAgICAgICAgICAgICBzaG93RHJvcGRvd25zOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXV0b1VwZGF0ZUlucHV0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGF1dG9BcHBseTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsaW5rZWRDYWxlbmRhcnM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9jYWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VwYXJhdG9yOiBzZXBhcmF0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBsb2NhbGVGb3JtYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3REYXk6IG1vbWVudCgpLnN0YXJ0T2YoJ3dlZWsnKS5mb3JtYXQoJ2QnKSxcclxuICAgICAgICAgICAgICAgICAgICBhcHBseUxhYmVsOiBUUkFOU0xBVEUuZ2V0KCdjb25maXJtJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsTGFiZWw6IFRSQU5TTEFURS5nZXQoJ2NhbmNlbCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbVJhbmdlTGFiZWw6IFRSQU5TTEFURS5nZXQoJ2N1c3RvbVJhbmdlJyksXHJcbiAgICAgICAgICAgICAgICAgICAgZGF5c09mV2VlazogREFURV9VVElMUy5nZXRXZWVrRGF5c1Nob3J0KCksXHJcbiAgICAgICAgICAgICAgICAgICAgbW9udGhOYW1lczogREFURV9VVElMUy5nZXRNb250aE5hbWVzKCksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmFuZ2VzOiByYW5nZXNMaXN0LFxyXG4gICAgICAgICAgICAgICAgYWx3YXlzU2hvd0NhbGVuZGFyczogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5vbignYXBwbHkuZGF0ZXJhbmdlcGlja2VyJywgZnVuY3Rpb24oZXYsIHBpY2tlcikge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnZhbChwaWNrZXIuc3RhcnREYXRlLmZvcm1hdChsb2NhbGVGb3JtYXQpICsgJyAtICcgKyBwaWNrZXIuZW5kRGF0ZS5mb3JtYXQobG9jYWxlRm9ybWF0KSk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykuZGF0YSgnYmVnaW4nLCBwaWNrZXIuc3RhcnREYXRlLmZvcm1hdChsb2NhbGVGb3JtYXQpKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5kYXRhKCdlbmQnLCBwaWNrZXIuZW5kRGF0ZS5mb3JtYXQobG9jYWxlRm9ybWF0KSk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveURhdGVSYW5nZVBpY2tlcihzZWxlY3Rvcikge1xyXG4gICAgICAgIGpRdWVyeShzZWxlY3RvciArICcgJyArIHRoaXMuc2VsZWN0b3IpLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcclxuICAgICAgICAgICAgaWYgKGpRdWVyeSh0aGlzKS5kYXRhKCdkYXRlcmFuZ2VwaWNrZXInKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykuZGF0ZXJhbmdlcGlja2VyKCdkZXN0cm95Jyk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykuZGF0YSgnZGF0ZXJhbmdlcGlja2VyJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiLypcclxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEtpbWFpIHRpbWUtdHJhY2tpbmcgYXBwLlxyXG4gKlxyXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxyXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cclxuICovXHJcblxyXG4vKiFcclxuICogW0tJTUFJXSBLaW1haURhdGVUaW1lUGlja2VyOiBhY3RpdmF0ZSB0aGUgKGRhdGV0aW1lIHBpY2tlcikgZmllbGQgaW4gdGltZXNoZWV0IGVkaXQgZGlhbG9nXHJcbiAqL1xyXG5cclxuaW1wb3J0IGpRdWVyeSBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgS2ltYWlQbHVnaW4gZnJvbSAnLi4vS2ltYWlQbHVnaW4nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2ltYWlEYXRlVGltZVBpY2tlciBleHRlbmRzIEtpbWFpUGx1Z2luIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGdldElkKCkge1xyXG4gICAgICAgIHJldHVybiAnZGF0ZS10aW1lLXBpY2tlcic7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGVEYXRlVGltZVBpY2tlcihzZWxlY3Rvcikge1xyXG4gICAgICAgIGNvbnN0IFRSQU5TTEFURSA9IHRoaXMuZ2V0Q29udGFpbmVyKCkuZ2V0VHJhbnNsYXRpb24oKTtcclxuICAgICAgICBjb25zdCBDT05GSUcgPSB0aGlzLmdldENvbnRhaW5lcigpLmdldENvbmZpZ3VyYXRpb24oKTtcclxuICAgICAgICBjb25zdCBEQVRFX1VUSUxTID0gdGhpcy5nZXRDb250YWluZXIoKS5nZXRQbHVnaW4oJ2RhdGUnKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KHNlbGVjdG9yICsgJyAnICsgdGhpcy5zZWxlY3RvcikuZWFjaChmdW5jdGlvbihpbmRleCkge1xyXG4gICAgICAgICAgICBsZXQgbG9jYWxlRm9ybWF0ID0galF1ZXJ5KHRoaXMpLmRhdGEoJ2Zvcm1hdCcpO1xyXG4gICAgICAgICAgICBqUXVlcnkodGhpcykuZGF0ZXJhbmdlcGlja2VyKHtcclxuICAgICAgICAgICAgICAgIHNpbmdsZURhdGVQaWNrZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0aW1lUGlja2VyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdGltZVBpY2tlcjI0SG91cjogQ09ORklHLmdldCgndHdlbnR5Rm91ckhvdXJzJyksXHJcbiAgICAgICAgICAgICAgICBzaG93RHJvcGRvd25zOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXV0b1VwZGF0ZUlucHV0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvY2FsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogbG9jYWxlRm9ybWF0LFxyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0RGF5OiBtb21lbnQoKS5zdGFydE9mKCd3ZWVrJykuZm9ybWF0KCdkJyksXHJcbiAgICAgICAgICAgICAgICAgICAgYXBwbHlMYWJlbDogVFJBTlNMQVRFLmdldCgnY29uZmlybScpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbExhYmVsOiBUUkFOU0xBVEUuZ2V0KCdjYW5jZWwnKSxcclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21SYW5nZUxhYmVsOiBUUkFOU0xBVEUuZ2V0KCdjdXN0b21SYW5nZScpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRheXNPZldlZWs6IERBVEVfVVRJTFMuZ2V0V2Vla0RheXNTaG9ydCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vbnRoTmFtZXM6IERBVEVfVVRJTFMuZ2V0TW9udGhOYW1lcygpLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5vbignYXBwbHkuZGF0ZXJhbmdlcGlja2VyJywgZnVuY3Rpb24oZXYsIHBpY2tlcikge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnZhbChwaWNrZXIuc3RhcnREYXRlLmZvcm1hdChsb2NhbGVGb3JtYXQpKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95RGF0ZVRpbWVQaWNrZXIoc2VsZWN0b3IpIHtcclxuICAgICAgICBqUXVlcnkoc2VsZWN0b3IgKyAnICcgKyB0aGlzLnNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgICAgICAgIGlmIChqUXVlcnkodGhpcykuZGF0YSgnZGF0ZXJhbmdlcGlja2VyJykgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmRhdGVyYW5nZXBpY2tlcignZGVzdHJveScpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmRhdGEoJ2RhdGVyYW5nZXBpY2tlcicpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi8qXHJcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBLaW1haSB0aW1lLXRyYWNraW5nIGFwcC5cclxuICpcclxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcclxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXHJcbiAqL1xyXG5cclxuLyohXHJcbiAqIFtLSU1BSV0gS2ltYWlEYXRlVXRpbHM6IHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyBkYXRlIHNwZWNpZmljIHRhc2tzXHJcbiAqL1xyXG5cclxuaW1wb3J0IEtpbWFpUGx1Z2luIGZyb20gJy4uL0tpbWFpUGx1Z2luJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2ltYWlEYXRlVXRpbHMgZXh0ZW5kcyBLaW1haVBsdWdpbiB7XHJcblxyXG4gICAgZ2V0SWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICdkYXRlJztcclxuICAgIH1cclxuXHJcbiAgICBnZXRXZWVrRGF5c1Nob3J0KCkge1xyXG4gICAgICAgIHJldHVybiBtb21lbnQubG9jYWxlRGF0YSgpLndlZWtkYXlzU2hvcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNb250aE5hbWVzKCkge1xyXG4gICAgICAgIHJldHVybiBtb21lbnQubG9jYWxlRGF0YSgpLm1vbnRocygpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvKlxyXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgS2ltYWkgdGltZS10cmFja2luZyBhcHAuXHJcbiAqXHJcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXHJcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxyXG4gKi9cclxuXHJcbi8qIVxyXG4gKiBbS0lNQUldIEtpbWFpRXZlbnQ6IGhlbHBlciB0byB0cmlnZ2VyIGV2ZW50c1xyXG4gKi9cclxuXHJcbmltcG9ydCBLaW1haVBsdWdpbiBmcm9tIFwiLi4vS2ltYWlQbHVnaW5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtpbWFpRXZlbnQgZXh0ZW5kcyBLaW1haVBsdWdpbiB7XHJcblxyXG4gICAgZ2V0SWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICdldmVudCc7XHJcbiAgICB9XHJcblxyXG4gICAgdHJpZ2dlcihuYW1lLCBkZXRhaWxzKSB7XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IG51bGwgfHwgbmFtZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcihsZXQgZXZlbnQgb2YgbmFtZS5zcGxpdCgnICcpKSB7XHJcbiAgICAgICAgICAgIGxldCB0cmlnZ2VyRXZlbnQgPSBuZXcgRXZlbnQoZXZlbnQpO1xyXG4gICAgICAgICAgICBpZiAoZGV0YWlscyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge2RldGFpbDogZGV0YWlsc30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQodHJpZ2dlckV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEtpbWFpIHRpbWUtdHJhY2tpbmcgYXBwLlxyXG4gKlxyXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxyXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cclxuICovXHJcblxyXG4vKiFcclxuICogW0tJTUFJXSBLaW1haUZvcm06IGJhc2ljIGZ1bmN0aW9ucyBmb3IgYWxsIGZvcm1zXHJcbiAqL1xyXG5cclxuaW1wb3J0IEtpbWFpUGx1Z2luIGZyb20gXCIuLi9LaW1haVBsdWdpblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2ltYWlGb3JtIGV4dGVuZHMgS2ltYWlQbHVnaW4ge1xyXG5cclxuICAgIGdldElkKCkge1xyXG4gICAgICAgIHJldHVybiAnZm9ybSc7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGVGb3JtKGZvcm1TZWxlY3RvciwgY29udGFpbmVyKSB7XHJcbiAgICAgICAgdGhpcy5nZXRDb250YWluZXIoKS5nZXRQbHVnaW4oJ2RhdGUtcmFuZ2UtcGlja2VyJykuYWN0aXZhdGVEYXRlUmFuZ2VQaWNrZXIoZm9ybVNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLmdldENvbnRhaW5lcigpLmdldFBsdWdpbignZGF0ZS10aW1lLXBpY2tlcicpLmFjdGl2YXRlRGF0ZVRpbWVQaWNrZXIoZm9ybVNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLmdldENvbnRhaW5lcigpLmdldFBsdWdpbignZGF0ZS1waWNrZXInKS5hY3RpdmF0ZURhdGVQaWNrZXIoZm9ybVNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLmdldENvbnRhaW5lcigpLmdldFBsdWdpbignYXV0b2NvbXBsZXRlJykuYWN0aXZhdGVBdXRvY29tcGxldGUoZm9ybVNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLmdldENvbnRhaW5lcigpLmdldFBsdWdpbignZm9ybS1zZWxlY3QnKS5hY3RpdmF0ZVNlbGVjdFBpY2tlcihmb3JtU2VsZWN0b3IsIGNvbnRhaW5lcik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRlc3Ryb3lGb3JtKGZvcm1TZWxlY3Rvcikge1xyXG4gICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkuZ2V0UGx1Z2luKCdmb3JtLXNlbGVjdCcpLmRlc3Ryb3lTZWxlY3RQaWNrZXIoZm9ybVNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLmdldENvbnRhaW5lcigpLmdldFBsdWdpbignYXV0b2NvbXBsZXRlJykuZGVzdHJveUF1dG9jb21wbGV0ZShmb3JtU2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkuZ2V0UGx1Z2luKCdkYXRlLXBpY2tlcicpLmRlc3Ryb3lEYXRlUGlja2VyKGZvcm1TZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5nZXRDb250YWluZXIoKS5nZXRQbHVnaW4oJ2RhdGUtdGltZS1waWNrZXInKS5kZXN0cm95RGF0ZVRpbWVQaWNrZXIoZm9ybVNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLmdldENvbnRhaW5lcigpLmdldFBsdWdpbignZGF0ZS1yYW5nZS1waWNrZXInKS5kZXN0cm95RGF0ZVJhbmdlUGlja2VyKGZvcm1TZWxlY3Rvcik7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEtpbWFpIHRpbWUtdHJhY2tpbmcgYXBwLlxyXG4gKlxyXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxyXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cclxuICovXHJcblxyXG4vKiFcclxuICogW0tJTUFJXSBLaW1haUZvcm1TZWxlY3Q6IGVuaGFuY2VkIGZ1bmN0aW9uYWxpdHkgZm9yIEhUTUwgc2VsZWN0J3NcclxuICovXHJcblxyXG5pbXBvcnQgS2ltYWlQbHVnaW4gZnJvbSBcIi4uL0tpbWFpUGx1Z2luXCI7XHJcbmltcG9ydCBqUXVlcnkgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2ltYWlGb3JtU2VsZWN0IGV4dGVuZHMgS2ltYWlQbHVnaW4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICdmb3JtLXNlbGVjdCc7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGVTZWxlY3RQaWNrZXIoc2VsZWN0b3IsIGNvbnRhaW5lcikge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRTZWxlY3RvciA9IHRoaXMuc2VsZWN0b3I7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcclxuICAgICAgICBpZiAoY29udGFpbmVyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIGRyb3Bkb3duUGFyZW50OiAkKGNvbnRhaW5lciksXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBGdW5jdGlvbiB0byBtYXRjaCB0aGUgbmFtZSBvZiB0aGUgcGFyZW50IGFuZCBub3Qgb25seSB0aGUgbmFtZXMgb2YgdGhlIGNoaWxkcmVuXHJcbiAgICAgICAgLy8gQmFzZWQgb24gdGhlIG9yaWdpbmFsIG1hdGNoZXIgZnVuY3Rpb24gb2YgU2VsZWN0MjogaHR0cHM6Ly9naXRodWIuY29tL3NlbGVjdDIvc2VsZWN0Mi9ibG9iLzU3NjUwOTAzMThjNGQzODJhZTU2NDYzY2ZhMjViYThjYTdiZGQ0OTUvc3JjL2pzL3NlbGVjdDIvZGVmYXVsdHMuanMjTDI3MlxyXG4gICAgICAgIC8vIE1vcmUgaW5mb3JtYXRpb246IGh0dHBzOi8vc2VsZWN0Mi5vcmcvc2VhcmNoaW5nIHwgaHR0cHM6Ly9naXRodWIuY29tL3NlbGVjdDIvZG9jcy9ibG9iL2RldmVsb3AvcGFnZXMvMTEuc2VhcmNoaW5nL2RvY3MubWRcclxuICAgICAgICBmdW5jdGlvbiBtYXRjaGVyKHBhcmFtcywgZGF0YSkge1xyXG4gICAgICAgICAgICAvLyBBbHdheXMgcmV0dXJuIHRoZSBvYmplY3QgaWYgdGhlcmUgaXMgbm90aGluZyB0byBjb21wYXJlXHJcbiAgICAgICAgICAgIGlmIChqUXVlcnkudHJpbShwYXJhbXMudGVybSkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ2hlY2sgd2hldGhlciBvcHRpb25zIGhhcyBjaGlsZHJlblxyXG4gICAgICAgICAgICBsZXQgaGFzQ2hpbGRyZW4gPSBkYXRhLmNoaWxkcmVuICYmIGRhdGEuY2hpbGRyZW4ubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgICAgIC8vIFNwbGl0IHNlYXJjaCBwYXJhbSBieSBzcGFjZSB0byBzZWFyY2ggZm9yIGFsbCB0ZXJtcyBhbmQgY29udmVydCBhbGwgdG8gdXBwZXJjYXNlXHJcbiAgICAgICAgICAgIGxldCB0ZXJtcyA9IHBhcmFtcy50ZXJtLnRvVXBwZXJDYXNlKCkuc3BsaXQoJyAnKTtcclxuICAgICAgICAgICAgbGV0IG9yaWdpbmFsID0gZGF0YS50ZXh0LnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBBbHdheXMgcmV0dXJuIHRoZSBwYXJlbnQgb3B0aW9uIGluY2x1ZGluZyBpdHMgY2hpbGRyZW4sIHdoZW4gdGhlIG5hbWUgbWF0Y2hlcyBvbmUgb2YgdGhlIHBhcmFtc1xyXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgdGV4dCBjb250YWlucyBhbGwgb3IgYXQgbGVhc3Qgb25lIG9mIHRoZSB0ZXJtc1xyXG4gICAgICAgICAgICBsZXQgZm91bmRBbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgZm91bmRPbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IG1pc3NpbmdUZXJtcyA9IFtdO1xyXG4gICAgICAgICAgICB0ZXJtcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWwuaW5kZXhPZihpdGVtKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmRPbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3VuZEFsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pc3NpbmdUZXJtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIHRoZSBvcHRpb24gZWxlbWVudCBjb250YWlucyBhbGwgdGVybXMsIHJldHVybiBpdFxyXG4gICAgICAgICAgICBpZiAoZm91bmRBbGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBEbyBhIHJlY3Vyc2l2ZSBjaGVjayBmb3Igb3B0aW9ucyB3aXRoIGNoaWxkcmVuXHJcbiAgICAgICAgICAgIGlmIChoYXNDaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHBhcmVudCBhbHJlYWR5IGNvbnRhaW5zIG9uZSBvciBtb3JlIHNlYXJjaCB0ZXJtcywgcHJvY2VlZCBvbmx5IHdpdGggdGhlIG1pc3Npbmcgb25lc1xyXG4gICAgICAgICAgICAgICAgLy8gRmlyc3Q6IENsb25lIHRoZSBvcmlnaW5hbCBwYXJhbXMgb2JqZWN0Li4uXHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3UGFyYW1zID0galF1ZXJ5LmV4dGVuZCh0cnVlLCB7fSwgcGFyYW1zKTtcclxuICAgICAgICAgICAgICAgIGlmIChmb3VuZE9uZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1BhcmFtcy50ZXJtID0gbWlzc2luZ1Rlcm1zLmpvaW4oJyAnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3UGFyYW1zLnRlcm0gPSBwYXJhbXMudGVybTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDbG9uZSB0aGUgZGF0YSBvYmplY3QgaWYgdGhlcmUgYXJlIGNoaWxkcmVuXHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIHJlcXVpcmVkIGFzIHdlIG1vZGlmeSB0aGUgb2JqZWN0IHRvIHJlbW92ZSBhbnkgbm9uLW1hdGNoZXNcclxuICAgICAgICAgICAgICAgIGxldCBtYXRjaCA9IGpRdWVyeS5leHRlbmQodHJ1ZSwge30sIGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGVhY2ggY2hpbGQgb2YgdGhlIG9wdGlvblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYyA9IGRhdGEuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgYyA+PSAwOyBjLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGQgPSBkYXRhLmNoaWxkcmVuW2NdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWF0Y2hlcyA9IG1hdGNoZXIobmV3UGFyYW1zLCBjaGlsZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlIHdhc24ndCBhIG1hdGNoLCByZW1vdmUgdGhlIG9iamVjdCBpbiB0aGUgYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaC5jaGlsZHJlbi5zcGxpY2UoYywgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIGFueSBjaGlsZHJlbiBtYXRjaGVkLCByZXR1cm4gdGhlIG5ldyBvYmplY3RcclxuICAgICAgICAgICAgICAgIGlmIChtYXRjaC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJZiB0aGUgb3B0aW9uIG9yIGl0cyBjaGlsZHJlbiBkbyBub3QgY29udGFpbiB0aGUgdGVybSwgZG9uJ3QgcmV0dXJuIGFueXRoaW5nXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb3B0aW9ucyA9IHsuLi5vcHRpb25zLCAuLi57XHJcbiAgICAgICAgICAgIGxhbmd1YWdlOiB0aGlzLmdldENvbnRhaW5lcigpLmdldENvbmZpZ3VyYXRpb24oKS5nZXQoJ2xvY2FsZScpLnJlcGxhY2UoJ18nLCAnLScpLFxyXG4gICAgICAgICAgICB0aGVtZTogXCJib290c3RyYXBcIixcclxuICAgICAgICAgICAgbWF0Y2hlcjogbWF0Y2hlclxyXG4gICAgICAgIH19O1xyXG4gICAgICAgIGpRdWVyeShzZWxlY3RvciArICcgJyArIGVsZW1lbnRTZWxlY3Rvcikuc2VsZWN0MihvcHRpb25zKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KCdib2R5Jykub24oJ3Jlc2V0JywgJ2Zvcm0nLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoZXZlbnQudGFyZ2V0KS5maW5kKGVsZW1lbnRTZWxlY3RvcikudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgIH0sIDEwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95U2VsZWN0UGlja2VyKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgalF1ZXJ5KHNlbGVjdG9yICsgJyAnICsgdGhpcy5zZWxlY3Rvcikuc2VsZWN0MignZGVzdHJveScpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZU9wdGlvbnMoc2VsZWN0SWRlbnRpZmllciwgZGF0YSkge1xyXG4gICAgICAgIGxldCBzZWxlY3QgPSBqUXVlcnkoc2VsZWN0SWRlbnRpZmllcik7XHJcbiAgICAgICAgbGV0IGVtcHR5T3B0aW9uID0galF1ZXJ5KHNlbGVjdElkZW50aWZpZXIgKyAnIG9wdGlvblt2YWx1ZT1cIlwiXScpO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSBzZWxlY3QudmFsKCk7XHJcblxyXG4gICAgICAgIHNlbGVjdC5maW5kKCdvcHRpb24nKS5yZW1vdmUoKS5lbmQoKS5maW5kKCdvcHRncm91cCcpLnJlbW92ZSgpLmVuZCgpO1xyXG5cclxuICAgICAgICBpZiAoZW1wdHlPcHRpb24ubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5hcHBlbmQoJzxvcHRpb24gdmFsdWU9XCJcIj4nICsgZW1wdHlPcHRpb24udGV4dCgpICsgJzwvb3B0aW9uPicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGh0bWxPcHRpb25zID0gJyc7XHJcbiAgICAgICAgbGV0IGVtcHR5T3B0aW9ucyA9ICcnO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhkYXRhKSkge1xyXG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnX19lbXB0eV9fJykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBlbnRpdHkgb2YgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbXB0eU9wdGlvbnMgKz0gICc8b3B0aW9uIHZhbHVlPVwiJyArIGVudGl0eS5pZCArICdcIj4nICsgZW50aXR5Lm5hbWUgKyAnPC9vcHRpb24+JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBodG1sT3B0aW9ucyArPSAnPG9wdGdyb3VwIGxhYmVsPVwiJyArIGtleSArICdcIj4nO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVudGl0eSBvZiB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaHRtbE9wdGlvbnMgKz0gICc8b3B0aW9uIHZhbHVlPVwiJyArIGVudGl0eS5pZCArICdcIj4nICsgZW50aXR5Lm5hbWUgKyAnPC9vcHRpb24+JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBodG1sT3B0aW9ucyArPSAnPC9vcHRncm91cD4nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZWN0LmFwcGVuZChodG1sT3B0aW9ucyk7XHJcbiAgICAgICAgc2VsZWN0LmFwcGVuZChlbXB0eU9wdGlvbnMpO1xyXG5cclxuICAgICAgICAvLyBpZiBhdmFpbGFibGUsIHJlLXNlbGVjdCB0aGUgcHJldmlvdXMgc2VsZWN0ZWQgb3B0aW9uIChtb3N0bHkgdXNhYmxlIGZvciBnbG9iYWwgYWN0aXZpdGllcylcclxuICAgICAgICBzZWxlY3QudmFsKHNlbGVjdGVkVmFsdWUpO1xyXG5cclxuICAgICAgICAvLyBpZiB3ZSBkb24ndCB0cmlnZ2VyIHRoZSBjaGFuZ2UsIHRoZSBvdGhlciBzZWxlY3RzIHdvbid0IHJlc2V0XHJcbiAgICAgICAgc2VsZWN0LnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cclxuICAgICAgICAvLyBpZiBzZWxlY3QyIGlzIGFjdGl2ZSwgdGhpcyB3aWxsIHRlbGwgdGhlIHNlbGVjdCB0byByZWZyZXNoXHJcbiAgICAgICAgaWYgKHNlbGVjdC5oYXNDbGFzcygnc2VsZWN0cGlja2VyJykpIHtcclxuICAgICAgICAgICAgc2VsZWN0LnRyaWdnZXIoJ2NoYW5nZS5zZWxlY3QyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBLaW1haSB0aW1lLXRyYWNraW5nIGFwcC5cclxuICpcclxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcclxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXHJcbiAqL1xyXG5cclxuLyohXHJcbiAqIFtLSU1BSV0gS2ltYWlNdWx0aVVwZGF0ZUZvcm06IGhhbmRsZSB0aGUgbXVsdGkgdXBkYXRlIGNoZWNrYm94IGxpc3QgYW5kIGZvcm1cclxuICovXHJcblxyXG5pbXBvcnQgS2ltYWlQbHVnaW4gZnJvbSAnLi4vS2ltYWlQbHVnaW4nO1xyXG5pbXBvcnQgalF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtpbWFpTXVsdGlVcGRhdGVUYWJsZSBleHRlbmRzIEtpbWFpUGx1Z2luIHtcclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGpRdWVyeSgnYm9keScpLlxyXG4gICAgICAgICAgICBvbignY2hhbmdlJywgJyNtdWx0aV91cGRhdGVfYWxsJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLm11bHRpX3VwZGF0ZV9zaW5nbGUnKS5wcm9wKCdjaGVja2VkJywgalF1ZXJ5KGV2ZW50LnRhcmdldCkucHJvcCgnY2hlY2tlZCcpKTtcclxuICAgICAgICAgICAgICAgIHNlbGYudG9nZ2xlRm9ybSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oJ2NoYW5nZScsICcubXVsdGlfdXBkYXRlX3NpbmdsZScsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnRvZ2dsZUZvcm0oKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm9uKCdjaGFuZ2UnLCAnI211bHRpX3VwZGF0ZV90YWJsZV9hY3Rpb24nLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0galF1ZXJ5KCcjbXVsdGlfdXBkYXRlX3RhYmxlX2FjdGlvbiBvcHRpb246c2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVmFsID0gc2VsZWN0ZWRJdGVtLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZFZhbCA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBqUXVlcnkoJyNtdWx0aV91cGRhdGVfZm9ybSBmb3JtJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZFRleHQgPSBzZWxlY3RlZEl0ZW0udGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWRzID0gc2VsZi5nZXRTZWxlY3RlZElkcygpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcXVlc3Rpb24gPSBmb3JtLmF0dHIoJ2RhdGEtcXVlc3Rpb24nKS5yZXBsYWNlKC8lYWN0aW9uJS8sIHNlbGVjdGVkVGV4dCkucmVwbGFjZSgvJWNvdW50JS8sIGlkcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzZWxmLmdldENvbnRhaW5lcigpLmdldFBsdWdpbignYWxlcnQnKS5xdWVzdGlvbihxdWVzdGlvbiwgZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5hdHRyKCdhY3Rpb24nLCBzZWxlY3RlZFZhbCkuc3VibWl0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjbXVsdGlfdXBkYXRlX3RhYmxlX2FjdGlvbicpLnZhbCgnJykudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRTZWxlY3RlZElkcygpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGlkcyA9IFtdO1xyXG4gICAgICAgIGpRdWVyeSgnLm11bHRpX3VwZGF0ZV9zaW5nbGU6Y2hlY2tlZCcpLmVhY2goZnVuY3Rpb24oaSl7XHJcbiAgICAgICAgICAgIGlkc1tpXSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBpZHM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRvZ2dsZUZvcm0oKSBcclxuICAgIHtcclxuICAgICAgICBjb25zdCBpZHMgPSB0aGlzLmdldFNlbGVjdGVkSWRzKCk7XHJcbiAgICAgICAgalF1ZXJ5KCcjbXVsdGlfdXBkYXRlX3RhYmxlX2VudGl0aWVzJykudmFsKGlkcy5qb2luKCcsJykpO1xyXG5cclxuICAgICAgICBpZiAoaWRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjbXVsdGlfdXBkYXRlX2Zvcm0nKS5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjbXVsdGlfdXBkYXRlX2Zvcm0nKS5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuIiwiLypcclxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEtpbWFpIHRpbWUtdHJhY2tpbmcgYXBwLlxyXG4gKlxyXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxyXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cclxuICovXHJcblxyXG4vKiFcclxuICogW0tJTUFJXSBLaW1haVJlY2VudEFjdGl2aXRpZXM6IHJlc3BvbnNpYmxlIHRvIHJlbG9hZCB0aGUgdXNlcnMgcmVjZW50IGFjdGl2aXRpZXNcclxuICovXHJcblxyXG5pbXBvcnQgS2ltYWlQbHVnaW4gZnJvbSAnLi4vS2ltYWlQbHVnaW4nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2ltYWlSZWNlbnRBY3Rpdml0aWVzIGV4dGVuZHMgS2ltYWlQbHVnaW4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICdyZWNlbnQtYWN0aXZpdGllcyc7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKTtcclxuICAgICAgICAvLyB0aGUgbWVudSBjYW4gYmUgaGlkZGVuIGlmIHVzZXIgaGFzIG5vIHBlcm1pc3Npb25zIHRvIHNlZSBpdFxyXG4gICAgICAgIGlmIChtZW51ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duID0gbWVudS5xdWVyeVNlbGVjdG9yKCd1bC5kcm9wZG93bi1tZW51Jyk7XHJcblxyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcyA9IGRyb3Bkb3duLmRhdGFzZXQ7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdCA9IGRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3IoJ2xpID4gdWwubWVudScpO1xyXG5cclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICBjb25zdCBoYW5kbGUgPSBmdW5jdGlvbigpIHsgc2VsZi5yZWxvYWRSZWNlbnRBY3Rpdml0aWVzKCk7IH07XHJcblxyXG4gICAgICAgIC8vIGRvbid0IGJsb2NrIGluaXRpYWwgYnJvd3NlciByZW5kZXJpbmdcclxuICAgICAgICBzZXRUaW1lb3V0KGhhbmRsZSwgNTAwKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2ltYWkudGltZXNoZWV0U3RvcCcsIGhhbmRsZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2ltYWkuYWN0aXZpdHlVcGRhdGUnLCBoYW5kbGUpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tpbWFpLnByb2plY3RVcGRhdGUnLCBoYW5kbGUpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tpbWFpLmN1c3RvbWVyVXBkYXRlJywgaGFuZGxlKTtcclxuICAgIH1cclxuXHJcbiAgICBlbXB0eUxpc3QoKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5pbm5lckhUTUwgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBzZXRFbnRyaWVzKGVudHJpZXMpIHtcclxuICAgICAgICBpZiAoZW50cmllcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5lbXB0eUxpc3QoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGh0bWxUb0luc2VydCA9ICcnO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB0aW1lc2hlZXQgb2YgZW50cmllcykge1xyXG4gICAgICAgICAgICBsZXQgbGFiZWwgPSB0aGlzLmF0dHJpYnV0ZXNbJ3RlbXBsYXRlJ11cclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCclY3VzdG9tZXIlJywgdGltZXNoZWV0LnByb2plY3QuY3VzdG9tZXIubmFtZSlcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCclcHJvamVjdCUnLCB0aW1lc2hlZXQucHJvamVjdC5uYW1lKVxyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJyVhY3Rpdml0eSUnLCB0aW1lc2hlZXQuYWN0aXZpdHkubmFtZSk7XHJcblxyXG4gICAgICAgICAgICBodG1sVG9JbnNlcnQgKz1cclxuICAgICAgICAgICAgICAgIGA8bGk+YCArXHJcbiAgICAgICAgICAgICAgICAgICAgYDxhIGhyZWY9XCIkeyB0aGlzLmF0dHJpYnV0ZXNbJ2hyZWYnXS5yZXBsYWNlKCcwMDAnLCB0aW1lc2hlZXQuaWQpIH1cIiBkYXRhLWV2ZW50PVwia2ltYWkudGltZXNoZWV0U3RhcnQga2ltYWkudGltZXNoZWV0VXBkYXRlXCIgY2xhc3M9XCJhcGktbGlua1wiIGRhdGEtbWV0aG9kPVwiUEFUQ0hcIiBkYXRhLW1zZy1lcnJvcj1cInRpbWVzaGVldC5zdGFydC5lcnJvclwiIGRhdGEtbXNnLXN1Y2Nlc3M9XCJ0aW1lc2hlZXQuc3RhcnQuc3VjY2Vzc1wiPmAgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBgPGkgY2xhc3M9XCIkeyB0aGlzLmF0dHJpYnV0ZXNbJ2ljb24nXSB9XCI+PC9pPiAkeyBsYWJlbCB9YCArXHJcbiAgICAgICAgICAgICAgICAgICAgYDwvYT5gICtcclxuICAgICAgICAgICAgICAgIGA8L2xpPmA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLml0ZW1MaXN0LmlubmVySFRNTCA9IGh0bWxUb0luc2VydDtcclxuICAgIH1cclxuXHJcbiAgICByZWxvYWRSZWNlbnRBY3Rpdml0aWVzKCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IEFQSSA9IHRoaXMuZ2V0Q29udGFpbmVyKCkuZ2V0UGx1Z2luKCdhcGknKTtcclxuXHJcbiAgICAgICAgQVBJLmdldCh0aGlzLmF0dHJpYnV0ZXNbJ2FwaSddLCB7fSwgZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHNlbGYuc2V0RW50cmllcyhyZXN1bHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvKlxyXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgS2ltYWkgdGltZS10cmFja2luZyBhcHAuXHJcbiAqXHJcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXHJcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxyXG4gKi9cclxuXHJcbi8qIVxyXG4gKiBbS0lNQUldIEtpbWFpUmVkdWNlZENsaWNrSGFuZGxlcjogYWJzdHJhY3QgY2xhc3NcclxuICovXHJcblxyXG5pbXBvcnQgalF1ZXJ5IGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBLaW1haVBsdWdpbiBmcm9tIFwiLi4vS2ltYWlQbHVnaW5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtpbWFpUmVkdWNlZENsaWNrSGFuZGxlciBleHRlbmRzIEtpbWFpUGx1Z2luIHtcclxuXHJcbiAgICBfYWRkQ2xpY2tIYW5kbGVyKHNlbGVjdG9yLCBjYWxsYmFjaykgwqB7XHJcbiAgICAgICAgalF1ZXJ5KCdib2R5Jykub24oJ2NsaWNrJywgc2VsZWN0b3IsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIC8vIGp1c3QgaW4gY2FzZSBhbiBpbm5lciBlbGVtZW50IGlzIGVkaXRhYmxlLCB0aGFuIHRoaXMgc2hvdWxkIG5vdCBiZSB0cmlnZ2VyZWRcclxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmlzQ29udGVudEVkaXRhYmxlIHx8wqBldmVudC50YXJnZXQuaXNDb250ZW50RWRpdGFibGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gaGFuZGxlcyB0aGUgXCJjbGlja1wiIG9uIHRhYmxlIHJvd3Mgb3IgbGlzdCBlbGVtZW50c1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5tYXRjaGVzKCd0cicpIHx8IGV2ZW50LmN1cnJlbnRUYXJnZXQubWF0Y2hlcygnbGknKSkge1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHRhcmdldCAhPT0gbnVsbCAmJiAhdGFyZ2V0Lm1hdGNoZXMoJ2JvZHknKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gYW4gZWxlbWVudCB3aXRoaW4gdGhlIHJvdyBpcyBjbGlja2VkLCB0aGF0IGNhbiB0cmlnZ2VyIHN0dWZmIGl0c2VsZiwgd2UgZG9uJ3Qgd2FudCB0aGUgZXZlbnQgdG8gYmUgcHJvY2Vzc2VkXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZG9uJ3QgYWN0IGlmIGEgbGluaywgYnV0dG9uIG9yIGZvcm0gZWxlbWVudCB3YXMgY2xpY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQubWF0Y2hlcygnYScpIHx8IHRhcmdldC5tYXRjaGVzICgnYnV0dG9uJykgfHwgdGFyZ2V0Lm1hdGNoZXMgKCdpbnB1dCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGhyZWYgPSBqUXVlcnkodGhpcykuYXR0cignZGF0YS1ocmVmJyk7XHJcbiAgICAgICAgICAgIGlmICghaHJlZikge1xyXG4gICAgICAgICAgICAgICAgaHJlZiA9IGpRdWVyeSh0aGlzKS5hdHRyKCdocmVmJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGhyZWYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvKlxyXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgS2ltYWkgdGltZS10cmFja2luZyBhcHAuXHJcbiAqXHJcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXHJcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxyXG4gKi9cclxuXHJcbi8qIVxyXG4gKiBbS0lNQUldIEtpbWFpU2VsZWN0RGF0YUFQSTogPHNlbGVjdD4gYm94ZXMgd2l0aCBkeW5hbWljIGRhdGEgZnJvbSBBUElcclxuICovXHJcblxyXG5pbXBvcnQgalF1ZXJ5IGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBLaW1haVBsdWdpbiBmcm9tIFwiLi4vS2ltYWlQbHVnaW5cIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2ltYWlTZWxlY3REYXRhQVBJIGV4dGVuZHMgS2ltYWlQbHVnaW4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICdzZWxlY3QtZGF0YS1hcGknO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZUFwaVNlbGVjdHModGhpcy5zZWxlY3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGVBcGlTZWxlY3RzKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgY29uc3QgQVBJID0gdGhpcy5nZXRDb250YWluZXIoKS5nZXRQbHVnaW4oJ2FwaScpO1xyXG5cclxuICAgICAgICBqUXVlcnkoJ2JvZHknKS5vbignY2hhbmdlJywgc2VsZWN0b3IsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFNlbGVjdCA9ICcjJyArIHRoaXMuZGF0YXNldFsncmVsYXRlZFNlbGVjdCddO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgdGhlIHJlbGF0ZWQgdGFyZ2V0IHNlbGVjdCBkb2VzIG5vdCBleGlzdCwgd2UgZG8gbm90IG5lZWQgdG8gbG9hZCB0aGUgcmVsYXRlZCBkYXRhXHJcbiAgICAgICAgICAgIGlmIChqUXVlcnkodGFyZ2V0U2VsZWN0KS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGZvcm1QcmVmaXggPSBqUXVlcnkodGhpcykucGFyZW50cygnZm9ybScpLmZpcnN0KCkuYXR0cignbmFtZScpO1xyXG4gICAgICAgICAgICBpZiAoZm9ybVByZWZpeCA9PT0gdW5kZWZpbmVkIHx8IGZvcm1QcmVmaXggPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGZvcm1QcmVmaXggPSAnJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvcm1QcmVmaXggKz0gJ18nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgbmV3QXBpVXJsID0gc2VsZi5fYnVpbGRVcmxXaXRoRm9ybUZpZWxkcyh0aGlzLmRhdGFzZXRbJ2FwaVVybCddLCBmb3JtUHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdFZhbHVlID0galF1ZXJ5KHRoaXMpLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGVjdFZhbHVlID09PSAnJyB8fMKgKEFycmF5LmlzQXJyYXkoc2VsZWN0VmFsdWUpICYmIHNlbGVjdFZhbHVlLmxlbmd0aCA9PT0gMCkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGFzZXRbJ2VtcHR5VXJsJ10gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX3VwZGF0ZVNlbGVjdCh0YXJnZXRTZWxlY3QsIHt9KTtcclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkodGFyZ2V0U2VsZWN0KS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5ld0FwaVVybCA9IHNlbGYuX2J1aWxkVXJsV2l0aEZvcm1GaWVsZHModGhpcy5kYXRhc2V0WydlbXB0eVVybCddLCBmb3JtUHJlZml4KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgalF1ZXJ5KHRhcmdldFNlbGVjdCkucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcclxuXHJcbiAgICAgICAgICAgIEFQSS5nZXQobmV3QXBpVXJsLCB7fSwgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLl91cGRhdGVTZWxlY3QodGFyZ2V0U2VsZWN0LCBkYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIF9idWlsZFVybFdpdGhGb3JtRmllbGRzKGFwaVVybCwgZm9ybVByZWZpeCkge1xyXG4gICAgICAgIGxldCBuZXdBcGlVcmwgPSBhcGlVcmw7XHJcblxyXG4gICAgICAgIGFwaVVybC5zcGxpdCgnPycpWzFdLnNwbGl0KCcmJykuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgbGV0IFtrZXksIHZhbHVlXSA9IGl0ZW0uc3BsaXQoJz0nKTtcclxuICAgICAgICAgICAgbGV0IGRlY29kZWQgPSBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpO1xyXG4gICAgICAgICAgICBsZXQgdGVzdCA9IGRlY29kZWQubWF0Y2goLyUoLiopJS8pO1xyXG4gICAgICAgICAgICBpZiAodGVzdCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldEZpZWxkID0galF1ZXJ5KCcjJyArIGZvcm1QcmVmaXggKyB0ZXN0WzFdKTtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdWYWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldEZpZWxkLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRlYnVnOiB0aGlzIGNhc2UgZm9yIGV4YW1wbGUgaGFwcGVucyBpbiBkdXJhdGlvbiBvbmx5IG1vZGUsIHdoZW4gdGhlIGVuZCBmaWVsZCBpcyBub3QgZm91bmRcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdFUlJPUjogQ2Fubm90IGZpbmQgZmllbGQgd2l0aCBuYW1lIFwiJyArIHRlc3RbMV0gKyAnXCIgYnkgc2VsZWN0b3I6ICMnICsgZm9ybVByZWZpeCArIHRlc3RbMV0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0RmllbGQudmFsKCkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB0YXJnZXRGaWVsZC52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhhdmluZyB0aGF0IHNwZWNpYWwgY2FzZSBoZXJlIGlzIGZhciBmcm9tIGJlaW5nIHBlcmZlY3QuLi4gYnV0IGZvciBub3cgaXQgd29ya3MgOy0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0RmllbGQuZGF0YSgnZGF0ZXJhbmdlcGlja2VyJykgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT09ICdiZWdpbicgfHwga2V5ID09PSAnc3RhcnQnIHx8IHRhcmdldEZpZWxkLmRhdGEoJ2RhdGVyYW5nZXBpY2tlcicpLnNpbmdsZURhdGVQaWNrZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB0YXJnZXRGaWVsZC5kYXRhKCdkYXRlcmFuZ2VwaWNrZXInKS5zdGFydERhdGUuZm9ybWF0KG1vbWVudC5IVE1MNV9GTVQuREFURVRJTUVfTE9DQUxfU0VDT05EUyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdlbmQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gdGFyZ2V0RmllbGQuZGF0YSgnZGF0ZXJhbmdlcGlja2VyJykuZW5kRGF0ZS5mb3JtYXQobW9tZW50LkhUTUw1X0ZNVC5EQVRFVElNRV9MT0NBTF9TRUNPTkRTKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldEZpZWxkLmRhdGEoJ2Zvcm1hdCcpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9tZW50KG5ld1ZhbHVlLCB0YXJnZXRGaWVsZC5kYXRhKCdmb3JtYXQnKSkuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gbW9tZW50KG5ld1ZhbHVlLCB0YXJnZXRGaWVsZC5kYXRhKCdmb3JtYXQnKSkuZm9ybWF0KG1vbWVudC5IVE1MNV9GTVQuREFURVRJTUVfTE9DQUxfU0VDT05EUyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5ld1ZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gbmV3VmFsdWUuam9pbignLCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG5ld0FwaVVybCA9IG5ld0FwaVVybC5yZXBsYWNlKHZhbHVlLCBuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld0FwaVVybDtcclxuICAgIH1cclxuXHJcbiAgICBfdXBkYXRlU2VsZWN0KHNlbGVjdE5hbWUsIGRhdGEpIHtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge307XHJcbiAgICAgICAgZm9yIChjb25zdCBhcGlEYXRhIG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgbGV0IHRpdGxlID0gJ19fZW1wdHlfXyc7XHJcbiAgICAgICAgICAgIGlmIChhcGlEYXRhLmhhc093blByb3BlcnR5KCdwYXJlbnRUaXRsZScpICYmIGFwaURhdGEucGFyZW50VGl0bGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlID0gYXBpRGF0YS5wYXJlbnRUaXRsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuaGFzT3duUHJvcGVydHkodGl0bGUpKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zW3RpdGxlXSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wdGlvbnNbdGl0bGVdLnB1c2goYXBpRGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBvcmRlcmVkID0ge307XHJcbiAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykuc29ydCgpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgIG9yZGVyZWRba2V5XSA9IG9wdGlvbnNba2V5XTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5nZXRDb250YWluZXIoKS5nZXRQbHVnaW4oJ2Zvcm0tc2VsZWN0JykudXBkYXRlT3B0aW9ucyhzZWxlY3ROYW1lLCBvcmRlcmVkKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiLypcclxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEtpbWFpIHRpbWUtdHJhY2tpbmcgYXBwLlxyXG4gKlxyXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxyXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cclxuICovXHJcblxyXG4vKiFcclxuICogW0tJTUFJXSBLaW1haVRoZW1lSW5pdGlhbGl6ZXI6IGluaXRpYWxpemUgdGhlbWUgZnVuY3Rpb25hbGl0eVxyXG4gKi9cclxuXHJcbmltcG9ydCBqUXVlcnkgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IEtpbWFpUGx1Z2luIGZyb20gJy4uL0tpbWFpUGx1Z2luJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtpbWFpVGhlbWVJbml0aWFsaXplciBleHRlbmRzIEtpbWFpUGx1Z2luIHtcclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJHbG9iYWxBamF4RXJyb3JIYW5kbGVyKCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckF1dG9tYXRpY0FsZXJ0UmVtb3ZlKCdkaXYuYWxlcnQtc3VjY2VzcycsIDUwMDApO1xyXG4gICAgICAgIC8vIGFjdGl2YXRlIHRoZSBkcm9wZG93biBmdW5jdGlvbmFsaXR5XHJcbiAgICAgICAgalF1ZXJ5KCcuZHJvcGRvd24tdG9nZ2xlJykuZHJvcGRvd24oKTtcclxuICAgICAgICAvLyBhY3RpdmF0ZSB0aGUgdG9vbHRpcCBmdW5jdGlvbmFsaXR5XHJcbiAgICAgICAgalF1ZXJ5KCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xyXG4gICAgICAgIC8vIGFjdGl2YXRlIGFsbCBmb3JtIHBsdWdpbnNcclxuICAgICAgICB0aGlzLmdldENvbnRhaW5lcigpLmdldFBsdWdpbignZm9ybScpLmFjdGl2YXRlRm9ybSgnLmNvbnRlbnQtd3JhcHBlciBmb3JtJywgJ2JvZHknKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJlZGlyZWN0IGFjY2VzcyBkZW5pZWQgLyBzZXNzaW9uIHRpbWVvdXRzIHRvIGxvZ2luIHBhZ2VcclxuICAgICAqL1xyXG4gICAgcmVnaXN0ZXJHbG9iYWxBamF4RXJyb3JIYW5kbGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGxvZ2luVXJsID0gdGhpcy5nZXRDb250YWluZXIoKS5nZXRDb25maWd1cmF0aW9uKCkuZ2V0KCdsb2dpbicpO1xyXG4gICAgICAgIGNvbnN0IGFsZXJ0ID0gdGhpcy5nZXRDb250YWluZXIoKS5nZXRQbHVnaW4oJ2FsZXJ0Jyk7XHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRpb24gPSB0aGlzLmdldENvbnRhaW5lcigpLmdldFRyYW5zbGF0aW9uKCkuZ2V0KCdsb2dpbi5yZXF1aXJlZCcpO1xyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkuYWpheEVycm9yKGZ1bmN0aW9uKGV2ZW50LCBqcXhociwgc2V0dGluZ3MsIHRocm93bkVycm9yKSB7XHJcbiAgICAgICAgICAgIGlmIChqcXhoci5zdGF0dXMgIT09IHVuZGVmaW5lZCAmJiBqcXhoci5zdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbG9naW5SZXF1aXJlZCA9IGpxeGhyLmdldFJlc3BvbnNlSGVhZGVyKCdsb2dpbi1yZXF1aXJlZCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxvZ2luUmVxdWlyZWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydC5xdWVzdGlvbih0cmFuc2xhdGlvbiwgZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShsb2dpblVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYXV0byBoaWRlIHN1Y2Nlc3MgbWVzc2FnZXMsIGFzIHRoZXkgYXJlIGp1c3QgbWVhbnQgYXMgdXNlciBmZWVkYmFjayBhbmQgbm90IGFzIGEgcGVybWFuZW50IGluZm9ybWF0aW9uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXHJcbiAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IGludGVydmFsXHJcbiAgICAgKi9cclxuICAgIHJlZ2lzdGVyQXV0b21hdGljQWxlcnRSZW1vdmUoc2VsZWN0b3IsIGludGVydmFsKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fYWxlcnRSZW1vdmVIYW5kbGVyID0gc2V0SW50ZXJ2YWwoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5oaWRlQWxlcnQoc2VsZWN0b3IpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbnRlcnZhbFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdW5yZWdpc3RlckF1dG9tYXRpY0FsZXJ0UmVtb3ZlKCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fYWxlcnRSZW1vdmVIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxyXG4gICAgICovXHJcbiAgICBoaWRlQWxlcnQoc2VsZWN0b3IpIHtcclxuICAgICAgICBqUXVlcnkoc2VsZWN0b3IpLmFsZXJ0KCdjbG9zZScpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvKlxyXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgS2ltYWkgdGltZS10cmFja2luZyBhcHAuXHJcbiAqXHJcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXHJcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxyXG4gKi9cclxuXHJcbi8qIVxyXG4gKiBbS0lNQUldIEtpbWFpVG9vbGJhcjogc29tZSBldmVudCBsaXN0ZW5lciB0byBoYW5kbGUgdGhlIHRvb2xiYXIvZGF0YS10YWJsZSBmaWx0ZXIsIHRvb2xiYXIgYW5kIG5hdmlnYXRpb25cclxuICovXHJcblxyXG5pbXBvcnQgalF1ZXJ5IGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBLaW1haVBsdWdpbiBmcm9tIFwiLi4vS2ltYWlQbHVnaW5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtpbWFpVG9vbGJhciBleHRlbmRzIEtpbWFpUGx1Z2luIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihmb3JtU2VsZWN0b3IsIGZvcm1TdWJtaXRBY3Rpb25DbGFzcykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5mb3JtU2VsZWN0b3IgPSBmb3JtU2VsZWN0b3I7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25DbGFzcyA9IGZvcm1TdWJtaXRBY3Rpb25DbGFzcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRJZCgpIHtcclxuICAgICAgICByZXR1cm4gJ3Rvb2xiYXInO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgY29uc3QgZm9ybVNlbGVjdG9yID0gdGhpcy5nZXRTZWxlY3RvcigpO1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IEVWRU5UID0gc2VsZi5nZXRDb250YWluZXIoKS5nZXRQbHVnaW4oJ2V2ZW50Jyk7XHJcblxyXG4gICAgICAgIHRoaXMuX3JlZ2lzdGVyUGFnaW5hdGlvbihmb3JtU2VsZWN0b3IsIEVWRU5UKTtcclxuICAgICAgICB0aGlzLl9yZWdpc3RlclNvcnRhYmxlVGFibGVzKGZvcm1TZWxlY3RvciwgRVZFTlQpO1xyXG4gICAgICAgIHRoaXMuX3JlZ2lzdGVyQWx0ZXJuYXRpdmVTdWJtaXRBY3Rpb25zKGZvcm1TZWxlY3RvciwgdGhpcy5hY3Rpb25DbGFzcyk7XHJcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXJTZWFyY2hCdXR0b25zKGZvcm1TZWxlY3Rvcik7XHJcblxyXG4gICAgICAgIGpRdWVyeSgnYm9keScpXHJcbiAgICAgICAgICAgIC8vIHByZXZlbnQgdGhhdCB0aGUgZHJvcGRvd24gY2xvc2VzLCB3aGVuIGEgZm9ybSBpbnB1dCBpcyBjaGFuZ2VkIC0gZWcuIGEgc2VsZWN0IG9wdGlvbiB3YXMgY2xpY2tlZFxyXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgZm9ybVNlbGVjdG9yICsgJyAuZHJvcGRvd24tbWVudScsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vIHByZXZlbnQgdGhhdCBhIGNsaWNrIGludG8gdGhlIHNlYXJjaCBmaWVsZCB3aWxsIGNsb3NlIHRoZSBkcm9wZG93blxyXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgJy5zZWxlY3QyLXNlYXJjaF9fZmllbGQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLyBwcmV2ZW50IHRoYXQgdGhlIGRyb3Bkb3duIGNsb3NlcyB3aGVuIGEgb3B0Z3JvdXAgaGVhZGVyIGlzIGNsaWNrZWRcclxuICAgICAgICAgICAgLm9uKCdjbGljaycsICcuc2VsZWN0Mi1yZXN1bHRzX19ncm91cCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vIHByZXZlbnQgdGhhdCBhIGNsaWNrIGludG8gYSBkYXRlcmFuZ2VwaWNrZXIgd2lsbCBjbG9zZSB0aGUgZHJvcGRvd25cclxuICAgICAgICAgICAgLm9uKCdjbGljaycsICcuZGF0ZXJhbmdlcGlja2VyJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy8gcHJldmVudCB0aGF0IGNsaWNrcyBpbiB0aGUgZHJvcGRvd24gZWxlbWVudHMsIGJ1dCBvdXRzaWRlIG9mIGVsZW1lbnRzIHdpbGwgY2xvc2UgdGhlIGRyb3Bkb3duIChlZyBib3JkZXIgYmVzaWRlcyB0aGUgc2VhcmNoIGZpZWxkKVxyXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgJy5zZWxlY3QyLWNvbnRhaW5lcicsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgO1xyXG5cclxuICAgICAgICAvLyBSZXNldCB0aGUgcGFnZSBpZiBmaWx0ZXIgdmFsdWVzIGFyZSBjaGFuZ2VkLCBvdGhlcndpc2Ugd2UgbWlnaHQgZW5kIHVwIHdpdGggYSBsaW1pdGVkIHNldCBvZiBkYXRhLCBcclxuICAgICAgICAvLyB3aGljaCBkb2VzIG5vdCBzdXBwb3J0IHRoZSBnaXZlbiBwYWdlIC0gYW5kIGl0IHdvdWxkIGJlIGp1c3Qgd3JvbmcgdG8gc3RheSBpbiB0aGUgc2FtZSBwYWdlXHJcbiAgICAgICAgalF1ZXJ5KGZvcm1TZWxlY3RvciArJyBpbnB1dCcpLmNoYW5nZShmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChldmVudC50YXJnZXQuaWQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ29yZGVyJzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJ29yZGVyQnknOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAncGFnZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeShmb3JtU2VsZWN0b3IgKyAnIGlucHV0I3BhZ2UnKS52YWwoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VsZi50cmlnZ2VyQ2hhbmdlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gd2hlbiB1c2VyIHNlbGVjdGVkIGEgbmV3IGN1c3RvbWVyIG9yIHByb2plY3QsIHJlc2V0IHRoZSBwYWdpbmF0aW9uIGJhY2sgdG8gMVxyXG4gICAgICAgIC8vIGFuZCB0aGVuIGZpbmQgb3V0IGlmIHRoZSByZXN1bHRzIHNob3VsZCBiZSByZWxvYWRlZFxyXG4gICAgICAgIGpRdWVyeShmb3JtU2VsZWN0b3IgKyAnIHNlbGVjdCcpLmNoYW5nZShmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgbGV0IHJlbG9hZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQudGFyZ2V0LmlkKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdjdXN0b21lcic6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGpRdWVyeShmb3JtU2VsZWN0b3IgKyAnIHNlbGVjdCNwcm9qZWN0JykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWxvYWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAncHJvamVjdCc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGpRdWVyeShmb3JtU2VsZWN0b3IgKyAnIHNlbGVjdCNhY3Rpdml0eScpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsb2FkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGpRdWVyeShmb3JtU2VsZWN0b3IgKyAnIGlucHV0I3BhZ2UnKS52YWwoMSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnRyaWdnZXJDaGFuZ2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBjbG9zZSBhbGwgb3BlbiBzZWxlY3RwaWNrZXIgdXBvbiBjaG9vc2luZyBhbnkgZHJvcGRvd24gb3B0aW9uXHJcbiAgICAgICAgalF1ZXJ5KGZvcm1TZWxlY3RvciArICcgc2VsZWN0LnNlbGVjdHBpY2tlcicpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5ib290c3RyYXAtc2VsZWN0Lm9wZW4nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHNlYXJjaCB0b2dnbGUgYnV0dG9uIGlzIG5vdCBwYXJ0IG9mIHRoaXMgY29tcG9uZW50LCBidXQgaXQgaXMgZGlyZWN0bHkgY29ubmVjdGVkIHRvIGl0LlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX3JlZ2lzdGVyU2VhcmNoQnV0dG9ucyhmb3JtU2VsZWN0b3IpIHtcclxuICAgICAgICBqUXVlcnkoJ2JvZHknKVxyXG4gICAgICAgICAgICAvLyBvbmx5IGZvciBtb2JpbGUgZXhwZXJpZW5jZSBjdXJyZW50bHk6IHNob3cgdGhlIHNlYXJjaCBmb3JtIGZpZWxkXHJcbiAgICAgICAgICAgIC5vbignY2xpY2snLCAnLmJ0bi1zZWFyY2guc2VhcmNoLXRvZ2dsZScsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KGZvcm1TZWxlY3RvcikucGFyZW50KCdzZWN0aW9uJykudG9nZ2xlQ2xhc3MoJ3NlYXJjaC1vcGVuJyk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoZm9ybVNlbGVjdG9yKS50b2dnbGVDbGFzcygnaGlkZGVuLXhzJyk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoZm9ybVNlbGVjdG9yICsgJyBpbnB1dCNzZWFyY2hUZXJtJykuZHJvcGRvd24oJ3RvZ2dsZScpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KGZvcm1TZWxlY3RvciArICcgaW5wdXQjc2VhcmNoVGVybScpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vIGhpZGUgdGhlIHNlYXJjaCBmb3JtIGZpZWxkXHJcbiAgICAgICAgICAgIC5vbignY2xpY2snLCBmb3JtU2VsZWN0b3IgKyAnIGEuc2VhcmNoLWNhbmNlbCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KGZvcm1TZWxlY3RvcikucGFyZW50KCdzZWN0aW9uJykudG9nZ2xlQ2xhc3MoJ3NlYXJjaC1vcGVuJyk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoZm9ybVNlbGVjdG9yICsgJyBpbnB1dCNzZWFyY2hUZXJtJykuZHJvcGRvd24oJ3RvZ2dsZScpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KGZvcm1TZWxlY3RvcikudG9nZ2xlQ2xhc3MoJ2hpZGRlbi14cycpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNvbWUgYWN0aW9ucyB1dGlsaXplIHRoZSBmaWx0ZXIgZnJvbSB0aGUgc2VhcmNoIGZvcm0gYW5kIHN1Ym1pdCBpdCB0byBhbm90aGVyIFVSTC5cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9yZWdpc3RlckFsdGVybmF0aXZlU3VibWl0QWN0aW9ucyh0b29sYmFyU2VsZWN0b3IsIGFjdGlvbkJ0bkNsYXNzKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICB3aGlsZSAodGFyZ2V0ICE9PSBudWxsICYmICF0YXJnZXQubWF0Y2hlcygnYm9keScpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhhY3Rpb25CdG5DbGFzcykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0b29sYmFyU2VsZWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmb3JtID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldkFjdGlvbiA9IGZvcm0uYWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZNZXRob2QgPSBmb3JtLm1ldGhvZDtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtLnRhcmdldCA9ICdfYmxhbmsnO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm0uYWN0aW9uID0gdGFyZ2V0LmhyZWY7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5kYXRhc2V0Lm1ldGhvZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0ubWV0aG9kID0gdGFyZ2V0LmRhdGFzZXQubWV0aG9kO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmb3JtLnN1Ym1pdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm0udGFyZ2V0ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5hY3Rpb24gPSBwcmV2QWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm0ubWV0aG9kID0gcHJldk1ldGhvZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTb3J0YWJsZSBkYXRhdGFibGVzIHVzZSBoaWRkZW4gZmllbGRzIGluIHRoZSB0b29sYmFyIGZpbHRlci9zZWFyY2ggZm9ybVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX3JlZ2lzdGVyU29ydGFibGVUYWJsZXMoZm9ybVNlbGVjdG9yLCBFVkVOVCkge1xyXG4gICAgICAgIGpRdWVyeSgnYm9keScpLm9uKCdjbGljaycsICd0aC5zb3J0YWJsZScsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgdmFyICRoZWFkZXIgPSBqUXVlcnkoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgdmFyIG9yZGVyID0gJ0RFU0MnO1xyXG4gICAgICAgICAgICB2YXIgb3JkZXJCeSA9ICRoZWFkZXIuZGF0YSgnb3JkZXInKTtcclxuICAgICAgICAgICAgaWYgKCRoZWFkZXIuaGFzQ2xhc3MoJ3NvcnRpbmdfZGVzYycpKSB7XHJcbiAgICAgICAgICAgICAgICBvcmRlciA9ICdBU0MnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGpRdWVyeShmb3JtU2VsZWN0b3IgKyAnIGlucHV0I29yZGVyQnknKS52YWwob3JkZXJCeSk7XHJcbiAgICAgICAgICAgIGpRdWVyeShmb3JtU2VsZWN0b3IgKyAnIGlucHV0I29yZGVyJykudmFsKG9yZGVyKTtcclxuICAgICAgICAgICAgLy8gdHJpZ2dlcnMgdGhlIHBhZ2UgcmVzZXQgLSBzZWUgYmVsb3dcclxuICAgICAgICAgICAgalF1ZXJ5KGZvcm1TZWxlY3RvciArICcgaW5wdXQjb3JkZXInKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgLy8gdHJpZ2dlcnMgdGhlIGRhdGF0YWJsZSByZWxvYWQgLSBzZWFyY2ggZm9yIHRoZSBldmVudCBuYW1lXHJcbiAgICAgICAgICAgIEVWRU5ULnRyaWdnZXIoJ2ZpbHRlci1jaGFuZ2UnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGNhdGNoZXMgYWxsIGNsaWNrcyBvbiB0aGUgcGFnaW5hdGlvbiBhbmQgcHJldmVudHMgdGhlIGRlZmF1bHQgYWN0aW9uLCBhcyB3ZSB3YW50IHRvIHJlbG9hZCB0aGUgcGFnZSB2aWEgSlNcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9yZWdpc3RlclBhZ2luYXRpb24oZm9ybVNlbGVjdG9yLCBFVkVOVCkge1xyXG4gICAgICAgIGpRdWVyeSgnYm9keScpLm9uKCdjbGljaycsICdkaXYubmF2aWdhdGlvbiB1bC5wYWdpbmF0aW9uIGxpIGEnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICBsZXQgcGFnZXIgPSBqUXVlcnkoZm9ybVNlbGVjdG9yICsgXCIgaW5wdXQjcGFnZVwiKTtcclxuICAgICAgICAgICAgaWYgKHBhZ2VyLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBsZXQgdXJsUGFydHMgPSBqUXVlcnkodGhpcykuYXR0cignaHJlZicpLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgICAgIGxldCBwYWdlID0gdXJsUGFydHNbdXJsUGFydHMubGVuZ3RoLTFdO1xyXG4gICAgICAgICAgICBwYWdlci52YWwocGFnZSk7XHJcbiAgICAgICAgICAgIHBhZ2VyLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICBFVkVOVC50cmlnZ2VyKCdwYWdpbmF0aW9uLWNoYW5nZScpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIGNvbnN0IHRvZ2dsZSA9IGpRdWVyeSh0aGlzLmdldFNlbGVjdG9yKCkgKyAnICNzZWFyY2hUZXJtLmRyb3Bkb3duLXRvZ2dsZScpO1xyXG4gICAgICAgIGlmICh0b2dnbGUucGFyZW50KCkuaGFzQ2xhc3MoJ29wZW4nKSkge1xyXG4gICAgICAgICAgICB0b2dnbGUuZHJvcGRvd24oJ3RvZ2dsZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRyaWdnZXJzIGFuIGV2ZW50LCB0aGF0IGV2ZXJ5b25lIGNhbiBsaXN0ZW4gZm9yLlxyXG4gICAgICovXHJcbiAgICB0cmlnZ2VyQ2hhbmdlKCkge1xyXG4gICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkuZ2V0UGx1Z2luKCdldmVudCcpLnRyaWdnZXIoJ3Rvb2xiYXItY2hhbmdlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBDU1Mgc2VsZWN0b3IgdG8gdGFyZ2V0IHRoZSB0b29sYmFyIGZvcm0uXHJcbiAgICAgKiBcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIGdldFNlbGVjdG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1TZWxlY3RvcjtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiLypcclxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEtpbWFpIHRpbWUtdHJhY2tpbmcgYXBwLlxyXG4gKlxyXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxyXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cclxuICovXHJcblxyXG4vKiFcclxuICogW0tJTUFJXSBLaW1haVBhZ2luYXRlZEJveFdpZGdldDogaGFuZGxlcyBib3ggd2lkZ2V0cyB0aGF0IGhhdmUgYSBwYWdpbmF0aW9uXHJcbiAqL1xyXG5cclxuaW1wb3J0IGpRdWVyeSBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLaW1haVBhZ2luYXRlZEJveFdpZGdldCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYm94SWQpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdG9yID0gYm94SWQ7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5ID0galF1ZXJ5KCc8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPjxkaXYgY2xhc3M9XCJmYXMgZmEtc3luYyBmYS1zcGluXCI+PC9kaXY+PC9kaXY+Jyk7XHJcbiAgICAgICAgdGhpcy53aWRnZXQgPSBqUXVlcnkodGhpcy5zZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5ocmVmID0gdGhpcy53aWRnZXQuZGF0YSgnaHJlZicpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzID0gdGhpcy53aWRnZXQuZGF0YSgncmVsb2FkJykuc3BsaXQoJyAnKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbG9hZFBhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFnZSA9IGpRdWVyeShzZWxmLnNlbGVjdG9yICsgJyAuYm94LXRvb2xzJykuZGF0YSgncGFnZScpO1xyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBzZWxmLl9idWlsZFVybChwYWdlKTtcclxuICAgICAgICAgICAgc2VsZi5sb2FkUGFnZSh1cmwpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgZXZlbnROYW1lIG9mIHRoaXMuZXZlbnRzKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCByZWxvYWRQYWdlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMud2lkZ2V0Lm9uKCdjbGljaycsICcuYm94LXRvb2xzIHVsLnBhZ2luYXRpb24gYScsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzZWxmLmxvYWRQYWdlKGpRdWVyeShldmVudC5jdXJyZW50VGFyZ2V0KS5hdHRyKCdocmVmJykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgY3JlYXRlKGVsZW1lbnRJZCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgS2ltYWlQYWdpbmF0ZWRCb3hXaWRnZXQoZWxlbWVudElkKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgX3Nob3dPdmVybGF5KCkge1xyXG4gICAgICAgIHRoaXMud2lkZ2V0LmFwcGVuZCh0aGlzLm92ZXJsYXkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBfaGlkZU92ZXJsYXkoKSB7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMub3ZlcmxheSkucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxvYWRQYWdlKHVybCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0gdGhpcy5zZWxlY3RvcjtcclxuICAgICAgICBcclxuICAgICAgICBzZWxmLl9zaG93T3ZlcmxheSgpO1xyXG5cclxuICAgICAgICBqUXVlcnkuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBodG1sID0galF1ZXJ5KHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeShzZWxlY3RvciArICcgLmJveC10b29scycpLnJlcGxhY2VXaXRoKGh0bWwuZmluZCgnLmJveC10b29scycpKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeShzZWxlY3RvciArICcgLmJveC1ib2R5JykucmVwbGFjZVdpdGgoaHRtbC5maW5kKCcuYm94LWJvZHknKSk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoc2VsZWN0b3IgKyAnIC5ib3gtdGl0bGUnKS5yZXBsYWNlV2l0aChodG1sLmZpbmQoJy5ib3gtdGl0bGUnKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5KHNlbGVjdG9yICsgJyAuYm94LWZvb3RlcicpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoc2VsZWN0b3IgKyAnIC5ib3gtZm9vdGVyJykucmVwbGFjZVdpdGgoaHRtbC5maW5kKCcuYm94LWZvb3RlcicpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGpRdWVyeShzZWxlY3RvciArICcgLmJveC1ib2R5IFtkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLndpZGdldC5yZW1vdmVEYXRhKCdlcnJvci1yZXRyeScpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5faGlkZU92ZXJsYXkoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdodG1sJyxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGpxWEhSLnN0YXR1cyAhPT0gdW5kZWZpbmVkICYmIGpxWEhSLnN0YXR1cyA9PT0gNTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYud2lkZ2V0LmRhdGEoJ2Vycm9yLXJldHJ5JykgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIHNob3cgZXJyb3IgbWVzc2FnZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFnZSA9IGpRdWVyeShzZWxlY3RvciArICcgLmJveC10b29scycpLmRhdGEoJ3BhZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFnZSA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi53aWRnZXQuZGF0YSgnZXJyb3ItcmV0cnknLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IHNlbGYuX2J1aWxkVXJsKHBhZ2UgLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5sb2FkUGFnZSh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNlbGYuX2hpZGVPdmVybGF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTsgICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBfYnVpbGRVcmwocGFnZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhyZWYucmVwbGFjZSgnMScsIHBhZ2UpO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuIiwiLypcclxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEtpbWFpIHRpbWUtdHJhY2tpbmcgYXBwLlxyXG4gKlxyXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxyXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cclxuICovXHJcblxyXG4vKiFcclxuICogW0tJTUFJXSBLaW1haVJlbG9hZFBhZ2VXaWRnZXQ6IGEgc2ltcGxlIGhlbHBlciB0byByZWxvYWQgdGhlIHBhZ2Ugb24gZXZlbnRzXHJcbiAqL1xyXG5cclxuaW1wb3J0IGpRdWVyeSBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLaW1haVJlbG9hZFBhZ2VXaWRnZXQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGV2ZW50cywgZnVsbFJlbG9hZCkge1xyXG4gICAgICAgIHRoaXMub3ZlcmxheSA9IGpRdWVyeSgnPGRpdiBjbGFzcz1cIm92ZXJsYXktd3JhcHBlclwiPjxkaXYgY2xhc3M9XCJvdmVybGF5XCI+PGRpdiBjbGFzcz1cImZhcyBmYS1zeW5jIGZhLXNwaW5cIj48L2Rpdj48L2Rpdj48L2Rpdj4nKTtcclxuICAgICAgICB0aGlzLndpZGdldCA9IGpRdWVyeSgnZGl2LmNvbnRlbnQtd3JhcHBlcicpO1xyXG5cclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgY29uc3QgcmVsb2FkUGFnZSA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBpZiAoZnVsbFJlbG9hZCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5sb2FkUGFnZShkb2N1bWVudC5sb2NhdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGV2ZW50TmFtZSBvZiBldmVudHMuc3BsaXQoJyAnKSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgcmVsb2FkUGFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgY3JlYXRlKGV2ZW50cywgZnVsbFJlbG9hZCkge1xyXG4gICAgICAgIGlmIChmdWxsUmVsb2FkID09PSB1bmRlZmluZWQgfHwgZnVsbFJlbG9hZCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBmdWxsUmVsb2FkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgS2ltYWlSZWxvYWRQYWdlV2lkZ2V0KGV2ZW50cywgZnVsbFJlbG9hZCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIF9zaG93T3ZlcmxheSgpIHtcclxuICAgICAgICB0aGlzLndpZGdldC5hcHBlbmQodGhpcy5vdmVybGF5KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgX2hpZGVPdmVybGF5KCkge1xyXG4gICAgICAgIGpRdWVyeSh0aGlzLm92ZXJsYXkpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsb2FkUGFnZSh1cmwpIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICBcclxuICAgICAgICBzZWxmLl9zaG93T3ZlcmxheSgpO1xyXG5cclxuICAgICAgICBqUXVlcnkuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJ3NlY3Rpb24uY29udGVudCcpLnJlcGxhY2VXaXRoKFxyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeShyZXNwb25zZSkuZmluZCgnc2VjdGlvbi5jb250ZW50JylcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgna2ltYWkucmVsb2FkUGFnZScpKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuX2hpZGVPdmVybGF5KCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnaHRtbCcsXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuX2hpZGVPdmVybGF5KCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbiA9IHVybDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=