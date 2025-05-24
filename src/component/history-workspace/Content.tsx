import React from "react";
import styles from "./index.module.scss";
import { INSTRUCTION, HELPLIST } from "../../constants";
import { useMarkdown } from "../../hooks/MarkdownContext";
// 索引签名
interface CompList {
  [key: string]: any;
}

const ListComp = (props: { styleWidth?: string; onClickCmd?: Function }) => {
  const { styleWidth = "50%", onClickCmd = () => {} } = props;
  return (
    <div className={styles.listComp} style={{ width: styleWidth }}>
      {INSTRUCTION.map((item) => {
        return (
          <div
            className="list-comp-item"
            onClick={() => {
              onClickCmd(item.name);
            }}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

const ErrorComp = (props: { error: string }) => {
  const { error } = props;
  return <div className={styles.errorComp}>command not found: {error}</div>;
};

const HelpComp = (props: { onClickCmd: Function }) => {
  const { onClickCmd } = props;
  return (
    <div className={styles.helpComp}>
      <div className="help-comp-title">
        You can enter the following commands to interact:
      </div>
      <ul>
        {HELPLIST.map((item) => {
          return (
            <li key={item.name}>
              <span className="help-content-left">{item.name}</span>
              {item.component === "ListComp" ? (
                <div>
                  <div className="help-content-right-conmponent">
                    {item.hint}
                  </div>{" "}
                  <ListComp styleWidth="100%" onClickCmd={onClickCmd} />
                </div>
              ) : (
                <span>{item.hint}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const PostsComp = (props: { onClickCmd: Function }) => {
  const { noteList, loading, error } = useMarkdown();
  const { onClickCmd } = props;
  return (
    <div className={styles.postsHome}>
      <ul>
        {noteList.map((item) => {
          return (
            <li key={item.id}>
              <a href={`posts/${item.id}`} target="_blank">
                {" "}
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

function HistortyContent(props: { value: string; onClickCmd: Function }) {
  const { value, onClickCmd } = props;

  // 处理value大小写 error 返回用户输入
  const compList: CompList = {
    list: <ListComp onClickCmd={onClickCmd} />,
    ls: <ListComp onClickCmd={onClickCmd} />,
    help: <HelpComp onClickCmd={onClickCmd} />,
    posts: <PostsComp onClickCmd={onClickCmd} />,
  };

  if (!compList?.[value]) {
    return <ErrorComp error={value} />;
  }

  return <div className={styles.histortyContent}>{compList[value]}</div>;
}

export default HistortyContent;
