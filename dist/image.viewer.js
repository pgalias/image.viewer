/*!
 *   TypeScript Image Zoomer
 *   By Paweł Galias pawgalias@gmail.com
 *   Copyright (c)
 * 
 *   Version: 1.0.0
 *   Last update: 10 Jan 2017
 * 
 *   Usage:
 *   $(selector).smoothScroll([options]);
 * 
 *   Available options:
 *   @param {string} parent - Reference (class, id, etc) to parent the scroll should be done on
 *   @param {number|string} speed - Time of scrolling in *ms* (number) or slow/fast (string)
 *   @param {boolean} mobile - Allow swipe events
 *   @param {boolean} keyboard - Allow keyboard arrow keys scrolling
 * 
 *   Changelog:
 *   1.0.0
 *     + initial release
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("iv", [], factory);
	else if(typeof exports === 'object')
		exports["iv"] = factory();
	else
		root["iv"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(38);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2);
	module.exports = __webpack_require__(5).Object.assign;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(3);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(21)});

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , core      = __webpack_require__(5)
	  , hide      = __webpack_require__(6)
	  , redefine  = __webpack_require__(16)
	  , ctx       = __webpack_require__(19)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 4 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 5 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(7)
	  , createDesc = __webpack_require__(15);
	module.exports = __webpack_require__(11) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(8)
	  , IE8_DOM_DEFINE = __webpack_require__(10)
	  , toPrimitive    = __webpack_require__(14)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(11) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(9);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(11) && !__webpack_require__(12)(function(){
	  return Object.defineProperty(__webpack_require__(13)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(12)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(9)
	  , document = __webpack_require__(4).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(9);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , hide      = __webpack_require__(6)
	  , has       = __webpack_require__(17)
	  , SRC       = __webpack_require__(18)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(5).inspectSource = function(it){
	  return $toString.call(it);
	};
	
	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 17 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(20);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(22)
	  , gOPS     = __webpack_require__(35)
	  , pIE      = __webpack_require__(36)
	  , toObject = __webpack_require__(37)
	  , IObject  = __webpack_require__(25)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(12)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(23)
	  , enumBugKeys = __webpack_require__(34);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(17)
	  , toIObject    = __webpack_require__(24)
	  , arrayIndexOf = __webpack_require__(28)(false)
	  , IE_PROTO     = __webpack_require__(32)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(25)
	  , defined = __webpack_require__(27);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(26);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(24)
	  , toLength  = __webpack_require__(29)
	  , toIndex   = __webpack_require__(31);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(30)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(30)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(33)('keys')
	  , uid    = __webpack_require__(18);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 35 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 36 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(27);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ImageViewer_1 = __webpack_require__(39);
	function init(query, options) {
	    new ImageViewer_1.default(query, options);
	}
	exports.init = init;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var crElement_1 = __webpack_require__(40);
	var getElement_1 = __webpack_require__(41);
	var insertElement_1 = __webpack_require__(42);
	var utils = __webpack_require__(43);
	var Image_class_1 = __webpack_require__(44);
	var ImageViewer = (function () {
	    function ImageViewer(query, options) {
	        if (options === void 0) { options = {}; }
	        var _this = this;
	        this.elements = [];
	        this.options = Object.assign({}, ImageViewer.defaults, options);
	        this.zoomed = false;
	        var elementsArray = getElement_1.convertNodeToArray(getElement_1.byQuery(query, true));
	        elementsArray.forEach(function (item) { return _this.elements.push(new Image_class_1.default(item)); });
	        this.elements.forEach(function (item) {
	            if (item.element.tagName === "IMG" || item.element.tagName === "img") {
	                utils.eventHandler(item.element, "click", function () { return _this.clickHandler(item); });
	            }
	        });
	        utils.eventHandler(window, "scroll", function () {
	            if (_this.zoomed) {
	                _this.zoomOut(_this.elements[_this.currentImg]);
	            }
	        });
	    }
	    ImageViewer.prototype.zoomIn = function (image) {
	        var _a = this.calculateTranslate(), tx = _a.tx, ty = _a.ty, tz = _a.tz;
	        var translate3d = "translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";
	        var scale = "scale(" + this.calculateScale() + ")";
	        utils.assignStyles(image.element, {
	            position: "relative",
	            transform: translate3d + " " + scale,
	            transitionTimingFunction: this.options.easing,
	            zIndex: 666,
	        });
	        insertElement_1.insertInto({
	            content: "<div class=\"iv-overlay\"><p class=\"iv-caption\">Caption</p></div>",
	            element: false,
	            parent: document.body,
	            place: "f"
	        });
	        var overlay = getElement_1.byQuery("div.iv-overlay");
	        utils.assignStyles(overlay, {
	            backgroundColor: this.options.overlayColor,
	            zIndex: 600
	        });
	        var attr = image.element.getAttribute("data-iv-caption");
	        if (attr) {
	            setTimeout(function () {
	                var caption = getElement_1.byQuery("p.iv-caption");
	                caption.innerText = attr;
	                utils.assignStyles(caption, { transform: "translate3d(0,0,0)" });
	            }, 50);
	        }
	        this.zoomed = true;
	        image.zoom = !image.zoom;
	    };
	    ImageViewer.prototype.zoomOut = function (image) {
	        utils.assignStyles(image.element, {
	            position: "static",
	            transform: "translate3d(0,0,0) scale(1)",
	            zIndex: 1
	        });
	        crElement_1.removeElement(getElement_1.byQuery("div.iv-overlay"));
	        this.zoomed = false;
	        image.zoom = !image.zoom;
	    };
	    ImageViewer.prototype.clickHandler = function (el) {
	        var self = el;
	        this.currentImg = this.elements.indexOf(self);
	        var _a = this.elements[this.currentImg].calculateSizes(), x = _a.x, nx = _a.nx, y = _a.y, ny = _a.ny;
	        // if natural sizes and actual sizes are equal then its not necessary to zoom img
	        if (x < nx && y < ny) {
	            if (!self.zoom) {
	                this.zoomIn(self);
	            }
	            else {
	                this.zoomOut(self);
	            }
	        }
	    };
	    ;
	    ImageViewer.prototype.calculateScale = function () {
	        var img = this.elements[this.currentImg];
	        // image natural sizes
	        var _a = img.calculateSizes(), imgNW = _a["nx"], imgNH = _a["ny"];
	        // image actual sizeX
	        var imgW = img.calculateSizes()["x"];
	        // viewport sizes
	        var _b = utils.documentSize(), viewportW = _b["x"], viewportH = _b["y"];
	        var imgAspectRatio = imgNW / imgNH;
	        var viewportAspectRatio = viewportW / viewportH;
	        var imgFactor = imgNW / imgW;
	        if (imgNW < viewportW && imgNH < viewportH) {
	            return imgFactor;
	        }
	        else if (imgAspectRatio < viewportAspectRatio) {
	            return (viewportH / imgNH) * imgFactor;
	        }
	        else {
	            return (viewportW / imgNW) * imgFactor;
	        }
	    };
	    ImageViewer.prototype.calculateTranslate = function () {
	        var self = this.elements[this.currentImg].element;
	        var _a = utils.elementPosition(self), elPosX = _a["x"], elPosY = _a["y"];
	        var _b = utils.elementSizes(self), elSizeX = _b["x"], elSizeY = _b["y"];
	        var scrollPosY = utils.scrollPosition()["y"];
	        var _c = utils.documentSize(), docSizeX = _c["x"], docSizeY = _c["y"];
	        // translate3d values
	        var tx = (docSizeX / 2 - elSizeX / 2) - elPosX;
	        var ty = scrollPosY + docSizeY / 2 - (elPosY + elSizeY / 2);
	        var tz = 0;
	        return { tx: tx, ty: ty, tz: tz };
	    };
	    Object.defineProperty(ImageViewer.prototype, "current", {
	        get: function () {
	            return this.elements[this.currentImg];
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return ImageViewer;
	}());
	ImageViewer.defaults = {
	    easing: "linear",
	    onDisable: function () { return 0; },
	    onExpand: function () { return 0; },
	    onInit: function () { return 0; },
	    overlayColor: "#444",
	    scrollable: true,
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ImageViewer;


/***/ },
/* 40 */
/***/ function(module, exports) {

	"use strict";
	function createElement(element) {
	    return document.createElement(element);
	}
	exports.createElement = createElement;
	function removeElement(element) {
	    document.body.removeChild(element);
	}
	exports.removeElement = removeElement;


/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";
	function byId(id) {
	    return document.getElementById(id);
	}
	exports.byId = byId;
	function byClass(className) {
	    return document.getElementsByClassName(className)[0];
	}
	exports.byClass = byClass;
	function byTag(tag) {
	    return document.getElementsByTagName(tag)[0];
	}
	exports.byTag = byTag;
	function byQuery(query, multiple, parent) {
	    if (multiple === void 0) { multiple = false; }
	    if (parent === void 0) { parent = document; }
	    if (multiple) {
	        return parent.querySelectorAll(query);
	    }
	    else {
	        return parent.querySelector(query);
	    }
	}
	exports.byQuery = byQuery;
	function convertNodeToArray(nodes) {
	    return Array.prototype.slice.call(nodes);
	}
	exports.convertNodeToArray = convertNodeToArray;


/***/ },
/* 42 */
/***/ function(module, exports) {

	"use strict";
	function insertInto(args) {
	    var content = args.content, element = args.element, parent = args.parent, place = args.place;
	    var wherePlace = putIn(place);
	    if (element) {
	        parent.insertAdjacentElement(wherePlace, content);
	    }
	    else {
	        parent.insertAdjacentHTML(wherePlace, content);
	    }
	}
	exports.insertInto = insertInto;
	function putIn(position) {
	    var places = {
	        a: "afterend",
	        b: "beforebegin",
	        f: "afterbegin",
	        l: "beforeend"
	    };
	    return places[position];
	}


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var getElement_1 = __webpack_require__(41);
	function elementPosition(element) {
	    var x = element.offsetLeft - element.scrollLeft + element.clientLeft;
	    var y = element.offsetTop - element.scrollTop + element.clientTop;
	    return { x: x, y: y };
	}
	exports.elementPosition = elementPosition;
	function elementSizes(element) {
	    var x = element.offsetWidth;
	    var y = element.offsetHeight;
	    return { x: x, y: y };
	}
	exports.elementSizes = elementSizes;
	function documentSize() {
	    var w = window;
	    var e = document.documentElement;
	    var g = getElement_1.byTag("body");
	    var x = w.innerWidth || e.clientWidth || g.clientWidth;
	    var y = w.innerHeight || e.clientHeight || g.clientHeight;
	    // const x = e.clientWidth || g.clientWidth;
	    // const y = e.clientHeight || g.clientHeight;
	    return { x: x, y: y };
	}
	exports.documentSize = documentSize;
	function scrollPosition() {
	    var w = window;
	    var d = document.documentElement;
	    var x = ((w.pageXOffset || d.scrollLeft) - (d.clientLeft || 0)) || 0;
	    var y = ((w.pageYOffset || d.scrollTop) - (d.clientTop || 0)) || 0;
	    return { x: x, y: y };
	}
	exports.scrollPosition = scrollPosition;
	function assignStyles(element, styles) {
	    Object.assign(element.style, styles);
	}
	exports.assignStyles = assignStyles;
	function removeStyles(element) {
	    element.removeAttribute("style");
	}
	exports.removeStyles = removeStyles;
	function eventHandler(el, evtType, handler) {
	    if (el.addEventListener) {
	        el.addEventListener(evtType, handler, false);
	    }
	    else if (el.attachEvent) {
	        el.attachEvent("on" + evtType, handler);
	    }
	}
	exports.eventHandler = eventHandler;


/***/ },
/* 44 */
/***/ function(module, exports) {

	"use strict";
	var Image = (function () {
	    function Image(element) {
	        this.element = element;
	        this.zoomed = false;
	    }
	    Object.defineProperty(Image.prototype, "zoom", {
	        get: function () {
	            return this.zoomed;
	        },
	        set: function (expand) {
	            this.zoomed = expand;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Image.prototype.calculateSizes = function () {
	        // natural sizes
	        var nx = this.element.naturalWidth;
	        var ny = this.element.naturalHeight;
	        // actual sizes
	        var x = this.element.width;
	        var y = this.element.height;
	        return { x: x, y: y, nx: nx, ny: ny };
	    };
	    return Image;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Image;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=image.viewer.js.map