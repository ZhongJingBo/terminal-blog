import React, { FC } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Post from "../../md/demo.mdx";
import styles from "./index.scss";

const customStyle = {
  padding: 20,
  fontSize: 15,
  fontFamily: "var(--font-family)",
};

const Posts: FC = () => {
  return (
    <div className={styles.markdownPage}>
      <Post
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
