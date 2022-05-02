// ==UserScript==
// @name        Margin Remover
// @namespace   Violentmonkey Scripts
// @grant       GM_addStyle
// @run-at      document-start
// @author      poudink
// @description Remove stupid margins.
// ==/UserScript==

//DuckDuckGo
//Breaks things that I am not yet knowledgeable enough to fix (I was able to fix it with inspect elements tools, but I don't know enough about userscript's HTML/CSS injection features.).
/*if (window.location.href.indexOf("https://duckduckgo.com") > -1) {
  GM_addStyle (`
    .cw, .cw--c {
      margin-left: 5em !important;
    }
    .footer__left {
      width: 81% !important;
    }
    .header__logo-wrap {
      width: unset !important;
    }
    .header__search-wrap, .content__internal {
      padding-right: 26em !important;
      padding-left: 4em !important;
    }
    .is-link-style-exp.is-not-mobile-device .footer_cards, .c-info, .c-base, .c-icon, .c-list, .c-product, .c-detail, .zci__main.has-aux, .zci__main--answer, .results--main, .forecast-wrapper .module--forecast .module__detail--hours__labels, .zcm-wrap--header {
      max-width: unset !important;
    }
    .is-vertical-tabs-exp .zcm {
      padding-left: 4em !important;
      width: -moz-available !important;
      padding-right: 25em !important;
    }
    .metabar__in, .welcome, .zcm-wrap, .zci__main, .zci__detail, .serp__results, .tile-wrap .no-results, .footer, .footer--mobile {
      padding-left: unset !important;
    }
    .msg--box, .msg--info, .msg--help, .msg--untranslated, .msg--warning, #error_homepage, .msg, .content__text, .header__search-wrap {
      max-width: unset !important;
    }
  ` );
}*/

//GitHub
if (window.location.href.indexOf("https://github.com") > -1) {
  GM_addStyle (`
    .col-lg-8 {
      width: 84.44444444% !important;
    }
    .container-lg {
      max-width: unset !important;
    }
    .container-md {
      max-width: unset !important;
    }
  ` );
}

//Kuribo64
if (window.location.href.indexOf("kuribo64.net") > -1) {
  GM_addStyle (`
    #container {
      margin-left: 1em !important;
      margin-right: 1em !important;
      max-width: unset !important;
    }
    body {
      max-width: unset !Important;
    }
    div.maincontainer {
      max-width: unset !important;
      padding-left: 1em !important;
      padding-right: 1em !important;
    }
  ` );
}

//MediaWiki
//Detecting the URL isn't good enough here, since we want this to work on every MediaWiki site. Something to figure out later.
if (window.location.href.indexOf("https://wiki.archlinux.org") > -1) {
  GM_addStyle (`
    .mw-article-toolbar-container {
      max-width: unset !important;
    }
    .mw-content-container {
      max-width: unset !important;
    }
  ` );
}

//MyAnimeList
if (window.location.href.indexOf("https://myanimelist.net") > -1) {
  GM_addStyle (`
    #widget-episode-video {
      width: 100% !important;
    }
    .anime-slide.js-anime-slide{
      width: unset !important;
      text-align: center !important;
    }
    .anime-slide-block {
      width: unset !important;
    }
    .anime-slide-block .anime-slide .btn-anime {
      float: unset !important;
    }
    .anime-slide-outer {
      width: unset !important;
    }
    .detail-stack-block .column-item {
      width: 32% !important;
    }
    .detail-stack-block .column-item .detail {
      width: unset !important;
    }
    .header {
      width: unset !important;
      margin-left: 1em !important;
      margin-right: 1em !important;
    }
    .left-column.fl-l.divider{
      width: 49% !important;
    }
    .left-right.fl-r{
      width: 49% !important;
    }
    .list-container {
      width: unset !important;
      margin-right: 1em !important;
      margin-left: 5em !important;
    }
    .list-unit {
      width: unset !important;
    }
    .list-unit .list-status-title {
      width: 100% !important;
    }
    .news-list .comment-list, .news-list .news-unit {
      width: unset !important;
    }
    .page-common #menu {
      width: unset !important;
    }
    .page-common #myanimelist {
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
    .ranking-digest .ranking-unit .title {
      width: unset !important;
    }
    .status-menu-container {
      width: 100% !important;
    }
    .status-menu-container .search-container #search-box.open {
      width: unset !important;
    }
    .widget-slide-block {
      width: 100% !important;
    }
    .widget-slide-block .widget-slide-outer {
      width: 100% !important;
    }
    .widget.mxj .widget-content a {
      width: 37% !important;
      margin-right: 0px !important;
    }
    body.index .widget-container .widget.reviews.left .textReadability {
      max-width: unset !important;
    }
    div:nth-child(1).di-tc.va-t{
      width: 49% !important;
    }
    div:nth-child(2).di-tc.va-t{
      width: 2% !important;
    }
    div:nth-child(3).di-tc.va-t{
      width: 49% !important;
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
      width: unset !important;
      max-width: unset !important;
      padding-left: 1em !important;
      padding-right: 1em !important;
    }
    body:not(.timeless)[data-pagetype="Story"] #main-col #article-wrapper {
      max-width: unset !important;
      padding-left: 7em !important;
    }
  ` );
}
