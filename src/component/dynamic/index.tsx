// DynamicComponent.js
import React, { Suspense } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import styles from './index.module.scss'
const customStyle = {
  padding: 20,
  fontSize: 15,
  fontFamily: "var(--font-family)",
};
const DynamicComponent = (props: any) => {
  const { loader } = props;
  const Component = React.lazy(() => loader);
  // 失败情况下代码处理逻辑

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={styles.markdownPage}>
        <Component
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
    </Suspense>
  );
};

export default DynamicComponent;
