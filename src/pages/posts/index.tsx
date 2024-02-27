import React, { FC, useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import styles from "./index.scss";
// 根据路由  动态加载mdx组件 封装dynamic组件使用 解决报错信息
const MyComponentPromise = import("../../md/demo.mdx");
const MyLazyComponent = React.lazy(() => MyComponentPromise);
// 0.0.2
const customStyle = {
  padding: 20,
  fontSize: 15,
  fontFamily: "var(--font-family)",
};

const Posts: FC = () => {
  return (
    <div className={styles.markdownPage}>
      <MyLazyComponent
        components={{
          pre(props: any) {
            const { children } = props.children.props;
            return (
              <SyntaxHighlighter
                language="javascript"
                style={oneLight}
                customStyle={customStyle}
              >
                {children}
              </SyntaxHighlighter>
            );
          },
        }}
      />
    </div>
  );
};

export default Posts;
