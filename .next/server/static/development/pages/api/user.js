module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const User = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.User || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model("User", {
  name: String,
  email: String,
  createAt: {
    default: Date.now(),
    type: Date
  },
  passwordId: String
});
/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const User = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.User || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model("User", {
  name: String,
  email: String,
  createAt: {
    default: Date.now(),
    type: Date
  },
  passwordId: String
});
/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./pages/api/user.js":
/*!***************************!*\
  !*** ./pages/api/user.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/database */ "./services/database.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth */ "./services/auth.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/user */ "./models/user.js");



/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const {
    authorization
  } = req.headers;
  let userId;

  try {
    const {
      id
    } = await _services_auth__WEBPACK_IMPORTED_MODULE_1__["default"].verify(authorization);
    userId = id;
  } catch (error) {
    return res.status(401).end();
  }

  _services_database__WEBPACK_IMPORTED_MODULE_0__["default"].connect();
  const user = await _models_user__WEBPACK_IMPORTED_MODULE_2__["default"].findOne({
    _id: userId
  }, {
    name: -1
  }, {
    email: -1
  });
  res.json(user.toObject());
});

/***/ }),

/***/ "./services/auth.js":
/*!**************************!*\
  !*** ./services/auth.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookies */ "cookies");
/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./database */ "./services/database.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/User */ "./models/User.js");






async function createUser(pwd) {
  const request = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()("https://paassword.now.sh/api/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      pwd
    })
  });

  if (request.ok) {
    const {
      id
    } = await request.json();
    return id;
  }
}

async function validatePassword(passwordId, pwd) {
  const request = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`https://paassword.now.sh/api/get/${passwordId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      pwd
    })
  });

  if (request.ok) {
    const {
      valid
    } = await request.json();
    return valid;
  }
} // Sign our JWT / encrypting


function sign(payload) {
  return new Promise((resolve, reject) => {
    jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.sign(payload, 
            new Proxy(process.env, {
              get(target, prop) {
                if (typeof target[prop] === 'undefined') {
                  console.warn(`An environment variable (${prop}) that was not provided in the environment was accessed.
See more info here: https://err.sh/next.js/missing-env-value`)
                }
                return target[prop]
              }
            })
          .SECRET || "secret", {
      expiresIn: "1d"
    }, (err, token) => {
      if (err) {
        return reject(err);
      }

      resolve(token);
    });
  });
} // Veriy


function verify(token) {
  return new Promise((resolve, reject) => {
    jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(token, 
            new Proxy(process.env, {
              get(target, prop) {
                if (typeof target[prop] === 'undefined') {
                  console.warn(`An environment variable (${prop}) that was not provided in the environment was accessed.
See more info here: https://err.sh/next.js/missing-env-value`)
                }
                return target[prop]
              }
            })
          .SECRET || "secret", (err, payload) => {
      if (err) {
        return reject(err);
      }

      resolve(payload);
    });
  });
}

async function getUserFromCookie(req) {
  const cookies = new cookies__WEBPACK_IMPORTED_MODULE_2___default.a(req);
  let payload;

  try {
    payload = await verify(cookies.get("_wsp"));
  } catch (error) {
    return null;
  }

  _database__WEBPACK_IMPORTED_MODULE_3__["default"].connect();
  const user = await _models_User__WEBPACK_IMPORTED_MODULE_4__["default"].findOne({
    _id: payload.id
  });
  console.log("returned user is: " + user);
  return JSON.parse(JSON.stringify(user));
}

/* harmony default export */ __webpack_exports__["default"] = ({
  createUser,
  validatePassword,
  sign,
  verify,
  getUserFromCookie
});

/***/ }),

/***/ "./services/database.js":
/*!******************************!*\
  !*** ./services/database.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);


function connect() {
  if (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.readyState === 0) {
    mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(`${
            new Proxy(process.env, {
              get(target, prop) {
                if (typeof target[prop] === 'undefined') {
                  console.warn(`An environment variable (${prop}) that was not provided in the environment was accessed.
See more info here: https://err.sh/next.js/missing-env-value`)
                }
                return target[prop]
              }
            })
          .MONGO_URL || "mongodb://localhost:27017"}/crowdmot` || 'mongodb+srv://crowdmotUser:crowdmot@123@cluster0-2o56v.mongodb.net/crowdmot?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      createIndexes: true
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  connect
});

/***/ }),

/***/ 4:
/*!*********************************!*\
  !*** multi ./pages/api/user.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/CrowdMOT/crowdmot-nextjs/pages/api/user.js */"./pages/api/user.js");


/***/ }),

/***/ "cookies":
/*!**************************!*\
  !*** external "cookies" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookies");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

/******/ });
//# sourceMappingURL=user.js.map