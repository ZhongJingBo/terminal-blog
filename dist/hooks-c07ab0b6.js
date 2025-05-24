
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { r as reactExports, R as React } from './vendor/vendor-react-2f41bc9d.js';
import { a as getNoteList } from './main.js';

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
const defaultContext = {
  noteList: [],
  loading: false,
  error: null,
  refreshNoteList: () => __async(void 0, null, function* () {
  })
};
const MarkdownContext = reactExports.createContext(defaultContext);
const useMarkdown = () => {
  const context = reactExports.useContext(MarkdownContext);
  if (!context) {
    throw new Error("useMarkdown must be used within a MarkdownProvider");
  }
  return context;
};
const MarkdownProvider = ({ children }) => {
  const [noteList, setNoteList] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const fetchNoteList = () => __async(void 0, null, function* () {
    try {
      setLoading(true);
      setError(null);
      const data = yield getNoteList();
      setNoteList(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to fetch note list"));
    } finally {
      setLoading(false);
    }
  });
  reactExports.useEffect(() => {
    fetchNoteList();
  }, []);
  const contextValue = {
    noteList,
    loading,
    error,
    refreshNoteList: fetchNoteList
  };
  return /* @__PURE__ */ React.createElement(MarkdownContext.Provider, { value: contextValue }, children);
};

export { MarkdownProvider as M, useMarkdown as u };
//# sourceMappingURL=hooks-c07ab0b6.js.map
