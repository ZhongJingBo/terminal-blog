import React from "react";
import style from "./style/index.module.scss";
import { useRoutes } from "react-router-dom";
import routers from "./routers/index";
import Header,{Nav} from "./pages/header";
import "./style/root.css"
import { MarkdownProvider } from './hooks/MarkdownContext';

const App = () => {
  const ele = useRoutes(routers);
  return (
    <MarkdownProvider>
      <div className={style.main}>
        <Nav/>
        <Header/>
        {ele}
      </div> 
    </MarkdownProvider>
  );
};

export default App;