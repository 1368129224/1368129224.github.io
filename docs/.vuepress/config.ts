import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "zooter",
      description: "zooter's blog",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
