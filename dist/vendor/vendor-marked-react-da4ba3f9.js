
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { r as reactExports } from './vendor-react-2f41bc9d.js';
import { M as Marked } from '../vendor-1e87842e.js';

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);

// src/helpers.ts
var htmlUnescapes = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'"
};
var reEscapedHtml = /&(?:amp|lt|gt|quot|#(?:0+)?39);/g;
var reHasEscapedHtml = RegExp(reEscapedHtml.source);
var unescape = (str = "") => {
  return reHasEscapedHtml.test(str) ? str.replace(reEscapedHtml, (entity) => htmlUnescapes[entity] || "'") : str;
};
var joinBase = (path, base) => {
  if (!base) {
    return path;
  }
  try {
    return new URL(path, base).href;
  } catch (e) {
    return path;
  }
};

// src/ReactParser.ts
var ReactParser = class {
  constructor(options) {
    this.renderer = options.renderer;
  }
  parse(tokens) {
    return tokens.map((token) => {
      switch (token.type) {
        case "space": {
          return null;
        }
        case "heading": {
          const level = token.depth;
          return this.renderer.heading(this.parseInline(token.tokens), level);
        }
        case "paragraph": {
          return this.renderer.paragraph(this.parseInline(token.tokens));
        }
        case "text": {
          const textToken = token;
          return textToken.tokens ? this.parseInline(textToken.tokens) : token.text;
        }
        case "blockquote": {
          const blockquoteToken = token;
          const quote = this.parse(blockquoteToken.tokens);
          return this.renderer.blockquote(quote);
        }
        case "list": {
          const listToken = token;
          const children = listToken.items.map((item) => {
            var _a;
            const listItemChildren = [];
            if (item.task) {
              listItemChildren.push(this.renderer.checkbox((_a = item.checked) != null ? _a : false));
            }
            listItemChildren.push(this.parse(item.tokens));
            return this.renderer.listItem(listItemChildren);
          });
          return this.renderer.list(children, token.ordered, token.ordered ? token.start : void 0);
        }
        case "code": {
          return this.renderer.code(token.text, token.lang);
        }
        case "html": {
          return this.renderer.html(token.text);
        }
        case "table": {
          const tableToken = token;
          const headerCells = tableToken.header.map((cell, index) => {
            return this.renderer.tableCell(this.parseInline(cell.tokens), { header: true, align: token.align[index] });
          });
          const headerRow = this.renderer.tableRow(headerCells);
          const header = this.renderer.tableHeader(headerRow);
          const bodyChilren = tableToken.rows.map((row) => {
            const rowChildren = row.map((cell, index) => {
              return this.renderer.tableCell(this.parseInline(cell.tokens), {
                header: false,
                align: token.align[index]
              });
            });
            return this.renderer.tableRow(rowChildren);
          });
          const body = this.renderer.tableBody(bodyChilren);
          return this.renderer.table([header, body]);
        }
        case "hr": {
          return this.renderer.hr();
        }
        default: {
          console.warn(`Token with "${token.type}" type was not found`);
          return null;
        }
      }
    });
  }
  parseInline(tokens = []) {
    return tokens.map((token) => {
      switch (token.type) {
        case "text": {
          return this.renderer.text(unescape(token.text));
        }
        case "strong": {
          return this.renderer.strong(this.parseInline(token.tokens));
        }
        case "em": {
          return this.renderer.em(this.parseInline(token.tokens));
        }
        case "del": {
          return this.renderer.del(this.parseInline(token.tokens));
        }
        case "codespan": {
          return this.renderer.codespan(unescape(token.text));
        }
        case "link": {
          return this.renderer.link(token.href, this.parseInline(token.tokens));
        }
        case "image": {
          return this.renderer.image(token.href, token.text, token.title);
        }
        case "html": {
          return this.renderer.html(token.text);
        }
        case "br": {
          return this.renderer.br();
        }
        case "escape": {
          return this.renderer.text(token.text);
        }
        default: {
          console.warn(`Token with "${token.type}" type was not found`);
          return null;
        }
      }
    });
  }
};
var ReactParser_default = ReactParser;
var _elId, _options, _ReactRenderer_instances, h_fn, incrementElId_fn;
var ReactRenderer = class {
  constructor(options = {}) {
    __privateAdd(this, _ReactRenderer_instances);
    __privateAdd(this, _elId, 0);
    __privateAdd(this, _options);
    const { renderer } = options;
    __privateSet(this, _options, options);
    if (renderer && typeof renderer === "object") {
      Object.entries(renderer).forEach(([key, value]) => {
        const rendererName = key;
        const rendererFunction = value;
        if (!this[rendererName] || rendererName === "elementId" || typeof rendererFunction !== "function") {
          return;
        }
        this[rendererName];
        this[rendererName] = (...args) => {
          __privateMethod(this, _ReactRenderer_instances, incrementElId_fn).call(this);
          return rendererFunction.apply(this, args);
        };
      });
    }
  }
  get elementId() {
    return __privateGet(this, _elId);
  }
  heading(children, level) {
    return __privateMethod(this, _ReactRenderer_instances, h_fn).call(this, `h${level}`, children);
  }
  paragraph(children) {
    return __privateMethod(this, _ReactRenderer_instances, h_fn).call(this, "p", children);
  }
  link(href, text) {
    const url = joinBase(href, __privateGet(this, _options).baseURL);
    const target = __privateGet(this, _options).openLinksInNewTab ? "_blank" : null;
    return __privateMethod(this, _ReactRenderer_instances, h_fn).call(this, "a", text, { href: url, target });
  }
  image(src, alt, title = null) {
    const url = joinBase(src, __privateGet(this, _options).baseURL);
    return __privateMethod(this, _ReactRenderer_instances, h_fn).call(this, "img", null, { src: url, alt, title });
  }
  codespan(code, lang = null) {
    const className = lang ? `${__privateGet(this, _options).langPrefix}${lang}` : null;
    return __privateMethod(this, _ReactRenderer_instances, h_fn).call(this, "code", code, { className });
  }
  code(code, lang) {
    return __privateMethod(this, _ReactRenderer_instances, h_fn).call(this, "pre", this.codespan(code, lang));
  }
  blockquote(children) {
    return __privateMethod(this, _ReactRenderer_instances, h_fn).call(this, "blockquote", children);
  }
  list(children, ordered, start) {
    return __privateMethod(this, _ReactRenderer_instances, h_fn).call(this, ordered ? "ol" : "ul", children, ordered && start !== 1 ? { start } : {});
  }
  listItem(children) {
    return __privateMethod(this, _ReactRenderer_instances, h_fn).call(this, "li", children);
  }
  checkbox(checked) {
    return __privateMethod(this, _ReactRenderer_instances, h_fn).call(this, "input", null, { type: "checkbox", disabled: true, checked });
  }
  table(children) {
    return __privateMethod(this, _ReactRenderer_instances, h_fn).call(this, "table", children);
  }
  tableHeader(children) {
    return __privateMethod(this, _ReactRenderer_instances, h_fn).call(this, "thead", children);
  }
  tableBody(children) {
    return __privateMethod(this, _ReactRenderer_instances, h_fn).call(this, "tbody", children);
  }
  tableRow(children) {
    return __privateMethod(this, _ReactRenderer_instances, h_fn).call(this, "tr", children);
  }
  tableCell(children, flags) {
    const tag = flags.header ? "th" : "td";
    return __privateMethod(this, _ReactRenderer_instances, h_fn).call(this, tag, children, { align: flags.align });
  }
  strong(children) {
    return __privateMethod(this, _ReactRenderer_instances, h_fn).call(this, "strong", children);
  }
  em(children) {
    return __privateMethod(this, _ReactRenderer_instances, h_fn).call(this, "em", children);
  }
  del(children) {
    return __privateMethod(this, _ReactRenderer_instances, h_fn).call(this, "del", children);
  }
  text(text) {
    return text;
  }
  html(html) {
    return html;
  }
  hr() {
    return __privateMethod(this, _ReactRenderer_instances, h_fn).call(this, "hr");
  }
  br() {
    return __privateMethod(this, _ReactRenderer_instances, h_fn).call(this, "br");
  }
};
_elId = new WeakMap();
_options = new WeakMap();
_ReactRenderer_instances = new WeakSet();
h_fn = function(el, children = null, props = {}) {
  const elProps = {
    key: `marked-react-${this.elementId}`
  };
  __privateMethod(this, _ReactRenderer_instances, incrementElId_fn).call(this);
  return reactExports.createElement(el, __spreadValues(__spreadValues({}, props), elProps), children);
};
incrementElId_fn = function() {
  __privateSet(this, _elId, __privateGet(this, _elId) + 1);
};
var ReactRenderer_default = ReactRenderer;

// src/Markdown.ts
var validateComponentProps = (props) => {
  if (props.value && typeof props.value !== "string") {
    throw new TypeError(`[marked-react]: Expected value to be of type string but got ${typeof props.value}`);
  }
  if (props.children && typeof props.children !== "string") {
    throw new TypeError(`[marked-react]: Expected children to be of type string but got ${typeof props.children}`);
  }
};
var defaultProps = {
  isInline: false,
  breaks: false,
  gfm: true,
  baseURL: void 0,
  openLinksInNewTab: true,
  langPrefix: "language-",
  renderer: void 0
};
var markedInstance = new Marked();
var Markdown = (props) => {
  var _a, _b, _c;
  validateComponentProps(props);
  const options = __spreadValues(__spreadValues({}, defaultProps), props);
  const marked = (_a = options.instance) != null ? _a : markedInstance;
  const lexerOptions = {
    breaks: options.breaks,
    gfm: options.gfm
  };
  const markdownString = (_c = (_b = options.value) != null ? _b : options.children) != null ? _c : "";
  const tokens = options.isInline ? marked.Lexer.lexInline(markdownString, lexerOptions) : marked.lexer(markdownString, lexerOptions);
  const parserOptions = {
    renderer: new ReactRenderer_default({
      renderer: options.renderer,
      baseURL: options.baseURL,
      openLinksInNewTab: options.openLinksInNewTab,
      langPrefix: options.langPrefix
    })
  };
  const parser = new ReactParser_default(parserOptions);
  const children = options.isInline ? parser.parseInline(tokens) : parser.parse(tokens);
  return reactExports.createElement(reactExports.Fragment, null, children);
};
var Markdown_default = Markdown;

// src/index.ts
var src_default = Markdown_default;

export { src_default as s };
//# sourceMappingURL=vendor-marked-react-da4ba3f9.js.map
