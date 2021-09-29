"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

require("../button/index.js");

var CsTabContent = /*#__PURE__*/function (_HTMLElement) {
  (0, _inheritsLoose2["default"])(CsTabContent, _HTMLElement);

  function CsTabContent() {
    var _this;

    _this = _HTMLElement.call(this) || this;

    var shadowRoot = _this.attachShadow({
      mode: 'open'
    });

    shadowRoot.innerHTML = "\n        <slot></slot>\n        ";
    return _this;
  }

  var _proto = CsTabContent.prototype;

  _proto.attributeChangedCallback = function attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue && newValue !== undefined) {
      if (name === 'label') {
        this.parentNode.updatalabel && this.parentNode.updatalabel(this.key, newValue);
      }

      if (name === 'disabled') {
        this.parentNode.updatadisabled && this.parentNode.updatadisabled(this.key, newValue);
      }
    }
  };

  (0, _createClass2["default"])(CsTabContent, [{
    key: "label",
    get: function get() {
      return this.getAttribute('label') || '';
    },
    set: function set(value) {
      this.setAttribute('label', value);
    }
  }, {
    key: "icon",
    get: function get() {
      return this.getAttribute('icon');
    }
  }, {
    key: "key",
    get: function get() {
      return this.getAttribute('key');
    },
    set: function set(value) {
      this.setAttribute('key', value);
    }
  }, {
    key: "disabled",
    get: function get() {
      return this.getAttribute('disabled');
    },
    set: function set(value) {
      if (value === null || value === false) {
        this.removeAttribute('disabled');
      } else {
        this.setAttribute('disabled', value);
      }
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ["label", "key", "disabled", "icon"];
    }
  }]);
  return CsTabContent;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(HTMLElement));

if (!customElements.get('cs-tab-content')) {
  customElements.define('cs-tab-content', CsTabContent);
}

var CsTab = /*#__PURE__*/function (_HTMLElement2) {
  (0, _inheritsLoose2["default"])(CsTab, _HTMLElement2);

  function CsTab() {
    var _this2;

    _this2 = _HTMLElement2.call(this) || this;

    var shadowRoot = _this2.attachShadow({
      mode: 'open'
    });

    shadowRoot.innerHTML = "\n        <style>\n        :host{\n            display:block;\n            text-align: unset;\n        }\n        .tab{\n            display:flex;\n            flex-direction:column;\n            height: 100%;\n            overflow: hidden;\n        }\n        .tab-nav-con{\n            position:relative;\n            overflow:hidden;\n            scroll-behavior: smooth;\n        }\n        .tab-nav{\n            display:flex;\n        }\n        .nav-item{\n            font-size:inherit;\n            border-radius:0;\n            box-shadow:none;\n            flex-shrink: 0;\n            border-color:transparent;\n        }\n        :host(:not([type=\"line\"])) .nav-item.active{\n            color:var(--themeColor,#0088FF);\n        }\n        .tab-line{\n            position:absolute;\n            width:0;\n            margin-top:-2px;\n            height:2px;\n            border-radius:2px;\n            background:var(--themeColor,#0088FF);\n            transition:.2s;\n        }\n        .tab-content{\n            overflow:hidden;\n            flex:1;\n            transition:.2s;\n        }\n        .tab-content-wrap{\n            display:flex;\n            width:100%;\n            height:100%;\n            transition:.2s;\n        }\n        :host([type=\"card\"]) .tab-line,\n        :host([type=\"line\"]) .tab-line{\n            visibility:hidden;\n        }\n        :host([type=\"card\"]) .nav-item{\n            border-radius:.5em .5em 0 0;\n        }\n        :host([type=\"line\"]) .nav-item{\n            border-radius:var(--borderRadius,.25em) var(--borderRadius,.25em) 0 0;\n        }\n        :host([type=\"card\"]) .nav-item.active,:host([type=\"card\"]) .tab-content{\n            background-color:#fff;\n        }\n        :host([type=\"line\"]) .nav-item.active{\n            border-color:var(--borderColor,rgba(0,0,0,.2)) var(--borderColor,rgba(0,0,0,.2)) transparent;\n        }\n        :host([type=\"line\"]) .tab-nav-con{\n            oveflow:hidden;\n        }\n        :host([type=\"line\"]) .tab-line{\n            transition:none;\n        }\n        :host([type=\"line\"]) .tab-line::before,\n        :host([type=\"line\"]) .tab-line::after{\n            content:'';\n            position:absolute;\n            visibility:visible;\n            width:9999px;\n            height:1px;\n            bottom:0;\n            background:var(--borderColor,rgba(0,0,0,.2));\n        }\n        :host([type=\"line\"]) .tab-line::before{\n            right:100%;\n        }\n        :host([type=\"line\"]) .tab-line::after{\n            left:100%;\n        }\n        :host([type=\"card\"]) .tab-content-wrap,\n        :host([type=\"line\"]) .tab-content-wrap{\n            transition:none;\n        }\n        :host([align=\"center\"]) .tab-nav{\n            justify-content:center;\n        }\n        :host([align=\"end\"]) .tab-nav{\n            justify-content:flex-end;\n        }\n        ::slotted(cs-tab-content){\n            box-sizing:border-box;\n            width:100%;\n            height:100%;\n            padding:10px;\n            flex-shrink:0;\n            overflow:auto;\n        }\n        </style>\n        <style id=\"filter\"></style>\n        <div class=\"tab\">\n            <div class=\"tab-nav-con\">\n                <div class=\"tab-nav\" id=\"nav\"></div>\n                <i class=\"tab-line\" id=\"tab-line\"></i>\n            </div>\n            <div class=\"tab-content\">\n                <div class=\"tab-content-wrap\" id=\"tab-content\"><slot id=\"slot\">NEED CONTENT</slot></div>\n            </div>\n        </div>\n        ";
    return _this2;
  }

  var _proto2 = CsTab.prototype;

  _proto2.inittab = function inittab() {
    var _this3 = this;

    var items = this.nav.querySelectorAll('.nav-item'); // console.log(items, 8877);

    Array.from(items).forEach(function (item, index) {
      _this3.tabPos[item.dataset.key] = {
        index: index,
        width: item.offsetWidth,
        left: item.offsetLeft,
        label: item.textContent
      };
    });
    console.log(this.accessKey, 7777766);

    if (this.activekey) {
      this.tabline.style = "width:" + this.tabPos[this.activekey].width + "px;transform:translateX(" + this.tabPos[this.activekey].left + "px)";
    }
  };

  _proto2.updatalabel = function updatalabel(key, label) {
    var nav = this.nav.querySelector(".nav-item[data-key='" + key + "']");

    if (nav) {
      nav.innerHTML = label;
      this.inittab();
    }
  };

  _proto2.updatadisabled = function updatadisabled(key, disabled) {
    var nav = this.nav.querySelector(".nav-item[data-key='" + key + "']");

    if (nav) {
      nav.disabled = disabled;
    }
  };

  _proto2.connectedCallback = function connectedCallback() {
    var _this4 = this;

    this.tabPos = {};
    this.nav = this.shadowRoot.getElementById('nav');
    this.tab = this.shadowRoot.getElementById('tab-content');
    this.tabline = this.shadowRoot.getElementById('tab-line');
    this.slots = this.shadowRoot.getElementById('slot');
    this.filter = this.shadowRoot.getElementById('filter');
    this.slots.addEventListener('slotchange', function () {
      var slots = _this4.slots.assignedElements();

      var html = '';
      slots.forEach(function (item, index) {
        if (item.tagName === 'CS-TAB-CONTENT') {
          if (item.key === null) {
            item.key = index;
          }

          html += "<cs-button class=\"nav-item " + (item.key === _this4.activekey ? 'active' : '') + "\" icon=" + item.icon + " " + (item.disabled !== null ? "disabled" : "") + " data-key=" + item.key + ">" + item.label + "</cs-button>";
        }
      });
      _this4.nav.innerHTML = html;

      _this4.inittab();

      if (_this4.activekey === null) {
        _this4.activekey = slots[0].key;
      } else {
        _this4.activekey = _this4.activekey;
      }

      _this4.init = true;
    });
    this.nav.addEventListener('click', function (ev) {
      var item = ev.target.closest('cs-button');

      if (item) {
        _this4.activekey = item.dataset.key;
      }
    });
  };

  _proto2.movein = function movein(index) {
    var cur = this.nav.querySelector(".nav-item.active");

    if (index > 0 && cur.nextElementSibling) {
      this.activekey = cur.nextElementSibling.dataset.key;
    }

    if (index < 0 && cur.previousElementSibling) {
      this.activekey = cur.previousElementSibling.dataset.key;
    }
  };

  _proto2.attributeChangedCallback = function attributeChangedCallback(name, oldValue, newValue) {
    if (name == 'activekey' && this.tab) {
      var active = this.tabPos[newValue];

      if (active === undefined) {
        this.activekey = this.slots.assignedElements()[0].key;
        active = this.tabPos[this.activekey];
      }

      this.tabline.style = "width:" + active.width + "px;transform:translateX(" + active.left + "px)";
      this.tab.style.transform = "translateX(" + -active.index * 100 + "%)";
      this.filter.textContent = "\n            ::slotted(cs-tab-content:not([key=\"" + this.activekey + "\"])){\n                height:0;\n                overflow:visible;\n            }\n            ";

      if (oldValue !== newValue) {
        this.nav.parentNode.scrollLeft = active.left + active.width / 2 - this.nav.parentNode.offsetWidth / 2;
        var pre = this.nav.querySelector(".nav-item.active");

        if (pre) {
          pre.classList.remove('active');
        }

        var cur = this.nav.querySelector(".nav-item[data-key='" + newValue + "']");
        cur.classList.add('active');
        cur.focus();

        if (this.init && oldValue !== null) {
          this.dispatchEvent(new CustomEvent('change', {
            detail: {
              key: this.activekey,
              index: active.index,
              label: active.label
            }
          }));
        }
      }
    }
  };

  (0, _createClass2["default"])(CsTab, [{
    key: "align",
    get: function get() {
      return this.getAttribute('align') || 'start';
    },
    set: function set(value) {
      this.setAttribute('align', value);
      this.inittab();
    }
  }, {
    key: "type",
    get: function get() {
      return this.getAttribute('type') || 'flat';
    },
    set: function set(value) {
      this.setAttribute('type', value);
    }
  }, {
    key: "activekey",
    get: function get() {
      return this.getAttribute('activekey');
    },
    set: function set(value) {
      this.setAttribute('activekey', value);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['activekey'];
    }
  }]);
  return CsTab;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(HTMLElement));

exports["default"] = CsTab;

if (!customElements.get('cs-tab')) {
  customElements.define('cs-tab', CsTab);
}
//# sourceMappingURL=index.js.map