"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

require("../button/index.js");

var CsInput = /*#__PURE__*/function (_HTMLElement) {
  (0, _inheritsLoose2["default"])(CsInput, _HTMLElement);

  function CsInput(_temp) {
    var _this;

    var _ref = _temp === void 0 ? {} : _temp,
        multi = _ref.multi;

    _this = _HTMLElement.call(this) || this;

    _this.setlist = function (ev) {
      if (_this.list) {
        if (_this.contains(ev.target) || _this.list.contains(ev.target)) {
          _this.list.show = true;
        } else {
          _this.list.show = false;
        }
      }
    };

    _this.multi = multi;
    _this.$customValidity = null;

    var shadowRoot = _this.attachShadow({
      mode: 'open'
    });

    shadowRoot.innerHTML = "\n        <style>\n        :host{\n            box-sizing:border-box;\n            display:inline-block;\n            border:1px solid var(--borderColor,rgba(0,0,0,.2));\n            border-radius:var(--borderRadius,.25em);\n            line-height: 1.8;\n            transition:border-color .3s,box-shadow .3s;\n            padding: .25em .625em;\n            color: var(--fontColor,#333);\n            font-size: 14px;\n        }\n        :host([block]){\n            display:block\n        }\n        :host([invalid]){\n            --themeColor:var(--errorColor,#f4615c);\n            border-color:var(--errorColor,#f4615c);\n        }\n        :host([invalid]) cs-icon{\n            color:var(--errorColor,#f4615c);\n        }\n        :host(:focus-within:not([disabled])),:host(:not([disabled]):hover){\n            border-color:var(--themeColor,#0088FF);\n        }\n        :host([disabled]){ \n            opacity:.8;\n            cursor:not-allowed; \n        }\n        :host([label]) .input::placeholder{\n            color:transparent;\n        }\n        :host .input::placeholder{\n            color:#999;\n        }\n        :host(cs-textarea){\n            line-height:1.5;\n            padding-right:.25em;\n        }\n        .input{\n            padding:0;\n            text-align: inherit;\n            color:currentColor;\n            border:0;\n            outline:0;\n            line-height: inherit;\n            font-size:inherit;\n            font-family:inherit;\n            flex:1;\n            min-width: 0;\n            -webkit-appearance: none;\n            -moz-appearance: textfield;\n            background: none;\n            overflow-x: hidden;\n            transition: color .3s;\n            animation: removeBg 0s forwards;\n        }\n        :host(cs-textarea) .input{\n            margin:0;\n        }\n        input[type=\"number\"]::-webkit-inner-spin-button{\n            display:none;\n        }\n        ::-moz-focus-inner,::-moz-focus-outer{\n            border:0;\n            outline : 0;\n        }\n        :host([showtips]){\n            pointer-events:all;\n        }\n        .input-label{\n            pointer-events:none;\n            margin-left:-0.14em;\n            position:absolute;\n            transition: transform .3s, color .3s, background-color .3s;\n            transform-origin: left;\n            padding:0 0.14em;\n            color:#999;\n        }\n        .input:not(:placeholder-shown) ~ .input-label,\n        .input:focus ~ .input-label{\n            transform: translateY( calc( -50% - 0.43em ) ) scale(0.8);\n            background:#fff;\n        }\n        .input:-moz-ui-invalid{\n            box-shadow:none;\n        }\n        .input::-ms-reveal{\n            display:none;\n        }\n        .icon-pre{\n            display:flex;\n            margin-right:0.25em;\n            color:#999;\n        }\n        :host(cs-textarea) .icon-pre{\n            height:1.5em;\n        }\n        .btn-right{\n            width:2em;\n            height:2em;\n            margin:-.25em -.5em -.25em .25em;\n            padding:0;\n            color:#999;\n            font-size:inherit;\n        }\n        .btn-number{\n            display:flex;\n            flex-direction:column;\n            width:1.5em;\n            visibility:hidden;\n            transition:0s;\n        }\n        .btn-number cs-button{\n            display: flex;\n            color: #999;\n            border-radius:0;\n            width:100%;\n            flex:1;\n            padding:0;\n            font-size:.8em;\n            transition:.2s;\n        }\n\n        .btn-number cs-button:hover{\n            flex:1.5;\n        }\n\n        cs-button:not([disabled]):hover,cs-button:not([disabled]):focus-within{\n            color:var(--themeColor,#0088FF);\n        }\n\n        :host(:focus-within:not([disabled])) .icon-pre,:host(:not([disabled]):hover) .icon-pre,:host(:not([disabled]):hover) .input-label,:host(:focus-within:not([disabled])) .input-label{\n            color:var(--themeColor,#0088FF);\n        }\n\n        :host(:focus-within:not([disabled])) .btn-number,:host(:not([disabled]):hover) .btn-number{\n            visibility:visible;\n        }\n        @keyframes removeBg{\n            to{\n                background:transparent;\n            }\n        }\n        </style>\n        <div id=\"input-con\" dir=\"" + _this.errordir + "\" type=\"error\">\n            " + (_this.icon ? '<cs-icon class="icon-pre" name=' + _this.icon + '></cs-icon>' : '') + "\n            <" + (multi ? 'textarea' : 'input') + " id=\"input\" name=\"" + _this.name + "\" class=\"input\" " + (_this.type === 'number' ? 'min="' + _this.min + '" max="' + _this.max + '" step="' + _this.step + '"' : "") + " value=\"" + _this.defaultvalue + "\" type=\"" + _this.typeMap(_this.type) + "\" placeholder=\"" + _this.placeholder + "\" minlength=\"" + _this.minlength + "\" rows=\"" + _this.rows + "\" maxlength=\"" + _this.maxlength + "\">" + (multi ? '</textarea>' : '') + "\n            <slot></slot>\n            " + (_this.label && !_this.icon ? '<label class="input-label">' + _this.label + '</label>' : '') + "\n            " + (_this.type === 'password' && !multi ? '<cs-button id="btn-pass" class="btn-right" icon="eye-close" type="flat" shape="circle"></cs-button>' : '') + "\n            " + (_this.type === 'search' && !multi ? '<cs-button id="btn-search" class="btn-right" icon="search" type="flat" shape="circle"></cs-button>' : '') + "\n            " + (_this.type === 'number' && !multi ? '<div class="btn-right btn-number"><cs-button id="btn-add" icon="up" type="flat"></cs-button><cs-button id="btn-sub" icon="down" type="flat"></cs-button></div>' : '') + "\n        </div>\n        ";
    _this.input = shadowRoot.getElementById('input');
    return _this;
  }

  var _proto = CsInput.prototype;

  _proto.checkValidity = function checkValidity() {
    if (this.novalidate || this.disabled || this.form && this.form.novalidate) {
      return true;
    }

    if (this.validity) {
      this.inputCon.show = false;
      this.invalid = false;
      return true;
    } else {
      this.input.focus();
      this.inputCon.show = 'show';
      this.invalid = true;

      if (this.input.validity.valueMissing) {
        this.inputCon.tips = this.input.validationMessage;
      } else {
        if (!this.customValidity.method(this)) {
          this.inputCon.tips = this.customValidity.tips;
        } else {
          this.inputCon.tips = this.errortips || this.input.validationMessage;
        }
      }

      return false;
    }
  };

  _proto.connectedCallback = function connectedCallback() {
    var _this2 = this;

    this.form = this.closest('cs-form');
    this.input = this.shadowRoot.getElementById('input');
    this.inputCon = this.shadowRoot.getElementById('input-con');
    this.input.addEventListener('input', function (ev) {
      ev.stopPropagation();

      _this2.checkValidity();

      if (_this2.debounce) {
        _this2.timer && clearTimeout(_this2.timer);
        _this2.timer = setTimeout(function () {
          _this2.dispatchEvent(new CustomEvent('input', {
            detail: {
              value: _this2.value
            }
          }));

          if (_this2.list) {
            _this2.list.filter(_this2.value);

            _this2.list.show = true;
          }
        }, _this2.debounce);
      } else {
        _this2.dispatchEvent(new CustomEvent('input', {
          detail: {
            value: _this2.value
          }
        }));

        if (_this2.list) {
          _this2.list.filter(_this2.value);

          _this2.list.show = true;
        }
      }
    });
    this.input.addEventListener('change', function () {
      _this2.dispatchEvent(new CustomEvent('change', {
        detail: {
          value: _this2.value
        }
      }));
    });
    this.input.addEventListener('focus', function (ev) {
      _this2.checkValidity();

      if (_this2.list) {
        var _this2$getBoundingCli = _this2.getBoundingClientRect(),
            left = _this2$getBoundingCli.left,
            top = _this2$getBoundingCli.top,
            height = _this2$getBoundingCli.height,
            width = _this2$getBoundingCli.width;

        _this2.list.style = "left:" + (left + window.scrollX) + "px;top:" + (top + height + window.scrollY) + "px;min-width:" + width + "px";
        _this2.list.show = true;
      }
    });
    this.input.addEventListener('keydown', function (ev) {
      switch (ev.key) {
        case 'ArrowUp':
        case 'ArrowDown':
          if (_this2.list) {
            ev.preventDefault();
            _this2.list.show = true;
          }

          break;

        case 'Escape':
        case 'Tab':
          if (_this2.list) {
            _this2.list.show = false;
          }

          break;

        case 'Enter':
          if (_this2.list) {
            ev.preventDefault();
            _this2.list.show = true;
          } else {
            _this2.dispatchEvent(new CustomEvent('submit', {
              detail: {
                value: _this2.value
              }
            }));
          }

          break;

        default:
          break;
      }
    });

    if (!this.multi) {
      this.btnPass = this.shadowRoot.getElementById('btn-pass');
      this.btnAdd = this.shadowRoot.getElementById('btn-add');
      this.btnSub = this.shadowRoot.getElementById('btn-sub');
      this.btnSearch = this.shadowRoot.getElementById('btn-search');

      if (this.btnSearch) {
        this.btnSearch.addEventListener('click', function () {
          _this2.dispatchEvent(new CustomEvent('submit', {
            detail: {
              value: _this2.value
            }
          }));
        });
      }

      if (this.btnPass) {
        this.btnPass.addEventListener('click', function () {
          _this2.password = !_this2.password;

          if (_this2.password) {
            _this2.input.setAttribute('type', 'text');

            _this2.btnPass.icon = 'eye';
          } else {
            _this2.input.setAttribute('type', 'password');

            _this2.btnPass.icon = 'eye-close';
          }

          _this2.input.focus();
        });
      }

      if (this.btnAdd) {
        this.btnAdd.addEventListener('click', function () {
          _this2.input.stepUp();

          _this2.dispatchEvent(new CustomEvent('change', {
            detail: {
              value: _this2.value
            }
          }));
        });
      }

      if (this.btnSub) {
        this.btnSub.addEventListener('click', function () {
          _this2.input.stepDown();

          _this2.dispatchEvent(new CustomEvent('change', {
            detail: {
              value: _this2.value
            }
          }));
        });
      }

      this.pattern = this.pattern;
    }

    document.addEventListener('mousedown', this.setlist);

    if (this.list) {
      document.body.appendChild(this.list);
      this.list.addEventListener('submit', function (ev) {
        _this2.focus();

        if (ev.target.value) {
          _this2.value = ev.target.value;
          _this2.list.show = false;
        }
      });
    }

    this.disabled = this.disabled;
    this.required = this.required;
    this.readonly = this.readonly;
  };

  _proto.disconnectedCallback = function disconnectedCallback() {
    document.removeEventListener('mousedown', this.setlist);
  };

  _proto.typeMap = function typeMap(type) {
    switch (type) {
      case 'password':
      case 'number':
      case 'email':
      case 'tel':
      case 'url':
        break;

      default:
        type = 'text';
        break;
    }

    return type;
  };

  _proto.focus = function focus() {
    this.input.focus();
  };

  _proto.reset = function reset() {
    this.input.value = this.defaultvalue;
    this.inputCon.show = false;
    this.invalid = false;
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(name, oldValue, newValue) {
    if (name == 'disabled' && this.input) {
      if (newValue !== null) {
        this.input.parentNode.setAttribute('tabindex', '-1');
      } else {
        this.input.parentNode.removeAttribute('tabindex');
      }
    }

    if (name == 'pattern' && this.input) {
      if (newValue !== null) {
        this.input.setAttribute('pattern', newValue);
      } else {
        this.input.removeAttribute('pattern');
      }
    }

    if (name == 'placeholder' && this.input) {
      if (newValue !== null) {
        this.input.setAttribute('placeholder', newValue);
      } else {
        this.input.removeAttribute('placeholder');
      }
    }

    if (name == 'required' && this.input) {
      if (newValue !== null) {
        this.input.setAttribute('required', 'required');
      } else {
        this.input.removeAttribute('required');
      }
    }

    if (name == 'readonly' && this.input) {
      if (newValue !== null) {
        this.input.setAttribute('readonly', 'readonly');
      } else {
        this.input.removeAttribute('readonly');
      }
    }
  };

  (0, _createClass2["default"])(CsInput, [{
    key: "customValidity",
    get: function get() {
      return this.$customValidity || {
        method: function method() {
          return true;
        }
      };
    },
    set: function set(object) {
      this.$customValidity = object;
    }
  }, {
    key: "value",
    get: function get() {
      return this.input.value;
    },
    set: function set(value) {
      this.input.value = value;
    }
  }, {
    key: "debounce",
    get: function get() {
      return this.getAttribute('debounce');
    }
  }, {
    key: "novalidate",
    get: function get() {
      return this.getAttribute('novalidate') !== null;
    },
    set: function set(value) {
      if (value === null || value === false) {
        this.removeAttribute('novalidate');
      } else {
        this.setAttribute('novalidate', '');
      }
    }
  }, {
    key: "name",
    get: function get() {
      return this.getAttribute('name') || '';
    }
  }, {
    key: "invalid",
    get: function get() {
      return this.getAttribute('invalid') !== null;
    },
    set: function set(value) {
      if (value === null || value === false) {
        this.removeAttribute('invalid');
      } else {
        this.setAttribute('invalid', '');
      }
    }
  }, {
    key: "readonly",
    get: function get() {
      return this.getAttribute('readonly') !== null;
    },
    set: function set(value) {
      if (value === null || value === false) {
        this.removeAttribute('readonly');
      } else {
        this.setAttribute('readonly', '');
      }
    }
  }, {
    key: "validity",
    get: function get() {
      return this.input.checkValidity() && this.customValidity.method(this);
    }
  }, {
    key: "errordir",
    get: function get() {
      return this.getAttribute('errordir') || 'top';
    }
  }, {
    key: "defaultvalue",
    get: function get() {
      return this.getAttribute('defaultvalue') || '';
    }
  }, {
    key: "rows",
    get: function get() {
      return this.getAttribute('rows') || 3;
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
    key: "type",
    get: function get() {
      return this.getAttribute('type');
    }
  }, {
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
    key: "label",
    get: function get() {
      return this.getAttribute('label') || '';
    },
    set: function set(value) {
      this.setAttribute('label', value);
    }
  }, {
    key: "placeholder",
    get: function get() {
      return this.getAttribute('placeholder') || this.label;
    },
    set: function set(value) {
      this.setAttribute('placeholder', value);
    }
  }, {
    key: "min",
    get: function get() {
      return this.getAttribute('min') || 0;
    }
  }, {
    key: "max",
    get: function get() {
      return this.getAttribute('max') || Infinity;
    }
  }, {
    key: "minlength",
    get: function get() {
      return this.getAttribute('minlength') || '';
    }
  }, {
    key: "maxlength",
    get: function get() {
      return this.getAttribute('maxlength') || '';
    }
  }, {
    key: "step",
    get: function get() {
      return this.getAttribute('step') || 1;
    }
  }, {
    key: "required",
    get: function get() {
      return this.getAttribute('required') !== null;
    },
    set: function set(value) {
      if (value === null || value === false) {
        this.removeAttribute('required');
      } else {
        this.setAttribute('required', '');
      }
    }
  }, {
    key: "pattern",
    get: function get() {
      return this.getAttribute('pattern');
    },
    set: function set(value) {
      if (value === null || value === false) {
        this.removeAttribute('pattern');
      } else {
        this.setAttribute('pattern', value);
      }
    }
  }, {
    key: "errortips",
    get: function get() {
      return this.getAttribute('errortips');
    }
  }, {
    key: "list",
    get: function get() {
      var list = this.getAttribute('list');

      if (list) {
        return this.getRootNode().getElementById(list);
      }

      return null;
    }
  }, {
    key: "options",
    get: function get() {
      if (this.list) {
        return this.list.options;
      }

      return [];
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['label', 'disabled', 'pattern', 'required', 'readonly', 'placeholder'];
    }
  }]);
  return CsInput;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(HTMLElement));

exports["default"] = CsInput;

var CsTextarea = /*#__PURE__*/function (_CsInput) {
  (0, _inheritsLoose2["default"])(CsTextarea, _CsInput);

  function CsTextarea() {
    return _CsInput.call(this, {
      multi: true
    }) || this;
  }

  return CsTextarea;
}(CsInput);

if (!customElements.get('cs-input')) {
  customElements.define('cs-input', CsInput);
}

if (!customElements.get('cs-textarea')) {
  customElements.define('cs-textarea', CsTextarea);
}

var CsInputGroup = /*#__PURE__*/function (_HTMLElement2) {
  (0, _inheritsLoose2["default"])(CsInputGroup, _HTMLElement2);

  function CsInputGroup() {
    var _this3;

    _this3 = _HTMLElement2.call(this) || this;

    var shadowRoot = _this3.attachShadow({
      mode: 'open'
    });

    shadowRoot.innerHTML = "\n        <style>\n        :host {\n            display:flex;\n        }\n        ::slotted(:not(:first-child):not(:last-child)){\n            border-radius:0;\n        }\n        ::slotted(*){\n            margin:0!important;\n        }\n        ::slotted(:not(:first-child)){\n            margin-left:-1px!important;\n        }\n        ::slotted(:first-child){\n            border-top-right-radius: 0;\n            border-bottom-right-radius: 0px;\n        }\n        ::slotted(:last-child){\n            border-top-left-radius: 0;\n            border-bottom-left-radius: 0;\n        }\n        </style>\n        <slot></slot>\n        ";
    return _this3;
  }

  return CsInputGroup;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(HTMLElement));

if (!customElements.get('cs-input-group')) {
  customElements.define('cs-input-group', CsInputGroup);
}
//# sourceMappingURL=index.js.map