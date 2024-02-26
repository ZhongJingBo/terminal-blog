import React from "react";
import styles from  './workspace.scss'
import {CodeIcon} from '../../../public/svg'
const WorkspceTitle = () => {
  return (
    <>
      <div className={styles.title}>
        <span className="blue"> zhong.space</span>
        <span>on</span>
        <span className="purple"> <CodeIcon/>main</span>
        <span>is</span>
        <span> 📦 v0.0.1</span>
        <span>via</span>
        <span className="green"> React@18.2.0</span>
      </div>
    </>
  );
};

export default WorkspceTitle;