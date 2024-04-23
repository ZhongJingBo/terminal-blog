export const INSTRUCTION = [
  {
    name: "about",
  },
  {
    name: "posts",
  },
  {
    name: "reprint",
  },
  {
    name: "help",
  },
  {
    name: "list",
  },
  {
    name: "ls",
  },
  {
    name: "clear",
  },
];

export const HELPLIST = [
  { name: "help", hint: "show details" },
  { name: "list/ls", hint: "list all commands:", component: "ListComp" },
  { name: "clear", hint: "clear all outputs" },
  { name: "about", hint: "some information about me" },
  { name: "posts", hint: "list all posts" },
  { name: "reprint", hint: "list all Reprint" },
];

export interface postsArrType {
  name: string;
  time: string;
  link: string;
}

export const POSTSLIST: postsArrType[] = [
  {
    name: "Rollup基本概念与使用",
    time: "2024-03-11",
    link: "rollup",
  },
  {
    name: "从构建开始的Lit开发",
    time: "2024-02-28",
    link: "lit-pro",
  },
  {
    name: "看完本篇，教你用Lit实现简单组件开发",
    time: "2024-02-28",
    link: "lit",
  },

  {
    name: "web components基础使用指南",
    time: "2024-04-23",
    link: "web-components",
  },
];
