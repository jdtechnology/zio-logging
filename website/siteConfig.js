/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  // {
  //   caption: 'User1',
  //   // You will need to prepend the image path with your baseUrl
  //   // if it is not '/', like: '/test-site/img/image.jpg'.
  //   image: '/img/undraw_open_source.svg',
  //   infoLink: 'https://www.facebook.com',
  //   pinned: true,
  // },
];

const siteConfig = {
  title: 'ZIO logging',
  tagline: 'An environmental effect for adding logging into any ZIO application.',
  url: 'https://zio.github.io',
  baseUrl: '/zio-logging/', // Base URL for your project */

  // Used for publishing and more
  projectName: 'zio-logging',
  organizationName: 'zio',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'overview/overview_index', label: 'Overview'},
    {href: 'api', label: 'API'},
  ],

  // by default Docusaurus combines CSS files in a way that doesn't play nicely with Scaladoc
  separateCss: ["api"],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/navbar_brand2x.png',
  footerIcon: 'img/sidebar_brand2x.png',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#000000',
    secondaryColor: '#121020',
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} ZIO Maintainers`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  scrollToTop: true,
  scrollToTopOptions: {
    cornerOffset: 100,
  },

  customDocsPath: 'zio-logging-docs/target/mdoc',
};

module.exports = siteConfig;
