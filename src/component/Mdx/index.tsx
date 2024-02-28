import React from "react";
import DynamicComponent from "../dynamic";
import { useParams } from "react-router-dom";

// 控制加载逻辑
const customStyle = {
  padding: 20,
  fontSize: 15,
  fontFamily: "var(--font-family)",
};
const Posts = () => {
  const { id } = useParams();
  const MyComponentPromise = import(`../../md/${id}.mdx`);

  // 错误拦截
  return <DynamicComponent loader={MyComponentPromise} />;
};

export default Posts;
