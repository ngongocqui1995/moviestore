((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\Detail.js"],{

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
        className: "site-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "master-container-fluid header-inner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-between"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-2 col-xl-3 d-flex align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-block d-lg-none"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "navbar-toggler toggle-off-canvas-main-menu mr-2",
        "data-target": "#primary-menu-offcanvas"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "navbar-toggler-icon"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "navbar-toggler-icon"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "navbar-toggler-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "brand"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "brand d-flex align-items-center",
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon mr-md-2 mr-1 icon-5x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 27 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M2.594 0.275c-0.257-0.166-0.571-0.265-0.908-0.265-0.932 0-1.688 0.756-1.688 1.688 0 0.028 0.001 0.055 0.002 0.082l-0-0.004v13.246l16.702-6.219zM26.030 14.49l-4.184-2.541-21.846 8.102v10.154c-0.001 0.024-0.002 0.051-0.002 0.079 0 0.927 0.752 1.679 1.679 1.679 0.319 0 0.617-0.089 0.871-0.243l-0.007 0.004c1.501-0.888 22.21-13.433 23.489-14.214 0.52-0.316 0.863-0.88 0.863-1.524s-0.342-1.207-0.855-1.519l-0.008-0.004z"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        className: "p-1 fs-6 fs-md-8"
      }, "HayDayTv"), " "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto col-xl-6 align-items-center justify-content-center d-none d-md-flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "navbar navbar-expand-lg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "collapse navbar-collapse",
        id: "navbarSupportedContent"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "navbar-nav mr-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item dropdown active",
        "data-hover": "dropdown"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link dropdown-toggle",
        href: "home.html"
      }, "Home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown-menu dropdown-mega-menu dropdown-bg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "triangle adonis-icon"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        width: "10",
        viewBox: "0 0 1851 1024"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M1834.153 925.301l-820.434-892.402c-23.746-19.978-54.664-32.116-88.418-32.116s-64.672 12.138-88.628 32.288l0.21-0.172c-47.293 47.293-773.141 836.884-822.49 894.458s4.112 100.755 86.361 100.755h1644.98c76.080 0 133.655-53.462 88.418-102.811z"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "HOME"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-unstyled mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "new-releases.html"
      }, "New Releases")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "all-album.html"
      }, "All Albums")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "featured-playlists.html"
      }, "Featured Playlists")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "single-album.html"
      }, "Single Album")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "single-playlist.html"
      }, "Single Playlist")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "single-artist.html"
      }, "Single Artist"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "SHOP"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-unstyled mb-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "store.html"
      }, "Main Store")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genres-shop.html"
      }, "Shop Genre")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "single-shop-item.html"
      }, "Single Shop Item")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "GENRE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-unstyled"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "Pop")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "Under Ground")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "Metal")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "Rock")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "Jazz")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "Country")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "World")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genres.html"
      }, "All genres")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "CHARTS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-unstyled"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "top-albums.html"
      }, "Top Albums")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "top-artists.html"
      }, "Top Artists")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "weekly-top-ten.html"
      }, "Weekly Top 15")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "usa-top-ten.html"
      }, "USA Top 10")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "hot-songs.html"
      }, "Hot Songs")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "videos.html"
      }, "Hot Videos")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bg-col"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        href: "radio.html"
      }, "Radio")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        href: "store.html"
      }, "Store")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        href: "library.html"
      }, "Library")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        href: "#",
        "data-toggle": "dropdown"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown-menu dropdown-md"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "triangle adonis-icon"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        width: "10",
        viewBox: "0 0 1851 1024"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M1834.153 925.301l-820.434-892.402c-23.746-19.978-54.664-32.116-88.418-32.116s-64.672 12.138-88.628 32.288l0.21-0.172c-47.293 47.293-773.141 836.884-822.49 894.458s4.112 100.755 86.361 100.755h1644.98c76.080 0 133.655-53.462 88.418-102.811z"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-unstyled"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "About us")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Help & Support")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Contact")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Terms and Privacy")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Artist Originals")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Store")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Blog & News")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Advertise"))))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto col-xl-3 d-flex justify-content-end justify-content-lg-end align-items-center navbar-secondary"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        id: "btn-search-4",
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        height: "32",
        viewBox: "0 0 30 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M30.046 29.806l-7.127-7.287c2.109-2.395 3.397-5.558 3.397-9.021 0-3.721-1.486-7.094-3.896-9.56l0.003 0.003c-2.361-2.432-5.661-3.942-9.313-3.942s-6.953 1.51-9.31 3.939l-0.003 0.003c-2.388 2.462-3.86 5.824-3.86 9.53s1.472 7.068 3.863 9.533l-0.003-0.003c2.35 2.441 5.645 3.958 9.295 3.958 2.992 0 5.747-1.020 7.935-2.73l-0.028 0.021 7.207 7.383c0.232 0.225 0.548 0.364 0.896 0.368h0.001c0.344-0.001 0.656-0.142 0.881-0.368l0-0c0.252-0.237 0.409-0.573 0.409-0.945 0-0.34-0.131-0.65-0.345-0.881l0.001 0.001zM20.709 21.189c-1.906 1.978-4.577 3.206-7.536 3.206s-5.63-1.228-7.532-3.203l-0.003-0.003c-1.932-1.992-3.123-4.713-3.123-7.712s1.191-5.719 3.126-7.715l-0.003 0.003c1.906-1.978 4.577-3.206 7.536-3.206s5.63 1.228 7.532 3.203l0.003 0.003c1.932 1.992 3.123 4.713 3.123 7.712s-1.191 5.719-3.126 7.715l0.003-0.003z"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nav-item d-none d-md-block"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link notification-toggle has-notification",
        href: "#",
        id: "dropdownUsernotifications",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon notification icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 29 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M19.286 25.607c-0.395 0-0.714 0.32-0.714 0.714v0 0c0 2.367-1.919 4.286-4.286 4.286s-4.286-1.919-4.286-4.286v0 0c0-0.395-0.32-0.714-0.714-0.714s-0.714 0.32-0.714 0.714v0 0c0 3.156 2.558 5.714 5.714 5.714s5.714-2.558 5.714-5.714v0 0c0-0.395-0.32-0.714-0.714-0.714v0zM27.857 23.464h-2.857v-9.179c0-5.917-4.797-10.714-10.714-10.714s-10.714 4.797-10.714 10.714v0 9.214h-2.857c-0.395 0-0.714 0.32-0.714 0.714s0.32 0.714 0.714 0.714v0h27.143c0.395 0 0.714-0.32 0.714-0.714s-0.32-0.714-0.714-0.714v0zM23.571 23.464h-18.571v-9.221c0.024-5.11 4.172-9.243 9.286-9.243 0 0 0 0 0 0v0c5.128 0 9.286 4.157 9.286 9.286v0zM14.286 2.857c0.789 0 1.429-0.64 1.429-1.429v0c0-0.789-0.64-1.429-1.429-1.429s-1.429 0.64-1.429 1.429v0c0 0.789 0.64 1.429 1.429 1.429v0z"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown-menu dropdown-menu-right p-4 notifications clearfix",
        role: "menu"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Notification"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media notification"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-thumb mr-3 rounded-thumb"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/browse/browse-overview-6.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "notification-desc"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "New Album from ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "active-color"
      }, "Brenda Lee")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Catch Me Outside")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
        className: "inactive-color"
      }, "2 Hours ago"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon close-notification icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        height: "12",
        viewBox: "0 0 24 24"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M13.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5.3 5.3-5.3-5.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l5.3-5.3 5.3 5.3c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media notification"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-thumb mr-3 rounded-thumb"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/playlists/playlist-15.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "notification-desc"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "New Album from ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "active-color"
      }, "Adm Smith")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Catch Me Outside")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
        className: "inactive-color"
      }, "3 Hours ago"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon close-notification icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        height: "12",
        viewBox: "0 0 24 24"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M13.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5.3 5.3-5.3-5.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l5.3-5.3 5.3 5.3c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media notification"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-thumb mr-3 rounded-thumb"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/browse/browse-overview-5.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "notification-desc"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "New Album from ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "active-color"
      }, "Brenda Lee")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Catch Me Outside")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
        className: "inactive-color"
      }, "5 Hours ago"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon close-notification icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        height: "12",
        viewBox: "0 0 24 24"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M13.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5.3 5.3-5.3-5.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l5.3-5.3 5.3 5.3c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z"
      }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nav-item position-relative"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link dropdown-toggle w-nowrap pr-0",
        href: "#",
        id: "dropdownUserSettings",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "flex-row d-inline-flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "rounded-circle",
        src: "/assets/images/user-thumb-1.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ml-2 mt-2 fs-1 d-none d-lg-block"
      }, "Jont Henrry"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown-menu dropdown-menu-right user-settings-dropdown clearfix",
        "aria-labelledby": "dropdownUserSettings"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "settings-top"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-cover-image"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/user/cover.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-profile-image rounded-circle"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/browse/browse-overview-6.jpg",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "settings-bottom"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "user-name text-center"
      }, "Jont hennry"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "user-settings-menu list-unstyled"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "inactive-color"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon notification mr-3 icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M10 6c0-3.314 2.686-6 6-6s6 2.686 6 6c0 3.314-2.686 6-6 6s-6-2.686-6-6zM24.002 14h-1.107l-6.222 12.633 2.327-11.633-3-3-3 3 2.327 11.633-6.222-12.633h-1.107c-3.998 0-3.998 2.687-3.998 6v10h24v-10c0-3.313 0-6-3.998-6z"
      }))), "Your Profile")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "inactive-color"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon mr-3 icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M30 19l-9 9-3-3-2 2 5 5 11-11z"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M14 24h10v-3.598c-2.101-1.225-4.885-2.066-8-2.321v-1.649c2.203-1.242 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h14v-2z"
      }))), "Following"), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "inactive-color"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon mr-3 icon-2x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M0 0h8v8h-8zM12 2h20v4h-20zM0 12h8v8h-8zM12 14h20v4h-20zM0 24h8v8h-8zM12 26h20v4h-20z"
      }))), " Wish list"), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "inactive-color"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon mr-3 icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        fill: "#000000",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M0 0h24v24H0z",
        fill: "none"
      }))), "Purchased"), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "inactive-color"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon mr-3 icon-2x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        height: "32",
        viewBox: "0 0 32 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M24 20v-4h-10v-4h10v-4l6 6zM22 18v8h-10v6l-12-6v-26h22v10h-2v-8h-16l8 4v18h8v-6z"
      }))), "Logout"))))))))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/SideBar/SideBarLeft.js":
/*!*******************************************!*\
  !*** ./components/SideBar/SideBarLeft.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SideBarLeft; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var SideBarLeft =
/*#__PURE__*/
function (_Component) {
  _inherits(SideBarLeft, _Component);

  function SideBarLeft() {
    _classCallCheck(this, SideBarLeft);

    return _possibleConstructorReturn(this, _getPrototypeOf(SideBarLeft).apply(this, arguments));
  }

  _createClass(SideBarLeft, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "primary-menu-offcanvas",
        className: "off-canvas off-canvas-left d-flex flex-column"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "m-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "close-offcanvas-main-menu",
        href: "#",
        "data-target": "#primary-menu-offcanvas"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-5x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        height: "20",
        viewBox: "0 0 24 24"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M13.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5.3 5.3-5.3-5.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l5.3-5.3 5.3 5.3c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "side-nav-container d-flex flex-column align-items-center ml-auto mr-auto position-relative"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "side-nav adonis-animate",
        "data-animation": "menuTwo",
        id: "site-side-nav",
        "data-level": "1",
        "data-animation-item": "> li > a"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link active",
        href: "home.html"
      }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        href: "radio.html"
      }, "Radio")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        href: "library.html"
      }, "Library")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item has-dropdown"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        href: "#",
        "data-level": "2"
      }, "Shop ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        height: "10"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#arrow-right"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "sub-level"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "go-back",
        "data-level": "1"
      }, "Back")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "store.html"
      }, "Main Shop")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genres-shop.html"
      }, "Shop Genre")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "single-shop-item.html"
      }, "Single Shop Item")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item has-dropdown"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        href: "#",
        "data-level": "2"
      }, "Browse ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        height: "10"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#arrow-right"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "sub-level"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "go-back",
        "data-level": "1"
      }, "Back")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "new-releases.html"
      }, "New Releases")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "all-album.html"
      }, "All Albums")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "featured-playlists.html"
      }, "Featured Playlists")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "single-album.html"
      }, "Single Album")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "single-playlist.html"
      }, "Single Playlist")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "single-artist.html"
      }, "Single Artist")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item has-dropdown"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        href: "#",
        "data-level": "2"
      }, "Genres ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        height: "10"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#arrow-right"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "sub-level"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "go-back",
        "data-level": "1"
      }, "Back")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "Pop")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "Under Ground")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "Metal")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "Rock")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "Jazz")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "Country")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "World")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "All genres")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item has-dropdown"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        href: "#",
        "data-level": "2"
      }, "Charts ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-highlight-active fs-1"
      }, "hot"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        height: "10"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#arrow-right"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "sub-level"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "go-back",
        "data-level": "1"
      }, "Back")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "top-album.html"
      }, "Top Albums")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "top-artists.html"
      }, "Top Artists")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "weekly-top-ten.html"
      }, "Weekly Top 10")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "weekly-top-ten.html"
      }, "USA Top 10")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "hot-songs.html"
      }, "Hot Songs")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "hot-videos.html"
      }, "Hot Videos")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item has-dropdown"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        href: "#",
        "data-level": "2"
      }, "More", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        height: "10"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#arrow-right"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "sub-level"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "go-back",
        "data-level": "1"
      }, "Back")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "About us")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Help & Support")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Contact")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Terms and Privacy")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Artist Originals")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "News")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Advertise")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "social-icons"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-inline horizon-list fs-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        height: "15",
        viewBox: "0 0 32 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        height: "15",
        viewBox: "0 0 32 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        height: "15",
        viewBox: "0 0 32 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.119-16-16-16zM23.363 23.119c-0.319 0.481-0.881 0.637-1.363 0.319-3.762-2.319-8.481-2.8-14.081-1.519-0.563 0.163-1.037-0.238-1.2-0.719-0.162-0.563 0.237-1.038 0.719-1.2 6.081-1.363 11.363-0.8 15.519 1.762 0.563 0.238 0.644 0.875 0.406 1.356zM25.281 18.719c-0.4 0.563-1.119 0.8-1.681 0.4-4.319-2.637-10.881-3.438-15.919-1.837-0.638 0.163-1.362-0.163-1.519-0.8-0.162-0.637 0.162-1.363 0.8-1.519 5.838-1.762 13.037-0.881 18 2.163 0.475 0.238 0.719 1.038 0.319 1.594zM25.438 14.238c-5.119-3.037-13.681-3.363-18.563-1.838-0.8 0.238-1.6-0.238-1.838-0.963-0.237-0.8 0.237-1.6 0.963-1.838 5.681-1.681 15.038-1.363 20.962 2.162 0.719 0.4 0.962 1.363 0.563 2.081-0.406 0.556-1.363 0.794-2.087 0.394z"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        height: "15",
        viewBox: "0 0 39 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M22.856 0h-6.856c-8.837 0-16 7.163-16 16s7.163 16 16 16v0h6.856c8.837 0 16-7.163 16-16s-7.163-16-16-16v0zM22.816 30.4h-6.776c-7.953 0-14.4-6.447-14.4-14.4v0 0c0-7.953 6.447-14.4 14.4-14.4v0h6.776c7.953 0 14.4 6.447 14.4 14.4v0 0c0 7.953-6.447 14.4-14.4 14.4v0zM26.64 16.496s0-0.064 0-0.096v-0.040l-0.104-0.112-0.12-0.112-9.728-5.6c-0.113-0.064-0.247-0.102-0.391-0.102-0.223 0-0.424 0.091-0.569 0.238l-0 0-0.072 0.088s-0.048 0.040-0.064 0.072 0 0 0 0.048c-0.068 0.112-0.109 0.247-0.112 0.391v11.129c0 0.442 0.358 0.8 0.8 0.8v0 0c0.166-0.006 0.318-0.062 0.442-0.154l-0.002 0.002 9.68-5.6 0.12-0.112c0.038-0.036 0.072-0.075 0.102-0.118l0.002-0.002s0 0 0 0 0-0.064 0-0.096c0.019-0.043 0.035-0.094 0.047-0.146l0.001-0.006c0.004-0.023 0.006-0.049 0.006-0.076s-0.002-0.053-0.006-0.079l0 0.003c0.004-0.023 0.006-0.049 0.006-0.076s-0.002-0.053-0.006-0.079l0 0.003c-0.006-0.062-0.017-0.119-0.034-0.174l0.002 0.006zM17.040 21.008v-8.416l7.264 4.208z"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        height: "15",
        viewBox: "0 0 32 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z"
      }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "copyright"
      }, " Copyright \xA9 2018 IconikTech. All rights reserved.")));
    }
  }]);

  return SideBarLeft;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_cc9c930292bbff5e67f3 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_cc9c930292bbff5e67f3 */ "dll-reference dll_cc9c930292bbff5e67f3"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/Detail.js":
/*!*************************!*\
  !*** ./pages/Detail.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Detail; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SideBar_SideBarLeft__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SideBar/SideBarLeft */ "./components/SideBar/SideBarLeft.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Detail =
/*#__PURE__*/
function (_Component) {
  _inherits(Detail, _Component);

  function Detail() {
    _classCallCheck(this, Detail);

    return _possibleConstructorReturn(this, _getPrototypeOf(Detail).apply(this, arguments));
  }

  _createClass(Detail, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "wrap",
        className: "light main-wrap clearfix"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SideBar_SideBarLeft__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "site-content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "site-content-inner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "album-wrap"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "album-spacer"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3 flex-column-sidebar-md text-center text-md-left"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "album-image"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box d-inline-block"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina box-rounded-md",
        src: "/assets/images/single/single-2.jpg",
        "data-2x": "/assets/images/single/single-2@2x.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-info"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-60-60 btn-primary absolute-center adonis-album-button round-btn text-light",
        "data-album-id": "1",
        role: "button",
        tabindex: "0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-play icon-2x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        id: "icon-brand-play",
        viewBox: "0 0 27 32",
        width: "100%",
        height: "100%"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M2.594 0.275c-0.257-0.166-0.571-0.265-0.908-0.265-0.932 0-1.688 0.756-1.688 1.688 0 0.028 0.001 0.055 0.002 0.082l-0-0.004v13.246l16.702-6.219zM26.030 14.49l-4.184-2.541-21.846 8.102v10.154c-0.001 0.024-0.002 0.051-0.002 0.079 0 0.927 0.752 1.679 1.679 1.679 0.319 0 0.617-0.089 0.871-0.243l-0.007 0.004c1.501-0.888 22.21-13.433 23.489-14.214 0.52-0.316 0.863-0.88 0.863-1.524s-0.342-1.207-0.855-1.519l-0.008-0.004z"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-pause icon-2x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        height: "20",
        viewBox: "0 0 29 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M19.2 0h8c0.884 0 1.6 0.716 1.6 1.6v28.8c0 0.884-0.716 1.6-1.6 1.6h-8c-0.884 0-1.6-0.716-1.6-1.6v-28.8c0-0.884 0.716-1.6 1.6-1.6z"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M1.6 0h8c0.884 0 1.6 0.716 1.6 1.6v28.8c0 0.884-0.716 1.6-1.6 1.6h-8c-0.884 0-1.6-0.716-1.6-1.6v-28.8c0-0.884 0.716-1.6 1.6-1.6z"
      }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pb-4 d-inline-block album-likes"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon pr-2 icon-2x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pr-2"
      }, "1256"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon pr-2 icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-brand-play"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "125K")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "about"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "About this album"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibus sed dolor eget posuere.Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. Nam ac elit a ante commodo tristique. ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pt-e-20 pt-e-lg-40"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-9 flex-column-content-md pl-e-xl-40"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "album-top-box text-center text-md-left"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "inactive-color"
      }, "ALBUM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "album-title"
      }, "The Ones That Like Me"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "mb-2"
      }, "By: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Danielle Bradberry"), "  classNameical"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "separator mb-4 mt-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "separator-md"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "mb-2"
      }, "14 Songs - 30 minutes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "mb-2"
      }, "Released on November 12, 2017")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "adonis-album-list pb-5 pt-e-30"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-number h6 inactive-color"
      }, "#"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-title h6 inactive-color"
      }, "Song"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-genre h6 inactive-color"
      }, "Genre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-duration h6 inactive-color"
      }, "Time"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-tools"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon h6 inactive-color icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-number"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide"
      }, "01"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-show adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-brand-play"
      })), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-title"
      }, "Begining To See The Light"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-genre"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide hover-lg-show"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-duration"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide"
      }, "14:13")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-tools"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide"
      }, "1245"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-show d-flex flex-nowrap hover-tools"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ml-3 adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-plus"
      })), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ml-3 adonis-icon pointer dropdown-menu-toggle"
      }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-bg gradient-adonis"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-number"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide"
      }, "02"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-show adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-brand-play"
      })), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-title"
      }, "Ugly Christmas Sweater"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-genre"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide hover-lg-show"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-duration"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide"
      }, "10:14")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-tools"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide"
      }, "1010"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-show d-flex flex-nowrap hover-tools"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ml-3 adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-plus"
      })), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ml-3 adonis-icon pointer dropdown-menu-toggle"
      }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-bg gradient-adonis"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-number"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide"
      }, "03"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-show adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-brand-play"
      })), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-title"
      }, "Feliz Navidad"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-genre"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide hover-lg-show"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-duration"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide"
      }, "11:08")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-tools"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide"
      }, "1110"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-show d-flex flex-nowrap hover-tools"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ml-3 adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-plus"
      })), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ml-3 adonis-icon pointer dropdown-menu-toggle"
      }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-bg gradient-adonis"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-number"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide"
      }, "04"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-show adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-brand-play"
      })), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-title"
      }, "What are You Doing New Year's Eve?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-genre"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide hover-lg-show"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-duration"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide"
      }, "14:13")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-tools"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide"
      }, "1245"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-show d-flex flex-nowrap hover-tools"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ml-3 adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-plus"
      })), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ml-3 adonis-icon pointer dropdown-menu-toggle"
      }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-bg gradient-adonis"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-number"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide"
      }, "05"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-show adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-brand-play"
      })), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-title"
      }, "Mashmallow World"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-genre"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide hover-lg-show"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-duration"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide"
      }, "12:14")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-tools"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide"
      }, "1245"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-show d-flex flex-nowrap hover-tools"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ml-3 adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-plus"
      })), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ml-3 adonis-icon pointer dropdown-menu-toggle"
      }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-bg gradient-adonis"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-number"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide"
      }, "06"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-show adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-brand-play"
      })), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-title"
      }, "Hard Candy Christmas"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-genre"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide hover-lg-show"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-duration"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide"
      }, "13:15")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-tools"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide"
      }, "1325"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-show d-flex flex-nowrap hover-tools"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ml-3 adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-plus"
      })), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ml-3 adonis-icon pointer dropdown-menu-toggle"
      }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-bg gradient-adonis"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-number"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide"
      }, "07"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-show adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-brand-play"
      })), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-title"
      }, "Baby, It's Cold Outside"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-genre"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide hover-lg-show"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-duration"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide"
      }, "16:16")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-tools"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide"
      }, "1980"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-show d-flex flex-nowrap hover-tools"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ml-3 adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-plus"
      })), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ml-3 adonis-icon pointer dropdown-menu-toggle"
      }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-bg gradient-adonis"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-number"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide"
      }, "08"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-show adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-brand-play"
      })), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-title"
      }, "The Man With The Bag"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-genre"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide hover-lg-show"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-duration"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide"
      }, "18:14")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-tools"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide"
      }, "1745"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-show d-flex flex-nowrap hover-tools"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ml-3 adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-plus"
      })), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ml-3 adonis-icon pointer dropdown-menu-toggle"
      }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-bg gradient-adonis"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-number"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide"
      }, "09"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-show adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-brand-play"
      })), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-title"
      }, "What I'm Thankful for"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-genre"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide hover-lg-show"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-duration"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide"
      }, "19:26")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-tools"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide"
      }, "1428"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-show d-flex flex-nowrap hover-tools"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ml-3 adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-plus"
      })), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ml-3 adonis-icon pointer dropdown-menu-toggle"
      }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-bg gradient-adonis"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-number"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide"
      }, "10"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-show adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-brand-play"
      })), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-title"
      }, "What I've Done - One More Light Live"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-genre"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide hover-lg-show"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-duration"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide"
      }, "14:13")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-tools"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide"
      }, "1563"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-show d-flex flex-nowrap hover-tools"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ml-3 adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-plus"
      })), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ml-3 adonis-icon pointer dropdown-menu-toggle"
      }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-bg gradient-adonis"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-number"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide"
      }, "11"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-show adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-brand-play"
      })), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-title"
      }, "Talking to Myself - One More Light Live"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-genre"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide hover-lg-show"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-duration"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide"
      }, "17:16")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-tools"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hover-hide"
      }, "1536"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-show d-flex flex-nowrap hover-tools"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ml-3 adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-plus"
      })), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ml-3 adonis-icon pointer dropdown-menu-toggle"
      }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-bg gradient-adonis"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "mb-2"
      }, "Released on November 12, 2017"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "mb-2"
      }, "\xA9 2018 Adonis Inc."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "more-items"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pt-e-20 pt-e-lg-40"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title-box"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "title h3-md"
      }, "More By Danielle Bradbery")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "adonis-carousel auto-fit-columns",
        "data-auto-width": "no",
        "data-item-parent": ".owl-carousel",
        "data-auto-fit-items": ".item",
        "data-dots": "yes",
        "data-items-responsive": "0:1|400:2|600:3|900:4|1200:5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gutter-30"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "owl-carousel owl-theme-adonis"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-1.jpg",
        "data-2x": "/assets/images/new-releases/new-releases-1@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer dropdown-menu-toggle"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Vestibulum nibh lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Adonis Music Pop")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-2.jpg",
        "data-2x": "/assets/images/new-releases/new-releases-2@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer dropdown-menu-toggle"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Vestibulum nibh lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Adonis Music Pop")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-3.jpg",
        "data-2x": "/assets/images/new-releases/new-releases-3@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer dropdown-menu-toggle"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Vestibulum nibh lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Adonis Music Pop")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-4.jpg",
        "data-2x": "/assets/images/new-releases/new-releases-4@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer dropdown-menu-toggle"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Vestibulum nibh lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Adonis Music Pop")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-5.jpg",
        "data-2x": "/assets/images/new-releases/new-releases-5@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer dropdown-menu-toggle"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Vestibulum nibh lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Adonis Music Pop")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-6.jpg",
        "data-2x": "/assets/images/new-releases/new-releases-6@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer dropdown-menu-toggle"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Vestibulum nibh lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Adonis Music Pop")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-7.jpg",
        "data-2x": "/assets/images/new-releases/new-releases-7@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer dropdown-menu-toggle"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Vestibulum nibh lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Adonis Music Pop")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-8.jpg",
        "data-2x": "/assets/images/new-releases/new-releases-8@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer dropdown-menu-toggle"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Vestibulum nibh lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Adonis Music Pop")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "music-img-box"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-9.jpg",
        "data-2x": "/assets/images/new-releases/new-releases-9@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "pointer dropdown-menu-toggle"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Vestibulum nibh lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Adonis Music Pop"))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pt-e-5 pt-e-lg-10"
      })))))));
    }
  }]);

  return Detail;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/Detail")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 7:
/*!*******************************!*\
  !*** multi ./pages/Detail.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__NEXT_REGISTER_PAGE('/Detail', function() {
module.exports = __webpack_require__(/*! ./pages/Detail.js */"./pages/Detail.js");

return { page: module.exports.default }});

/***/ }),

/***/ "dll-reference dll_cc9c930292bbff5e67f3":
/*!*******************************************!*\
  !*** external "dll_cc9c930292bbff5e67f3" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_cc9c930292bbff5e67f3;

/***/ })

},[[7,"static/runtime/webpack.js"]]]));;
//# sourceMappingURL=Detail.js.map