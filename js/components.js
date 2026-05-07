(function () {
  const links = [
    { href: 'index.html', label: 'Home' },
    { href: 'cv.html', label: 'CV' },
    { href: 'writing.html', label: 'Writing' },
    { href: 'contact.html', label: 'Contact' },
  ];

  const currentFile = window.location.pathname.split('/').pop() || 'index.html';

  const navItems = links
    .map(({ href, label }) => {
      const active = href === currentFile ? ' class="active"' : '';
      return `<li><a href="${href}"${active}>${label}</a></li>`;
    })
    .join('\n        ');

  document.body.insertAdjacentHTML(
    'afterbegin',
    `<nav class="nav">
    <div class="nav-container">
      <span class="nav-logo">Wanmeng Liu</span>
      <button class="nav-mobile-toggle" aria-label="Toggle menu" onclick="toggleNav()">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul class="nav-links" id="navLinks">
        ${navItems}
      </ul>
    </div>
  </nav>`
  );

  const mainEl = document.querySelector('main.page');
  if (mainEl) {
    mainEl.insertAdjacentHTML(
      'beforeend',
      `<footer class="footer">
      <div class="container">
        <div class="footer-content">
          <p class="footer-text">© 2026 Wanmeng Liu</p>
          <div class="footer-links">
            <a href="https://www.linkedin.com/in/wanmengliu/" target="_blank" rel="noopener">LinkedIn</a>
            <a href="https://substack.com/@wanmengliu" target="_blank" rel="noopener">Substack</a>
          </div>
        </div>
      </div>
    </footer>`
    );
  }

  window.toggleNav = function () {
    document.getElementById('navLinks').classList.toggle('active');
  };
})();
