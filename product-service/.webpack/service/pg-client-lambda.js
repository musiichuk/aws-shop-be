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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pg-client-lambda.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pg-client-lambda.js":
/*!*****************************!*\
  !*** ./pg-client-lambda.js ***!
  \*****************************/
/*! exports provided: invoke */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"invoke\", function() { return invoke; });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var pg_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pg-format */ \"pg-format\");\n/* harmony import */ var pg_format__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pg_format__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_utils_dbOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/utils/dbOptions */ \"./src/utils/dbOptions.js\");\n/* harmony import */ var _src_productList_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/productList.json */ \"./src/productList.json\");\nvar _src_productList_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./src/productList.json */ \"./src/productList.json\", 1);\n\n\n\n\n\n\nconst invoke = async event => {\n    const client = new pg__WEBPACK_IMPORTED_MODULE_0__[\"Client\"](_src_utils_dbOptions__WEBPACK_IMPORTED_MODULE_2__[\"dbOptions\"]);\n    await client.connect();\n\n    try {        \n        const ddlResult = await client.query(`\n            create table if not exists products (\n                id uuid primary key,\n                title text,\n                description text,\n                price integer,\n                image text\n            )`);\n\n        const ddlResult2 = await client.query(`\n            create table if not exists stocks (\n                id serial primary key,\n                product_id uuid,\n                count integer,\n                foreign key (\"product_id\") references \"products\" (\"id\")\n            )`);\n\n        const { rows: product } = await client.query(`select * from products where id = '7567ec4b-b10c-45c5-9345-fc73c48a80a1'`);\n        if (!product.length) {\n            const productValues = [];\n            const stockValues = [];\n            _src_productList_json__WEBPACK_IMPORTED_MODULE_3__.forEach(product => {\n                productValues.push([product.id, product.title, product.description, product.price, product.image]);\n                stockValues.push([product.id, product.count]);\n            });\n    \n            const dmlQueryFillProducts = pg_format__WEBPACK_IMPORTED_MODULE_1___default()('insert into products(id, title, description, price, image) values %L', productValues);\n            const productsDmlResult = await client.query(dmlQueryFillProducts);\n\n            const dmlQueryFillStoks = pg_format__WEBPACK_IMPORTED_MODULE_1___default()('insert into stocks(product_id, count) values %L', stockValues);\n            const stockssDmlResult = await client.query(dmlQueryFillStoks);\n        } else {\n            const { rows: products } = await client.query(`select * from products`);\n            console.log(products);\n        }\n    } catch (error) {\n        console.log(error);\n    } finally {\n        client.end();\n    }\n}\n\n\n\n//# sourceURL=webpack:///./pg-client-lambda.js?");

/***/ }),

/***/ "./src/productList.json":
/*!******************************!*\
  !*** ./src/productList.json ***!
  \******************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"count\\\":4,\\\"description\\\":\\\"Short Product Description1\\\",\\\"id\\\":\\\"7567ec4b-b10c-48c5-9345-fc73c48a80aa\\\",\\\"price\\\":600,\\\"title\\\":\\\"Iphone XR\\\",\\\"image\\\":\\\"https://ipeople.in.ua/files/products/ef6b0fa5318402909290f62ef4c8b297_1_1_1.500x500.jpg.pagespeed.ce.AEj3PnufGH.jpg\\\"},{\\\"count\\\":6,\\\"description\\\":\\\"Short Product Description3\\\",\\\"id\\\":\\\"7567ec4b-b10c-48c5-9345-fc73c48a80a0\\\",\\\"price\\\":400,\\\"title\\\":\\\"Iphone 8 Plus\\\",\\\"image\\\":\\\"https://ipeople.in.ua/files/products/2840.500x500.jpg.pagespeed.ce.U6AZqShveb.jpg\\\"},{\\\"count\\\":7,\\\"description\\\":\\\"Short Product Description2\\\",\\\"id\\\":\\\"7567ec4b-b10c-48c5-9345-fc73c48a80a2\\\",\\\"price\\\":700,\\\"title\\\":\\\"Iphone XS Max\\\",\\\"image\\\":\\\"https://ipeople.in.ua/files/products/01ff427ac937042aaf67a273569c46b4.500x500.jpg.pagespeed.ce.5WsqQwbxDQ.jpg\\\"},{\\\"count\\\":12,\\\"description\\\":\\\"Short Product Description7\\\",\\\"id\\\":\\\"7567ec4b-b10c-48c5-9345-fc73c48a80a1\\\",\\\"price\\\":150,\\\"title\\\":\\\"Iphone 6s\\\",\\\"image\\\":\\\"https://ipeople.in.ua/files/products/6cf304fa7047c9903959c25d9688d9f9.500x500.jpg.pagespeed.ce.rKXOf-duFD.jpg\\\"},{\\\"count\\\":7,\\\"description\\\":\\\"Short Product Description2\\\",\\\"id\\\":\\\"7567ec4b-b10c-48c5-9345-fc73c48a8333\\\",\\\"price\\\":180,\\\"title\\\":\\\"Iphone 7\\\",\\\"image\\\":\\\"https://ipeople.in.ua/files/products/2828.500x500.jpg.pagespeed.ce.15axGm8KNc.jpg\\\"},{\\\"count\\\":8,\\\"description\\\":\\\"Short Product Description4\\\",\\\"id\\\":\\\"7567ec4b-b10c-48c5-9345-fc73348a80a1\\\",\\\"price\\\":450,\\\"title\\\":\\\"Iphone X\\\",\\\"image\\\":\\\"https://ipeople.in.ua/files/products/xs1.500x500.jpeg.pagespeed.ce.dv-qw0lweE.jpg\\\"},{\\\"count\\\":2,\\\"description\\\":\\\"Short Product Descriptio1\\\",\\\"id\\\":\\\"7567ec4b-b10c-48c5-9445-fc73c48a80a2\\\",\\\"price\\\":550,\\\"title\\\":\\\"Iphone XS\\\",\\\"image\\\":\\\"https://ipeople.in.ua/files/products/e2992807f3d1b72ec0690d739f880e5d.500x500.jpg.pagespeed.ce.vkeaBlk43h.jpg\\\"},{\\\"count\\\":3,\\\"description\\\":\\\"Short Product Description7\\\",\\\"id\\\":\\\"7567ec4b-b10c-45c5-9345-fc73c48a80a1\\\",\\\"price\\\":1000,\\\"title\\\":\\\"Iphone 11\\\",\\\"image\\\":\\\"https://ipeople.in.ua/files/products/apple-iphone-11-64-gb-black-21.1000x.500x500.jpg.pagespeed.ce.6dJ3mdD2FJ.jpg\\\"}]\");\n\n//# sourceURL=webpack:///./src/productList.json?");

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

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pg\");\n\n//# sourceURL=webpack:///external_%22pg%22?");

/***/ }),

/***/ "pg-format":
/*!****************************!*\
  !*** external "pg-format" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pg-format\");\n\n//# sourceURL=webpack:///external_%22pg-format%22?");

/***/ })

/******/ })));