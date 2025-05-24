
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { R as React, a as useRoutes, c as client, B as BrowserRouter } from './vendor/vendor-react-2f41bc9d.js';
import { H as Home } from './pages/page-home-58dffd99.js';
import { P as Page, a as Posts } from './pages/page-posts-c6448357.js';
import { P as Posts$1 } from './components-b4bbf0fa.js';
import { R as Reprint } from './pages/page-reprint-500a0a7e.js';
import { A as About } from './pages/page-about-5bd8246e.js';
import { N as Nav, H as Header } from './pages/page-header-856707e5.js';
import { M as MarkdownProvider } from './hooks-c07ab0b6.js';
import './vendor-1e87842e.js';
import './main.js';
import './vendor/vendor-marked-react-da4ba3f9.js';

var style = {"main":"index-module_main__0zkgE"};

const INSTRUCTION = [
  {
    name: "about"
  },
  {
    name: "posts"
  },
  {
    name: "reprint"
  },
  {
    name: "help"
  },
  {
    name: "list"
  },
  {
    name: "ls"
  },
  {
    name: "clear"
  }
];
const HELPLIST = [
  { name: "help", hint: "show details" },
  { name: "list/ls", hint: "list all commands:", component: "ListComp" },
  { name: "clear", hint: "clear all outputs" },
  { name: "about", hint: "some information about me" },
  { name: "posts", hint: "list all posts" },
  { name: "reprint", hint: "list all Reprint" }
];

var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
const API_BASE_URL = "/api";
const getNoteList = () => __async(void 0, null, function* () {
  try {
    const url = `${API_BASE_URL}/post/fixedlist/1`;
    const response = yield fetch(url, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = yield response.json();
    return data == null ? void 0 : data.data;
  } catch (error) {
    console.error("Error fetching notes:", error);
    throw error;
  }
});
const getNoteDetail = (id) => __async(void 0, null, function* () {
  try {
    const url = `${API_BASE_URL}/post/detail/${id}`;
    const response = yield fetch(url, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = yield response.json();
    return data == null ? void 0 : data.data;
  } catch (error) {
    console.error("Error fetching note detail:", error);
    throw error;
  }
});

const routers = [
  {
    path: "/",
    element: /* @__PURE__ */ React.createElement(Home, null),
    children: [
      {
        path: "/home",
        element: /* @__PURE__ */ React.createElement(Home, null)
      }
    ]
  },
  {
    path: "/posts",
    element: /* @__PURE__ */ React.createElement(Page, null),
    children: [
      {
        path: "/posts",
        element: /* @__PURE__ */ React.createElement(Posts, null)
      },
      {
        path: "/posts/:id",
        element: /* @__PURE__ */ React.createElement(Posts$1, null)
      }
    ]
  },
  {
    path: "/reprint",
    element: /* @__PURE__ */ React.createElement(Reprint, null)
  },
  {
    path: "/about",
    element: /* @__PURE__ */ React.createElement(About, null)
  }
];

const App = () => {
  const ele = useRoutes(routers);
  return /* @__PURE__ */ React.createElement(MarkdownProvider, null, /* @__PURE__ */ React.createElement("div", { className: style.main }, /* @__PURE__ */ React.createElement(Nav, null), /* @__PURE__ */ React.createElement(Header, null), ele));
};

const root = document.getElementById("root");
client.createRoot(root).render(
  /* @__PURE__ */ React.createElement(BrowserRouter, null, /* @__PURE__ */ React.createElement(App, null))
);

export { HELPLIST as H, INSTRUCTION as I, getNoteList as a, getNoteDetail as g };
//# sourceMappingURL=main.js.map
