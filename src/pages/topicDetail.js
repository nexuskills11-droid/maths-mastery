// ============================================================
// Topic Detail Page — Full content view for a single topic
// ============================================================

function renderTopicDetail(container, params) {
  const topicId = params.id;
  const topic = topics.find(t => t.id === topicId);

  // ── Topic not found ──
  if (!topic) {
    container.innerHTML = `
      <div class="container" style="text-align:center;padding:4rem 1rem;">
        <h2>😕 Topic Not Found</h2>
        <p style="margin:1rem 0;color:var(--text-secondary);">
          We couldn't find a topic with id "<strong>${topicId}</strong>".
        </p>
        <a href="#/topics" class="btn btn-primary" style="margin-top:1rem;">← Back to Topics</a>
      </div>
    `;
    return;
  }

  // ── Mark topic as viewed ──
  storage.markTopicViewed(topic.id);

  // ── Bookmark state ──
  const isBookmarked = storage.isBookmarked('topic', topic.id);

  // ── Build theory sections ──
  const theorySections = (topic.theory || []).map((section, i) => `
    <div class="theory-section" data-index="${i}">
      <h3>${section.title}</h3>
      <div class="theory-content">${formatContent(section.content)}</div>
    </div>
  `).join('');

  // ── Build example cards ──
  const exampleCards = (topic.examples || []).map((example, i) => `
    <div class="card example-card">
      <div class="example-title">💡 Example ${i + 1}: ${example.title}</div>
      <div class="example-problem">${example.problem}</div>
      <ol class="step-list">
        ${example.steps.map(step => `<li>${step}</li>`).join('')}
      </ol>
      <div class="example-answer">
        <strong>Answer:</strong> ${example.answer}
      </div>
      ${example.alternateMethod ? `
        <button class="alt-method-toggle btn btn-outline" data-example="${i}" aria-expanded="false">
          🔄 Show Alternate Method
        </button>
        <div class="alt-method-content" id="alt-method-${i}" role="region" aria-label="Alternate method for example ${i + 1}">
          ${example.alternateMethod}
        </div>
      ` : ''}
    </div>
  `).join('');

  // ── Build common mistakes ──
  const mistakeCards = (topic.commonMistakes || []).map(mistake => `
    <div class="mistake-card">
      <span class="mistake-icon">⚠️</span>
      <span class="mistake-text">${mistake}</span>
    </div>
  `).join('');

  // ── Difficulty class ──
  const difficultyClass = (topic.difficulty || 'Medium').toLowerCase();

  // ── Render page ──
  container.innerHTML = `
    <div class="container">
      <!-- Back Button -->
      <a href="#/topics" class="btn btn-outline back-btn" style="margin-bottom:1.5rem;display:inline-flex;align-items:center;gap:0.5rem;">
        <span aria-hidden="true">←</span> Back to Topics
      </a>

      <!-- Topic Header -->
      <div class="topic-detail-header card" style="background:${topic.color}0F;">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:1rem;">
          <div style="display:flex;align-items:center;gap:1.25rem;flex:1;min-width:0;">
            <div class="topic-icon-large" style="background:${topic.color}20;" aria-hidden="true">
              ${topic.icon}
            </div>
            <div style="min-width:0;">
              <h1 style="margin:0 0 0.35rem 0;word-break:break-word;">${topic.name}</h1>
              <div class="topic-chapter" style="color:var(--text-secondary);margin-bottom:0.5rem;">
                📖 ${topic.chapters}
              </div>
              <span class="badge badge-${difficultyClass}">${topic.difficulty}</span>
            </div>
          </div>
          <button class="btn btn-outline bookmark-btn"
                  id="bookmark-toggle"
                  aria-label="${isBookmarked ? 'Remove bookmark' : 'Bookmark this topic'}"
                  title="${isBookmarked ? 'Remove bookmark' : 'Bookmark this topic'}">
            ${isBookmarked ? '🔖 Bookmarked' : '🏷️ Bookmark'}
          </button>
        </div>
        <p style="margin:1rem 0 0;color:var(--text-secondary);line-height:1.6;">${topic.description}</p>
      </div>

      <!-- Tab Bar -->
      <div class="tab-bar" role="tablist" aria-label="Topic content tabs">
        <button class="tab-btn active" role="tab" aria-selected="true" aria-controls="tab-theory" id="tabBtn-theory" data-tab="theory">
          📚 Theory
        </button>
        <button class="tab-btn" role="tab" aria-selected="false" aria-controls="tab-examples" id="tabBtn-examples" data-tab="examples">
          💡 Examples
        </button>
        <button class="tab-btn" role="tab" aria-selected="false" aria-controls="tab-mistakes" id="tabBtn-mistakes" data-tab="mistakes">
          ⚠️ Common Mistakes
        </button>
        <a href="#/practice?topic=${topic.id}" class="tab-btn tab-btn-link" role="tab" data-tab="practice">
          🎯 Practice
        </a>
      </div>

      <!-- Tab Content: Theory -->
      <div class="tab-content" id="tab-theory" role="tabpanel" aria-labelledby="tabBtn-theory">
        ${theorySections || '<p style="color:var(--text-secondary);padding:2rem 0;">No theory content available for this topic yet.</p>'}
      </div>

      <!-- Tab Content: Examples -->
      <div class="tab-content" id="tab-examples" role="tabpanel" aria-labelledby="tabBtn-examples" style="display:none;">
        ${exampleCards || '<p style="color:var(--text-secondary);padding:2rem 0;">No examples available for this topic yet.</p>'}
      </div>

      <!-- Tab Content: Common Mistakes -->
      <div class="tab-content" id="tab-mistakes" role="tabpanel" aria-labelledby="tabBtn-mistakes" style="display:none;">
        ${mistakeCards || '<p style="color:var(--text-secondary);padding:2rem 0;">No common mistakes listed for this topic yet.</p>'}
      </div>
    </div>
  `;

  // ── KaTeX rendering ──
  if (window.renderMathInElement) {
    setTimeout(() => {
      window.renderMathInElement(container, {
        delimiters: [
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true },
        ],
      });
    }, 20);
  }

  // ── Tab switching ──
  const tabBtns = container.querySelectorAll('.tab-btn[data-tab]:not(.tab-btn-link)');
  const tabContents = container.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      // Update active state on buttons
      container.querySelectorAll('.tab-btn[data-tab]').forEach(b => {
        b.classList.remove('active');
        if (b.getAttribute('role') === 'tab') {
          b.setAttribute('aria-selected', 'false');
        }
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Show/hide tab content panels
      tabContents.forEach(panel => {
        panel.style.display = 'none';
        panel.classList.remove('fade-in');
      });

      const targetPanel = container.querySelector(`#tab-${targetTab}`);
      if (targetPanel) {
        targetPanel.style.display = '';
        void targetPanel.offsetHeight; // Force reflow
        targetPanel.classList.add('fade-in');
      }

      // Re-render math in newly-visible panel
      if (window.renderMathInElement && targetPanel) {
        setTimeout(() => {
          window.renderMathInElement(targetPanel, {
            delimiters: [
              { left: '\\(', right: '\\)', display: false },
              { left: '\\[', right: '\\]', display: true },
            ],
          });
        }, 20);
      }
    });
  });

  // ── Alternate method toggles ──
  const altToggles = container.querySelectorAll('.alt-method-toggle');
  altToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const exampleIdx = toggle.getAttribute('data-example');
      const content = container.querySelector(`#alt-method-${exampleIdx}`);
      if (!content) return;

      const isVisible = content.classList.toggle('visible');
      toggle.setAttribute('aria-expanded', isVisible ? 'true' : 'false');
      toggle.textContent = isVisible ? '🔄 Hide Alternate Method' : '🔄 Show Alternate Method';

      // Render math in the newly visible content
      if (isVisible && window.renderMathInElement) {
        setTimeout(() => {
          window.renderMathInElement(content, {
            delimiters: [
              { left: '\\(', right: '\\)', display: false },
              { left: '\\[', right: '\\]', display: true },
            ],
          });
        }, 20);
      }
    });
  });

  // ── Bookmark toggle ──
  const bookmarkBtn = container.querySelector('#bookmark-toggle');
  if (bookmarkBtn) {
    bookmarkBtn.addEventListener('click', () => {
      const nowBookmarked = storage.toggleBookmark('topic', topic.id);
      bookmarkBtn.innerHTML = nowBookmarked ? '🔖 Bookmarked' : '🏷️ Bookmark';
      bookmarkBtn.setAttribute('aria-label', nowBookmarked ? 'Remove bookmark' : 'Bookmark this topic');
      bookmarkBtn.setAttribute('title', nowBookmarked ? 'Remove bookmark' : 'Bookmark this topic');
    });
  }
}

// ── Helper: format multiline content preserving paragraphs ──
function formatContent(text) {
  if (!text) return '';
  // Convert double newlines into paragraph breaks, preserve single newlines
  return text
    .split(/\n{2,}/)
    .map(para => `<p>${para.replace(/\n/g, '<br>')}</p>`)
    .join('');
}
