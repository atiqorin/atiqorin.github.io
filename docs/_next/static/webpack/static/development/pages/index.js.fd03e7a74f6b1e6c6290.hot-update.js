webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/main.scss */ "./static/main.scss");
/* harmony import */ var _static_main_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_main_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-particles-js */ "./node_modules/react-particles-js/lib/particles.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_header_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/header.jsx */ "./components/header.jsx");
/* harmony import */ var _components_descriptive_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/descriptive.jsx */ "./components/descriptive.jsx");
/* harmony import */ var _components_skills_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/skills.jsx */ "./components/skills.jsx");
/* harmony import */ var _components_Experience_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Experience.jsx */ "./components/Experience.jsx");





var _jsxFileName = "/Users/atiqorin/Desktop/Code/portfolio/pages/index.js";












var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).call(this, props));
    _this.state = {
      link_size: 110
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      react_ga__WEBPACK_IMPORTED_MODULE_8__["default"].initialize('UA-135433826-1');
      react_ga__WEBPACK_IMPORTED_MODULE_8__["default"].pageview(window.location.pathname + window.location.search);

      if (window.innerWidth < 480) {
        this.setState({
          link_size: 60
        });
      }

      Object(animejs__WEBPACK_IMPORTED_MODULE_10__["default"])({
        targets: '.avatar',
        translateY: [-180 + '%', 0],
        scale: [0.2, 1],
        duration: 1000,
        easing: 'easeInOutCubic'
      });
      Object(animejs__WEBPACK_IMPORTED_MODULE_10__["default"])({
        targets: '.arrow-icon',
        translateY: [-50 + '%', 0],
        loop: true,
        easing: 'easeInOutCubic'
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Layout_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_header_jsx__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_particles_js__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: "particle-js",
        params: {
          particles: {
            number: {
              value: 80
            },
            color: {
              value: "#f9f3f4"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "#ccc"
              },
              fill: {
                color: "#ccc"
              }
            },
            opacity: {
              value: 0.5,
              random: true
            },
            size: {
              value: 1
            },
            line_linked: {
              enable: true,
              distance: this.state.link_size
            },
            move: {
              enable: true,
              speed: 1.5
            }
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "slide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "container has-text-centered ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        className: "avatar",
        src: "../static/profile.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: "icon arrow-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
        className: "fa fa-angle-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_descriptive_jsx__WEBPACK_IMPORTED_MODULE_13__["default"], {
        description: "Hello! I am a software engineer with a passion for developing software and solving interesting problems. My journey in programming started as a developer with a focus on the end-user experience which gradually led me dive into full stack development responsible for front-end, back-end, ui development, database scripting and creating apis.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_descriptive_jsx__WEBPACK_IMPORTED_MODULE_13__["default"], {
        description: "I've always considered that a specific programming language or tool doesn't limit me in my passion for developing and my love towards creativity & problem solving, so I constantly seek to learn new technologies and keep up-to-date with industry trends and new technologies.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "columns is-mobile is-centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "is-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "SKILLS"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_skills_jsx__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "columns is-mobile is-centered experience-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "is-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "EXPERIENCE"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Experience_jsx__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.fd03e7a74f6b1e6c6290.hot-update.js.map