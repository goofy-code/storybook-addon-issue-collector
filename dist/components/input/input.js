"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Input = function Input(_ref) {
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
    padding: '4px 10px 2px 5px',
    minWidth: '200px',
    borderRadius: '0',
    border: '1px solid #333333',
    backgroundColor: 'transparent'
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("label", {
    style: selectLabelStyles
  }, label), /*#__PURE__*/_react["default"].createElement("input", {
    style: selectFieldStyles,
    value: value,
    onChange: onChange
  }));
};
exports.Input = Input;