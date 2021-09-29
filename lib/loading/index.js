"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

var CsLoading = /*#__PURE__*/function (_HTMLElement) {
  (0, _inheritsLoose2["default"])(CsLoading, _HTMLElement);

  function CsLoading() {
    var _this;

    _this = _HTMLElement.call(this) || this;

    var shadowRoot = _this.attachShadow({
      mode: 'open'
    });

    shadowRoot.innerHTML = "\n        <style>\n        :host{\n            font-size:inherit;\n            display:inline-flex;\n            align-items: center;\n            justify-content:center;\n            color:var(--themeColor,#0088FF);\n        }\n        .loading{\n            display: block;\n            width: 1em;\n            height: 1em;\n            margin: auto;\n            animation: rotate 1.4s linear infinite;\n        }\n        .circle {\n            stroke: currentColor;\n            animation:  progress 1.4s ease-in-out infinite;\n            stroke-dasharray: 80px, 200px;\n            stroke-dashoffset: 0px;\n            transition:.3s;\n        }\n        :host(:not(:empty)) .loading{\n            margin:.5em;\n        }\n        @keyframes rotate{\n            to{\n                transform: rotate(360deg); \n            }\n        }\n        @keyframes progress {\n            0% {\n              stroke-dasharray: 1px, 200px;\n              stroke-dashoffset: 0px; \n            }\n            50% {\n              stroke-dasharray: 100px, 200px;\n              stroke-dashoffset: -15px; \n            }\n            100% {\n              stroke-dasharray: 100px, 200px;\n              stroke-dashoffset: -125px; \n            } \n        }\n        </style>\n        <svg class=\"loading\" id=\"loading\" viewBox=\"22 22 44 44\"><circle class=\"circle\" cx=\"44\" cy=\"44\" r=\"20.2\" fill=\"none\" stroke-width=\"3.6\"></circle></svg>\n        <slot></slot>\n        ";
    return _this;
  }

  var _proto = CsLoading.prototype;

  _proto.connectedCallback = function connectedCallback() {
    this.loading = this.shadowRoot.getElementById('loading');
    this.size && (this.size = this.size);
    this.color && (this.color = this.color);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(name, oldValue, newValue) {
    if (name == 'color' && this.loading) {
      this.loading.style.color = newValue;
    }

    if (name == 'size' && this.loading) {
      this.loading.style.fontSize = newValue + 'px';
    }
  };

  (0, _createClass2["default"])(CsLoading, [{
    key: "size",
    get: function get() {
      return this.getAttribute('size') || '';
    },
    set: function set(value) {
      this.setAttribute('size', value);
    }
  }, {
    key: "color",
    get: function get() {
      return this.getAttribute('color') || '';
    },
    set: function set(value) {
      this.setAttribute('color', value);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['color', 'size'];
    }
  }]);
  return CsLoading;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(HTMLElement));

exports["default"] = CsLoading;

if (!customElements.get('cs-loading')) {
  customElements.define('cs-loading', CsLoading);
}
//# sourceMappingURL=index.js.map