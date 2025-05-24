import React, { FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { getNoteList, NoteItem } from "../../service/index";
import { useMarkdown } from "../../hooks/MarkdownContext";
const Posts: FC = () => {
  // 开发 posts 列表
  const { noteList, loading, error } = useMarkdown();
  const [postsList, setPostsList] = useState<NoteItem[]>([]);
  useEffect(() => {
    getNoteList().then((res: NoteItem[]) => {
      setPostsList(res);
    });
  }, []);

  return (
    <div className={styles.container}>
      <main>
        <h1>2025</h1>
        <ul>
          {postsList.map((item: NoteItem) => {
            return (
              <li key={item.id}>
                <Link to={`${item.id}`}> {item.title}</Link>
                <div className="text-time">{new Date(item.createdAt).toLocaleDateString('zh-CN', { month: '2-digit', day: '2-digit' })}</div>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export default Posts;

