import React from "react";
import styles from "./workspace.scss";
import WorkspceTitle from "./workspace-title";
const Input = (props: { value: string; isReadOnly: boolean }) => {
  const { value, isReadOnly } = props;
  return (
    <div>
      <WorkspceTitle />
      <div className={styles.input}>
        {" "}
        <div className="input-box">
          <div className="input-navigation"> ❯ </div>
          <input
            className="home_input"
            readOnly={isReadOnly}
            value={value}
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default Input;