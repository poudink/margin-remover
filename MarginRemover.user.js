// ==UserScript==
// @name        Margin Remover
// @namespace   Violentmonkey Scripts
// @grant       GM_addStyle
// @run-at      document-start
// @author      poudink
// @description Remove stupid margins.
// ==/UserScript==

//Adventures in Linux and KDE
if (window.location.href.indexOf("https://pointieststick.com") > -1) {
  GM_addStyle (`
    .content-wrapper, .has-sidebar .site-main {
      max-width: unset !important;
    }
  ` );
}

//Bugzilla
//TODO: Matching the URL isn't good enough here, since we want this to work on every Bugzilla site. Something to figure out later.
if (window.location.href.indexOf("https://bugs.winehq.org") > -1) {
  GM_addStyle (`
    .bz_comment_table {
      width: -moz-available !important;
    }
    .bz_comment_text {
      max-width: 85vw !important;
      width: unset !important;
    }
  ` );
}

//Crunchyroll (Beta)
/* Limited to beta to avoid any potential breakage with the regular layout.
 * Could work fine with it for all I know (very unlikely), but I don't use it so I don't know.
 * TODO: Headerbar (margin isn't visible on my screen so low priority).
 * TODO: Comment section. */
if (window.location.href.indexOf("https://beta.crunchyroll.com") > -1) {
  GM_addStyle (`
    .c-content-wrapper {
      --content-width: unset !important;
    }
  ` );
}

//Dolphin Emulator
if (window.location.href.indexOf("https://dolphin-emu.org/") > -1) {
  GM_addStyle (`
    .container {
      width: unset !important;
    }
  ` );
}

//Epic Games Store
if (window.location.href.indexOf("https://store.epicgames.com") > -1) {
  GM_addStyle (`
    .css-s45c7f, .css-vomfqg {
      max-width: unset !important;
    }
  ` );
}

//freeCodeCamp
if (window.location.href.indexOf("https://www.freecodecamp.org") > -1) {
  GM_addStyle (`
    .footer-container {
      width: unset !important;
    }
    .inner, .post-full-header {
      max-width: unset !important;
    }
    .post-content {
      max-width: unset !important;
      width: 92vw !important;
    }
  ` );
}

//GIMP
//TODO: This filter literally doesn't do anything. I have no idea why. It should work, but it doesn't.
if (window.location.href.indexOf("https://www.gimp.org") > -1) {
  GM_addStyle (`
    .container, .entry-content h1, .entry-content h2, .entry-content h3, .entry-content h4, .entry-content h5, .entry-content h6, .entry-content ol, .entry-content p, .entry-content ul, .page_content h1, .page_content h2, .page_content h3, .page_content h4, .page_content h5, .page_content h6, .page_content ol, .page_content p, .page_content ul {
      max-width: unset !important;
    }
  ` );
}

//Gitea
/* TODO: Matching the URL isn't good enough here, since we want this to work on every Gitea site. Something to figure out later.
 * Right now, the filter is always active. Hopefully it won't cause any problems. */
GM_addStyle (`
  .following.bar #navbar {
    width: 100vw !important;
  }
  .ui.ui.ui.container:not(.fluid) {
    margin-left: 2em !important;
    margin-right: 2em !important;
    width: unset !important;
  }
` );

//GitLab
/* TODO: Matching the URL isn't good enough here, since we want this to work on every Gitea site. Something to figure out later.
 * Right now, the filter is always active. Hopefully it won't cause any problems. */
GM_addStyle (`
  .container-fluid.container-limited.limit-container-width .file-holder.readme-holder.limited-width-container .file-content, .container-limited.limit-container-width, .limit-container-width .commit-box, .limit-container-width .commit-ci-menu, .limit-container-width .detail-page-header, .limit-container-width .files-changed-inner, .limit-container-width .flash-container, .limit-container-width .info-well, .limit-container-width .limited-header-width, .limit-container-width .limited-width-notes, .limit-container-width .page-content-header {
    max-width: unset !important;
  }
  .content-wrapper {
    padding-bottom: unset !important;
  }
  .gl-table-layout-fixed {
    table-layout: unset !important;
  }
` );

//GitHub
if (window.location.href.indexOf("https://github.com") > -1) {
  GM_addStyle (`
    .col-lg-8 {
      width: 84.44444444% !important;
    }
    .container-lg, .container-md, .container-xl {
      max-width: unset !important;
    }
  ` );
}

//GloriousEggroll's Blog
if (window.location.href.indexOf("https://www.gloriouseggroll.tv") > -1) {
  GM_addStyle (`
    .grid-container {
      max-width: unset !important;
    }
  ` );
}

//Gogs
//TODO: Matching the URL isn't good enough here, since we want this to work on every Gogs site. Something to figure out later.
if (window.location.href.indexOf("https://notabug.org") > -1) {
  GM_addStyle (`
    .ui.secondary.menu {
      margin-right: 7px !important;
    }
    div#header-div.following.bar.light div.ui.container, div.repository.file.list div.ui.container {
      margin-left: 1em !important;
      margin-right: 1em !important;
      width: unset !important;
    }
  ` );
}

//Internet Archive
//TODO: Exclude archive pages.
if (window.location.href.indexOf("https://archive.org") > -1) {
  GM_addStyle (`
    .container {
      max-width: unset !important;
    }
  ` );
}

//itch.io
if (window.location.href.indexOf("itch.io") > -1) {
  GM_addStyle (`
    .above_game_banner_inner, .community_post_list_widget .community_post .post_body, .game_comments_widget .post_form, .goal_banner_inner {
      max-width: unset !important;
    }
    .responsive .inner_column {
      margin-left: 1rem !important;
      margin-right: 1rem !important;
      max-width: unset !important;
    }
    div.purchase_banner.above_game_banner {
      margin-left: 1rem !important;
      margin-right: 1rem !important;
    }
  ` );
}

//KDE
if (window.location.href.indexOf("kde.org") > -1) {
  GM_addStyle (`
    .container-xl, .container-lg, .container-md, .container-sm, .container {
      max-width: unset !important;
    }
    div.container.my-4.p-0 {
      padding-left: 3rem !important;
      padding-right: 1rem !important;
    }
  ` );
}

//Kuribo64
if (window.location.href.indexOf("kuribo64.net") > -1) {
  GM_addStyle (`
    #container, body {
      margin-left: 1em !important;
      margin-right: 1em !important;
      max-width: unset !important;
    }
    div.faq.outline.margin {
      height: unset !important;
      width: unset !important;
    }
    div.maincontainer {
      max-width: unset !important;
      padding-left: 1em !important;
      padding-right: 1em !important;
    }
  ` );
}

//Lightspark
if (window.location.href.indexOf("http://lightspark.github.io") > -1) {
  GM_addStyle (`
    .container {
      margin-left: 2em !important;
      margin-right: 2em !important;
      max-width: unset !important;
    }
    .content .span10, .content .span4 {
      max-width: unset !important;
      min-height: unset !important;
    }
  ` );
}

//Linuxize
if (window.location.href.indexOf("https://linuxize.com") > -1) {
  GM_addStyle (`
    .max-w-article, .max-w-3xl, .max-w-5xl, div.w-full.post-width.mx-auto.px-6 {
      max-width: unset !important;
    }
  ` );
}

//LinuxStoney
if (window.location.href.indexOf("https://linuxstoney.com") > -1) {
  GM_addStyle (`
    .mh-container {
      max-width: unset !important;
    }
    img {
      height: auto !important;
      width: 100% !important;
    }
  ` );
}

//MediaWiki
/* TODO: Matching the URL isn't good enough here, since we want this to work on every MediaWiki site. Something to figure out later.
 * TODO: Can't widen PCGamingWiki's tables. */
if (window.location.href.indexOf("wiki") > -1) {
  GM_addStyle (`
    #masthead {
      margin-top: 3em !important;
      max-width: unset !important;
    }
    #p-search > div > #searchform, #p-search .wvui-typeahead-search, .mw-article-toolbar-container, .mw-content-container, .pcgw-header-_limit {
      max-width: unset !important;
    }
    .page-Home .home-information-column {
      max-width: 31% !important;
    }
  ` );
}

//MyAnimeList
if (window.location.href.indexOf("https://myanimelist.net") > -1) {
  GM_addStyle (`
    #widget-episode-video, .list-unit .list-status-title, .status-menu-container, .widget-slide-block, .widget-slide-block .widget-slide-outer, div.wrapper div#contentWrapper div#content table#dialog {
      width: 100% !important;
    }
    .anime-slide.js-anime-slide {
      text-align: center !important;
      width: unset !important;
    }
    .anime-slide-block, .anime-slide-outer, .detail-stack-block .column-item .detail, .forum .forum-board .topics .topic-title, .forum .forum-board-list, .forum .forum-mods-list, .forum .forum-side-block .forum-side-list .forum-post .information-block, .list-unit, .manga-store .main-right, .news-list .comment-list, .news-list .news-unit, .page-advertising #ad_menu, .page-common #menu, .page-common .content-container .container-left, .profile .user-profile-about, .ranking-digest .ranking-unit .title, .status-menu-container .search-container #search-box.open, body.news .content-left, body.page-forum.page-common div#myanimelist div.wrapper div#contentWrapper div#content div, td.borderClass div {
      width: unset !important;
    }
    .anime-slide-block .anime-slide .btn-anime {
      float: unset !important;
    }
    .btn-favmore {
      background-position: 50% 12px !important;
      width: unset !important;
    }
    .detail-stack-block .column-item {
      width: 32% !important;
    }
    .forum .content-container .container-left {
      padding-right: 10px !important;
      width: unset !important;
    }
    .forum .forum-board .board {
      width: 55% !important;
    }
    .forum .forum-board .topics, div:nth-child(1).di-tc.va-t, div:nth-child(3).di-tc.va-t {
      width: 45% !important;
    }
    .forum .forum-board .topics .topic-title .topic-title-link {
      white-space: unset !important;
    }
    .forum .forum-mods .link-forum-mods:first-of-type, .forum .forum-mods .link-forum-mods:nth-of-type(10n) {
      padding-left: 12px !important;
    }
    .forum .forum-mods-container {
      display: block ruby !important;
      width: unset !important;
    }
    .header, .page-common #myanimelist {
      margin-left: 1em !important;
      margin-right: 1em !important;
      width: unset !important;
    }
    .left-column.fl-l.divider, .left-right.fl-r {
      width: 49% !important;
    }
    .list-container {
      margin-left: 5em !important;
      margin-right: 1em !important;
      width: unset !important;
    }
    .page-common .h1.edit-info {
      display: block !important;
    }
    .page-common .h1.edit-info div.header-right {
      float: right !important;
      width: unset !important;
    }
    .page-common .h1.edit-info span.h1-title, .page-common .h1.edit-info div.h1-title {
      display: inline-block !important;
      width: unset !important;
    }
    .ranking-digest .ranking-unit {
      width: 97% ! important;
    }
    .recommendations-user-recs-text, body.index .widget-container .widget.reviews.left .textReadability {
      max-width: unset !important
    }
    .widget.mxj .widget-content a {
      margin-right: 0px !important;
      width: 37% !important;
    }
    div.forum-board {
      width: -moz-available !important;
    }
    div:nth-child(2).di-tc.va-t {
      width: 2% !important;
    }
    img.lazyloaded:nth-child(3) {
      width: -moz-available !important;
      height: auto !important;
    }
    textarea.textarea {
      width: 99% !important;
    }
  ` );
}

//Nyaa
if (window.location.href.indexOf("nyaa.si") > -1) {
  GM_addStyle (`
    .container {
      width: unset !important;
    }
  ` );
}

//Patreon
if (window.location.href.indexOf("https://www.patreon.com") > -1) {
  GM_addStyle (`
    .cXIukT {
      max-width: unset !important;
    }
  ` );
}

//PCSX2
if (window.location.href.indexOf("https://pcsx2.net") > -1) {
  GM_addStyle (`
    .container, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
      max-width: unset !important;
    }
  ` );
}

//pkgs.org
if (window.location.href.indexOf("https://pkgs.org/") > -1) {
  GM_addStyle (`
    .container, .container-lg, .container-md, .container-sm, .container-xl {
      max-width: unset !important;
    }
  ` );
}

//rentry
if (window.location.href.indexOf("https://rentry.co") > -1) {
  GM_addStyle (`
    div.container.container-smooth {
      width: unset !important;
    }
  ` );
}

//RPG Maker
/* TODO: Detect RPG Maker and only activate this when necessary.
 * Right now this is simply set to activate for local files, which's useful when games don't bother shipping with Linux binaries for some reason.
 * Like come on it's literally no effort to get modern RPG Maker games on Linux (and old ones too with EasyRPG and MKXP, but that's all off-topic).
 * Oh well, this won't activate for any instance of web-based RPG Maker being actually embedded on a web page. I've never seen that, though.*/
if (window.location.href.indexOf("file://") > -1) {
  GM_addStyle (`
    #GameCanvas {
      height: 100vh !important;
      width: auto !important;
    }
  ` );
}

//SourceForge
if (window.location.href.indexOf("https://sourceforge.net") > -1) {
  GM_addStyle (`
    #comment .comment-row {
      float: unset !important;
    }
    .grid-16 {
      float: unset !important;
      margin: 0 10px 0 110px !important;
    }
    .pad, div.grid-16.post-content.bubble {
      width: -moz-available !important;
    }
    .sandiego_chrome #page-body {
      width: unset !important;
    }
    .sandiego_chrome.legacy_chrome .sandiego .header .row, .sandiego_chrome.legacy_chrome .sandiego.l-header-nav .row, .sandiego_chrome.legacy_chrome footer.sandiego .row {
      max-width: unset !important;
    }
    div.grid-2.tcenter.gravatar {
      position: absolute !important;
    }
  ` );
}

//Steam
/* TODO: Steam has multiple domains, inculding steamcommunity.com and store.steampowered.com.
 * I know it sounds ridiculous, but I literally have no idea how to let this thing accept multiple domains without pointlessly duplicating the code.
 * Looked up the OR operator, which is apparently ||. Tried using it multiple ways, didn't work.
 * Thankfully, this doesn't matter yet since the filter only works right on steamcommunity.com.
 * When this does start mattering, just matching "steam" will work, but not ideal since it'll also get actived on sites like "steamunlocked.net".
 * Hopefully I'll have figured out something better by then.
 * TODO: Make this work better on store.steampowered.com. This has a partial implementation, but it's going to need a lot more work.
 * May redo it from scratch, I have my doubts about the current approach.
 * Due to the issues, this is currently disabled by default outside of steamcommunity.com. */
if (window.location.href.indexOf("https://steamcommunity.com") > -1) {
  GM_addStyle (`
    #footer .footer_content, .maincontent, div#global_header .content, div.page_content {
      width: unset !important;
    }
    .apphub_Content, .apphub_HomeHeader {
      max-width: unset !important;
    }
    .apphub_HomeHeaderContent {
      margin-left: 16px !important;
      margin-right: 16px !important;
      max-width: unset !important;
    }
    .forum_op {
      background-size: cover !important;
      max-width: unset !important;
    }
    .leftcol {
      margin-right: 16px !important;
      width: unset !important;
    }
    .pagecontent {
      padding-bottom: unset !important;
    }
    .queue_ctn, body.v6 .page_content {
      margin-left: 16px !important;
      margin-right: 16px !important;
      width: unset !important;
    }
    .review_box .rightcol {
      width: -moz-available !important;
    }
    body.flat_page #footer_spacer, body.headerless_page #footer_spacer {
      height: unset !important;
      padding-top: unset !important;
    }
    div#nextInDiscoveryQueue.next_in_queue_area {
      margin-right: 32px !important;
    }
    div.leftcol {
      float: unset !important;
    }
    div.maincontent {
      display: flex !important;
    }
  ` );
}

//The Register
if (window.location.href.indexOf("theregister.com") > -1) {
  GM_addStyle (`
    #aua li .body {
      max-width: 520px !important;
    }
    #page {
      max-width: unset !important;
      padding-left: 1em !important;
      padding-right: 1em !important;
      width: unset !important;
    }
    body:not(.timeless)[data-pagetype="Story"] #main-col #article-wrapper {
      max-width: unset !important;
      padding-left: 7em !important;
    }
  ` );
}

//Violentmonkey
if (window.location.href.indexOf("https://violentmonkey.github.io") > -1) {
  GM_addStyle (`
    .sidebar {
      width: unset !important;
    }
    main {
      max-width: unset !important;
    }
  ` );
}

//W3Techs
if (window.location.href.indexOf("https://w3techs.com") > -1) {
  GM_addStyle (`
    td.tech_main {
      width: unset !important;
    }
  ` );
}
