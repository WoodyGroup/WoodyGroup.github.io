/**
 * nav.js — Single source of truth for the navigation bar.
 * Renders the nav and auto-highlights the current page.
 * To add a page: add one entry to NAV_LINKS below.
 */

(function () {
  const NAV_LINKS = [
    { label: "Home",         href: "index.html"        },
    { label: "Publications", href: "publications.html" },
    { label: "Research",     href: "research.html"     },
    { label: "People",       href: "people.html"       },
  ];

  const current = window.location.pathname.split('/').pop() || 'index.html';

  const items = NAV_LINKS.map(link => {
    const active = (link.href === current) ? ' class="active"' : '';
    return `<li><a href="${link.href}"${active}>${link.label}</a></li>`;
  }).join('');

  document.getElementById('main-nav').innerHTML = `
    <a class="nav-logo" href="index.html">ADIL <span>@ CMU</span></a>
    <ul class="nav-links">${items}</ul>`;
})();
