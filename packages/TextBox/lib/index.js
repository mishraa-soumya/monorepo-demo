"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TextBox = function TextBox(_ref) {
  var placeholder = _ref.placeholder,
      type = _ref.type;
  var inputType = type ? type : "text";
  var placeHolder = placeholder ? placeholder : '';
  return /*#__PURE__*/_react["default"].createElement("input", {
    type: inputType,
    placeholder: placeHolder
  });
};

var _default = TextBox;
exports["default"] = _default;