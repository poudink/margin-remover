// ==UserScript==
// @name        Margin Remover MK.2
// @namespace   Violentmonkey Scripts
// @grant       GM_addStyle
// @run-at      document-start
// @author      poudink
// @description Remove stupid margins.
// ==/UserScript==

// .org
if (window.location.href.indexOf(".org/") > -1) {
  GM_addStyle (`
    .navbar, #kFooterIncome, #kLegal, #kLinks, #kSocial {
      max-width: calc(100% - 2em) !important;
    }
  ` );
}

// /r/Roms Megathread
if (window.location.href.indexOf("https://r-roms.github.io/") > -1) {
  GM_addStyle (`
    div.container:nth-child(1), div.container:nth-child(2) {
      max-width: unset !important;
    }
  ` );
}

// Adam Szopa
if (window.location.href.indexOf("https://szopa.org.pl") > -1) {
  GM_addStyle (`
    .page-content > div:nth-child(1), .site-header > div:nth-child(1) {
      max-width: calc(100% - 60px) !important;
    }
  ` );
}

// Adventures in Linux and KDE
if (window.location.href.indexOf("https://pointieststick.com/") > -1) {
  GM_addStyle (`
    #content-wrapper, #main {
      max-width: unset !important;
    }
  ` );
}

// Anime News Network
if (window.location.href.indexOf("https://www.animenewsnetwork.com/") > -1) {
  GM_addStyle (`
    #canvas {
      max-width: unset !important;
      width: unset !important;
    }
    #main {
      max-width: unset !important;
      width: 100% !important;
    }
  ` );
}

// Anime News Network Forums
if (window.location.href.indexOf("https://www.animenewsnetwork.com/bbs/phpBB2/viewtopic.php?t=") > -1) {
  GM_addStyle (`
    #maincontent {
      width: unset !important;
    }
  ` );
}

// Anime News Network News
if (window.location.href.indexOf("https://www.animenewsnetwork.com/news/") > -1) {
  GM_addStyle (`
    .text-zone {
      max-width: unset !important;
    }
  ` );
}

// Anime News Network Search
if (window.location.href.indexOf("https://www.animenewsnetwork.com/search?q=") > -1) {
  GM_addStyle (`
    #cse {
      max-width: unset !important;
    }
  ` );
}

// ArchWiki
if (window.location.href.indexOf("https://wiki.archlinux.org/") > -1) {
  GM_addStyle (`
    .mw-article-toolbar-container, .wvui-typeahead-search, div.mw-content-container:nth-child(1), div.mw-content-container:nth-child(2) {
      max-width: unset !important;
    }
  ` );
}

// Baka-Updates Manga
if (window.location.href.indexOf("https://www.mangaupdates.com/") > -1) {
  GM_addStyle (`
    .top-banner > a:nth-child(1) > img:nth-child(1) {
      height: auto !important;
      width: 100% !important;
    }
    #mu-main-content {
      max-width: unset !important;
    }
  ` );
}

// benkuhn.net
if (window.location.href.indexOf("https://www.benkuhn.net/") > -1) {
  GM_addStyle (`
    div.center:nth-child(2) {
      max-width: unset !important;
    }
  ` );
}

// betanews
if (window.location.href.indexOf("https://betanews.com/") > -1) {
  GM_addStyle (`
    .biggerCol, .smallerCol {
      width: 50% !important;
    }
    .loadMore {
      margin: 15px 0px 0px calc(50% - 136px) !important;
    }
    .wideCol {
      width: calc(100% - 312px) !important;
    }
    #page {
      width: unset !important;
    }
  ` );
}

// blargSNES
if (window.location.href.indexOf("https://blargsnes.kuribo64.net/") > -1) {
  GM_addStyle (`
    #container {
      max-width: unset !important;
    }
  ` );
}

// Bugzilla
if (window.location.href.indexOf("https://bug") > -1) {
  GM_addStyle (`
    #quicksearch_main {
      width: calc(100% - 133px) !important;
    }
  ` );
}

// Bugzilla Issues
if (window.location.href.indexOf("/show_bug.cgi?id=") > -1) {
  GM_addStyle (`
    .bz_comment_table {
      width: 100% !important;
    }
    #c0 > pre:nth-child(2), #c1 > pre:nth-child(2), #c3 > pre:nth-child(2), #c5 > pre:nth-child(2) {
      width: unset !important;
    }
  ` );
}

// Bugzilla Issues
if (window.location.href.indexOf(".org/show_bug.cgi?id=") > -1) {
  GM_addStyle (`
    #c2 > pre:nth-child(2), #c6 > pre:nth-child(2), #c12 > pre:nth-child(2), #c13 > pre:nth-child(2), #c16 > pre:nth-child(2), #c17 > pre:nth-child(2) {
      width: unset !important;
    }
  ` );
}

// Bugzilla KDE
if (window.location.href.indexOf("https://bugs.kde.org/") > -1) {
  GM_addStyle (`
    #bugzilla-body {
      max-width: calc(100% - 2em) !important;
    }
  ` );
}

// Bugzilla KDE Bug List
if (window.location.href.indexOf("https://bugs.kde.org/buglist.cgi?component=") > -1) {
  GM_addStyle (`
    #save_newqueryname {
      width: calc(100% - 165px) !important;
    }
  ` );
}

// Bugzilla KDE Components
if (window.location.href.indexOf("https://bugs.kde.org/describecomponents.cgi?product=") > -1) {
  GM_addStyle (`
    #component_table {
      max-width: unset !important;
    }
  ` );
}

// Bugzilla KDE Query
if (window.location.href.indexOf("https://bugs.kde.org/query.cgi") > -1) {
  GM_addStyle (`
    .bz_simple_search_form > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(2), #content {
      width: 100% !important;
    }
  ` );
}

// Bugzilla KDE Show Bugs
if (window.location.href.indexOf("https://bugs.kde.org/show_bug.cgi?id=") > -1) {
  GM_addStyle (`
    #c0, #c1, #c2, #c3, #c4, #c5, #c6, #c7, #c8, #c9, #c10, #c11, #c12, #c13, #c14, #c15, #c16, #c17, #c18, #c19, #c20, #c21, #c22, #c23, #c24, #c25, #c26, #c27, #c28, #c29, #c30, #c31, #c32, #c33, #c34, #c35, #c36, #c37, #c38, #c39, #c40, #c41, #c42, #c43, #c44, #c45, #c46, #c47, #c48, #c49, #c50, #c51, #c52, #c53, #c54, #c55, #c56, #c57, #c58, #c59, #c60, #c61, #c62, #c63, #c64, #c65, #c66, #c67, #c68, #c69, #c70, #c71, #c72, #c73, #c74, #c75 {
      max-width: unset !important;
    }
  ` );
}

// Bugzilla KDE Show Bugs
if (window.location.href.indexOf("https://bugs.kde.org/show_bug.cgi?id=179678") > -1) {
  GM_addStyle (`
    #c76, #c77, #c78, #c79, #c80, #c81, #c82, #c83, #c84, #c85, #c86, #c87, #c88, #c89, #c90, #c91, #c92, #c93, #c94, #c95, #c96, #c97, #c98, #c99, #c100, #c101, #c102, #c103, #c104, #c105, #c106, #c107, #c108, #c109, #c110, #c111, #c112, #c113, #c114, #c115 {
      max-width: unset !important;
    }
  ` );
}

// Bugzilla Mozilla
if (window.location.href.indexOf("https://bugzilla.mozilla.org/") > -1) {
  GM_addStyle (`
    .inner {
      width: unset !important;
    }
  ` );
}

// Bugzilla Mozilla Issues
if (window.location.href.indexOf("https://bugzilla.mozilla.org/show_bug.cgi?id=1") > -1) {
  GM_addStyle (`
    #bottom-actions {
      max-width: 100% !important;
    }
    #main-inner {
      max-width: calc(100% - 2em) !important;
    }
  ` );
}

// Bugzilla Mozilla Home
if (window.location.href.indexOf("https://bugzilla.mozilla.org/home") > -1) {
  GM_addStyle (`
    #page-index > table:nth-child(1) {
      width: 100% !important;
    }
    #tiles {
      display: block ruby !important;
      text-align: center !important;
    }
    #wrapper {
      display: unset !important;
    }
  ` );
}

// Bugzilla Wine Issues
if (window.location.href.indexOf("https://bugs.winehq.org/show_bug.cgi?id=") > -1) {
  GM_addStyle (`
    #c4 > pre:nth-child(2), #c7 > pre:nth-child(2), #c8 > pre:nth-child(2), #c9 > pre:nth-child(2), #c10 > pre:nth-child(2), #c11 > pre:nth-child(2), #c14 > pre:nth-child(2), #c15 > pre:nth-child(2), #c18 > pre:nth-child(2), #c19 > pre:nth-child(2), #c20 > pre:nth-child(2), #c21 > pre:nth-child(2), #c22 > pre:nth-child(2), #c23 > pre:nth-child(2), #c24 > pre:nth-child(2), #c25 > pre:nth-child(2), #c26 > pre:nth-child(2), #c27 > pre:nth-child(2), #c28 > pre:nth-child(2), #c29 > pre:nth-child(2), #c30 > pre:nth-child(2), #c31 > pre:nth-child(2), #c32 > pre:nth-child(2), #c33 > pre:nth-child(2), #c34 > pre:nth-child(2), #c35 > pre:nth-child(2), #c36 > pre:nth-child(2), #c37 > pre:nth-child(2), #c38 > pre:nth-child(2), #c39 > pre:nth-child(2), #c40 > pre:nth-child(2), #c41 > pre:nth-child(2), #c42 > pre:nth-child(2), #c43 > pre:nth-child(2), #c44 > pre:nth-child(2), #c46 > pre:nth-child(2), #c47 > pre:nth-child(2), #c48 > pre:nth-child(2), #c50 > pre:nth-child(2), #c51 > pre:nth-child(2), #c53 > pre:nth-child(2), #c54 > pre:nth-child(2), #c55 > pre:nth-child(2), #c56 > pre:nth-child(2), #c57 > pre:nth-child(2), #c58 > pre:nth-child(2), #c59 > pre:nth-child(2), #c62 > pre:nth-child(2), #c63 > pre:nth-child(2), #c68 > pre:nth-child(2), #c70 > pre:nth-child(2), #c76 > pre:nth-child(2), #c77 > pre:nth-child(2), #c78 > pre:nth-child(2), #c81 > pre:nth-child(2), #c83 > pre:nth-child(2), #c84 > pre:nth-child(2), #c86 > pre:nth-child(2), #c88 > pre:nth-child(2), #c89 > pre:nth-child(2), #c91 > pre:nth-child(2), #c93 > pre:nth-child(2), #c96 > pre:nth-child(2), #c97 > pre:nth-child(2), #c98 > pre:nth-child(2), #c100 > pre:nth-child(2), #c101 > pre:nth-child(2), #c102 > pre:nth-child(2), #c104 > pre:nth-child(2) {
      width: unset !important;
    }
  ` );
}

// Bugzilla Wine Issues
if (window.location.href.indexOf("https://bugs.winehq.org/show_bug.cgi?id=10767") > -1) {
  GM_addStyle (`
    #c33 > pre:nth-child(2) > span:nth-child(3), #c34 > pre:nth-child(2) > span:nth-child(4) {
      white-space: unset !important;
    }
  ` );
}

// Bugzilla Wine Issues
if (window.location.href.indexOf("https://bugs.winehq.org/show_bug.cgi?id=3599") > -1) {
  GM_addStyle (`
    span.quote:nth-child(4) {
      overflow-wrap: anywhere !important;
      white-space: unset !important;
    }
  ` );
}

// Bugzilla Wine Issues
if (window.location.href.indexOf("https://bugs.winehq.org/show_bug.cgi?id=4") > -1) {
  GM_addStyle (`
    #c64 > pre:nth-child(2), #c66 > pre:nth-child(2), #c69 > pre:nth-child(2), #c72 > pre:nth-child(2), #c74 > pre:nth-child(2), #c79 > pre:nth-child(2), #c80 > pre:nth-child(2), #c90 > pre:nth-child(2), #c92 > pre:nth-child(2), #c95 > pre:nth-child(2) {
      width: unset !important;
    }
  ` );
}

// Bugzilla Wine Issues
if (window.location.href.indexOf("https://bugs.winehq.org/show_bug.cgi?id=45277") > -1) {
  GM_addStyle (`
    #c49 > pre:nth-child(2), #c61 > pre:nth-child(2), #c67 > pre:nth-child(2), #c71 > pre:nth-child(2), #c75 > pre:nth-child(2), #c82 > pre:nth-child(2), #c85 > pre:nth-child(2), #c94 > pre:nth-child(2) {
      width: unset !important;
    }
    span.quote:nth-child(1) {
      white-space: unset !important;
    }
  ` );
}

// Bugzilla Wine Issues
if (window.location.href.indexOf("https://bugs.winehq.org/show_bug.cgi?id=47198") > -1) {
  GM_addStyle (`
    #c52 > pre:nth-child(2), #c73 > pre:nth-child(2), #c99 > pre:nth-child(2), #c103 > pre:nth-child(2), #c105 > pre:nth-child(2), #c106 > pre:nth-child(2), #c107 > pre:nth-child(2), #c108 > pre:nth-child(2), #c109 > pre:nth-child(2), #c110 > pre:nth-child(2), #c111 > pre:nth-child(2), #c112 > pre:nth-child(2), #c113 > pre:nth-child(2), #c114 > pre:nth-child(2), #c115 > pre:nth-child(2), #c116 > pre:nth-child(2) {
      width: unset !important;
    }
  ` );
}

// Bugzilla Wine Issues
if (window.location.href.indexOf("https://bugs.winehq.org/show_bug.cgi?id=5163") > -1) {
  GM_addStyle (`
    #c45 > pre:nth-child(2), #c60 > pre:nth-child(2), #c65 > pre:nth-child(2), #c87 > pre:nth-child(2) {
      width: unset !important;
    }
  ` );
}

// Bugzilla Wine Issues
if (window.location.href.indexOf("https://bugs.winehq.org/show_bug.cgi?id=52884") > -1) {
  GM_addStyle (`
    #c0 > pre:nth-child(2) > span:nth-child(3), #c2 > pre:nth-child(2) > span:nth-child(1) {
      white-space: unset !important;
    }
  ` );
}

// Crunchyroll Beta
if (window.location.href.indexOf("https://beta.crunchyroll.com/") > -1) {
  GM_addStyle (`
    .body-wrapper {
      grid-template-columns: unset !important;
    }
    .c-content-wrapper {
      --content-width: unset !important;
    }
    .comments-wrapper-narrow, .search-input-wrapper {
      max-width: unset !important;
    }
    .header-left {
      flex: 0 1 100% !important;
    }
  ` );
}

// Cemu Wiki
if (window.location.href.indexOf("https://wiki.cemu.info/wiki/") > -1) {
  GM_addStyle (`
    div.container:nth-child(3) {
      width: unset !important;
    }
  ` );
}

// Getting KDE Software - KDE Community
if (window.location.href.indexOf("https://kde.org/download/") > -1) {
  GM_addStyle (`
    main.container {
      max-width: calc(100% - 0.5rem) !important;
    }
  ` );
}

// GitHub
if (window.location.href.indexOf("https://github.com/") > -1) {
  GM_addStyle (`
    .col-md-12 {
      width: 100% !important;
    }
    .footer, .markdown-body, .mx-auto, #query, #wiki-wrapper, div.clearfix {
      max-width: unset !important;
    }
    .header-search {
      max-width: 100% !important;
    }
  ` );
}

// GitHub Gists
if (window.location.href.indexOf("https://gist.github.com/") > -1) {
  GM_addStyle (`
    div.container-lg {
      max-width: unset !important;
    }
  ` );
}

// GitHub Gists
if (window.location.href.indexOf("https://gist.github.com/Zeinok/ceaf6ff204792dde0ae31e0199d89398") > -1) {
  GM_addStyle (`
    article.markdown-body {
      max-width: unset !important;
    }
  ` );
}

// HTTPS
if (window.location.href.indexOf("https://") > -1) {
  GM_addStyle (`
    .container-limited, .content-block, .detail-page-description, .detail-page-header, .file-content, .info-well, .merge-request-tabs-container, .mr-state-widget, #searchform {
      max-width: unset !important;
    }
    .table {
      table-layout: unset !important;
    }
    #kPatrons {
      max-width: calc(100% - 2em) !important;
    }
  ` );
}

// KDE Utilities
if (window.location.href.indexOf("https://utils.kde.org/") > -1) {
  GM_addStyle (`
    #body, #body_wrapper, #header_bottom, #header_top {
      max-width: calc(100% - 2em) !important;
      width: unset !important;
    }
    #left {
      width: 15em !important;
    }
    #main > table:nth-child(9), #main > table:nth-child(11), #main > table:nth-child(13), #main > table:nth-child(15) {
      width: 100% !important;
    }
    #main > table:nth-child(9) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1), #main > table:nth-child(9) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2), #main > table:nth-child(9) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(3), #main > table:nth-child(9) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(4), #main > table:nth-child(11) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1), #main > table:nth-child(11) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2), #main > table:nth-child(11) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(3), #main > table:nth-child(13) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1), #main > table:nth-child(15) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1), #main > table:nth-child(15) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2), #main > table:nth-child(15) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(3) {
      float: left !important;
      width: calc(25% - 2px) !important;
    }
    #right {
      width: calc(98% - 15em) !important;
    }
  ` );
}

// Kuriblog
if (window.location.href.indexOf("kuribo64.net/") > -1) {
  GM_addStyle (`
    .maincontainer {
      max-width: calc(100% - 2em) !important;
    }
  ` );
}

// Kuribo64
if (window.location.href.indexOf("https://kuribo64.net/") > -1) {
  GM_addStyle (`
    body {
      max-width: unset !important;
    }
  ` );
}

// Kuribo64 Archive FAQ
if (window.location.href.indexOf("https://kuribo64.net/archive/board/faq.php") > -1) {
  GM_addStyle (`
    .faq {
      width: unset !important;
    }
  ` );
}

// Kuribo64 Archive Ranks
if (window.location.href.indexOf("https://kuribo64.net/archive/board/ranks.php") > -1) {
  GM_addStyle (`
    .width75, table.outline:nth-child(1) {
      width: 100% !important;
    }
  ` );
}

// MyAnimeList.net
if (window.location.href.indexOf("https://myanimelist.net/") > -1) {
  GM_addStyle (`
    .featured > div:nth-child(2) > div:nth-child(1) > div:nth-child(1), .featured > div:nth-child(2) > div:nth-child(1) > div:nth-child(2), .news > div:nth-child(2) > div:nth-child(1) > div:nth-child(1), .news > div:nth-child(2) > div:nth-child(1) > div:nth-child(2), div.news-unit:nth-child(3), div.news-unit:nth-child(4), #menu, #widget-promotional-video > div:nth-child(3), #widget-seasonal-video > div:nth-child(3) {
      width: unset !important;
    }
    .reviews > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3), .reviews > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3), .reviews > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(3), .reviews > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > div:nth-child(3) {
      max-width: 100% !important;
    }
    #myanimelist {
      width: calc(100% - 2em) !important;
    }
  ` );
}

// Okteta - KDE Applications
if (window.location.href.indexOf("https://apps.kde.org/okteta/") > -1) {
  GM_addStyle (`
    div.container:nth-child(6) {
      max-width: calc(100% - 2em) !important;
    }
  ` );
}

// PCGamingWiki
if (window.location.href.indexOf("https://www.pcgamingwiki.com/wiki/") > -1) {
  GM_addStyle (`
    .pcgw-header_limit {
      max-width: unset !important;
    }
    .rightside-wrap, #header-search, #searchInput {
      width: 100% !important;
    }
    #masthead {
      max-width: calc(100% - 2em) !important;
    }
  ` );
}

// PCGamingWiki Home
if (window.location.href.indexOf("https://www.pcgamingwiki.com/wiki/Home") > -1) {
  GM_addStyle (`
    #subheader-what-is-button {
      width: calc(25% - 13px) !important;
    }
    div.home-information-column:nth-child(1), div.home-information-column:nth-child(2), div.home-information-column:nth-child(3) {
      max-width: calc(33% - 30px) !important;
      width: calc(33% - 30px) !important;
    }
    input#searchInput {
      width: calc(100% - 2em) !important;
    }
  ` );
}

// Phoronix Forums
if (window.location.href.indexOf("https://www.phoronix.com/forums/forum/software/desktop-linux/1322681-wine-7-8-released-with-more-pe-conversion-wow64-sound-driver-support") > -1) {
  GM_addStyle (`
    #channel-subtabbar, #channel-tabbar, #content, #footer, #footer-copyright, #header, #notices, .breadcrumbs-wrapper, nav.b-top-menu__background > div:nth-child(1) {
      max-width: unset !important;
    }
    #outer-wrapper {
      margin: unset !important;
    }
    nav.b-top-menu__background {
      padding: unset !important;
    }
  ` );
}

// Phoronix Main
if (window.location.href.indexOf("https://www.phoronix.com/scan.php?page=") > -1) {
  GM_addStyle (`
    #content, #footer-content, #menuwrap > div:nth-child(1), .defpadding {
      width: calc(100% - 2em) !important;
    }
  ` );
}

// Plasma Bigscreen
if (window.location.href.indexOf("https://plasma-bigscreen.org/") > -1) {
  GM_addStyle (`
    .cover-color-overlay > div:nth-child(1) {
      max-width: fit-content !important;
    }
    .features-section > div:nth-child(1), .my-5, .my-5 > p:nth-child(3), .my-5 > p:nth-child(5) {
      max-width: unset !important;
    }
  ` );
}

// pkgs.org
if (window.location.href.indexOf("https://pkgs.org/") > -1) {
  GM_addStyle (`
    .breadcrumb, div.container:nth-child(3) {
      max-width: unset !important;
    }
  ` );
}

// Reddit
if (window.location.href.indexOf("https://www.reddit.com/") > -1) {
  GM_addStyle (`
    .markdownEditor-wrapper {
      width: unset !important;
    }
    .md {
      max-width: unset !important;
    }
    div.md:nth-child(2) > textarea:nth-child(1) {
      width: 100% !important;
    }
  ` );
}

// Reddit Inbox
if (window.location.href.indexOf("https://www.reddit.com/message/inbox/") > -1) {
  GM_addStyle (`
    div.usertext-edit {
      max-width: unset !important;
      width: unset !important;
    }
  ` );
}

// Reddit Subreddit
if (window.location.href.indexOf("https://www.reddit.com/r/") > -1) {
  GM_addStyle (`
    .bottom-area {
      width: unset !important;
    }
    .usertext-edit {
      max-width: unset !important;
    }
    .usertext-edit > div:nth-child(1) > textarea:nth-child(1) {
      width: 100% !important;
    }
  ` );
}

// Reddit Subreddit KDE
if (window.location.href.indexOf("https://www.reddit.com/r/kde/comments/vb845x/craig_mullins_one_of_industry_veteran_and_master/") > -1) {
  GM_addStyle (`
    .crosspost-preview, div.entry:nth-child(5) {
      max-width: unset !important;
    }
  ` );
}

// XanMod Kernel
if (window.location.href.indexOf("https://www.xanmod.org") > -1) {
  GM_addStyle (`
    #pagewrap, div.wrap_column:nth-child(1) {
      width: unset !important;
    }
  ` );
}

// Windows - KDE Community
if (window.location.href.indexOf("https://community.kde.org/Windows") > -1) {
  GM_addStyle (`
    #content {
      width: unset !important;
    }
  ` );
}
