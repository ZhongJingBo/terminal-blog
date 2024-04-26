import React, { FC } from "react";
import styles from "./index.module.scss";

const About: FC = () => {
  // 开发 Reprint 列表

  return (
    <div className={styles.about}>
      <h3>terminal-blog</h3>
      <div>
        这个项目的创意是浏览掘金时，看到的一个博主的博客网站
        <a href="https://yucihent.space/" target="_blank">
          点击前往作者地址
        </a>
      </div>
      <div>整体使用的技术有所不同，作者使用的是Next作为技术框架，想要有更多了解可以进入原作者的网站了解更多。</div>
      <br/>
      <div>关于技术</div>
      <div>
         框架使用的是React18，构建是采取Rollup，想要知道更多关于博客的技术细节可以
        <a>点击这里</a>
      </div>
    </div>
  );
};

export default About;
