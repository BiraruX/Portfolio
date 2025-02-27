// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Biraru Studio's",
  tagline: "Create, Refine and Share",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://biraru.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "BiraruX", // Usually your GitHub org/user name.
  projectName: "Portfolio", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: "./src/css/custom.css",
        },
        docs: false
      }),
    ],
  ],

  plugins: [
    [
      "@gracefullight/docusaurus-plugin-google-adsense",
      {
        adClient: "ca-pub-4006553476922730"
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      image: "img/social_card.png",
      navbar: {
        logo: {
          alt: "Biraru Studio's Logo",
          src: "img/big_logo.svg",
        },
        items: [
          {
            label: "Portfolio",
            position: "left",
            to: "/portfolio",
          },
          {
            label: "Info",
            position: "left",
            to: "/info",
          },
          {
            label: "CmdrX",
            position: "left",
            to: "/redirect?link=cmdrx",
          },
          {
            href: "/redirect?link=github",
            position: "right",
            className: "navbar-github-icon",
            html: '<i class="fa-brands fa-github"></i>',
          },
          {
            href: "/redirect?link=x",
            position: "right",
            className: "navbar-x-icon",
            html: '<i class="fa-brands fa-x-twitter"></i>',
          },
          {
            href: "/redirect?link=youtube",
            position: "right",
            className: "navbar-youtube-icon",
            html: '<i class="fa-brands fa-youtube"></i>',
          },
        ],
      },
      footer: {
        links: [
          {
            title: "Links",
            items: [
              {
                label: "Roblox Profile",
                href: "/redirect?link=roblox",
              },
              {
                label: "Roblox Group",
                href: "/redirect?link=roblox-group",
              },
              {
                label: "Github Profile",
                href: "/redirect?link=github",
              },
              {
                label: "X Profile",
                href: "/redirect?link=x",
              },
              {
                label: "YouTube Channel",
                href: "/redirect?link=youtube",
              },
            ],
          },
          {
            title: "Communities",
            items: [
              {
                label: "Discord",
                href: "/redirect?link=discord",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub Repository's",
                href: "/redirect?link=github-repos",
              },
              {
                label: "CmdrX Website",
                href: "/redirect?link=cmdrx",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Biraru Studio's`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
