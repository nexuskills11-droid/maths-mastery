// ============================================================
// Theme Manager — Dark/Light mode with system preference detection
// ============================================================

class ThemeManager {
  constructor() {
    this.theme = this.getStoredTheme() || this.getSystemTheme();
    this.apply(this.theme);
    this.watchSystem();
  }

  getStoredTheme() {
    try {
      return localStorage.getItem('mm10-theme');
    } catch (e) {
      return null;
    }
  }

  getSystemTheme() {
    try {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch (e) {
      return 'light';
    }
  }

  apply(theme) {
    this.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('mm10-theme', theme);
    } catch (e) {}
    this.updateToggleIcon();
  }

  toggle() {
    document.documentElement.classList.add('theme-transitioning');
    this.apply(this.theme === 'dark' ? 'light' : 'dark');
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning');
    }, 450);
  }

  updateToggleIcon() {
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.innerHTML = this.theme === 'dark' ? '☀️' : '🌙';
      btn.setAttribute('aria-label', `Switch to ${this.theme === 'dark' ? 'light' : 'dark'} mode`);
    }
  }

  watchSystem() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!this.getStoredTheme()) {
        this.apply(e.matches ? 'dark' : 'light');
      }
    });
  }

  isDark() {
    return this.theme === 'dark';
  }
}
