import React from "react";
import styles from "./style/index.scss";
import { useRoutes } from "react-router-dom";
import routers from "./routers/index";
import Header from "./pages/header";
import "./style/root.css"
const App = () => {
  const ele = useRoutes(routers);
  return (
    <div className={styles.main}>
      <Header/>
      {ele}
    </div>
  );
};

export default App;