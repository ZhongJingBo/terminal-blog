export const INSTRUCTION = [
  {
    name: "about",
  },
  {
    name: "posts",
  },
  {
    name: "weekly",
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
  { name: "weekly", hint: "list all weekly" },
];

export interface postsArrType {
  name: string;
  time: string;
  link: string;
}

export const POSTSLIST: postsArrType[] = [
  {
    name: "执行上下文",
    time: "2024-02-27",
    link: "demo",
  },

  {
    name: "开发",
    time: "2024-02-27",
    link: "demo1",
  },
];
