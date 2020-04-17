module.exports = {
  themeConfig: {
    logo: "/logo.svg",
    displayAllHeaders: true,
    sidebar: [
      ["/java/", "Java"],
      ["/android/", "Android"],
      ["/infographie/", "Infographie"],
      ["/UML/", "UML"],
      ["/linux/", "Linux"],
      ["/API/", "API"],
    ],
  },
  title: "Cahier de cours",
  plugins: [
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    [
      "@vuepress/active-header-links",
      {
        sidebarLinkSelector: ".sidebar-link",
        headerAnchorSelector: ".header-anchor",
      },
    ],
    ["@vuepress/back-to-top"],
  ],
};
