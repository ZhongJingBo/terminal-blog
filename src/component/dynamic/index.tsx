// DynamicComponent.js
import React, { Suspense } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import styles from "./index.module.scss";
import Markdown from 'marked-react';
import { oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";


const customStyle = {
  padding: 20,
  fontSize: 15,
  fontFamily: "var(--font-family)",
};
const DynamicComponent = (props: any) => {
  const { content, title, createdAt } = props;

  const renderer = {
    code(snippet: string, lang: string) {
      return (

          <SyntaxHighlighter
            language={lang || "javascript"}
            customStyle={customStyle}
            style={oneLight}
          >
            {snippet}
          </SyntaxHighlighter>
  
      );
    },
    codespan(code: string) {
      return <code className={styles.codespan}>{code}</code>;
    },
    paragraph(children: React.ReactNode) {
      return <p className={styles.paragraph}>{children}</p>;
    },
    heading(children: React.ReactNode, level: number) {
      const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
      return <HeadingTag className={`${styles.heading} ${styles[`heading${level}`]}`}>{children}</HeadingTag>;
    },
    link(href: string, text: React.ReactNode) {
      return <a href={href} className={styles.link} target="_blank" rel="noopener noreferrer">{text}</a>;
    },
    blockquote(children: React.ReactNode) {
      return <blockquote className={styles.blockquote}>{children}</blockquote>;
    },
    list(children: React.ReactNode, ordered: boolean) {
      return ordered ? (
        <ol className={styles.orderedList}>{children}</ol>
      ) : (
        <ul className={styles.unorderedList}>{children}</ul>
      );
    },
    listItem(children: React.ReactNode) {
      return <li className={styles.listItem}>{children}</li>;
    },
    strong(children: React.ReactNode) {
      return <strong className={styles.strong}>{children}</strong>;
    },
    em(children: React.ReactNode) {
      return <em className={styles.emphasis}>{children}</em>;
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <div className={styles.header}>
          <h1>{title}</h1>
          <div className={styles.textTime}>
            {new Date(createdAt).toLocaleDateString("zh-CN")}
          </div>
        </div>
        <div className={styles.markdownContent}>
          <Markdown value={content || ""} renderer={renderer} />
        </div>
      </div>
    </Suspense>
  );
};

export default DynamicComponent;
