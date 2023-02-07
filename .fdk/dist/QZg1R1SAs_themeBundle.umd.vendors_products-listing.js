((typeof self !== 'undefined' ? self : this)["webpackJsonpthemeBundle"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpthemeBundle"] || []).push([[9],{

/***/ "13d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $reduce = __webpack_require__("d58f").left;
var arrayMethodIsStrict = __webpack_require__("a640");
var CHROME_VERSION = __webpack_require__("2d00");
var IS_NODE = __webpack_require__("605d");

var STRICT_METHOD = arrayMethodIsStrict('reduce');
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "5f5a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "605d":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var global = __webpack_require__("da84");

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ "8809":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"24914475-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-slider-component/src/vue2-slider.vue?vue&type=template&id=1beb6874&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.show,
      expression: "show"
    }],
    ref: "wrap",
    class: ['vue-slider-component', _vm.flowDirection, _vm.disabledClass, _vm.stateClass, {
      'vue-slider-has-label': _vm.piecewiseLabel
    }],
    style: [_vm.wrapStyles, _vm.boolDisabled ? _vm.disabledStyle : null],
    on: {
      "click": _vm.wrapClick
    }
  }, [_c('div', {
    ref: "elem",
    staticClass: "vue-slider",
    style: [_vm.elemStyles, _vm.bgStyle],
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm.isRange ? [_c('div', {
    key: "dot0",
    ref: "dot0",
    class: [_vm.tooltipStatus, 'vue-slider-dot', {
      'vue-slider-dot-focus': _vm.focusFlag && _vm.focusSlider === 0,
      'vue-slider-dot-dragging': _vm.flag && _vm.currentSlider === 0,
      'vue-slider-dot-disabled': !_vm.boolDisabled && _vm.disabledArray[0]
    }],
    style: _vm.dotStyles,
    on: {
      "mousedown": function ($event) {
        return _vm.moveStart($event, 0);
      },
      "touchstart": function ($event) {
        return _vm.moveStart($event, 0);
      }
    }
  }, [_vm._t("dot", function () {
    return [_c('div', {
      staticClass: "vue-slider-dot-handle",
      style: [!_vm.boolDisabled && _vm.disabledArray[0] ? _vm.disabledDotStyles[0] : null, _vm.sliderStyles[0], _vm.focusFlag && _vm.focusSlider === 0 ? _vm.focusStyles[0] : null]
    })];
  }, {
    "value": _vm.val[0],
    "index": 0,
    "disabled": _vm.disabledArray[0]
  }), _c('div', {
    ref: "tooltip0",
    class: ['vue-slider-tooltip-' + _vm.tooltipDirection[0], 'vue-slider-tooltip-wrap']
  }, [_vm._t("tooltip", function () {
    return [_c('span', {
      staticClass: "vue-slider-tooltip",
      class: _vm.tooltipClass,
      style: _vm.tooltipStyles[0]
    }, [_vm._v(_vm._s(_vm.formatter ? _vm.formatting(_vm.val[0]) : _vm.val[0]))])];
  }, {
    "value": _vm.val[0],
    "index": 0,
    "disabled": !_vm.boolDisabled && _vm.disabledArray[0]
  })], 2)], 2), _c('div', {
    key: "dot1",
    ref: "dot1",
    class: [_vm.tooltipStatus, 'vue-slider-dot', {
      'vue-slider-dot-focus': _vm.focusFlag && _vm.focusSlider === 1,
      'vue-slider-dot-dragging': _vm.flag && _vm.currentSlider === 1,
      'vue-slider-dot-disabled': !_vm.boolDisabled && _vm.disabledArray[1]
    }],
    style: _vm.dotStyles,
    on: {
      "mousedown": function ($event) {
        return _vm.moveStart($event, 1);
      },
      "touchstart": function ($event) {
        return _vm.moveStart($event, 1);
      }
    }
  }, [_vm._t("dot", function () {
    return [_c('div', {
      staticClass: "vue-slider-dot-handle",
      style: [!_vm.boolDisabled && _vm.disabledArray[1] ? _vm.disabledDotStyles[1] : null, _vm.sliderStyles[1], _vm.focusFlag && _vm.focusSlider === 1 ? _vm.focusStyles[1] : null]
    })];
  }, {
    "value": _vm.val[1],
    "index": 1,
    "disabled": _vm.disabledArray[1]
  }), _c('div', {
    ref: "tooltip1",
    class: ['vue-slider-tooltip-' + _vm.tooltipDirection[1], 'vue-slider-tooltip-wrap']
  }, [_vm._t("tooltip", function () {
    return [_c('span', {
      staticClass: "vue-slider-tooltip",
      class: _vm.tooltipClass,
      style: _vm.tooltipStyles[1]
    }, [_vm._v(_vm._s(_vm.formatter ? _vm.formatting(_vm.val[1]) : _vm.val[1]))])];
  }, {
    "value": _vm.val[1],
    "index": 1,
    "disabled": !_vm.boolDisabled && _vm.disabledArray[1]
  })], 2)], 2)] : [_vm.staticValue !== void 0 ? _c('div', {
    key: "static-dot",
    ref: "static-dot",
    staticClass: "vue-slider-dot static-dot",
    class: ['vue-slider-dot', 'vue-slider-dot--static', {
      'vue-slider-dot-active': _vm.isActive(_vm.getIndexByValue(_vm.staticValue))
    }],
    style: [_vm.staticPosition, _vm.dotStyles],
    on: {
      "click": function ($event) {
        $event.stopPropagation();
        return (() => _vm.clickable && _vm.setValue(_vm.staticValue)).apply(null, arguments);
      }
    }
  }, [_vm._t("static-dot", function () {
    return [_c('div', {
      staticClass: "vue-slider-dot-handle--static"
    })];
  }, {
    "value": _vm.staticValue
  }), _vm.val !== _vm.staticValue ? _c('div', {
    class: ['vue-slider-tooltip-' + _vm.tooltipDirection, 'vue-slider-tooltip-wrap']
  }, [_vm._t("static-tooltip", function () {
    return [_c('span', {
      staticClass: "vue-slider-tooltip",
      class: _vm.tooltipClass
    }, [_vm.staticLabel ? [_vm._v(" " + _vm._s(_vm.staticLabel) + " ")] : [_vm._v(" " + _vm._s(_vm.formatter ? _vm.formatting(_vm.staticValue) : _vm.staticValue) + " ")]], 2)];
  }, {
    "value": _vm.staticValue
  })], 2) : _vm._e()], 2) : _vm._e(), _c('div', {
    key: "dot",
    ref: "dot",
    class: [_vm.tooltipStatus, 'vue-slider-dot', {
      'vue-slider-dot-focus': _vm.focusFlag && _vm.focusSlider === 0,
      'vue-slider-dot-dragging': _vm.flag && _vm.currentSlider === 0
    }],
    style: _vm.dotStyles,
    on: {
      "mousedown": _vm.moveStart,
      "touchstart": _vm.moveStart
    }
  }, [_vm._t("dot", function () {
    return [_c('div', {
      staticClass: "vue-slider-dot-handle",
      style: [_vm.sliderStyles, _vm.focusFlag && _vm.focusSlider === 0 ? _vm.focusStyles : null]
    })];
  }, {
    "value": _vm.val,
    "disabled": _vm.boolDisabled
  }), _c('div', {
    class: ['vue-slider-tooltip-' + _vm.tooltipDirection, 'vue-slider-tooltip-wrap']
  }, [_vm._t("tooltip", function () {
    return [_c('span', {
      staticClass: "vue-slider-tooltip",
      class: _vm.tooltipClass,
      style: _vm.tooltipStyles
    }, [_vm._v(_vm._s(_vm.formatter ? _vm.formatting(_vm.val) : _vm.val))])];
  }, {
    "value": _vm.val
  })], 2)], 2)], _c('ul', {
    staticClass: "vue-slider-piecewise"
  }, _vm._l(_vm.piecewiseDotWrap, function (piecewiseObj, index) {
    return _c('li', {
      key: index,
      staticClass: "vue-slider-piecewise-item",
      style: [_vm.piecewiseDotStyle, piecewiseObj.style]
    }, [_vm._t("piecewise", function () {
      return [_vm.piecewise ? _c('span', {
        class: ['vue-slider-piecewise-dot', {
          'vue-slider-piecewise-dot-active': _vm.isActive(piecewiseObj.index)
        }],
        style: [_vm.piecewiseStyle, _vm.isActive(piecewiseObj.index) ? _vm.piecewiseActiveStyle : null]
      }) : _vm._e()];
    }, {
      "value": _vm.val,
      "label": piecewiseObj.label,
      "index": index,
      "first": index === 0,
      "last": index === _vm.piecewiseDotWrap.length - 1,
      "active": _vm.isActive(piecewiseObj.index),
      "total": _vm.piecewiseDotWrap.length
    }), _vm._t("label", function () {
      return [_vm.piecewiseLabel ? _c('span', {
        staticClass: "vue-slider-piecewise-label",
        style: [_vm.labelStyle, _vm.isActive(piecewiseObj.index) ? _vm.labelActiveStyle : null]
      }, [_vm._v(" " + _vm._s(piecewiseObj.label) + " ")]) : _vm._e()];
    }, {
      "value": _vm.val,
      "label": piecewiseObj.label,
      "index": index,
      "first": index === 0,
      "last": index === _vm.piecewiseDotWrap.length - 1,
      "active": _vm.isActive(piecewiseObj.index),
      "total": _vm.piecewiseDotWrap.length
    })], 2);
  }), 0), _c('div', {
    ref: "process",
    class: ['vue-slider-process', {
      'vue-slider-process-dragable': _vm.isRange && _vm.processDragable
    }, _vm.processClass],
    style: _vm.processStyle,
    on: {
      "click": _vm.processClick,
      "mousedown": function ($event) {
        return _vm.moveStart($event, 0, true);
      },
      "touchstart": function ($event) {
        return _vm.moveStart($event, 0, true);
      }
    }
  }, [_c('div', {
    ref: "mergedTooltip",
    class: ['vue-merged-tooltip', 'vue-slider-tooltip-' + _vm.tooltipDirection[0], 'vue-slider-tooltip-wrap'],
    style: _vm.tooltipMergedPosition
  }, [_vm._t("tooltip", function () {
    return [_c('span', {
      staticClass: "vue-slider-tooltip",
      class: _vm.tooltipClass,
      style: _vm.tooltipStyles
    }, [_vm._v(" " + _vm._s(_vm.mergeFormatter ? _vm.mergeFormatting(_vm.val[0], _vm.val[1]) : _vm.formatter ? _vm.val[0] === _vm.val[1] ? _vm.formatting(_vm.val[0]) : `${_vm.formatting(_vm.val[0])} - ${_vm.formatting(_vm.val[1])}` : _vm.val[0] === _vm.val[1] ? _vm.val[0] : `${_vm.val[0]} - ${_vm.val[1]}`) + " ")])];
  }, {
    "value": _vm.val,
    "merge": true
  })], 2)]), !_vm.isRange && !_vm.data ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.val,
      expression: "val"
    }],
    staticClass: "vue-slider-sr-only",
    attrs: {
      "type": "range",
      "min": _vm.min,
      "max": _vm.max
    },
    domProps: {
      "value": _vm.val
    },
    on: {
      "__r": function ($event) {
        _vm.val = $event.target.value;
      }
    }
  }) : _vm._e()], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/vue-slider-component/src/vue2-slider.vue?vue&type=template&id=1beb6874&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-slider-component/src/vue2-slider.vue?vue&type=script&lang=js&

// Unsharp text [#166](https://github.com/NightCatSama/vue-slider-component/issues/166)
const roundToDPR = function () {
  const r = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
  return value => Math.round(value * r) / r;
}();
/* harmony default export */ var vue2_slidervue_type_script_lang_js_ = ({
  name: 'VueSliderComponent',
  props: {
    width: {
      type: [Number, String],
      default: 'auto'
    },
    height: {
      type: [Number, String],
      default: 6
    },
    data: {
      type: Array,
      default: null
    },
    dotSize: {
      type: Number,
      default: 16
    },
    dotWidth: {
      type: Number,
      required: false
    },
    dotHeight: {
      type: Number,
      required: false
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    interval: {
      type: Number,
      default: 1
    },
    show: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: [Boolean, Array],
      default: false
    },
    piecewise: {
      type: Boolean,
      default: false
    },
    tooltip: {
      type: [String, Boolean],
      default: 'always'
    },
    eventType: {
      type: String,
      default: 'auto'
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    staticValue: {
      type: [String, Number]
    },
    staticLabel: {
      type: String
    },
    reverse: {
      type: Boolean,
      default: false
    },
    lazy: {
      type: Boolean,
      default: false
    },
    clickable: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 0.5
    },
    realTime: {
      type: Boolean,
      default: false
    },
    stopPropagation: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Array, Object],
      default: 0
    },
    piecewiseLabel: {
      type: Boolean,
      default: false
    },
    debug: {
      type: Boolean,
      default: true
    },
    fixed: {
      type: Boolean,
      default: false
    },
    minRange: {
      type: Number
    },
    maxRange: {
      type: Number
    },
    processDragable: {
      type: Boolean,
      default: false
    },
    useKeyboard: {
      type: Boolean,
      default: false
    },
    actionsKeyboard: {
      type: Array,
      default() {
        return [i => i - 1, i => i + 1];
      }
    },
    piecewiseFilter: {
      type: Function
    },
    tooltipMerge: {
      type: Boolean,
      default: true
    },
    startAnimation: {
      type: Boolean,
      default: false
    },
    enableCross: {
      type: Boolean,
      default: true
    },
    sliderStyle: [Array, Object, Function],
    focusStyle: [Array, Object, Function],
    tooltipDir: [Array, String],
    formatter: [String, Function],
    mergeFormatter: [String, Function],
    piecewiseStyle: Object,
    disabledStyle: Object,
    piecewiseActiveStyle: Object,
    processStyle: Object,
    processClass: String,
    bgStyle: Object,
    tooltipStyle: [Array, Object, Function],
    tooltipClass: String,
    disabledDotStyle: [Array, Object, Function],
    labelStyle: Object,
    labelActiveStyle: Object
  },
  data() {
    return {
      flag: false,
      dragFlag: false,
      crossFlag: false,
      keydownFlag: null,
      focusFlag: false,
      processFlag: false,
      processSign: null,
      size: 0,
      fixedValue: 0,
      focusSlider: 0,
      currentValue: 0,
      currentSlider: 0,
      isComponentExists: true,
      isMounted: false
    };
  },
  computed: {
    staticPosition() {
      const position = (this.staticValue - this.minimum) / this.spacing * this.gap;
      const value = roundToDPR((this.direction === 'vertical' ? this.dotHeightVal / 2 - position : position - this.dotWidthVal / 2) * (this.reverse ? -1 : 1));
      const translateValue = this.direction === 'vertical' ? `translateY(${value}px)` : `translateX(${value}px)`;
      return {
        transform: translateValue,
        WebkitTransform: translateValue,
        msTransform: translateValue
      };
    },
    dotWidthVal() {
      return typeof this.dotWidth === 'number' ? this.dotWidth : this.dotSize;
    },
    dotHeightVal() {
      return typeof this.dotHeight === 'number' ? this.dotHeight : this.dotSize;
    },
    flowDirection() {
      return `vue-slider-${this.direction + (this.reverse ? '-reverse' : '')}`;
    },
    tooltipMergedPosition() {
      if (!this.isMounted) return {};
      const tooltipDirection = this.tooltipDirection[0];
      const dot0 = this.$refs.dot0;
      if (dot0) {
        if (this.direction === 'vertical') {
          const style = {};
          style[tooltipDirection] = `-${this.dotHeightVal / 2 - this.width / 2 + 9}px`;
          return style;
        } else {
          const style = {};
          style[tooltipDirection] = `-${this.dotWidthVal / 2 - this.height / 2 + 9}px`;
          style['left'] = `50%`;
          return style;
        }
      }
    },
    tooltipDirection() {
      const dir = this.tooltipDir || (this.direction === 'vertical' ? 'left' : 'top');
      if (Array.isArray(dir)) {
        return this.isRange ? dir : dir[1];
      } else {
        return this.isRange ? [dir, dir] : dir;
      }
    },
    tooltipStatus() {
      return this.tooltip === 'hover' && this.flag ? 'vue-slider-always' : this.tooltip ? `vue-slider-${this.tooltip}` : '';
    },
    disabledArray() {
      return Array.isArray(this.disabled) ? this.disabled : [this.disabled, this.disabled];
    },
    boolDisabled() {
      return this.disabledArray.every(b => b === true);
    },
    isDisabled() {
      return this.eventType === 'none' ? true : this.boolDisabled;
    },
    disabledClass() {
      return this.boolDisabled ? 'vue-slider-disabled' : '';
    },
    stateClass() {
      return {
        'vue-slider-state-process-drag': this.processFlag,
        'vue-slider-state-drag': this.flag && !this.processFlag && !this.keydownFlag,
        'vue-slider-state-focus': this.focusFlag
      };
    },
    isRange() {
      return Array.isArray(this.value);
    },
    slider() {
      return this.isRange ? [this.$refs.dot0, this.$refs.dot1] : this.$refs.dot;
    },
    minimum() {
      return this.data ? 0 : this.min;
    },
    val: {
      get() {
        return this.data ? this.isRange ? [this.data[this.currentValue[0]], this.data[this.currentValue[1]]] : this.data[this.currentValue] : this.currentValue;
      },
      set(val) {
        if (this.data) {
          if (this.isRange) {
            const index0 = this.data.indexOf(val[0]);
            const index1 = this.data.indexOf(val[1]);
            if (index0 > -1 && index1 > -1) {
              this.currentValue = [index0, index1];
            }
          } else {
            const index = this.data.indexOf(val);
            if (index > -1) {
              this.currentValue = index;
            }
          }
        } else {
          this.currentValue = val;
        }
      }
    },
    currentIndex() {
      if (this.isRange) {
        return this.data ? this.currentValue : [this.getIndexByValue(this.currentValue[0]), this.getIndexByValue(this.currentValue[1])];
      } else {
        return this.data ? this.currentValue : this.getIndexByValue(this.currentValue);
      }
    },
    indexRange() {
      if (this.isRange) {
        return this.currentIndex;
      } else {
        return [0, this.currentIndex];
      }
    },
    maximum() {
      return this.data ? this.data.length - 1 : this.max;
    },
    multiple() {
      const decimals = `${this.interval}`.split('.')[1];
      return decimals ? Math.pow(10, decimals.length) : 1;
    },
    spacing() {
      return this.data ? 1 : this.interval;
    },
    total() {
      if (this.data) {
        return this.data.length - 1;
      } else if (Math.floor((this.maximum - this.minimum) * this.multiple) % (this.interval * this.multiple) !== 0) {
        this.printError('Prop[interval] is illegal, Please make sure that the interval can be divisible');
      }
      return (this.maximum - this.minimum) / this.interval;
    },
    gap() {
      return this.size / this.total;
    },
    position() {
      return this.isRange ? [(this.currentValue[0] - this.minimum) / this.spacing * this.gap, (this.currentValue[1] - this.minimum) / this.spacing * this.gap] : (this.currentValue - this.minimum) / this.spacing * this.gap;
    },
    isFixed() {
      return this.fixed || this.minRange;
    },
    limit() {
      return this.isRange ? this.isFixed ? [[0, (this.total - this.fixedValue) * this.gap], [this.fixedValue * this.gap, this.size]] : [[0, this.position[1]], [this.position[0], this.size]] : [0, this.size];
    },
    valueLimit() {
      return this.isRange ? this.isFixed ? [[this.minimum, this.maximum - this.fixedValue * (this.spacing * this.multiple) / this.multiple], [this.minimum + this.fixedValue * (this.spacing * this.multiple) / this.multiple, this.maximum]] : [[this.minimum, this.currentValue[1]], [this.currentValue[0], this.maximum]] : [this.minimum, this.maximum];
    },
    idleSlider() {
      return this.currentSlider === 0 ? 1 : 0;
    },
    wrapStyles() {
      return this.direction === 'vertical' ? {
        height: typeof this.height === 'number' ? `${this.height}px` : this.height,
        padding: `${this.dotHeightVal / 2}px ${this.dotWidthVal / 2}px`
      } : {
        width: typeof this.width === 'number' ? `${this.width}px` : this.width,
        padding: `${this.dotHeightVal / 2}px ${this.dotWidthVal / 2}px`
      };
    },
    sliderStyles() {
      if (Array.isArray(this.sliderStyle)) {
        return this.isRange ? this.sliderStyle : this.sliderStyle[1];
      } else if (typeof this.sliderStyle === 'function') {
        return this.sliderStyle(this.val, this.currentIndex);
      } else {
        return this.isRange ? [this.sliderStyle, this.sliderStyle] : this.sliderStyle;
      }
    },
    focusStyles() {
      if (Array.isArray(this.focusStyle)) {
        return this.isRange ? this.focusStyle : this.focusStyle[1];
      } else if (typeof this.focusStyle === 'function') {
        return this.focusStyle(this.val, this.currentIndex);
      } else {
        return this.isRange ? [this.focusStyle, this.focusStyle] : this.focusStyle;
      }
    },
    disabledDotStyles() {
      const disabledStyle = this.disabledDotStyle;
      if (Array.isArray(disabledStyle)) {
        return disabledStyle;
      } else if (typeof disabledStyle === 'function') {
        const style = disabledStyle(this.val, this.currentIndex);
        return Array.isArray(style) ? style : [style, style];
      } else if (disabledStyle) {
        return [disabledStyle, disabledStyle];
      } else {
        return [{
          backgroundColor: '#ccc'
        }, {
          backgroundColor: '#ccc'
        }];
      }
    },
    tooltipStyles() {
      if (Array.isArray(this.tooltipStyle)) {
        return this.isRange ? this.tooltipStyle : this.tooltipStyle[1];
      } else if (typeof this.tooltipStyle === 'function') {
        return this.tooltipStyle(this.val, this.currentIndex);
      } else {
        return this.isRange ? [this.tooltipStyle, this.tooltipStyle] : this.tooltipStyle;
      }
    },
    elemStyles() {
      return this.direction === 'vertical' ? {
        width: `${this.width}px`,
        height: '100%'
      } : {
        height: `${this.height}px`
      };
    },
    dotStyles() {
      return this.direction === 'vertical' ? {
        width: `${this.dotWidthVal}px`,
        height: `${this.dotHeightVal}px`,
        left: `${-(this.dotWidthVal - this.width) / 2}px`
      } : {
        width: `${this.dotWidthVal}px`,
        height: `${this.dotHeightVal}px`,
        top: `${-(this.dotHeightVal - this.height) / 2}px`
      };
    },
    piecewiseDotStyle() {
      return this.direction === 'vertical' ? {
        width: `${this.width}px`,
        height: `${this.width}px`
      } : {
        width: `${this.height}px`,
        height: `${this.height}px`
      };
    },
    piecewiseDotWrap() {
      if (!this.piecewise && !this.piecewiseLabel) {
        return false;
      }
      let arr = [];
      for (let i = 0; i <= this.total; i++) {
        const style = this.direction === 'vertical' ? {
          bottom: `${this.gap * i - this.width / 2}px`,
          left: 0
        } : {
          left: `${this.gap * i - this.height / 2}px`,
          top: 0
        };
        const index = this.reverse ? this.total - i : i;
        const label = this.data ? this.data[index] : this.spacing * index + this.min;
        if (this.piecewiseFilter && !this.piecewiseFilter({
          index,
          label
        })) {
          continue;
        }
        arr.push({
          style,
          index,
          label: this.formatter ? this.formatting(label) : label
        });
      }
      return arr;
    }
  },
  watch: {
    value(val) {
      this.flag || this.setValue(val, true);
    },
    max(val) {
      if (val < this.min) {
        return this.printError('The maximum value can not be less than the minimum value.');
      }
      const resetVal = this.limitValue(this.val);
      this.setValue(resetVal);
      this.refresh();
    },
    min(val) {
      if (val > this.max) {
        return this.printError('The minimum value can not be greater than the maximum value.');
      }
      const resetVal = this.limitValue(this.val);
      this.setValue(resetVal);
      this.refresh();
    },
    show(bool) {
      if (bool && !this.size) {
        this.$nextTick(() => {
          this.refresh();
        });
      }
    },
    fixed() {
      this.computedFixedValue();
    },
    minRange() {
      this.computedFixedValue();
    },
    reverse() {
      this.$refs.process.style.cssText = '';
      this.refresh();
    }
  },
  methods: {
    bindEvents() {
      document.addEventListener('touchmove', this.moving, {
        passive: false
      });
      document.addEventListener('touchend', this.moveEnd, {
        passive: false
      });
      document.addEventListener('mousedown', this.blurSlider);
      document.addEventListener('mousemove', this.moving);
      document.addEventListener('mouseup', this.moveEnd);
      document.addEventListener('mouseleave', this.moveEnd);
      document.addEventListener('keydown', this.handleKeydown);
      document.addEventListener('keyup', this.handleKeyup);
      window.addEventListener('resize', this.refresh);
      if (this.isRange && this.tooltipMerge) {
        this.$refs.dot0.addEventListener('transitionend', this.handleOverlapTooltip);
        this.$refs.dot1.addEventListener('transitionend', this.handleOverlapTooltip);
      }
    },
    unbindEvents() {
      document.removeEventListener('touchmove', this.moving);
      document.removeEventListener('touchend', this.moveEnd);
      document.removeEventListener('mousedown', this.blurSlider);
      document.removeEventListener('mousemove', this.moving);
      document.removeEventListener('mouseup', this.moveEnd);
      document.removeEventListener('mouseleave', this.moveEnd);
      document.removeEventListener('keydown', this.handleKeydown);
      document.removeEventListener('keyup', this.handleKeyup);
      window.removeEventListener('resize', this.refresh);
      if (this.isRange && this.tooltipMerge) {
        this.$refs.dot0.removeEventListener('transitionend', this.handleOverlapTooltip);
        this.$refs.dot1.removeEventListener('transitionend', this.handleOverlapTooltip);
      }
    },
    handleKeydown(e) {
      if (!this.useKeyboard || !this.focusFlag) {
        return false;
      }
      switch (e.keyCode) {
        case 37:
        case 40:
          e.preventDefault();
          this.keydownFlag = true;
          this.flag = true;
          this.changeFocusSlider(this.actionsKeyboard[0]);
          break;
        case 38:
        case 39:
          e.preventDefault();
          this.keydownFlag = true;
          this.flag = true;
          this.changeFocusSlider(this.actionsKeyboard[1]);
          break;
      }
    },
    handleKeyup() {
      if (this.keydownFlag) {
        this.keydownFlag = false;
        this.flag = false;
      }
    },
    changeFocusSlider(fn) {
      if (this.isRange) {
        let arr = this.currentIndex.map((index, i) => {
          if (i === this.focusSlider || this.fixed) {
            const val = fn(index);
            const range = this.fixed ? this.valueLimit[i] : [0, this.total];
            if (val <= range[1] && val >= range[0]) {
              return val;
            }
          }
          return index;
        });
        if (arr[0] > arr[1]) {
          this.focusSlider = this.focusSlider === 0 ? 1 : 0;
          arr = arr.reverse();
        }
        this.setIndex(arr);
      } else {
        this.setIndex(fn(this.currentIndex));
      }
    },
    blurSlider(e) {
      const dot = this.isRange ? this.$refs[`dot${this.focusSlider}`] : this.$refs.dot;
      if (!dot || dot === e.target || dot.contains(e.target)) {
        return false;
      }
      this.focusFlag = false;
    },
    formatting(value) {
      return typeof this.formatter === 'string' ? this.formatter.replace(/\{value\}/, value) : this.formatter(value);
    },
    mergeFormatting(value1, value2) {
      return typeof this.mergeFormatter === 'string' ? this.mergeFormatter.replace(/\{(value1|value2)\}/g, (_, key) => key === 'value1' ? value1 : value2) : this.mergeFormatter(value1, value2);
    },
    getPos(e) {
      this.realTime && this.getStaticData();
      return this.direction === 'vertical' ? this.reverse ? e.pageY - this.offset : this.size - (e.pageY - this.offset) : this.reverse ? this.size - (e.clientX - this.offset) : e.clientX - this.offset;
    },
    processClick(e) {
      if (this.fixed) {
        e.stopPropagation();
      }
    },
    wrapClick(e) {
      if (this.isDisabled || !this.clickable || this.processFlag || this.dragFlag) return false;
      const pos = this.getPos(e);
      if (this.isRange) {
        if (this.disabledArray.every(b => b === false)) {
          this.currentSlider = pos > (this.position[1] - this.position[0]) / 2 + this.position[0] ? 1 : 0;
        } else if (this.disabledArray[0]) {
          if (pos < this.position[0]) return false;
          this.currentSlider = 1;
        } else if (this.disabledArray[1]) {
          if (pos > this.position[1]) return false;
          this.currentSlider = 0;
        }
      }
      if (this.disabledArray[this.currentSlider]) {
        return false;
      }
      this.setValueOnPos(pos);
      if (this.isRange && this.tooltipMerge) {
        const timer = setInterval(() => this.handleOverlapTooltip(), 16.7);
        setTimeout(() => window.clearInterval(timer), this.speed * 1000);
      }
    },
    moveStart(e, index = 0, isProcess) {
      if (this.disabledArray[index]) {
        return false;
      }
      if (this.stopPropagation) {
        e.stopPropagation();
      }
      if (this.isRange) {
        this.currentSlider = index;
        if (isProcess) {
          if (!this.processDragable) {
            return false;
          }
          this.processFlag = true;
          this.processSign = {
            pos: this.position,
            start: this.getPos(e.targetTouches && e.targetTouches[0] ? e.targetTouches[0] : e)
          };
        }
        if (!this.enableCross && this.val[0] === this.val[1]) {
          this.crossFlag = true;
        }
      }
      if (!isProcess && this.useKeyboard) {
        this.focusFlag = true;
        this.focusSlider = index;
      }
      this.flag = true;
      this.$emit('drag-start', this);
    },
    moving(e) {
      if (this.stopPropagation) {
        e.stopPropagation();
      }
      if (!this.flag) return false;
      e.preventDefault();
      if (e.targetTouches && e.targetTouches[0]) e = e.targetTouches[0];
      if (this.processFlag) {
        this.currentSlider = 0;
        this.setValueOnPos(this.processSign.pos[0] + this.getPos(e) - this.processSign.start, true);
        this.currentSlider = 1;
        this.setValueOnPos(this.processSign.pos[1] + this.getPos(e) - this.processSign.start, true);
      } else {
        this.dragFlag = true;
        this.setValueOnPos(this.getPos(e), true);
      }
      if (this.isRange && this.tooltipMerge) {
        this.handleOverlapTooltip();
      }
      this.$emit('drag', this);
    },
    moveEnd(e) {
      if (this.stopPropagation) {
        e.stopPropagation();
      }
      if (this.flag) {
        this.$emit('drag-end', this);
        if (this.lazy && this.isDiff(this.val, this.value)) {
          this.syncValue();
        }
      } else {
        return false;
      }
      this.flag = false;
      window.setTimeout(() => {
        this.crossFlag = false;
        this.dragFlag = false;
        this.processFlag = false;
      }, 0);
      this.setPosition();
    },
    setValueOnPos(pos, isDrag) {
      const range = this.isRange ? this.limit[this.currentSlider] : this.limit;
      const valueRange = this.isRange ? this.valueLimit[this.currentSlider] : this.valueLimit;
      const index = Math.round(pos / this.gap);
      if (pos >= range[0] && pos <= range[1]) {
        const v = this.getValueByIndex(index);
        this.setTransform(pos);
        this.setCurrentValue(v, isDrag);
        if (this.isRange && (this.fixed || this.isLessRange(pos, index))) {
          this.setTransform(pos + this.fixedValue * this.gap * (this.currentSlider === 0 ? 1 : -1), true);
          this.setCurrentValue((v * this.multiple + this.fixedValue * this.spacing * this.multiple * (this.currentSlider === 0 ? 1 : -1)) / this.multiple, isDrag, true);
        }
      } else {
        const anotherSlider = pos < range[0] ? 0 : 1;
        const currentSlider = anotherSlider === 0 ? 1 : 0;
        this.setTransform(range[anotherSlider]);
        this.setCurrentValue(valueRange[anotherSlider]);
        if (this.isRange && (this.fixed || this.isLessRange(pos, index))) {
          this.setTransform(this.limit[this.idleSlider][anotherSlider], true);
          this.setCurrentValue(this.valueLimit[this.idleSlider][anotherSlider], isDrag, true);
        } else if (this.isRange && (this.enableCross || this.crossFlag) && !this.isFixed && !this.disabledArray[anotherSlider] && this.currentSlider === currentSlider) {
          this.focusSlider = anotherSlider;
          this.currentSlider = anotherSlider;
        }
      }
      this.crossFlag = false;
    },
    isLessRange(pos, index) {
      if (!this.isRange || !this.minRange && !this.maxRange) {
        return false;
      }
      const diff = this.currentSlider === 0 ? this.currentIndex[1] - index : index - this.currentIndex[0];
      if (this.minRange && diff <= this.minRange) {
        this.fixedValue = this.minRange;
        return true;
      }
      if (this.maxRange && diff >= this.maxRange) {
        this.fixedValue = this.maxRange;
        return true;
      }
      this.computedFixedValue();
      return false;
    },
    isDiff(a, b) {
      if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) {
        return true;
      } else if (Array.isArray(a) && a.length === b.length) {
        return a.some((v, i) => v !== b[i]);
      }
      return a !== b;
    },
    setCurrentValue(val, isDrag, isIdleSlider) {
      const slider = isIdleSlider ? this.idleSlider : this.currentSlider;
      if (val < this.minimum || val > this.maximum) return false;
      if (this.isRange) {
        if (this.isDiff(this.currentValue[slider], val)) {
          this.currentValue.splice(slider, 1, val);
          if (!this.lazy || !this.flag || this.keydownFlag) {
            this.syncValue();
          }
        }
      } else if (this.isDiff(this.currentValue, val)) {
        this.currentValue = val;
        if (!this.lazy || !this.flag || this.keydownFlag) {
          this.syncValue();
        }
      }
      isDrag || this.setPosition();
    },
    getValueByIndex(index) {
      return (this.spacing * this.multiple * index + this.minimum * this.multiple) / this.multiple;
    },
    getIndexByValue(value) {
      return this.data ? this.data.indexOf(value) : Math.round((value - this.minimum) * this.multiple) / (this.spacing * this.multiple);
    },
    setIndex(val) {
      if (Array.isArray(val) && this.isRange) {
        let value;
        if (this.data) {
          value = [this.data[val[0]], this.data[val[1]]];
        } else {
          value = [this.getValueByIndex(val[0]), this.getValueByIndex(val[1])];
        }
        this.setValue(value);
      } else {
        val = this.getValueByIndex(val);
        if (this.isRange) {
          this.currentSlider = val > (this.currentValue[1] - this.currentValue[0]) / 2 + this.currentValue[0] ? 1 : 0;
        }
        this.setCurrentValue(val);
      }
    },
    setValue(val, noCb, speed) {
      if (this.isDiff(this.val, val)) {
        const resetVal = this.limitValue(val);
        this.val = this.isRange ? resetVal.concat() : resetVal;
        this.computedFixedValue();
        this.syncValue(noCb);
      }
      this.$nextTick(() => this.setPosition(speed));
    },
    computedFixedValue() {
      if (!this.isFixed) {
        this.fixedValue = 0;
        return false;
      }
      this.fixedValue = Math.max(this.fixed ? this.currentIndex[1] - this.currentIndex[0] : 0, this.minRange || 0);
    },
    setPosition(speed) {
      this.flag || this.setTransitionTime(speed === undefined ? this.speed : speed);
      if (this.isRange) {
        this.setTransform(this.position[0], this.currentSlider === 1);
        this.setTransform(this.position[1], this.currentSlider === 0);
      } else {
        this.setTransform(this.position);
      }
      this.flag || this.setTransitionTime(0);
    },
    setTransform(val, isIdleSlider) {
      const slider = isIdleSlider ? this.idleSlider : this.currentSlider;
      const value = roundToDPR((this.direction === 'vertical' ? this.dotHeightVal / 2 - val : val - this.dotWidthVal / 2) * (this.reverse ? -1 : 1));
      const translateValue = this.direction === 'vertical' ? `translateY(${value}px)` : `translateX(${value}px)`;
      const processSize = this.fixed ? `${this.fixedValue * this.gap}px` : `${slider === 0 ? this.position[1] - val : val - this.position[0]}px`;
      const processPos = this.fixed ? `${slider === 0 ? val : val - this.fixedValue * this.gap}px` : `${slider === 0 ? val : this.position[0]}px`;
      if (this.isRange) {
        this.slider[slider].style.transform = translateValue;
        this.slider[slider].style.WebkitTransform = translateValue;
        this.slider[slider].style.msTransform = translateValue;
        if (this.direction === 'vertical') {
          this.$refs.process.style.height = processSize;
          this.$refs.process.style[this.reverse ? 'top' : 'bottom'] = processPos;
        } else {
          this.$refs.process.style.width = processSize;
          this.$refs.process.style[this.reverse ? 'right' : 'left'] = processPos;
        }
      } else {
        this.slider.style.transform = translateValue;
        this.slider.style.WebkitTransform = translateValue;
        this.slider.style.msTransform = translateValue;
        if (this.direction === 'vertical') {
          this.$refs.process.style.height = `${val}px`;
          this.$refs.process.style[this.reverse ? 'top' : 'bottom'] = 0;
        } else {
          this.$refs.process.style.width = `${val}px`;
          this.$refs.process.style[this.reverse ? 'right' : 'left'] = 0;
        }
      }
    },
    setTransitionTime(time) {
      // In order to avoid browser merge style and modify together
      time || this.$refs.process.offsetWidth;
      if (this.isRange) {
        for (let i = 0; i < this.slider.length; i++) {
          this.slider[i].style.transitionDuration = `${time}s`;
          this.slider[i].style.WebkitTransitionDuration = `${time}s`;
        }
        this.$refs.process.style.transitionDuration = `${time}s`;
        this.$refs.process.style.WebkitTransitionDuration = `${time}s`;
      } else {
        this.slider.style.transitionDuration = `${time}s`;
        this.slider.style.WebkitTransitionDuration = `${time}s`;
        this.$refs.process.style.transitionDuration = `${time}s`;
        this.$refs.process.style.WebkitTransitionDuration = `${time}s`;
      }
    },
    limitValue(val) {
      if (this.data) {
        return val;
      }
      const inRange = v => {
        if (v < this.min) {
          this.printError(`The value of the slider is ${val}, the minimum value is ${this.min}, the value of this slider can not be less than the minimum value`);
          return this.min;
        } else if (v > this.max) {
          this.printError(`The value of the slider is ${val}, the maximum value is ${this.max}, the value of this slider can not be greater than the maximum value`);
          return this.max;
        }
        return v;
      };
      if (this.isRange) {
        return val.map(v => inRange(v));
      } else {
        return inRange(val);
      }
    },
    isActive(index) {
      return index >= this.indexRange[0] && index <= this.indexRange[1];
    },
    syncValue(noCb) {
      let val = this.isRange ? this.val.concat() : this.val;
      this.$emit('input', val);
      this.keydownFlag && this.$emit('on-keypress', val);
      noCb || this.$emit('callback', val);
    },
    getValue() {
      return this.val;
    },
    getIndex() {
      return this.currentIndex;
    },
    getStaticData() {
      if (this.$refs.elem) {
        this.size = this.direction === 'vertical' ? this.$refs.elem.offsetHeight : this.$refs.elem.offsetWidth;
        this.offset = this.direction === 'vertical' ? this.$refs.elem.getBoundingClientRect().top + window.pageYOffset || document.documentElement.scrollTop : this.$refs.elem.getBoundingClientRect().left;
      }
    },
    refresh() {
      if (this.$refs.elem) {
        this.getStaticData();
        this.computedFixedValue();
        this.setPosition(0);
      }
    },
    printError(msg) {
      if (this.debug) {
        console.error(`[VueSlider error]: ${msg}`);
      }
    },
    handleOverlapTooltip() {
      const isDirectionSame = this.tooltipDirection[0] === this.tooltipDirection[1];
      if (this.isRange && isDirectionSame) {
        const tooltip0 = this.reverse ? this.$refs.tooltip1 : this.$refs.tooltip0;
        const tooltip1 = this.reverse ? this.$refs.tooltip0 : this.$refs.tooltip1;
        const tooltip0Rect = tooltip0.getBoundingClientRect();
        const tooltip1Rect = tooltip1.getBoundingClientRect();
        const tooltip0Right = tooltip0Rect.right;
        const tooltip1Left = tooltip1Rect.left;
        const tooltip0Y = tooltip0Rect.top;
        const tooltip1Y = tooltip1Rect.top + tooltip1Rect.height;
        const horizontalOverlap = this.direction === 'horizontal' && tooltip0Right > tooltip1Left;
        const verticalOverlap = this.direction === 'vertical' && tooltip1Y > tooltip0Y;
        if (horizontalOverlap || verticalOverlap) {
          this.handleDisplayMergedTooltip(true);
        } else {
          this.handleDisplayMergedTooltip(false);
        }
      }
    },
    handleDisplayMergedTooltip(show) {
      const tooltip0 = this.$refs.tooltip0;
      const tooltip1 = this.$refs.tooltip1;
      const mergedTooltip = this.$refs.process.getElementsByClassName('vue-merged-tooltip')[0];
      if (show) {
        tooltip0.style.visibility = 'hidden';
        tooltip1.style.visibility = 'hidden';
        mergedTooltip.style.visibility = 'inherit';
      } else {
        tooltip0.style.visibility = 'inherit';
        tooltip1.style.visibility = 'inherit';
        mergedTooltip.style.visibility = 'hidden';
      }
    }
  },
  mounted() {
    this.isComponentExists = true;
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return this.printError('window or document is undefined, can not be initialization.');
    }
    this.$nextTick(() => {
      if (this.isComponentExists) {
        this.getStaticData();
        this.setValue(this.limitValue(this.value), true, this.startAnimation ? this.speed : 0);
        this.bindEvents();
        if (this.isRange && this.tooltipMerge && !this.startAnimation) {
          this.$nextTick(() => {
            this.handleOverlapTooltip();
          });
        }
      }
    });
    this.isMounted = true;
  },
  beforeDestroy() {
    this.isComponentExists = false;
    this.unbindEvents();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-slider-component/src/vue2-slider.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_vue2_slidervue_type_script_lang_js_ = (vue2_slidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-slider-component/src/vue2-slider.vue?vue&type=style&index=0&id=1beb6874&prod&lang=css&
var vue2_slidervue_type_style_index_0_id_1beb6874_prod_lang_css_ = __webpack_require__("d31e");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./node_modules/vue-slider-component/src/vue2-slider.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_vue2_slidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vue2_slider = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "d31e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_vue_loader_lib_index_js_vue_loader_options_vue2_slider_vue_vue_type_style_index_0_id_1beb6874_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5f5a");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_vue_loader_lib_index_js_vue_loader_options_vue2_slider_vue_vue_type_style_index_0_id_1beb6874_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_vue_loader_lib_index_js_vue_loader_options_vue2_slider_vue_vue_type_style_index_0_id_1beb6874_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d58f":
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__("59ed");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");
var lengthOfArrayLike = __webpack_require__("07fa");

var $TypeError = TypeError;

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aCallable(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(O);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw $TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ })

}]);
//# sourceMappingURL=QZg1R1SAs_themeBundle.umd.vendors_products-listing.js.map