import React, { FC } from "react";
import styles from'./index.module.scss'

const Reprint: FC = () => {
  // 开发 Reprint 列表

  return (
    <div className={styles.reprin}>

      <div className="alert">
        Reprint内容还没有构思好，等待后续迭代
      </div>
      <main>
        <ul>
            <li></li>
        </ul>
      </main>
    </div>
  );
};

export default Reprint;
