"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

require("../loading/index.js");

require("../icon/index.js");

var CsButton = /*#__PURE__*/function (_HTMLElement) {
  (0, _inheritsLoose2["default"])(CsButton, _HTMLElement);

  function CsButton() {
    var _this;

    _this = _HTMLElement.call(this) || this;

    var shadowRoot = _this.attachShadow({
      mode: 'open'
    });

    shadowRoot.innerHTML = "\n        <style>\n        :host{\n            position:relative;\n            display:inline-flex;\n            align-items:center;\n            vertical-align: middle;\n            justify-content: center;\n            padding: .25em .625em;\n            box-sizing:border-box;\n            height: 38px;\n            overflow:hidden;\n            border:1px solid var(--borderColor,#E1E6EB);\n            font-size: 14px;\n            border-radius: var(--borderRadius,8px);\n            background:#fff;\n        }\n        :host([disabled]),:host([loading]){\n            pointer-events: none; \n            opacity:.6; \n        }\n        :host([block]){ \n            display:flex; \n        }\n        :host([disabled]:not([type])){ \n            background:rgba(0,0,0,.1); \n        }\n        :host([disabled]) .btn,:host([loading]) .btn{ \n            cursor: not-allowed;\n            pointer-events: all;\n        }\n        :host([type=\"primary\"]){ \n            color: #fff; \n            background:var(--themeColor,#0088FF);\n        }\n        :host([type=\"danger\"]){\n            color: #fff; \n            background:var(--dangerColor,#F72626);\n        }\n        :host([type=\"warning\"]){ \n            color: #fff; \n            background:var(--warningColor,#FB990F);\n        }\n        :host([type=\"info\"]){ \n            color: #fff; \n            background:var(--infoColor,#07C160);\n        }\n        :host([type=\"primary\"]),:host([type=\"danger\"]){ \n            border:0;\n            padding: calc( .25em + 1px ) calc( .625em + 1px );\n        }\n        :host([color=\"" + _this.color + "\"]){ \n            background:" + _this.color + ";\n        }\n        .btn{ \n            background:none; \n            outline:0; \n            border:0; \n            position: \n            absolute; \n            left:0; \n            top:0;\n            width:100%;\n            height:100%;\n            padding:0;\n            user-select: none;\n            cursor: unset;\n        }\n        cs-loading{ \n            margin-right: 0.35em;  \n        }\n        ::-moz-focus-inner{\n            border:0;\n        }\n        :host(:not([disabled]):active) .btn::before{ \n            opacity:.2;\n        }\n        .btn:not([disabled]):active::after {\n            transform: translate(-50%,-50%) scale(0);\n            opacity: .3;\n            transition: 0s;\n        }\n        cs-icon{\n            margin-right: 0.35em;\n            transition: none;\n        }\n        ::slotted(cs-icon){\n            transition: none;\n        }\n        :host([href]){\n            cursor:pointer;\n        }\n        </style>\n        <" + (_this.href ? 'a' : 'button') + " " + (_this.href ? 'href="' + _this.href + '" target="' + _this.target + '" rel="' + _this.rel + '"' : '') + " class=\"btn\" id=\"btn\"></" + (_this.href ? 'a' : 'button') + ">" + (!_this.loading && _this.icon && _this.icon != 'null' ? '<cs-icon id="icon" name=' + _this.icon + '></cs-icon>' : '') + "<slot></slot>\n        ";
    return _this;
  }

  var _proto = CsButton.prototype;

  _proto.connectedCallback = function connectedCallback() {
    this.btn = this.shadowRoot.getElementById('btn');
    this.icon = this.shadowRoot.getElementById('icon');
    this.load = document.createElement('cs-loading');
    this.load.style.color = 'inherit'; // this.btn.addEventListener('mousedown',function(ev){
    //     //ev.preventDefault();
    //     //ev.stopPropagation();
    //     if(!this.disabled){
    //         const { left, top } = this.getBoundingClientRect();
    //         this.style.setProperty('--x',(ev.clientX - left)+'px');
    //         this.style.setProperty('--y',(ev.clientY - top)+'px');
    //     }
    // })

    this.disabled = this.disabled;
    this.loading = this.loading;
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(name, oldValue, newValue) {
    if (name == 'disabled' && this.btn) {
      if (newValue !== null) {
        this.btn.setAttribute('disabled', 'disabled');

        if (this.href) {
          this.btn.removeAttribute('href');
        }
      } else {
        this.btn.removeAttribute('disabled');

        if (this.href) {
          this.btn.href = this.href;
        }
      }
    }

    if (name == 'loading' && this.btn) {
      if (newValue !== null) {
        this.shadowRoot.prepend(this.load);
        this.btn.setAttribute('disabled', 'disabled');
      } else {
        this.shadowRoot.removeChild(this.load);
        this.btn.removeAttribute('disabled');
      }
    }

    if (name == 'href' && this.btn) {
      if (!this.disabled) {
        this.btn.href = newValue;
      }
    }
  };

  (0, _createClass2["default"])(CsButton, [{
    key: "disabled",
    get: function get() {
      return this.getAttribute('disabled') !== null;
    },
    set: function set(value) {
      if (value === null || value === false) {
        this.removeAttribute('disabled');
      } else {
        this.setAttribute('disabled', '');
      }
    }
  }, {
    key: "name",
    get: function get() {
      return this.getAttribute('name');
    }
  }, {
    key: "checked",
    get: function get() {
      return this.getAttribute('checked') !== null;
    },
    set: function set(value) {
      if (value === null || value === false) {
        this.removeAttribute('checked');
      } else {
        this.setAttribute('checked', '');
      }
    }
  }, {
    key: "href",
    get: function get() {
      return this.getAttribute('href');
    },
    set: function set(value) {
      this.setAttribute('href', value);
    }
  }, {
    key: "target",
    get: function get() {
      return this.getAttribute('target') || '_blank';
    }
  }, {
    key: "rel",
    get: function get() {
      return this.getAttribute('rel');
    }
  }, {
    key: "icon",
    get: function get() {
      return this.getAttribute('icon');
    },
    set: function set(value) {
      this.setAttribute('icon', value);
    }
  }, {
    key: "color",
    get: function get() {
      return this.getAttribute('color');
    }
  }, {
    key: "loading",
    get: function get() {
      return this.getAttribute('loading') !== null;
    },
    set: function set(value) {
      if (value === null || value === false) {
        this.removeAttribute('loading');
      } else {
        this.setAttribute('loading', '');
      }
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['disabled', 'icon', 'loading', 'href'];
    }
  }]);
  return CsButton;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(HTMLElement));

exports["default"] = CsButton;

if (!customElements.get('cs-button')) {
  customElements.define('cs-button', CsButton);
}
//# sourceMappingURL=index.js.map