"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

var CsStep = /*#__PURE__*/function (_HTMLElement) {
  (0, _inheritsLoose2["default"])(CsStep, _HTMLElement);

  function CsStep() {
    var _this;

    _this = _HTMLElement.call(this) || this;

    var shadowRoot = _this.attachShadow({
      mode: 'open'
    });

    shadowRoot.innerHTML = "\n        <style>\n          :host {\n            display: block;\n          }\n          .cs-steps-vertical .cs-step {\n            display: flex;\n            height: 33.34%;\n          }\n\n          .cs-step-head {\n            position: relative;\n          }\n\n          .cs-step-line {\n            position: absolute;\n            top: 11px;\n            left: 50%;\n            right: -50%;\n            display: inline-block;\n            height: 1px;\n            background: #909ca4;\n          }\n\n          .cs-steps-vertical .cs-step-line {\n            position: absolute;\n            display: inline-block;\n            width: 1px;\n            height: 100%;\n            background: #fa2c19;\n          }\n\n          .cs-step.cs-step-finish .cs-step-head {\n            color: #fa2c19;\n            border-color: #fa2c19;\n          }\n\n          .cs-step.cs-step-finish .cs-step-line {\n            background: #fa2c19;\n          }\n\n          .cs-step-icon {\n            position: relative;\n            display: flex;\n            width: 25px;\n            height: 25px;\n            line-height: 25px;\n            font-size: 13px;\n            align-items: center;\n            justify-content: center;\n            z-index: 1;\n          }\n\n          .cs-step-icon.is-text {\n            border-radius: 50%;\n            border-width: 1px;\n            border-style: solid;\n            background: #fff;\n          }\n\n          .cs-step.cs-step-finish .cs-step-icon.is-text {\n            background-color: #fff;\n          }\n\n          .cs-step-main {\n            display: inline-block;\n            padding-left: 10%;\n            text-align: center;\n            margin-bottom: 30px;\n          }\n\n          .cs-steps-vertical .cs-step-main {\n            display: inline-block;\n            padding-left: 6%;\n            text-align: left;\n          }\n\n          .cs-step-title {\n            display: block;\n            margin-bottom: 10px;\n            font-size: 14px;\n            color: #909ca4;\n          }\n\n          .cs-step.cs-step-finish .cs-step-title {\n            color: #fa2c19;\n          }\n\n          .cs-step-content {\n            display: block;\n            font-size: 14px;\n            color: #666;\n          }\n\n          .cs-step.cs-step-process .cs-step-head {\n            color: #fff;\n            border-color: #fa2c19;\n          }\n\n          .cs-step.cs-step-wait .cs-step-head {\n            color: #909ca4;\n            border-color: #909ca4;\n          }\n\n          .cs-step.cs-step-process .cs-step-icon.is-text {\n            background-color: #fa2c19;\n          }\n        </style>\n        <div class=\"cs-steps cs-steps-vertical\">\n          " + (_this.status !== 'doing' && '<div class="cs-step cs-step-process"><div class="cs-step-head"><div class="cs-step-line"></div><div class="cs-step-icon is-text"><div class="cs-step-inner"><slot></slot></div></div></div><div class="cs-step-main"><div class="cs-step-title">title</div><div class="cs-step-content">您的订单正在配送途中</div></div></div>') + "\n        </div>\n        ";
    return _this;
  }

  var _proto = CsStep.prototype;

  _proto.connectedCallback = function connectedCallback() {// this.btn = this.shadowRoot.getElementById('btn');
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(name, oldValue, newValue) {};

  (0, _createClass2["default"])(CsStep, [{
    key: "status",
    get: function get() {
      return this.getAttribute('status');
    },
    set: function set(value) {
      console.log(value);
      this.setAttribute('status', value);
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
    key: "content",
    get: function get() {
      return this.getAttribute('content');
    },
    set: function set(value) {
      this.setAttribute('content', value);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['status', 'title', 'content'];
    }
  }]);
  return CsStep;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(HTMLElement));

exports["default"] = CsStep;

if (!customElements.get('cs-step')) {
  customElements.define('cs-step', CsStep);
}

var CsSteps = /*#__PURE__*/function (_HTMLElement2) {
  (0, _inheritsLoose2["default"])(CsSteps, _HTMLElement2);

  function CsSteps() {
    var _this2;

    _this2 = _HTMLElement2.call(this) || this;

    var shadowRoot = _this2.attachShadow({
      mode: 'open'
    });

    shadowRoot.innerHTML = "\n      <style>\n        ::slotted(cs-step .cs-step-line) {\n          // display: none;\n          color: red;\n          border: 1px solid red;\n        }\n      </style>\n      <div class=\"cs-steps " + (_this2.direction === 'vertical' ? 'cs-steps-vertical' : 'cs-steps-horizontal') + "\">\n        " + _this2.direction + "\n        <slot></slot>\n      </div>\n    ";
    return _this2;
  }

  var _proto2 = CsSteps.prototype;

  _proto2.connectedCallback = function connectedCallback() {
    console.log(this.direction, 88);
  };

  (0, _createClass2["default"])(CsSteps, [{
    key: "direction",
    get: function get() {
      console.log(2);
      return this.getAttribute('direction');
    },
    set: function set(value) {
      console.log(1);
      this.setAttribute('direction', value);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['direction'];
    }
  }]);
  return CsSteps;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(HTMLElement));

if (!customElements.get('cs-steps')) {
  customElements.define('cs-steps', CsSteps);
}
//# sourceMappingURL=index.js.map