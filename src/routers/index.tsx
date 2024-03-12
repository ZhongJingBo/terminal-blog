import React from "react";
import Home from "../pages/home";
import Posts from "../pages/posts";
import Mdx from "../component/Mdx/index";
import Postspage from "../pages/posts/page";
import Reprint from "../pages/reprint";
import About from "../pages/about";

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
  },

  {
    path: "/reprint",
    element: <Reprint />,
  },
  {
    path: "/about",
    element: <About />,
  },
];
export default routers;
