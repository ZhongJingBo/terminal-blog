import React, { useState, useEffect } from "react";
import styles from "./workspace.scss";
import WorkspceTitle from "./workspace-title";

const Input = (props: { onkeydown?: Function; currentClickCmd: string }) => {
  const { onkeydown = () => {}, currentClickCmd } = props;
  const [value, setValue] = useState<string>();
  const [cmd, setCmd] = useState<string>();


  useEffect(() => {
    setValue("");
  }, [cmd]);

  useEffect(() => {
    autoEnterCmd(currentClickCmd);
  }, [currentClickCmd]);

  const autoEnterCmd = (cmd: string) => {
    const interval = 100;
    for (let i = 0; i < cmd.length; i++) {
      setTimeout(() => {
        setValue((prev) => prev + cmd.charAt(i));
        if (i === cmd.length - 1) {
          onkeydown(cmd);
          setValue("");
        }
      }, interval * (i + 1));
    }
  };

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  const onEnterDown = (e: any) => {
    if (e.code === "Enter" && value) {
      setCmd(value);
      onkeydown(value);
    }
  };

  return (
    <div>
      <WorkspceTitle />
      <div className={styles.input}>
        {" "}
        <div className="input-box">
          <div className="input-navigation"> ❯ </div>
          <input
            className="home_input"
            value={value}
            type="text"
            onChange={onChange}
            onKeyDown={onEnterDown}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;