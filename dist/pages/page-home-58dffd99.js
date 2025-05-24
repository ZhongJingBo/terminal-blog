
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { r as reactExports, R as React } from '../vendor/vendor-react-2f41bc9d.js';
import { H as HistoryWorkspace, I as Input } from '../components-b4bbf0fa.js';

var styles = {"home":"index-module_home__QJcDE","noteList":"index-module_noteList__PtNw0","noteItem":"index-module_noteItem__FWQf1"};

const Home = () => {
  const [historyValue, setHistoryValue] = reactExports.useState([]);
  const [currentClickCmd, setCurrentClickCmd] = reactExports.useState("");
  const onKeyDown = (value) => {
    if (value !== historyValue[historyValue.length - 1]) {
      setHistoryValue(value === "clear" ? [] : (prev) => [...prev, value]);
    }
  };
  const containerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    var _a;
    (_a = containerRef.current) == null ? void 0 : _a.scrollIntoView({
      behavior: "smooth",
      block: "end"
    });
  }, [historyValue]);
  return /* @__PURE__ */ React.createElement("div", { ref: containerRef, className: styles.home }, /* @__PURE__ */ React.createElement("div", null, "hello \uFF0C\u8BF7\u5728\u4E0B\u65B9\u8F93\u5165\u547D\u4EE4\u4EA4\u4E92"), /* @__PURE__ */ React.createElement("div", { className: "home-content" }, /* @__PURE__ */ React.createElement(
    HistoryWorkspace,
    {
      data: historyValue,
      onClickCmd: (value) => {
        setCurrentClickCmd(value);
      }
    }
  ), /* @__PURE__ */ React.createElement(Input, { onkeydown: onKeyDown, currentClickCmd })));
};

export { Home as H };
//# sourceMappingURL=page-home-58dffd99.js.map
