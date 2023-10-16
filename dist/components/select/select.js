"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Select = exports.Select = function Select(_ref) {
  var label = _ref.label,
    value = _ref.value,
    options = _ref.options,
    onChange = _ref.onChange;
  var selectLabelStyles = {
    display: 'block',
    textTransform: 'uppercase'
  };
  var selectFieldStyles = {
    fontSize: '16px',
    lineHeight: '22px',
    padding: '2px 10px 2px 5px',
    minWidth: '100px',
    borderRadius: '0',
    border: '1px solid #333333',
    backgroundColor: 'transparent'
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: 'cmp-select'
  }, /*#__PURE__*/_react["default"].createElement("label", {
    style: selectLabelStyles,
    className: "cmp-select__label"
  }, label), /*#__PURE__*/_react["default"].createElement("select", {
    style: selectFieldStyles,
    className: "cmp-select__field",
    value: value,
    onChange: onChange
  }, options.map(function (option, key) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: key,
      value: option.value
    }, option.label);
  })));
};