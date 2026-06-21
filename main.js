// ============================================================
// Math Mastery 10 — Main Entry Point
// ============================================================
// All scripts are loaded via <script> tags in index.html
// Global variables available: topics, questions, formulas,
// storage, ThemeManager, Router, and all render* functions
// ============================================================

(function() {
  'use strict';

  // ── Initialize Theme ──
  const theme = new ThemeManager();

  // ── Initialize Router ──
  const router = new Router({
    '/': renderHome,
    '/topics': renderTopics,
    '/topic/:id': renderTopicDetail,
    '/practice': renderPractice,
    '/formulas': renderFormulas,
    '/doubts': renderDoubts,
    '/profile': renderProfile,
  }, '/');

  const appContainer = document.getElementById('app');
  router.setContainer(appContainer);

  // ── Theme Toggle ──
  var themeBtn = document.getElementById('theme-toggle');
  themeBtn.addEventListener('click', function() {
    themeBtn.style.transition = 'transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1)';
    themeBtn.style.transform = 'rotate(360deg) scale(1.15)';
    setTimeout(function() {
      themeBtn.style.transform = '';
    }, 500);
    theme.toggle();
  });

  // ── Navbar Scroll Glow ──
  var navbar = document.querySelector('.navbar');
  var lastScrollY = 0;
  window.addEventListener('scroll', function() {
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScrollY = scrollY;
  }, { passive: true });

  // ── Mobile Menu ──
  const sidebarOverlay = document.getElementById('sidebar-overlay');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');

  mobileMenuBtn.addEventListener('click', function() {
    sidebarOverlay.classList.add('open');
  });

  sidebarOverlay.addEventListener('click', function(e) {
    if (e.target === sidebarOverlay) {
      sidebarOverlay.classList.remove('open');
    }
  });

  // Close sidebar when a link is clicked
  document.getElementById('sidebar-links').addEventListener('click', function() {
    sidebarOverlay.classList.remove('open');
  });

  // ── Search Modal ──
  const searchOverlay = document.getElementById('search-overlay');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  function openSearch() {
    searchOverlay.classList.add('open');
    searchInput.value = '';
    searchInput.focus();
    searchResults.innerHTML = '';
  }

  function closeSearch() {
    searchOverlay.classList.remove('open');
  }

  document.getElementById('search-trigger').addEventListener('click', openSearch);

  searchOverlay.addEventListener('click', function(e) {
    if (e.target === searchOverlay) closeSearch();
  });

  // Ctrl+K shortcut
  document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
    if (e.key === 'Escape') {
      closeSearch();
      sidebarOverlay.classList.remove('open');
    }
  });

  // Search logic
  searchInput.addEventListener('input', function(e) {
    var query = e.target.value.trim().toLowerCase();
    if (!query) {
      searchResults.innerHTML = '';
      return;
    }

    var results = [];

    // Search topics
    topics.forEach(function(topic) {
      if (topic.name.toLowerCase().includes(query) || topic.description.toLowerCase().includes(query)) {
        results.push({
          type: 'Topic',
          title: topic.icon + ' ' + topic.name,
          href: '#/topic/' + topic.id
        });
      }
    });

    // Search formulas
    formulas.forEach(function(formula) {
      if (formula.name.toLowerCase().includes(query) || formula.description.toLowerCase().includes(query)) {
        results.push({
          type: 'Formula',
          title: formula.name,
          href: '#/formulas'
        });
      }
    });

    // Search questions (first 5 matches)
    questions.forEach(function(q) {
      if (q.question.toLowerCase().includes(query)) {
        results.push({
          type: 'Question',
          title: q.question.substring(0, 80) + (q.question.length > 80 ? '...' : ''),
          href: '#/practice'
        });
      }
    });

    // Render results
    if (results.length === 0) {
      searchResults.innerHTML = '<div class="empty-state" style="padding: 2rem;"><div class="empty-icon">🔍</div><p>No results found for "' + query + '"</p></div>';
    } else {
      searchResults.innerHTML = results.slice(0, 10).map(function(r) {
        return '<a href="' + r.href + '" class="search-result-item" onclick="document.getElementById(\'search-overlay\').classList.remove(\'open\')"><span class="result-type">' + r.type + '</span><span>' + r.title + '</span></a>';
      }).join('');
    }
  });

  // ── Toast Utility ──
  window.showToast = function(message, type) {
    type = type || 'info';
    var container = document.getElementById('toast-container');
    var toast = document.createElement('div');
    toast.className = 'toast';
    var icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' };
    toast.innerHTML = '<span>' + (icons[type] || 'ℹ️') + '</span> <span>' + message + '</span>';
    container.appendChild(toast);
    setTimeout(function() {
      toast.classList.add('toast-exit');
      setTimeout(function() { toast.remove(); }, 300);
    }, 3000);
  };

  // ── KaTeX Render Helper ──
  window.renderMath = function(element) {
    if (window.renderMathInElement) {
      setTimeout(function() {
        try {
          window.renderMathInElement(element, {
            delimiters: [
              { left: '\\(', right: '\\)', display: false },
              { left: '\\[', right: '\\]', display: true },
              { left: '$$', right: '$$', display: true },
              { left: '$', right: '$', display: false },
            ],
            throwOnError: false,
          });
        } catch (e) {
          console.warn('KaTeX render error:', e);
        }
      }, 20);
    }
  };

  // ── Initial Route ──
  router.resolve();

  // ── Log welcome ──
  console.log(
    '%c📐 Math Mastery 10 %c Loaded successfully!',
    'background: linear-gradient(135deg, #8b5cf6, #6d28d9); color: white; padding: 4px 12px; border-radius: 4px; font-weight: bold;',
    'color: #8b5cf6; font-weight: bold;'
  );

})();
