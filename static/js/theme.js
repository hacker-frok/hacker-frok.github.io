/* ============================================
   theme.js - 全站公共主题切换逻辑
   ============================================ */

(function () {
    var toggle = document.getElementById("theme-toggle");
    var root = document.documentElement;
    var saved = localStorage.getItem("theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (saved === "dark" || (!saved && prefersDark)) {
        root.setAttribute("data-theme", "dark");
    }

    if (toggle) {
        toggle.addEventListener("click", function () {
            if (root.getAttribute("data-theme") === "dark") {
                root.removeAttribute("data-theme");
                localStorage.setItem("theme", "light");
            } else {
                root.setAttribute("data-theme", "dark");
                localStorage.setItem("theme", "dark");
            }
        });
    }
})();
