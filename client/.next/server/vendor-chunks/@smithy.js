"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@smithy";
exports.ids = ["vendor-chunks/@smithy"];
exports.modules = {

/***/ "(ssr)/./node_modules/@smithy/util-hex-encoding/dist-es/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@smithy/util-hex-encoding/dist-es/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromHex: () => (/* binding */ fromHex),\n/* harmony export */   toHex: () => (/* binding */ toHex)\n/* harmony export */ });\nconst SHORT_TO_HEX = {};\nconst HEX_TO_SHORT = {};\nfor (let i = 0; i < 256; i++) {\n    let encodedByte = i.toString(16).toLowerCase();\n    if (encodedByte.length === 1) {\n        encodedByte = `0${encodedByte}`;\n    }\n    SHORT_TO_HEX[i] = encodedByte;\n    HEX_TO_SHORT[encodedByte] = i;\n}\nfunction fromHex(encoded) {\n    if (encoded.length % 2 !== 0) {\n        throw new Error(\"Hex encoded strings must have an even number length\");\n    }\n    const out = new Uint8Array(encoded.length / 2);\n    for (let i = 0; i < encoded.length; i += 2) {\n        const encodedByte = encoded.slice(i, i + 2).toLowerCase();\n        if (encodedByte in HEX_TO_SHORT) {\n            out[i / 2] = HEX_TO_SHORT[encodedByte];\n        }\n        else {\n            throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);\n        }\n    }\n    return out;\n}\nfunction toHex(bytes) {\n    let out = \"\";\n    for (let i = 0; i < bytes.byteLength; i++) {\n        out += SHORT_TO_HEX[bytes[i]];\n    }\n    return out;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLWhleC1lbmNvZGluZy9kaXN0LWVzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQSwwQkFBMEIsWUFBWTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsYUFBYTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJEOlxcTmluZVxcd2ViZW5kXFxyZWFsLWVzdGF0ZS1wcm9kXFxjbGllbnRcXG5vZGVfbW9kdWxlc1xcQHNtaXRoeVxcdXRpbC1oZXgtZW5jb2RpbmdcXGRpc3QtZXNcXGluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNIT1JUX1RPX0hFWCA9IHt9O1xuY29uc3QgSEVYX1RPX1NIT1JUID0ge307XG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgaSsrKSB7XG4gICAgbGV0IGVuY29kZWRCeXRlID0gaS50b1N0cmluZygxNikudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoZW5jb2RlZEJ5dGUubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGVuY29kZWRCeXRlID0gYDAke2VuY29kZWRCeXRlfWA7XG4gICAgfVxuICAgIFNIT1JUX1RPX0hFWFtpXSA9IGVuY29kZWRCeXRlO1xuICAgIEhFWF9UT19TSE9SVFtlbmNvZGVkQnl0ZV0gPSBpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZyb21IZXgoZW5jb2RlZCkge1xuICAgIGlmIChlbmNvZGVkLmxlbmd0aCAlIDIgIT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSGV4IGVuY29kZWQgc3RyaW5ncyBtdXN0IGhhdmUgYW4gZXZlbiBudW1iZXIgbGVuZ3RoXCIpO1xuICAgIH1cbiAgICBjb25zdCBvdXQgPSBuZXcgVWludDhBcnJheShlbmNvZGVkLmxlbmd0aCAvIDIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5jb2RlZC5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICBjb25zdCBlbmNvZGVkQnl0ZSA9IGVuY29kZWQuc2xpY2UoaSwgaSArIDIpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChlbmNvZGVkQnl0ZSBpbiBIRVhfVE9fU0hPUlQpIHtcbiAgICAgICAgICAgIG91dFtpIC8gMl0gPSBIRVhfVE9fU0hPUlRbZW5jb2RlZEJ5dGVdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZGVjb2RlIHVucmVjb2duaXplZCBzZXF1ZW5jZSAke2VuY29kZWRCeXRlfSBhcyBoZXhhZGVjaW1hbGApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG59XG5leHBvcnQgZnVuY3Rpb24gdG9IZXgoYnl0ZXMpIHtcbiAgICBsZXQgb3V0ID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ5dGVzLmJ5dGVMZW5ndGg7IGkrKykge1xuICAgICAgICBvdXQgKz0gU0hPUlRfVE9fSEVYW2J5dGVzW2ldXTtcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/util-hex-encoding/dist-es/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/util-utf8/dist-es/fromUtf8.js":
/*!************************************************************!*\
  !*** ./node_modules/@smithy/util-utf8/dist-es/fromUtf8.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromUtf8: () => (/* binding */ fromUtf8)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-buffer-from */ \"(ssr)/./node_modules/@smithy/util-utf8/node_modules/@smithy/util-buffer-from/dist-es/index.js\");\n\nconst fromUtf8 = (input) => {\n    const buf = (0,_smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__.fromString)(input, \"utf8\");\n    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLXV0ZjgvZGlzdC1lcy9mcm9tVXRmOC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFzRDtBQUMvQztBQUNQLGdCQUFnQixvRUFBVTtBQUMxQjtBQUNBIiwic291cmNlcyI6WyJEOlxcTmluZVxcd2ViZW5kXFxyZWFsLWVzdGF0ZS1wcm9kXFxjbGllbnRcXG5vZGVfbW9kdWxlc1xcQHNtaXRoeVxcdXRpbC11dGY4XFxkaXN0LWVzXFxmcm9tVXRmOC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmcm9tU3RyaW5nIH0gZnJvbSBcIkBzbWl0aHkvdXRpbC1idWZmZXItZnJvbVwiO1xuZXhwb3J0IGNvbnN0IGZyb21VdGY4ID0gKGlucHV0KSA9PiB7XG4gICAgY29uc3QgYnVmID0gZnJvbVN0cmluZyhpbnB1dCwgXCJ1dGY4XCIpO1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShidWYuYnVmZmVyLCBidWYuYnl0ZU9mZnNldCwgYnVmLmJ5dGVMZW5ndGggLyBVaW50OEFycmF5LkJZVEVTX1BFUl9FTEVNRU5UKTtcbn07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/util-utf8/dist-es/fromUtf8.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/util-utf8/dist-es/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@smithy/util-utf8/dist-es/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromUtf8: () => (/* reexport safe */ _fromUtf8__WEBPACK_IMPORTED_MODULE_0__.fromUtf8),\n/* harmony export */   toUint8Array: () => (/* reexport safe */ _toUint8Array__WEBPACK_IMPORTED_MODULE_1__.toUint8Array),\n/* harmony export */   toUtf8: () => (/* reexport safe */ _toUtf8__WEBPACK_IMPORTED_MODULE_2__.toUtf8)\n/* harmony export */ });\n/* harmony import */ var _fromUtf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromUtf8 */ \"(ssr)/./node_modules/@smithy/util-utf8/dist-es/fromUtf8.js\");\n/* harmony import */ var _toUint8Array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toUint8Array */ \"(ssr)/./node_modules/@smithy/util-utf8/dist-es/toUint8Array.js\");\n/* harmony import */ var _toUtf8__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toUtf8 */ \"(ssr)/./node_modules/@smithy/util-utf8/dist-es/toUtf8.js\");\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLXV0ZjgvZGlzdC1lcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMkI7QUFDSTtBQUNOIiwic291cmNlcyI6WyJEOlxcTmluZVxcd2ViZW5kXFxyZWFsLWVzdGF0ZS1wcm9kXFxjbGllbnRcXG5vZGVfbW9kdWxlc1xcQHNtaXRoeVxcdXRpbC11dGY4XFxkaXN0LWVzXFxpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLi9mcm9tVXRmOFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdG9VaW50OEFycmF5XCI7XG5leHBvcnQgKiBmcm9tIFwiLi90b1V0ZjhcIjtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/util-utf8/dist-es/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/util-utf8/dist-es/toUint8Array.js":
/*!****************************************************************!*\
  !*** ./node_modules/@smithy/util-utf8/dist-es/toUint8Array.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toUint8Array: () => (/* binding */ toUint8Array)\n/* harmony export */ });\n/* harmony import */ var _fromUtf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromUtf8 */ \"(ssr)/./node_modules/@smithy/util-utf8/dist-es/fromUtf8.js\");\n\nconst toUint8Array = (data) => {\n    if (typeof data === \"string\") {\n        return (0,_fromUtf8__WEBPACK_IMPORTED_MODULE_0__.fromUtf8)(data);\n    }\n    if (ArrayBuffer.isView(data)) {\n        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);\n    }\n    return new Uint8Array(data);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLXV0ZjgvZGlzdC1lcy90b1VpbnQ4QXJyYXkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBc0M7QUFDL0I7QUFDUDtBQUNBLGVBQWUsbURBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJEOlxcTmluZVxcd2ViZW5kXFxyZWFsLWVzdGF0ZS1wcm9kXFxjbGllbnRcXG5vZGVfbW9kdWxlc1xcQHNtaXRoeVxcdXRpbC11dGY4XFxkaXN0LWVzXFx0b1VpbnQ4QXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZnJvbVV0ZjggfSBmcm9tIFwiLi9mcm9tVXRmOFwiO1xuZXhwb3J0IGNvbnN0IHRvVWludDhBcnJheSA9IChkYXRhKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBmcm9tVXRmOChkYXRhKTtcbiAgICB9XG4gICAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhkYXRhKSkge1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZGF0YS5idWZmZXIsIGRhdGEuYnl0ZU9mZnNldCwgZGF0YS5ieXRlTGVuZ3RoIC8gVWludDhBcnJheS5CWVRFU19QRVJfRUxFTUVOVCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgVWludDhBcnJheShkYXRhKTtcbn07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/util-utf8/dist-es/toUint8Array.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/util-utf8/dist-es/toUtf8.js":
/*!**********************************************************!*\
  !*** ./node_modules/@smithy/util-utf8/dist-es/toUtf8.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toUtf8: () => (/* binding */ toUtf8)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-buffer-from */ \"(ssr)/./node_modules/@smithy/util-utf8/node_modules/@smithy/util-buffer-from/dist-es/index.js\");\n\nconst toUtf8 = (input) => (0,_smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__.fromArrayBuffer)(input.buffer, input.byteOffset, input.byteLength).toString(\"utf8\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLXV0ZjgvZGlzdC1lcy90b1V0ZjguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMkQ7QUFDcEQsMEJBQTBCLHlFQUFlIiwic291cmNlcyI6WyJEOlxcTmluZVxcd2ViZW5kXFxyZWFsLWVzdGF0ZS1wcm9kXFxjbGllbnRcXG5vZGVfbW9kdWxlc1xcQHNtaXRoeVxcdXRpbC11dGY4XFxkaXN0LWVzXFx0b1V0ZjguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZnJvbUFycmF5QnVmZmVyIH0gZnJvbSBcIkBzbWl0aHkvdXRpbC1idWZmZXItZnJvbVwiO1xuZXhwb3J0IGNvbnN0IHRvVXRmOCA9IChpbnB1dCkgPT4gZnJvbUFycmF5QnVmZmVyKGlucHV0LmJ1ZmZlciwgaW5wdXQuYnl0ZU9mZnNldCwgaW5wdXQuYnl0ZUxlbmd0aCkudG9TdHJpbmcoXCJ1dGY4XCIpO1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/util-utf8/dist-es/toUtf8.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/util-utf8/node_modules/@smithy/is-array-buffer/dist-es/index.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@smithy/util-utf8/node_modules/@smithy/is-array-buffer/dist-es/index.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isArrayBuffer: () => (/* binding */ isArrayBuffer)\n/* harmony export */ });\nconst isArrayBuffer = (arg) => (typeof ArrayBuffer === \"function\" && arg instanceof ArrayBuffer) ||\n    Object.prototype.toString.call(arg) === \"[object ArrayBuffer]\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLXV0Zjgvbm9kZV9tb2R1bGVzL0BzbWl0aHkvaXMtYXJyYXktYnVmZmVyL2Rpc3QtZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1AiLCJzb3VyY2VzIjpbIkQ6XFxOaW5lXFx3ZWJlbmRcXHJlYWwtZXN0YXRlLXByb2RcXGNsaWVudFxcbm9kZV9tb2R1bGVzXFxAc21pdGh5XFx1dGlsLXV0ZjhcXG5vZGVfbW9kdWxlc1xcQHNtaXRoeVxcaXMtYXJyYXktYnVmZmVyXFxkaXN0LWVzXFxpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaXNBcnJheUJ1ZmZlciA9IChhcmcpID0+ICh0eXBlb2YgQXJyYXlCdWZmZXIgPT09IFwiZnVuY3Rpb25cIiAmJiBhcmcgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikgfHxcbiAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnKSA9PT0gXCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiO1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/util-utf8/node_modules/@smithy/is-array-buffer/dist-es/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/util-utf8/node_modules/@smithy/util-buffer-from/dist-es/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@smithy/util-utf8/node_modules/@smithy/util-buffer-from/dist-es/index.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromArrayBuffer: () => (/* binding */ fromArrayBuffer),\n/* harmony export */   fromString: () => (/* binding */ fromString)\n/* harmony export */ });\n/* harmony import */ var _smithy_is_array_buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/is-array-buffer */ \"(ssr)/./node_modules/@smithy/util-utf8/node_modules/@smithy/is-array-buffer/dist-es/index.js\");\n/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! buffer */ \"buffer\");\n/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst fromArrayBuffer = (input, offset = 0, length = input.byteLength - offset) => {\n    if (!(0,_smithy_is_array_buffer__WEBPACK_IMPORTED_MODULE_0__.isArrayBuffer)(input)) {\n        throw new TypeError(`The \"input\" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);\n    }\n    return buffer__WEBPACK_IMPORTED_MODULE_1__.Buffer.from(input, offset, length);\n};\nconst fromString = (input, encoding) => {\n    if (typeof input !== \"string\") {\n        throw new TypeError(`The \"input\" argument must be of type string. Received type ${typeof input} (${input})`);\n    }\n    return encoding ? buffer__WEBPACK_IMPORTED_MODULE_1__.Buffer.from(input, encoding) : buffer__WEBPACK_IMPORTED_MODULE_1__.Buffer.from(input);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLXV0Zjgvbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC1idWZmZXItZnJvbS9kaXN0LWVzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdEO0FBQ3hCO0FBQ3pCO0FBQ1AsU0FBUyxzRUFBYTtBQUN0Qix1RkFBdUYsY0FBYyxHQUFHLE1BQU07QUFDOUc7QUFDQSxXQUFXLDBDQUFNO0FBQ2pCO0FBQ087QUFDUDtBQUNBLDBGQUEwRixjQUFjLEdBQUcsTUFBTTtBQUNqSDtBQUNBLHNCQUFzQiwwQ0FBTSx5QkFBeUIsMENBQU07QUFDM0QiLCJzb3VyY2VzIjpbIkQ6XFxOaW5lXFx3ZWJlbmRcXHJlYWwtZXN0YXRlLXByb2RcXGNsaWVudFxcbm9kZV9tb2R1bGVzXFxAc21pdGh5XFx1dGlsLXV0ZjhcXG5vZGVfbW9kdWxlc1xcQHNtaXRoeVxcdXRpbC1idWZmZXItZnJvbVxcZGlzdC1lc1xcaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNBcnJheUJ1ZmZlciB9IGZyb20gXCJAc21pdGh5L2lzLWFycmF5LWJ1ZmZlclwiO1xuaW1wb3J0IHsgQnVmZmVyIH0gZnJvbSBcImJ1ZmZlclwiO1xuZXhwb3J0IGNvbnN0IGZyb21BcnJheUJ1ZmZlciA9IChpbnB1dCwgb2Zmc2V0ID0gMCwgbGVuZ3RoID0gaW5wdXQuYnl0ZUxlbmd0aCAtIG9mZnNldCkgPT4ge1xuICAgIGlmICghaXNBcnJheUJ1ZmZlcihpbnB1dCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFwiaW5wdXRcIiBhcmd1bWVudCBtdXN0IGJlIEFycmF5QnVmZmVyLiBSZWNlaXZlZCB0eXBlICR7dHlwZW9mIGlucHV0fSAoJHtpbnB1dH0pYCk7XG4gICAgfVxuICAgIHJldHVybiBCdWZmZXIuZnJvbShpbnB1dCwgb2Zmc2V0LCBsZW5ndGgpO1xufTtcbmV4cG9ydCBjb25zdCBmcm9tU3RyaW5nID0gKGlucHV0LCBlbmNvZGluZykgPT4ge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFwiaW5wdXRcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgc3RyaW5nLiBSZWNlaXZlZCB0eXBlICR7dHlwZW9mIGlucHV0fSAoJHtpbnB1dH0pYCk7XG4gICAgfVxuICAgIHJldHVybiBlbmNvZGluZyA/IEJ1ZmZlci5mcm9tKGlucHV0LCBlbmNvZGluZykgOiBCdWZmZXIuZnJvbShpbnB1dCk7XG59O1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/util-utf8/node_modules/@smithy/util-buffer-from/dist-es/index.js\n");

/***/ })

};
;