"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = _default;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

require("../button/index.js");

var CsDialog = /*#__PURE__*/function (_HTMLElement) {
  (0, _inheritsLoose2["default"])(CsDialog, _HTMLElement);

  function CsDialog() {
    var _this;

    _this = _HTMLElement.call(this) || this;

    var shadowRoot = _this.attachShadow({
      mode: 'open'
    });

    shadowRoot.innerHTML = "\n        <style>\n        :host{\n            position:fixed;\n            display:flex;\n            left:0;\n            top:0;\n            right:0;\n            bottom:0;\n            z-index:-1;\n            background:rgba(0,0,0,.3);\n            visibility:hidden;\n            opacity:0;\n            transition:.3s;\n        }\n        :host([open]){\n            opacity:1;\n            z-index:50;\n            visibility:visible;\n        }\n        .dialog {\n            display:flex;\n            position:relative;\n            margin:auto;\n            box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n            box-sizing: border-box;\n            max-width: calc(100vw - 20px);\n            max-height: calc(100vh - 20px);\n            border-radius: 8px;\n            background-color: #fff;\n            opacity:0;\n            transform:scale(0.5);\n            transition:.3s cubic-bezier(.645, .045, .355, 1);\n        }\n        .dialog-content{\n            box-sizing: border-box;\n            display:flex;\n            width: 100%;\n            padding:0 20px;\n            flex:1;\n            flex-direction:column;\n        }\n        :host([open]) .dialog{\n            opacity:1;\n            transform:scale(1);\n        }\n        .dialog-title {\n            line-height: 30px;\n            padding-top: 24px;\n            font-weight: 700;\n            font-size: 18px;\n            color: #4c5161;\n            text-align: center;\n        }\n        .dialog-body {\n            flex: 1;\n            overflow: auto;\n            padding: 10px 0 20px;\n            font-size: 14px;\n            color: #5A6066;\n        }\n        .dialog-footer {\n            padding-bottom: 24px;\n        }\n        .btn-close{\n            position: absolute;\n            right: 0px;\n            top: 0px;\n            border: 0;\n            color: #BCC4CC;\n            font-size: 20px;\n            padding: 0;\n        }\n        .dialog-footer cs-button {\n            min-width: 140px;\n            // width: 100%;\n        }\n        #btn-cancel{\n            // visibility:hidden;\n            // display: none;\n        }\n        :host(:empty) .dialog-body{\n            min-height:0;\n        }\n        </style>\n        <div class=\"dialog\">\n            <div class=\"dialog-content\">\n                <div class=\"dialog-title\" id=\"title\"></div>\n                <cs-button class=\"btn-close\" id=\"btn-close\" icon=\"close\"></cs-button>\n                <div class=\"dialog-body\">\n                    <slot></slot>\n                </div>\n                <div class=\"dialog-footer\" id=\"dialog-footer\">\n                    <cs-button id=\"btn-cancel\"></cs-button>\n                    <cs-button id=\"btn-submit\" type=\"primary\"></cs-button>\n                </div>\n            </div>\n        </div>\n        ";
    return _this;
  }

  var _proto = CsDialog.prototype;

  // custom element 增加、删除或者修改某个属性时被调用
  _proto.attributeChangedCallback = function attributeChangedCallback(name, oldValue, newValue) {
    console.log(name, 22);

    if (name == 'open' && this.shadowRoot) {
      if (newValue !== null) {
        this.btnActive = document.activeElement;
      }
    }

    if (name == 'title') {
      if (newValue !== null) {
        this.shadowRoot.getElementById('title').innerText = newValue;
      }
    }

    if (name == 'oktext') {
      if (newValue !== null) {
        this.shadowRoot.getElementById('btn-submit').innerText = newValue; // this.btnSubmit.textContent = newValue;
      }
    }

    if (name == 'canceltext') {
      if (newValue !== null) {
        this.shadowRoot.getElementById('btn-cancel').innerText = newValue; // this.btnCancel.textContent = newValue;
      }
    }
  };

  _proto.connectedCallback = function connectedCallback() {
    var _this2 = this;

    this.remove = false;
    this.autoclose = true;
    this.btnClose = this.shadowRoot.getElementById('btn-close');
    this.btnCancel = this.shadowRoot.getElementById('btn-cancel');
    this.btnSubmit = this.shadowRoot.getElementById('btn-submit');
    console.log(this.oktext, this.calcelText, 22222); // 无取消按钮
    // if(!this.calcelText) {
    //     this.btnCancel.remove();
    //     this.shadowRoot.getElementById('dialog-footer').style.display = 'grid';
    // }
    // // 无按钮
    // if(!this.oktext) {
    //     this.btnSubmit.remove();
    //     this.shadowRoot.getElementById('dialog-footer').style.display = 'none';
    // }

    this.clientWidth;
    this.shadowRoot.addEventListener('transitionend', function (ev) {
      if (ev.propertyName === 'transform' && _this2.open) {
        _this2.btnSubmit.focus();
      }

      if (ev.propertyName === 'transform' && !_this2.open) {
        if (_this2.remove) {
          document.body.removeChild(_this2);
        } // 创建自定义对象 onclose
        // this.dispatchEvent(new CustomEvent('close'));


        _this2.btnActive && _this2.btnActive.focus();
      }
    });
    this.addEventListener('wheel', function (ev) {
      ev.preventDefault();
    });
    this.btnClose.addEventListener('click', function () {
      _this2.open = false;
    }); // 自定义取消事件 dialog.oncancel

    this.btnCancel.addEventListener('click', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this2.dispatchEvent(new CustomEvent('cancel'));

              _this2.open = false;

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))); // 自定义确认事件 dialog.onsubmit

    this.btnSubmit.addEventListener('click', function () {
      _this2.dispatchEvent(new CustomEvent('submit'));

      if (!_this2.loading && _this2.autoclose) {
        _this2.open = false;
      }
    });
  };

  (0, _createClass2["default"])(CsDialog, [{
    key: "open",
    get: function get() {
      return this.getAttribute('open') !== null;
    },
    set: function set(value) {
      if (value === null || value === false) {
        this.removeAttribute('open');
      } else {
        this.setAttribute('open', '');
        this.loading && (this.loading = false);
      }
    }
  }, {
    key: "title",
    get: function get() {
      return this.getAttribute('title');
    },
    set: function set(value) {
      this.setAttribute('title', value);
    }
  }, {
    key: "type",
    get: function get() {
      return this.getAttribute('type');
    },
    set: function set(value) {
      this.setAttribute('type', value);
    }
  }, {
    key: "oktext",
    get: function get() {
      return this.getAttribute('oktext');
    },
    set: function set(value) {
      this.setAttribute('oktext', value);
    }
  }, {
    key: "canceltext",
    get: function get() {
      console.log(this.getAttribute('canceltext'), 8877);
      return this.getAttribute('canceltext');
    },
    set: function set(value) {
      console.log(value, 88);
      this.setAttribute('canceltext', value);
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
      return ['open', 'title', 'content', 'oktext', 'canceltext', 'loading'];
    }
  }]);
  return CsDialog;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(HTMLElement)); // 标签调用


if (!customElements.get('cs-dialog')) {
  customElements.define('cs-dialog', CsDialog);
} // 函数调用


function _default() {
  var dialog = new CsDialog();
  document.body.appendChild(dialog);
  dialog.remove = true;

  if (typeof arguments[0] === 'object') {
    var _Array$prototype$slic = Array.prototype.slice.call(arguments)[0],
        _Array$prototype$slic2 = _Array$prototype$slic.title,
        title = _Array$prototype$slic2 === void 0 ? '' : _Array$prototype$slic2,
        _Array$prototype$slic3 = _Array$prototype$slic.content,
        content = _Array$prototype$slic3 === void 0 ? '' : _Array$prototype$slic3,
        _Array$prototype$slic4 = _Array$prototype$slic.oktext,
        oktext = _Array$prototype$slic4 === void 0 ? '确定' : _Array$prototype$slic4,
        _Array$prototype$slic5 = _Array$prototype$slic.canceltext,
        canceltext = _Array$prototype$slic5 === void 0 ? '取消' : _Array$prototype$slic5,
        onOk = _Array$prototype$slic.onOk,
        onCancel = _Array$prototype$slic.onCancel;
    dialog.title = title;
    dialog.innerHTML = content || '';
    dialog.oktext = oktext;
    dialog.canceltext = canceltext;
    dialog.onsubmit = onOk;
    dialog.oncancel = onCancel;
  }

  dialog.open = true;
  return dialog;
}
//# sourceMappingURL=index.js.map