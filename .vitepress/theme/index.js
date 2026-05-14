import { h } from "vue";
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./custom.css";

const NavVisitor = {
  name: "NavVisitor",
  setup() {
    const { theme } = useData();
    return () => {
      const badgeId = theme.value?.visitor?.badgeId;
      if (!badgeId) return null;
      return h("img", {
        class: "m-nav-visitor",
        src: `https://visitor-badge.laobi.icu/badge?left_text=浏%20%20览&page_id=${badgeId}`,
        alt: "visitors",
        onError: (e) => {
          e.target.style.display = "none";
        }
      });
    };
  }
};

export default {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      "nav-bar-title-before": () =>
        h("img", {
          class: "m-nav-avatar",
          src: "/qq-farm-bot-rev.png",
          alt: "logo"
        }),
      "nav-bar-title-after": () => h(NavVisitor)
    })
};
