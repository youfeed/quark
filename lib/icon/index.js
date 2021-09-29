"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

var CsIcon = /*#__PURE__*/function (_HTMLElement) {
  (0, _inheritsLoose2["default"])(CsIcon, _HTMLElement);

  function CsIcon() {
    var _this;

    _this = _HTMLElement.call(this) || this;

    var shadowRoot = _this.attachShadow({
      mode: 'open'
    });

    shadowRoot.innerHTML = "\n\t\t\t<style>\n\t\t\t:host{\n\t\t\t\tfont-size:inherit;\n\t\t\t\tdisplay:inline-block;\n\t\t\t\ttransition:.3s;\n\t\t\t}\n\t\t\t.icon {\n\t\t\t\tdisplay:block;\n\t\t\t\twidth: 1em;\n\t\t\t\theight: 1em;\n\t\t\t\tmargin: auto;\n\t\t\t\tfill: currentColor;\n\t\t\t\toverflow: hidden;\n\t\t\t}\n\t\t\t</style>\n\t\t\t<svg class=\"icon\" id=\"icon\" aria-hidden=\"true\" viewBox=\"0 0 1024 1024\">\n\t\t\t\t<use id=\"use\"></use>\n\t\t\t</svg>\n\t\t";
    return _this;
  }

  var _proto = CsIcon.prototype;

  _proto.connectedCallback = function connectedCallback() {
    this.icon = this.shadowRoot.getElementById('icon');
    this.use = this.icon.querySelector('use');
    this.size && (this.size = this.size);
    this.color && (this.color = this.color);
    this.name && (this.name = this.name);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(name, oldValue, newValue) {
    if (name == 'name' && this.use) {
      this.use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', "../iconfont/icon.svg#icon-" + newValue);
    }

    if (name == 'color' && this.icon) {
      this.icon.style.color = newValue;
    }

    if (name == 'size' && this.icon) {
      this.icon.style.fontSize = newValue + 'px';
    }
  };

  (0, _createClass2["default"])(CsIcon, [{
    key: "name",
    get: function get() {
      return this.getAttribute('name');
    },
    set: function set(value) {
      this.setAttribute('name', value);
    }
  }, {
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
      return ['name', 'size', 'color'];
    }
  }]);
  return CsIcon;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(HTMLElement));

exports["default"] = CsIcon;

if (!customElements.get('cs-icon')) {
  customElements.define('cs-icon', CsIcon);
}
//# sourceMappingURL=index.js.map