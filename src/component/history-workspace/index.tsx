import React from "react";
import HistortyContent from "./Content";
import InputDemo from "../workspace/history-input";
const HistoryWorkspace = (props: { data: any; onClickCmd: Function }) => {
  const { data, onClickCmd } = props;
  return (
    <div>
      {data.map((item: string) => {
        return (
          <>
            <InputDemo value={item} isReadOnly={true} />
            <HistortyContent value={item} onClickCmd={onClickCmd} />
          </>
        );
      })}
    </div>
  );
};

export default HistoryWorkspace;

/*

  markdown 转 html添加点击事件

  自动滚动功能  间隔键入功能

*/

//  组织命令展示列表

/*

  新增  文档 document  cd 文档页面 即新开页面 

  文件的形式管理目录  命令键入管理模式 ls 目录 cd 进入下一级 cd文件名 进入文件 

  weekly  周刊可以作为每周学习知识总结或新增知识点
  
  开发面试模式  通过命令打开目录版知识索引列表

  夜间模式 通过命令打开夜间模式 
*/
