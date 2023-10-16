"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkButton = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import './link-buttons.scss';

var LinkButton = exports.LinkButton = function LinkButton(_ref) {
  var href = _ref.href,
    target = _ref.target,
    label = _ref.label;
  var buttonStyles = {
    textDecoration: 'none',
    textTransform: 'uppercase',
    padding: '2px 10px',
    border: '1px solid #16171a',
    backgroundColor: '#16171a',
    color: '#ffffff',
    fontSize: '16px',
    lineHeight: '22px',
    fontWeight: 'bold',
    display: 'inline-block',
    transition: 'background-color 0.3s ease-out'
  };
  return /*#__PURE__*/_react["default"].createElement("a", {
    style: buttonStyles,
    className: 'cmp-link-button',
    target: target,
    href: href
  }, label);
};