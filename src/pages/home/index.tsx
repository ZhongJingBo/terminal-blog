import React, { useState, useRef, useEffect } from "react";
import styles from "./index.module.scss";
import Input from "../../component/workspace/input";
import HistoryWorkspace from "../../component/history-workspace";


const Home = () => {
  const [historyValue, setHistoryValue] = useState<string[]>([]);
  const [currentClickCmd, setCurrentClickCmd] = useState<string>("");
  const onKeyDown = (value: string): void => {
    if (value !== historyValue[historyValue.length - 1]) {
      setHistoryValue(value === "clear" ? [] : (prev) => [...prev, value]);
    }
  };

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => { 
    containerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [historyValue]);
  return (
    <div ref={containerRef} className={styles.home}>
      <div>hello ，请在下方输入命令交互</div>
      <div className="home-content">
        <HistoryWorkspace
          data={historyValue}
          onClickCmd={(value: string) => {
            setCurrentClickCmd(value);
          }}
        />
        <Input onkeydown={onKeyDown} currentClickCmd={currentClickCmd} />
      </div>
    </div>
  );
};
export default Home;



