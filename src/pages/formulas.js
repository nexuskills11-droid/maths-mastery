// ============================================================
// Formula Sheet Page — Quick reference for all formulas
// ============================================================

function renderFormulas(container) {
  let selectedTopic = 'all';
  let searchQuery = '';

  render();

  function getFilteredFormulas() {
    return formulas.filter(f => {
      if (selectedTopic !== 'all' && f.topicId !== selectedTopic) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return f.name.toLowerCase().includes(q) || f.description.toLowerCase().includes(q);
      }
      return true;
    });
  }

  function render() {
    const filtered = getFilteredFormulas();

    container.innerHTML = `
      <div class="section-header">
        <h2>📋 Formula Sheet</h2>
        <p>Quick reference for all Class 10 Math formulas</p>
        <div class="section-line"></div>
      </div>

      <div style="display: flex; gap: var(--space-4); margin-bottom: var(--space-6); flex-wrap: wrap; align-items: center;">
        <input type="text" id="formula-search" placeholder="🔍 Search formulas..." value="${searchQuery}"
          style="flex: 1; min-width: 200px; padding: var(--space-3) var(--space-4); border-radius: var(--radius-full);">
        <span style="color: var(--text-tertiary); font-size: 0.85rem;">${filtered.length} formulas</span>
      </div>

      <div class="filter-bar" id="topic-filters">
        <button class="filter-chip ${selectedTopic === 'all' ? 'active' : ''}" data-topic="all">All Topics</button>
        ${topics.map(t => `
          <button class="filter-chip ${selectedTopic === t.id ? 'active' : ''}" data-topic="${t.id}">${t.icon} ${t.name}</button>
        `).join('')}
      </div>

      ${filtered.length === 0 ? `
        <div class="empty-state">
          <div class="empty-icon">📋</div>
          <h3>No formulas found</h3>
          <p>Try adjusting your search or filter</p>
        </div>
      ` : `
        <div class="formula-grid">
          ${filtered.map(f => {
            const topic = topics.find(t => t.id === f.topicId);
            const isBookmarked = storage.isBookmarked('formula', f.id);
            return `
              <div class="card formula-card stagger-item">
                <div class="formula-name">
                  <span>${f.name}</span>
                  <div style="display: flex; gap: var(--space-2); align-items: center;">
                    ${topic ? `<span class="badge" style="background: ${topic.color}15; color: ${topic.color}; font-size: 0.7rem;">${topic.icon}</span>` : ''}
                    <button class="bookmark-btn btn-ghost btn-sm ${isBookmarked ? 'bookmarked' : ''}" data-formula-id="${f.id}" aria-label="Bookmark formula" style="font-size: 1rem; padding: 2px;">
                      ${isBookmarked ? '⭐' : '☆'}
                    </button>
                  </div>
                </div>
                <div class="formula-display">\\(${f.formula}\\)</div>
                <div class="formula-desc">${f.description}</div>
                <div class="formula-actions">
                  <button class="copy-btn" data-formula="${f.formula.replace(/"/g, '&quot;')}" aria-label="Copy formula">
                    📋 Copy
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `}
    `;

    // Render KaTeX
    if (window.renderMath) window.renderMath(container);

    // Search
    const searchInput = container.querySelector('#formula-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        render();
      });
      // Restore focus after re-render
      if (searchQuery) {
        searchInput.focus();
        searchInput.setSelectionRange(searchQuery.length, searchQuery.length);
      }
    }

    // Topic filters
    container.querySelectorAll('#topic-filters .filter-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        selectedTopic = btn.dataset.topic;
        render();
      });
    });

    // Copy buttons
    container.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.dataset.formula;
        navigator.clipboard.writeText(text).then(() => {
          btn.classList.add('copied');
          btn.innerHTML = '✅ Copied!';
          setTimeout(() => {
            btn.classList.remove('copied');
            btn.innerHTML = '📋 Copy';
          }, 2000);
        }).catch(() => {
          if (window.showToast) window.showToast('Failed to copy', 'error');
        });
      });
    });

    // Bookmark buttons
    container.querySelectorAll('.bookmark-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const fId = parseInt(btn.dataset.formulaId);
        const nowBookmarked = storage.toggleBookmark('formula', fId);
        btn.innerHTML = nowBookmarked ? '⭐' : '☆';
        btn.classList.toggle('bookmarked', nowBookmarked);
        if (window.showToast) window.showToast(nowBookmarked ? 'Formula bookmarked!' : 'Bookmark removed', 'success');
      });
    });
  }
}
