// ==UserScript==
// @name        Margin Remover MK.2
// @namespace   Violentmonkey Scripts
// @grant       GM_addStyle
// @run-at      document-start
// @author      poudink
// @description Remove stupid margins.
// ==/UserScript==

// ArchWiki
if (window.location.href.indexOf("https://wiki.archlinux.org/") > -1) {
  GM_addStyle (`
    .mw-article-toolbar-container, .wvui-typeahead-search, div.mw-content-container:nth-child(1), div.mw-content-container:nth-child(2) {
      max-width: unset !important;
    }
  ` );
}

//blargSNES
if (window.location.href.indexOf("https://blargsnes.kuribo64.net/") > -1) {
  GM_addStyle (`
    #container {
      max-width: unset !important;
    }
  ` );
}

// GitHub
if (window.location.href.indexOf("https://github.com/") > -1) {
  GM_addStyle (`
    #query, #wiki-wrapper, .footer, .markdown-body, .mx-auto, div.clearfix {
      max-width: unset !important;
    }
    .col-md-12 {
      width: 100% !important;
    }
    .header-search {
      max-width: 100% !important;
    }
  ` );
}

// HTTPS
if (window.location.href.indexOf("https://") > -1) {
  GM_addStyle (`
    #searchform, .container-limited, .content-block, .detail-page-description, .detail-page-header, .file-content, .info-well, .merge-request-tabs-container, .mr-state-widget {
      max-width: unset !important;
    }
    .table {
      table-layout: unset !important;
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
    table.outline:nth-child(1), .width75 {
      width: 100% !important;
    }
  ` );
}

// pkgs.org
if (window.location.href.indexOf("https://pkgs.org/") > -1) {
  GM_addStyle (`
    .breadcrumb, div.container:nth-child(1), div.container:nth-child(3) {
      max-width: unset !important;
    }
  ` );
}
