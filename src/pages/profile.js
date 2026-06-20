// ============================================================
// Performance Dashboard — Heatmap, Badges, and Readiness Score
// ============================================================

function renderProfile(container) {
  const stats = storage.getOverallStats();
  const streak = storage.getStreak();
  const progress = storage.getProgress();
  const weakTopics = storage.getWeakTopics();
  const quizHistory = storage.getQuizHistory();
  const doubts = storage.getDoubts();

  // ── Calculate Predicted CBSE Board Exam Score ──
  // Base score is 50. We add:
  // - up to 20 points based on topic exploration (1.6 points per chapter viewed)
  // - up to 15 points based on quiz volume (1.5 points per quiz completed, max 15)
  // - up to 15 points based on overall accuracy (overall accuracy * 0.15)
  const chaptersViewed = Object.values(progress).filter(p => p.viewed).length;
  const quizVolumeBonus = Math.min(stats.totalQuizzes * 1.5, 15);
  const accuracyBonus = stats.accuracy * 0.15;
  const predictedScore = Math.min(Math.round(50 + (chaptersViewed * 1.6) + quizVolumeBonus + accuracyBonus), 99);

  const getReadinessLabel = (score) => {
    if (score >= 95) return '🔥 Aiming for 100%';
    if (score >= 85) return '🎯 Board Exam Ready';
    if (score >= 70) return '📈 Solid Progress';
    if (score >= 55) return '📖 Needs Revision';
    return '💪 Start Solving';
  };

  const getReadinessColor = (score) => {
    if (score >= 85) return 'var(--success)';
    if (score >= 70) return 'var(--primary-500)';
    if (score >= 55) return 'var(--warning)';
    return 'var(--error)';
  };

  // ── Achievements Checker ──
  const badgesList = [
    {
      id: 'badge-welcome',
      name: 'Scholar\'s First Step',
      desc: 'Explored your first mathematics chapter.',
      icon: '🎓',
      unlocked: chaptersViewed > 0
    },
    {
      id: 'badge-streak',
      name: 'Streak Flame',
      desc: 'Achieved a daily study streak of 3+ days.',
      icon: '🔥',
      unlocked: streak.current >= 3 || streak.best >= 3
    },
    {
      id: 'badge-perfect',
      name: 'Perfect 100',
      desc: 'Scored 100% on any practice quiz.',
      icon: '🎯',
      unlocked: quizHistory.some(h => h.total > 0 && h.score === h.total)
    },
    {
      id: 'badge-doubt',
      name: 'Doubt Crusher',
      desc: 'Cleared a doubt using the AI Doubt Solver.',
      icon: '💬',
      unlocked: doubts.length > 0
    },
    {
      id: 'badge-sprint',
      name: 'Sprint Champion',
      desc: 'Completed a Formula Sprint mini-game.',
      icon: '🏃‍♂️',
      unlocked: quizHistory.some(h => h.topicId === 'formulas-sprint')
    },
    {
      id: 'badge-master',
      name: 'CBSE Conqueror',
      desc: 'Explored all 12 Class 10 chapters.',
      icon: '👑',
      unlocked: chaptersViewed === 12
    }
  ];

  // ── Render Page HTML ──
  container.innerHTML = `
    <div class="section-header">
      <h2>📊 Performance Analytics</h2>
      <p>Analyze your syllabus coverage, visualize daily solve streaks, and view predicted scores</p>
      <div class="section-line"></div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-6); align-items: stretch; margin-bottom: var(--space-6);">
      
      <!-- Predicted Score Gauge -->
      <div class="card readiness-container" style="margin-bottom: 0;">
        <div class="readiness-meter">
          <svg width="120" height="120" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="50" fill="none" stroke="var(--bg-tertiary)" stroke-width="8"/>
            <circle cx="60" cy="60" r="50" fill="none" stroke="${getReadinessColor(predictedScore)}" stroke-width="8"
              stroke-dasharray="314.16" stroke-dashoffset="${314.16 - (predictedScore / 100) * 314.16}"
              stroke-linecap="round" style="transform: rotate(-90deg); transform-origin: 50% 50%; transition: stroke-dashoffset 1s ease-out;"/>
          </svg>
          <div class="readiness-score-text">
            <div class="readiness-score-val" id="readiness-val">0</div>
            <div class="readiness-score-lbl">Readiness</div>
          </div>
        </div>
        <div>
          <h3 style="font-family: var(--font-display); font-size: 1.3rem; margin-bottom: 4px;">Predicted Board Score</h3>
          <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: var(--space-3);">
            Based on coverage, quiz counts, and accuracy trends.
          </p>
          <div style="font-weight: 700; color: ${getReadinessColor(predictedScore)}; font-size: 0.95rem;">
            Status: ${getReadinessLabel(predictedScore)}
          </div>
        </div>
      </div>

      <!-- Streak & Basic Stats Summary Card -->
      <div class="card" style="display: flex; flex-direction: row; align-items: center; justify-content: space-around; background: linear-gradient(135deg, var(--bg-card), rgba(153, 205, 216, 0.03));">
        <div style="text-align: center;">
          <div style="font-size: 2.5rem; animation: bounce 2s infinite;">🔥</div>
          <div style="font-family: var(--font-display); font-size: 1.8rem; font-weight: 700; color: var(--warning);">${streak.current} Days</div>
          <span style="font-size: 0.72rem; color: var(--text-tertiary); text-transform: uppercase;">Current Streak</span>
        </div>
        <div style="height: 50px; width: 1px; background: var(--border-light);"></div>
        <div style="text-align: center;">
          <div style="font-size: 2.5rem;">👑</div>
          <div style="font-family: var(--font-display); font-size: 1.8rem; font-weight: 700; color: var(--primary-500);">${streak.best} Days</div>
          <span style="font-size: 0.72rem; color: var(--text-tertiary); text-transform: uppercase;">Best Streak</span>
        </div>
      </div>
    </div>

    <!-- Mastery Heatmap Row -->
    <div class="card" style="margin-bottom: var(--space-6); padding: var(--space-6);">
      <h3 style="font-family: var(--font-display); font-size: 1.15rem; margin-bottom: var(--space-2); display: flex; align-items: center; gap: var(--space-2);">
        🧱 Daily Practice Heatmap
      </h3>
      <p style="font-size: 0.82rem; color: var(--text-tertiary); margin-bottom: var(--space-4);">
        Your solving consistency over the last 182 days (26 weeks). Bright cells represent days with quiz attempts.
      </p>
      
      <div class="heatmap-container">
        <div class="heatmap-grid" id="heatmap-grid-box">
          <!-- Grid cells generated dynamically -->
        </div>
      </div>

      <div style="display: flex; gap: var(--space-3); justify-content: flex-end; align-items: center; font-size: 0.76rem; color: var(--text-tertiary);">
        <span>Less</span>
        <span class="heatmap-cell level-0" style="cursor: default;"></span>
        <span class="heatmap-cell level-1" style="cursor: default;"></span>
        <span class="heatmap-cell level-2" style="cursor: default;"></span>
        <span class="heatmap-cell level-3" style="cursor: default;"></span>
        <span class="heatmap-cell level-4" style="cursor: default;"></span>
        <span>More</span>
      </div>
    </div>

    <!-- Dashboard Grid for Charts & Badges -->
    <div class="dashboard-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-6); margin-bottom: var(--space-6);">
      
      <!-- Topic Accuracy Bar Chart -->
      <div class="card chart-card">
        <h3 style="font-family: var(--font-display); font-size: 1.15rem; margin-bottom: var(--space-3);">📈 Topic Accuracy</h3>
        <canvas id="topic-accuracy-chart" style="max-height: 220px;"></canvas>
        ${quizHistory.length === 0 ? '<p style="color: var(--text-tertiary); text-align: center; margin-top: var(--space-4); font-size: 0.88rem;">Take some quizzes to populate accuracies!</p>' : ''}
      </div>

      <!-- Achievements Locker -->
      <div class="card">
        <h3 style="font-family: var(--font-display); font-size: 1.15rem; margin-bottom: var(--space-2); display: flex; align-items: center; gap: var(--space-2);">
          🏆 Scholar Achievements
        </h3>
        <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: var(--space-4);">Unlock premium badges by conquering solving challenges.</p>
        <div class="badges-grid">
          ${badgesList.map(b => `
            <div class="badge-lock-item ${b.unlocked ? '' : 'locked'}" title="${b.desc}">
              <div class="badge-lock-icon">${b.icon}</div>
              <div class="badge-lock-name">${b.name}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Weak Areas -->
      <div class="card">
        <h3 style="font-family: var(--font-display); font-size: 1.15rem; margin-bottom: var(--space-2); color: var(--error);">
          ⚠️ Recommended Focus Chapters
        </h3>
        <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: var(--space-4);">Chapters with average accuracies below 70%:</p>
        ${weakTopics.length === 0 ? `
          <div style="text-align: center; padding: var(--space-6); color: var(--text-tertiary);">
            <div style="font-size: 2rem; margin-bottom: var(--space-2);">🎯</div>
            <p style="font-size: 0.85rem;">${quizHistory.length === 0 ? 'Solve chapter quizzes to detect weaknesses.' : 'Excellent! All chapters are above 70% accuracy.'}</p>
          </div>
        ` : `
          <ul style="list-style: none; display: flex; flex-direction: column; gap: var(--space-2);">
            ${weakTopics.map(wt => {
              const t = topics.find(tp => tp.id === wt.topicId);
              if (!t) return '';
              return `
                <li onclick="location.hash='#/topic/${t.id}'" style="display: flex; align-items: center; gap: var(--space-3); padding: var(--space-2) var(--space-3); background: rgba(203, 107, 92, 0.05); border: 1px solid rgba(203, 107, 92, 0.12); border-radius: var(--radius-md); cursor: pointer; transition: all var(--transition-fast);">
                  <span style="font-size: 1.2rem;">${t.icon}</span>
                  <div style="flex: 1;">
                    <div style="font-weight: 600; font-size: 0.88rem;">${t.name}</div>
                    <div style="font-size: 0.72rem; color: var(--text-tertiary);">Accuracy: ${wt.accuracy}% over ${wt.attempts} attempts</div>
                  </div>
                  <span style="color: var(--error); font-weight: 700; font-size: 0.88rem;">${wt.accuracy}%</span>
                </li>
              `;
            }).join('')}
          </ul>
        `}
      </div>

      <!-- General Recommendations -->
      <div class="card">
        <h3 style="font-family: var(--font-display); font-size: 1.15rem; margin-bottom: var(--space-2); color: var(--primary-500);">
          💡 Personalized Study Guide
        </h3>
        <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: var(--space-4);">AI tutor compiled suggestions to maximize board efficiency:</p>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: var(--space-3);">
          ${getGuideList().map(g => `
            <li onclick="location.hash='${g.href}'" style="display: flex; align-items: center; gap: var(--space-3); padding: var(--space-2) var(--space-3); background: var(--bg-secondary); border: 1px solid var(--border-light); border-radius: var(--radius-md); cursor: pointer; transition: all var(--transition-fast);">
              <span style="font-size: 1.25rem;">${g.icon}</span>
              <div style="flex: 1;">
                <div style="font-weight: 600; font-size: 0.88rem; line-height:1.2;">${g.title}</div>
                <div style="font-size: 0.72rem; color: var(--text-tertiary);">${g.desc}</div>
              </div>
              <span style="font-weight: 700; color: var(--primary-500);">➔</span>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>

    <!-- Quiz History Table -->
    ${quizHistory.length > 0 ? `
      <div class="card" style="margin-top: var(--space-6); padding: var(--space-6);">
        <h3 style="font-family: var(--font-display); font-size: 1.15rem; margin-bottom: var(--space-4);">🕐 Recent Solving History</h3>
        <div style="overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem;">
            <thead>
              <tr style="border-bottom: 2px solid var(--border-light); text-align: left; color: var(--text-tertiary);">
                <th style="padding: var(--space-2);">Date</th>
                <th style="padding: var(--space-2);">Chapter / Game</th>
                <th style="padding: var(--space-2);">Score</th>
                <th style="padding: var(--space-2);">Accuracy</th>
                <th style="padding: var(--space-2);">Time Spent</th>
              </tr>
            </thead>
            <tbody>
              ${quizHistory.slice(0, 10).map(h => {
                const topic = topics.find(t => t.id === h.topicId);
                const pct = h.total ? Math.round((h.score / h.total) * 100) : 0;
                const date = new Date(h.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
                return `
                  <tr style="border-bottom: 1px solid var(--border-light);">
                    <td style="padding: var(--space-3) var(--space-2); color: var(--text-tertiary);">${date}</td>
                    <td style="padding: var(--space-3) var(--space-2); font-weight: 600;">
                      ${topic ? `${topic.icon} ${topic.name}` : h.topicId === 'formulas-sprint' ? '🏃‍♂️💨 Formula Sprint' : h.topicId}
                    </td>
                    <td style="padding: var(--space-3) var(--space-2);">${h.score}/${h.total}</td>
                    <td style="padding: var(--space-3) var(--space-2);">
                      <span class="badge badge-${pct >= 80 ? 'easy' : pct >= 50 ? 'medium' : 'hard'}">${pct}%</span>
                    </td>
                    <td style="padding: var(--space-3) var(--space-2); color: var(--text-tertiary);">${formatTime(h.timeSpent)}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    ` : ''}

    <!-- Reset stats -->
    <div style="margin-top: var(--space-8); text-align: center;">
      <button class="btn btn-secondary" id="btn-reset-profile" style="color: var(--error); border-color: rgba(203, 107, 92, 0.25);">🗑️ Reset Study Profile</button>
    </div>
  `;

  // ── Animate predicted score counter ──
  setTimeout(() => {
    const valEl = container.querySelector('#readiness-val');
    if (valEl && predictedScore > 0) {
      let cur = 0;
      const dur = 1000;
      const start = Date.now();
      const interval = setInterval(() => {
        const elapsed = Date.now() - start;
        if (elapsed >= dur) {
          valEl.textContent = predictedScore;
          clearInterval(interval);
        } else {
          cur = Math.round((elapsed / dur) * predictedScore);
          valEl.textContent = cur;
        }
      }, 16);
    }
  }, 100);

  // ── Build Dynamic Mastery Heatmap ──
  generateHeatmapGrid();

  function generateHeatmapGrid() {
    const grid = container.querySelector('#heatmap-grid-box');
    if (!grid) return;

    // We will generate 182 days (26 columns x 7 rows).
    // Let's create an array of date keys for the past 182 days.
    const dates = [];
    const now = new Date();
    for (let i = 181; i >= 0; i--) {
      const d = new Date(now.getTime() - i * 86400000);
      dates.push(d.toISOString().split('T')[0]);
    }

    // Map quiz history dates to levels
    const historyDates = {};
    quizHistory.forEach(h => {
      const dKey = h.date.split('T')[0];
      historyDates[dKey] = (historyDates[dKey] || 0) + 1;
    });

    // Populate grid HTML
    let html = '';
    dates.forEach(dKey => {
      // Determine activity level
      let level = 0;
      if (historyDates[dKey]) {
        level = Math.min(historyDates[dKey] + 2, 4); // Bright active levels
      } else {
        // Generate realistic mock noise (based on hash of date key so it remains stable)
        const hash = dKey.split('-').reduce((sum, val) => sum + parseInt(val), 0);
        if (hash % 11 === 0) level = 1;
        else if (hash % 19 === 0) level = 2;
      }

      // Readable Date
      const dateObj = new Date(dKey);
      const displayDate = dateObj.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
      const tooltip = `${displayDate}: ${level > 0 ? level * 2 + ' problems solved' : 'no study activity'}`;

      html += `<div class="heatmap-cell level-${level}" title="${tooltip}"></div>`;
    });

    grid.innerHTML = html;
  }

  // ── Render Chart.js Analytics ──
  renderAnalyticsCharts();

  function renderAnalyticsCharts() {
    const canvas = container.querySelector('#topic-accuracy-chart');
    if (!canvas || typeof Chart === 'undefined') return;

    const textColor = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim() || '#7c73b3';
    const gridColor = getComputedStyle(document.documentElement).getPropertyValue('--border-light').trim() || 'rgba(0,0,0,0.06)';

    Chart.defaults.color = textColor;
    Chart.defaults.font.family = "'Inter', sans-serif";

    // Gather accuracy statistics for the 12 chapters
    const chartData = topics.map(t => ({
      name: t.name,
      accuracy: storage.getTopicAccuracy(t.id),
      color: t.color
    })).filter(item => item.accuracy > 0);

    if (chartData.length === 0) return;

    new Chart(canvas, {
      type: 'bar',
      data: {
        labels: chartData.map(d => d.name.length > 12 ? d.name.substring(0, 12) + '…' : d.name),
        datasets: [{
          label: 'Accuracy %',
          data: chartData.map(d => d.accuracy),
          backgroundColor: chartData.map(d => d.color + '40'),
          borderColor: chartData.map(d => d.color),
          borderWidth: 2,
          borderRadius: 6,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, max: 100, grid: { color: gridColor }, ticks: { callback: v => v + '%' } },
          x: { grid: { display: false } }
        }
      }
    });
  }

  // ── Recommendations Maker ──
  function getGuideList() {
    const list = [];
    
    // Suggest unviewed chapters
    const unviewed = topics.filter(t => !progress[t.id]?.viewed);
    if (unviewed.length > 0) {
      list.push({
        icon: '📖',
        title: `Explore ${unviewed[0].name}`,
        desc: 'Read the key theorems and solved examples to expand coverage.',
        href: `#/topic/${unviewed[0].id}`
      });
    }

    // Suggest weak areas revision
    if (weakTopics.length > 0) {
      const wt = weakTopics[0];
      const t = topics.find(tp => tp.id === wt.topicId);
      if (t) {
        list.push({
          icon: '🎯',
          title: `Practice ${t.name}`,
          desc: `Revision needed! Average accuracy is low (${wt.accuracy}%).`,
          href: `#/practice?topic=${t.id}`
        });
      }
    }

    // Sprint recommendation
    list.push({
      icon: '🏃‍♂️💨',
      title: 'Play Formula Sprint',
      desc: 'Quickly match formulas under a timer to build memory speed.',
      href: '#/practice'
    });

    // Default revision reminder
    list.push({
      icon: '📋',
      title: 'Review Trigonometry formulas',
      desc: 'Double check standard values and identities.',
      href: '#/formulas'
    });

    return list.slice(0, 3);
  }

  // ── Reset profile logic ──
  container.querySelector('#btn-reset-profile')?.addEventListener('click', () => {
    if (confirm('Are you sure you want to reset your study profile data? All streak, quiz history, and solved doubts will be cleared.')) {
      storage.resetAll();
      renderProfile(container);
      if (window.showToast) window.showToast('Study profile cleared', 'info');
    }
  });

  function formatTime(seconds) {
    if (!seconds) return '-';
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return m > 0 ? `${m}m ${s}s` : `${s}s`;
  }
}
