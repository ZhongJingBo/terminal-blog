import React from "react";
import Home from "../pages/home";
import Posts from "../pages/posts";
  const routers = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/posts",
      element: <Posts />,
    },
  ]
export default routers;