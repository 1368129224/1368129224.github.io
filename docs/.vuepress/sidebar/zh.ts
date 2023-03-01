import { sidebar } from "vuepress-theme-hope";

export const Sidebar = sidebar({
  "/": [
    "",
    {
      text: "技术相关",
      icon: "note",
      prefix: "posts/",
      link: "posts/",
      children: "structure",
    },
    {
      text: "日常碎碎念",
      icon: "creative",
      prefix: "daily/",
      link: "daily/",
      children: "structure",
    },
    {
      text: "如何使用",
      icon: "creative",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    "intro",
    "slides",
  ],
});
