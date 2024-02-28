import React from "react";
import Home from "../pages/home";
import Posts from "../pages/posts";
import Mdx from "../component/Mdx/index";
import Postspage from "../pages/posts/page";

const routers = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
  {
    path: "/posts",
    element: <Postspage />,
    children: [
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/posts/:id",
        element: <Mdx />,
      },
    ],
  }
 
];
export default routers;
