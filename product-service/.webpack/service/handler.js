(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./handler.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./handler.js":
/*!********************!*\
  !*** ./handler.js ***!
  \********************/
/*! exports provided: getProducts, getProduct, addProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_handlers_getProducts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/handlers/getProducts */ \"./src/handlers/getProducts.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getProducts\", function() { return _src_handlers_getProducts__WEBPACK_IMPORTED_MODULE_0__[\"getProducts\"]; });\n\n/* harmony import */ var _src_handlers_getProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/handlers/getProduct */ \"./src/handlers/getProduct.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getProduct\", function() { return _src_handlers_getProduct__WEBPACK_IMPORTED_MODULE_1__[\"getProduct\"]; });\n\n/* harmony import */ var _src_handlers_addProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/handlers/addProduct */ \"./src/handlers/addProduct.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"addProduct\", function() { return _src_handlers_addProduct__WEBPACK_IMPORTED_MODULE_2__[\"addProduct\"]; });\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./handler.js?");

/***/ }),

/***/ "./src/handlers/addProduct.js":
/*!************************************!*\
  !*** ./src/handlers/addProduct.js ***!
  \************************************/
/*! exports provided: addProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProduct\", function() { return addProduct; });\n/* harmony import */ var _services_addProductToDb_addProductToDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/addProductToDb/addProductToDb */ \"./src/services/addProductToDb/addProductToDb.js\");\n/* harmony import */ var _utils_buildHttpResponse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/buildHttpResponse */ \"./src/utils/buildHttpResponse.js\");\n\n\n\nconst addProduct = async (event, context) => {\n    const { title = '', description = '', price = 0, image = '' } = JSON.parse(event.body);\n    console.log(JSON.parse(event.body))\n    if (!title || !description || !price || !image) return Object(_utils_buildHttpResponse__WEBPACK_IMPORTED_MODULE_1__[\"buildHttpResponse\"])(400, { errorMessage: 'Product data is invalid' });\n    try {\n        await Object(_services_addProductToDb_addProductToDb__WEBPACK_IMPORTED_MODULE_0__[\"addProductToDb\"])({title, description, price, image})\n        return Object(_utils_buildHttpResponse__WEBPACK_IMPORTED_MODULE_1__[\"buildHttpResponse\"])(200, { message: 'Product was added successfully'});\n    } catch (error) {\n        return Object(_utils_buildHttpResponse__WEBPACK_IMPORTED_MODULE_1__[\"buildHttpResponse\"])(500, { errorMessage: error.message });\n    }\n};\n\n//# sourceURL=webpack:///./src/handlers/addProduct.js?");

/***/ }),

/***/ "./src/handlers/getProduct.js":
/*!************************************!*\
  !*** ./src/handlers/getProduct.js ***!
  \************************************/
/*! exports provided: getProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProduct\", function() { return getProduct; });\n/* harmony import */ var _services_getProductById_getProductById__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/getProductById/getProductById */ \"./src/services/getProductById/getProductById.js\");\n/* harmony import */ var _utils_buildHttpResponse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/buildHttpResponse */ \"./src/utils/buildHttpResponse.js\");\n\n\n\nconst getProduct = async (event, context) => {\n    const { id: productId = '' } = event.pathParameters;\n    console.log(event.pathParameters);\n    try {\n      const product = await Object(_services_getProductById_getProductById__WEBPACK_IMPORTED_MODULE_0__[\"getProductById\"])(productId);\n      if (!product) throw new Error('Product not found');\n      \n      return Object(_utils_buildHttpResponse__WEBPACK_IMPORTED_MODULE_1__[\"buildHttpResponse\"])(200, product);\n    } catch (error) {\n      console.log(error.message);\n      return Object(_utils_buildHttpResponse__WEBPACK_IMPORTED_MODULE_1__[\"buildHttpResponse\"])(500, { errorMessage: error.message });\n    }\n};\n\n//# sourceURL=webpack:///./src/handlers/getProduct.js?");

/***/ }),

/***/ "./src/handlers/getProducts.js":
/*!*************************************!*\
  !*** ./src/handlers/getProducts.js ***!
  \*************************************/
/*! exports provided: getProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProducts\", function() { return getProducts; });\n/* harmony import */ var _services_getAllProducts_getAllProducts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/getAllProducts/getAllProducts */ \"./src/services/getAllProducts/getAllProducts.js\");\n/* harmony import */ var _utils_buildHttpResponse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/buildHttpResponse */ \"./src/utils/buildHttpResponse.js\");\n\n\n\nconst getProducts = async () => {\n    try {\n        const products = await Object(_services_getAllProducts_getAllProducts__WEBPACK_IMPORTED_MODULE_0__[\"getAllProducts\"])();\n        console.log(products);\n        return Object(_utils_buildHttpResponse__WEBPACK_IMPORTED_MODULE_1__[\"buildHttpResponse\"])(200, products);\n    } catch (error) {\n        console.log(error.message);\n        return Object(_utils_buildHttpResponse__WEBPACK_IMPORTED_MODULE_1__[\"buildHttpResponse\"])(500, { errorMessage: error.message });\n    }\n\n};\n\n//# sourceURL=webpack:///./src/handlers/getProducts.js?");

/***/ }),

/***/ "./src/services/addProductToDb/addProductToDb.js":
/*!*******************************************************!*\
  !*** ./src/services/addProductToDb/addProductToDb.js ***!
  \*******************************************************/
/*! exports provided: addProductToDb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProductToDb\", function() { return addProductToDb; });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_dbOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/dbOptions */ \"./src/utils/dbOptions.js\");\n\n\n\nconst pool = new pg__WEBPACK_IMPORTED_MODULE_0__[\"Pool\"](_utils_dbOptions__WEBPACK_IMPORTED_MODULE_2__[\"dbOptions\"]);\n\nconst addProductToDb = async (product) => {\n    const { title, description, price, image } = product;\n    const client = await pool.connect();\n    try {\n        const uuid = Object(uuid__WEBPACK_IMPORTED_MODULE_1__[\"v4\"])();\n        await client.query('BEGIN');\n        await client.query('insert into products(id, title, description, price, image) values ($1, $2, $3, $4, $5)', [ uuid, title, description, price, image ]);\n        await client.query('insert into stocks(product_id, count) values ($1, $2)', [uuid, 10]);\n        await client.query('COMMIT');\n    } catch (error) {\n      await client.query('ROLLBACK');\n      throw new Error(error);\n    } finally {\n      client.release();\n    }\n};\n\n//# sourceURL=webpack:///./src/services/addProductToDb/addProductToDb.js?");

/***/ }),

/***/ "./src/services/getAllProducts/getAllProducts.js":
/*!*******************************************************!*\
  !*** ./src/services/getAllProducts/getAllProducts.js ***!
  \*******************************************************/
/*! exports provided: getAllProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllProducts\", function() { return getAllProducts; });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_dbOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dbOptions */ \"./src/utils/dbOptions.js\");\n\n\n\nconst getAllProducts = async () => {\n    const client = new pg__WEBPACK_IMPORTED_MODULE_0__[\"Client\"](_utils_dbOptions__WEBPACK_IMPORTED_MODULE_1__[\"dbOptions\"]);\n    await client.connect();\n    try {\n      const { rows: products } = await client.query(`\n        select p.id, p.title, p.description, p.price, p.image, s.count\n        from products p left join stocks s on (p.id = s.product_id)`);\n      return products\n    } catch (error) {\n      throw new Error(error);\n    } finally {\n      client.end();\n  }\n};\n\n//# sourceURL=webpack:///./src/services/getAllProducts/getAllProducts.js?");

/***/ }),

/***/ "./src/services/getProductById/getProductById.js":
/*!*******************************************************!*\
  !*** ./src/services/getProductById/getProductById.js ***!
  \*******************************************************/
/*! exports provided: getProductById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProductById\", function() { return getProductById; });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_dbOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dbOptions */ \"./src/utils/dbOptions.js\");\n\n\n\nconst getProductById = async (id = '') => {\n  if (!id) return null;\n  const client = new pg__WEBPACK_IMPORTED_MODULE_0__[\"Client\"](_utils_dbOptions__WEBPACK_IMPORTED_MODULE_1__[\"dbOptions\"]);\n  await client.connect();\n  try {\n    const { rows: foundProduct } = await client.query(`select p.id, p.title, p.description, p.price, p.image, s.count from products p left join stocks s on p.id = s.product_id where p.id = '${id}'`);\n    return foundProduct;\n  } catch (error) {\n    throw new Error(error);\n  } finally {\n    client.end();\n  }\n};\n\n//# sourceURL=webpack:///./src/services/getProductById/getProductById.js?");

/***/ }),

/***/ "./src/utils/buildHttpResponse.js":
/*!****************************************!*\
  !*** ./src/utils/buildHttpResponse.js ***!
  \****************************************/
/*! exports provided: buildHttpResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildHttpResponse\", function() { return buildHttpResponse; });\nconst buildHttpResponse = (statusCode, payload) => {\n    return {\n        statusCode,\n        headers: {\n          \"Access-Control-Allow-Origin\" : \"*\", // Required for CORS support to work\n          \"Access-Control-Allow-Credentials\" : true // Required for cookies, authorization headers with HTTPS \n        },\n        body: JSON.stringify(payload),\n      };\n}\n\n//# sourceURL=webpack:///./src/utils/buildHttpResponse.js?");

/***/ }),

/***/ "./src/utils/dbOptions.js":
/*!********************************!*\
  !*** ./src/utils/dbOptions.js ***!
  \********************************/
/*! exports provided: dbOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dbOptions\", function() { return dbOptions; });\nconst { PG_HOST, PG_PORT, PG_DATABASE, PG_USERNAME, PG_PASSWORD } = process.env;\nconst dbOptions = {\n    host: PG_HOST,\n    port: PG_PORT,\n    database: PG_DATABASE,\n    user: PG_USERNAME,\n    password: PG_PASSWORD,\n    ssl: {\n        rejectUnauthorized: false\n    },\n    connectionTimeout: 5000\n};\n\n//# sourceURL=webpack:///./src/utils/dbOptions.js?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pg\");\n\n//# sourceURL=webpack:///external_%22pg%22?");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid\");\n\n//# sourceURL=webpack:///external_%22uuid%22?");

/***/ })

/******/ })));