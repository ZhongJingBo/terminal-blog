import React, { FC } from "react";
import {  Outlet } from 'react-router-dom';

// 路由地址参数 加载地址
const Page: FC = () => {

  return (
    <div >
        <Outlet/>
    </div>
  );
};

export default Page;
