
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { R as React, r as reactExports, S as SyntaxHighlighter, p as prism, u as useParams } from './vendor/vendor-react-2f41bc9d.js';
import { I as INSTRUCTION, H as HELPLIST, g as getNoteDetail } from './main.js';
import { u as useMarkdown } from './hooks-c07ab0b6.js';
import { s as src_default } from './vendor/vendor-marked-react-da4ba3f9.js';

var styles$2 = {"title":"workspace-module_title__D3edu","input":"workspace-module_input__98Fex","home_input":"workspace-module_home_input__4cRge","input-navigation":"workspace-module_input-navigation__FUmL9","input-box":"workspace-module_input-box__0wjFq"};

const CodeIcon = () => {
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      style: { verticalAlign: "middle", marginRight: "6px" },
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "4570",
      id: "mx_n_1699337693092",
      width: "20",
      height: "20"
    },
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M740 161c-61.8 0-112 50.2-112 112 0 50.1 33.1 92.6 78.5 106.9v95.9L320 602.4V318.1c44.2-15 76-56.9 76-106.1 0-61.8-50.2-112-112-112s-112 50.2-112 112c0 49.2 31.8 91 76 106.1V706c-44.2 15-76 56.9-76 106.1 0 61.8 50.2 112 112 112s112-50.2 112-112c0-49.2-31.8-91-76-106.1v-27.8l423.5-138.7c20.9-6.8 34.9-26.2 34.9-48.2V378.2c42.9-15.8 73.6-57 73.6-105.2 0-61.8-50.2-112-112-112z m-504 51c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48z m96 600c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48z m408-491c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z",
        fill: "#D946EF",
        "p-id": "4571"
      }
    )
  );
};

const WorkspceTitle = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: styles$2.title }, /* @__PURE__ */ React.createElement("span", { className: "blue" }, " zhong.space"), /* @__PURE__ */ React.createElement("span", null, "on"), /* @__PURE__ */ React.createElement("span", { className: "purple" }, " ", /* @__PURE__ */ React.createElement(CodeIcon, null), "main"), /* @__PURE__ */ React.createElement("span", null, "is"), /* @__PURE__ */ React.createElement("span", null, " \u{1F4E6} v0.0.1"), /* @__PURE__ */ React.createElement("span", null, "via"), /* @__PURE__ */ React.createElement("span", { className: "green" }, " React@18.2.0")));
};

const Input$1 = (props) => {
  const { onkeydown = () => {
  }, currentClickCmd } = props;
  const [value, setValue] = reactExports.useState();
  const [cmd, setCmd] = reactExports.useState();
  reactExports.useEffect(() => {
    setValue("");
  }, [cmd]);
  reactExports.useEffect(() => {
    autoEnterCmd(currentClickCmd);
  }, [currentClickCmd]);
  const autoEnterCmd = (cmd2) => {
    const interval = 100;
    for (let i = 0; i < cmd2.length; i++) {
      setTimeout(() => {
        setValue((prev) => prev + cmd2.charAt(i));
        if (i === cmd2.length - 1) {
          onkeydown(cmd2);
          setValue("");
        }
      }, interval * (i + 1));
    }
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onEnterDown = (e) => {
    if (e.code === "Enter" && value) {
      setCmd(value);
      onkeydown(value);
    }
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(WorkspceTitle, null), /* @__PURE__ */ React.createElement("div", { className: styles$2.input }, " ", /* @__PURE__ */ React.createElement("div", { className: "input-box" }, /* @__PURE__ */ React.createElement("div", { className: "input-navigation" }, " \u276F "), /* @__PURE__ */ React.createElement(
    "input",
    {
      className: "home_input",
      value,
      type: "text",
      onChange,
      onKeyDown: onEnterDown
    }
  ))));
};

var styles$1 = {"listComp":"index-module_listComp__JXg7-","histortyContent":"index-module_histortyContent__Ko8qo","errorComp":"index-module_errorComp__083Nc","helpComp":"index-module_helpComp__-ptHK","postsHome":"index-module_postsHome__4sDnK"};

const ListComp = (props) => {
  const { styleWidth = "50%", onClickCmd = () => {
  } } = props;
  return /* @__PURE__ */ React.createElement("div", { className: styles$1.listComp, style: { width: styleWidth } }, INSTRUCTION.map((item) => {
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "list-comp-item",
        onClick: () => {
          onClickCmd(item.name);
        }
      },
      item.name
    );
  }));
};
const ErrorComp = (props) => {
  const { error } = props;
  return /* @__PURE__ */ React.createElement("div", { className: styles$1.errorComp }, "command not found: ", error);
};
const HelpComp = (props) => {
  const { onClickCmd } = props;
  return /* @__PURE__ */ React.createElement("div", { className: styles$1.helpComp }, /* @__PURE__ */ React.createElement("div", { className: "help-comp-title" }, "You can enter the following commands to interact:"), /* @__PURE__ */ React.createElement("ul", null, HELPLIST.map((item) => {
    return /* @__PURE__ */ React.createElement("li", { key: item.name }, /* @__PURE__ */ React.createElement("span", { className: "help-content-left" }, item.name), item.component === "ListComp" ? /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "help-content-right-conmponent" }, item.hint), " ", /* @__PURE__ */ React.createElement(ListComp, { styleWidth: "100%", onClickCmd })) : /* @__PURE__ */ React.createElement("span", null, item.hint));
  })));
};
const PostsComp = (props) => {
  const { noteList, loading, error } = useMarkdown();
  return /* @__PURE__ */ React.createElement("div", { className: styles$1.postsHome }, /* @__PURE__ */ React.createElement("ul", null, noteList.map((item) => {
    return /* @__PURE__ */ React.createElement("li", { key: item.id }, /* @__PURE__ */ React.createElement("a", { href: `posts/${item.id}`, target: "_blank" }, " ", item.title));
  })));
};
function HistortyContent(props) {
  const { value, onClickCmd } = props;
  const compList = {
    list: /* @__PURE__ */ React.createElement(ListComp, { onClickCmd }),
    ls: /* @__PURE__ */ React.createElement(ListComp, { onClickCmd }),
    help: /* @__PURE__ */ React.createElement(HelpComp, { onClickCmd }),
    posts: /* @__PURE__ */ React.createElement(PostsComp, { onClickCmd })
  };
  if (!(compList == null ? void 0 : compList[value])) {
    return /* @__PURE__ */ React.createElement(ErrorComp, { error: value });
  }
  return /* @__PURE__ */ React.createElement("div", { className: styles$1.histortyContent }, compList[value]);
}

const Input = (props) => {
  const { value, isReadOnly } = props;
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(WorkspceTitle, null), /* @__PURE__ */ React.createElement("div", { className: styles$2.input }, " ", /* @__PURE__ */ React.createElement("div", { className: "input-box" }, /* @__PURE__ */ React.createElement("div", { className: "input-navigation" }, " \u276F "), /* @__PURE__ */ React.createElement(
    "input",
    {
      className: "home_input",
      readOnly: isReadOnly,
      value,
      type: "text"
    }
  ))));
};

const HistoryWorkspace = (props) => {
  const { data, onClickCmd } = props;
  return /* @__PURE__ */ React.createElement("div", null, data.map((item) => {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Input, { value: item, isReadOnly: true }), /* @__PURE__ */ React.createElement(HistortyContent, { value: item, onClickCmd }));
  }));
};

var styles = {"header":"index-module_header__MYbeZ","text-time":"index-module_text-time__Rcxmj","codespan":"index-module_codespan__fRxH0","heading":"index-module_heading__JMWG8","heading-1":"index-module_heading-1__JUcwJ","heading-2":"index-module_heading-2__ioZne","heading-3":"index-module_heading-3__KFX9L","paragraph":"index-module_paragraph__derJW","link":"index-module_link__-g5jD","blockquote":"index-module_blockquote__q-Yrr","ordered-list":"index-module_ordered-list__QJK-U","unordered-list":"index-module_unordered-list__k4XuT","list-item":"index-module_list-item__IJwhZ","strong":"index-module_strong__zFaDa","emphasis":"index-module_emphasis__kqMgK","syntaxHighlighterWrapper":"index-module_syntaxHighlighterWrapper__2VNvR"};

const customStyle = {
  padding: 20,
  fontSize: 15,
  fontFamily: "var(--font-family)"
};
const DynamicComponent = (props) => {
  const { content, title, createdAt } = props;
  const renderer = {
    code(snippet, lang) {
      return /* @__PURE__ */ React.createElement(
        SyntaxHighlighter,
        {
          language: lang || "javascript",
          customStyle,
          style: prism.oneLight
        },
        snippet
      );
    },
    codespan(code) {
      return /* @__PURE__ */ React.createElement("code", { className: styles.codespan }, code);
    },
    paragraph(children) {
      return /* @__PURE__ */ React.createElement("p", { className: styles.paragraph }, children);
    },
    heading(children, level) {
      const HeadingTag = `h${level}`;
      return /* @__PURE__ */ React.createElement(HeadingTag, { className: `${styles.heading} ${styles[`heading${level}`]}` }, children);
    },
    link(href, text) {
      return /* @__PURE__ */ React.createElement("a", { href, className: styles.link, target: "_blank", rel: "noopener noreferrer" }, text);
    },
    blockquote(children) {
      return /* @__PURE__ */ React.createElement("blockquote", { className: styles.blockquote }, children);
    },
    list(children, ordered) {
      return ordered ? /* @__PURE__ */ React.createElement("ol", { className: styles.orderedList }, children) : /* @__PURE__ */ React.createElement("ul", { className: styles.unorderedList }, children);
    },
    listItem(children) {
      return /* @__PURE__ */ React.createElement("li", { className: styles.listItem }, children);
    },
    strong(children) {
      return /* @__PURE__ */ React.createElement("strong", { className: styles.strong }, children);
    },
    em(children) {
      return /* @__PURE__ */ React.createElement("em", { className: styles.emphasis }, children);
    }
  };
  return /* @__PURE__ */ React.createElement(reactExports.Suspense, { fallback: /* @__PURE__ */ React.createElement("div", null, "Loading...") }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: styles.header }, /* @__PURE__ */ React.createElement("h1", null, title), /* @__PURE__ */ React.createElement("div", { className: styles.textTime }, new Date(createdAt).toLocaleDateString("zh-CN"))), /* @__PURE__ */ React.createElement("div", { className: styles.markdownContent }, /* @__PURE__ */ React.createElement(src_default, { value: content || "", renderer }))));
};

const Posts = () => {
  const { id } = useParams();
  const [noteDetail, setNoteDetail] = reactExports.useState();
  reactExports.useEffect(() => {
    getNoteDetail(id || "").then((res) => {
      setNoteDetail(res);
    });
  }, []);
  return /* @__PURE__ */ React.createElement(DynamicComponent, { content: noteDetail == null ? void 0 : noteDetail.content, title: noteDetail == null ? void 0 : noteDetail.title, createdAt: noteDetail == null ? void 0 : noteDetail.createdAt, updatedAt: noteDetail == null ? void 0 : noteDetail.updatedAt });
};

export { HistoryWorkspace as H, Input$1 as I, Posts as P };
//# sourceMappingURL=components-b4bbf0fa.js.map
