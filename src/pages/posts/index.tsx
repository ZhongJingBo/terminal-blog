import React, { FC } from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { POSTSLIST,postsArrType } from "../../constants";

const Posts: FC = () => {
  // 开发 posts 列表

  return (
    <div className={styles.container}>
      <main>
        <h1>2024</h1>
        <ul>
          {POSTSLIST.map((item:postsArrType) => {
            return (
              <li key={item.link}>
                <Link to={item.link}> {item.name}</Link>
                <div className="text-time">{item.time}</div>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export default Posts;

