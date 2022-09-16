"use strict";
(self["webpackChunkweatherapp"] = self["webpackChunkweatherapp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Great+Vibes&family=Sacramento&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\ninput:focus, textarea:focus, select:focus{\n    outline: none;\n}\n\n#search-bar{\n    width: 400px;\n    margin: 30px auto;\n    display: flex;\n    align-items: center;\n\n}\n\n#search-me {\n    background-color: #4297A0;\n    width: 309px;\n    height: 50px;\n    border-bottom-left-radius: 8px;\n    border-top-left-radius: 8px;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 21px;\n    color:Ivory;\n    border-style: none; \n    border-color: Transparent; \n    overflow: auto;  \n    /* border-top: 2px solid #E57F84;\n    border-left: 2px solid #E57F84;\n    border-bottom: 2px solid #E57F84; */\n}\n\n#search-btn{\n    background: #F4EAE6;\n    height: 50px;\n    width: 108px;\n    text-align: center;\n    line-height: 50px;\n    cursor: pointer;\n    border-bottom-right-radius: 8px;\n    border-top-right-radius: 8px;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 23px;\n    color: #00a3cb;\n}\n\n\n.weather-title{\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.weather{\n  margin-top: 23px;\n}\n\n.weather-desp > p{\nmargin-bottom: 8px;\n}\n\n.weather-desp {\n  display: flex;\n  justify-content: center;\n  border-bottom: 4px solid #e1c7a6;\n  margin-bottom: 13px;\n}\n.wind-speed-container{\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  margin: 23px 0;\n\n}\n\n.child-wind-speed-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 120px;\n}\n\n.child-wind-speed-container > img {\n  width: 40px;\n  height: 40px;\n}\n\n.child-wind-speed-container > p{\n  font-size: 12px;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n\n}\n\n.wind-speed-container > p {\n  font-size: 14px;\n  font-family: monospace;\n  color:rgba(0, 0, 0, 0.5);\n}\n\n\n#wind-speed-container > P {\n  font-size: 12px;\n}\n\n#visi {\n  margin-right: 70px;\n}\n#speed{\n  margin-right: 70px;\n}\n#speed > img {\n  background: #00d6ef;\n  border-radius: 25px;\n}\n/* Weather card */\n  :root {\n    font-size: 5vmin;\n  }\n  \n  body {\n    display: grid;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    margin: 0;\n    padding: 0;\n    font-family: \"Sacramento\", cursive;\n    color: #fff;\n    background: #333;\n    background-image: radial-gradient(ellipse at bottom left, #00a3cb 40%, rgba(0, 163, 203, 0) 40%), radial-gradient(ellipse at top right, #00a3cb 30%, rgba(0, 163, 203, 0) 30%), linear-gradient(to right, #625793 0%, #625793 33%, #d55d64 33%, #d55d64 66%, #e49129 66%);\n    background-size: 50% 100%;\n  }\n  body .message {\n    position: absolute;\n    right: 0.5vw;\n    top: 1vw;\n    max-width: 60vw;\n    font-size: 12px;\n    font-family: \"Open Sans\", sans-serif;\n  }\n  body .message a {\n    color: inherit;\n    text-decoration: none;\n    border-bottom: 1px solid #444;\n  }\n  body .message a:hover {\n    border-width: 3px;\n  }\n  body .card {\n    width: 400px;\n    height: 500px;\n    margin: auto;\n    padding: 2px;\n    border-radius: 1em;\n    border: 1px solid rgba(255, 255, 255, 0.5);\n    text-shadow: 0 0 1em rgba(0, 0, 0, 0.5);\n    background: rgba(255, 255, 255, 0.2);\n    -webkit-backdrop-filter: blur(20px);\n            backdrop-filter: blur(20px);\n    transform: perspective(500px);\n    transform-style: preserve-3d;\n  }\n  body .card .welcome {\n    font-family: \"Sacramento\", cursive;\n    transform: translateZ(20px);\n  }\n  body .card .year {\n    font-family: \"Great Vibes\", cursive;\n    font-size: 2.5em;\n  }\n  body .card .year span {\n    display: block;\n    transform: translateZ(40px);\n  }\n  body .card .year span:nth-child(2) {\n    padding-left: 1em;\n    transform: translateZ(60px);\n  }\n  body .card .year span:nth-child(3) {\n    padding-left: 2em;\n    transform: translateZ(80px);\n  }\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;AACA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,aAAa;IACb,mBAAmB;;AAEvB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,8BAA8B;IAC9B,2BAA2B;IAC3B,gDAAgD;IAChD,eAAe;IACf,WAAW;IACX,kBAAkB;IAClB,yBAAyB;IACzB,cAAc;IACd;;uCAEmC;AACvC;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,+BAA+B;IAC/B,4BAA4B;IAC5B,gDAAgD;IAChD,eAAe;IACf,cAAc;AAClB;;;AAGA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;AACA,kBAAkB;AAClB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,gCAAgC;EAChC,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,cAAc;;AAEhB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,eAAe;EACf,gDAAgD;;AAElD;;AAEA;EACE,eAAe;EACf,sBAAsB;EACtB,wBAAwB;AAC1B;;;AAGA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,mBAAmB;EACnB,mBAAmB;AACrB;AACA,iBAAiB;EACf;IACE,gBAAgB;EAClB;;EAEA;IACE,aAAa;IACb,MAAM;IACN,OAAO;IACP,YAAY;IACZ,aAAa;IACb,SAAS;IACT,UAAU;IACV,kCAAkC;IAClC,WAAW;IACX,gBAAgB;IAChB,yQAAyQ;IACzQ,yBAAyB;EAC3B;EACA;IACE,kBAAkB;IAClB,YAAY;IACZ,QAAQ;IACR,eAAe;IACf,eAAe;IACf,oCAAoC;EACtC;EACA;IACE,cAAc;IACd,qBAAqB;IACrB,6BAA6B;EAC/B;EACA;IACE,iBAAiB;EACnB;EACA;IACE,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,0CAA0C;IAC1C,uCAAuC;IACvC,oCAAoC;IACpC,mCAAmC;YAC3B,2BAA2B;IACnC,6BAA6B;IAC7B,4BAA4B;EAC9B;EACA;IACE,kCAAkC;IAClC,2BAA2B;EAC7B;EACA;IACE,mCAAmC;IACnC,gBAAgB;EAClB;EACA;IACE,cAAc;IACd,2BAA2B;EAC7B;EACA;IACE,iBAAiB;IACjB,2BAA2B;EAC7B;EACA;IACE,iBAAiB;IACjB,2BAA2B;EAC7B","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Great+Vibes&family=Sacramento&display=swap\");\n\n\n*{\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\ninput:focus, textarea:focus, select:focus{\n    outline: none;\n}\n\n#search-bar{\n    width: 400px;\n    margin: 30px auto;\n    display: flex;\n    align-items: center;\n\n}\n\n#search-me {\n    background-color: #4297A0;\n    width: 309px;\n    height: 50px;\n    border-bottom-left-radius: 8px;\n    border-top-left-radius: 8px;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 21px;\n    color:Ivory;\n    border-style: none; \n    border-color: Transparent; \n    overflow: auto;  \n    /* border-top: 2px solid #E57F84;\n    border-left: 2px solid #E57F84;\n    border-bottom: 2px solid #E57F84; */\n}\n\n#search-btn{\n    background: #F4EAE6;\n    height: 50px;\n    width: 108px;\n    text-align: center;\n    line-height: 50px;\n    cursor: pointer;\n    border-bottom-right-radius: 8px;\n    border-top-right-radius: 8px;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 23px;\n    color: #00a3cb;\n}\n\n\n.weather-title{\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.weather{\n  margin-top: 23px;\n}\n\n.weather-desp > p{\nmargin-bottom: 8px;\n}\n\n.weather-desp {\n  display: flex;\n  justify-content: center;\n  border-bottom: 4px solid #e1c7a6;\n  margin-bottom: 13px;\n}\n.wind-speed-container{\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  margin: 23px 0;\n\n}\n\n.child-wind-speed-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 120px;\n}\n\n.child-wind-speed-container > img {\n  width: 40px;\n  height: 40px;\n}\n\n.child-wind-speed-container > p{\n  font-size: 12px;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n\n}\n\n.wind-speed-container > p {\n  font-size: 14px;\n  font-family: monospace;\n  color:rgba(0, 0, 0, 0.5);\n}\n\n\n#wind-speed-container > P {\n  font-size: 12px;\n}\n\n#visi {\n  margin-right: 70px;\n}\n#speed{\n  margin-right: 70px;\n}\n#speed > img {\n  background: #00d6ef;\n  border-radius: 25px;\n}\n/* Weather card */\n  :root {\n    font-size: 5vmin;\n  }\n  \n  body {\n    display: grid;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    margin: 0;\n    padding: 0;\n    font-family: \"Sacramento\", cursive;\n    color: #fff;\n    background: #333;\n    background-image: radial-gradient(ellipse at bottom left, #00a3cb 40%, rgba(0, 163, 203, 0) 40%), radial-gradient(ellipse at top right, #00a3cb 30%, rgba(0, 163, 203, 0) 30%), linear-gradient(to right, #625793 0%, #625793 33%, #d55d64 33%, #d55d64 66%, #e49129 66%);\n    background-size: 50% 100%;\n  }\n  body .message {\n    position: absolute;\n    right: 0.5vw;\n    top: 1vw;\n    max-width: 60vw;\n    font-size: 12px;\n    font-family: \"Open Sans\", sans-serif;\n  }\n  body .message a {\n    color: inherit;\n    text-decoration: none;\n    border-bottom: 1px solid #444;\n  }\n  body .message a:hover {\n    border-width: 3px;\n  }\n  body .card {\n    width: 400px;\n    height: 500px;\n    margin: auto;\n    padding: 2px;\n    border-radius: 1em;\n    border: 1px solid rgba(255, 255, 255, 0.5);\n    text-shadow: 0 0 1em rgba(0, 0, 0, 0.5);\n    background: rgba(255, 255, 255, 0.2);\n    -webkit-backdrop-filter: blur(20px);\n            backdrop-filter: blur(20px);\n    transform: perspective(500px);\n    transform-style: preserve-3d;\n  }\n  body .card .welcome {\n    font-family: \"Sacramento\", cursive;\n    transform: translateZ(20px);\n  }\n  body .card .year {\n    font-family: \"Great Vibes\", cursive;\n    font-size: 2.5em;\n  }\n  body .card .year span {\n    display: block;\n    transform: translateZ(40px);\n  }\n  body .card .year span:nth-child(2) {\n    padding-left: 1em;\n    transform: translateZ(60px);\n  }\n  body .card .year span:nth-child(3) {\n    padding-left: 2em;\n    transform: translateZ(80px);\n  }\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_methods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api methods */ "./src/api methods.js");
/* harmony import */ var _img_windSpeed_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/windSpeed.png */ "./src/img/windSpeed.png");
/* harmony import */ var _img_temp2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/temp2.png */ "./src/img/temp2.png");
/* harmony import */ var _img_vis_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/vis.svg */ "./src/img/vis.svg");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom */ "./src/dom.js");


// image import



// image import end



// dom work
(0,_dom__WEBPACK_IMPORTED_MODULE_4__.screenPaint)();

// api helper function
async function allAsyncShit(place) {
  try {
    const data = await (0,_api_methods__WEBPACK_IMPORTED_MODULE_0__["default"])(place.value);
    document.querySelector('.weather').innerHTML = '';
    (0,_dom__WEBPACK_IMPORTED_MODULE_4__.addCityName)(place.value);
    (0,_dom__WEBPACK_IMPORTED_MODULE_4__.getMain)(data.img, data.weather.main);
    (0,_dom__WEBPACK_IMPORTED_MODULE_4__.getDesp)(data.weather.desp);
    (0,_dom__WEBPACK_IMPORTED_MODULE_4__.getWindSpeed)(_img_windSpeed_png__WEBPACK_IMPORTED_MODULE_1__, 'Wind Speed', data.windSpeed, 'Km/Hr', 'speed');
    (0,_dom__WEBPACK_IMPORTED_MODULE_4__.getWindSpeed)(_img_temp2_png__WEBPACK_IMPORTED_MODULE_2__, 'Temperatur', data.temp.temp, 'Farenheight', 'temp');
    (0,_dom__WEBPACK_IMPORTED_MODULE_4__.getWindSpeed)(_img_vis_svg__WEBPACK_IMPORTED_MODULE_3__, 'Visibility', data.visibility, 'Km', 'visi');
    console.log(data);
  } catch (e) {
    alert('Please enter proper location');
    // console.log('got an error', e);
  }
}

const searchBtn = document.getElementById('search-btn');
const searchMe = document.getElementById('search-me');

searchBtn.addEventListener('click', () => {
  const textBar = document.getElementById('search-me');
  allAsyncShit(textBar);
});

searchMe.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    const textBar = document.getElementById('search-me');
    allAsyncShit(textBar);
  }
});


/***/ }),

/***/ "./src/api methods.js":
/*!****************************!*\
  !*** ./src/api methods.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hitApi)
/* harmony export */ });
const key = 'a206f56ec032351ad2acb0b9b7663c48';

// Gets city name from form
function cleanWhitespace(cityName) {
  // if not an empty string
  if (cityName) {
    // remove whitespace for the api call

    return cityName
      .replace(/(\s+$|^\s+)/g, '') // remove whitespace from begining and end of string
      .replace(/(,\s+)/g, ',') // remove any white space that follows a comma
      .replace(/(\s+,)/g, ',') // remove any white space that preceeds a comma
      .replace(/\s+/g, '+'); // replace any remaining white space with +, so it works in api call
  }
  return '';
}

// get image obj
function getImage(weatherObj) {
  const img = new Image();
  img.src = `http://openweathermap.org/img/wn/${weatherObj.weather[0].icon}.png`;
  return img;
}

// get weather obj
function getTemp(weatherObj) {
  const temp = {
    temp: weatherObj.main.temp,
    feelsLike: weatherObj.main.feels_like,
  };
  return temp;
}

// get visibility
function getVisibility(weatherObj) {
  return weatherObj.visibility;
}
// get weather description
function getWeather(weatherObj) {
  const weather = {
    main: weatherObj.weather[0].main,
    desp: weatherObj.weather[0].description,
  };

  return weather;
}
// get wind speed
function getWindSpeed(weatherObj) {
  return weatherObj.wind.speed;
}

// to hit api and get all the data and then return.
async function hitApi(place) {
  place = cleanWhitespace(place);
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=${key}`);
  const weatherObj = await response.json();
  const data = {
    img: getImage(weatherObj),
    weather: getWeather(weatherObj),
    visibility: getVisibility(weatherObj),
    windSpeed: getWindSpeed(weatherObj),
    temp: getTemp(weatherObj),

  };
  return data;
}


/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCityName": () => (/* binding */ addCityName),
/* harmony export */   "getDesp": () => (/* binding */ getDesp),
/* harmony export */   "getMain": () => (/* binding */ getMain),
/* harmony export */   "getWindSpeed": () => (/* binding */ getWindSpeed),
/* harmony export */   "screenPaint": () => (/* binding */ screenPaint)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const body = document.querySelector('body');

function searchBar() {
  const container = document.createElement('div');
  container.id = 'search-bar';

  const searchMe = document.createElement('input');
  searchMe.id = 'search-me';
  searchMe.setAttribute('type', 'text');

  const btn = document.createElement('div');
  btn.id = 'search-btn';
  btn.innerText = 'Search';
  container.appendChild(searchMe);
  container.appendChild(btn);
  return container;
}

function getMain(img, text) {
  const container = document.createElement('div');
  container.classList.add('weather-title');
  container.id = 'title';
  container.appendChild(img);

  const main = document.createElement('p');
  main.innerText = text;
  container.appendChild(main);
  document.querySelector('.weather').appendChild(container);
  console.log('hello');
}

function getDesp(text) {
  const container = document.createElement('div');
  container.classList.add('weather-desp');
  const desp = document.createElement('p');
  desp.innerText = text;
  container.appendChild(desp);
  document.querySelector('.weather').appendChild(container);
}

function getWindSpeed(src, text, value, unit, id) {
  const img = new Image();
  img.src = src;

  const container = document.createElement('div');
  container.classList.add('wind-speed-container');

  const childContainer = document.createElement('div');
  childContainer.classList.add('child-wind-speed-container');
  childContainer.id = id;
  childContainer.appendChild(img);

  const para = document.createElement('p');
  para.innerText = text;
  childContainer.appendChild(img);
  childContainer.appendChild(para);

  const p = document.createElement('p');
  p.id = 'wind-speed';
  p.innerText = `${value} ${unit}`;

  container.appendChild(childContainer);
  container.appendChild(p);
  document.querySelector('.weather').appendChild(container);
}

function WeatherCard() {
  const div = document.createElement('div');
  const card = `
  <div class="card" data-tilt data-tilt-scale="0.95" data-tilt-startY="40">
    <div class="weather">
    </div>  
</div>`;
  div.innerHTML = card;
  return div;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function addCityName(city) {
  const capitalisedCity = capitalizeFirstLetter(city);
  const h3 = document.createElement('h3');
  h3.style.textAlign = 'center';
  h3.innerText = capitalisedCity;
  document.querySelector('.weather').append(h3);
}

function screenPaint() {
  body.style.background = '#00539CFF';
  body.appendChild(searchBar());
  body.appendChild(WeatherCard());
}




/***/ }),

/***/ "./src/img/temp2.png":
/*!***************************!*\
  !*** ./src/img/temp2.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b1ea641f0ad0a44fba54.png";

/***/ }),

/***/ "./src/img/vis.svg":
/*!*************************!*\
  !*** ./src/img/vis.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "309fbd62542f7c4c7e0a.svg";

/***/ }),

/***/ "./src/img/windSpeed.png":
/*!*******************************!*\
  !*** ./src/img/windSpeed.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b0b6f8dcef3f919573d3.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/App.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTyxFQUFFLEtBQUs7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL0FwcC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2FwaSBtZXRob2RzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvZG9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R3JlYXQrVmliZXMmZmFtaWx5PVNhY3JhbWVudG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5pbnB1dDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMsIHNlbGVjdDpmb2N1c3tcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuI3NlYXJjaC1iYXJ7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbiNzZWFyY2gtbWUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI5N0EwO1xcbiAgICB3aWR0aDogMzA5cHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAyMXB4O1xcbiAgICBjb2xvcjpJdm9yeTtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lOyBcXG4gICAgYm9yZGVyLWNvbG9yOiBUcmFuc3BhcmVudDsgXFxuICAgIG92ZXJmbG93OiBhdXRvOyAgXFxuICAgIC8qIGJvcmRlci10b3A6IDJweCBzb2xpZCAjRTU3Rjg0O1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNFNTdGODQ7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRTU3Rjg0OyAqL1xcbn1cXG5cXG4jc2VhcmNoLWJ0bntcXG4gICAgYmFja2dyb3VuZDogI0Y0RUFFNjtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMTA4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDIzcHg7XFxuICAgIGNvbG9yOiAjMDBhM2NiO1xcbn1cXG5cXG5cXG4ud2VhdGhlci10aXRsZXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVye1xcbiAgbWFyZ2luLXRvcDogMjNweDtcXG59XFxuXFxuLndlYXRoZXItZGVzcCA+IHB7XFxubWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4ud2VhdGhlci1kZXNwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZTFjN2E2O1xcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcXG59XFxuLndpbmQtc3BlZWQtY29udGFpbmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMjNweCAwO1xcblxcbn1cXG5cXG4uY2hpbGQtd2luZC1zcGVlZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMjBweDtcXG59XFxuXFxuLmNoaWxkLXdpbmQtc3BlZWQtY29udGFpbmVyID4gaW1nIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4uY2hpbGQtd2luZC1zcGVlZC1jb250YWluZXIgPiBwe1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcblxcbn1cXG5cXG4ud2luZC1zcGVlZC1jb250YWluZXIgPiBwIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICBjb2xvcjpyZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcblxcbiN3aW5kLXNwZWVkLWNvbnRhaW5lciA+IFAge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4jdmlzaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XFxufVxcbiNzcGVlZHtcXG4gIG1hcmdpbi1yaWdodDogNzBweDtcXG59XFxuI3NwZWVkID4gaW1nIHtcXG4gIGJhY2tncm91bmQ6ICMwMGQ2ZWY7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG4vKiBXZWF0aGVyIGNhcmQgKi9cXG4gIDpyb290IHtcXG4gICAgZm9udC1zaXplOiA1dm1pbjtcXG4gIH1cXG4gIFxcbiAgYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2FjcmFtZW50b1xcXCIsIGN1cnNpdmU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBib3R0b20gbGVmdCwgIzAwYTNjYiA0MCUsIHJnYmEoMCwgMTYzLCAyMDMsIDApIDQwJSksIHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IHRvcCByaWdodCwgIzAwYTNjYiAzMCUsIHJnYmEoMCwgMTYzLCAyMDMsIDApIDMwJSksIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzYyNTc5MyAwJSwgIzYyNTc5MyAzMyUsICNkNTVkNjQgMzMlLCAjZDU1ZDY0IDY2JSwgI2U0OTEyOSA2NiUpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJSAxMDAlO1xcbiAgfVxcbiAgYm9keSAubWVzc2FnZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDAuNXZ3O1xcbiAgICB0b3A6IDF2dztcXG4gICAgbWF4LXdpZHRoOiA2MHZ3O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIH1cXG4gIGJvZHkgLm1lc3NhZ2UgYSB7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDQ0O1xcbiAgfVxcbiAgYm9keSAubWVzc2FnZSBhOmhvdmVyIHtcXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XFxuICB9XFxuICBib2R5IC5jYXJkIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgMWVtIHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcXG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpO1xcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgfVxcbiAgYm9keSAuY2FyZCAud2VsY29tZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2FjcmFtZW50b1xcXCIsIGN1cnNpdmU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigyMHB4KTtcXG4gIH1cXG4gIGJvZHkgLmNhcmQgLnllYXIge1xcbiAgICBmb250LWZhbWlseTogXFxcIkdyZWF0IFZpYmVzXFxcIiwgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiAyLjVlbTtcXG4gIH1cXG4gIGJvZHkgLmNhcmQgLnllYXIgc3BhbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooNDBweCk7XFxuICB9XFxuICBib2R5IC5jYXJkIC55ZWFyIHNwYW46bnRoLWNoaWxkKDIpIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWig2MHB4KTtcXG4gIH1cXG4gIGJvZHkgLmNhcmQgLnllYXIgc3BhbjpudGgtY2hpbGQoMykge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJlbTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDgwcHgpO1xcbiAgfVxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLGdEQUFnRDtJQUNoRCxlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsY0FBYztJQUNkOzt1Q0FFbUM7QUFDdkM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0IsNEJBQTRCO0lBQzVCLGdEQUFnRDtJQUNoRCxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsY0FBYzs7QUFFaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdEQUFnRDs7QUFFbEQ7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLHdCQUF3QjtBQUMxQjs7O0FBR0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7QUFDQSxpQkFBaUI7RUFDZjtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVk7SUFDWixhQUFhO0lBQ2IsU0FBUztJQUNULFVBQVU7SUFDVixrQ0FBa0M7SUFDbEMsV0FBVztJQUNYLGdCQUFnQjtJQUNoQix5UUFBeVE7SUFDelEseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFFBQVE7SUFDUixlQUFlO0lBQ2YsZUFBZTtJQUNmLG9DQUFvQztFQUN0QztFQUNBO0lBQ0UsY0FBYztJQUNkLHFCQUFxQjtJQUNyQiw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiwwQ0FBMEM7SUFDMUMsdUNBQXVDO0lBQ3ZDLG9DQUFvQztJQUNwQyxtQ0FBbUM7WUFDM0IsMkJBQTJCO0lBQ25DLDZCQUE2QjtJQUM3Qiw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLGtDQUFrQztJQUNsQywyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLG1DQUFtQztJQUNuQyxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGNBQWM7SUFDZCwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQiwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQiwyQkFBMkI7RUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R3JlYXQrVmliZXMmZmFtaWx5PVNhY3JhbWVudG8mZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuXFxuKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5pbnB1dDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMsIHNlbGVjdDpmb2N1c3tcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuI3NlYXJjaC1iYXJ7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbiNzZWFyY2gtbWUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI5N0EwO1xcbiAgICB3aWR0aDogMzA5cHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAyMXB4O1xcbiAgICBjb2xvcjpJdm9yeTtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lOyBcXG4gICAgYm9yZGVyLWNvbG9yOiBUcmFuc3BhcmVudDsgXFxuICAgIG92ZXJmbG93OiBhdXRvOyAgXFxuICAgIC8qIGJvcmRlci10b3A6IDJweCBzb2xpZCAjRTU3Rjg0O1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNFNTdGODQ7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRTU3Rjg0OyAqL1xcbn1cXG5cXG4jc2VhcmNoLWJ0bntcXG4gICAgYmFja2dyb3VuZDogI0Y0RUFFNjtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMTA4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDIzcHg7XFxuICAgIGNvbG9yOiAjMDBhM2NiO1xcbn1cXG5cXG5cXG4ud2VhdGhlci10aXRsZXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVye1xcbiAgbWFyZ2luLXRvcDogMjNweDtcXG59XFxuXFxuLndlYXRoZXItZGVzcCA+IHB7XFxubWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4ud2VhdGhlci1kZXNwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZTFjN2E2O1xcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcXG59XFxuLndpbmQtc3BlZWQtY29udGFpbmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMjNweCAwO1xcblxcbn1cXG5cXG4uY2hpbGQtd2luZC1zcGVlZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMjBweDtcXG59XFxuXFxuLmNoaWxkLXdpbmQtc3BlZWQtY29udGFpbmVyID4gaW1nIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4uY2hpbGQtd2luZC1zcGVlZC1jb250YWluZXIgPiBwe1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcblxcbn1cXG5cXG4ud2luZC1zcGVlZC1jb250YWluZXIgPiBwIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICBjb2xvcjpyZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcblxcbiN3aW5kLXNwZWVkLWNvbnRhaW5lciA+IFAge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4jdmlzaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XFxufVxcbiNzcGVlZHtcXG4gIG1hcmdpbi1yaWdodDogNzBweDtcXG59XFxuI3NwZWVkID4gaW1nIHtcXG4gIGJhY2tncm91bmQ6ICMwMGQ2ZWY7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG4vKiBXZWF0aGVyIGNhcmQgKi9cXG4gIDpyb290IHtcXG4gICAgZm9udC1zaXplOiA1dm1pbjtcXG4gIH1cXG4gIFxcbiAgYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2FjcmFtZW50b1xcXCIsIGN1cnNpdmU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBib3R0b20gbGVmdCwgIzAwYTNjYiA0MCUsIHJnYmEoMCwgMTYzLCAyMDMsIDApIDQwJSksIHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IHRvcCByaWdodCwgIzAwYTNjYiAzMCUsIHJnYmEoMCwgMTYzLCAyMDMsIDApIDMwJSksIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzYyNTc5MyAwJSwgIzYyNTc5MyAzMyUsICNkNTVkNjQgMzMlLCAjZDU1ZDY0IDY2JSwgI2U0OTEyOSA2NiUpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJSAxMDAlO1xcbiAgfVxcbiAgYm9keSAubWVzc2FnZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDAuNXZ3O1xcbiAgICB0b3A6IDF2dztcXG4gICAgbWF4LXdpZHRoOiA2MHZ3O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIH1cXG4gIGJvZHkgLm1lc3NhZ2UgYSB7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDQ0O1xcbiAgfVxcbiAgYm9keSAubWVzc2FnZSBhOmhvdmVyIHtcXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XFxuICB9XFxuICBib2R5IC5jYXJkIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgMWVtIHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcXG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpO1xcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgfVxcbiAgYm9keSAuY2FyZCAud2VsY29tZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2FjcmFtZW50b1xcXCIsIGN1cnNpdmU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigyMHB4KTtcXG4gIH1cXG4gIGJvZHkgLmNhcmQgLnllYXIge1xcbiAgICBmb250LWZhbWlseTogXFxcIkdyZWF0IFZpYmVzXFxcIiwgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiAyLjVlbTtcXG4gIH1cXG4gIGJvZHkgLmNhcmQgLnllYXIgc3BhbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooNDBweCk7XFxuICB9XFxuICBib2R5IC5jYXJkIC55ZWFyIHNwYW46bnRoLWNoaWxkKDIpIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWig2MHB4KTtcXG4gIH1cXG4gIGJvZHkgLmNhcmQgLnllYXIgc3BhbjpudGgtY2hpbGQoMykge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJlbTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDgwcHgpO1xcbiAgfVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGFwaUdpdmVNZURhdGEgZnJvbSAnLi9hcGkgbWV0aG9kcyc7XG5cbi8vIGltYWdlIGltcG9ydFxuaW1wb3J0IHdpbmRTcGRQbmcgZnJvbSAnLi9pbWcvd2luZFNwZWVkLnBuZyc7XG5pbXBvcnQgdGVtcCBmcm9tICcuL2ltZy90ZW1wMi5wbmcnO1xuaW1wb3J0IHZpcyBmcm9tICcuL2ltZy92aXMuc3ZnJztcbi8vIGltYWdlIGltcG9ydCBlbmRcblxuaW1wb3J0IHtcbiAgc2NyZWVuUGFpbnQsIGdldE1haW4sIGdldERlc3AsIGdldFdpbmRTcGVlZCwgYWRkQ2l0eU5hbWUsXG59IGZyb20gJy4vZG9tJztcblxuLy8gZG9tIHdvcmtcbnNjcmVlblBhaW50KCk7XG5cbi8vIGFwaSBoZWxwZXIgZnVuY3Rpb25cbmFzeW5jIGZ1bmN0aW9uIGFsbEFzeW5jU2hpdChwbGFjZSkge1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGlHaXZlTWVEYXRhKHBsYWNlLnZhbHVlKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlcicpLmlubmVySFRNTCA9ICcnO1xuICAgIGFkZENpdHlOYW1lKHBsYWNlLnZhbHVlKTtcbiAgICBnZXRNYWluKGRhdGEuaW1nLCBkYXRhLndlYXRoZXIubWFpbik7XG4gICAgZ2V0RGVzcChkYXRhLndlYXRoZXIuZGVzcCk7XG4gICAgZ2V0V2luZFNwZWVkKHdpbmRTcGRQbmcsICdXaW5kIFNwZWVkJywgZGF0YS53aW5kU3BlZWQsICdLbS9IcicsICdzcGVlZCcpO1xuICAgIGdldFdpbmRTcGVlZCh0ZW1wLCAnVGVtcGVyYXR1cicsIGRhdGEudGVtcC50ZW1wLCAnRmFyZW5oZWlnaHQnLCAndGVtcCcpO1xuICAgIGdldFdpbmRTcGVlZCh2aXMsICdWaXNpYmlsaXR5JywgZGF0YS52aXNpYmlsaXR5LCAnS20nLCAndmlzaScpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgYWxlcnQoJ1BsZWFzZSBlbnRlciBwcm9wZXIgbG9jYXRpb24nKTtcbiAgICAvLyBjb25zb2xlLmxvZygnZ290IGFuIGVycm9yJywgZSk7XG4gIH1cbn1cblxuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1idG4nKTtcbmNvbnN0IHNlYXJjaE1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1tZScpO1xuXG5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnN0IHRleHRCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLW1lJyk7XG4gIGFsbEFzeW5jU2hpdCh0ZXh0QmFyKTtcbn0pO1xuXG5zZWFyY2hNZS5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XG4gIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRleHRCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLW1lJyk7XG4gICAgYWxsQXN5bmNTaGl0KHRleHRCYXIpO1xuICB9XG59KTtcbiIsImNvbnN0IGtleSA9ICdhMjA2ZjU2ZWMwMzIzNTFhZDJhY2IwYjliNzY2M2M0OCc7XG5cbi8vIEdldHMgY2l0eSBuYW1lIGZyb20gZm9ybVxuZnVuY3Rpb24gY2xlYW5XaGl0ZXNwYWNlKGNpdHlOYW1lKSB7XG4gIC8vIGlmIG5vdCBhbiBlbXB0eSBzdHJpbmdcbiAgaWYgKGNpdHlOYW1lKSB7XG4gICAgLy8gcmVtb3ZlIHdoaXRlc3BhY2UgZm9yIHRoZSBhcGkgY2FsbFxuXG4gICAgcmV0dXJuIGNpdHlOYW1lXG4gICAgICAucmVwbGFjZSgvKFxccyskfF5cXHMrKS9nLCAnJykgLy8gcmVtb3ZlIHdoaXRlc3BhY2UgZnJvbSBiZWdpbmluZyBhbmQgZW5kIG9mIHN0cmluZ1xuICAgICAgLnJlcGxhY2UoLygsXFxzKykvZywgJywnKSAvLyByZW1vdmUgYW55IHdoaXRlIHNwYWNlIHRoYXQgZm9sbG93cyBhIGNvbW1hXG4gICAgICAucmVwbGFjZSgvKFxccyssKS9nLCAnLCcpIC8vIHJlbW92ZSBhbnkgd2hpdGUgc3BhY2UgdGhhdCBwcmVjZWVkcyBhIGNvbW1hXG4gICAgICAucmVwbGFjZSgvXFxzKy9nLCAnKycpOyAvLyByZXBsYWNlIGFueSByZW1haW5pbmcgd2hpdGUgc3BhY2Ugd2l0aCArLCBzbyBpdCB3b3JrcyBpbiBhcGkgY2FsbFxuICB9XG4gIHJldHVybiAnJztcbn1cblxuLy8gZ2V0IGltYWdlIG9ialxuZnVuY3Rpb24gZ2V0SW1hZ2Uod2VhdGhlck9iaikge1xuICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgaW1nLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3dlYXRoZXJPYmoud2VhdGhlclswXS5pY29ufS5wbmdgO1xuICByZXR1cm4gaW1nO1xufVxuXG4vLyBnZXQgd2VhdGhlciBvYmpcbmZ1bmN0aW9uIGdldFRlbXAod2VhdGhlck9iaikge1xuICBjb25zdCB0ZW1wID0ge1xuICAgIHRlbXA6IHdlYXRoZXJPYmoubWFpbi50ZW1wLFxuICAgIGZlZWxzTGlrZTogd2VhdGhlck9iai5tYWluLmZlZWxzX2xpa2UsXG4gIH07XG4gIHJldHVybiB0ZW1wO1xufVxuXG4vLyBnZXQgdmlzaWJpbGl0eVxuZnVuY3Rpb24gZ2V0VmlzaWJpbGl0eSh3ZWF0aGVyT2JqKSB7XG4gIHJldHVybiB3ZWF0aGVyT2JqLnZpc2liaWxpdHk7XG59XG4vLyBnZXQgd2VhdGhlciBkZXNjcmlwdGlvblxuZnVuY3Rpb24gZ2V0V2VhdGhlcih3ZWF0aGVyT2JqKSB7XG4gIGNvbnN0IHdlYXRoZXIgPSB7XG4gICAgbWFpbjogd2VhdGhlck9iai53ZWF0aGVyWzBdLm1haW4sXG4gICAgZGVzcDogd2VhdGhlck9iai53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICB9O1xuXG4gIHJldHVybiB3ZWF0aGVyO1xufVxuLy8gZ2V0IHdpbmQgc3BlZWRcbmZ1bmN0aW9uIGdldFdpbmRTcGVlZCh3ZWF0aGVyT2JqKSB7XG4gIHJldHVybiB3ZWF0aGVyT2JqLndpbmQuc3BlZWQ7XG59XG5cbi8vIHRvIGhpdCBhcGkgYW5kIGdldCBhbGwgdGhlIGRhdGEgYW5kIHRoZW4gcmV0dXJuLlxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGl0QXBpKHBsYWNlKSB7XG4gIHBsYWNlID0gY2xlYW5XaGl0ZXNwYWNlKHBsYWNlKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7cGxhY2V9JkFQUElEPSR7a2V5fWApO1xuICBjb25zdCB3ZWF0aGVyT2JqID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zdCBkYXRhID0ge1xuICAgIGltZzogZ2V0SW1hZ2Uod2VhdGhlck9iaiksXG4gICAgd2VhdGhlcjogZ2V0V2VhdGhlcih3ZWF0aGVyT2JqKSxcbiAgICB2aXNpYmlsaXR5OiBnZXRWaXNpYmlsaXR5KHdlYXRoZXJPYmopLFxuICAgIHdpbmRTcGVlZDogZ2V0V2luZFNwZWVkKHdlYXRoZXJPYmopLFxuICAgIHRlbXA6IGdldFRlbXAod2VhdGhlck9iaiksXG5cbiAgfTtcbiAgcmV0dXJuIGRhdGE7XG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuZnVuY3Rpb24gc2VhcmNoQmFyKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmlkID0gJ3NlYXJjaC1iYXInO1xuXG4gIGNvbnN0IHNlYXJjaE1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgc2VhcmNoTWUuaWQgPSAnc2VhcmNoLW1lJztcbiAgc2VhcmNoTWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcblxuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnRuLmlkID0gJ3NlYXJjaC1idG4nO1xuICBidG4uaW5uZXJUZXh0ID0gJ1NlYXJjaCc7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hNZSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidG4pO1xuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBnZXRNYWluKGltZywgdGV4dCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItdGl0bGUnKTtcbiAgY29udGFpbmVyLmlkID0gJ3RpdGxlJztcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbWFpbi5pbm5lclRleHQgPSB0ZXh0O1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyJykuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgY29uc29sZS5sb2coJ2hlbGxvJyk7XG59XG5cbmZ1bmN0aW9uIGdldERlc3AodGV4dCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItZGVzcCcpO1xuICBjb25zdCBkZXNwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXNwLmlubmVyVGV4dCA9IHRleHQ7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNwKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXInKS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBnZXRXaW5kU3BlZWQoc3JjLCB0ZXh0LCB2YWx1ZSwgdW5pdCwgaWQpIHtcbiAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gIGltZy5zcmMgPSBzcmM7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3aW5kLXNwZWVkLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGNoaWxkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNoaWxkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NoaWxkLXdpbmQtc3BlZWQtY29udGFpbmVyJyk7XG4gIGNoaWxkQ29udGFpbmVyLmlkID0gaWQ7XG4gIGNoaWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcGFyYS5pbm5lclRleHQgPSB0ZXh0O1xuICBjaGlsZENvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xuICBjaGlsZENvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJhKTtcblxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLmlkID0gJ3dpbmQtc3BlZWQnO1xuICBwLmlubmVyVGV4dCA9IGAke3ZhbHVlfSAke3VuaXR9YDtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2hpbGRDb250YWluZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyJykuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gV2VhdGhlckNhcmQoKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjYXJkID0gYFxuICA8ZGl2IGNsYXNzPVwiY2FyZFwiIGRhdGEtdGlsdCBkYXRhLXRpbHQtc2NhbGU9XCIwLjk1XCIgZGF0YS10aWx0LXN0YXJ0WT1cIjQwXCI+XG4gICAgPGRpdiBjbGFzcz1cIndlYXRoZXJcIj5cbiAgICA8L2Rpdj4gIFxuPC9kaXY+YDtcbiAgZGl2LmlubmVySFRNTCA9IGNhcmQ7XG4gIHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbn1cblxuZnVuY3Rpb24gYWRkQ2l0eU5hbWUoY2l0eSkge1xuICBjb25zdCBjYXBpdGFsaXNlZENpdHkgPSBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoY2l0eSk7XG4gIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgaDMuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gIGgzLmlubmVyVGV4dCA9IGNhcGl0YWxpc2VkQ2l0eTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXInKS5hcHBlbmQoaDMpO1xufVxuXG5mdW5jdGlvbiBzY3JlZW5QYWludCgpIHtcbiAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwMDUzOUNGRic7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoc2VhcmNoQmFyKCkpO1xuICBib2R5LmFwcGVuZENoaWxkKFdlYXRoZXJDYXJkKCkpO1xufVxuXG5leHBvcnQge1xuICBzY3JlZW5QYWludCxcbiAgZ2V0TWFpbixcbiAgZ2V0RGVzcCxcbiAgZ2V0V2luZFNwZWVkLFxuICBhZGRDaXR5TmFtZSxcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=