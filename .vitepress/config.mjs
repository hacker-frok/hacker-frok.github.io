import { defineConfig } from "vitepress";


export default defineConfig({
    srcDir: "src",
    lang: "zh-CN",
    title: "QQ 经典农场机器人",
    description: "基于 OpenCV 的视觉自动化项目文档",
    head: [
        ["link", { rel: "icon", type: "image/png", href: "/qq-farm-bot-rev.png" }]
    ],
    sitemap: {
        hostname: "https://liteloaderqqnt.github.io"
    },
    themeConfig: {
        outlineTitle: "当前页导航",
        visitor: {
            badgeId: "hacker-frok.github.io"
        },
        nav: [
            { text: "首页", link: "/" },
            { text: "帮助文档", link: "/guide/install" },
            { text: "常见问题", link: "/guide/faq" }
        ],
        sidebar: [
            { text: "安装与运行", link: "/guide/install" },
            { text: "常见问题", link: "/guide/faq" }
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/hacker-frok/qq-farm-bot-ai" }
        ]
    }
});
