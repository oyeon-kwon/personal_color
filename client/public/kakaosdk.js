/**
 * Kakao SDK for JavaScript - v1.42.0
 *
 * Copyright 2017 Kakao Corp.
 *
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 * OSS Notice | KakaoSDK-Javascript
 *
 * This application is Copyright © Kakao Corp. All rights reserved.
 * The following sets forth attribution notices for third party software that may be contained in this application.
 * If you have any questions or concerns, please contact us at opensource@kakaocorp.com
 *
 *
 * crypto-js
 *
 * https://github.com/brix/crypto-js
 *
 * Copyright 2009-2013 Jeff Mott
 * Copyright 2013-2016 Evan Vosberg
 *
 * MIT License
 *
 *
 * easyXDM
 *
 * https://github.com/oyvindkinsey/easyXDM/
 *
 * Copyright 2009-2011 Øyvind Sean Kinsey, oyvind@kinsey.no
 *
 * MIT License
 *
 *
 * ES6-Promise
 *
 * https://github.com/stefanpenner/es6-promise
 *
 * Copyright 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors
 *
 * MIT License
 *
 *
 * Kakao Web2App Library
 *
 * https://github.com/kakao/web2app
 *
 * Copyright 2015 Kakao Corp. http://www.kakaocorp.com
 *
 * MIT License
 *
 *
 * lodash
 *
 * https://github.com/lodash/lodash
 *
 * Copyright JS Foundation and other contributors
 *
 * MIT License
 *
 *
 * ua_parser
 *
 * https://github.com/html5crew/ua_parser
 *
 * Copyright HTML5 Tech. Team in Daum Communications Corp.
 *
 * MIT License
 *
 *
 * ``````````
 * MIT License
 *
 * Copyright (c)
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * 'Software'), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ``````````
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
    : typeof define === 'function' && define.amd ? define(['exports'], factory)
      : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Kakao = global.Kakao || {}));
})(this, function (exports) {
  'use strict';

  const freeGlobal = typeof global === 'object' && global && global.Object === Object && global;
  const freeGlobal$1 = freeGlobal;

  const freeSelf = typeof self === 'object' && self && self.Object === Object && self;
  const root = freeGlobal$1 || freeSelf || Function('return this')();
  const root$1 = root;

  const Symbol$1 = root$1.Symbol;
  const Symbol$2 = Symbol$1;

  const objectProto$a = Object.prototype;
  const hasOwnProperty$8 = objectProto$a.hasOwnProperty;
  const nativeObjectToString$1 = objectProto$a.toString;
  const symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : undefined;
  function getRawTag (value) {
    const isOwn = hasOwnProperty$8.call(value, symToStringTag$1);
    const tag = value[symToStringTag$1];
    try {
      value[symToStringTag$1] = undefined;
      var unmasked = true;
    } catch (e) {}
    const result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }

  const objectProto$9 = Object.prototype;
  const nativeObjectToString = objectProto$9.toString;
  function objectToString (value) {
    return nativeObjectToString.call(value);
  }

  const nullTag = '[object Null]';
  const undefinedTag = '[object Undefined]';
  const symToStringTag = Symbol$2 ? Symbol$2.toStringTag : undefined;
  function baseGetTag (value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }

  function isObjectLike (value) {
    return value != null && typeof value === 'object';
  }

  const symbolTag = '[object Symbol]';
  function isSymbol (value) {
    return typeof value === 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
  }

  const isArray = Array.isArray;
  const isArray$1 = isArray;

  const reWhitespace = /\s/;
  function trimmedEndIndex (string) {
    let index = string.length;
    while (index-- && reWhitespace.test(string.charAt(index))) {}
    return index;
  }

  const reTrimStart = /^\s+/;
  function baseTrim (string) {
    return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '') : string;
  }

  function isObject (value) {
    const type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  const NAN = 0 / 0;
  const reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  const reIsBinary = /^0b[01]+$/i;
  const reIsOctal = /^0o[0-7]+$/i;
  const freeParseInt = parseInt;
  function toNumber (value) {
    if (typeof value === 'number') {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      const other = typeof value.valueOf === 'function' ? value.valueOf() : value;
      value = isObject(other) ? other + '' : other;
    }
    if (typeof value !== 'string') {
      return value === 0 ? value : +value;
    }
    value = baseTrim(value);
    const isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }

  const INFINITY = 1 / 0;
  const MAX_INTEGER = 1.7976931348623157e+308;
  function toFinite (value) {
    if (!value) {
      return value === 0 ? value : 0;
    }
    value = toNumber(value);
    if (value === INFINITY || value === -INFINITY) {
      const sign = value < 0 ? -1 : 1;
      return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
  }

  function toInteger (value) {
    const result = toFinite(value);
    const remainder = result % 1;
    return result === result ? remainder ? result - remainder : result : 0;
  }

  function identity (value) {
    return value;
  }

  const asyncTag = '[object AsyncFunction]';
  const funcTag$1 = '[object Function]';
  const genTag = '[object GeneratorFunction]';
  const proxyTag = '[object Proxy]';
  function isFunction (value) {
    if (!isObject(value)) {
      return false;
    }
    const tag = baseGetTag(value);
    return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  const coreJsData = root$1['__core-js_shared__'];
  const coreJsData$1 = coreJsData;

  const maskSrcKey = (function () {
    const uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
  }());
  function isMasked (func) {
    return !!maskSrcKey && maskSrcKey in func;
  }

  const funcProto$2 = Function.prototype;
  const funcToString$2 = funcProto$2.toString;
  function toSource (func) {
    if (func != null) {
      try {
        return funcToString$2.call(func);
      } catch (e) {}
      try {
        return func + '';
      } catch (e) {}
    }
    return '';
  }

  const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  const reIsHostCtor = /^\[object .+?Constructor\]$/;
  const funcProto$1 = Function.prototype;
  const objectProto$8 = Object.prototype;
  const funcToString$1 = funcProto$1.toString;
  const hasOwnProperty$7 = objectProto$8.hasOwnProperty;
  const reIsNative = RegExp('^' + funcToString$1.call(hasOwnProperty$7).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  function baseIsNative (value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    const pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }

  function getValue (object, key) {
    return object == null ? undefined : object[key];
  }

  function getNative (object, key) {
    const value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  function apply (func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  const HOT_COUNT = 800;
  const HOT_SPAN = 16;
  const nativeNow = Date.now;
  function shortOut (func) {
    let count = 0;
    let lastCalled = 0;
    return function () {
      const stamp = nativeNow();
      const remaining = HOT_SPAN - (stamp - lastCalled);
      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(undefined, arguments);
    };
  }

  function constant (value) {
    return function () {
      return value;
    };
  }

  const defineProperty = (function () {
    try {
      const func = getNative(Object, 'defineProperty');
      func({}, '', {});
      return func;
    } catch (e) {}
  }());
  const defineProperty$1 = defineProperty;

  const baseSetToString = !defineProperty$1 ? identity : function (func, string) {
    return defineProperty$1(func, 'toString', {
      configurable: true,
      enumerable: false,
      value: constant(string),
      writable: true
    });
  };
  const baseSetToString$1 = baseSetToString;

  const setToString = shortOut(baseSetToString$1);
  const setToString$1 = setToString;

  function arrayEach (array, iteratee) {
    let index = -1;
    const length = array == null ? 0 : array.length;
    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  const MAX_SAFE_INTEGER$1 = 9007199254740991;
  const reIsUint = /^(?:0|[1-9]\d*)$/;
  function isIndex (value, length) {
    const type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER$1 : length;
    return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
  }

  function baseAssignValue (object, key, value) {
    if (key == '__proto__' && defineProperty$1) {
      defineProperty$1(object, key, {
        configurable: true,
        enumerable: true,
        value: value,
        writable: true
      });
    } else {
      object[key] = value;
    }
  }

  function eq (value, other) {
    return value === other || value !== value && other !== other;
  }

  const objectProto$7 = Object.prototype;
  const hasOwnProperty$6 = objectProto$7.hasOwnProperty;
  function assignValue (object, key, value) {
    const objValue = object[key];
    if (!(hasOwnProperty$6.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
      baseAssignValue(object, key, value);
    }
  }

  function copyObject (source, props, object, customizer) {
    const isNew = !object;
    object || (object = {});
    let index = -1;
    const length = props.length;
    while (++index < length) {
      const key = props[index];
      let newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
      if (newValue === undefined) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue(object, key, newValue);
      } else {
        assignValue(object, key, newValue);
      }
    }
    return object;
  }

  const nativeMax = Math.max;
  function overRest (func, start, transform) {
    start = nativeMax(start === undefined ? func.length - 1 : start, 0);
    return function () {
      const args = arguments;
      let index = -1;
      const length = nativeMax(args.length - start, 0);
      const array = Array(length);
      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      const otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform(array);
      return apply(func, this, otherArgs);
    };
  }

  function baseRest (func, start) {
    return setToString$1(overRest(func, start, identity), func + '');
  }

  const MAX_SAFE_INTEGER = 9007199254740991;
  function isLength (value) {
    return typeof value === 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }

  function isArrayLike (value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }

  function isIterateeCall (value, index, object) {
    if (!isObject(object)) {
      return false;
    }
    const type = typeof index;
    if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
      return eq(object[index], value);
    }
    return false;
  }

  function createAssigner (assigner) {
    return baseRest(function (object, sources) {
      let index = -1;
      let length = sources.length;
      let customizer = length > 1 ? sources[length - 1] : undefined;
      const guard = length > 2 ? sources[2] : undefined;
      customizer = assigner.length > 3 && typeof customizer === 'function' ? (length--, customizer) : undefined;
      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        customizer = length < 3 ? undefined : customizer;
        length = 1;
      }
      object = Object(object);
      while (++index < length) {
        const source = sources[index];
        if (source) {
          assigner(object, source, index, customizer);
        }
      }
      return object;
    });
  }

  const objectProto$6 = Object.prototype;
  function isPrototype (value) {
    const Ctor = value && value.constructor;
    const proto = typeof Ctor === 'function' && Ctor.prototype || objectProto$6;
    return value === proto;
  }

  function baseTimes (n, iteratee) {
    let index = -1;
    const result = Array(n);
    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  const argsTag$1 = '[object Arguments]';
  function baseIsArguments (value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag$1;
  }

  const objectProto$5 = Object.prototype;
  const hasOwnProperty$5 = objectProto$5.hasOwnProperty;
  const propertyIsEnumerable = objectProto$5.propertyIsEnumerable;
  const isArguments = baseIsArguments(function () {
    return arguments;
  }()) ? baseIsArguments : function (value) {
        return isObjectLike(value) && hasOwnProperty$5.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
      };
  const isArguments$1 = isArguments;

  function stubFalse () {
    return false;
  }

  const freeExports$1 = typeof exports === 'object' && exports && !exports.nodeType && exports;
  const freeModule$1 = freeExports$1 && typeof module === 'object' && module && !module.nodeType && module;
  const moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
  const Buffer = moduleExports$1 ? root$1.Buffer : undefined;
  const nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
  const isBuffer = nativeIsBuffer || stubFalse;
  const isBuffer$1 = isBuffer;

  const argsTag = '[object Arguments]';
  const arrayTag = '[object Array]';
  const boolTag$1 = '[object Boolean]';
  const dateTag = '[object Date]';
  const errorTag = '[object Error]';
  const funcTag = '[object Function]';
  const mapTag = '[object Map]';
  const numberTag$1 = '[object Number]';
  const objectTag$1 = '[object Object]';
  const regexpTag = '[object RegExp]';
  const setTag = '[object Set]';
  const stringTag$1 = '[object String]';
  const weakMapTag = '[object WeakMap]';
  const arrayBufferTag = '[object ArrayBuffer]';
  const dataViewTag = '[object DataView]';
  const float32Tag = '[object Float32Array]';
  const float64Tag = '[object Float64Array]';
  const int8Tag = '[object Int8Array]';
  const int16Tag = '[object Int16Array]';
  const int32Tag = '[object Int32Array]';
  const uint8Tag = '[object Uint8Array]';
  const uint8ClampedTag = '[object Uint8ClampedArray]';
  const uint16Tag = '[object Uint16Array]';
  const uint32Tag = '[object Uint32Array]';
  const typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag$1] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag$1] = typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag$1] = typedArrayTags[weakMapTag] = false;
  function baseIsTypedArray (value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }

  function baseUnary (func) {
    return function (value) {
      return func(value);
    };
  }

  const freeExports = typeof exports === 'object' && exports && !exports.nodeType && exports;
  const freeModule = freeExports && typeof module === 'object' && module && !module.nodeType && module;
  const moduleExports = freeModule && freeModule.exports === freeExports;
  const freeProcess = moduleExports && freeGlobal$1.process;
  const nodeUtil = (function () {
    try {
      const types = freeModule && freeModule.require && freeModule.require('util').types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());
  const nodeUtil$1 = nodeUtil;

  const nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;
  const isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
  const isTypedArray$1 = isTypedArray;

  const objectProto$4 = Object.prototype;
  const hasOwnProperty$4 = objectProto$4.hasOwnProperty;
  function arrayLikeKeys (value, inherited) {
    const isArr = isArray$1(value);
    const isArg = !isArr && isArguments$1(value);
    const isBuff = !isArr && !isArg && isBuffer$1(value);
    const isType = !isArr && !isArg && !isBuff && isTypedArray$1(value);
    const skipIndexes = isArr || isArg || isBuff || isType;
    const result = skipIndexes ? baseTimes(value.length, String) : [];
    const length = result.length;
    for (const key in value) {
      if ((inherited || hasOwnProperty$4.call(value, key)) && !(skipIndexes && (
        key == 'length' ||
        isBuff && (key == 'offset' || key == 'parent') ||
        isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
        isIndex(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }

  function overArg (func, transform) {
    return function (arg) {
      return func(transform(arg));
    };
  }

  const nativeKeys = overArg(Object.keys, Object);
  const nativeKeys$1 = nativeKeys;

  const objectProto$3 = Object.prototype;
  const hasOwnProperty$3 = objectProto$3.hasOwnProperty;
  function baseKeys (object) {
    if (!isPrototype(object)) {
      return nativeKeys$1(object);
    }
    const result = [];
    for (const key in Object(object)) {
      if (hasOwnProperty$3.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }
    return result;
  }

  function keys$1 (object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }

  function nativeKeysIn (object) {
    const result = [];
    if (object != null) {
      for (const key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }

  const objectProto$2 = Object.prototype;
  const hasOwnProperty$2 = objectProto$2.hasOwnProperty;
  function baseKeysIn (object) {
    if (!isObject(object)) {
      return nativeKeysIn(object);
    }
    const isProto = isPrototype(object);
    const result = [];
    for (const key in object) {
      if (!(key == 'constructor' && (isProto || !hasOwnProperty$2.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }

  function keysIn (object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }

  const assignIn = createAssigner(function (object, source) {
    copyObject(source, keysIn(source), object);
  });
  const extend = assignIn;

  const getPrototype = overArg(Object.getPrototypeOf, Object);
  const getPrototype$1 = getPrototype;

  const objectTag = '[object Object]';
  const funcProto = Function.prototype;
  const objectProto$1 = Object.prototype;
  const funcToString = funcProto.toString;
  const hasOwnProperty$1 = objectProto$1.hasOwnProperty;
  const objectCtorString = funcToString.call(Object);
  function isPlainObject (value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
      return false;
    }
    const proto = getPrototype$1(value);
    if (proto === null) {
      return true;
    }
    const Ctor = hasOwnProperty$1.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor === 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }

  function createBaseFor (fromRight) {
    return function (object, iteratee, keysFunc) {
      let index = -1;
      const iterable = Object(object);
      const props = keysFunc(object);
      let length = props.length;
      while (length--) {
        const key = props[fromRight ? length : ++index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }

  const baseFor = createBaseFor();
  const baseFor$1 = baseFor;

  function baseForOwn (object, iteratee) {
    return object && baseFor$1(object, iteratee, keys$1);
  }

  function createBaseEach (eachFunc, fromRight) {
    return function (collection, iteratee) {
      if (collection == null) {
        return collection;
      }
      if (!isArrayLike(collection)) {
        return eachFunc(collection, iteratee);
      }
      const length = collection.length;
      let index = fromRight ? length : -1;
      const iterable = Object(collection);
      while (fromRight ? index-- : ++index < length) {
        if (iteratee(iterable[index], index, iterable) === false) {
          break;
        }
      }
      return collection;
    };
  }

  const baseEach = createBaseEach(baseForOwn);
  const baseEach$1 = baseEach;

  const objectProto = Object.prototype;
  const hasOwnProperty = objectProto.hasOwnProperty;
  const defaults = baseRest(function (object, sources) {
    object = Object(object);
    let index = -1;
    let length = sources.length;
    const guard = length > 2 ? sources[2] : undefined;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      length = 1;
    }
    while (++index < length) {
      const source = sources[index];
      const props = keysIn(source);
      let propsIndex = -1;
      const propsLength = props.length;
      while (++propsIndex < propsLength) {
        const key = props[propsIndex];
        const value = object[key];
        if (value === undefined || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
          object[key] = source[key];
        }
      }
    }
    return object;
  });
  const defaults$1 = defaults;

  function castFunction (value) {
    return typeof value === 'function' ? value : identity;
  }

  function forEach (collection, iteratee) {
    const func = isArray$1(collection) ? arrayEach : baseEach$1;
    return func(collection, castFunction(iteratee));
  }

  const stringTag = '[object String]';
  function isString (value) {
    return typeof value === 'string' || !isArray$1(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
  }

  const boolTag = '[object Boolean]';
  function isBoolean (value) {
    return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
  }

  function isElement (value) {
    return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
  }

  function isInteger (value) {
    return typeof value === 'number' && value == toInteger(value);
  }

  const numberTag = '[object Number]';
  function isNumber (value) {
    return typeof value === 'number' || isObjectLike(value) && baseGetTag(value) == numberTag;
  }

  function checkObjType (type) {
    return function (e) {
      return Object.prototype.toString.call(e) === '[object '.concat(type, ']');
    };
  }
  function isBlob (b) {
    return checkObjType('Blob')(b);
  }
  function isFile (f) {
    return checkObjType('File')(f);
  }
  function isFileList (fl) {
    return checkObjType('FileList')(fl);
  }
  function isURL (u) {
    const urlRegex = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
    return urlRegex.test(u);
  }
  function isJSONString (s) {
    try {
      JSON.parse(s);
    } catch (e) {
      return false;
    }
    return true;
  }
  function map (arr, fn) {
    return Array.prototype.slice.call(arr).map(fn);
  }
  function every (arr, fn) {
    return Array.prototype.slice.call(arr).every(fn);
  }
  function difference (a0, a1) {
    const arrays = [a0, a1];
    return arrays.reduce(function (a, b) {
      return a.filter(function (c) {
        return b.indexOf(c) === -1;
      });
    });
  }
  function keys (e) {
    return Object.keys(e || {});
  }
  function emptyFunc () {
  }
  function getRandomString () {
    return Math.random().toString(36).slice(2);
  }
  function getElement (e) {
    if (isElement(e)) {
      return e;
    } else if (isString(e)) {
      return document.querySelector(e);
    } else {
      return null;
    }
  }
  function addEvent (target, type, callback) {
    if (target.addEventListener) {
      target.addEventListener(type, callback, false);
    }
  }
  function removeEvent (target, type, callback) {
    if (target.removeEventListener) {
      target.removeEventListener(type, callback, false);
    }
  }
  function buildQueryString (params) {
    const encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    const esc = encode ? encodeURIComponent : function (e) {
      return e;
    };
    const ret = map(keys(params), function (k) {
      const v = params[k];
      return esc(k) + '=' + esc(isObject(v) ? JSON.stringify(v) : v);
    });
    return ret.join('&');
  }
  function ab2str (buf) {
    const bytes = Array.prototype.slice.call(new Uint8Array(buf));
    return bytes.reduce(function (acc, b) {
      return acc + String.fromCharCode.apply(null, [b]);
    }, '');
  }
  function isOneOf (elements) {
    if (!isArray$1(elements)) {
      throw new Error('elements should be an Array');
    }
    return function (e) {
      return elements.indexOf(e) > -1;
    };
  }
  function passesOneOf (validators) {
    if (!isArray$1(validators)) {
      throw new Error('validators should be an Array');
    }
    return function (e) {
      return validators.some(function (v) {
        return v(e);
      });
    };
  }
  const localStorage = (function () {
    const polyfill = {
      _data: {},
      setItem: function setItem (id, val) {
        return this._data[id] = String(val);
      },
      getItem: function getItem (id) {
        return this._data.hasOwnProperty(id) ? this._data[id] : null;
      },
      removeItem: function removeItem (id) {
        return delete this._data[id];
      },
      clear: function clear () {
        return this._data = {};
      }
    };
    try {
      if ('localStorage' in window && window.localStorage !== null) {
        window.localStorage.setItem('store', '');
        window.localStorage.removeItem('store');
        return window.localStorage;
      } else {
        return polyfill;
      }
    } catch (e) {
      return polyfill;
    }
  }());

  function ownKeys (object, enumerableOnly) {
    const keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      let symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2 (target) {
    for (let i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _typeof (obj) {
    '@babel/helpers - typeof';

    return _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
    }, _typeof(obj);
  }

  function _classCallCheck (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  function _defineProperties (target, props) {
    for (let i = 0; i < props.length; i++) {
      const descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass (Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, 'prototype', {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty (obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits (subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError('Super expression must either be null or a function');
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, 'prototype', {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf (o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf (o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf (o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf (o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct () {
    if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === 'function') return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized (self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn (self, call) {
    if (call && (typeof call === 'object' || typeof call === 'function')) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError('Derived constructors may only return object or undefined');
    }

    return _assertThisInitialized(self);
  }

  function _createSuper (Derived) {
    const hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal () {
      const Super = _getPrototypeOf(Derived);
      let result;

      if (hasNativeReflectConstruct) {
        const NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _slicedToArray (arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray (arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles (arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles (arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray (iter) {
    if (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null || iter['@@iterator'] != null) return Array.from(iter);
  }

  function _iterableToArrayLimit (arr, i) {
    let _i = arr == null ? null : typeof Symbol !== 'undefined' && arr[Symbol.iterator] || arr['@@iterator'];

    if (_i == null) return;
    const _arr = [];
    let _n = true;
    let _d = false;

    let _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i.return != null) _i.return();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray (o, minLen) {
    if (!o) return;
    if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
    let n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === 'Object' && o.constructor) n = o.constructor.name;
    if (n === 'Map' || n === 'Set') return Array.from(o);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray (arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread () {
    throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
  }

  function _nonIterableRest () {
    throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
  }

  const commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function commonjsRequire (path) {
    throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
  }

  const ua_parser = (function () {
    if (!Array.isArray) {
      Array.isArray = function (arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
      };
    }
    function checkUserAgent (ua) {
      const browser = {};
      let match = /(dolfin)[ \/]([\w.]+)/.exec(ua) || /(edge)[ \/]([\w.]+)/.exec(ua) || /(chrome)[ \/]([\w.]+)/.exec(ua) || /(tizen)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(ua) || /(webkit)(?:.*version)?[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(ua) || ['', 'unknown'];
      if (match[1] === 'webkit') {
        match = /(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(ua) || /(android)[ \/]([\w._\-]+);/.exec(ua) || [match[0], 'safari', match[2]];
      } else if (match[1] === 'mozilla') {
        if (/trident/.test(ua)) {
          match[1] = 'msie';
        } else {
          match[1] = 'firefox';
        }
      } else if (/polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(ua)) {
        match[1] = 'polaris';
      }
      browser[match[1]] = true;
      browser.name = match[1];
      browser.version = setVersion(match[2]);
      return browser;
    }
    function setVersion (versionString) {
      const version = {};
      const versions = versionString ? versionString.split(/\.|-|_/) : ['0', '0', '0'];
      version.info = versions.join('.');
      version.major = versions[0] || '0';
      version.minor = versions[1] || '0';
      version.patch = versions[2] || '0';
      return version;
    }
    function checkPlatform (ua) {
      if (isTablet(ua)) {
        return 'tablet';
      } else if (isPc(ua)) {
        return 'pc';
      } else if (isMobile(ua)) {
        return 'mobile';
      } else {
        return '';
      }
    }
    function isPc (ua) {
      if (ua.match(/linux|windows (nt|98)|macintosh|cros/) && !ua.match(/android|mobile|polaris|lgtelecom|uzard|natebrowser|ktf;|skt;/)) {
        return true;
      }
      return false;
    }
    function isTablet (ua) {
      if (ua.match(/ipad/) || ua.match(/android/) && !ua.match(/mobi|mini|fennec/) || ua.match(/macintosh/) && window.navigator.maxTouchPoints > 1) {
        return true;
      }
      return false;
    }
    function isMobile (ua) {
      if (ua.match(/ip(hone|od)|android.+mobile|windows (ce|phone)|blackberry|bb10|symbian|webos|firefox.+fennec|opera m(ob|in)i|tizen.+mobile|polaris|iemobile|lgtelecom|nokia|sonyericsson|dolfin|uzard|natebrowser|ktf;|skt;/)) {
        return true;
      } else {
        return false;
      }
    }
    function checkOs (ua) {
      const os = {};
      const match = /(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(ua) || (/polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(ua) ? ['', 'polaris', '0.0.0'] : false) || /(windows)(?: nt | phone(?: os){0,1} | )([\w._\-]+)/.exec(ua) || /(android)[ \/]([\w._\-]+);/.exec(ua) || (/android/.test(ua) ? ['', 'android', '0.0.0'] : false) || (/(windows)/.test(ua) ? ['', 'windows', '0.0.0'] : false) || /(mac) os x ([\w._\-]+)/.exec(ua) || /(tizen)[ \/]([\w._\-]+);/.exec(ua) || (/(linux)/.test(ua) ? ['', 'linux', '0.0.0'] : false) || (/webos/.test(ua) ? ['', 'webos', '0.0.0'] : false) || /(cros)(?:\s[\w]+\s)([\d._\-]+)/.exec(ua) || /(bada)[ \/]([\w._\-]+)/.exec(ua) || (/bada/.test(ua) ? ['', 'bada', '0.0.0'] : false) || (/(rim|blackberry|bb10)/.test(ua) ? ['', 'blackberry', '0.0.0'] : false) || ['', 'unknown', '0.0.0'];
      if (match[1] === 'iphone' || match[1] === 'ipad' || match[1] === 'ipod') {
        match[1] = 'ios';
      } else if (match[1] === 'windows' && match[2] === '98') {
        match[2] = '0.98.0';
      }
      if (match[1] === 'mac' && typeof window !== 'undefined' && window.navigator.maxTouchPoints > 1) {
        match[1] = 'ios';
      }
      if (match[1] === 'cros') {
        match[1] = 'chrome';
      }
      os[match[1]] = true;
      os.name = match[1];
      os.version = setVersion(match[2]);
      return os;
    }
    const baseAppList = ['crios', 'fxios', 'daumapps'];
    function checkApp (ua, customAppList) {
      const app = {};
      let match = null;
      let checkAppList = baseAppList;
      if (Array.isArray(customAppList)) {
        checkAppList = baseAppList.concat(customAppList);
      } else if (typeof customAppList === 'string') {
        checkAppList = baseAppList.concat([customAppList]);
      }
      for (let i = 0, len = checkAppList.length; i < len; i += 1) {
        const appname = checkAppList[i];
        const regex = new RegExp('(' + appname + ')[ \\/]([\\w._\\-]+)');
        match = regex.exec(ua);
        if (match) {
          break;
        }
      }
      if (!match) {
        match = ['', ''];
      }
      if (match[1]) {
        app.isApp = true;
        app.name = match[1];
        app.version = setVersion(match[2]);
      } else {
        app.isApp = false;
      }
      return app;
    }
    function getLowerUserAgent (ua) {
      let lowerUa = '';
      if (!ua) {
        if (typeof window !== 'undefined' && window.navigator && typeof window.navigator.userAgent === 'string') {
          lowerUa = window.navigator.userAgent.toLowerCase();
        } else {
          lowerUa = '';
        }
      } else {
        lowerUa = ua.toLowerCase();
      }
      return lowerUa;
    }
    const userAgent = function userAgent (ua, customAppList) {
      const lowerUa = getLowerUserAgent(ua);
      return {
        ua: lowerUa,
        browser: checkUserAgent(lowerUa),
        platform: checkPlatform(lowerUa),
        os: checkOs(lowerUa),
        app: checkApp(lowerUa, customAppList)
      };
    };
    return userAgent;
  }());
  const ua_parser$1 = ua_parser;

  const UA$1 = ua_parser$1();
  function getOrigin () {
    const _location = location;
    const protocol = _location.protocol;
    const hostname = _location.hostname;
    const port = _location.port;
    return ''.concat(protocol, '//').concat(hostname).concat(port ? ':' + port : '');
  }
  function getNavigator () {
    return navigator;
  }
  function getUA () {
    return UA$1;
  }

  const ACCOUNT = 'https://accounts.kakao.com';
  const AUTH = 'https://kauth.kakao.com';
  const API$2 = 'https://kapi.kakao.com';
  const SHARER_DOMAIN = 'https://sharer.kakao.com';
  const PICKER_DOMAIN = 'https://friend-picker.kakao.com';
  const APPS_DOMAIN = 'https://apps.kakao.com';
  const CHANNEL = 'https://pf.kakao.com';
  const STORY = 'https://story.kakao.com';
  const STORY_POST_SCHEME = 'storylink://posting';
  const REDIRECT_URI = 'JS-SDK';
  const UNIVERSAL_LINK = 'https://talk-apps.kakao.com';
  const TALK_LOGIN_SCHEME = 'kakaokompassauth://authorize';
  const TALK_LOGIN_REDIRECT_URI = 'https://kapi.kakao.com/cors/afterlogin.html';
  const TALK_INAPP_SCHEME = 'kakaotalk://inappbrowser';
  const TALK_SYNCPLUGIN_SCHEME = 'kakaotalk://bizplugin?plugin_id=6011263b74fc2b49c73a7298';
  const TALK_LINK_SCHEME = 'kakaolink://send';
  const TALK_ANDROID_PACKAGE = 'com.kakao.talk';
  const NAVI_SCHEME = 'kakaonavi-sdk://navigate';
  const NAVI_FALLBACK_URL = 'https://kakaonavi.kakao.com/launch/index.do';
  const DEVELOPERS = 'https://developers.kakao.com';

  const origin = getOrigin();
  const UA = getUA();
  const isTalkWebview = /KAKAOTALK/i.test(UA.ua);
  const VERSION = '1.42.0'.concat('');
  const navigator$1 = getNavigator();
  const KAKAO_AGENT = ['sdk/'.concat(VERSION), 'os/javascript', 'sdk_type/javascript', 'lang/'.concat(navigator$1.userLanguage || navigator$1.language), 'device/'.concat(navigator$1.platform.replace(/ /g, '_')), 'origin/'.concat(encodeURIComponent(origin))].join(' ');
  const URL = {
    accountDomain: ACCOUNT,
    authDomain: AUTH,
    authorize: ''.concat(AUTH, '/oauth/authorize'),
    loginWidget: ''.concat(AUTH, '/public/widget/login/kakaoLoginWidget.html'),
    redirectUri: REDIRECT_URI,
    universalKakaoLink: ''.concat(UNIVERSAL_LINK, '/scheme/'),
    talkLoginScheme: TALK_LOGIN_SCHEME,
    talkLoginRedirectUri: TALK_LOGIN_REDIRECT_URI,
    talkInappScheme: TALK_INAPP_SCHEME,
    talkSyncpluginScheme: TALK_SYNCPLUGIN_SCHEME,
    apiRemote: ''.concat(API$2, '/cors/'),
    sharerDomain: SHARER_DOMAIN,
    pickerDomain: PICKER_DOMAIN,
    appsDomain: APPS_DOMAIN,
    talkLinkScheme: TALK_LINK_SCHEME,
    talkAndroidPackage: TALK_ANDROID_PACKAGE,
    channel: CHANNEL,
    channelIcon: ''.concat(DEVELOPERS, '/assets/img/about/logos'),
    storyShare: ''.concat(STORY, '/s/share'),
    storyChannelFollow: ''.concat(STORY, '/s/follow'),
    storyIcon: ''.concat(DEVELOPERS, '/sdk/js/resources/story/icon_small.png'),
    storyPostScheme: STORY_POST_SCHEME,
    naviScheme: NAVI_SCHEME,
    naviFallback: NAVI_FALLBACK_URL
  };
  let appKey$1 = null;
  function getAppKey$1 () {
    return appKey$1;
  }
  function setAppKey (_appKey) {
    appKey$1 = _appKey;
  }
  function KakaoError (message) {
    Error.prototype.constructor.apply(this, arguments);
    this.name = 'KakaoError';
    this.message = message;
  }
  KakaoError.prototype = new Error();
  function logDebug (obj) {
  }
  function makeModule (subModules) {
    const module = extend.apply(void 0, [{
      cleanup: function cleanup () {
        forEach(subModules, function (e) {
          return e.cleanup && e.cleanup();
        });
      }
    }].concat(_toConsumableArray(subModules)));
    return module;
  }
  function emptyCleanups (cleanups) {
    forEach(cleanups, function (fn) {
      fn();
    });
    cleanups.length = 0;
  }
  function validate (target, validator, callerMsg) {
    if (validator(target) === false) {
      throw new KakaoError('Illegal argument for '.concat(callerMsg));
    }
  }
  function processRules () {
    const params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const rules = arguments.length > 1 ? arguments[1] : undefined;
    const callerMsg = arguments.length > 2 ? arguments[2] : undefined;
    if (!isObject(params)) {
      throw new Error('params should be an Object');
    }
    if (isFunction(rules.before)) {
      rules.before(params);
    }
    if (isFunction(rules.defaults)) {
      defaults$1(params, rules.defaults(params));
    } else {
      defaults$1(params, rules.defaults);
    }
    const _rules$required = rules.required;
    const required = _rules$required === void 0 ? {} : _rules$required;
    const _rules$optional = rules.optional;
    const optional = _rules$optional === void 0 ? {} : _rules$optional;
    const missingRequiredKeys = difference(keys(required), keys(params));
    if (missingRequiredKeys.length > 0) {
      throw new KakaoError('Missing required keys: '.concat(missingRequiredKeys.join(','), ' at ').concat(callerMsg));
    }
    const allowed = extend({}, required, optional);
    const invalidKeys = difference(keys(params), keys(allowed));
    if (invalidKeys.length > 0) {
      throw new KakaoError('Invalid parameter keys: '.concat(invalidKeys.join(','), ' at ').concat(callerMsg));
    }
    forEach(params, function (value, key) {
      validate(value, allowed[key], '"'.concat(key, '" in ').concat(callerMsg));
    });
    if (isFunction(rules.after)) {
      rules.after(params);
    }
    return params;
  }
  function generateTxId () {
    const tranId = Math.random().toString(36).slice(2) + getAppKey$1() + Date.now().toString(36);
    return tranId.slice(0, 60);
  }
  function getInstallUrl (androidAppId, iOSAppId) {
    if (UA.os.android) {
      const referrer = JSON.stringify({
        appKey: appKey$1,
        KA: KAKAO_AGENT
      });
      return 'market://details?id='.concat(androidAppId, '&referrer=').concat(referrer);
    } else if (UA.os.ios) {
      return 'https://itunes.apple.com/app/id'.concat(iOSAppId);
    } else {
      return location.href;
    }
  }
  function guardCreateEasyXDM (createEasyXDM) {
    try {
      return createEasyXDM();
    } catch (e) {
      if (e instanceof TypeError) {
        throw new KakaoError('kakao.js should be loaded from a web server');
      } else {
        throw new KakaoError('EasyXDM - '.concat(e.message));
      }
    }
  }
  const popupWindows = {};
  function windowOpen (url, name, feature) {
    const popupWindow = popupWindows[name];
    if (popupWindow && popupWindow.close && !popupWindow.closed) {
      popupWindow.close();
    }
    popupWindows[name] = window.open(url, name, feature);
    return popupWindows[name];
  }
  function applyAttributes (settings, container$, mapper) {
    forEach(mapper, function (value, key) {
      const attr = container$.getAttribute(value);
      if (attr !== null) {
        settings[key] = attr === 'true' || attr === 'false' ? attr === 'true' : attr;
      }
    });
  }
  function createHiddenIframe (id, src, cleanups) {
    const iframe = document.createElement('iframe');
    iframe.id = iframe.name = id;
    iframe.src = src;
    iframe.setAttribute('style', 'border:none; width:0; height:0; display:none; overflow:hidden;');
    document.body.appendChild(iframe);
    cleanups.push(function () {
      document.body.removeChild(iframe);
    });
  }
  function addMessageEvent (settings, requestDomain, cleanups) {
    const callback = function callback (_ref) {
      const data = _ref.data;
      const origin = _ref.origin;
      if (data && origin === requestDomain) {
        const resp = JSON.parse(data);
        if (resp.code) {
          settings.fail(resp);
        } else {
          settings.success(resp);
        }
        settings.always(resp);
        removeEvent(window, 'message', callback);
      }
    };
    addEvent(window, 'message', callback);
    cleanups.push(function () {
      removeEvent(window, 'message', callback);
    });
  }
  function openPopupAndSubmitForm (params, popupParams) {
    const url = popupParams.url;
    const popupName = popupParams.popupName;
    const popupFeatures = popupParams.popupFeatures;
    const popup = UA.browser.msie ? {} : windowOpen('', popupName, popupFeatures);
    if (popup.focus) {
      popup.focus();
    }
    createAndSubmitForm(params, url, popupName);
    return popup;
  }
  function createAndSubmitForm (params, url) {
    const popupName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    const form = document.createElement('form');
    form.setAttribute('accept-charset', 'utf-8');
    form.setAttribute('method', 'post');
    form.setAttribute('action', url);
    form.setAttribute('target', popupName);
    form.setAttribute('style', 'display:none');
    forEach(params, function (value, key) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = isString(value) ? value : JSON.stringify(value);
      form.appendChild(input);
    });
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  }

  const eventObserverMap = {};
  function subscribe (eventName, observer) {
    eventObserverMap[eventName] = eventObserverMap[eventName] || [];
    eventObserverMap[eventName].push(observer);
  }
  function unsubscribe (eventName, observer) {
    const observers = eventObserverMap[eventName];
    for (let i = 0; i < observers.length; i++) {
      if (observers[i] === observer) {
        observers.splice(i, 1);
        return;
      }
    }
  }
  function dispatch (eventName) {
    forEach(eventObserverMap[eventName], function (observer) {
      observer();
    });
  }
  const eventObserver = {
    subscribe: subscribe,
    unsubscribe: unsubscribe,
    dispatch: dispatch
  };

  const Poller = (function () {
    function Poller (interval, maxCount) {
      _classCallCheck(this, Poller);
      this._interval = interval;
      this._maxCount = maxCount;
      this._count = 0;
      this._stopped = false;
      this._timeout = null;
    }
    _createClass(Poller, [{
      key: 'start',
      value: function start (pollFunc, failFunc) {
        if (this._timeout !== null) {
          this.stop();
        }
        this._count = 0;
        this._stopped = false;
        this._doPolling(pollFunc, failFunc);
      }
    }, {
      key: '_doPolling',
      value: function _doPolling (pollFunc, failFunc) {
        const _this = this;
        if (this._stopped) return;
        this._timeout = setTimeout(function () {
          if (++_this._count > _this._maxCount) {
            failFunc();
          } else {
            pollFunc();
            _this._doPolling(pollFunc, failFunc);
          }
        }, this._interval);
      }
    }, {
      key: 'stop',
      value: function stop () {
        this._stopped = true;
        clearTimeout(this._timeout);
        this._timeout = null;
      }
    }]);
    return Poller;
  }());

  const defaultCallbacks = {
    success: emptyFunc,
    fail: emptyFunc,
    always: emptyFunc
  };
  const loginDefaultSettings = _objectSpread2({
    throughTalk: true,
    persistAccessToken: true,
    persistRefreshToken: false
  }, defaultCallbacks);
  const loginCommonSettings = {
    success: isFunction,
    fail: isFunction,
    always: isFunction,
    persistAccessToken: isBoolean,
    persistRefreshToken: isBoolean,
    approvalType: isOneOf(['project']),
    scope: isString,
    throughTalk: isBoolean,
    plusFriendPublicId: isString,
    channelPublicId: isString,
    serviceTerms: isString,
    redirectUri: isString,
    state: isString,
    deviceType: isOneOf(['watch', 'tv']),
    nonce: isString
  };
  const shippingAddressSettings = {
    optional: {
      success: isFunction,
      fail: isFunction,
      always: isFunction,
      close: isFunction,
      returnUrl: isString,
      forceMobileLayout: isBoolean,
      enableBackButton: isBoolean
    },
    defaults: _objectSpread2(_objectSpread2({}, defaultCallbacks), {}, {
      close: emptyFunc,
      forceMobileLayout: false,
      enableBackButton: true
    })
  };
  const rules$8 = {
    createLoginButton: {
      required: {
        container: passesOneOf([isElement, isString])
      },
      optional: _objectSpread2({
        lang: isOneOf(['en', 'kr']),
        size: isOneOf(['small', 'medium', 'large'])
      }, loginCommonSettings),
      defaults: _objectSpread2({
        lang: 'kr',
        size: 'medium'
      }, loginDefaultSettings)
    },
    login: {
      optional: loginCommonSettings,
      defaults: loginDefaultSettings
    },
    authorize: {
      optional: {
        redirectUri: isString,
        approvalType: isOneOf(['project']),
        scope: isString,
        throughTalk: isBoolean,
        plusFriendPublicId: isString,
        channelPublicId: isString,
        serviceTerms: isString,
        isPopup: isBoolean,
        state: isString,
        autoLogin: isBoolean,
        deviceType: isOneOf(['watch', 'tv']),
        prompts: isString,
        reauthenticate: isBoolean,
        throughSyncplugin: isBoolean,
        loginHint: isString,
        nonce: isString,
        success: isFunction,
        fail: isFunction,
        always: isFunction
      },
      defaults: _objectSpread2({
        throughTalk: true,
        isPopup: false,
        reauthenticate: false,
        throughSyncplugin: true
      }, defaultCallbacks)
    },
    autoLogin: {
      optional: {
        success: isFunction,
        fail: isFunction,
        always: isFunction
      },
      defaults: defaultCallbacks
    },
    issueAccessToken: {
      required: {
        code: isString,
        redirectUri: isString
      },
      optional: {
        success: isFunction,
        fail: isFunction,
        always: isFunction
      },
      defaults: defaultCallbacks
    },
    selectShippingAddress: shippingAddressSettings,
    createShippingAddress: shippingAddressSettings,
    updateShippingAddress: _objectSpread2({
      required: {
        addressId: isInteger
      }
    }, shippingAddressSettings)
  };

  function openLoginPopup (url) {
    const LOGIN_POPUP_NAME = '_blank';
    return windowOpen(url, LOGIN_POPUP_NAME, getLoginPopupFeatures());
  }
  function getLoginPopupFeatures () {
    const popupWidth = 480;
    const popupHeight = 700;
    const sLeft = window.screenLeft ? window.screenLeft : window.screenX ? window.screenX : 0;
    const sTop = window.screenTop ? window.screenTop : window.screenY ? window.screenY : 0;
    const popupLeft = screen.width / 2 - popupWidth / 2 + sLeft;
    const popupTop = screen.height / 2 - popupHeight / 2 + sTop;
    return ['width='.concat(popupWidth), 'height='.concat(popupHeight), 'left='.concat(popupLeft), 'top='.concat(popupTop), 'scrollbars=yes', 'resizable=1'].join(',');
  }
  function makeAuthUrl (params) {
    return ''.concat(URL.authorize, '?').concat(buildQueryString(params));
  }
  function makeAuthParams (settings) {
    const params = {
      client_id: getAppKey$1()
    };
    if (settings.approvalType) {
      params.approval_type = settings.approvalType;
    }
    if (settings.scope) {
      params.scope = settings.scope;
    }
    if (settings.state) {
      params.state = settings.state;
    }
    return params;
  }
  function makeAuthExtraParams (settings) {
    const params = {};
    if (settings.plusFriendPublicId) {
      params['extra.plus_friend_public_id'] = settings.plusFriendPublicId;
    }
    if (settings.channelPublicId) {
      params.channel_public_id = settings.channelPublicId;
    }
    if (settings.serviceTerms) {
      params['extra.service_terms'] = settings.serviceTerms;
    }
    if (settings.autoLogin) {
      params.prompt = 'none';
    }
    if (settings.reauthenticate) {
      params.prompt = 'login';
    }
    if (settings.prompts) {
      params.prompt = settings.prompts;
    }
    if (settings.deviceType) {
      params.device_type = settings.deviceType;
    }
    if (settings.loginHint) {
      params.login_hint = settings.loginHint;
    }
    if (settings.nonce) {
      params.nonce = settings.nonce;
    }
    return params;
  }
  function makeBaseAuthParams (settings) {
    return _objectSpread2(_objectSpread2(_objectSpread2({}, makeAuthParams(settings)), makeAuthExtraParams(settings)), {}, {
      redirect_uri: settings.redirectUri || URL.redirectUri,
      response_type: 'code',
      auth_tran_id: generateTxId()
    });
  }
  function makeWebAuthParams (settings, baseAuthParams) {
    return _objectSpread2(_objectSpread2({}, baseAuthParams), {}, {
      ka: KAKAO_AGENT,
      is_popup: settings.isPopup
    });
  }
  function makeCodeUrl (authTranId) {
    const params = buildQueryString({
      client_id: getAppKey$1(),
      auth_tran_id: authTranId,
      ka: KAKAO_AGENT
    });
    return ''.concat(URL.authDomain, '/apiweb/code.json?').concat(params);
  }
  function runAuthCallback (settings, resp) {
    if (resp.error) {
      settings.fail(resp);
    } else {
      settings.success(resp);
    }
    settings.always(resp);
  }

  function checkAuthorize (url, onResponse) {
    request$7({
      method: 'GET',
      url: url
    }, onResponse);
  }
  function request$7 (req, onResponse) {
    const url = req.url;
    const method = req.method;
    const data = req.data;
    const xhr = new XMLHttpRequest();
    if (typeof xhr.withCredentials !== 'undefined') {
      xhr.open(method, url);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          onResponse(xhr);
        }
      };
      xhr.send(data);
    } else {
      const xdr = new XDomainRequest();
      xdr.open(method.toLowerCase(), url);
      xdr.onload = function () {
        onResponse({
          status: xdr.responseText ? 200 : 'error',
          response: xdr.responseText
        });
      };
      setTimeout(function () {
        xdr.send(data);
      }, 0);
    }
  }

  const poller$2 = new Poller(1000, 600);
  function authorize (settings) {
    settings = processRules(settings, rules$8.authorize, 'Auth.authorize');
    if ((settings.autoLogin || includePrompts(settings.prompts, 'none')) && !isTalkWebview) {
      handleResponse(settings, {
        error: 'auto_login',
        error_description: 'NOT_SUPPORTED_BROWSER'
      });
      return false;
    }
    if (isTalkChannelHome(settings) && isSupportImplicitLogin(settings)) {
      implicitLogin(settings).then(function (isNeedRetry) {
        if (isNeedRetry) {
          doAuthorize(settings);
        }
      });
    } else {
      doAuthorize(settings);
    }
    eventObserver.dispatch('LOGIN_START');
  }
  function doAuthorize (settings) {
    const baseAuthParams = makeBaseAuthParams(settings);
    const webAuthParams = makeWebAuthParams(settings, baseAuthParams);
    const isEasyLogin = isSupportEasyLogin(settings);
    const isSupportSyncplugin = isTalkChannelHome(settings);
    const webAuthUrl = makeAuthUrl(webAuthParams);
    const loginUrl = isEasyLogin ? makeEasyLoginUrl(settings, baseAuthParams, webAuthUrl) : webAuthUrl;
    let popup = null;
    if (isSupportSyncplugin) {
      executeSyncpluginScheme(webAuthParams);
    } else if (settings.isPopup) {
      popup = openLoginPopup(loginUrl);
    } else {
      location.href = loginUrl;
    }
    if (isEasyLogin || isSupportSyncplugin || settings.isPopup) {
      const codeUrl = makeCodeUrl(baseAuthParams.auth_tran_id);
      poller$2.start(function () {
        checkAuthorize(codeUrl, function (httpResp) {
          const isValidResp = onResponse(settings, httpResp);
          if (isValidResp) {
            poller$2.stop();
            popup && popup.close && popup.close();
          }
          if (!isEasyLogin && popup && popup.closed) {
            poller$2.stop();
          }
        });
      }, function () {
        handleResponse(settings, {
          error: 'timeout',
          error_description: 'LOGIN_TIMEOUT'
        });
      });
    }
  }
  function isSupportEasyLogin (settings) {
    const isNotInAppBrowser = UA.os.ios || UA.os.android ? !isTalkWebview : false;
    const isAccountLogin = settings.reauthenticate === true || includePrompts(settings.prompts, 'login');
    const isAutoLogin = settings.autoLogin === true || includePrompts(settings.prompts, 'none');
    return !(UA.os.android && /instagram|fb_iab/g.test(UA.ua)) && isNotInAppBrowser && !isAccountLogin && settings.throughTalk === true && !isAutoLogin;
  }
  function includePrompts (prompts, option) {
    return !!(prompts && prompts.indexOf(option) > -1);
  }
  function onResponse (settings, httpResp) {
    if (httpResp.status === 200 && httpResp.response) {
      const resp = JSON.parse(httpResp.response);
      if (resp.status === 'ok' && resp.code) {
        handleResponse(settings, {
          code: resp.code
        });
        return true;
      } else if (resp.status === 'error' && resp.error_code && resp.error_code !== '300') {
        handleResponse(settings, {
          error: resp.error,
          error_description: resp.error_description
        });
        if (resp.error_code === '700') {
          location.href = ''.concat(URL.authDomain, '/error/network');
        }
        return true;
      }
    }
    return false;
  }
  function handleResponse (settings, respObj) {
    if (settings.state) {
      respObj.state = settings.state;
    }
    if (settings.redirectUri) {
      const delimiter = settings.redirectUri.indexOf('?') > -1 ? '&' : '?';
      location.href = settings.redirectUri + delimiter + buildQueryString(respObj);
    } else {
      runAuthCallback(settings, respObj);
    }
  }
  function makeEasyLoginUrl (settings, baseAuthParams, fallbackUrl) {
    const easyLoginAuthParams = _objectSpread2(_objectSpread2({}, baseAuthParams), {}, {
      is_popup: true
    });
    const getAndroidLoginIntent = function getAndroidLoginIntent () {
      return ['intent:#Intent', 'action=com.kakao.talk.intent.action.CAPRI_LOGGED_IN_ACTIVITY', 'launchFlags=0x08880000', 'S.com.kakao.sdk.talk.appKey='.concat(getAppKey$1()), 'S.com.kakao.sdk.talk.redirectUri='.concat(easyLoginAuthParams.redirect_uri), 'S.com.kakao.sdk.talk.kaHeader='.concat(KAKAO_AGENT), 'S.com.kakao.sdk.talk.extraparams='.concat(encodeURIComponent(JSON.stringify(easyLoginAuthParams)))].concat(_toConsumableArray(settings.state ? ['S.com.kakao.sdk.talk.state='.concat(settings.state)] : []), ['S.browser_fallback_url='.concat(encodeURIComponent(fallbackUrl)), 'end;']).join(';');
    };
    const getIosLoginUniversalLink = function getIosLoginUniversalLink () {
      const iosLoginUrl = makeAuthUrl(easyLoginAuthParams);
      const iosFallbackUrl = settings.isPopup ? iosLoginUrl : fallbackUrl;
      const iosEasyLoginUrl = ''.concat(iosLoginUrl, '&ka=').concat(encodeURIComponent(KAKAO_AGENT));
      const talkWebviewUrl = ''.concat(URL.talkInappScheme, '?url=').concat(encodeURIComponent(iosEasyLoginUrl));
      return ''.concat(URL.universalKakaoLink).concat(encodeURIComponent(talkWebviewUrl), '&web=').concat(encodeURIComponent(iosFallbackUrl));
    };
    return UA.os.android ? getAndroidLoginIntent() : getIosLoginUniversalLink();
  }
  function isTalkChannelHome (settings) {
    return settings.throughSyncplugin && isTalkWebview && /ch-home/i.test(UA.ua);
  }
  function executeSyncpluginScheme (webAuthParams) {
    const bizpluginParams = _objectSpread2(_objectSpread2({}, webAuthParams), {}, {
      is_popup: true,
      approval_window_type: 'v4_bizplugin'
    });
    const query = encodeURIComponent(buildQueryString(bizpluginParams));
    location.href = ''.concat(URL.talkSyncpluginScheme, '&query=').concat(query);
  }
  function isSupportImplicitLogin (settings) {
    return settings.isPopup === false && !includePrompts(settings.prompts, 'cert') && window.kakaoweb && typeof window.kakaoweb.reqSignInLocation === 'function';
  }
  function implicitLogin (settings) {
    const baseAuthParams = makeBaseAuthParams(settings);
    const webAuthParams = makeWebAuthParams(settings, baseAuthParams);
    const implicitLoginParams = buildQueryString(_objectSpread2(_objectSpread2({}, webAuthParams), {}, {
      is_popup: false,
      prompt: 'none'
    }));
    return kakaoweb.reqSignInLocation(implicitLoginParams).then(function (location) {
      const parsed = Object.fromEntries(new window.URL(location).searchParams);
      if (parsed.error === 'consent_required' && !includePrompts(settings.prompts, 'none') || parsed.error === 'interaction_required') {
        return true;
      }
      handleResponse(settings, _objectSpread2(_objectSpread2({}, parsed.code && {
        code: parsed.code
      }), parsed.error && {
        error: parsed.error,
        error_description: parsed.error_description
      }));
      return false;
    }).catch(function (error) {
      return false;
    });
  }

  const oauth = /* #__PURE__ */Object.freeze({
    __proto__: null,
    authorize: authorize
  });

  function isAndroidWebView () {
    return UA.os.android && (olderAndroidWebView() || oldAndroidWebView() || newerAndroidWebView());
  }
  function olderAndroidWebView () {
    return UA.os.version.major == 2 && /Version\/\d+.\d+|/i.test(UA.ua);
  }
  function oldAndroidWebView () {
    return UA.os.version.major == 4 && UA.os.version.minor < 4 && /Version\/\d+.\d+|/i.test(UA.ua);
  }
  function newerAndroidWebView () {
    return /Version\/\d+\.\d+/i.test(UA.ua) && (/Chrome\/\d+\.\d+\.\d+\.\d+ Mobile/i.test(UA.ua) || /; wv\)/i.test(UA.ua));
  }
  function isIOSKakaoTalkWebView () {
    return UA.os.ios && isTalkWebview;
  }
  function isAndroidKakaoTalkWebView () {
    return UA.os.android && isTalkWebview;
  }
  function isNewerAndroidKakaoTalkWebView () {
    return UA.os.android && isTalkWebview && UA.browser.chrome && UA.browser.version.major >= 71;
  }

  const es6Promise = { exports: {} };

  (function (module, exports) {
    (function (global, factory) {
      module.exports = factory();
    })(commonjsGlobal, function () {
      function objectOrFunction (x) {
        const type = typeof x;
        return x !== null && (type === 'object' || type === 'function');
      }
      function isFunction (x) {
        return typeof x === 'function';
      }
      let _isArray = void 0;
      if (Array.isArray) {
        _isArray = Array.isArray;
      } else {
        _isArray = function (x) {
          return Object.prototype.toString.call(x) === '[object Array]';
        };
      }
      const isArray = _isArray;
      let len = 0;
      let vertxNext = void 0;
      let customSchedulerFn = void 0;
      let asap = function asap (callback, arg) {
        queue[len] = callback;
        queue[len + 1] = arg;
        len += 2;
        if (len === 2) {
          if (customSchedulerFn) {
            customSchedulerFn(flush);
          } else {
            scheduleFlush();
          }
        }
      };
      function setScheduler (scheduleFn) {
        customSchedulerFn = scheduleFn;
      }
      function setAsap (asapFn) {
        asap = asapFn;
      }
      const browserWindow = typeof window !== 'undefined' ? window : undefined;
      const browserGlobal = browserWindow || {};
      const BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
      const isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';
      const isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';
      function useNextTick () {
        return function () {
          return process.nextTick(flush);
        };
      }
      function useVertxTimer () {
        if (typeof vertxNext !== 'undefined') {
          return function () {
            vertxNext(flush);
          };
        }
        return useSetTimeout();
      }
      function useMutationObserver () {
        let iterations = 0;
        const observer = new BrowserMutationObserver(flush);
        const node = document.createTextNode('');
        observer.observe(node, {
          characterData: true
        });
        return function () {
          node.data = iterations = ++iterations % 2;
        };
      }
      function useMessageChannel () {
        const channel = new MessageChannel();
        channel.port1.onmessage = flush;
        return function () {
          return channel.port2.postMessage(0);
        };
      }
      function useSetTimeout () {
        const globalSetTimeout = setTimeout;
        return function () {
          return globalSetTimeout(flush, 1);
        };
      }
      var queue = new Array(1000);
      function flush () {
        for (let i = 0; i < len; i += 2) {
          const callback = queue[i];
          const arg = queue[i + 1];
          callback(arg);
          queue[i] = undefined;
          queue[i + 1] = undefined;
        }
        len = 0;
      }
      function attemptVertx () {
        try {
          const vertx = Function('return this')().require('vertx');
          vertxNext = vertx.runOnLoop || vertx.runOnContext;
          return useVertxTimer();
        } catch (e) {
          return useSetTimeout();
        }
      }
      var scheduleFlush = void 0;
      if (isNode) {
        scheduleFlush = useNextTick();
      } else if (BrowserMutationObserver) {
        scheduleFlush = useMutationObserver();
      } else if (isWorker) {
        scheduleFlush = useMessageChannel();
      } else if (browserWindow === undefined && typeof commonjsRequire === 'function') {
        scheduleFlush = attemptVertx();
      } else {
        scheduleFlush = useSetTimeout();
      }
      function then (onFulfillment, onRejection) {
        const parent = this;
        const child = new this.constructor(noop);
        if (child[PROMISE_ID] === undefined) {
          makePromise(child);
        }
        const _state = parent._state;
        if (_state) {
          const callback = arguments[_state - 1];
          asap(function () {
            return invokeCallback(_state, child, callback, parent._result);
          });
        } else {
          subscribe(parent, child, onFulfillment, onRejection);
        }
        return child;
      }
      function resolve$1 (object) {
        const Constructor = this;
        if (object && typeof object === 'object' && object.constructor === Constructor) {
          return object;
        }
        const promise = new Constructor(noop);
        resolve(promise, object);
        return promise;
      }
      var PROMISE_ID = Math.random().toString(36).substring(2);
      function noop () {}
      const PENDING = void 0;
      const FULFILLED = 1;
      const REJECTED = 2;
      function selfFulfillment () {
        return new TypeError('You cannot resolve a promise with itself');
      }
      function cannotReturnOwn () {
        return new TypeError('A promises callback cannot return that same promise.');
      }
      function tryThen (then$$1, value, fulfillmentHandler, rejectionHandler) {
        try {
          then$$1.call(value, fulfillmentHandler, rejectionHandler);
        } catch (e) {
          return e;
        }
      }
      function handleForeignThenable (promise, thenable, then$$1) {
        asap(function (promise) {
          let sealed = false;
          const error = tryThen(then$$1, thenable, function (value) {
            if (sealed) {
              return;
            }
            sealed = true;
            if (thenable !== value) {
              resolve(promise, value);
            } else {
              fulfill(promise, value);
            }
          }, function (reason) {
            if (sealed) {
              return;
            }
            sealed = true;
            reject(promise, reason);
          }, 'Settle: ' + (promise._label || ' unknown promise'));
          if (!sealed && error) {
            sealed = true;
            reject(promise, error);
          }
        }, promise);
      }
      function handleOwnThenable (promise, thenable) {
        if (thenable._state === FULFILLED) {
          fulfill(promise, thenable._result);
        } else if (thenable._state === REJECTED) {
          reject(promise, thenable._result);
        } else {
          subscribe(thenable, undefined, function (value) {
            return resolve(promise, value);
          }, function (reason) {
            return reject(promise, reason);
          });
        }
      }
      function handleMaybeThenable (promise, maybeThenable, then$$1) {
        if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
          handleOwnThenable(promise, maybeThenable);
        } else {
          if (then$$1 === undefined) {
            fulfill(promise, maybeThenable);
          } else if (isFunction(then$$1)) {
            handleForeignThenable(promise, maybeThenable, then$$1);
          } else {
            fulfill(promise, maybeThenable);
          }
        }
      }
      function resolve (promise, value) {
        if (promise === value) {
          reject(promise, selfFulfillment());
        } else if (objectOrFunction(value)) {
          let then$$1 = void 0;
          try {
            then$$1 = value.then;
          } catch (error) {
            reject(promise, error);
            return;
          }
          handleMaybeThenable(promise, value, then$$1);
        } else {
          fulfill(promise, value);
        }
      }
      function publishRejection (promise) {
        if (promise._onerror) {
          promise._onerror(promise._result);
        }
        publish(promise);
      }
      function fulfill (promise, value) {
        if (promise._state !== PENDING) {
          return;
        }
        promise._result = value;
        promise._state = FULFILLED;
        if (promise._subscribers.length !== 0) {
          asap(publish, promise);
        }
      }
      function reject (promise, reason) {
        if (promise._state !== PENDING) {
          return;
        }
        promise._state = REJECTED;
        promise._result = reason;
        asap(publishRejection, promise);
      }
      function subscribe (parent, child, onFulfillment, onRejection) {
        const _subscribers = parent._subscribers;
        const length = _subscribers.length;
        parent._onerror = null;
        _subscribers[length] = child;
        _subscribers[length + FULFILLED] = onFulfillment;
        _subscribers[length + REJECTED] = onRejection;
        if (length === 0 && parent._state) {
          asap(publish, parent);
        }
      }
      function publish (promise) {
        const subscribers = promise._subscribers;
        const settled = promise._state;
        if (subscribers.length === 0) {
          return;
        }
        let child = void 0;
        let callback = void 0;
        const detail = promise._result;
        for (let i = 0; i < subscribers.length; i += 3) {
          child = subscribers[i];
          callback = subscribers[i + settled];
          if (child) {
            invokeCallback(settled, child, callback, detail);
          } else {
            callback(detail);
          }
        }
        promise._subscribers.length = 0;
      }
      function invokeCallback (settled, promise, callback, detail) {
        const hasCallback = isFunction(callback);
        let value = void 0;
        let error = void 0;
        let succeeded = true;
        if (hasCallback) {
          try {
            value = callback(detail);
          } catch (e) {
            succeeded = false;
            error = e;
          }
          if (promise === value) {
            reject(promise, cannotReturnOwn());
            return;
          }
        } else {
          value = detail;
        }
        if (promise._state !== PENDING) ; else if (hasCallback && succeeded) {
          resolve(promise, value);
        } else if (succeeded === false) {
          reject(promise, error);
        } else if (settled === FULFILLED) {
          fulfill(promise, value);
        } else if (settled === REJECTED) {
          reject(promise, value);
        }
      }
      function initializePromise (promise, resolver) {
        try {
          resolver(function resolvePromise (value) {
            resolve(promise, value);
          }, function rejectPromise (reason) {
            reject(promise, reason);
          });
        } catch (e) {
          reject(promise, e);
        }
      }
      let id = 0;
      function nextId () {
        return id++;
      }
      function makePromise (promise) {
        promise[PROMISE_ID] = id++;
        promise._state = undefined;
        promise._result = undefined;
        promise._subscribers = [];
      }
      function validationError () {
        return new Error('Array Methods must be provided an Array');
      }
      const Enumerator = (function () {
        function Enumerator (Constructor, input) {
          this._instanceConstructor = Constructor;
          this.promise = new Constructor(noop);
          if (!this.promise[PROMISE_ID]) {
            makePromise(this.promise);
          }
          if (isArray(input)) {
            this.length = input.length;
            this._remaining = input.length;
            this._result = new Array(this.length);
            if (this.length === 0) {
              fulfill(this.promise, this._result);
            } else {
              this.length = this.length || 0;
              this._enumerate(input);
              if (this._remaining === 0) {
                fulfill(this.promise, this._result);
              }
            }
          } else {
            reject(this.promise, validationError());
          }
        }
        Enumerator.prototype._enumerate = function _enumerate (input) {
          for (let i = 0; this._state === PENDING && i < input.length; i++) {
            this._eachEntry(input[i], i);
          }
        };
        Enumerator.prototype._eachEntry = function _eachEntry (entry, i) {
          const c = this._instanceConstructor;
          const resolve$$1 = c.resolve;
          if (resolve$$1 === resolve$1) {
            let _then = void 0;
            let error = void 0;
            let didError = false;
            try {
              _then = entry.then;
            } catch (e) {
              didError = true;
              error = e;
            }
            if (_then === then && entry._state !== PENDING) {
              this._settledAt(entry._state, i, entry._result);
            } else if (typeof _then !== 'function') {
              this._remaining--;
              this._result[i] = entry;
            } else if (c === Promise$1) {
              const promise = new c(noop);
              if (didError) {
                reject(promise, error);
              } else {
                handleMaybeThenable(promise, entry, _then);
              }
              this._willSettleAt(promise, i);
            } else {
              this._willSettleAt(new c(function (resolve$$1) {
                return resolve$$1(entry);
              }), i);
            }
          } else {
            this._willSettleAt(resolve$$1(entry), i);
          }
        };
        Enumerator.prototype._settledAt = function _settledAt (state, i, value) {
          const promise = this.promise;
          if (promise._state === PENDING) {
            this._remaining--;
            if (state === REJECTED) {
              reject(promise, value);
            } else {
              this._result[i] = value;
            }
          }
          if (this._remaining === 0) {
            fulfill(promise, this._result);
          }
        };
        Enumerator.prototype._willSettleAt = function _willSettleAt (promise, i) {
          const enumerator = this;
          subscribe(promise, undefined, function (value) {
            return enumerator._settledAt(FULFILLED, i, value);
          }, function (reason) {
            return enumerator._settledAt(REJECTED, i, reason);
          });
        };
        return Enumerator;
      }());
      function all (entries) {
        return new Enumerator(this, entries).promise;
      }
      function race (entries) {
        const Constructor = this;
        if (!isArray(entries)) {
          return new Constructor(function (_, reject) {
            return reject(new TypeError('You must pass an array to race.'));
          });
        } else {
          return new Constructor(function (resolve, reject) {
            const length = entries.length;
            for (let i = 0; i < length; i++) {
              Constructor.resolve(entries[i]).then(resolve, reject);
            }
          });
        }
      }
      function reject$1 (reason) {
        const Constructor = this;
        const promise = new Constructor(noop);
        reject(promise, reason);
        return promise;
      }
      function needsResolver () {
        throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
      }
      function needsNew () {
        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
      }
      var Promise$1 = (function () {
        function Promise (resolver) {
          this[PROMISE_ID] = nextId();
          this._result = this._state = undefined;
          this._subscribers = [];
          if (noop !== resolver) {
            typeof resolver !== 'function' && needsResolver();
            this instanceof Promise ? initializePromise(this, resolver) : needsNew();
          }
        }
        Promise.prototype.catch = function _catch (onRejection) {
          return this.then(null, onRejection);
        };
        Promise.prototype.finally = function _finally (callback) {
          const promise = this;
          const constructor = promise.constructor;
          if (isFunction(callback)) {
            return promise.then(function (value) {
              return constructor.resolve(callback()).then(function () {
                return value;
              });
            }, function (reason) {
              return constructor.resolve(callback()).then(function () {
                throw reason;
              });
            });
          }
          return promise.then(callback, callback);
        };
        return Promise;
      }());
      Promise$1.prototype.then = then;
      Promise$1.all = all;
      Promise$1.race = race;
      Promise$1.resolve = resolve$1;
      Promise$1.reject = reject$1;
      Promise$1._setScheduler = setScheduler;
      Promise$1._setAsap = setAsap;
      Promise$1._asap = asap;
      function polyfill () {
        let local = void 0;
        if (typeof commonjsGlobal !== 'undefined') {
          local = commonjsGlobal;
        } else if (typeof self !== 'undefined') {
          local = self;
        } else {
          try {
            local = Function('return this')();
          } catch (e) {
            throw new Error('polyfill failed because global object is unavailable in this environment');
          }
        }
        const P = local.Promise;
        if (P) {
          let promiseToString = null;
          try {
            promiseToString = Object.prototype.toString.call(P.resolve());
          } catch (e) {
          }
          if (promiseToString === '[object Promise]' && !P.cast) {
            return;
          }
        }
        local.Promise = Promise$1;
      }
      Promise$1.polyfill = polyfill;
      Promise$1.Promise = Promise$1;
      return Promise$1;
    });
  })(es6Promise);

  const easyXDM_1 = (function () {
    (function (O, d, q, L, l, I) {
      const b = this || O;
      let o = Math.floor(Math.random() * 10000);
      const r = Function.prototype;
      const R = /^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/;
      const S = /[\-\w]+\/\.\.\//;
      const G = /([^:])\/\//g;
      let J = '';
      const p = {};
      const N = O.easyXDM;
      let V = 'easyXDM_';
      let F;
      let z = false;
      let j;
      let i;
      function D (Y, aa) {
        const Z = _typeof(Y[aa]);
        return Z == 'function' || !!(Z == 'object' && Y[aa]) || Z == 'unknown';
      }
      function v (Y, Z) {
        return !!(_typeof(Y[Z]) == 'object' && Y[Z]);
      }
      function s (Y) {
        return Object.prototype.toString.call(Y) === '[object Array]';
      }
      function c () {
        const aa = 'Shockwave Flash';
        const ae = 'application/x-shockwave-flash';
        if (!u(navigator.plugins) && _typeof(navigator.plugins[aa]) == 'object') {
          const ac = navigator.plugins[aa].description;
          if (ac && !u(navigator.mimeTypes) && navigator.mimeTypes[ae] && navigator.mimeTypes[ae].enabledPlugin) {
            j = ac.match(/\d+/g);
          }
        }
        if (!j) {
          let Z;
          try {
            Z = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
            j = Array.prototype.slice.call(Z.GetVariable('$version').match(/(\d+),(\d+),(\d+),(\d+)/), 1);
            Z = null;
          } catch (ad) {}
        }
        if (!j) {
          return false;
        }
        const Y = parseInt(j[0], 10);
        const ab = parseInt(j[1], 10);
        i = Y > 9 && ab > 0;
        return true;
      }
      let w, y;
      if (D(O, 'addEventListener')) {
        w = function w (aa, Y, Z) {
          aa.addEventListener(Y, Z, false);
        };
        y = function y (aa, Y, Z) {
          aa.removeEventListener(Y, Z, false);
        };
      } else {
        if (D(O, 'attachEvent')) {
          w = function w (Y, aa, Z) {
            Y.attachEvent('on' + aa, Z);
          };
          y = function y (Y, aa, Z) {
            Y.detachEvent('on' + aa, Z);
          };
        } else {
          throw new Error('Browser not supported');
        }
      }
      let X = false;
      const K = [];
      let M;
      if ('readyState' in d) {
        M = d.readyState;
        X = M == 'complete' || ~navigator.userAgent.indexOf('AppleWebKit/') && (M == 'loaded' || M == 'interactive');
      } else {
        X = !!d.body;
      }
      function t () {
        if (X) {
          return;
        }
        X = true;
        for (let Y = 0; Y < K.length; Y++) {
          K[Y]();
        }
        K.length = 0;
      }
      if (!X) {
        if (D(O, 'addEventListener')) {
          w(d, 'DOMContentLoaded', t);
        } else {
          w(d, 'readystatechange', function () {
            if (d.readyState == 'complete') {
              t();
            }
          });
          if (d.documentElement.doScroll && O === top) {
            const h = function h () {
              if (X) {
                return;
              }
              try {
                d.documentElement.doScroll('left');
              } catch (Y) {
                L(h, 1);
                return;
              }
              t();
            };
            h();
          }
        }
        w(O, 'load', t);
      }
      function H (Z, Y) {
        if (X) {
          Z.call(Y);
          return;
        }
        K.push(function () {
          Z.call(Y);
        });
      }
      function n () {
        let aa = parent;
        if (J !== '') {
          for (let Y = 0, Z = J.split('.'); Y < Z.length; Y++) {
            aa = aa[Z[Y]];
          }
        }
        return aa.easyXDM;
      }
      function f (Y) {
        O.easyXDM = N;
        J = Y;
        if (J) {
          V = 'easyXDM_' + J.replace('.', '_') + '_';
        }
        return p;
      }
      function A (Y) {
        return Y.match(R)[3];
      }
      function g (Y) {
        return Y.match(R)[4] || '';
      }
      function k (aa) {
        if (aa.indexOf('file://') >= 0) {
          return 'file://';
        }
        const Y = aa.toLowerCase().match(R);
        if (!Y) {
          return '';
        }
        const ab = Y[2];
        const ac = Y[3];
        let Z = Y[4] || '';
        if (ab == 'http:' && Z == ':80' || ab == 'https:' && Z == ':443') {
          Z = '';
        }
        return ab + '//' + ac + Z;
      }
      function C (Y) {
        Y = Y.replace(G, '$1/');
        if (!Y.match(/^(http||https):\/\//)) {
          let Z = Y.substring(0, 1) === '/' ? '' : q.pathname;
          if (Z.substring(Z.length - 1) !== '/') {
            Z = Z.substring(0, Z.lastIndexOf('/') + 1);
          }
          Y = q.protocol + '//' + q.host + Z + Y;
        }
        while (S.test(Y)) {
          Y = Y.replace(S, '');
        }
        return Y;
      }
      function Q (Y, ab) {
        let ad = '';
        const aa = Y.indexOf('#');
        if (aa !== -1) {
          ad = Y.substring(aa);
          Y = Y.substring(0, aa);
        }
        const ac = [];
        for (const Z in ab) {
          if (ab.hasOwnProperty(Z)) {
            ac.push(Z + '=' + I(ab[Z]));
          }
        }
        return Y + (z ? '#' : Y.indexOf('?') == -1 ? '?' : '&') + ac.join('&') + ad;
      }
      const T = (function (Y) {
        Y = Y.substring(1).split('&');
        const aa = {};
        let ab;
        let Z = Y.length;
        while (Z--) {
          ab = Y[Z].split('=');
          aa[ab[0]] = l(ab[1]);
        }
        return aa;
      }(/xdm_e=/.test(q.search) ? q.search : q.hash));
      function u (Y) {
        return typeof Y === 'undefined';
      }
      var _P = function P () {
        const Z = {};
        let aa = {
          a: [1, 2, 3]
        };
        const Y = '{"a":[1,2,3]}';
        if (typeof JSON !== 'undefined' && typeof JSON.stringify === 'function' && JSON.stringify(aa).replace(/\s/g, '') === Y) {
          return JSON;
        }
        if (Object.toJSON) {
          if (Object.toJSON(aa).replace(/\s/g, '') === Y) {
            Z.stringify = Object.toJSON;
          }
        }
        if (typeof String.prototype.evalJSON === 'function') {
          aa = Y.evalJSON();
          if (aa.a && aa.a.length === 3 && aa.a[2] === 3) {
            Z.parse = function (ab) {
              return ab.evalJSON();
            };
          }
        }
        if (Z.stringify && Z.parse) {
          _P = function P () {
            return Z;
          };
          return Z;
        }
        return null;
      };
      function U (Y, Z, aa) {
        let ac;
        for (const ab in Z) {
          if (Z.hasOwnProperty(ab)) {
            if (ab in Y) {
              ac = Z[ab];
              if (_typeof(ac) === 'object') {
                U(Y[ab], ac, aa);
              } else {
                if (!aa) {
                  Y[ab] = Z[ab];
                }
              }
            } else {
              Y[ab] = Z[ab];
            }
          }
        }
        return Y;
      }
      function a () {
        const Z = d.body.appendChild(d.createElement('form'));
        const Y = Z.appendChild(d.createElement('input'));
        Y.name = V + 'TEST' + o;
        F = Y !== Z.elements[Y.name];
        d.body.removeChild(Z);
      }
      function B (Z) {
        if (u(F)) {
          a();
        }
        let ad;
        if (F) {
          ad = d.createElement('<iframe name="' + Z.props.name + '"/>');
        } else {
          ad = d.createElement('IFRAME');
          ad.name = Z.props.name;
        }
        ad.id = ad.name = Z.props.name;
        delete Z.props.name;
        if (typeof Z.container === 'string') {
          Z.container = d.getElementById(Z.container);
        }
        if (!Z.container) {
          U(ad.style, {
            position: 'absolute',
            top: '-2000px',
            left: '0px'
          });
          Z.container = d.body;
        }
        const ac = Z.props.src;
        Z.props.src = 'javascript:false';
        U(ad, Z.props);
        ad.border = ad.frameBorder = 0;
        ad.allowTransparency = true;
        Z.container.appendChild(ad);
        if (Z.onLoad) {
          w(ad, 'load', Z.onLoad);
        }
        if (Z.usePost) {
          const ab = Z.container.appendChild(d.createElement('form'));
          let Y;
          ab.target = ad.name;
          ab.action = ac;
          ab.method = 'POST';
          if (_typeof(Z.usePost) === 'object') {
            for (const aa in Z.usePost) {
              if (Z.usePost.hasOwnProperty(aa)) {
                if (F) {
                  Y = d.createElement('<input name="' + aa + '"/>');
                } else {
                  Y = d.createElement('INPUT');
                  Y.name = aa;
                }
                Y.value = Z.usePost[aa];
                ab.appendChild(Y);
              }
            }
          }
          ab.submit();
          ab.parentNode.removeChild(ab);
        } else {
          ad.src = ac;
        }
        Z.props.src = ac;
        return ad;
      }
      function e (Y) {
        return Y.replace(/[-[\]/{}()+.\^$|]/g, '\\$&').replace(/(\*)/g, '.$1').replace(/\?/g, '.');
      }
      function W (ac, aa) {
        if (typeof ac === 'string') {
          ac = [ac];
        }
        let Z;
        let Y = ac.length;
        while (Y--) {
          const ab = ac[Y].substr(0, 1) === '^' && ac[Y].substr(ac[Y].length - 1, 1) === '$';
          Z = ab ? ac[Y] : '^' + e(ac[Y]) + '$';
          Z = new RegExp(Z);
          if (Z.test(aa)) {
            return true;
          }
        }
        return false;
      }
      function m (aa) {
        let af = aa.protocol;
        let Z;
        aa.isHost = aa.isHost || u(T.xdm_p);
        z = aa.hash || false;
        if (!aa.props) {
          aa.props = {};
        }
        if (!aa.isHost) {
          aa.channel = T.xdm_c.replace(/["'<>\\]/g, '');
          aa.secret = T.xdm_s;
          aa.remote = T.xdm_e.replace(/["'<>\\]/g, '');
          af = T.xdm_p;
          if (aa.acl && !W(aa.acl, aa.remote)) {
            throw new Error('Access denied for ' + aa.remote);
          }
        } else {
          aa.remote = C(aa.remote);
          aa.channel = aa.channel || 'default' + o++;
          aa.secret = Math.random().toString(16).substring(2);
          if (u(af)) {
            if (k(q.href) == k(aa.remote)) {
              af = '4';
            } else {
              if (D(O, 'postMessage') || D(d, 'postMessage')) {
                af = '1';
              } else {
                if (aa.swf && D(O, 'ActiveXObject') && c()) {
                  af = '6';
                } else {
                  if (navigator.product === 'Gecko' && 'frameElement' in O && navigator.userAgent.indexOf('WebKit') == -1) {
                    af = '5';
                  } else {
                    if (aa.remoteHelper) {
                      af = '2';
                    } else {
                      af = '0';
                    }
                  }
                }
              }
            }
          }
        }
        aa.protocol = af;
        switch (af) {
          case '0':
            U(aa, {
              interval: 100,
              delay: 2000,
              useResize: true,
              useParent: false,
              usePolling: false
            }, true);
            if (aa.isHost) {
              if (!aa.local) {
                const ad = q.protocol + '//' + q.host;
                const Y = d.body.getElementsByTagName('img');
                let ae;
                let ab = Y.length;
                while (ab--) {
                  ae = Y[ab];
                  if (ae.src.substring(0, ad.length) === ad) {
                    aa.local = ae.src;
                    break;
                  }
                }
                if (!aa.local) {
                  aa.local = O;
                }
              }
              const ac = {
                xdm_c: aa.channel,
                xdm_p: 0
              };
              if (aa.local === O) {
                aa.usePolling = true;
                aa.useParent = true;
                aa.local = q.protocol + '//' + q.host + q.pathname + q.search;
                ac.xdm_e = aa.local;
                ac.xdm_pa = 1;
              } else {
                ac.xdm_e = C(aa.local);
              }
              if (aa.container) {
                aa.useResize = false;
                ac.xdm_po = 1;
              }
              aa.remote = Q(aa.remote, ac);
            } else {
              U(aa, {
                useParent: !u(T.xdm_pa),
                usePolling: !u(T.xdm_po),
                useResize: aa.useParent ? false : aa.useResize
              });
            }
            Z = [new p.stack.HashTransport(aa), new p.stack.ReliableBehavior({}), new p.stack.QueueBehavior({
              encode: true,
              maxLength: 4000 - aa.remote.length
            }), new p.stack.VerifyBehavior({
              initiate: aa.isHost
            })];
            break;
          case '1':
            Z = [new p.stack.PostMessageTransport(aa)];
            break;
          case '2':
            if (aa.isHost) {
              aa.remoteHelper = C(aa.remoteHelper);
            }
            Z = [new p.stack.NameTransport(aa), new p.stack.QueueBehavior(), new p.stack.VerifyBehavior({
              initiate: aa.isHost
            })];
            break;
          case '3':
            Z = [new p.stack.NixTransport(aa)];
            break;
          case '4':
            Z = [new p.stack.SameOriginTransport(aa)];
            break;
          case '5':
            Z = [new p.stack.FrameElementTransport(aa)];
            break;
          case '6':
            if (!j) {
              c();
            }
            Z = [new p.stack.FlashTransport(aa)];
            break;
        }
        Z.push(new p.stack.QueueBehavior({
          lazy: aa.lazy,
          remove: true
        }));
        return Z;
      }
      function E (ab) {
        let ac;
        const aa = {
          incoming: function incoming (ae, ad) {
            this.up.incoming(ae, ad);
          },
          outgoing: function outgoing (ad, ae) {
            this.down.outgoing(ad, ae);
          },
          callback: function callback (ad) {
            this.up.callback(ad);
          },
          init: function init () {
            this.down.init();
          },
          destroy: function destroy () {
            this.down.destroy();
          }
        };
        for (let Z = 0, Y = ab.length; Z < Y; Z++) {
          ac = ab[Z];
          U(ac, aa, true);
          if (Z !== 0) {
            ac.down = ab[Z - 1];
          }
          if (Z !== Y - 1) {
            ac.up = ab[Z + 1];
          }
        }
        return ac;
      }
      function x (Y) {
        Y.up.down = Y.down;
        Y.down.up = Y.up;
        Y.up = Y.down = null;
      }
      U(p, {
        version: '2.5.00.1',
        query: T,
        stack: {},
        apply: U,
        getJSONObject: _P,
        whenReady: H,
        noConflict: f
      });
      p.DomHelper = {
        on: w,
        un: y,
        requiresJSON: function requiresJSON (Y) {
          if (!v(O, 'JSON')) {
            d.write('<script type="text/javascript" src="' + Y + '"><\/script>');
          }
        }
      };
      (function () {
        const Y = {};
        p.Fn = {
          set: function set (Z, aa) {
            Y[Z] = aa;
          },
          get: function get (aa, Z) {
            if (!Y.hasOwnProperty(aa)) {
              return;
            }
            const ab = Y[aa];
            if (Z) {
              delete Y[aa];
            }
            return ab;
          }
        };
      })();
      p.Socket = function (Z) {
        const Y = E(m(Z).concat([{
          incoming: function incoming (ac, ab) {
            Z.onMessage(ac, ab);
          },
          callback: function callback (ab) {
            if (Z.onReady) {
              Z.onReady(ab);
            }
          }
        }]));
        const aa = k(Z.remote);
        this.origin = k(Z.remote);
        this.destroy = function () {
          Y.destroy();
        };
        this.postMessage = function (ab) {
          Y.outgoing(ab, aa);
        };
        Y.init();
      };
      p.Rpc = function (aa, Z) {
        if (Z.local) {
          for (const ac in Z.local) {
            if (Z.local.hasOwnProperty(ac)) {
              const ab = Z.local[ac];
              if (typeof ab === 'function') {
                Z.local[ac] = {
                  method: ab
                };
              }
            }
          }
        }
        const Y = E(m(aa).concat([new p.stack.RpcBehavior(this, Z), {
          callback: function callback (ad) {
            if (aa.onReady) {
              aa.onReady(ad);
            }
          }
        }]));
        this.origin = k(aa.remote);
        this.context = aa.context || null;
        this.destroy = function () {
          Y.destroy();
        };
        Y.init();
      };
      p.stack.SameOriginTransport = function (Z) {
        let aa, ac, ab, Y;
        return aa = {
          outgoing: function outgoing (ae, af, ad) {
            ab(ae);
            if (ad) {
              ad();
            }
          },
          destroy: function destroy () {
            if (ac) {
              ac.parentNode.removeChild(ac);
              ac = null;
            }
          },
          onDOMReady: function onDOMReady () {
            Y = k(Z.remote);
            if (Z.isHost) {
              U(Z.props, {
                src: Q(Z.remote, {
                  xdm_e: q.protocol + '//' + q.host + q.pathname,
                  xdm_c: Z.channel,
                  xdm_p: 4
                }),
                name: V + Z.channel + '_provider'
              });
              ac = B(Z);
              p.Fn.set(Z.channel, function (ad) {
                ab = ad;
                L(function () {
                  aa.up.callback(true);
                }, 0);
                return function (ae) {
                  aa.up.incoming(ae, Y);
                };
              });
            } else {
              ab = n().Fn.get(Z.channel, true)(function (ad) {
                aa.up.incoming(ad, Y);
              });
              L(function () {
                aa.up.callback(true);
              }, 0);
            }
          },
          init: function init () {
            H(aa.onDOMReady, aa);
          }
        };
      };
      p.stack.FlashTransport = function (ab) {
        let ad, Y, ae, Z, af;
        function ag (ai, ah) {
          L(function () {
            ad.up.incoming(ai, ae);
          }, 0);
        }
        function aa (ai) {
          const ah = ab.swf + '?host=' + ab.isHost;
          const ak = 'easyXDM_swf_' + Math.floor(Math.random() * 10000);
          p.Fn.set('flash_loaded' + ai.replace(/[\-.]/g, '_'), function () {
            p.stack.FlashTransport[ai].swf = Z = af.firstChild;
            const al = p.stack.FlashTransport[ai].queue;
            for (let am = 0; am < al.length; am++) {
              al[am]();
            }
            al.length = 0;
          });
          if (ab.swfContainer) {
            af = typeof ab.swfContainer === 'string' ? d.getElementById(ab.swfContainer) : ab.swfContainer;
          } else {
            af = d.createElement('div');
            U(af.style, i && ab.swfNoThrottle ? {
              height: '20px',
              width: '20px',
              position: 'fixed',
              right: 0,
              top: 0
            } : {
              height: '1px',
              width: '1px',
              position: 'absolute',
              overflow: 'hidden',
              right: 0,
              top: 0
            });
            d.body.appendChild(af);
          }
          const aj = 'callback=flash_loaded' + I(ai.replace(/[\-.]/g, '_')) + '&proto=' + b.location.protocol + '&domain=' + I(A(b.location.href)) + '&port=' + I(g(b.location.href)) + '&ns=' + I(J);
          af.innerHTML = "<object height='20' width='20' type='application/x-shockwave-flash' id='" + ak + "' data='" + ah + "'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='" + ah + "'></param><param name='flashvars' value='" + aj + "'></param><embed type='application/x-shockwave-flash' FlashVars='" + aj + "' allowScriptAccess='always' wmode='transparent' src='" + ah + "' height='1' width='1'></embed></object>";
        }
        return ad = {
          outgoing: function outgoing (ai, aj, ah) {
            Z.postMessage(ab.channel, ai.toString());
            if (ah) {
              ah();
            }
          },
          destroy: function destroy () {
            try {
              Z.destroyChannel(ab.channel);
            } catch (ah) {}
            Z = null;
            if (Y) {
              Y.parentNode.removeChild(Y);
              Y = null;
            }
          },
          onDOMReady: function onDOMReady () {
            ae = ab.remote;
            p.Fn.set('flash_' + ab.channel + '_init', function () {
              L(function () {
                ad.up.callback(true);
              });
            });
            p.Fn.set('flash_' + ab.channel + '_onMessage', ag);
            ab.swf = C(ab.swf);
            const ai = A(ab.swf);
            const ah = function ah () {
              p.stack.FlashTransport[ai].init = true;
              Z = p.stack.FlashTransport[ai].swf;
              Z.createChannel(ab.channel, ab.secret, k(ab.remote), ab.isHost);
              if (ab.isHost) {
                if (i && ab.swfNoThrottle) {
                  U(ab.props, {
                    position: 'fixed',
                    right: 0,
                    top: 0,
                    height: '20px',
                    width: '20px'
                  });
                }
                U(ab.props, {
                  src: Q(ab.remote, {
                    xdm_e: k(q.href),
                    xdm_c: ab.channel,
                    xdm_p: 6,
                    xdm_s: ab.secret
                  }),
                  name: V + ab.channel + '_provider'
                });
                Y = B(ab);
              }
            };
            if (p.stack.FlashTransport[ai] && p.stack.FlashTransport[ai].init) {
              ah();
            } else {
              if (!p.stack.FlashTransport[ai]) {
                p.stack.FlashTransport[ai] = {
                  queue: [ah]
                };
                aa(ai);
              } else {
                p.stack.FlashTransport[ai].queue.push(ah);
              }
            }
          },
          init: function init () {
            H(ad.onDOMReady, ad);
          }
        };
      };
      p.stack.PostMessageTransport = function (ac) {
        let ae, af, aa, ab;
        function Z (ag) {
          if (ag.origin) {
            return k(ag.origin);
          }
          if (ag.uri) {
            return k(ag.uri);
          }
          if (ag.domain) {
            return q.protocol + '//' + ag.domain;
          }
          throw 'Unable to retrieve the origin of the event';
        }
        function ad (ah) {
          if (typeof ah.data !== 'string') {
            return;
          }
          const ag = Z(ah);
          if (ag == ab && typeof ah.data === 'string' && ah.data.substring(0, ac.channel.length + 1) == ac.channel + ' ') {
            ae.up.incoming(ah.data.substring(ac.channel.length + 1), ag);
          }
        }
        function Y (ag) {
          if (ag.data == ac.channel + '-ready') {
            aa = 'postMessage' in af.contentWindow ? af.contentWindow : af.contentWindow.document;
            y(O, 'message', Y);
            w(O, 'message', ad);
            L(function () {
              ae.up.callback(true);
            }, 0);
          }
        }
        return ae = {
          outgoing: function outgoing (ah, ai, ag) {
            aa.postMessage(ac.channel + ' ' + ah, ai || ab);
            if (ag) {
              ag();
            }
          },
          destroy: function destroy () {
            y(O, 'message', Y);
            y(O, 'message', ad);
            if (af) {
              aa = null;
              af.parentNode.removeChild(af);
              af = null;
            }
          },
          onDOMReady: function onDOMReady () {
            ab = k(ac.remote);
            if (ab === 'file://') {
              ab = '*';
            }
            if (ac.isHost) {
              w(O, 'message', Y);
              U(ac.props, {
                src: Q(ac.remote, {
                  xdm_e: k(q.href),
                  xdm_c: ac.channel,
                  xdm_p: 1
                }),
                name: V + ac.channel + '_provider'
              });
              af = B(ac);
            } else {
              w(O, 'message', ad);
              aa = 'postMessage' in O.parent ? O.parent : O.parent.document;
              aa.postMessage(ac.channel + '-ready', ab);
              L(function () {
                ae.up.callback(true);
              }, 0);
            }
          },
          init: function init () {
            H(ae.onDOMReady, ae);
          }
        };
      };
      p.stack.FrameElementTransport = function (Z) {
        let aa, ac, ab, Y;
        return aa = {
          outgoing: function outgoing (ae, af, ad) {
            ab.call(this, ae);
            if (ad) {
              ad();
            }
          },
          destroy: function destroy () {
            if (ac) {
              ac.parentNode.removeChild(ac);
              ac = null;
            }
          },
          onDOMReady: function onDOMReady () {
            Y = k(Z.remote);
            if (Z.isHost) {
              U(Z.props, {
                src: Q(Z.remote, {
                  xdm_e: k(q.href),
                  xdm_c: Z.channel,
                  xdm_p: 5
                }),
                name: V + Z.channel + '_provider'
              });
              ac = B(Z);
              ac.fn = function (ad) {
                delete ac.fn;
                ab = ad;
                L(function () {
                  aa.up.callback(true);
                }, 0);
                return function (ae) {
                  aa.up.incoming(ae, Y);
                };
              };
            } else {
              if (d.referrer && k(d.referrer) != T.xdm_e) {
                O.top.location = T.xdm_e;
              }
              ab = O.frameElement.fn(function (ad) {
                aa.up.incoming(ad, Y);
              });
              aa.up.callback(true);
            }
          },
          init: function init () {
            H(aa.onDOMReady, aa);
          }
        };
      };
      p.stack.NameTransport = function (ac) {
        let ad;
        let af, aj, ab, ah, ai, Z, Y;
        function ag (am) {
          const al = ac.remoteHelper + (af ? '#_3' : '#_2') + ac.channel;
          aj.contentWindow.sendMessage(am, al);
        }
        function ae () {
          if (af) {
            if (++ah === 2 || !af) {
              ad.up.callback(true);
            }
          } else {
            ag('ready');
            ad.up.callback(true);
          }
        }
        function ak (al) {
          ad.up.incoming(al, Z);
        }
        function aa () {
          if (ai) {
            L(function () {
              ai(true);
            }, 0);
          }
        }
        return ad = {
          outgoing: function outgoing (am, an, al) {
            ai = al;
            ag(am);
          },
          destroy: function destroy () {
            aj.parentNode.removeChild(aj);
            aj = null;
            if (af) {
              ab.parentNode.removeChild(ab);
              ab = null;
            }
          },
          onDOMReady: function onDOMReady () {
            af = ac.isHost;
            ah = 0;
            Z = k(ac.remote);
            ac.local = C(ac.local);
            if (af) {
              p.Fn.set(ac.channel, function (am) {
                if (af && am === 'ready') {
                  p.Fn.set(ac.channel, ak);
                  ae();
                }
              });
              Y = Q(ac.remote, {
                xdm_e: ac.local,
                xdm_c: ac.channel,
                xdm_p: 2
              });
              U(ac.props, {
                src: Y + '#' + ac.channel,
                name: V + ac.channel + '_provider'
              });
              ab = B(ac);
            } else {
              ac.remoteHelper = ac.remote;
              p.Fn.set(ac.channel, ak);
            }
            const al = function al () {
              const am = aj || this;
              y(am, 'load', al);
              p.Fn.set(ac.channel + '_load', aa);
              (function an () {
                if (typeof am.contentWindow.sendMessage === 'function') {
                  ae();
                } else {
                  L(an, 50);
                }
              })();
            };
            aj = B({
              props: {
                src: ac.local + '#_4' + ac.channel
              },
              onLoad: al
            });
          },
          init: function init () {
            H(ad.onDOMReady, ad);
          }
        };
      };
      p.stack.HashTransport = function (aa) {
        let ad;
        let ag,
          ab,
          Y,
          ae,
          an,
          ac,
          am;
        let ah, Z;
        function al (ap) {
          if (!am) {
            return;
          }
          const ao = aa.remote + '#' + an++ + '_' + ap;
          (ag || !ah ? am.contentWindow : am).location = ao;
        }
        function af (ao) {
          ae = ao;
          ad.up.incoming(ae.substring(ae.indexOf('_') + 1), Z);
        }
        function ak () {
          if (!ac) {
            return;
          }
          const ao = ac.location.href;
          let aq = '';
          const ap = ao.indexOf('#');
          if (ap != -1) {
            aq = ao.substring(ap);
          }
          if (aq && aq != ae) {
            af(aq);
          }
        }
        function aj () {
          ab = setInterval(ak, Y);
        }
        return ad = {
          outgoing: function outgoing (ao, ap) {
            al(ao);
          },
          destroy: function destroy () {
            O.clearInterval(ab);
            if (ag || !ah) {
              am.parentNode.removeChild(am);
            }
            am = null;
          },
          onDOMReady: function onDOMReady () {
            ag = aa.isHost;
            Y = aa.interval;
            ae = '#' + aa.channel;
            an = 0;
            ah = aa.useParent;
            Z = k(aa.remote);
            if (ag) {
              U(aa.props, {
                src: aa.remote,
                name: V + aa.channel + '_provider'
              });
              if (ah) {
                aa.onLoad = function () {
                  ac = O;
                  aj();
                  ad.up.callback(true);
                };
              } else {
                let aq = 0;
                const ao = aa.delay / 50;
                (function ap () {
                  if (++aq > ao) {
                    throw new Error('Unable to reference listenerwindow');
                  }
                  try {
                    ac = am.contentWindow.frames[V + aa.channel + '_consumer'];
                  } catch (ar) {}
                  if (ac) {
                    aj();
                    ad.up.callback(true);
                  } else {
                    L(ap, 50);
                  }
                })();
              }
              am = B(aa);
            } else {
              ac = O;
              aj();
              if (ah) {
                am = parent;
                ad.up.callback(true);
              } else {
                U(aa, {
                  props: {
                    src: aa.remote + '#' + aa.channel + new Date(),
                    name: V + aa.channel + '_consumer'
                  },
                  onLoad: function onLoad () {
                    ad.up.callback(true);
                  }
                });
                am = B(aa);
              }
            }
          },
          init: function init () {
            H(ad.onDOMReady, ad);
          }
        };
      };
      p.stack.ReliableBehavior = function (Z) {
        let ab, ad;
        let ac = 0;
        let Y = 0;
        let aa = '';
        return ab = {
          incoming: function incoming (ag, ae) {
            const af = ag.indexOf('_');
            const ah = ag.substring(0, af).split(',');
            ag = ag.substring(af + 1);
            if (ah[0] == ac) {
              aa = '';
              if (ad) {
                ad(true);
              }
            }
            if (ag.length > 0) {
              ab.down.outgoing(ah[1] + ',' + ac + '_' + aa, ae);
              if (Y != ah[1]) {
                Y = ah[1];
                ab.up.incoming(ag, ae);
              }
            }
          },
          outgoing: function outgoing (ag, ae, af) {
            aa = ag;
            ad = af;
            ab.down.outgoing(Y + ',' + ++ac + '_' + ag, ae);
          }
        };
      };
      p.stack.QueueBehavior = function (aa) {
        let ad;
        const ae = [];
        let ah = true;
        let ab = '';
        let ag;
        let Y = 0;
        let Z = false;
        let ac = false;
        function af () {
          if (aa.remove && ae.length === 0) {
            x(ad);
            return;
          }
          if (ah || ae.length === 0 || ag) {
            return;
          }
          ah = true;
          const ai = ae.shift();
          ad.down.outgoing(ai.data, ai.origin, function (aj) {
            ah = false;
            if (ai.callback) {
              L(function () {
                ai.callback(aj);
              }, 0);
            }
            af();
          });
        }
        return ad = {
          init: function init () {
            if (u(aa)) {
              aa = {};
            }
            if (aa.maxLength) {
              Y = aa.maxLength;
              ac = true;
            }
            if (aa.lazy) {
              Z = true;
            } else {
              ad.down.init();
            }
          },
          callback: function callback (aj) {
            ah = false;
            const ai = ad.up;
            af();
            ai.callback(aj);
          },
          incoming: function incoming (al, aj) {
            if (ac) {
              const ak = al.indexOf('_');
              const ai = parseInt(al.substring(0, ak), 10);
              ab += al.substring(ak + 1);
              if (ai === 0) {
                if (aa.encode) {
                  ab = l(ab);
                }
                ad.up.incoming(ab, aj);
                ab = '';
              }
            } else {
              ad.up.incoming(al, aj);
            }
          },
          outgoing: function outgoing (am, aj, al) {
            if (aa.encode) {
              am = I(am);
            }
            const ai = [];
            let ak;
            if (ac) {
              while (am.length !== 0) {
                ak = am.substring(0, Y);
                am = am.substring(ak.length);
                ai.push(ak);
              }
              while (ak = ai.shift()) {
                ae.push({
                  data: ai.length + '_' + ak,
                  origin: aj,
                  callback: ai.length === 0 ? al : null
                });
              }
            } else {
              ae.push({
                data: am,
                origin: aj,
                callback: al
              });
            }
            if (Z) {
              ad.down.init();
            } else {
              af();
            }
          },
          destroy: function destroy () {
            ag = true;
            ad.down.destroy();
          }
        };
      };
      p.stack.VerifyBehavior = function (ac) {
        let ad,
          ab,
          Z;
        function Y () {
          ab = Math.random().toString(16).substring(2);
          ad.down.outgoing(ab);
        }
        return ad = {
          incoming: function incoming (ag, ae) {
            const af = ag.indexOf('_');
            if (af === -1) {
              if (ag === ab) {
                ad.up.callback(true);
              } else {
                if (!Z) {
                  Z = ag;
                  if (!ac.initiate) {
                    Y();
                  }
                  ad.down.outgoing(ag);
                }
              }
            } else {
              if (ag.substring(0, af) === Z) {
                ad.up.incoming(ag.substring(af + 1), ae);
              }
            }
          },
          outgoing: function outgoing (ag, ae, af) {
            ad.down.outgoing(ab + '_' + ag, ae, af);
          },
          callback: function callback (ae) {
            if (ac.initiate) {
              Y();
            }
          }
        };
      };
      p.stack.RpcBehavior = function (ae, Z) {
        let ab;
        const ag = Z.serializer || _P();
        let af = 0;
        const ad = {};
        function Y (ah) {
          ah.jsonrpc = '2.0';
          ab.down.outgoing(ag.stringify(ah));
        }
        function ac (ah, aj) {
          const ai = Array.prototype.slice;
          return function () {
            const ak = arguments.length;
            let am;
            const al = {
              method: aj
            };
            if (ak > 0 && typeof arguments[ak - 1] === 'function') {
              if (ak > 1 && typeof arguments[ak - 2] === 'function') {
                am = {
                  success: arguments[ak - 2],
                  error: arguments[ak - 1]
                };
                al.params = ai.call(arguments, 0, ak - 2);
              } else {
                am = {
                  success: arguments[ak - 1]
                };
                al.params = ai.call(arguments, 0, ak - 1);
              }
              ad['' + ++af] = am;
              al.id = af;
            } else {
              al.params = ai.call(arguments, 0);
            }
            if (ah.namedParams && al.params.length === 1) {
              al.params = al.params[0];
            }
            Y(al);
          };
        }
        function aa (ah, aj, an, al) {
          if (!an) {
            if (aj) {
              Y({
                id: aj,
                error: {
                  code: -32601,
                  message: 'Procedure not found.'
                }
              });
            }
            return;
          }
          let _ao, _am;
          if (aj) {
            _ao = function ao (aq) {
              _ao = r;
              Y({
                id: aj,
                result: aq
              });
            };
            _am = function am (aq, ar) {
              _am = r;
              const at = {
                id: aj,
                error: {
                  code: -32099,
                  message: aq
                }
              };
              if (ar) {
                at.error.data = ar;
              }
              Y(at);
            };
          } else {
            _ao = _am = r;
          }
          if (!s(al)) {
            al = [al];
          }
          try {
            const ak = ae.context || an.scope;
            const ap = an.method.apply(ak, al.concat([_ao, _am]));
            if (!u(ap)) {
              _ao(ap);
            }
          } catch (ai) {
            _am(ai.message);
          }
        }
        return ab = {
          incoming: function incoming (ai, ah) {
            const aj = ag.parse(ai);
            if (aj.method) {
              if (Z.handle) {
                Z.handle(aj, Y);
              } else {
                aa(aj.method, aj.id, Z.local[aj.method], aj.params);
              }
            } else {
              const ak = ad[aj.id];
              if (aj.error) {
                if (ak.error) {
                  ak.error(aj.error);
                }
              } else {
                if (ak.success) {
                  ak.success(aj.result);
                }
              }
              delete ad[aj.id];
            }
          },
          init: function init () {
            if (Z.remote) {
              for (const ah in Z.remote) {
                if (Z.remote.hasOwnProperty(ah)) {
                  ae[ah] = ac(Z.remote[ah], ah);
                }
              }
            }
            ab.down.init();
          },
          destroy: function destroy () {
            for (const ah in Z.remote) {
              if (Z.remote.hasOwnProperty(ah) && ae.hasOwnProperty(ah)) {
                delete ae[ah];
              }
            }
            ab.down.destroy();
          }
        };
      };
      b.easyXDM = p;
    })(window, document, location, window.setTimeout, decodeURIComponent, encodeURIComponent);
    return easyXDM.noConflict('Kakao');
  }());
  const EasyXDM = easyXDM_1;

  const CryptoJS = (function () {
    var CryptoJS = CryptoJS || (function (u, p) {
      const d = {};
      const l = d.lib = {};
      const s = function s () {};
      const t = l.Base = {
        extend: function extend (a) {
          s.prototype = this;
          const c = new s();
          a && c.mixIn(a);
          c.hasOwnProperty('init') || (c.init = function () {
            c.$super.init.apply(this, arguments);
          });
          c.init.prototype = c;
          c.$super = this;
          return c;
        },
        create: function create () {
          const a = this.extend();
          a.init.apply(a, arguments);
          return a;
        },
        init: function init () {},
        mixIn: function mixIn (a) {
          for (const c in a) {
            a.hasOwnProperty(c) && (this[c] = a[c]);
          }
          a.hasOwnProperty('toString') && (this.toString = a.toString);
        },
        clone: function clone () {
          return this.init.prototype.extend(this);
        }
      };
      var r = l.WordArray = t.extend({
        init: function init (a, c) {
          a = this.words = a || [];
          this.sigBytes = c != p ? c : 4 * a.length;
        },
        toString: function toString (a) {
          return (a || v).stringify(this);
        },
        concat: function concat (a) {
          const c = this.words;
          const e = a.words;
          const j = this.sigBytes;
          a = a.sigBytes;
          this.clamp();
          if (j % 4) {
            for (var k = 0; k < a; k++) {
              c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4);
            }
          } else if (e.length > 65535) {
            for (k = 0; k < a; k += 4) {
              c[j + k >>> 2] = e[k >>> 2];
            }
          } else c.push.apply(c, e);
          this.sigBytes += a;
          return this;
        },
        clamp: function clamp () {
          const a = this.words;
          const c = this.sigBytes;
          a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
          a.length = u.ceil(c / 4);
        },
        clone: function clone () {
          const a = t.clone.call(this);
          a.words = this.words.slice(0);
          return a;
        },
        random: function random (a) {
          for (var c = [], e = 0; e < a; e += 4) {
            c.push(4294967296 * u.random() | 0);
          }
          return new r.init(c, a);
        }
      });
      const w = d.enc = {};
      var v = w.Hex = {
        stringify: function stringify (a) {
          const c = a.words;
          a = a.sigBytes;
          for (var e = [], j = 0; j < a; j++) {
            const k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
            e.push((k >>> 4).toString(16));
            e.push((k & 15).toString(16));
          }
          return e.join('');
        },
        parse: function parse (a) {
          for (var c = a.length, e = [], j = 0; j < c; j += 2) {
            e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << 24 - 4 * (j % 8);
          }
          return new r.init(e, c / 2);
        }
      };
      const b = w.Latin1 = {
        stringify: function stringify (a) {
          const c = a.words;
          a = a.sigBytes;
          for (var e = [], j = 0; j < a; j++) {
            e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
          }
          return e.join('');
        },
        parse: function parse (a) {
          for (var c = a.length, e = [], j = 0; j < c; j++) {
            e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
          }
          return new r.init(e, c);
        }
      };
      const x = w.Utf8 = {
        stringify: function stringify (a) {
          try {
            return decodeURIComponent(escape(b.stringify(a)));
          } catch (c) {
            throw Error('Malformed UTF-8 data');
          }
        },
        parse: function parse (a) {
          return b.parse(unescape(encodeURIComponent(a)));
        }
      };
      const q = l.BufferedBlockAlgorithm = t.extend({
        reset: function reset () {
          this._data = new r.init();
          this._nDataBytes = 0;
        },
        _append: function _append (a) {
          typeof a === 'string' && (a = x.parse(a));
          this._data.concat(a);
          this._nDataBytes += a.sigBytes;
        },
        _process: function _process (a) {
          const c = this._data;
          const e = c.words;
          let j = c.sigBytes;
          const k = this.blockSize;
          var b = j / (4 * k);
          var b = a ? u.ceil(b) : u.max((b | 0) - this._minBufferSize, 0);
          a = b * k;
          j = u.min(4 * a, j);
          if (a) {
            for (var q = 0; q < a; q += k) {
              this._doProcessBlock(e, q);
            }
            q = e.splice(0, a);
            c.sigBytes -= j;
          }
          return new r.init(q, j);
        },
        clone: function clone () {
          const a = t.clone.call(this);
          a._data = this._data.clone();
          return a;
        },
        _minBufferSize: 0
      });
      l.Hasher = q.extend({
        cfg: t.extend(),
        init: function init (a) {
          this.cfg = this.cfg.extend(a);
          this.reset();
        },
        reset: function reset () {
          q.reset.call(this);
          this._doReset();
        },
        update: function update (a) {
          this._append(a);
          this._process();
          return this;
        },
        finalize: function finalize (a) {
          a && this._append(a);
          return this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function _createHelper (a) {
          return function (b, e) {
            return new a.init(e).finalize(b);
          };
        },
        _createHmacHelper: function _createHmacHelper (a) {
          return function (b, e) {
            return new n.HMAC.init(a, e).finalize(b);
          };
        }
      });
      var n = d.algo = {};
      return d;
    }(Math));
    (function () {
      const u = CryptoJS;
      const p = u.lib.WordArray;
      u.enc.Base64 = {
        stringify: function stringify (d) {
          let l = d.words;
          const p = d.sigBytes;
          const t = this._map;
          d.clamp();
          d = [];
          for (let r = 0; r < p; r += 3) {
            for (let w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; v < 4 && r + 0.75 * v < p; v++) {
              d.push(t.charAt(w >>> 6 * (3 - v) & 63));
            }
          }
          if (l = t.charAt(64)) {
            for (; d.length % 4;) {
              d.push(l);
            }
          }
          return d.join('');
        },
        parse: function parse (d) {
          let l = d.length;
          const s = this._map;
          var t = s.charAt(64);
          t && (t = d.indexOf(t), t != -1 && (l = t));
          for (var t = [], r = 0, w = 0; w < l; w++) {
            if (w % 4) {
              const v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4);
              const b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
              t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
              r++;
            }
          }
          return p.create(t, r);
        },
        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
      };
    })();
    (function (u) {
      function p (b, n, a, c, e, j, k) {
        b = b + (n & a | ~n & c) + e + k;
        return (b << j | b >>> 32 - j) + n;
      }
      function d (b, n, a, c, e, j, k) {
        b = b + (n & c | a & ~c) + e + k;
        return (b << j | b >>> 32 - j) + n;
      }
      function l (b, n, a, c, e, j, k) {
        b = b + (n ^ a ^ c) + e + k;
        return (b << j | b >>> 32 - j) + n;
      }
      function s (b, n, a, c, e, j, k) {
        b = b + (a ^ (n | ~c)) + e + k;
        return (b << j | b >>> 32 - j) + n;
      }
      for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; x < 64; x++) {
        b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
      }
      r = r.MD5 = v.extend({
        _doReset: function _doReset () {
          this._hash = new w.init([1732584193, 4023233417, 2562383102, 271733878]);
        },
        _doProcessBlock: function _doProcessBlock (q, n) {
          for (var a = 0; a < 16; a++) {
            var c = n + a;
            var e = q[c];
            q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
          }
          var a = this._hash.words;
          var c = q[n + 0];
          var e = q[n + 1];
          const j = q[n + 2];
          const k = q[n + 3];
          const z = q[n + 4];
          const r = q[n + 5];
          const t = q[n + 6];
          const w = q[n + 7];
          const v = q[n + 8];
          const A = q[n + 9];
          const B = q[n + 10];
          const C = q[n + 11];
          const u = q[n + 12];
          const D = q[n + 13];
          const E = q[n + 14];
          const x = q[n + 15];
          var f = a[0];
          var m = a[1];
          var g = a[2];
          var h = a[3];
          var f = p(f, m, g, h, c, 7, b[0]);
          var h = p(h, f, m, g, e, 12, b[1]);
          var g = p(g, h, f, m, j, 17, b[2]);
          var m = p(m, g, h, f, k, 22, b[3]);
          var f = p(f, m, g, h, z, 7, b[4]);
          var h = p(h, f, m, g, r, 12, b[5]);
          var g = p(g, h, f, m, t, 17, b[6]);
          var m = p(m, g, h, f, w, 22, b[7]);
          var f = p(f, m, g, h, v, 7, b[8]);
          var h = p(h, f, m, g, A, 12, b[9]);
          var g = p(g, h, f, m, B, 17, b[10]);
          var m = p(m, g, h, f, C, 22, b[11]);
          var f = p(f, m, g, h, u, 7, b[12]);
          var h = p(h, f, m, g, D, 12, b[13]);
          var g = p(g, h, f, m, E, 17, b[14]);
          var m = p(m, g, h, f, x, 22, b[15]);
          var f = d(f, m, g, h, e, 5, b[16]);
          var h = d(h, f, m, g, t, 9, b[17]);
          var g = d(g, h, f, m, C, 14, b[18]);
          var m = d(m, g, h, f, c, 20, b[19]);
          var f = d(f, m, g, h, r, 5, b[20]);
          var h = d(h, f, m, g, B, 9, b[21]);
          var g = d(g, h, f, m, x, 14, b[22]);
          var m = d(m, g, h, f, z, 20, b[23]);
          var f = d(f, m, g, h, A, 5, b[24]);
          var h = d(h, f, m, g, E, 9, b[25]);
          var g = d(g, h, f, m, k, 14, b[26]);
          var m = d(m, g, h, f, v, 20, b[27]);
          var f = d(f, m, g, h, D, 5, b[28]);
          var h = d(h, f, m, g, j, 9, b[29]);
          var g = d(g, h, f, m, w, 14, b[30]);
          var m = d(m, g, h, f, u, 20, b[31]);
          var f = l(f, m, g, h, r, 4, b[32]);
          var h = l(h, f, m, g, v, 11, b[33]);
          var g = l(g, h, f, m, C, 16, b[34]);
          var m = l(m, g, h, f, E, 23, b[35]);
          var f = l(f, m, g, h, e, 4, b[36]);
          var h = l(h, f, m, g, z, 11, b[37]);
          var g = l(g, h, f, m, w, 16, b[38]);
          var m = l(m, g, h, f, B, 23, b[39]);
          var f = l(f, m, g, h, D, 4, b[40]);
          var h = l(h, f, m, g, c, 11, b[41]);
          var g = l(g, h, f, m, k, 16, b[42]);
          var m = l(m, g, h, f, t, 23, b[43]);
          var f = l(f, m, g, h, A, 4, b[44]);
          var h = l(h, f, m, g, u, 11, b[45]);
          var g = l(g, h, f, m, x, 16, b[46]);
          var m = l(m, g, h, f, j, 23, b[47]);
          var f = s(f, m, g, h, c, 6, b[48]);
          var h = s(h, f, m, g, w, 10, b[49]);
          var g = s(g, h, f, m, E, 15, b[50]);
          var m = s(m, g, h, f, r, 21, b[51]);
          var f = s(f, m, g, h, u, 6, b[52]);
          var h = s(h, f, m, g, k, 10, b[53]);
          var g = s(g, h, f, m, B, 15, b[54]);
          var m = s(m, g, h, f, e, 21, b[55]);
          var f = s(f, m, g, h, v, 6, b[56]);
          var h = s(h, f, m, g, x, 10, b[57]);
          var g = s(g, h, f, m, t, 15, b[58]);
          var m = s(m, g, h, f, D, 21, b[59]);
          var f = s(f, m, g, h, z, 6, b[60]);
          var h = s(h, f, m, g, C, 10, b[61]);
          var g = s(g, h, f, m, j, 15, b[62]);
          var m = s(m, g, h, f, A, 21, b[63]);
          a[0] = a[0] + f | 0;
          a[1] = a[1] + m | 0;
          a[2] = a[2] + g | 0;
          a[3] = a[3] + h | 0;
        },
        _doFinalize: function _doFinalize () {
          let b = this._data;
          let n = b.words;
          let a = 8 * this._nDataBytes;
          let c = 8 * b.sigBytes;
          n[c >>> 5] |= 128 << 24 - c % 32;
          const e = u.floor(a / 4294967296);
          n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
          n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
          b.sigBytes = 4 * (n.length + 1);
          this._process();
          b = this._hash;
          n = b.words;
          for (a = 0; a < 4; a++) {
            c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
          }
          return b;
        },
        clone: function clone () {
          const b = v.clone.call(this);
          b._hash = this._hash.clone();
          return b;
        }
      });
      t.MD5 = v._createHelper(r);
      t.HmacMD5 = v._createHmacHelper(r);
    })(Math);
    (function () {
      const u = CryptoJS;
      var p = u.lib;
      const d = p.Base;
      const l = p.WordArray;
      var p = u.algo;
      const s = p.EvpKDF = d.extend({
        cfg: d.extend({
          keySize: 4,
          hasher: p.MD5,
          iterations: 1
        }),
        init: function init (d) {
          this.cfg = this.cfg.extend(d);
        },
        compute: function compute (d, r) {
          for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q;) {
            n && s.update(n);
            var n = s.update(d).finalize(r);
            s.reset();
            for (let a = 1; a < p; a++) {
              n = s.finalize(n), s.reset();
            }
            b.concat(n);
          }
          b.sigBytes = 4 * q;
          return b;
        }
      });
      u.EvpKDF = function (d, l, p) {
        return s.create(p).compute(d, l);
      };
    })();
    CryptoJS.lib.Cipher || (function (u) {
      var p = CryptoJS;
      const d = p.lib;
      const l = d.Base;
      const s = d.WordArray;
      const t = d.BufferedBlockAlgorithm;
      const r = p.enc.Base64;
      const w = p.algo.EvpKDF;
      const v = d.Cipher = t.extend({
        cfg: l.extend(),
        createEncryptor: function createEncryptor (e, a) {
          return this.create(this._ENC_XFORM_MODE, e, a);
        },
        createDecryptor: function createDecryptor (e, a) {
          return this.create(this._DEC_XFORM_MODE, e, a);
        },
        init: function init (e, a, b) {
          this.cfg = this.cfg.extend(b);
          this._xformMode = e;
          this._key = a;
          this.reset();
        },
        reset: function reset () {
          t.reset.call(this);
          this._doReset();
        },
        process: function process (e) {
          this._append(e);
          return this._process();
        },
        finalize: function finalize (e) {
          e && this._append(e);
          return this._doFinalize();
        },
        keySize: 4,
        ivSize: 4,
        _ENC_XFORM_MODE: 1,
        _DEC_XFORM_MODE: 2,
        _createHelper: function _createHelper (e) {
          return {
            encrypt: function encrypt (b, k, d) {
              return (typeof k === 'string' ? c : a).encrypt(e, b, k, d);
            },
            decrypt: function decrypt (b, k, d) {
              return (typeof k === 'string' ? c : a).decrypt(e, b, k, d);
            }
          };
        }
      });
      d.StreamCipher = v.extend({
        _doFinalize: function _doFinalize () {
          return this._process(!0);
        },
        blockSize: 1
      });
      var b = p.mode = {};
      const x = function x (e, a, b) {
        let c = this._iv;
        c ? this._iv = u : c = this._prevBlock;
        for (let d = 0; d < b; d++) {
          e[a + d] ^= c[d];
        }
      };
      let q = (d.BlockCipherMode = l.extend({
        createEncryptor: function createEncryptor (e, a) {
          return this.Encryptor.create(e, a);
        },
        createDecryptor: function createDecryptor (e, a) {
          return this.Decryptor.create(e, a);
        },
        init: function init (e, a) {
          this._cipher = e;
          this._iv = a;
        }
      })).extend();
      q.Encryptor = q.extend({
        processBlock: function processBlock (e, a) {
          const b = this._cipher;
          const c = b.blockSize;
          x.call(this, e, a, c);
          b.encryptBlock(e, a);
          this._prevBlock = e.slice(a, a + c);
        }
      });
      q.Decryptor = q.extend({
        processBlock: function processBlock (e, a) {
          const b = this._cipher;
          const c = b.blockSize;
          const d = e.slice(a, a + c);
          b.decryptBlock(e, a);
          x.call(this, e, a, c);
          this._prevBlock = d;
        }
      });
      b = b.CBC = q;
      q = (p.pad = {}).Pkcs7 = {
        pad: function pad (a, b) {
          for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4) {
            l.push(d);
          }
          c = s.create(l, c);
          a.concat(c);
        },
        unpad: function unpad (a) {
          a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255;
        }
      };
      d.BlockCipher = v.extend({
        cfg: v.cfg.extend({
          mode: b,
          padding: q
        }),
        reset: function reset () {
          v.reset.call(this);
          var a = this.cfg;
          const b = a.iv;
          var a = a.mode;
          if (this._xformMode == this._ENC_XFORM_MODE) var c = a.createEncryptor; else c = a.createDecryptor, this._minBufferSize = 1;
          this._mode = c.call(a, this, b && b.words);
        },
        _doProcessBlock: function _doProcessBlock (a, b) {
          this._mode.processBlock(a, b);
        },
        _doFinalize: function _doFinalize () {
          const a = this.cfg.padding;
          if (this._xformMode == this._ENC_XFORM_MODE) {
            a.pad(this._data, this.blockSize);
            var b = this._process(!0);
          } else b = this._process(!0), a.unpad(b);
          return b;
        },
        blockSize: 4
      });
      const n = d.CipherParams = l.extend({
        init: function init (a) {
          this.mixIn(a);
        },
        toString: function toString (a) {
          return (a || this.formatter).stringify(this);
        }
      });
      var b = (p.format = {}).OpenSSL = {
        stringify: function stringify (a) {
          const b = a.ciphertext;
          a = a.salt;
          return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r);
        },
        parse: function parse (a) {
          a = r.parse(a);
          const b = a.words;
          if (b[0] == 1398893684 && b[1] == 1701076831) {
            var c = s.create(b.slice(2, 4));
            b.splice(0, 4);
            a.sigBytes -= 16;
          }
          return n.create({
            ciphertext: a,
            salt: c
          });
        }
      };
      var a = d.SerializableCipher = l.extend({
        cfg: l.extend({
          format: b
        }),
        encrypt: function encrypt (a, b, c, d) {
          d = this.cfg.extend(d);
          let l = a.createEncryptor(c, d);
          b = l.finalize(b);
          l = l.cfg;
          return n.create({
            ciphertext: b,
            key: c,
            iv: l.iv,
            algorithm: a,
            mode: l.mode,
            padding: l.padding,
            blockSize: a.blockSize,
            formatter: d.format
          });
        },
        decrypt: function decrypt (a, b, c, d) {
          d = this.cfg.extend(d);
          b = this._parse(b, d.format);
          return a.createDecryptor(c, d).finalize(b.ciphertext);
        },
        _parse: function _parse (a, b) {
          return typeof a === 'string' ? b.parse(a, this) : a;
        }
      });
      var p = (p.kdf = {}).OpenSSL = {
        execute: function execute (a, b, c, d) {
          d || (d = s.random(8));
          a = w.create({
            keySize: b + c
          }).compute(a, d);
          c = s.create(a.words.slice(b), 4 * c);
          a.sigBytes = 4 * b;
          return n.create({
            key: a,
            iv: c,
            salt: d
          });
        }
      };
      var c = d.PasswordBasedCipher = a.extend({
        cfg: a.cfg.extend({
          kdf: p
        }),
        encrypt: function encrypt (b, c, d, l) {
          l = this.cfg.extend(l);
          d = l.kdf.execute(d, b.keySize, b.ivSize);
          l.iv = d.iv;
          b = a.encrypt.call(this, b, c, d.key, l);
          b.mixIn(d);
          return b;
        },
        decrypt: function decrypt (b, c, d, l) {
          l = this.cfg.extend(l);
          c = this._parse(c, l.format);
          d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
          l.iv = d.iv;
          return a.decrypt.call(this, b, c, d.key, l);
        }
      });
    }());
    (function () {
      for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; c < 256; c++) {
        a[c] = c < 128 ? c << 1 : c << 1 ^ 283;
      }
      for (var e = 0, j = 0, c = 0; c < 256; c++) {
        var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4;
        var k = k >>> 8 ^ k & 255 ^ 99;
        l[e] = k;
        s[k] = e;
        const z = a[e];
        const F = a[z];
        const G = a[F];
        let y = 257 * a[k] ^ 16843008 * k;
        t[e] = y << 24 | y >>> 8;
        r[e] = y << 16 | y >>> 16;
        w[e] = y << 8 | y >>> 24;
        v[e] = y;
        y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;
        b[k] = y << 24 | y >>> 8;
        x[k] = y << 16 | y >>> 16;
        q[k] = y << 8 | y >>> 24;
        n[k] = y;
        e ? (e = z ^ a[a[a[G ^ z]]], j ^= a[a[j]]) : e = j = 1;
      }
      const H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
      var d = d.AES = p.extend({
        _doReset: function _doReset () {
          for (var a = this._key, c = a.words, d = a.sigBytes / 4, a = 4 * ((this._nRounds = d + 6) + 1), e = this._keySchedule = [], j = 0; j < a; j++) {
            if (j < d) e[j] = c[j]; else {
              var k = e[j - 1];
              j % d ? d > 6 && j % d == 4 && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
              e[j] = e[j - d] ^ k;
            }
          }
          c = this._invKeySchedule = [];
          for (d = 0; d < a; d++) {
            j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = d < 4 || j <= 4 ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]];
          }
        },
        encryptBlock: function encryptBlock (a, b) {
          this._doCryptBlock(a, b, this._keySchedule, t, r, w, v, l);
        },
        decryptBlock: function decryptBlock (a, c) {
          let d = a[c + 1];
          a[c + 1] = a[c + 3];
          a[c + 3] = d;
          this._doCryptBlock(a, c, this._invKeySchedule, b, x, q, n, s);
          d = a[c + 1];
          a[c + 1] = a[c + 3];
          a[c + 3] = d;
        },
        _doCryptBlock: function _doCryptBlock (a, b, c, d, e, j, l, f) {
          for (var m = this._nRounds, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++) {
            var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++];
            var s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++];
            var t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++];
            var n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++];
            var g = q;
            var h = s;
            var k = t;
          }
          q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];
          s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];
          t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];
          n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];
          a[b] = q;
          a[b + 1] = s;
          a[b + 2] = t;
          a[b + 3] = n;
        },
        keySize: 8
      });
      u.AES = p._createHelper(d);
    })();
    return CryptoJS;
  }());
  const crypto = CryptoJS;

  function getAppKey () {
    return getAppKey$1();
  }
  let accessToken$1 = null;
  function getAccessToken () {
    if (accessToken$1 === null) {
      accessToken$1 = retrieveItem(getAccessTokenKey());
    }
    return accessToken$1;
  }
  function setAccessToken (token) {
    const persist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    accessToken$1 = token;
    if (token === null || persist === false) {
      removeItem(getAccessTokenKey());
    } else {
      storeItem(getAccessTokenKey(), token);
    }
  }
  function getRefreshToken () {
    console.error('unsupported operation: Auth.getRefreshToken()');
    return '';
  }
  function setRefreshToken (token) {
    console.error('unsupported operation: Auth.setRefreshToken()');
  }
  function storeItem (key, value) {
    const item = encrypt(value, getAppKey());
    localStorage.setItem(key, item);
  }
  function retrieveItem (key) {
    const item = localStorage.getItem(key);
    return item ? decrypt(item, getAppKey()) : null;
  }
  function removeItem (key) {
    localStorage.removeItem(key);
  }
  const tokenStorageKeys = {};
  function getAccessTokenKey () {
    if (!tokenStorageKeys.accessTokenKey) {
      tokenStorageKeys.accessTokenKey = 'kakao_' + hash('kat' + getAppKey());
    }
    return tokenStorageKeys.accessTokenKey;
  }
  function hash (msg) {
    return crypto.MD5(msg).toString();
  }
  function encrypt (msg, passphrase) {
    return crypto.AES.encrypt(msg, passphrase).toString();
  }
  function decrypt (encrypted, passphrase) {
    return crypto.AES.decrypt(encrypted, passphrase).toString(crypto.enc.Utf8);
  }

  const secret = /* #__PURE__ */Object.freeze({
    __proto__: null,
    getAppKey: getAppKey,
    getAccessToken: getAccessToken,
    setAccessToken: setAccessToken,
    getRefreshToken: getRefreshToken,
    setRefreshToken: setRefreshToken
  });

  function accessToken () {
    return 'Bearer '.concat(getAccessToken());
  }
  function appKey () {
    return 'KakaoAK '.concat(getAppKey());
  }

  const postApiCommonParams = {
    permission: isOneOf(['A', 'F', 'M']),
    enable_share: isBoolean,
    android_exec_param: isString,
    ios_exec_param: isString,
    android_market_param: isString,
    ios_market_param: isString
  };
  const secureResource = {
    secure_resource: isBoolean
  };
  function forceSecureResource (settings) {
    if (settings.secure_resource === false) {
      if (console) {
        console.warn('KakaoWarning: The secure_resource parameter is deprecated.');
      }
      settings.secure_resource = true;
    }
  }
  function storyActivityContentValidator (obj) {
    if (!isString(obj)) {
      return false;
    }
    if (obj.length === 0 || obj.length > 2048) {
      throw new KakaoError('content length should be between 0 and 2048');
    }
    return true;
  }
  function kageImageUrlListValidator (obj) {
    if (!isArray$1(obj)) {
      return false;
    }
    return every(obj, function (path) {
      if (!isString(path)) {
        return false;
      }
      if (isURL(path)) {
        throw new KakaoError("url in image_url_list should be a kage url, obtained from '/v1/api/story/upload/multi'.");
      }
      return true;
    });
  }
  function hasHeaderBackgroundImage (obj) {
    if (obj.header_image_url || obj.header_image_width || obj.header_image_height) {
      delete obj.header_image_url;
      delete obj.header_image_width;
      delete obj.header_image_height;
      if (console) {
        console.warn('KakaoWarning: The parameters ('.concat(['header_image_url', 'header_image_width', 'header_image_height'].join(', '), ') for header background image are deprecated.'));
      }
    }
    return true;
  }
  const apiRules = {
    '/v1/user/signup': {
      method: 'post',
      data: {
        optional: {
          properties: isObject
        }
      }
    },
    '/v1/user/unlink': {
      method: 'post'
    },
    '/v2/user/me': {
      method: 'get',
      data: {
        optional: _objectSpread2({
          property_keys: isArray$1
        }, secureResource)
      }
    },
    '/v1/user/logout': {
      method: 'post',
      data: {}
    },
    '/v1/user/update_profile': {
      method: 'post',
      data: {
        required: {
          properties: isObject
        }
      }
    },
    '/v1/user/access_token_info': {
      method: 'get',
      data: {}
    },
    '/v2/user/scopes': {
      method: 'get',
      data: {
        optional: {
          scopes: isArray$1
        }
      }
    },
    '/v2/user/revoke/scopes': {
      method: 'post',
      data: {
        required: {
          scopes: isArray$1
        }
      }
    },
    '/v1/user/service/terms': {
      method: 'get'
    },
    '/v1/user/shipping_address': {
      method: 'get',
      data: {
        optional: {
          address_id: isInteger,
          from_updated_at: isInteger,
          page_size: isInteger
        }
      }
    },
    '/v1/api/talk/profile': {
      method: 'get',
      data: {
        optional: secureResource,
        after: forceSecureResource
      }
    },
    '/v1/api/talk/friends': {
      method: 'get',
      data: {
        optional: _objectSpread2({
          offset: isInteger,
          limit: isInteger,
          order: isString,
          friend_order: isString
        }, secureResource),
        after: forceSecureResource
      }
    },
    '/v1/friends': {
      method: 'get',
      data: {
        optional: _objectSpread2({
          offset: isInteger,
          limit: isInteger,
          order: isString,
          friend_order: isString
        }, secureResource),
        after: forceSecureResource
      }
    },
    '/v2/api/talk/memo/send': {
      method: 'post',
      data: {
        required: {
          template_id: isInteger
        },
        optional: {
          template_args: isObject
        }
      }
    },
    '/v2/api/talk/memo/scrap/send': {
      method: 'post',
      data: {
        required: {
          request_url: isString
        },
        optional: {
          template_id: isInteger,
          template_args: isObject
        }
      }
    },
    '/v2/api/talk/memo/default/send': {
      method: 'post',
      data: {
        required: {
          template_object: function template_object (obj) {
            return isObject(obj) && hasHeaderBackgroundImage(obj);
          }
        }
      }
    },
    '/v1/api/talk/friends/message/send': {
      method: 'post',
      data: {
        required: {
          template_id: isInteger,
          receiver_uuids: isArray$1,
          receiver_id_type: isString
        },
        optional: {
          template_args: isObject
        },
        defaults: function defaults () {
          return {
            receiver_id_type: 'uuid'
          };
        }
      }
    },
    '/v1/api/talk/friends/message/scrap/send': {
      method: 'post',
      data: {
        required: {
          request_url: isString,
          receiver_uuids: isArray$1,
          receiver_id_type: isString
        },
        optional: {
          template_id: isInteger,
          template_args: isObject
        },
        defaults: function defaults () {
          return {
            receiver_id_type: 'uuid'
          };
        }
      }
    },
    '/v1/api/talk/friends/message/default/send': {
      method: 'post',
      data: {
        required: {
          template_object: function template_object (obj) {
            return isObject(obj) && hasHeaderBackgroundImage(obj);
          },
          receiver_uuids: isArray$1,
          receiver_id_type: isString
        },
        defaults: function defaults () {
          return {
            receiver_id_type: 'uuid'
          };
        }
      }
    },
    '/v2/api/kakaolink/talk/template/validate': {
      method: 'get',
      data: {
        required: {
          link_ver: isString,
          template_id: isInteger
        },
        optional: {
          template_args: isObject
        }
      },
      authType: appKey
    },
    '/v2/api/kakaolink/talk/template/scrap': {
      method: 'get',
      data: {
        required: {
          link_ver: isString,
          request_url: isString
        },
        optional: {
          template_id: isInteger,
          template_args: isObject
        }
      },
      authType: appKey
    },
    '/v2/api/kakaolink/talk/template/default': {
      method: 'get',
      data: {
        required: {
          link_ver: isString,
          template_object: isObject
        }
      },
      authType: appKey
    },
    '/v2/api/talk/message/image/upload': {
      method: 'post',
      data: {
        required: {
          file: isObject
        }
      },
      authType: appKey
    },
    '/v2/api/talk/message/image/delete': {
      method: 'delete',
      data: {
        required: {
          image_url: isString
        }
      },
      authType: appKey
    },
    '/v2/api/talk/message/image/scrap': {
      method: 'post',
      data: {
        required: {
          image_url: isString
        }
      },
      authType: appKey
    },
    '/v1/api/story/profile': {
      method: 'get',
      data: {
        optional: secureResource
      }
    },
    '/v1/api/story/isstoryuser': {
      method: 'get'
    },
    '/v1/api/story/mystory': {
      method: 'get',
      data: {
        required: {
          id: isString
        }
      }
    },
    '/v1/api/story/mystories': {
      method: 'get',
      data: {
        optional: {
          last_id: isString
        }
      }
    },
    '/v1/api/story/linkinfo': {
      method: 'get',
      data: {
        required: {
          url: isString
        }
      }
    },
    '/v1/api/story/post/note': {
      method: 'post',
      data: {
        required: {
          content: storyActivityContentValidator
        },
        optional: postApiCommonParams
      }
    },
    '/v1/api/story/post/photo': {
      method: 'post',
      data: {
        required: {
          image_url_list: kageImageUrlListValidator
        },
        optional: _objectSpread2({
          content: storyActivityContentValidator
        }, postApiCommonParams)
      }
    },
    '/v1/api/story/post/link': {
      method: 'post',
      data: {
        required: {
          link_info: isObject
        },
        optional: _objectSpread2({
          content: storyActivityContentValidator
        }, postApiCommonParams)
      }
    },
    '/v1/api/story/upload/multi': {
      method: 'post',
      data: {}
    },
    '/v1/api/story/delete/mystory': {
      method: 'delete',
      data: {
        required: {
          id: isString
        }
      }
    },
    '/v1/api/talk/channels': {
      method: 'get',
      data: {
        optional: {
          channel_public_ids: isArray$1
        }
      }
    },
    '/v1/api/talk/plusfriends': {
      method: 'get',
      data: {
        optional: {
          plus_friend_public_ids: isArray$1
        }
      }
    }
  };
  const rules$7 = {
    request: {
      required: {
        url: function url (_url) {
          return isOneOf(keys(apiRules))(_url);
        }
      },
      optional: {
        data: isObject,
        files: function files (obj) {
          return passesOneOf([isArray$1, isFileList])(obj) && every(obj, passesOneOf([isFile, isBlob]));
        },
        file: isFile,
        success: isFunction,
        fail: isFunction,
        always: isFunction
      },
      defaults: {
        data: {},
        success: emptyFunc,
        fail: emptyFunc,
        always: emptyFunc
      }
    },
    api: apiRules
  };

  let proxyForRequest = null;
  function request$5 (settings) {
    settings = processRules(settings, rules$7.request, 'API.request');
    const url = settings.url;
    const urlRule = rules$7.api[url].data;
    if (urlRule) {
      settings.data = processRules(settings.data, urlRule, 'API.request - '.concat(url));
    }
    if (!proxyForRequest) {
      proxyForRequest = getProxy$1();
      cleanups$7.push(function () {
        proxyForRequest.destroy();
        proxyForRequest = null;
      });
    }
    return new es6Promise.exports.Promise(function (resolve, reject) {
      getConfig(settings).then(function (config) {
        proxyForRequest.request(config, function (res) {
          settings.success(res);
          settings.always(res);
          resolve(res);
        }, function (xdmError) {
          const error = parseXdmError(xdmError);
          settings.fail(error);
          settings.always(error);
          reject(error);
        });
      }, function (error) {
        reject(error);
      });
    });
  }
  function getProxy$1 () {
    return guardCreateEasyXDM(function () {
      return new EasyXDM.Rpc({
        remote: URL.apiRemote
      }, {
        remote: {
          request: {}
        }
      });
    });
  }
  function parseXdmError (xdmError) {
    try {
      logDebug(xdmError);
      return JSON.parse(xdmError.message.responseText);
    } catch (e) {
      return {
        code: -777,
        msg: 'Unknown error'
      };
    }
  }
  function getConfig (settings) {
    const url = settings.url;
    const urlSpec = rules$7.api[url];
    const stringifiedData = {};
    forEach(settings.data, function (value, key) {
      stringifiedData[key] = isString(value) ? value : JSON.stringify(value);
    });
    const config = {
      url: url,
      method: urlSpec.method,
      headers: {
        KA: KAKAO_AGENT,
        Authorization: (urlSpec.authType || accessToken)(),
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache'
      },
      data: stringifiedData
    };
    return new es6Promise.exports.Promise(function (resolve, reject) {
      if (isFileRequired(url) || settings.data.file) {
        const files = settings.files || settings.data.file;
        if (!files) {
          throw new KakaoError("'files' parameter should be set for ".concat(url));
        }
        getFileConfig(files).then(function (fileConfig) {
          const searchParams = [];
          for (const prop in stringifiedData) {
            if (prop !== 'file') {
              searchParams.push(''.concat(prop, '=').concat(encodeURIComponent(stringifiedData[prop])));
            }
          }
          if (searchParams.length > 0) {
            config.url += '?'.concat(searchParams.join('&'));
          }
          config.file = fileConfig;
          resolve(config);
        }, function (error) {
          reject(error);
        });
      } else {
        resolve(config);
      }
    });
  }
  function isFileRequired (url) {
    return url === '/v1/api/story/upload/multi' || url === '/v2/api/talk/message/image/upload';
  }
  function getFileConfig (files) {
    const serializePromises = map(files, function (file) {
      return serializeFile(file).then(function (serialized) {
        return {
          name: file.name,
          type: file.type,
          str: serialized
        };
      });
    });
    return new es6Promise.exports.Promise(function (resolve, reject) {
      es6Promise.exports.Promise.all(serializePromises).then(function (serializedFiles) {
        resolve({
          paramName: 'file',
          data: serializedFiles
        });
      }, function (error) {
        reject(error);
      });
    });
  }
  function serializeFile (file) {
    return new es6Promise.exports.Promise(function (resolve, reject) {
      if (typeof FileReader === 'undefined') {
        reject(new KakaoError('File API is not supported for this browser.'));
      }
      const fileReader = new FileReader();
      fileReader.onload = function (e) {
        try {
          resolve(ab2str(e.target.result));
        } catch (e) {
          reject(e);
        }
      };
      fileReader.onerror = function (e) {
        reject(new KakaoError('Cannot read file: '.concat(file.name)));
      };
      fileReader.readAsArrayBuffer(file);
    });
  }
  var cleanups$7 = [];
  function cleanup$8 () {
    emptyCleanups(cleanups$7);
  }

  const request$6 = /* #__PURE__ */Object.freeze({
    __proto__: null,
    request: request$5,
    cleanup: cleanup$8
  });

  function getProxy (config, onResponse) {
    extend(config, {
      remote: URL.loginWidget,
      channel: getRandomString()
    });
    return guardCreateEasyXDM(function () {
      const proxy = new EasyXDM.Rpc(config, {
        local: {
          postResponse: onResponse,
          getKakaoAgent: function getKakaoAgent () {
            return KAKAO_AGENT;
          }
        },
        remote: {
          getCode: {},
          getAccessToken: {},
          setClient: {},
          setStateToken: {},
          deleteAuthCookie: {}
        }
      });
      proxy.channel = config.channel;
      return proxy;
    });
  }

  const POPUP_NAME = '_blank';
  const POPUP_FEATURES$1 = 'width=380, height=520, scrollbars=yes';
  const ANDROID_WV = /Version\/4.0/i.test(UA.ua) || /; wv\)/i.test(UA.ua);
  const ANDROID_WV_ALLOWLIST = /naver\(inapp|daumapps|ebay/g.test(UA.ua) || (typeof daumApps === 'undefined' ? 'undefined' : _typeof(daumApps)) === 'object';
  function login$2 (stateToken, fallbackUrl, authParams, redirectUri) {
    if (!isSupport()) {
      return;
    }
    let popup = null;
    if (UA.os.ios) {
      const iosLoginScheme = getIosLoginScheme(stateToken, authParams);
      const universalLink = ''.concat(URL.universalKakaoLink).concat(encodeURIComponent(iosLoginScheme), '&web=').concat(encodeURIComponent(fallbackUrl));
      if (redirectUri) {
        location.href = universalLink;
      } else {
        popup = windowOpen(universalLink, POPUP_NAME, POPUP_FEATURES$1);
      }
    } else if (UA.os.android) {
      const androidLoginIntent = getAndroidLoginIntent(stateToken, fallbackUrl, authParams);
      if (redirectUri) {
        location.href = androidLoginIntent;
      } else if (UA.browser.version.major > 40 && (
        !ANDROID_WV || ANDROID_WV && ANDROID_WV_ALLOWLIST)) {
        popup = windowOpen(androidLoginIntent, POPUP_NAME, POPUP_FEATURES$1);
      } else {
        popup = windowOpen('', POPUP_NAME, POPUP_FEATURES$1);
        if (popup) {
          popup.addEventListener('unload', function () {
            setTimeout(function () {
              if (popup && popup.location) {
                popup.location.href = fallbackUrl;
              }
            }, 10);
          });
          popup.location.href = androidLoginIntent;
        }
      }
    }
    return popup;
  }
  function isSupport () {
    if (UA.os.ios) {
      const iOSBrowser = /safari|FxiOS|CriOS/.test(UA.ua);
      return iOSBrowser || !isTalkWebview;
    } else if (UA.os.android) {
      return UA.browser.chrome && !/opr\//i.test(UA.ua) && UA.browser.version.major >= 30 && (
        !ANDROID_WV || ANDROID_WV && ANDROID_WV_ALLOWLIST);
    }
    return false;
  }
  function getIosLoginScheme (stateToken, authParams) {
    authParams.state = stateToken;
    const params = {
      client_id: getAppKey$1(),
      redirect_uri: URL.redirectUri,
      params: JSON.stringify(authParams)
    };
    return ''.concat(URL.talkLoginScheme, '?').concat(buildQueryString(params));
  }
  function getAndroidLoginIntent (stateToken, fallbackUrl, authParams) {
    return ['intent:#Intent', 'action=com.kakao.talk.intent.action.CAPRI_LOGGED_IN_ACTIVITY', 'launchFlags=0x08880000', 'S.com.kakao.sdk.talk.appKey='.concat(getAppKey$1()), 'S.com.kakao.sdk.talk.redirectUri='.concat(URL.talkLoginRedirectUri), 'S.com.kakao.sdk.talk.state='.concat(stateToken), 'S.com.kakao.sdk.talk.kaHeader='.concat(KAKAO_AGENT), 'S.com.kakao.sdk.talk.extraparams='.concat(encodeURIComponent(JSON.stringify(authParams))), 'S.browser_fallback_url='.concat(encodeURIComponent(fallbackUrl)), 'end;'].join(';');
  }
  const kakaotalk = {
    login: login$2,
    isSupport: isSupport
  };

  const poller$1 = new Poller(1000, 600);
  const RESERVED_REDIRECT_URI = 'kakaojs';
  function createLoginButton (settings) {
    settings = processRules(settings, rules$8.createLoginButton, 'Auth.createLoginButton');
    const container$ = getElement(settings.container);
    if (!container$) {
      throw new KakaoError('container is required for Kakao login button: pass in element or id');
    }
    const buttonSize = settings.size === 'medium' ? '02' : settings.size === 'small' ? '03' : '01';
    const buttonUrl = ''.concat(URL.authDomain, '/public/widget/login/').concat(settings.lang, '/').concat(settings.lang, '_').concat(buttonSize, '_medium');
    const buttonImage = ''.concat(buttonUrl, '.png');
    const hoverButtonImage = ''.concat(buttonUrl, '_press.png');
    container$.innerHTML = '<img\n    id="kakao-login-btn"\n    src='.concat(buttonImage, "\n    onmouseover=this.src='").concat(hoverButtonImage, "'\n    onmouseout=this.src='").concat(buttonImage, "'\n    style=\"cursor: pointer\"\n  />");
    const clickHandler = function clickHandler () {
      doLogin(settings);
    };
    addEvent(container$, 'click', clickHandler);
    cleanups$6.push(function () {
      removeEvent(container$, 'click', clickHandler);
    });
  }
  function login (settings) {
    settings = processRules(settings, rules$8.login, 'Auth.login');
    doLogin(settings);
  }
  function doLogin (settings) {
    const stateToken = getRandomString() + getRandomString();
    if (kakaotalk.isSupport() && settings.throughTalk) {
      loginThroughTalk(settings, stateToken);
    } else if (settings.redirectUri) {
      location.href = redirectLoginThroughWeb(settings);
    } else if (isNewerAndroidKakaoTalkWebView()) {
      const params = extend({}, makeAuthParams(settings), makeAuthExtraParams(settings), {
        redirect_uri: URL.talkLoginRedirectUri,
        response_type: 'code',
        state: stateToken,
        ka: KAKAO_AGENT,
        origin: origin
      });
      const loginUrl = makeAuthUrl(params);
      loginThroughTalk(settings, stateToken, loginUrl);
    } else {
      if (!(UA.browser.msie && parseInt(UA.browser.version.major) <= 9)) {
        addLoginEvent(settings);
      }
      const _loginUrl = loginThroughWeb(settings, stateToken);
      openLoginPopup(_loginUrl);
    }
    eventObserver.dispatch('LOGIN_START');
  }
  function addLoginEvent (settings) {
    const messageHandler = function messageHandler (_ref) {
      const origin = _ref.origin;
      const data = _ref.data;
      if (/\.kakao\.com$/.test(origin) && data && typeof data === 'string') {
        const arr = data.split(' ');
        if (arr[1] === 'postResponse') {
          const resp = JSON.parse(decodeURIComponent(arr[2]));
          handleAuthResponse(settings, resp);
          removeEvent(window, 'message', messageHandler);
        }
      }
    };
    addEvent(window, 'message', messageHandler);
    cleanups$6.push(function () {
      removeEvent(window, 'message', messageHandler);
    });
  }
  function loginForm (settings) {
    settings = processRules(settings, rules$8.login, 'Auth.loginForm');
    const stateToken = getRandomString() + getRandomString();
    const reauthQueryString = '&prompt=login';
    if (settings.redirectUri) {
      location.href = ''.concat(redirectLoginThroughWeb(settings)).concat(reauthQueryString);
    } else {
      const loginUrl = ''.concat(loginThroughWeb(settings, stateToken)).concat(reauthQueryString);
      openLoginPopup(loginUrl);
    }
  }
  function autoLogin (settings) {
    settings = processRules(settings, rules$8.autoLogin, 'Auth.autoLogin');
    if (isIOSKakaoTalkWebView() || isAndroidKakaoTalkWebView()) {
      const stateToken = getRandomString() + getRandomString();
      const params = extend({}, makeAuthParams(settings), {
        redirect_uri: URL.talkLoginRedirectUri,
        response_type: 'code',
        state: stateToken,
        ka: KAKAO_AGENT,
        origin: origin,
        prompt: 'none'
      });
      const loginUrl = makeAuthUrl(params);
      loginThroughTalk(settings, stateToken, loginUrl);
    } else {
      runAuthCallback(settings, {
        error: 'auto_login',
        error_description: 'Kakao.Auth.autoLogin is only supported by KakaoTalk InAppBrowser',
        error_code: '400',
        status: 'error'
      });
    }
    eventObserver.dispatch('LOGIN_START');
  }
  let popupForTalk = null;
  const closePopup = function closePopup () {
    popupForTalk && popupForTalk.close && popupForTalk.close();
    popupForTalk = null;
  };
  let proxyForTalk = null;
  let prevCode = null;
  function loginThroughTalk (settings, stateToken, talkLoginUrl) {
    if (!proxyForTalk) {
      proxyForTalk = getProxy({}, function (response) {
        if (response.status === 'error' && response.error_code && response.error_code !== '300') {
          poller$1.stop();
          if (response.error_code === '700') {
            location.href = ''.concat(URL.authDomain, '/error/network');
          }
          handleAuthResponse(settings, {
            error: response.error,
            error_description: response.error_description
          });
        }
        if (response.status) {
          if (response.status === 'ok') {
            poller$1.stop();
            if (prevCode === response.code) {
              return;
            } else {
              prevCode = response.code;
            }
            proxyForTalk.getAccessToken(response.code, getAppKey$1(), UA.os.ios && !talkLoginUrl ? URL.redirectUri : URL.talkLoginRedirectUri, settings.approvalType);
            closePopup();
          } else {
            if (UA.os.ios && popupForTalk.location.href === 'about:blank') {
              closePopup();
            }
          }
        } else {
          handleAuthResponse(settings, response);
        }
      });
      cleanups$6.push(function () {
        proxyForTalk.destroy();
        proxyForTalk = null;
      });
    }
    let fallbackUrl = '';
    if (talkLoginUrl) {
      if (settings.redirectUri) {
        location.href = talkLoginUrl;
      } else {
        openLoginPopup(talkLoginUrl);
      }
    } else {
      fallbackUrl = settings.redirectUri ? redirectLoginThroughWeb(settings) : loginThroughWeb(settings, stateToken, UA.os.ios ? URL.redirectUri : URL.talkLoginRedirectUri);
      const params = extend({}, makeAuthParams(settings), makeAuthExtraParams(settings));
      setTimeout(function () {
        popupForTalk = kakaotalk.login(stateToken, fallbackUrl, params, settings.redirectUri);
      }, 500);
    }
    poller$1.start(function () {
      if (stateToken) {
        proxyForTalk.getCode(stateToken, getAppKey$1(), KAKAO_AGENT);
      }
    }, function () {
      handleAuthResponse(settings, {
        error: 'timeout',
        description: 'Account login timed out. Please login again.',
        error_description: 'Account login timed out. Please login again.'
      });
      if (settings.redirectUri) {
        location.href = fallbackUrl;
      } else {
        openLoginPopup(fallbackUrl);
      }
    });
  }
  let proxyForWeb = null;
  const savedSettingsForWeb = {};
  function loginThroughWeb (settings, stateToken, fallbackUrl) {
    if (!proxyForWeb) {
      proxyForWeb = getProxy({}, function (response) {
        const savedSettings = getSavedSettingsWithResponseState(response, savedSettingsForWeb);
        handleAuthResponse(savedSettings, response);
      });
      cleanups$6.push(function () {
        proxyForWeb.destroy();
        proxyForWeb = null;
      });
    }
    savedSettingsForWeb[stateToken] = settings;
    const redirectUri = settings.redirectUri ? settings.redirectUri : fallbackUrl || RESERVED_REDIRECT_URI;
    const params = extend({}, makeAuthParams(settings), makeAuthExtraParams(settings), {
      redirect_uri: redirectUri,
      response_type: 'code',
      state: stateToken,
      proxy: 'easyXDM_Kakao_'.concat(proxyForWeb.channel, '_provider'),
      ka: KAKAO_AGENT,
      origin: origin
    });
    return makeAuthUrl(params);
  }
  function redirectLoginThroughWeb (settings) {
    const params = extend({}, makeAuthParams(settings), makeAuthExtraParams(settings), {
      redirect_uri: settings.redirectUri,
      response_type: 'code',
      ka: KAKAO_AGENT,
      origin: origin
    });
    return makeAuthUrl(params);
  }
  function getSavedSettingsWithResponseState (response, settings) {
    if (!settings[response.stateToken]) {
      throw new KakaoError('security error: #CST2');
    }
    const savedSettings = settings[response.stateToken];
    delete settings[response.stateToken];
    delete response.stateToken;
    return savedSettings;
  }
  function handleAuthResponse (settings, resp) {
    if (resp.error) {
      if (resp.error !== 'access_denied') {
        setAccessToken(null);
      }
    } else {
      setAccessToken(resp.access_token, settings.persistAccessToken);
      eventObserver.dispatch('LOGIN');
    }
    runAuthCallback(settings, resp);
  }
  function logout () {
    const callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : emptyFunc;
    validate(callback, isFunction, 'Auth.logout');
    request$5({
      url: '/v1/user/logout',
      always: function always () {
        setAccessToken(null);
        eventObserver.dispatch('LOGOUT');
        callback(true);
      }
    });
  }
  let proxyForAccessToken = null;
  function issueAccessToken (settings) {
    settings = processRules(settings, rules$8.issueAccessToken, 'Auth.issueAccessToken');
    if (!proxyForAccessToken) {
      proxyForAccessToken = getProxy({}, function (response) {
        handleAuthResponse(settings, response);
      });
      cleanups$6.push(function () {
        proxyForAccessToken.destroy();
        proxyForAccessToken = null;
      });
    }
    proxyForAccessToken.getAccessToken(settings.code, getAppKey$1(), settings.redirectUri);
  }
  var cleanups$6 = [];
  function cleanup$7 () {
    emptyCleanups(cleanups$6);
  }

  const login$1 = /* #__PURE__ */Object.freeze({
    __proto__: null,
    createLoginButton: createLoginButton,
    login: login,
    loginForm: loginForm,
    autoLogin: autoLogin,
    logout: logout,
    issueAccessToken: issueAccessToken,
    cleanup: cleanup$7
  });

  function getStatusInfo (callback) {
    validate(callback, isFunction, 'Auth.getStatusInfo');
    if (!getAccessToken()) {
      callback({
        status: 'not_connected'
      });
    } else {
      request$5({
        url: '/v2/user/me',
        success: function success (res) {
          callback({
            status: 'connected',
            user: res
          });
        },
        fail: function fail () {
          callback({
            status: 'not_connected'
          });
        }
      });
    }
  }

  const status = /* #__PURE__ */Object.freeze({
    __proto__: null,
    getStatusInfo: getStatusInfo
  });

  function selectShippingAddress (settings) {
    settings = processRules(settings, rules$8.selectShippingAddress, 'Auth.selectShippingAddress');
    requestShippingAddress(settings, '/user/address');
  }
  function createShippingAddress (settings) {
    settings = processRules(settings, rules$8.createShippingAddress, 'Auth.createShippingAddress');
    requestShippingAddress(settings, '/user/create/address');
  }
  function updateShippingAddress (settings) {
    settings = processRules(settings, rules$8.updateShippingAddress, 'Auth.updateShippingAddress');
    requestShippingAddress(settings, '/user/edit/address');
  }
  function requestShippingAddress (settings, subpath) {
    cleanup$6();
    const transId = generateTxId();
    const params = _objectSpread2({
      app_key: getAppKey$1(),
      access_token: getAccessToken(),
      ka: KAKAO_AGENT,
      trans_id: transId,
      mobile_view: settings.forceMobileLayout,
      enable_back_button: settings.enableBackButton
    }, settings.addressId && {
      address_id: settings.addressId
    });
    const url = URL.appsDomain + subpath;
    if (settings.returnUrl) {
      params.return_url = settings.returnUrl;
      createAndSubmitForm(params, url);
    } else {
      createHiddenIframe(transId, ''.concat(URL.appsDomain, '/proxy?trans_id=').concat(transId), cleanups$5);
      addMessageEvent(settings, URL.appsDomain, cleanups$5);
      addCloseEvent(settings);
      openPopupAndSubmitForm(params, {
        url: url,
        popupName: 'shipping_address',
        popupFeatures: 'location=no,resizable=no,status=no,scrollbars=no,width=460,height=608'
      });
    }
  }
  function addCloseEvent (settings) {
    const callback = function callback (_ref) {
      const data = _ref.data;
      const origin = _ref.origin;
      if ((origin === URL.appsDomain || origin === URL.accountDomain) && data === 'closed') {
        settings.close();
        removeEvent(window, 'message', callback);
      }
    };
    addEvent(window, 'message', callback);
  }
  var cleanups$5 = [];
  function cleanup$6 () {
    emptyCleanups(cleanups$5);
  }

  const shippingAddress = /* #__PURE__ */Object.freeze({
    __proto__: null,
    selectShippingAddress: selectShippingAddress,
    createShippingAddress: createShippingAddress,
    updateShippingAddress: updateShippingAddress,
    cleanup: cleanup$6
  });

  const Auth = makeModule([oauth, login$1, secret, status, shippingAddress]);
  const Auth$1 = Auth;

  const API = makeModule([request$6]);
  const API$1 = API;

  function capitalize (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  function camelToSnakeCase (str) {
    return str.replace(/[A-Z]/g, function (letter) {
      return '_'.concat(letter.toLowerCase());
    });
  }
  function stringifyLCBA (lcba) {
    return isObject(lcba) ? JSON.stringify(lcba) : lcba;
  }
  function requestAPI (url, data) {
    return request$5({
      url: url,
      data: data
    });
  }

  function partialValidator (settings, rule, propName) {
    processRules(settings, rule, 'parameter "'.concat(propName, '" in Link'));
    return true;
  }
  function formatter (settings) {
    return keys(settings).reduce(function (obj, k) {
      obj[camelToSnakeCase(k)] = settings[k];
      return obj;
    }, {});
  }
  const linkRule = {
    optional: {
      webUrl: isString,
      mobileWebUrl: isString,
      androidExecutionParams: isString,
      androidExecParams: isString,
      iosExecutionParams: isString,
      iosExecParams: isString
    },
    builder: makeLink
  };
  const itemRule = {
    required: {
      item: isString,
      itemOp: isString
    }
  };
  function makeLink (settings) {
    const link = formatter(settings);
    if (link.android_exec_params) {
      link.android_execution_params = link.android_exec_params;
      delete link.android_exec_params;
    }
    if (link.ios_exec_params) {
      link.ios_execution_params = link.ios_exec_params;
      delete link.ios_exec_params;
    }
    return link;
  }
  function makeButton (settings) {
    return {
      title: settings.title,
      link: makeLink(settings.link)
    };
  }
  function makeContent (settings) {
    const content = formatter(settings);
    content.link = makeLink(content.link);
    return content;
  }
  function makeItemContent (settings) {
    const itemContent = formatter(settings);
    if (itemContent.items) {
      itemContent.items = map(itemContent.items, function (e) {
        return formatter(e);
      });
    }
    return itemContent;
  }
  var rules$6 = {
    headerLink: linkRule,
    link: linkRule,
    button: {
      required: {
        title: isString,
        link: function link (e) {
          partialValidator(e, linkRule, 'link');
        }
      },
      builder: makeButton
    },
    buttons: {
      optional: {
        0: function _ (e) {
          partialValidator(e, rules$6.button, 'button');
        },
        1: function _ (e) {
          partialValidator(e, rules$6.button, 'button');
        }
      },
      builder: function builder (arr) {
        return map(arr, makeButton);
      }
    },
    content: {
      required: {
        title: isString,
        imageUrl: isString,
        link: function link (e) {
          partialValidator(e, linkRule, 'link');
        }
      },
      optional: {
        imageWidth: isInteger,
        imageHeight: isInteger,
        description: isString
      },
      builder: makeContent
    },
    contents: {
      optional: {
        0: function _ (e) {
          partialValidator(e, rules$6.content, 'content');
        },
        1: function _ (e) {
          partialValidator(e, rules$6.content, 'content');
        },
        2: function _ (e) {
          partialValidator(e, rules$6.content, 'content');
        }
      },
      builder: function builder (arr) {
        return map(arr, makeContent);
      }
    },
    commerce: {
      required: {
        regularPrice: isInteger
      },
      optional: {
        discountPrice: isInteger,
        discountRate: isInteger,
        fixedDiscountPrice: isInteger,
        currencyUnit: isString,
        currencyUnitPosition: isOneOf([0, 1]),
        productName: isString
      },
      builder: formatter
    },
    social: {
      optional: {
        likeCount: isInteger,
        commentCount: isInteger,
        sharedCount: isInteger,
        viewCount: isInteger,
        subscriberCount: isInteger
      },
      builder: formatter
    },
    itemContent: {
      optional: {
        profileText: isString,
        profileImageUrl: isString,
        titleImageUrl: isString,
        titleImageText: isString,
        titleImageCategory: isString,
        items: function items (arr) {
          return isArray$1(arr) && arr.length < 6 && every(arr, function (e) {
            return partialValidator(e, itemRule, 'items.item');
          });
        },
        sum: isString,
        sumOp: isString
      },
      builder: makeItemContent
    }
  };
  function create (settings, key, callerMsg) {
    const linkPropRule = rules$6[key];
    if (linkPropRule) {
      settings = processRules(settings, linkPropRule, 'parameter "'.concat(key, '" in ').concat(callerMsg || 'Link'));
      return linkPropRule.builder(settings);
    }
  }
  const propGenerator = {
    create: create
  };

  const LINK_VER = '4.0';
  const KakaoLink = _createClass(function KakaoLink (settings, validatedResp) {
    _classCallCheck(this, KakaoLink);
    this.appkey = getAppKey$1();
    this.appver = '1.0';
    this.linkver = LINK_VER;
    this.extras = _objectSpread2(_objectSpread2({
      KA: KAKAO_AGENT
    }, settings.extras), settings.serverCallbackArgs && {
      lcba: stringifyLCBA(settings.serverCallbackArgs)
    });
    this.template_json = validatedResp.template_msg;
    this.template_args = validatedResp.template_args;
    this.template_id = validatedResp.template_id;
  });
  function makeKakaoLink (settings, validatedResp) {
    const kakaoLink = new KakaoLink(settings, validatedResp);
    if (JSON.stringify(kakaoLink).length > 10000) {
      throw new KakaoError('Failed to send message because it exceeds the message size limit. Please contact the app administrator.');
    }
    return buildQueryString(kakaoLink);
  }
  const DefaultLink = _createClass(function DefaultLink (settings) {
    const _this = this;
    _classCallCheck(this, DefaultLink);
    this.link_ver = LINK_VER;
    this.template_object = _objectSpread2({
      object_type: settings.objectType
    }, settings.buttonTitle && {
      button_title: settings.buttonTitle
    });
    forEach(settings, function (setting, key) {
      const prop = propGenerator.create(setting, key, 'defaultObject');
      if (prop) {
        _this.template_object[camelToSnakeCase(key)] = prop;
      }
    });
  });
  const ListLink = (function (_DefaultLink) {
    _inherits(ListLink, _DefaultLink);
    const _super = _createSuper(ListLink);
    function ListLink (settings) {
      let _this2;
      _classCallCheck(this, ListLink);
      _this2 = _super.call(this, settings);
      _this2.template_object.header_title = settings.headerTitle;
      if (console && (settings.headerImageUrl || settings.headerImageWidth || settings.headerImageHeight)) {
        console.warn('KakaoWarning: The parameters ('.concat(['headerImageUrl', 'headerImageWidth', 'headerImageHeight'].join(', '), ') for header background image are deprecated.'));
      }
      return _this2;
    }
    return _createClass(ListLink);
  }(DefaultLink));
  const LocationLink = (function (_DefaultLink2) {
    _inherits(LocationLink, _DefaultLink2);
    const _super2 = _createSuper(LocationLink);
    function LocationLink (settings) {
      let _this3;
      _classCallCheck(this, LocationLink);
      _this3 = _super2.call(this, settings);
      const tpl = _this3.template_object;
      tpl.address = settings.address || '';
      tpl.address_title = settings.addressTitle || '';
      return _this3;
    }
    return _createClass(LocationLink);
  }(DefaultLink));
  const TextLink = (function (_DefaultLink3) {
    _inherits(TextLink, _DefaultLink3);
    const _super3 = _createSuper(TextLink);
    function TextLink (settings) {
      let _this4;
      _classCallCheck(this, TextLink);
      _this4 = _super3.call(this, settings);
      _this4.template_object.text = settings.text || '';
      return _this4;
    }
    return _createClass(TextLink);
  }(DefaultLink));
  const defaultLinks = {
    FeedLink: DefaultLink,
    CommerceLink: DefaultLink,
    ListLink: ListLink,
    LocationLink: LocationLink,
    TextLink: TextLink
  };
  const ScrapLink = _createClass(function ScrapLink (settings) {
    _classCallCheck(this, ScrapLink);
    this.link_ver = LINK_VER;
    this.request_url = settings.requestUrl;
    if (settings.templateId) {
      this.template_id = settings.templateId;
    }
    if (settings.templateArgs) {
      this.template_args = settings.templateArgs;
    }
  });
  const CustomLink = _createClass(function CustomLink (settings) {
    _classCallCheck(this, CustomLink);
    this.link_ver = LINK_VER;
    this.template_id = settings.templateId;
    this.template_args = settings.templateArgs;
  });
  function makeDefaultLink (settings) {
    const clazz = defaultLinks[''.concat(capitalize(settings.objectType), 'Link')];
    return new clazz(settings);
  }
  function makeScrapLink (settings) {
    return new ScrapLink(settings);
  }
  function makeCustomLink (settings) {
    return new CustomLink(settings);
  }

  const LINK_POPUP_NAME = 'kakao_link_web_sharer';
  const LINK_POPUP_FEATURES = 'location=no,resizable=no,status=no,scrollbars=no,width=460,height=608';
  const LINK_URL_LIMIT = 2084;
  function send$1 (settings, linkType, linkObj) {
    const webLinkParams = {
      app_key: getAppKey$1(),
      ka: KAKAO_AGENT,
      validation_action: linkType,
      validation_params: JSON.stringify(linkObj)
    };
    if (settings.serverCallbackArgs) {
      webLinkParams.lcba = stringifyLCBA(settings.serverCallbackArgs);
    }
    const webLinkUrl = ''.concat(URL.sharerDomain, '/talk/friends/picker/easylink?').concat(buildQueryString(webLinkParams));
    let linkPopup = null;
    if (!(UA.browser.msie || UA.browser.spartan) && webLinkUrl.length < LINK_URL_LIMIT) {
      linkPopup = windowOpen(webLinkUrl, LINK_POPUP_NAME, LINK_POPUP_FEATURES);
      linkPopup.focus();
    } else {
      const popupParams = {
        url: ''.concat(URL.sharerDomain, '/talk/friends/picker/link'),
        popupName: LINK_POPUP_NAME,
        popupFeatures: LINK_POPUP_FEATURES
      };
      linkPopup = openPopupAndSubmitForm(webLinkParams, popupParams);
    }
    if (settings.callback) {
      handleCallback(linkPopup, settings.callback);
    }
  }
  function handleCallback (popup, callback) {
    if (UA.browser.msie) {
      if (console) {
        console.warn('KakaoWarning: The callback parameter does not support the IE browser.');
      }
      return;
    }
    const linkCallback = function linkCallback (e) {
      if (e.data === 'sent' && e.origin === URL.sharerDomain) {
        callback();
      }
    };
    addEvent(window, 'message', linkCallback);
    var interval = setInterval(function () {
      if (popup.closed) {
        clearInterval(interval);
        removeEvent(window, 'message', linkCallback);
      }
    }, 1000);
  }
  const webSender = {
    send: send$1
  };

  const web2app = (function () {
    const ua_parser$1 = ua_parser;
    const TIMEOUT_IOS = 5 * 1000;
    const TIMEOUT_ANDROID = 3 * 100;
    const INTERVAL = 100;
    const ua = ua_parser$1();
    const os = ua.os;
    const intentNotSupportedBrowserList = ['opr/'];
    const intentSupportCustomBrowserList = ['firefox', 'KAKAOTALK'
    ];
    function moveToStore (storeURL) {
      window.top.location.href = storeURL;
    }
    function web2app (context) {
      const willInvokeApp = typeof context.willInvokeApp === 'function' ? context.willInvokeApp : function () {};
      const onAppMissing = typeof context.onAppMissing === 'function' ? context.onAppMissing : moveToStore;
      const onUnsupportedEnvironment = typeof context.onUnsupportedEnvironment === 'function' ? context.onUnsupportedEnvironment : function () {};
      willInvokeApp();
      if (os.android) {
        if (isIntentSupportedBrowser() && context.intentURI && !context.useUrlScheme) {
          web2appViaIntentURI(context.intentURI);
        } else if (context.storeURL) {
          web2appViaCustomUrlSchemeForAndroid(context.urlScheme, context.storeURL, onAppMissing);
        }
      } else if (os.ios && context.storeURL) {
        web2appViaCustomUrlSchemeForIOS(context.urlScheme, context.storeURL, onAppMissing, context.universalLink);
      } else {
        setTimeout(function () {
          onUnsupportedEnvironment();
        }, 100);
      }
    }
    function isIntentSupportedBrowser () {
      const supportsIntent = ua.browser.chrome && +ua.browser.version.major >= 25;
      const blackListRegexp = new RegExp(intentNotSupportedBrowserList.join('|'), 'i');
      const whiteListRegexp = new RegExp(intentSupportCustomBrowserList.join('|'), 'i');
      return supportsIntent && !blackListRegexp.test(ua.ua) || whiteListRegexp.test(ua.ua);
    }
    function web2appViaCustomUrlSchemeForAndroid (urlScheme, storeURL, fallback) {
      deferFallback(TIMEOUT_ANDROID, storeURL, fallback);
      launchAppViaHiddenIframe(urlScheme);
    }
    function deferFallback (timeout, storeURL, fallback) {
      const clickedAt = new Date().getTime();
      return setTimeout(function () {
        const now = new Date().getTime();
        if (isPageVisible() && now - clickedAt < timeout + INTERVAL) {
          fallback(storeURL);
        }
      }, timeout);
    }
    function web2appViaIntentURI (launchURI) {
      if (ua.browser.chrome) {
        move();
      } else {
        setTimeout(move, 100);
      }
      function move () {
        top.location.href = launchURI;
      }
    }
    function web2appViaCustomUrlSchemeForIOS (urlScheme, storeURL, fallback, universalLink) {
      const tid = deferFallback(TIMEOUT_IOS, storeURL, fallback);
      if (parseInt(ua.os.version.major, 10) < 8) {
        bindPagehideEvent(tid);
      } else {
        bindVisibilityChangeEvent(tid);
      }
      if (isSupportUniversalLinks()) {
        if (universalLink === undefined) {
          universalLink = urlScheme;
        } else {
          clearTimeout(tid);
        }
        launchAppViaChangingLocation(universalLink);
      } else {
        launchAppViaHiddenIframe(urlScheme);
      }
    }
    function bindPagehideEvent (tid) {
      window.addEventListener('pagehide', function clear () {
        if (isPageVisible()) {
          clearTimeout(tid);
          window.removeEventListener('pagehide', clear);
        }
      });
    }
    function bindVisibilityChangeEvent (tid) {
      document.addEventListener('visibilitychange', function clear () {
        if (isPageVisible()) {
          clearTimeout(tid);
          document.removeEventListener('visibilitychange', clear);
        }
      });
    }
    function isPageVisible () {
      const attrNames = ['hidden', 'webkitHidden'];
      for (let i = 0, len = attrNames.length; i < len; i++) {
        if (typeof document[attrNames[i]] !== 'undefined') {
          return !document[attrNames[i]];
        }
      }
      return true;
    }
    function launchAppViaChangingLocation (urlScheme) {
      window.top.location.href = urlScheme;
    }
    function launchAppViaHiddenIframe (urlScheme) {
      setTimeout(function () {
        const iframe = createHiddenIframe('appLauncher');
        iframe.src = urlScheme;
      }, 100);
    }
    function createHiddenIframe (id) {
      const iframe = document.createElement('iframe');
      iframe.id = id;
      iframe.style.border = 'none';
      iframe.style.width = '0';
      iframe.style.height = '0';
      iframe.style.display = 'none';
      iframe.style.overflow = 'hidden';
      document.body.appendChild(iframe);
      return iframe;
    }
    function isSupportUniversalLinks () {
      return parseInt(ua.os.version.major, 10) > 8 && ua.os.ios;
    }
    return web2app;
  }());
  const web2app$1 = web2app;

  const poller = new Poller(100, 100);
  const KAKAOTALK_IOS_APP_ID = '362057947';
  function send (settings, requestUrl, linkObj) {
    let onResponse = null;
    if (UA.browser.iphone && /version/.test(UA.ua.toLowerCase())) {
      let response = null;
      onResponse = function onResponse (res) {
        response = res;
      };
      poller.start(function () {
        if (response !== null) {
          poller.stop();
          handleValidatedResp(response, settings);
        }
      }, function () {
        const error = {
          error: 'timeout',
          error_description: 'LINK_TIMEOUT'
        };
        settings.fail(error);
        settings.always(error);
      });
    } else {
      onResponse = handleValidatedResp;
    }
    return requestAPI(requestUrl, linkObj).then(function (validatedResp) {
      onResponse(validatedResp, settings);
    }, function (error) {
      settings.fail(error);
      settings.always(error);
    });
  }
  function handleValidatedResp (validatedResp, settings) {
    const linkSchemeParams = makeKakaoLink(settings, validatedResp);
    callWeb2app$1(linkSchemeParams, settings.fail, settings.installTalk);
    const msg = {
      template_msg: validatedResp.template_msg || {},
      warning_msg: validatedResp.warning_msg || {},
      argument_msg: validatedResp.argument_msg || {}
    };
    settings.success(msg);
    settings.always(msg);
  }
  function callWeb2app$1 (linkSchemeParams, unsupportedCallback, shouldInstallTalk) {
    const linkScheme = (UA.os.ios ? URL.talkLinkScheme : '') + '?' + linkSchemeParams;
    const newIntent = 'intent://link?'.concat(linkSchemeParams, '#Intent;scheme=kakaolink');
    const oldIntent = 'intent:kakaolink://send?'.concat(linkSchemeParams, '#Intent');
    const androidIntent = [/instagram|fb_iab/g.test(UA.ua) ? newIntent : oldIntent, 'launchFlags=0x14008000', ''.concat(shouldInstallTalk === true ? 'package='.concat(URL.talkAndroidPackage, ';') : '', 'end;')].join(';');
    const web2appOptions = {
      urlScheme: linkScheme,
      intentURI: androidIntent,
      appName: 'KakaoTalk',
      storeURL: getInstallUrl(URL.talkAndroidPackage, KAKAOTALK_IOS_APP_ID),
      onUnsupportedEnvironment: function onUnsupportedEnvironment () {
        unsupportedCallback(linkScheme);
      }
    };
    if (!shouldInstallTalk || isIOSKakaoTalkWebView() || isAndroidWebView()) {
      web2appOptions.onAppMissing = emptyFunc;
    }
    if (isIOSKakaoTalkWebView()) {
      web2appOptions.universalLink = undefined;
    }
    try {
      web2app$1(web2appOptions);
    } catch (error) {
    }
  }
  const talkSender = {
    send: send
  };

  const commonLinkOptional = {
    success: isFunction,
    fail: isFunction,
    always: isFunction,
    callback: isFunction,
    installTalk: isBoolean,
    throughTalk: isBoolean,
    extras: isObject,
    serverCallbackArgs: passesOneOf([isJSONString, isObject])
  };
  const commonLinkDefaults = {
    success: emptyFunc,
    fail: emptyFunc,
    always: emptyFunc,
    installTalk: false,
    throughTalk: true
  };
  function buttonsValidator (e) {
    if (!isArray$1(e)) {
      return false;
    } else if (e.length > 2) {
      throw new KakaoError('Illegal argument for "buttons" in Link: size of buttons should be up to 2');
    }
    return true;
  }
  const sendFeed = {
    required: {
      objectType: function objectType (type) {
        return type === 'feed';
      },
      content: isObject
    },
    optional: extend({
      itemContent: isObject,
      social: isObject,
      buttonTitle: isString,
      buttons: buttonsValidator
    }, commonLinkOptional),
    defaults: commonLinkDefaults
  };
  const sendList = {
    required: {
      objectType: function objectType (type) {
        return type === 'list';
      },
      headerTitle: isString,
      headerLink: isObject,
      contents: function contents (e) {
        if (!isArray$1(e)) {
          return false;
        } else if (e.length < 2 || e.length > 3) {
          throw new KakaoError('Illegal argument for "contents" in Link: size of contents should be more than 1 and up to 3');
        }
        return true;
      }
    },
    optional: extend({
      buttonTitle: isString,
      buttons: buttonsValidator,
      headerImageUrl: isString,
      headerImageWidth: isInteger,
      headerImageHeight: isInteger
    }, commonLinkOptional),
    defaults: commonLinkDefaults
  };
  const sendCommerce = {
    required: {
      objectType: function objectType (type) {
        return type === 'commerce';
      },
      content: isObject,
      commerce: isObject
    },
    optional: extend({
      buttonTitle: isString,
      buttons: buttonsValidator
    }, commonLinkOptional),
    defaults: commonLinkDefaults
  };
  const sendLocation = {
    required: {
      objectType: function objectType (type) {
        return type === 'location';
      },
      content: isObject,
      address: isString
    },
    optional: extend({
      addressTitle: isString,
      social: isObject,
      buttonTitle: isString,
      buttons: buttonsValidator
    }, commonLinkOptional),
    defaults: commonLinkDefaults
  };
  const sendText = {
    required: {
      objectType: function objectType (type) {
        return type === 'text';
      },
      text: isString,
      link: isObject
    },
    optional: extend({
      buttonTitle: isString,
      buttons: buttonsValidator
    }, commonLinkOptional),
    defaults: commonLinkDefaults
  };
  const sendScrap$1 = {
    required: {
      requestUrl: isString
    },
    optional: extend({
      templateId: isInteger,
      templateArgs: isObject
    }, commonLinkOptional),
    defaults: extend({
      templateArgs: {}
    }, commonLinkDefaults)
  };
  const sendCustom$1 = {
    required: {
      templateId: isInteger
    },
    optional: extend({
      templateArgs: isObject
    }, commonLinkOptional),
    defaults: extend({
      templateArgs: {}
    }, commonLinkDefaults)
  };
  function extendRuleForContainer (rule) {
    return defaults$1({
      required: extend({
        container: passesOneOf([isElement, isString])
      }, rule.required)
    }, rule);
  }
  const rules$5 = {
    defaultObjectTypes: ['feed', 'list', 'commerce', 'location', 'text'],
    sendFeed: sendFeed,
    createFeedButton: extendRuleForContainer(sendFeed),
    sendList: sendList,
    createListButton: extendRuleForContainer(sendList),
    sendCommerce: sendCommerce,
    createCommerceButton: extendRuleForContainer(sendCommerce),
    sendLocation: sendLocation,
    createLocationButton: extendRuleForContainer(sendLocation),
    sendText: sendText,
    createTextButton: extendRuleForContainer(sendText),
    sendScrap: sendScrap$1,
    createScrapButton: extendRuleForContainer(sendScrap$1),
    sendCustom: sendCustom$1,
    createCustomButton: extendRuleForContainer(sendCustom$1),
    uploadImage: {
      required: {
        file: isObject
      }
    },
    deleteImage: {
      required: {
        imageUrl: isString
      }
    },
    scrapImage: {
      required: {
        imageUrl: isString
      }
    }
  };

  function createDefaultButton (settings) {
    if (!settings.objectType || !isOneOf(rules$5.defaultObjectTypes)(settings.objectType)) {
      throw new KakaoError('objectType should be one of ('.concat(rules$5.defaultObjectTypes.join(', '), ')'));
    }
    const rule = rules$5['create'.concat(capitalize(settings.objectType), 'Button')];
    settings = processRules(settings, rule, 'Link.createDefaultButton');
    addClickEvent(settings, 'default');
  }
  function sendDefault (settings) {
    if (!settings.objectType || !isOneOf(rules$5.defaultObjectTypes)(settings.objectType)) {
      throw new KakaoError('objectType should be one of ('.concat(rules$5.defaultObjectTypes.join(', '), ')'));
    }
    const rule = rules$5['send'.concat(capitalize(settings.objectType))];
    settings = processRules(settings, rule, 'Link.sendDefault');
    doSend(settings, 'default');
  }
  function createScrapButton (settings) {
    settings = processRules(settings, rules$5.createScrapButton, 'Link.createScrapButton');
    addClickEvent(settings, 'scrap');
  }
  function sendScrap (settings) {
    settings = processRules(settings, rules$5.sendScrap, 'Link.sendScrap');
    doSend(settings, 'scrap');
  }
  function createCustomButton (settings) {
    settings = processRules(settings, rules$5.createCustomButton, 'Link.createCustomButton');
    addClickEvent(settings, 'custom');
  }
  function sendCustom (settings) {
    settings = processRules(settings, rules$5.sendCustom, 'Link.sendCustom');
    doSend(settings, 'custom');
  }
  function addClickEvent (settings, linkType) {
    const container$ = getElement(settings.container);
    if (!container$) {
      throw new KakaoError('container is required for KakaoTalk Link: pass in element or id');
    }
    const clickHandler = function clickHandler (e) {
      e.preventDefault();
      e.stopPropagation();
      doSend(settings, linkType);
    };
    addEvent(container$, 'click', clickHandler);
    cleanups$4.push(function () {
      removeEvent(container$, 'click', clickHandler);
    });
  }
  const linkTypeMapper = {
    default: {
      makeLinkFunc: makeDefaultLink,
      requestUrl: '/v2/api/kakaolink/talk/template/default'
    },
    scrap: {
      makeLinkFunc: makeScrapLink,
      requestUrl: '/v2/api/kakaolink/talk/template/scrap'
    },
    custom: {
      makeLinkFunc: makeCustomLink,
      requestUrl: '/v2/api/kakaolink/talk/template/validate'
    }
  };
  function doSend (settings, linkType) {
    const _linkTypeMapper$linkT = linkTypeMapper[linkType];
    const makeLinkFunc = _linkTypeMapper$linkT.makeLinkFunc;
    const requestUrl = _linkTypeMapper$linkT.requestUrl;
    const linkObj = makeLinkFunc(settings);
    const isUnsupportedBrowser = /opr\/|opt\/|huawei/g.test(UA.ua);
    const isIpad = UA.os.ios && UA.platform === 'tablet';
    if (isTalkWebview || !isUnsupportedBrowser && settings.throughTalk && (UA.platform === 'mobile' || isIpad)) {
      talkSender.send(settings, requestUrl, linkObj);
    } else {
      webSender.send(settings, linkType, linkObj);
    }
  }
  var cleanups$4 = [];
  function cleanup$5 () {
    emptyCleanups(cleanups$4);
  }

  const linker = /* #__PURE__ */Object.freeze({
    __proto__: null,
    createDefaultButton: createDefaultButton,
    sendDefault: sendDefault,
    createScrapButton: createScrapButton,
    sendScrap: sendScrap,
    createCustomButton: createCustomButton,
    sendCustom: sendCustom,
    cleanup: cleanup$5
  });

  function uploadImage (settings) {
    settings = processRules(settings, rules$5.uploadImage, 'Link.uploadImage');
    return requestAPI('/v2/api/talk/message/image/upload', {
      file: settings.file
    });
  }
  function deleteImage (settings) {
    settings = processRules(settings, rules$5.deleteImage, 'Link.deleteImage');
    return requestAPI('/v2/api/talk/message/image/delete', {
      image_url: settings.imageUrl
    });
  }
  function scrapImage (settings) {
    settings = processRules(settings, rules$5.scrapImage, 'Link.scrapImage');
    return requestAPI('/v2/api/talk/message/image/scrap', {
      image_url: settings.imageUrl
    });
  }

  const imageAPI = /* #__PURE__ */Object.freeze({
    __proto__: null,
    uploadImage: uploadImage,
    deleteImage: deleteImage,
    scrapImage: scrapImage
  });

  const Link = makeModule([linker, imageAPI]);
  const Link$1 = Link;

  const POPUP_FEATURES = 'width=350, height=510';
  function createAnchorImage$1 (settings, imgSrc, imgTitle) {
    const a$ = document.createElement('a');
    a$.setAttribute('href', '#');
    const img$ = document.createElement('img');
    img$.setAttribute('src', imgSrc);
    img$.setAttribute('title', imgTitle);
    img$.setAttribute('alt', imgTitle);
    if (settings.supportMultipleDensities) {
      img$.setAttribute('srcset', [imgSrc.replace('.png', '_2X.png 2x'), imgSrc.replace('.png', '_3X.png 3x')].join(', '));
    }
    a$.appendChild(img$);
    return a$;
  }
  function makeChannelParams (apiVer, lang) {
    return buildQueryString(_objectSpread2({
      api_ver: apiVer,
      kakao_agent: KAKAO_AGENT,
      app_key: getAppKey$1(),
      referer: origin + location.pathname + location.search
    }, lang && {
      lang: lang
    }));
  }

  const sizes = ['small', 'large'];
  const colors = ['yellow', 'mono'];
  const shapes = ['pc', 'mobile'];
  const titles = ['consult', 'question'];
  const langs = ['ko', 'en', 'ja'];
  const rules$4 = {
    createAddChannelButton: {
      required: {
        container: passesOneOf([isElement, isString]),
        channelPublicId: isString
      },
      optional: {
        size: isOneOf(sizes),
        lang: isOneOf(langs),
        supportMultipleDensities: isBoolean
      },
      defaults: {
        size: sizes[0],
        supportMultipleDensities: false
      }
    },
    addChannel: {
      required: {
        channelPublicId: isString
      },
      optional: {
        lang: isOneOf(langs)
      }
    },
    createChatButton: {
      required: {
        container: passesOneOf([isElement, isString]),
        channelPublicId: isString
      },
      optional: {
        size: isOneOf(sizes),
        color: isOneOf(colors),
        shape: isOneOf(shapes),
        title: isOneOf(titles),
        lang: isOneOf(langs),
        supportMultipleDensities: isBoolean
      },
      defaults: {
        size: sizes[0],
        color: colors[0],
        shape: shapes[0],
        title: titles[0],
        supportMultipleDensities: false
      }
    },
    chat: {
      required: {
        channelPublicId: isString
      },
      optional: {
        lang: isOneOf(langs)
      }
    }
  };

  const API_VER$1 = '1.1';
  const ADD_CHANNEL_POPUP_NAME = 'channel_add_social_plugin';
  const CHAT_POPUP_NAME$1 = 'channel_chat_social_plugin';
  function createAddChannelButton (settings) {
    const container$ = getElement(settings.container);
    if (!container$) {
      throw new KakaoError('container is required for Channel.createAddChannelButton: pass in element or id');
    } else {
      applyAttributes(settings, container$, {
        channelPublicId: 'data-channel-public-id',
        size: 'data-size',
        supportMultipleDensities: 'data-support-multiple-densities'
      });
    }
    settings = processRules(settings, rules$4.createAddChannelButton, 'Channel.createAddChannelButton');
    const imgSrc = getAddChannelImgSrc(settings);
    const anchor$ = createAnchorImage$1(settings, imgSrc, '카카오톡 채널 추가 버튼');
    container$.appendChild(anchor$);
    const clickHandler = function clickHandler (e) {
      e.preventDefault();
      openAddChannelPopup(settings);
    };
    addEvent(anchor$, 'click', clickHandler);
    cleanups$3.push(function () {
      removeEvent(anchor$, 'click', clickHandler);
      container$.removeChild(anchor$);
    });
  }
  function addChannel (settings) {
    settings = processRules(settings, rules$4.addChannel, 'Channel.addChannel');
    openAddChannelPopup(settings);
  }
  function getAddChannelImgSrc (settings) {
    const filename = 'friendadd_'.concat(settings.size, '_yellow_rect.png');
    return ''.concat(URL.channelIcon, '/channel/').concat(filename);
  }
  function openAddChannelPopup (settings) {
    let addChannelUrl = ''.concat(URL.channel, '/').concat(settings.channelPublicId, '/friend');
    if (getAppKey$1() !== null) {
      addChannelUrl += '?'.concat(makeChannelParams(API_VER$1, settings.lang));
    }
    windowOpen(addChannelUrl, ADD_CHANNEL_POPUP_NAME, POPUP_FEATURES);
  }
  function createChatButton$1 (settings) {
    const container$ = getElement(settings.container);
    if (!container$) {
      throw new KakaoError('container is required for Channel.createChatButton: pass in element or id');
    } else {
      applyAttributes(settings, container$, {
        channelPublicId: 'data-channel-public-id',
        size: 'data-size',
        color: 'data-color',
        shape: 'data-shape',
        title: 'data-title',
        supportMultipleDensities: 'data-support-multiple-densities'
      });
    }
    settings = processRules(settings, rules$4.createChatButton, 'Channel.createChatButton');
    const imgSrc = getChatImgSrc$1(settings);
    const anchor$ = createAnchorImage$1(settings, imgSrc, '카카오톡 채널 1:1 채팅 버튼');
    container$.appendChild(anchor$);
    const clickHandler = function clickHandler (e) {
      e.preventDefault();
      openChatPopup$1(settings);
    };
    addEvent(anchor$, 'click', clickHandler);
    cleanups$3.push(function () {
      removeEvent(anchor$, 'click', clickHandler);
      container$.removeChild(anchor$);
    });
  }
  function chat$1 (settings) {
    settings = processRules(settings, rules$4.chat, 'Channel.chat');
    openChatPopup$1(settings);
  }
  function getChatImgSrc$1 (settings) {
    const filename = ''.concat(settings.title, '_').concat(settings.size, '_').concat(settings.color, '_').concat(settings.shape, '.png');
    return ''.concat(URL.channelIcon, '/channel/').concat(filename);
  }
  function openChatPopup$1 (settings) {
    let chatUrl = ''.concat(URL.channel, '/').concat(settings.channelPublicId, '/chat');
    if (getAppKey$1() !== null) {
      chatUrl += '?'.concat(makeChannelParams(API_VER$1, settings.lang));
    }
    windowOpen(chatUrl, CHAT_POPUP_NAME$1, POPUP_FEATURES);
  }
  var cleanups$3 = [];
  function cleanup$4 () {
    emptyCleanups(cleanups$3);
  }

  const request$4 = /* #__PURE__ */Object.freeze({
    __proto__: null,
    createAddChannelButton: createAddChannelButton,
    addChannel: addChannel,
    createChatButton: createChatButton$1,
    chat: chat$1,
    cleanup: cleanup$4
  });

  const Channel = makeModule([request$4]);
  const Channel$1 = Channel;

  const rules$3 = {
    createAddFriendButton: {
      required: {
        container: passesOneOf([isElement, isString]),
        plusFriendId: isString
      },
      optional: {
        size: isOneOf(['small', 'large']),
        color: isOneOf(['yellow', 'black']),
        shape: isOneOf(['rect', 'round']),
        supportMultipleDensities: isBoolean
      },
      defaults: {
        size: 'small',
        color: 'yellow',
        shape: 'rect',
        supportMultipleDensities: false
      }
    },
    addFriend: {
      required: {
        plusFriendId: isString
      }
    },
    createChatButton: {
      required: {
        container: passesOneOf([isElement, isString]),
        plusFriendId: isString
      },
      optional: {
        size: isOneOf(['small', 'large']),
        color: isOneOf(['yellow', 'mono']),
        shape: isOneOf(['pc', 'mobile']),
        title: isOneOf(['consult', 'question']),
        supportMultipleDensities: isBoolean
      },
      defaults: {
        size: 'small',
        color: 'yellow',
        shape: 'pc',
        title: 'consult',
        supportMultipleDensities: false
      }
    },
    chat: {
      required: {
        plusFriendId: isString
      }
    }
  };

  const API_VER = '1.0';
  const ADD_FRIEND_POPUP_NAME = 'plus_friend_add_social_plugin';
  const CHAT_POPUP_NAME = 'plus_friend_chat_social_plugin';
  function warnDeprecation () {
    if (console) {
      console.warn('KakaoWarning: Kakao.PlusFriend is deprecated. Please use Kakao.Channel instead.');
    }
  }
  function createAddFriendButton (settings) {
    warnDeprecation();
    const container$ = getElement(settings.container);
    if (!container$) {
      throw new KakaoError('container is required for PlusFriend.createAddFriendButton: pass in element or id');
    } else {
      applyAttributes(settings, container$, {
        plusFriendId: 'data-plusfriend-id',
        size: 'data-size',
        color: 'data-color',
        shape: 'data-shape',
        supportMultipleDensities: 'data-support-multiple-densities'
      });
    }
    settings = processRules(settings, rules$3.createAddFriendButton, 'PlusFriend.createAddFriendButton');
    const imgSrc = getAddFriendImgSrc(settings);
    const anchor$ = createAnchorImage$1(settings, imgSrc, '플러스친구 친구 추가 버튼');
    container$.appendChild(anchor$);
    const clickHandler = function clickHandler (e) {
      e.preventDefault();
      openAddFriendPopup(settings);
    };
    addEvent(anchor$, 'click', clickHandler);
    cleanups$2.push(function () {
      removeEvent(anchor$, 'click', clickHandler);
      container$.removeChild(anchor$);
    });
  }
  function addFriend (settings) {
    warnDeprecation();
    settings = processRules(settings, rules$3.addFriend, 'PlusFriend.addFriend');
    openAddFriendPopup(settings);
  }
  function getAddFriendImgSrc (settings) {
    const filename = 'friendadd_'.concat(settings.size, '_').concat(settings.color, '_').concat(settings.shape, '.png');
    return ''.concat(URL.channelIcon, '/plusfriend/').concat(filename);
  }
  function openAddFriendPopup (settings) {
    let addFriendUrl = ''.concat(URL.channel, '/').concat(settings.plusFriendId, '/friend');
    if (getAppKey$1() !== null) {
      addFriendUrl += '?'.concat(makeChannelParams(API_VER));
    }
    windowOpen(addFriendUrl, ADD_FRIEND_POPUP_NAME, POPUP_FEATURES);
  }
  function createChatButton (settings) {
    warnDeprecation();
    const container$ = getElement(settings.container);
    if (!container$) {
      throw new KakaoError('container is required for PlusFriend.createChatButton: pass in element or id');
    } else {
      applyAttributes(settings, container$, {
        plusFriendId: 'data-plusfriend-id',
        size: 'data-size',
        color: 'data-color',
        shape: 'data-shape',
        title: 'data-title',
        supportMultipleDensities: 'data-support-multiple-densities'
      });
    }
    settings = processRules(settings, rules$3.createChatButton, 'PlusFriend.createChatButton');
    const imgSrc = getChatImgSrc(settings);
    const anchor$ = createAnchorImage$1(settings, imgSrc, '플러스친구 1:1 채팅 버튼');
    container$.appendChild(anchor$);
    const clickHandler = function clickHandler (e) {
      e.preventDefault();
      openChatPopup(settings);
    };
    addEvent(anchor$, 'click', clickHandler);
    cleanups$2.push(function () {
      removeEvent(anchor$, 'click', clickHandler);
      container$.removeChild(anchor$);
    });
  }
  function chat (settings) {
    warnDeprecation();
    settings = processRules(settings, rules$3.chat, 'PlusFriend.chat');
    openChatPopup(settings);
  }
  function getChatImgSrc (settings) {
    const filename = ''.concat(settings.title, '_').concat(settings.size, '_').concat(settings.color, '_').concat(settings.shape, '.png');
    return ''.concat(URL.channelIcon, '/plusfriend/').concat(filename);
  }
  function openChatPopup (settings) {
    let chatUrl = ''.concat(URL.channel, '/').concat(settings.plusFriendId, '/chat');
    if (getAppKey$1() !== null) {
      chatUrl += '?'.concat(makeChannelParams(API_VER));
    }
    windowOpen(chatUrl, CHAT_POPUP_NAME, POPUP_FEATURES);
  }
  var cleanups$2 = [];
  function cleanup$3 () {
    emptyCleanups(cleanups$2);
  }

  const request$3 = /* #__PURE__ */Object.freeze({
    __proto__: null,
    createAddFriendButton: createAddFriendButton,
    addFriend: addFriend,
    createChatButton: createChatButton,
    chat: chat,
    cleanup: cleanup$3
  });

  const PlusFriend = makeModule([request$3]);
  const PlusFriend$1 = PlusFriend;

  const urlInfoRule = {
    required: {
      title: isString
    },
    optional: {
      desc: isString,
      name: isString,
      images: isArray$1,
      type: isString
    },
    defaults: {
      type: 'website'
    },
    after: function after (settings) {
      if (settings.images) {
        settings.imageurl = settings.images;
        delete settings.images;
      }
    }
  };
  const rules$2 = {
    createShareButton: {
      required: {
        container: passesOneOf([isElement, isString])
      },
      optional: {
        url: isString,
        text: isString
      },
      defaults: {
        url: location.href
      }
    },
    share: {
      optional: {
        url: isString,
        text: isString
      },
      defaults: {
        url: location.href
      }
    },
    open: {
      optional: {
        url: isString,
        text: isString,
        urlInfo: function urlInfo (obj) {
          return isObject(obj) && !!processRules(obj, urlInfoRule, 'Story.open');
        },
        install: isBoolean
      },
      defaults: {
        url: location.href,
        install: false
      }
    },
    createFollowButton: {
      required: {
        container: passesOneOf([isElement, isString]),
        id: isString
      },
      optional: {
        showFollowerCount: isBoolean,
        type: isOneOf(['horizontal', 'vertical'])
      },
      defaults: {
        showFollowerCount: true,
        type: 'horizontal'
      },
      after: function after (settings) {
        if (settings.id[0] !== '@') {
          settings.id = '@'.concat(settings.id);
        }
      }
    }
  };

  function createShareButton (settings) {
    const container$ = getElement(settings.container);
    if (!container$) {
      throw new KakaoError('container is required for Story.createShareButton: pass in element or id');
    } else {
      applyAttributes(settings, container$, {
        url: 'data-url'
      });
    }
    settings = processRules(settings, rules$2.createShareButton, 'Story.createShareButton');
    const anchor$ = createAnchorImage(URL.storyIcon, '카카오스토리 웹 공유 버튼');
    container$.appendChild(anchor$);
    const clickHandler = function clickHandler (e) {
      e.preventDefault();
      openSharePopup(settings);
    };
    addEvent(anchor$, 'click', clickHandler);
    cleanups$1.push(function () {
      removeEvent(anchor$, 'click', clickHandler);
      container$.removeChild(anchor$);
    });
  }
  function createAnchorImage (imgSrc, imgTitle) {
    const a$ = document.createElement('a');
    a$.setAttribute('href', '#');
    const img$ = document.createElement('img');
    img$.setAttribute('src', imgSrc);
    img$.setAttribute('title', imgTitle);
    img$.setAttribute('alt', imgTitle);
    a$.appendChild(img$);
    return a$;
  }
  function share$1 (settings) {
    settings = processRules(settings, rules$2.share, 'Story.share');
    openSharePopup(settings);
  }
  function openSharePopup (settings) {
    const params = extend({
      url: settings.url
    }, makeStoryParams());
    if (settings.text) {
      params.text = settings.text;
    }
    windowOpen(''.concat(URL.storyShare, '?').concat(buildQueryString(params)), 'kakaostory_social_plugin', 'width=670, height=800, scrollbars=yes');
  }
  function open (settings) {
    settings = processRules(settings, rules$2.open, 'Story.open');
    const storyPostScheme = makeStoryPostScheme(settings);
    const androidIntent = ['intent:'.concat(storyPostScheme, '#Intent'), ''.concat(settings.install ? 'package=com.kakao.story;' : '', 'end;')].join(';');
    const web2appOptions = {
      urlScheme: storyPostScheme,
      intentURI: androidIntent,
      appName: 'KakaoStory',
      storeURL: getInstallUrl('com.kakao.story', '486244601'),
      onUnsupportedEnvironment: function onUnsupportedEnvironment () {
        settings.fail && settings.fail();
      }
    };
    try {
      web2app$1(web2appOptions);
    } catch (error) {
    }
  }
  function makeStoryPostScheme (settings) {
    const domain = location.hostname || '';
    const params = extend({
      apiver: '1.0',
      appver: VERSION,
      appid: domain,
      appname: domain,
      post: settings.text ? ''.concat(settings.text, '\n').concat(settings.url) : settings.url
    }, makeStoryParams());
    if (settings.urlInfo) {
      params.urlinfo = JSON.stringify(settings.urlInfo);
      params.appname = settings.urlInfo.name || params.appname;
    }
    return ''.concat(URL.storyPostScheme, '?').concat(buildQueryString(params));
  }
  function createFollowButton (settings) {
    const container$ = getElement(settings.container);
    if (!container$) {
      throw new KakaoError('container is required for Story.createFollowButton: pass in element or id');
    } else {
      applyAttributes(settings, container$, {
        id: 'data-id',
        showFollowerCount: 'data-show-follower-count',
        type: 'data-type'
      });
    }
    settings = processRules(settings, rules$2.createFollowButton, 'Story.createFollowButton');
    const _createStoryFollowIfr = createStoryFollowIframe(settings);
    const iframe$ = _createStoryFollowIfr.iframe$;
    const messageHandler = _createStoryFollowIfr.messageHandler;
    container$.appendChild(iframe$);
    addEvent(window, 'message', messageHandler);
    cleanups$1.push(function () {
      removeEvent(window, 'message', messageHandler);
      container$.removeChild(iframe$);
    });
  }
  let _storyFollowIframeId = 0;
  function createStoryFollowIframe (settings) {
    const iframeId = _storyFollowIframeId++;
    const iframeWidth = settings.showFollowerCount && settings.type === 'horizontal' ? 85 : 59;
    const iframeHeight = settings.showFollowerCount && settings.type === 'vertical' ? 46 : 20;
    const iframe$ = document.createElement('iframe');
    iframe$.src = makeStoryFollowUrl(settings, iframeId);
    iframe$.setAttribute('frameborder', '0');
    iframe$.setAttribute('marginwidth', '0');
    iframe$.setAttribute('marginheight', '0');
    iframe$.setAttribute('scrolling', 'no');
    iframe$.setAttribute('style', 'width:'.concat(iframeWidth, 'px; height:').concat(iframeHeight, 'px;'));
    const messageHandler = function messageHandler (e) {
      if (e.data && /\.kakao\.com$/.test(e.origin) && typeof e.data === 'string') {
        const _map = map(e.data.split(','), function (e) {
          return parseInt(e, 10);
        });
        const _map2 = _slicedToArray(_map, 3);
        const originIframeId = _map2[0];
        const afterWidth = _map2[1];
        const afterHeight = _map2[2];
        if (originIframeId === iframeId) {
          if (iframeWidth !== afterWidth) {
            iframe$.style.width = ''.concat(afterWidth, 'px');
          }
          if (iframeHeight !== afterHeight) {
            iframe$.style.height = ''.concat(afterHeight, 'px');
          }
        }
      }
    };
    return {
      iframe$: iframe$,
      messageHandler: messageHandler
    };
  }
  function makeStoryFollowUrl (settings, iframeId) {
    const params = extend({
      id: settings.id,
      type: settings.type,
      hideFollower: !settings.showFollowerCount,
      frameId: iframeId
    }, makeStoryParams());
    return ''.concat(URL.storyChannelFollow, '?').concat(buildQueryString(params));
  }
  function makeStoryParams () {
    const params = {
      kakao_agent: KAKAO_AGENT
    };
    if (getAppKey$1() !== null) {
      params.app_key = getAppKey$1();
    }
    return params;
  }
  var cleanups$1 = [];
  function cleanup$2 () {
    emptyCleanups(cleanups$1);
  }

  const request$2 = /* #__PURE__ */Object.freeze({
    __proto__: null,
    createShareButton: createShareButton,
    share: share$1,
    open: open,
    createFollowButton: createFollowButton,
    cleanup: cleanup$2
  });

  const Story = makeModule([request$2]);
  const Story$1 = Story;

  const coordTypes = ['wgs84', 'katec'];
  const vehicleTypes = [1, 2, 3, 4, 5, 6, 7];
  const rpOptions = [1, 2, 3, 4, 5, 6, 8, 100];
  const viaPointRule = {
    required: {
      name: isString,
      x: isNumber,
      y: isNumber
    },
    optional: {
      rpflag: isString,
      cid: isString
    }
  };
  const rules$1 = {
    start: {
      required: {
        name: isString,
        x: isNumber,
        y: isNumber
      },
      optional: {
        coordType: isOneOf(coordTypes),
        vehicleType: isOneOf(vehicleTypes),
        rpOption: isOneOf(rpOptions),
        routeInfo: isBoolean,
        sX: isNumber,
        sY: isNumber,
        sAngle: isNumber,
        returnUri: isString,
        rpflag: isString,
        cid: isString,
        guideId: isNumber,
        viaPoints: function viaPoints (points) {
          if (!isArray$1(points)) {
            return false;
          } else if (points.length > 3) {
            throw new KakaoError('Invalid parameter keys: via points should not be exceed 3. at Navi.start');
          } else {
            forEach(points, function (point) {
              return processRules(point, viaPointRule, 'Navi.start');
            });
            return true;
          }
        }
      },
      defaults: {
        coordType: 'katec',
        vehicleType: 1,
        rpOption: 100,
        routeInfo: false
      }
    },
    share: {
      required: {
        name: isString,
        x: isNumber,
        y: isNumber
      },
      optional: {
        coordType: isOneOf(coordTypes),
        rpflag: isString,
        cid: isString,
        guideId: isNumber
      },
      defaults: {
        coordType: 'katec'
      }
    }
  };

  function start (settings) {
    settings = processRules(settings, rules$1.start, 'Navi.start');
    const naviStartParams = buildQueryString(makeNaviStartParams(settings));
    const naviScheme = ''.concat(URL.naviScheme, '?').concat(naviStartParams);
    const fallbackUrl = ''.concat(URL.naviFallback, '?').concat(naviStartParams);
    callWeb2app(naviScheme, fallbackUrl);
  }
  function makeNaviStartParams (settings) {
    const destination = {
      name: settings.name,
      x: settings.x,
      y: settings.y,
      rpflag: settings.rpflag,
      cid: settings.cid,
      guide_id: settings.guideId
    };
    const option = {
      coord_type: settings.coordType,
      vehicle_type: settings.vehicleType,
      rpoption: settings.rpOption,
      route_info: settings.routeInfo,
      s_x: settings.sX,
      s_y: settings.sY,
      s_angle: settings.sAngle,
      return_uri: settings.returnUri
    };
    return _objectSpread2(_objectSpread2({}, makeNaviParams()), {}, {
      param: {
        destination: destination,
        option: option,
        via_list: settings.viaPoints
      }
    });
  }
  function share (settings) {
    settings = processRules(settings, rules$1.share, 'Navi.share');
    const naviShareParams = buildQueryString(makeNaviShareParams(settings));
    const naviScheme = ''.concat(URL.naviScheme, '?').concat(naviShareParams);
    const fallbackUrl = ''.concat(URL.naviFallback, '?').concat(naviShareParams);
    callWeb2app(naviScheme, fallbackUrl);
  }
  function makeNaviShareParams (settings) {
    const destination = {
      name: settings.name,
      x: settings.x,
      y: settings.y,
      rpflag: settings.rpflag,
      cid: settings.cid,
      guide_id: settings.guideId
    };
    const option = {
      route_info: true,
      coord_type: settings.coordType
    };
    return _objectSpread2(_objectSpread2({}, makeNaviParams()), {}, {
      param: {
        destination: destination,
        option: option
      }
    });
  }
  function makeNaviParams () {
    return {
      appkey: getAppKey$1(),
      apiver: '1.0',
      extras: {
        KA: KAKAO_AGENT
      }
    };
  }
  function callWeb2app (naviScheme, fallbackUrl) {
    const androidIntent = ['intent:'.concat(naviScheme, '#Intent'), 'package=com.locnall.KimGiSa', 'S.browser_fallback_url='.concat(encodeURIComponent(fallbackUrl)), 'end;'].join(';');
    const web2appOptions = {
      urlScheme: naviScheme,
      intentURI: androidIntent,
      storeURL: fallbackUrl,
      universalLink: fallbackUrl
    };
    try {
      web2app$1(web2appOptions);
    } catch (error) {
    }
  }

  const request$1 = /* #__PURE__ */Object.freeze({
    __proto__: null,
    start: start,
    share: share
  });

  const Navi = makeModule([request$1]);
  const Navi$1 = Navi;

  function pickableCountValidator (n) {
    return isInteger(n) && n > 0 && n < 101;
  }
  function checkPickableCounts (settings) {
    if (settings.maxPickableCount < settings.minPickableCount) {
      throw new KakaoError('"minPickableCount" should not larger than "maxPickableCount"');
    }
  }
  function disableSelectOptionsValidator (arr) {
    const disableSelectOptionRule = {
      required: {
        reason: isOneOf(['msgBlocked', 'registered', 'unregistered', 'notFriend', 'custom'])
      },
      optional: {
        message: isString,
        uuids: isArray$1
      },
      after: function after (settings) {
        if (settings.reason === 'custom' && (!settings.message || !settings.uuids)) {
          throw new KakaoError('"message" and "uuids" must be set for "custom" option in disableSelectOption');
        }
      }
    };
    return isArray$1(arr) && every(arr, function (e) {
      return isObject(e) && !!processRules(e, disableSelectOptionRule, 'disableSelectOption');
    });
  }
  function checkPickerChatFilters (settings) {
    if (settings.selectionType === 'chatMember') {
      const f = settings.chatFilters;
      if (f.indexOf('open') > -1) {
        throw new KakaoError('"open" is not allowed in "chatFilters"');
      }
      if ((f.indexOf('direct') > -1 || f.indexOf('multi') > -1) && f.indexOf('regular') === -1) {
        throw new KakaoError('"regular" should be included in "chatFilters"');
      }
    }
  }
  const friendFilters = ['none', 'invitable', 'registered'];
  const serviceTypeFilters = ['talk', 'story', 'talkstory'];
  const selectionTypes = ['chat', 'chatMember'];
  const _chatFilters = ['regular', 'direct', 'multi', 'open'];
  const osFilters = ['all', 'ios', 'android'];
  const friendPickerOptional = {
    returnUrl: isString,
    success: isFunction,
    fail: isFunction,
    always: isFunction,
    friendFilter: isOneOf(friendFilters),
    serviceTypeFilter: isOneOf(serviceTypeFilters),
    title: isString,
    enableSearch: isBoolean,
    countryCodeFilters: isArray$1,
    usingOsFilter: isOneOf(osFilters),
    showMyProfile: isBoolean,
    showFavorite: isBoolean,
    disableSelectOptions: disableSelectOptionsValidator,
    displayAllProfile: isBoolean,
    enableBackButton: isBoolean
  };
  const friendPickerDefault = {
    success: emptyFunc,
    fail: emptyFunc,
    always: emptyFunc
  };
  const friendsParamsRule = {
    optional: {
      friendFilter: isOneOf(friendFilters),
      serviceTypeFilter: isOneOf(serviceTypeFilters),
      countryCodeFilters: isArray$1,
      usingOsFilter: isOneOf(osFilters),
      showMyProfile: isBoolean,
      showFavorite: isBoolean,
      showPickedFriend: isBoolean
    }
  };
  const chatParamsRule = {
    optional: {
      selectionType: isOneOf(selectionTypes),
      chatFilters: function chatFilters (arr) {
        return isArray$1(arr) && every(arr, function (e) {
          return isOneOf(_chatFilters)(e);
        });
      }
    },
    defaults: {
      selectionType: selectionTypes[0],
      chatFilters: [_chatFilters[0]]
    },
    after: checkPickerChatFilters
  };
  const rules = {
    selectFriend: {
      optional: friendPickerOptional,
      defaults: friendPickerDefault
    },
    selectFriends: {
      optional: _objectSpread2(_objectSpread2({}, friendPickerOptional), {}, {
        showPickedFriend: isBoolean,
        maxPickableCount: pickableCountValidator,
        minPickableCount: pickableCountValidator
      }),
      defaults: friendPickerDefault,
      after: checkPickableCounts
    },
    selectChat: {
      optional: {
        returnUrl: isString,
        success: isFunction,
        fail: isFunction,
        always: isFunction,
        selectionType: isOneOf(selectionTypes),
        chatFilters: function chatFilters (arr) {
          return isArray$1(arr) && every(arr, function (e) {
            return isOneOf(_chatFilters)(e);
          });
        },
        title: isString,
        enableSearch: isBoolean,
        disableSelectOptions: disableSelectOptionsValidator,
        displayAllProfile: isBoolean,
        maxPickableCount: pickableCountValidator,
        minPickableCount: pickableCountValidator,
        enableBackButton: isBoolean
      },
      defaults: {
        success: emptyFunc,
        fail: emptyFunc,
        always: emptyFunc,
        selectionType: selectionTypes[0],
        chatFilters: [_chatFilters[0]]
      },
      after: function after (settings) {
        checkPickableCounts(settings);
        checkPickerChatFilters(settings);
      }
    },
    select: {
      optional: {
        returnUrl: isString,
        success: isFunction,
        fail: isFunction,
        always: isFunction,
        title: isString,
        enableSearch: isBoolean,
        disableSelectOptions: disableSelectOptionsValidator,
        displayAllProfile: isBoolean,
        maxPickableCount: pickableCountValidator,
        minPickableCount: pickableCountValidator,
        enableBackButton: isBoolean,
        friendsParams: function friendsParams (obj) {
          return isObject(obj) && !!processRules(obj, friendsParamsRule, 'Picker.select');
        },
        chatParams: function chatParams (obj) {
          return isObject(obj) && !!processRules(obj, chatParamsRule, 'Picker.select');
        }
      },
      defaults: {
        success: emptyFunc,
        fail: emptyFunc,
        always: emptyFunc
      },
      after: checkPickableCounts
    }
  };

  function selectFriends (settings) {
    settings = processRules(settings, rules.selectFriends, 'Picker.selectFriends');
    requestPicker(settings, pruneNeedlessParams(settings), '/select/multiple');
  }
  function selectFriend (settings) {
    settings = processRules(settings, rules.selectFriend, 'Picker.selectFriend');
    requestPicker(settings, pruneNeedlessParams(settings), '/select/single');
  }
  function selectChat (settings) {
    settings = processRules(settings, rules.selectChat, 'Picker.selectChat');
    requestPicker(settings, pruneNeedlessParams(settings), '/chat/select');
  }
  function select (settings) {
    settings = processRules(settings, rules.select, 'Picker.select');
    const params = _objectSpread2(_objectSpread2(_objectSpread2({}, pruneNeedlessParams(settings)), settings.friendsParams), settings.chatParams);
    requestPicker(settings, params, '/tab/select');
  }
  function requestPicker (settings, params, subpath) {
    cleanup$1();
    const transId = generateTxId();
    const pickerParams = _objectSpread2(_objectSpread2({
      transId: transId,
      appKey: getAppKey$1(),
      ka: KAKAO_AGENT
    }, getAccessToken() && {
      token: getAccessToken()
    }), formatParams(params));
    const url = URL.pickerDomain + subpath;
    if (settings.returnUrl) {
      pickerParams.returnUrl = settings.returnUrl;
      createAndSubmitForm(pickerParams, url);
    } else {
      createHiddenIframe(transId, ''.concat(URL.pickerDomain, '/proxy?transId=').concat(transId), cleanups);
      addMessageEvent(settings, URL.pickerDomain, cleanups);
      openPopupAndSubmitForm(pickerParams, {
        url: url,
        popupName: 'friend_picker',
        popupFeatures: 'location=no,resizable=no,status=no,scrollbars=no,width=460,height=608'
      });
    }
  }
  function pruneNeedlessParams (settings) {
    const cloned = _objectSpread2({}, settings);
    const keysNeedPrune = ['returnUrl', 'success', 'fail', 'always', 'friendsParams', 'chatParams'];
    keysNeedPrune.forEach(function (key) {
      if (cloned[key]) {
        delete cloned[key];
      }
    });
    return cloned;
  }
  function formatParams (params) {
    const keysNeedConvertToCSV = ['countryCodeFilters', 'chatFilters'];
    keysNeedConvertToCSV.forEach(function (key) {
      if (params[key] !== undefined) {
        params[key] = params[key].join(',');
      }
    });
    if (params.disableSelectOptions) {
      params.disableSelectOptions = JSON.stringify(params.disableSelectOptions);
    }
    return params;
  }
  var cleanups = [];
  function cleanup$1 () {
    emptyCleanups(cleanups);
  }

  const request = /* #__PURE__ */Object.freeze({
    __proto__: null,
    selectFriends: selectFriends,
    selectFriend: selectFriend,
    selectChat: selectChat,
    select: select,
    cleanup: cleanup$1
  });

  const Picker = makeModule([request]);
  const Picker$1 = Picker;

  if (typeof define === 'function' && define.amd) {
    window.Kakao = exports;
  }
  if (typeof window.kakaoAsyncInit === 'function') {
    setTimeout(function () {
      window.kakaoAsyncInit();
    }, 0);
  }
  function init (appKey) {
    if (UA.browser.msie && UA.browser.version.major < 9) {
      throw new KakaoError('Kakao.init: Unsupported browser');
    }
    if (isInitialized()) {
      throw new KakaoError('Kakao.init: Already initialized');
    }
    if (!isString(appKey)) {
      throw new KakaoError('Kakao.init: App key must be provided');
    }
    setAppKey(appKey);
    {
      this.Auth = Auth$1;
      this.API = API$1;
      this.Link = Link$1;
      this.Channel = Channel$1;
      this.PlusFriend = PlusFriend$1;
      this.Story = Story$1;
      this.Navi = Navi$1;
      this.Picker = Picker$1;
    }
  }
  function isInitialized () {
    return getAppKey$1() !== null;
  }
  function cleanup () {
    const _this = this;
    forEach(['Auth', 'API', 'Link', 'Channel', 'PlusFriend', 'Story', 'Navi', 'Picker'], function (e) {
      return _this[e] && _this[e].cleanup();
    });
    setAppKey(null);
  }

  exports.VERSION = VERSION;
  exports.cleanup = cleanup;
  exports.init = init;
  exports.isInitialized = isInitialized;

  Object.defineProperty(exports, '__esModule', { value: true });
});
