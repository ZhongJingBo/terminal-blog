import React, { useState, useRef, useEffect } from "react";
import styles from "./index.scss";
import Input from "../../component/workspace/input";
import HistoryWorkspace from "components/component/history-workspace";

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

/* 
    本质上是进行同构渲染 CSR + SSR

   1、input输入校验
      3输入报错提示error 

   2、输入默认展示内容

   3、自动键入 

   4、tab自动补全  
   
   5、原设计的夜间模式改变为设置页面 ———— 命令行输入set开启设置页面

   6、更多扩展功能 读取本地文件等操作 对本地vscode文件进行操作命令行自动执行启动vscode 
      1 例 set-vscode ./ .... 地址 
      2 读取package信息补全title


   7、 直接写文章编辑发布
*/
