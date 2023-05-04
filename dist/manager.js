"use strict";

var _react = _interopRequireDefault(require("react"));
var _managerApi = require("@storybook/manager-api");
var _components = require("@storybook/components");
var _select = require("./components/select/select");
var _linkButtons = require("./components/link-button/link-buttons");
var _input = require("./components/input/input");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ADDON_ID = 'storybook-addon-issue-collector';
var PANEL_ID = "".concat(ADDON_ID, "/panel");
var CollectorCreateLink = function CollectorCreateLink(_ref) {
  var baseUrl = _ref.baseUrl,
    issueArguments = _ref.issueArguments,
    label = _ref.label;
  return /*#__PURE__*/_react["default"].createElement(_linkButtons.LinkButton, {
    target: "_blank",
    href: "".concat(baseUrl, "?").concat(issueArguments),
    label: label
  });
};
var valuesToSelectOptions = function valuesToSelectOptions(values) {
  return values.map(function (v) {
    return {
      value: v.id,
      label: v.name
    };
  });
};
var SelectComponent = function SelectComponent(_ref2) {
  var label = _ref2.label,
    options = _ref2.options,
    value = _ref2.value,
    onChange = _ref2.onChange;
  return /*#__PURE__*/_react["default"].createElement(_select.Select, {
    options: options,
    label: label,
    value: value,
    onChange: onChange
  });
};
var SelectIssueType = function SelectIssueType(_ref3) {
  var label = _ref3.label,
    options = _ref3.options,
    value = _ref3.value,
    onChange = _ref3.onChange;
  return /*#__PURE__*/_react["default"].createElement(_select.Select, {
    options: options,
    label: label,
    value: value,
    onChange: onChange
  });
};
var Reporter = function Reporter(_ref4) {
  var label = _ref4.label,
    value = _ref4.value,
    onChange = _ref4.onChange;
  return /*#__PURE__*/_react["default"].createElement(_input.Input, {
    label: label,
    value: value,
    onChange: onChange
  });
};
var MyPanel = function MyPanel() {
  var _config$settings, _config$components$, _config$issueTypes$;
  var config = (0, _managerApi.useParameter)('issueCollector', {
    settings: {},
    components: [],
    issueTypes: [],
    additionalQueryArgs: {}
  });
  var configIsInvalid = !config.settings || !((_config$settings = config.settings) !== null && _config$settings !== void 0 && _config$settings.create) || !(config !== null && config !== void 0 && config.components) || !(config !== null && config !== void 0 && config.issueTypes) || config.components.length === 0 || config.issueTypes.length === 0;
  var _React$useState = _react["default"].useState((_config$components$ = config.components[0]) === null || _config$components$ === void 0 ? void 0 : _config$components$.id),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    selectedComponent = _React$useState2[0],
    setComponent = _React$useState2[1];
  var _React$useState3 = _react["default"].useState((_config$issueTypes$ = config.issueTypes[0]) === null || _config$issueTypes$ === void 0 ? void 0 : _config$issueTypes$.id),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    selectedIssueType = _React$useState4[0],
    setIssueType = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(''),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    selectedReporter = _React$useState6[0],
    setReporter = _React$useState6[1];
  if (configIsInvalid) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
  }
  var getArguments = function getArguments() {
    var _config$components$2, _config$issueTypes$2;
    config.additionalQueryArgs.components = selectedComponent || ((_config$components$2 = config.components[0]) === null || _config$components$2 === void 0 ? void 0 : _config$components$2.id);
    config.additionalQueryArgs.issuetype = selectedIssueType || ((_config$issueTypes$2 = config.issueTypes[0]) === null || _config$issueTypes$2 === void 0 ? void 0 : _config$issueTypes$2.id);
    config.additionalQueryArgs.reporter = selectedReporter || '';
    return Object.keys(config.additionalQueryArgs).map(function (k) {
      return "".concat(k, "=").concat(config.additionalQueryArgs[k]);
    }).join('&');
  };
  var selectComponent = function selectComponent(event) {
    setComponent(event.target.value);
  };
  var selectIssueType = function selectIssueType(event) {
    setIssueType(event.target.value);
  };
  var selectReporter = function selectReporter(event) {
    setReporter(event.target.value);
  };
  var stylesRow = {
    display: 'flex',
    gap: '20px',
    marginTop: '5px',
    marginBottom: '10px'
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: stylesRow
  }, /*#__PURE__*/_react["default"].createElement(Reporter, {
    label: 'Reporter',
    value: selectedReporter,
    onChange: selectReporter
  }), /*#__PURE__*/_react["default"].createElement(SelectIssueType, {
    label: 'Issue Type',
    options: valuesToSelectOptions(config.issueTypes),
    value: selectedIssueType,
    onChange: selectIssueType
  }), /*#__PURE__*/_react["default"].createElement(SelectComponent, {
    label: 'Component',
    options: valuesToSelectOptions(config.components),
    value: selectedComponent,
    onChange: selectComponent
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    style: stylesRow,
    className: 'row'
  }, /*#__PURE__*/_react["default"].createElement(CollectorCreateLink, {
    baseUrl: config.settings.create.baseUrl,
    label: config.settings.create.label,
    issueArguments: getArguments()
  })));
};
_managerApi.addons.register(ADDON_ID, function (api) {
  _managerApi.addons.add(PANEL_ID, {
    type: _managerApi.types.PANEL,
    title: 'Create Issue',
    render: function render(_ref5) {
      var active = _ref5.active,
        key = _ref5.key;
      return /*#__PURE__*/_react["default"].createElement(_components.AddonPanel, {
        active: active,
        key: key
      }, /*#__PURE__*/_react["default"].createElement(MyPanel, null));
    },
    paramKey: 'issueCollector'
  });
});