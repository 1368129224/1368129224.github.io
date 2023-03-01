import { navbar } from "vuepress-theme-hope";

export const Navbar = navbar([
  "/",
  { text: "演示", icon: "discover", link: "/demo/" },
  {
    text: "技术相关",
    icon: "edit",
    prefix: "/posts/",
    children: [
      {
        text: "C",
        icon: "edit",
        prefix: "C/",
        children: [
          { text: "GDB在线调试", icon: "edit", link: "GDB在线调试" },
        ],
      },
      {
        text: "Network",
        icon: "edit",
        prefix: "Network/",
        children: [
          { text: "802.11 kvr", icon: "edit", link: "1"},
          { text: "Iptables简介", icon: "edit", link: "2"},
          { text: "IPv6入门", icon: "edit", link: "3"},
          { text: "IPv6动态寻址", icon: "edit", link: "4"},
          { text: "NAT类型简介", icon: "edit", link: "5"},
        ],
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "note",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
