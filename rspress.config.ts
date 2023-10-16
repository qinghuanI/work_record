import * as path from "path";
import { defineConfig } from "rspress/config";

import { iconUrl } from "./configs/constants";
import { sidebar } from "./configs/sidebar";

export default defineConfig({
  root: path.join(__dirname, "docs"),
  title: "工作记录",
  description: "Rspack-based Static Site Generator",
  icon: iconUrl,
  // logo: {
  //   light: "/rspress-light-logo.png",
  //   dark: "/rspress-dark-logo.png",
  // },
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/qinghuanI/",
      },
    ],
    sidebar,
    nav: [
      {
        text: "业务解决方案",
        link: "/solutions/",
      },
    ],
    lastUpdated: true,
    lastUpdatedText: "Last Updated",
    prevPageText: "上一页",
    nextPageText: "下一页",
  },
});
