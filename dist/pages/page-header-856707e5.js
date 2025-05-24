
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { R as React, N as NavLink } from '../vendor/vendor-react-2f41bc9d.js';

var styles = {"header":"index-module_header__OS1sV","nav":"index-module_nav__6H5Mo"};

const Header = () => {
  return /* @__PURE__ */ React.createElement("header", { className: styles.header }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("a", { className: "header_title" }, " Blog")));
};
const Nav = () => {
  return /* @__PURE__ */ React.createElement("div", { className: styles.nav }, /* @__PURE__ */ React.createElement("nav", { className: "header_nav" }, /* @__PURE__ */ React.createElement("div", { className: "header_nav_item" }, " ", /* @__PURE__ */ React.createElement(NavLink, { to: "/home" }, " Home ")), /* @__PURE__ */ React.createElement("div", { className: "header_nav_item" }, " ", /* @__PURE__ */ React.createElement(NavLink, { to: "/posts" }, " Posts "), " "), /* @__PURE__ */ React.createElement("div", { className: "header_nav_item" }, " ", /* @__PURE__ */ React.createElement(NavLink, { to: "/reprint" }, " Reprint ")), /* @__PURE__ */ React.createElement("div", { className: "header_nav_item" }, " ", /* @__PURE__ */ React.createElement(NavLink, { to: "/about" }, " About "), " ")));
};

export { Header as H, Nav as N };
//# sourceMappingURL=page-header-856707e5.js.map
