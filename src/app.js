// ============================================================
// Client-Side Router — Hash-based SPA routing
// ============================================================

class Router {
  constructor(routes, defaultRoute = '/') {
    this.routes = routes; // { path: renderFn }
    this.defaultRoute = defaultRoute;
    this.currentRoute = null;
    this.container = null;

    window.addEventListener('hashchange', () => this.resolve());
    window.addEventListener('load', () => this.resolve());
  }

  setContainer(el) {
    this.container = el;
  }

  navigate(path) {
    window.location.hash = '#' + path;
  }

  getPath() {
    const hash = window.location.hash.slice(1) || this.defaultRoute;
    return hash.split('?')[0];
  }

  getParams() {
    const path = this.getPath();
    const parts = path.split('/').filter(Boolean);
    return parts;
  }

  resolve() {
    if (!this.container) return;

    const path = this.getPath();
    const parts = path.split('/').filter(Boolean);

    // Try exact match first
    let handler = this.routes[path];

    // Try pattern matching (e.g., /topic/:id)
    if (!handler) {
      for (const [routePath, routeHandler] of Object.entries(this.routes)) {
        const routeParts = routePath.split('/').filter(Boolean);
        if (routeParts.length !== parts.length) continue;

        const params = {};
        let match = true;
        for (let i = 0; i < routeParts.length; i++) {
          if (routeParts[i].startsWith(':')) {
            params[routeParts[i].slice(1)] = parts[i];
          } else if (routeParts[i] !== parts[i]) {
            match = false;
            break;
          }
        }
        if (match) {
          handler = (container) => routeHandler(container, params);
          break;
        }
      }
    }

    // Fallback to default
    if (!handler) {
      handler = this.routes[this.defaultRoute] || this.routes['/'];
    }

    // Scroll to top instantly to prevent jarring scrolling animations during transition
    window.scrollTo(0, 0);

    // Page cross-fade transition
    if (this.container.innerHTML !== '') {
      this.container.classList.remove('page-enter');
      this.container.classList.add('page-exit');

      setTimeout(() => {
        this.container.innerHTML = '';
        if (handler) {
          handler(this.container);
        }
        this.container.classList.remove('page-exit');
        void this.container.offsetHeight; // Force reflow
        this.container.classList.add('page-enter');
      }, 200);
    } else {
      this.container.innerHTML = '';
      if (handler) {
        handler(this.container);
      }
      void this.container.offsetHeight; // Force reflow
      this.container.classList.add('page-enter');
    }

    // Update active nav link
    this.updateActiveLink(path);

    this.currentRoute = path;
  }

  updateActiveLink(path) {
    document.querySelectorAll('.navbar-links a, .sidebar-links a, .mobile-bottom-nav-item').forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      const linkPath = href.replace('#', '');

      // Check if this nav item matches the current path
      const isActive = path === linkPath ||
        (linkPath !== '/' && path.startsWith(linkPath));

      link.classList.toggle('active', isActive);
    });
  }
}
