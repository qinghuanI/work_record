import { baseThemeConfig } from "./configs/baseThemeConfig";
import * as path from "path";
import { defineConfig } from "rspress/config";

import { iconUrl } from "./configs/constants";
import { sidebar } from "./configs/sidebar";
import { nav } from "./configs/nav";

export default defineConfig({
  root: path.join(__dirname, "docs"),
  title: "工作记录",
  description: "一个简单的工作记录网站",
  icon: iconUrl,
  // logo: {
  //   light: "/rspress-light-logo.png",
  //   dark: "/rspress-dark-logo.png",
  // },
  themeConfig: {
    ...baseThemeConfig,
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/qinghuanI/",
      },
    ],
    sidebar,
    nav,
  },
});
