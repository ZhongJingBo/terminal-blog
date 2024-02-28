import React from "react";
import style from "./style/index.module.scss";
import { useRoutes } from "react-router-dom";
import routers from "./routers/index";
import Header from "./pages/header";
import "./style/root.css"


const App = () => {
  const ele = useRoutes(routers);
  return (
    <div className={style.main}>
      <Header/>
      {ele}
    </div>
  );
};

export default App;