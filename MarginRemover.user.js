// ==UserScript==
// @name        Margin Remover
// @namespace   Violentmonkey Scripts
// @grant       GM_addStyle
// @run-at      document-start
// @author      poudink
// @description Remove stupid margins.
// ==/UserScript==

//Adam Szopa
if (window.location.href.indexOf("https://szopa.org.pl") > -1) {
  GM_addStyle (`
    .wrapper {
      max-width: unset !important;
    }
  ` );
}

//Adventures in Linux and KDE
if (window.location.href.indexOf("https://pointieststick.com") > -1) {
  GM_addStyle (`
    .content-wrapper, .has-sidebar .site-main {
      max-width: unset !important;
    }
  ` );
}

//Baka-Updates Manga
if (window.location.href.indexOf("https://www.mangaupdates.com/") > -1) {
  GM_addStyle (`
    .body_content {
      max-width: unset !important;
    }
    .img-fluid, .mu-post-body img {
      height: auto !important;
      width: 100% !important;
    }
  ` );
}

//benkuhn.net
if (window.location.href.indexOf("https://www.benkuhn.net") > -1) {
  GM_addStyle (`
    .center {
      max-width: unset !important;
    }
  ` );
}

//betanews
if (window.location.href.indexOf("https://betanews.com") > -1) {
  GM_addStyle (`
    #bd .wideCol {
      width: calc(100% - 312px) !important;
    }
    #page {
      width: unset !important;
    }
  ` );
}

//Bugzilla
/* TODO: Matching the URL isn't good enough here, since we want this to work on every Bugzilla site. Something to figure out later.
 * Right now, we're matching for a "bugs" bottom-level domain, which appears to be standard for bug trackers. */
if (window.location.href.indexOf("https://bugs.") > -1) {
  GM_addStyle (`
    #bugzilla-body {
      margin: 8px 8px 8px auto !important;
      max-width: unset !important;
      width: calc(100% - 16px) !important;
    }
    #component_table, .bz_comment {
      max-width: unset !important;
    }
    .bz_comment_table {
      width: -moz-available !important;
    }
    .bz_comment_text {
      width: unset !important;
    }
    .bz_comment_text, .uneditable_textarea, tbody.file pre {
      overflow-wrap: anywhere !important;
    }
    .bz_comment_text span.quote {
      white-space: unset !important;
    }
  ` );
}

//Calligra
if (window.location.href.indexOf("https://calligra.org") > -1) {
  GM_addStyle (`
    .container, .container-lg, .container-md, .container-sm, .container-xl, .navbar, main.markdown-output blockquote, main.markdown-output div, main.markdown-output h1, main.markdown-output h2, main.markdown-output h3, main.markdown-output h4, main.markdown-output h5, main.markdown-output h6, main.markdown-output ol, main.markdown-output p, main.markdown-output ul {
      max-width: unset !important;
    }
    main.markdown-output figure, main.markdown-output img {
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
if (window.location.href.indexOf("https://dolphin-emu.org") > -1) {
  GM_addStyle (`
    .container {
      width: unset !important;
    }
  ` );
}

//DokuWiki
/* TODO: Matching the URL isn't good enough here, since we want this to work on every DokuWiki site. Something to figure out later.
 * Right now, the filter is always active. Hopefully it won't cause any problems. */
if (window.location.href.indexOf("https://www.xanmod.org") > -1) {
  GM_addStyle (`
    div#pagewrap, div.wrap_column.wrap__dark.plugin_wrap {
      width: unset !important;
    }
  ` );
}

//Epic Games Store
if (window.location.href.indexOf("https://store.epicgames.com") > -1) {
  GM_addStyle (`
    .css-lai20k, .css-s45c7f, .css-vomfqg {
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

//Gitea
//Homepage
if (window.location.href.indexOf("https://gitea.io") > -1) {
  GM_addStyle (`
    .container {
      max-width: calc(100% - 2em);
    }
  ` );
}
//Software
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

//Google Accounts
if (window.location.href.indexOf("https://accounts.google.com") > -1) {
  GM_addStyle (`
    .RAYh1e.qmmlRd {
      width: calc(100% - 60px) !important;
    }
  ` );
}

//GreasyFork
if (window.location.href.indexOf("https://greasyfork.org") > -1) {
  GM_addStyle (`
    .width-constraint {
      margin: auto 1em !important;
      max-width: unset !important;
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

//It's Foss
if (window.location.href.indexOf("https://itsfoss.com") > -1) {
  GM_addStyle (`
    .site-inner {
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
    #contentBody, .container-xl, .container-lg, .container-md, .container-sm, .container {
      max-width: unset !important;
    }
    .container, .navbar.navbar-static-top .container, .navbar-fixed-top .container, .navbar-fixed-bottom .container {
      width: unset !important;
    }
    .span12 {
      width: 100vw !important;
    }
    div.container.my-4.p-0 {
      padding-left: 3rem !important;
      padding-right: 1rem !important;
    }
  ` );
}

//Kurena Forum
//TODO: Matching the URL isn't good enough here, since we want this to work on every Kurena Forum site. Something to figure out later.
if (window.location.href.indexOf("https://openttd.btpro.nl") > -1) {
  GM_addStyle (`
    #bottom, #centercontent_bg, #wrapper {
      width: unset !important;
    }
    #header {
      aspect-ratio: 192 / 25 !important;
      background-repeat: round !important;
      height: unset !important;
      width: 100% !important;
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

//Medium
if (window.location.href.indexOf("medium.com") > -1) {
  GM_addStyle (`
    .n {
      max-width: unset !important;
    }
    .fh {
      max-width: unset !important;
    }
  ` );
}

//MyAnimeList
if (window.location.href.indexOf("https://myanimelist.net") > -1) {
  GM_addStyle (`
    #widget-episode-video, .list-unit .list-status-title, .status-menu-container, .widget-slide-block, .widget-slide-block .widget-slide-outer, div.di-t, div.wrapper div#contentWrapper div#content table#dialog {
      width: 100% !important;
    }
    .anime-slide.js-anime-slide {
      text-align: center !important;
      width: unset !important;
    }
    .anime-slide-block, .anime-slide-outer, .detail-stack-block .column-item .detail, .forum .forum-board .topics .topic-title, .forum .forum-board-list, .forum .forum-mods-list, .forum .forum-side-block .forum-side-list .forum-post .information-block, .list-unit, .manga-store .main-right, .news-list .comment-list, .news-list .news-unit, .page-advertising #ad_menu, .page-common #menu, .page-common .content-container .container-left, .page-common .login-form-block, .page-common .social-login-block, .profile .user-profile-about, .ranking-digest .ranking-unit .title, .stacks .recent-list .column-item p.text, .status-menu-container .search-container #search-box.open, body.news .content-left, body.page-forum.page-common div#myanimelist div.wrapper div#contentWrapper div#content div, td.borderClass div {
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
    .detail-user-recs-text, .recommendations-user-recs-text, body.index .widget-container .widget.reviews.left .textReadability {
      max-width: unset !important
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
    .page-common .h1.edit-info div.h1-title, .page-common .h1.edit-info span.h1-title {
      display: inline-block !important;
      width: unset !important;
    }
    .page-common .login-inputtext {
      width: calc(100% - 16px) !important;
    }
    .ranking-digest .ranking-unit {
      width: 97% ! important;
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
      width: calc(100% - 8px) !important;
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

//Phoronix
if (window.location.href.indexOf("https://www.phoronix.com") > -1) {
  GM_addStyle (`
    #breadcrumbs, #channel-subtabbar, #channel-tabbar, #footer, #footer-copyright, #header, .b-top-menu__container, .breadcrumbs-wrapper, .notices {
      max-width: unset !important;
    }
    #content {
      border-left: unset !important;
      border-right: unset !important;
      max-width: unset !important;
      width: unset !important;
    }
    #footer-content, .wcontainer {
      width: unset !important;
    }
    #outer-wrapper {
      margin: unset !important;
    }
    .b-top-menu__background {
      padding: unset !important;
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

//Qt
if (window.location.href.indexOf("qt.io") > -1) {
  GM_addStyle (`
    .b-article__container, .b-article__content article, .b-block__container, .b-collection__container, .b-header__container, .b-hero__container, .b-hero__search, .b-hero__textarea, .b-single-product__container, .container, body.qt-design-system .b-header__container, div.stamped-container[data-widget-style], div[data-widget-style] div.stamped-container {
      max-width: unset !important;
    }
  ` );
}

//Reddit
/* This was only tested with the old Reddit layout. The new layout may not and probably does not work with this.
 * Because old Reddit allowed subreddits to have custom CSS styling, it is possible that this filter will not work accross all subreddits.
 * If this happens, some subreddit-specific filters may be necessary. */
if (window.location.href.indexOf("https://www.reddit.com") > -1) {
  GM_addStyle (`
    #compose-message .roundfield select, .roundfield input[type="number"], .roundfield input[type="password"], .roundfield input[type="text"], .roundfield input[type="url"], .roundfield textarea, .submit-page #newlink.submit.content .tabmenu.formtab a, .usertext-edit textarea {
      width: -moz-available !important;
    }
    #flair-field, #reddit-field, #text-field, #title-field, .formtabs-content > div:nth-child(7) > div:nth-child(1), div.submit_text.roundfield.enabled {
      width: calc(100% - 20px) !important;
    }
    .formtabs-content {
      width: calc(100% - 307px) !important;
    }
    .markdownEditor-wrapper, .roundfield .usertext-edit, .submit-page .roundfield, .usertext .bottom-area {
      width: 100% !important;
    }
    .md, div.usertext-edit {
      max-width: unset !important;
    }
    .submit-page #header-bottom-left {
      left: unset !important;
      margin-left: unset !important;
      right: unset !important
    }
    .submit-page #newlink.submit.content {
      margin: 0 1em !important;
      width: unset !important;
    }
    div.roundfield:nth-child(4) {
      width: calc(100% - 327px) !important;
    }
    ul.tabmenu.formtab li {
      display: inline-block !important;
      text-align: center !important;
      width: 50% !important;
    }
  ` );
}
//r/kde
if (window.location.href.indexOf("https://www.reddit.com/r/kde") > -1) {
  GM_addStyle (`
    #flair-field, #reddit-field, #text-field, #title-field, .formtabs-content, .formtabs-content > div:nth-child(7) > div:nth-child(1), div.roundfield:nth-child(4), div.submit_text.roundfield.enabled {
      width: -moz-available !important;
    }
    #title-field {
      width: 100% !important;
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

//SearX
// TODO: Matching the URL isn't good enough here, since we want this to work on every SearX site. Something to figure out later. 
if (window.location.href.indexOf("https://search.ononoki.org") > -1) {
  GM_addStyle (`
    #results {
      grid-template-columns: 70vw 20vw !important;
      margin-left: 30px !important;
    }
    #search_header {
      column-gap: unset !important;
      padding-left: unset !important;
    }
    .autocomplete {
      width: calc(100% - 7rem) !important; /*This is very bad and doesn't fit the width of the search bar in all situations at all. I need to find a better solution here.*/
    }
    .result .content, .result .stat {
      max-width: unset !important;
    }
    .search_box {
      width: calc(100% - 30px) !important;
    }
    .search_filters {
      margin-left: 40px !important;
    }
  ` );
}

//Software Freedom Conservancy
if (window.location.href.indexOf("https://sfconservancy.org") > -1) {
  GM_addStyle (`
    .mw8 {
      max-width: unset !important;
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

//Stack Exchange
/* TODO: Matching the URL isn't good enough here, since we want this to work on every Stack Exchange site. Something to figure out later.
 * Right now, the filter is always active. Hopefully it won't cause any problems. */
GM_addStyle (`
  #content, .site-footer .site-footer--container, .site-footer .site-footer--extra, body > .container {
    max-width: unset !important;
  }
  .s-topbar .s-topbar--container {
    width: -moz-available !important;
  }
  body {
    --s-full: unset !important;
  }
` );

//Steam
/* TODO: Steam has multiple domains, inculding steamcommunity.com and store.steampowered.com.
 * I know it sounds ridiculous, but I literally have no idea how to let this thing accept multiple domains without pointlessly duplicating the code.
 * Looked up the OR operator, which is apparently ||. Tried using it multiple ways, didn't work. Right now, we're just matching for "steam".*/
if (window.location.href.indexOf("steam") > -1) {
  GM_addStyle (`
    .apphub_Content, .apphub_HomeHeaderContent {
      margin: 0 16px !important;
      max-width: unset !important;
    }
    .apphub_HomeHeader, .faqsharedviewpage_FAQViewPage_Ya530 .faqsharedviewpage_Columns_HGDD2, .faqsharedviewpage_FAQViewPage_Ya530 .faqsharedviewpage_SupportTitle_2BcDf, .store_nav .search_area {
      max-width: unset !important;
    }
    .faqsharedviewpage_FAQViewPage_Ya530 .faqsharedviewpage_LeftCol_o2y9U {
      max-width: calc(100% - 316px) !important;
    }
    .forum_op {
      background-size: cover !important;
      max-width: unset !important;
    }
    .maincontent, div#global_header .content {
      width: unset !important;
    }
    .pagecontent {
      padding-bottom: unset !important;
    }
    .queue_ctn, body.v6 .page_content, div#store_header .content {
      margin: 0 16px !important;
      width: unset !important;
    }
    .review_box .rightcol {
      width: calc(100% - 28px);
    }
    .store_nav .search_flex_spacer {
      flex: unset !important;
    }
    body.flat_page #footer_spacer, body.headerless_page #footer_spacer {
      height: unset !important;
      padding-top: unset !important;
    }
    div#game_highlights.block_content.page_content {
      display: flex !important;
      flex-direction: row-reverse !important;
    }
    div.leftcol {
      margin-right: unset !important;
      width: calc(100% - 322px) !important;
    }
    div.maincontent {
      display: flex !important;
    }
    div.rightcol.responsive_local_menu {
      margin-left: 14px !important;
    }
  ` );
}

//TechRadar
if (window.location.href.indexOf("https://www.techradar.com") > -1) {
  GM_addStyle (`
    .trending-bar-container {
      padding: unset !important;
    }
    body.limit-width .container.full {
      max-width: unset !important;
    }
    body.limit-width .news-article, body.limit-width .static-article {
      max-width: calc(100% - 300px) !important;
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

//The Verge
if (window.location.href.indexOf("https://www.theverge.com") > -1) {
  GM_addStyle (`
    .l-wrapper {
      max-width: unset !important;
    }
  ` );
}

//The XY Problem
if (window.location.href.indexOf("https://xyproblem.info") > -1) {
  GM_addStyle (`
    #container {
      max-width: unset !important;
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

//Writings of RoadrunnerWMC
if (window.location.href.indexOf("https://roadrunnerwmc.github.io/") > -1) {
  GM_addStyle (`
    .wrapper {
      max-width: calc(100% - 60px) !important;
    }
  ` );
}

//xemu
if (window.location.href.indexOf("https://xemu.app") > -1) {
  GM_addStyle (`
    .container, .container-lg, .container-md, .container-sm, .container-xl {
      max-width: unset !important;
    }
  ` );
}

//xenia
if (window.location.href.indexOf("https://xenia.jp") > -1) {
  GM_addStyle (`
    .wrapper {
      max-width: calc(100% - 60px) !important;
    }
  ` );
}
