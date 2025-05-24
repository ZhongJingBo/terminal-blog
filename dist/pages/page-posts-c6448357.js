
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { R as React, L as Link, O as Outlet } from '../vendor/vendor-react-2f41bc9d.js';
import { u as useMarkdown } from '../hooks-c07ab0b6.js';

var styles = {"container":"index-module_container__g4am-"};

const Posts = () => {
  const { noteList, loading, error } = useMarkdown();
  return /* @__PURE__ */ React.createElement("div", { className: styles.container }, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h1", null, "2025"), /* @__PURE__ */ React.createElement("ul", null, noteList.map((item) => {
    return /* @__PURE__ */ React.createElement("li", { key: item.id }, /* @__PURE__ */ React.createElement(Link, { to: `${item.id}` }, " ", item.title), /* @__PURE__ */ React.createElement("div", { className: "text-time" }, new Date(item.createdAt).toLocaleDateString("zh-CN", { month: "2-digit", day: "2-digit" })));
  }))));
};

const Page = () => {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Outlet, null));
};

export { Page as P, Posts as a };
//# sourceMappingURL=page-posts-c6448357.js.map
