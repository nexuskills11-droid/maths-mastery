// ============================================================
// Practice Arena — Gamified Lobby & Formula Sprint Mini-Game
// ============================================================

function renderPractice(container) {
  // Arena State
  let activeMode = 'lobby'; // lobby, quiz-setup, quiz-play, quiz-results, sprint-setup, sprint-play, sprint-results

  // Standard Quiz State
  let quizTopic = 'all';
  let quizDifficulty = 'all';
  let quizTimerEnabled = true;
  let quizQuestions = [];
  let quizCurrentIdx = 0;
  let quizScore = 0;
  let quizAnswered = false;
  let quizTimerInterval = null;
  let quizTimeLeft = 30;
  let quizStartTime = 0;
  let quizTotalTime = 0;

  // Formula Sprint Game State
  let sprintQuestions = [];
  let sprintCurrentIdx = 0;
  let sprintScore = 0;
  let sprintTimerInterval = null;
  let sprintTimeLeft = 15;
  let sprintTotalTime = 0;
  let sprintStreak = 0;
  let sprintAnswered = false;
  let sprintStartTime = 0;

  // Check URL query parameters for direct navigation
  const hash = window.location.hash;
  const topicMatch = hash.match(/[?&]topic=([^&]+)/);
  if (topicMatch) {
    quizTopic = topicMatch[1];
    activeMode = 'quiz-setup';
  }

  // Initial render
  renderMode();

  // ── Main Render Switcher ──
  function renderMode() {
    // Clear any active timers to prevent memory leaks
    if (quizTimerInterval) clearInterval(quizTimerInterval);
    if (sprintTimerInterval) clearInterval(sprintTimerInterval);

    switch (activeMode) {
      case 'lobby':
        renderLobby();
        break;
      case 'quiz-setup':
        renderQuizSetup();
        break;
      case 'quiz-play':
        renderQuizPlay();
        break;
      case 'quiz-results':
        renderQuizResults();
        break;
      case 'sprint-setup':
        renderSprintSetup();
        break;
      case 'sprint-play':
        renderSprintPlay();
        break;
      case 'sprint-results':
        renderSprintResults();
        break;
    }
  }

  // ── 1. Gaming Lobby ──
  function renderLobby() {
    container.innerHTML = `
      <div class="section-header">
        <h2>✏️ Practice Arena</h2>
        <p>Choose a game mode to test your knowledge, earn XP, and level up your math ranking</p>
        <div class="section-line"></div>
      </div>

      <div class="lobby-hero">
        <!-- Timed Quiz Card -->
        <div class="lobby-btn-card card-glow" id="btn-quiz-mode">
          <div class="lobby-card-badge" style="background: rgba(139, 92, 246, 0.15); color: var(--primary-500);">SOLO PLAY</div>
          <div style="font-size: 2.2rem; margin-bottom: var(--space-4);">⏱️</div>
          <h3 style="font-family: var(--font-display); font-size: 1.25rem; margin-bottom: var(--space-2);">Timed Topic Quiz</h3>
          <p style="font-size: 0.84rem; color: var(--text-secondary); flex-grow: 1;">Configure a quiz for specific NCERT chapters and test yourself under a 30-second ticking timer. Earn up to 1000 XP.</p>
          <span style="font-weight:700; color: var(--primary-500); margin-top: var(--space-3); font-size: 0.88rem;">Play Solo →</span>
        </div>

        <!-- Formula Sprint Card -->
        <div class="lobby-btn-card card-glow" id="btn-sprint-mode" style="border-color: rgba(245, 158, 11, 0.25);">
          <div class="lobby-card-badge" style="background: rgba(245, 158, 11, 0.15); color: var(--warning);">MINI GAME</div>
          <div style="font-size: 2.2rem; margin-bottom: var(--space-4);">🏃‍♂️💨</div>
          <h3 style="font-family: var(--font-display); font-size: 1.25rem; margin-bottom: var(--space-2);">Formula Sprint</h3>
          <p style="font-size: 0.84rem; color: var(--text-secondary); flex-grow: 1;">Rapid fire formula matching! You have 15 seconds to match mathematical equations to their names. Stack multipliers for high score streaks.</p>
          <span style="font-weight:700; color: var(--warning); margin-top: var(--space-3); font-size: 0.88rem;">Start Sprint →</span>
        </div>

        <!-- Daily Challenge Card -->
        <div class="lobby-btn-card card-glow" onclick="alert('Challenge Active: Solve the board exam sample! Redirecting you...'); document.getElementById('btn-quiz-mode').click();" style="border-color: rgba(16, 185, 129, 0.25);">
          <div class="lobby-card-badge" style="background: rgba(16, 185, 129, 0.15); color: var(--success);">DAILY QUEST</div>
          <div style="font-size: 2.2rem; margin-bottom: var(--space-4);">📅</div>
          <h3 style="font-family: var(--font-display); font-size: 1.25rem; margin-bottom: var(--space-2);">Daily Challenge</h3>
          <p style="font-size: 0.84rem; color: var(--text-secondary); flex-grow: 1;">A fresh board-exam level question curated daily. Get double XP (+500 XP bonus) and secure your daily streak instantly.</p>
          <span style="font-weight:700; color: var(--success); margin-top: var(--space-3); font-size: 0.88rem;">Solve Now →</span>
        </div>

        <!-- Topic Battle Card -->
        <div class="lobby-btn-card card-glow" onclick="alert('Multiplayer Topic Battles will launch soon in CBSE prep season! Stay tuned.')" style="border-color: rgba(239, 68, 68, 0.15); opacity: 0.8;">
          <div class="lobby-card-badge" style="background: rgba(239, 68, 68, 0.15); color: var(--error);">MULTIPLAYER</div>
          <div style="font-size: 2.2rem; margin-bottom: var(--space-4);">⚔️</div>
          <h3 style="font-family: var(--font-display); font-size: 1.25rem; margin-bottom: var(--space-2);">Topic Battles</h3>
          <p style="font-size: 0.84rem; color: var(--text-secondary); flex-grow: 1;">Compete in real-time with other Class 10 students. Answer questions correctly to deal damage. Winner claims the ultimate trophy badge.</p>
          <span style="font-weight:700; color: var(--error); margin-top: var(--space-3); font-size: 0.88rem;">Locked (Coming Soon)</span>
        </div>
      </div>
    `;

    // Attach Lobby Listeners
    container.querySelector('#btn-quiz-mode')?.addEventListener('click', () => {
      activeMode = 'quiz-setup';
      renderMode();
    });
    container.querySelector('#btn-sprint-mode')?.addEventListener('click', () => {
      activeMode = 'sprint-setup';
      renderMode();
    });

    // Add Card Glow
    addMouseTrackingGlow();
  }

  // ── 2. Standard Quiz Setup ──
  function renderQuizSetup() {
    const filteredCount = questions.filter(q => {
      if (quizTopic !== 'all' && q.topicId !== quizTopic) return false;
      if (quizDifficulty !== 'all' && q.difficulty !== quizDifficulty) return false;
      return true;
    }).length;

    container.innerHTML = `
      <div class="section-header">
        <h2>⏱️ Timed Topic Quiz</h2>
        <p>Build custom practice sessions, select difficulty, and challenge your solving speed</p>
        <div class="section-line"></div>
      </div>

      <div class="card" style="max-width: 680px; margin: 0 auto; padding: var(--space-6);">
        <h3 style="font-family: var(--font-display); margin-bottom: var(--space-5);">Configure Your Session</h3>

        <!-- Topic selection -->
        <label style="display: block; font-size: 0.82rem; font-weight: 700; color: var(--text-tertiary); text-transform: uppercase; margin-bottom: var(--space-2);">1. Select Chapter Topic</label>
        <div class="filter-bar" id="lobby-topic-filters" style="margin-bottom: var(--space-4);">
          <button class="filter-chip ${quizTopic === 'all' ? 'active' : ''}" data-topic="all">All Chapters</button>
          ${topics.map(t => `<button class="filter-chip ${quizTopic === t.id ? 'active' : ''}" data-topic="${t.id}">${t.icon} ${t.name}</button>`).join('')}
        </div>

        <!-- Difficulty selection -->
        <label style="display: block; font-size: 0.82rem; font-weight: 700; color: var(--text-tertiary); text-transform: uppercase; margin-bottom: var(--space-2);">2. Set Difficulty</label>
        <div class="filter-bar" id="lobby-diff-filters" style="margin-bottom: var(--space-5);">
          <button class="filter-chip ${quizDifficulty === 'all' ? 'active' : ''}" data-diff="all">All Difficulty</button>
          <button class="filter-chip ${quizDifficulty === 'easy' ? 'active' : ''}" data-diff="easy"><span class="badge badge-easy">Easy</span></button>
          <button class="filter-chip ${quizDifficulty === 'medium' ? 'active' : ''}" data-diff="medium"><span class="badge badge-medium">Medium</span></button>
          <button class="filter-chip ${quizDifficulty === 'hard' ? 'active' : ''}" data-diff="hard"><span class="badge badge-hard">Hard</span></button>
        </div>

        <!-- Timer Toggle -->
        <div style="display: flex; align-items: center; gap: var(--space-3); padding: var(--space-4); background: var(--bg-tertiary); border-radius: var(--radius-md); margin-bottom: var(--space-6);">
          <label style="display: flex; align-items: center; gap: var(--space-3); cursor: pointer; font-size: 0.92rem; font-weight: 600;">
            <input type="checkbox" id="lobby-timer-toggle" ${quizTimerEnabled ? 'checked' : ''} style="width: 18px; height: 18px; accent-color: var(--primary-500); cursor: pointer;">
            ⏱️ Speed Run Timer Mode (30 seconds per question)
          </label>
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; gap: var(--space-4); flex-wrap: wrap;">
          <button class="btn btn-secondary" id="btn-back-lobby">✕ Quit Setup</button>
          <div style="display: flex; align-items: center; gap: var(--space-4);">
            <span style="font-size: 0.85rem; color: var(--text-tertiary); font-weight: 500;">
              ${filteredCount} questions available
            </span>
            <button class="btn btn-primary" id="btn-start-quiz" ${filteredCount === 0 ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : ''}>
              🚀 Launch Quiz
            </button>
          </div>
        </div>
      </div>
    `;

    // Attach Listeners
    container.querySelectorAll('#lobby-topic-filters .filter-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        quizTopic = btn.dataset.topic;
        renderQuizSetup();
      });
    });

    container.querySelectorAll('#lobby-diff-filters .filter-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        quizDifficulty = btn.dataset.diff;
        renderQuizSetup();
      });
    });

    const timerChk = container.querySelector('#lobby-timer-toggle');
    if (timerChk) {
      timerChk.addEventListener('change', () => { quizTimerEnabled = timerChk.checked; });
    }

    container.querySelector('#btn-back-lobby')?.addEventListener('click', () => {
      activeMode = 'lobby';
      renderMode();
    });

    container.querySelector('#btn-start-quiz')?.addEventListener('click', () => {
      // Pick up to 10 random questions
      const filtered = questions.filter(q => {
        if (quizTopic !== 'all' && q.topicId !== quizTopic) return false;
        if (quizDifficulty !== 'all' && q.difficulty !== quizDifficulty) return false;
        return true;
      });

      // Shuffles
      quizQuestions = shuffleArray(filtered).slice(0, 10);
      quizCurrentIdx = 0;
      quizScore = 0;
      quizStartTime = Date.now();
      activeMode = 'quiz-play';
      renderMode();
    });
  }

  // ── 3. Interactive Quiz play panel ──
  function renderQuizPlay() {
    if (quizCurrentIdx >= quizQuestions.length) {
      quizTotalTime = Math.round((Date.now() - quizStartTime) / 1000);
      activeMode = 'quiz-results';
      renderMode();
      return;
    }

    quizAnswered = false;
    const q = quizQuestions[quizCurrentIdx];
    const topic = topics.find(t => t.id === q.topicId);
    const progressPct = ((quizCurrentIdx) / quizQuestions.length * 100).toFixed(0);

    // Timer Loop
    if (quizTimerEnabled) {
      quizTimeLeft = 30;
      clearInterval(quizTimerInterval);
      quizTimerInterval = setInterval(() => {
        quizTimeLeft--;
        const timerEl = container.querySelector('#quiz-timer');
        if (timerEl) {
          timerEl.textContent = `⏱️ ${quizTimeLeft}s`;
          timerEl.className = 'quiz-timer' + (quizTimeLeft <= 5 ? ' danger' : quizTimeLeft <= 10 ? ' warning' : '');
        }
        if (quizTimeLeft <= 0) {
          clearInterval(quizTimerInterval);
          handleQuizAnswer(null, q);
        }
      }, 1000);
    }

    const letters = ['A', 'B', 'C', 'D'];

    container.innerHTML = `
      <div class="quiz-container" style="max-width: 740px; margin: 0 auto;">
        <div class="quiz-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-4); flex-wrap: wrap; gap: var(--space-2);">
          <div style="display: flex; align-items: center; gap: var(--space-3);">
            <span style="font-size: 0.85rem; color: var(--text-tertiary); font-weight:600;">Question ${quizCurrentIdx + 1} of ${quizQuestions.length}</span>
            ${topic ? `<span class="badge" style="background: ${topic.color}15; color: ${topic.color}; font-size: 0.72rem;">${topic.icon} ${topic.name}</span>` : ''}
            <span class="badge badge-${q.difficulty}">${q.difficulty}</span>
          </div>
          <div style="display: flex; align-items: center; gap: var(--space-3);">
            ${quizTimerEnabled ? `<span class="quiz-timer" id="quiz-timer">⏱️ 30s</span>` : ''}
            <button class="btn btn-ghost btn-sm" id="btn-quit-quiz">✕ Quit</button>
          </div>
        </div>

        <div class="quiz-progress" style="height: 6px; background: var(--bg-tertiary); border-radius: var(--radius-full); overflow: hidden; margin-bottom: var(--space-6);">
          <div class="quiz-progress-bar" style="width: ${progressPct}%; height: 100%; background: var(--primary-500);"></div>
        </div>

        <div class="card quiz-question-card" style="padding: var(--space-6); background: var(--bg-card); border-radius: var(--radius-lg);">
          <div class="quiz-question-text" style="font-size: 1.15rem; font-weight: 600; margin-bottom: var(--space-6); line-height: 1.6;">
            ${q.question}
          </div>

          ${q.type === 'mcq' ? `
            <div class="quiz-options" id="quiz-options-box" style="display: flex; flex-direction: column; gap: var(--space-3); margin-bottom: var(--space-6);">
              ${q.options.map((opt, i) => `
                <button class="quiz-option" data-index="${i}" style="display: flex; align-items: center; gap: var(--space-4); text-align: left; padding: var(--space-3) var(--space-4); border: 1px solid var(--border-light); border-radius: var(--radius-md); font-weight: 500;">
                  <span class="option-letter" style="width: 24px; height: 24px; border-radius: 50%; background: var(--bg-tertiary); display: inline-flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 700; flex-shrink: 0;">${letters[i]}</span>
                  <span>${opt}</span>
                </button>
              `).join('')}
            </div>
          ` : `
            <div style="margin-top: var(--space-4); margin-bottom: var(--space-6);">
              <input type="text" class="quiz-numerical-input" id="numerical-input" placeholder="Type your answer here..." style="width: 100%; max-width: 320px; padding: var(--space-3) var(--space-4); border-radius: var(--radius-md); border: 1px solid var(--border-light);" autocomplete="off">
            </div>
          `}

          <div style="display: flex; gap: var(--space-3); align-items: center;">
            ${q.hint ? `<button class="btn btn-ghost btn-sm" id="btn-quiz-hint">💡 Show Hint</button>` : ''}
            <button class="btn btn-primary" id="btn-check-answer" style="display: none; margin-left: auto;">Check Answer</button>
          </div>

          <div id="hint-box-container" style="display: none; margin-top: var(--space-4); padding: var(--space-3) var(--space-4); background: rgba(245, 158, 11, 0.06); border: 1px solid rgba(245, 158, 11, 0.15); border-radius: var(--radius-md); font-size: 0.88rem; color: var(--warning);">
            💡 <strong>Hint:</strong> ${q.hint}
          </div>

          <div id="solution-box-container"></div>
        </div>
      </div>
    `;

    // Render KaTeX
    if (window.renderMath) window.renderMath(container);

    // Event listeners
    container.querySelector('#btn-quit-quiz')?.addEventListener('click', () => {
      clearInterval(quizTimerInterval);
      activeMode = 'lobby';
      renderMode();
    });

    container.querySelector('#btn-quiz-hint')?.addEventListener('click', () => {
      const hb = container.querySelector('#hint-box-container');
      if (hb) hb.style.display = hb.style.display === 'none' ? 'block' : 'none';
    });

    const checkBtn = container.querySelector('#btn-check-answer');

    if (q.type === 'mcq') {
      let selectedIdx = null;
      container.querySelectorAll('#quiz-options-box .quiz-option').forEach(btn => {
        btn.addEventListener('click', () => {
          if (quizAnswered) return;
          container.querySelectorAll('#quiz-options-box .quiz-option').forEach(o => o.classList.remove('selected'));
          btn.classList.add('selected');
          selectedIdx = parseInt(btn.dataset.index);
          if (checkBtn) checkBtn.style.display = 'inline-flex';
        });
      });

      checkBtn?.addEventListener('click', () => {
        if (selectedIdx === null || quizAnswered) return;
        handleQuizAnswer(selectedIdx, q);
      });
    } else {
      const numInput = container.querySelector('#numerical-input');
      numInput?.addEventListener('input', () => {
        if (checkBtn) checkBtn.style.display = numInput.value.trim() ? 'inline-flex' : 'none';
      });
      numInput?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && numInput.value.trim() && !quizAnswered) {
          handleQuizAnswer(numInput.value.trim(), q);
        }
      });
      checkBtn?.addEventListener('click', () => {
        if (!numInput?.value.trim() || quizAnswered) return;
        handleQuizAnswer(numInput.value.trim(), q);
      });
    }
  }

  function handleQuizAnswer(userAns, q) {
    if (quizAnswered) return;
    quizAnswered = true;
    clearInterval(quizTimerInterval);

    let isCorrect = false;

    if (q.type === 'mcq') {
      isCorrect = userAns === q.answer;
      container.querySelectorAll('#quiz-options-box .quiz-option').forEach(btn => {
        const idx = parseInt(btn.dataset.index);
        btn.style.pointerEvents = 'none';
        if (idx === q.answer) btn.classList.add('correct');
        if (idx === userAns && !isCorrect) btn.classList.add('incorrect');
      });
    } else {
      const corr = String(q.answer).trim().toLowerCase();
      const user = String(userAns).trim().toLowerCase();
      isCorrect = corr === user;

      const input = container.querySelector('#numerical-input');
      if (input) {
        input.disabled = true;
        input.style.borderColor = isCorrect ? 'var(--success)' : 'var(--error)';
        if (!isCorrect) {
          input.insertAdjacentHTML('afterend', `<p style="margin-top: var(--space-2); color: var(--success); font-weight: 700;">Correct answer: ${q.answer}</p>`);
        }
      }
    }

    if (isCorrect) quizScore++;

    // Reveal Solution
    const solContainer = container.querySelector('#solution-box-container');
    if (solContainer) {
      solContainer.innerHTML = `
        <div style="margin-top: var(--space-6); padding: var(--space-5); background: ${isCorrect ? 'rgba(85, 139, 110, 0.04)' : 'rgba(203, 107, 92, 0.04)'}; border: 1px solid ${isCorrect ? 'rgba(85, 139, 110, 0.15)' : 'rgba(203, 107, 92, 0.15)'}; border-radius: var(--radius-md);">
          <h4 style="color: ${isCorrect ? 'var(--success)' : 'var(--error)'}; font-family: var(--font-display); font-size: 1rem; margin-bottom: var(--space-3);">
            ${isCorrect ? '🎉 Correct!' : '❌ Incorrect Solution'}
          </h4>
          <ol style="margin-left: var(--space-4); display: flex; flex-direction: column; gap: var(--space-2); font-size: 0.88rem; color: var(--text-secondary);">
            ${q.solution.map(step => `<li>${step}</li>`).join('')}
          </ol>
        </div>
      `;
      if (window.renderMath) window.renderMath(solContainer);
    }

    // Set check button to next
    const checkBtn = container.querySelector('#btn-check-answer');
    if (checkBtn) {
      checkBtn.textContent = quizCurrentIdx + 1 < quizQuestions.length ? 'Next Question →' : '🏁 See Results';
      checkBtn.style.display = 'inline-flex';
      checkBtn.onclick = () => {
        quizCurrentIdx++;
        renderQuizPlay();
      };
    }
  }

  // ── 4. Standard Quiz Results Page ──
  function renderQuizResults() {
    const pct = quizQuestions.length ? Math.round((quizScore / quizQuestions.length) * 100) : 0;
    const earnedXp = quizScore * 50;

    // Save result to localStorage
    storage.addQuizResult({
      topicId: quizTopic === 'all' ? 'mixed' : quizTopic,
      score: quizScore,
      total: quizQuestions.length,
      difficulty: quizDifficulty,
      timeSpent: quizTotalTime
    });

    const radius = 65;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (pct / 100) * circumference;
    const strokeColor = pct >= 80 ? 'var(--success)' : pct >= 50 ? 'var(--warning)' : 'var(--error)';

    container.innerHTML = `
      <div class="quiz-results" style="max-width: 600px; margin: 0 auto; text-align: center;">
        
        <div class="score-circle" style="position: relative; width: 160px; height: 160px; margin: 0 auto var(--space-6); display: flex; align-items: center; justify-content: center;">
          <svg width="160" height="160" viewBox="0 0 160 160">
            <circle cx="80" cy="80" r="${radius}" fill="none" stroke="var(--bg-tertiary)" stroke-width="8"/>
            <circle cx="80" cy="80" r="${radius}" fill="none" stroke="${strokeColor}" stroke-width="8"
              stroke-dasharray="${circumference}" stroke-dashoffset="${circumference}"
              stroke-linecap="round" style="transition: stroke-dashoffset 1s cubic-bezier(0.16, 1, 0.3, 1);"/>
          </svg>
          <div style="position: absolute; text-align: center;">
            <div class="score-value" style="font-family: var(--font-display); font-size: 2.2rem; font-weight: 800; color: ${strokeColor};">0%</div>
            <div style="font-size: 0.72rem; color: var(--text-tertiary); text-transform: uppercase;">Correct</div>
          </div>
        </div>

        <h2 style="font-family: var(--font-display); margin-bottom: var(--space-2);">
          ${pct >= 80 ? '🎉 Mathematics Wizard!' : pct >= 50 ? '👍 Nice Effort!' : '💪 Work Harder!'}
        </h2>
        <p style="color: var(--text-secondary); margin-bottom: var(--space-6);">
          You answered ${quizScore} out of ${quizQuestions.length} correctly in ${formatTime(quizTotalTime)}
        </p>

        <!-- XP Reward Summary -->
        <div class="card" style="padding: var(--space-4) var(--space-6); border-radius: var(--radius-lg); margin-bottom: var(--space-6); background: rgba(245, 158, 11, 0.05); border-color: rgba(245, 158, 11, 0.2);">
          <div style="font-size: 0.8rem; color: var(--text-tertiary); font-weight: 700; text-transform: uppercase;">Rewards Earned</div>
          <div style="font-family: var(--font-display); font-size: 1.8rem; font-weight: 800; color: var(--warning);">✨ +${earnedXp} XP</div>
        </div>

        <div class="stats-grid" style="grid-template-columns: repeat(3, 1fr); gap: var(--space-4); margin-bottom: var(--space-8);">
          <div class="card" style="padding: var(--space-3); text-align: center;">
            <div style="font-size: 1.5rem; font-weight:700; color: var(--primary-500);">${quizScore}/${quizQuestions.length}</div>
            <span style="font-size: 0.7rem; color: var(--text-tertiary);">Score</span>
          </div>
          <div class="card" style="padding: var(--space-3); text-align: center;">
            <div style="font-size: 1.5rem; font-weight:700; color: var(--primary-500);">${pct}%</div>
            <span style="font-size: 0.7rem; color: var(--text-tertiary);">Accuracy</span>
          </div>
          <div class="card" style="padding: var(--space-3); text-align: center;">
            <div style="font-size: 1.5rem; font-weight:700; color: var(--primary-500);">${formatTime(quizTotalTime)}</div>
            <span style="font-size: 0.7rem; color: var(--text-tertiary);">Time</span>
          </div>
        </div>

        <div style="display: flex; gap: var(--space-4); justify-content: center; flex-wrap: wrap;">
          <button class="btn btn-primary" id="btn-replay-quiz">🔄 Try Again</button>
          <button class="btn btn-secondary" id="btn-lobby-exit">✏️ Exit to Lobby</button>
        </div>
      </div>
    `;

    // Animate Circle & Count-up
    setTimeout(() => {
      const circle = container.querySelector('.quiz-results circle[stroke-linecap="round"]');
      if (circle) circle.style.strokeDashoffset = offset;

      const val = container.querySelector('.score-value');
      if (val && pct > 0) {
        let cur = 0;
        const dur = 1000;
        const start = Date.now();
        const interval = setInterval(() => {
          const el = Date.now() - start;
          if (el >= dur) {
            val.textContent = `${pct}%`;
            clearInterval(interval);
          } else {
            cur = Math.round((el / dur) * pct);
            val.textContent = `${cur}%`;
          }
        }, 16);
      }
    }, 50);

    container.querySelector('#btn-replay-quiz')?.addEventListener('click', () => {
      activeMode = 'quiz-setup';
      renderMode();
    });

    container.querySelector('#btn-lobby-exit')?.addEventListener('click', () => {
      activeMode = 'lobby';
      renderMode();
    });
  }

  // ── 5. Formula Sprint Setup ──
  function renderSprintSetup() {
    container.innerHTML = `
      <div class="sprint-lobby">
        <div class="section-header">
          <h2>🏃‍♂️💨 Formula Sprint Game</h2>
          <p>Rapid formula matching! Match equations to their names before the timer drains.</p>
          <div class="section-line"></div>
        </div>

        <div class="card" style="padding: var(--space-8); border-radius: var(--radius-lg); background: var(--bg-card); border-color: rgba(245, 158, 11, 0.2); box-shadow: var(--shadow-lg);">
          <div style="font-size: 4rem; margin-bottom: var(--space-4); animation: bounce 1.5s infinite;">⏱️⚡</div>
          <h3 style="font-family: var(--font-display); font-size: 1.6rem; margin-bottom: var(--space-4);">Game Rules</h3>
          
          <ul style="text-align: left; max-width: 420px; margin: 0 auto var(--space-6) auto; display: flex; flex-direction: column; gap: var(--space-3); font-size: 0.95rem; color: var(--text-secondary);">
            <li>⏱️ You get **15 seconds** per formula.</li>
            <li>✨ Correct matches add points and increase your **Streak Multiplier**.</li>
            <li>❌ Incorrect answers reset your multiplier streak!</li>
            <li>🏆 Play through 10 formulas and claim your final XP rewards.</li>
          </ul>

          <div style="display: flex; gap: var(--space-4); justify-content: center; flex-wrap: wrap;">
            <button class="btn btn-secondary" id="btn-sprint-quit">✕ Back to Lobby</button>
            <button class="btn btn-primary" id="btn-sprint-start" style="background: linear-gradient(135deg, var(--warning), #d47e3b); color: white; box-shadow: 0 4px 16px rgba(245, 158, 11, 0.3);">
              🎮 Play Sprint Mode
            </button>
          </div>
        </div>
      </div>
    `;

    container.querySelector('#btn-sprint-quit')?.addEventListener('click', () => {
      activeMode = 'lobby';
      renderMode();
    });

    container.querySelector('#btn-sprint-start')?.addEventListener('click', () => {
      // Pick 10 random formulas
      sprintQuestions = shuffleArray(formulas).slice(0, 10);
      sprintCurrentIdx = 0;
      sprintScore = 0;
      sprintStreak = 1;
      sprintStartTime = Date.now();
      activeMode = 'sprint-play';
      renderMode();
    });
  }

  // ── 6. Formula Sprint Gameplay ──
  function renderSprintPlay() {
    if (sprintCurrentIdx >= sprintQuestions.length) {
      sprintTotalTime = Math.round((Date.now() - sprintStartTime) / 1000);
      activeMode = 'sprint-results';
      renderMode();
      return;
    }

    sprintAnswered = false;
    const f = sprintQuestions[sprintCurrentIdx];

    // Generate options: 1 correct + 3 distractor formula names
    const distractors = formulas.filter(item => item.id !== f.id);
    const shuffledDistractors = shuffleArray(distractors).slice(0, 3);
    const options = shuffleArray([f, ...shuffledDistractors]);

    // Timer Loop
    sprintTimeLeft = 15;
    clearInterval(sprintTimerInterval);
    sprintTimerInterval = setInterval(() => {
      sprintTimeLeft -= 0.1;
      const bar = container.querySelector('#sprint-timer-fill');
      if (bar) {
        const pct = (sprintTimeLeft / 15 * 100).toFixed(1);
        bar.style.width = `${pct}%`;
      }
      if (sprintTimeLeft <= 0) {
        clearInterval(sprintTimerInterval);
        handleSprintChoice(null, f);
      }
    }, 100);

    container.innerHTML = `
      <div class="sprint-game-panel">
        <div class="sprint-score-header">
          <span style="color: var(--text-tertiary);">Match Name of Formula: ${sprintCurrentIdx + 1}/10</span>
          <span style="color: var(--warning);">⚡ Score: ${sprintScore} · Streak: x${sprintStreak}</span>
        </div>

        <div class="sprint-timer-bar">
          <div class="sprint-timer-fill" id="sprint-timer-fill"></div>
        </div>

        <div class="card sprint-question-formula">
          \\[${f.formula}\\]
        </div>

        <div class="sprint-options-grid" id="sprint-options-grid">
          ${options.map(opt => `
            <button class="sprint-opt-btn" data-id="${opt.id}">
              ❓ ${opt.name}
            </button>
          `).join('')}
        </div>
      </div>
    `;

    // Render KaTeX
    if (window.renderMath) window.renderMath(container);

    // Event listeners
    container.querySelectorAll('#sprint-options-grid .sprint-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (sprintAnswered) return;
        const chosenId = parseInt(btn.dataset.id);
        handleSprintChoice(chosenId, f);
      });
    });
  }

  function handleSprintChoice(chosenId, correctFormula) {
    if (sprintAnswered) return;
    sprintAnswered = true;
    clearInterval(sprintTimerInterval);

    const isCorrect = chosenId === correctFormula.id;

    if (isCorrect) {
      sprintScore += 100 * sprintStreak;
      sprintStreak++;
    } else {
      sprintStreak = 1; // reset streak multiplier
    }

    // Highlight correct & incorrect options
    container.querySelectorAll('#sprint-options-grid .sprint-opt-btn').forEach(btn => {
      const id = parseInt(btn.dataset.id);
      btn.style.pointerEvents = 'none';
      if (id === correctFormula.id) {
        btn.classList.add('correct');
      } else if (id === chosenId && !isCorrect) {
        btn.classList.add('incorrect');
      }
    });

    // Short pause and move next
    setTimeout(() => {
      sprintCurrentIdx++;
      renderSprintPlay();
    }, 1200);
  }

  // ── 7. Formula Sprint Results Page ──
  function renderSprintResults() {
    const earnedXp = Math.round(sprintScore / 2.5);

    // Track a mock quiz result representing game participation
    storage.addQuizResult({
      topicId: 'formulas-sprint',
      score: Math.round(sprintScore / 100),
      total: 10,
      difficulty: 'medium',
      timeSpent: sprintTotalTime
    });

    container.innerHTML = `
      <div class="sprint-lobby" style="max-width: 600px; margin: 0 auto; text-align: center;">
        <div class="card" style="padding: var(--space-8); border-radius: var(--radius-lg); background: var(--bg-card); border-color: rgba(245, 158, 11, 0.25); box-shadow: var(--shadow-lg);">
          <div style="font-size: 4rem; margin-bottom: var(--space-4);">🏁🏆</div>
          <h3 style="font-family: var(--font-display); font-size: 1.6rem; margin-bottom: var(--space-2);">Sprint Complete!</h3>
          <p style="color: var(--text-secondary); margin-bottom: var(--space-6);">You matched equations in ${formatTime(sprintTotalTime)}</p>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); margin-bottom: var(--space-6);">
            <div class="card" style="padding: var(--space-4); text-align: center;">
              <div style="font-size: 1.8rem; font-weight: 700; color: var(--warning);">${sprintScore}</div>
              <span style="font-size: 0.76rem; color: var(--text-tertiary);">Game Score</span>
            </div>
            <div class="card" style="padding: var(--space-4); text-align: center;">
              <div style="font-size: 1.8rem; font-weight: 700; color: var(--success);">✨ +${earnedXp} XP</div>
              <span style="font-size: 0.76rem; color: var(--text-tertiary);">XP Points</span>
            </div>
          </div>

          <div style="display: flex; gap: var(--space-4); justify-content: center; flex-wrap: wrap;">
            <button class="btn btn-primary" id="btn-sprint-replay" style="background: linear-gradient(135deg, var(--warning), #d47e3b); color: white;">🎮 Replay Sprint</button>
            <button class="btn btn-secondary" id="btn-sprint-exit">✏️ Exit to Lobby</button>
          </div>
        </div>
      </div>
    `;

    container.querySelector('#btn-sprint-replay')?.addEventListener('click', () => {
      activeMode = 'sprint-setup';
      renderMode();
    });

    container.querySelector('#btn-sprint-exit')?.addEventListener('click', () => {
      activeMode = 'lobby';
      renderMode();
    });
  }

  // ── Helper functions ──
  function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function formatTime(seconds) {
    if (!seconds) return '0s';
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return m > 0 ? `${m}m ${s}s` : `${s}s`;
  }

  function addMouseTrackingGlow() {
    const cards = container.querySelectorAll('.card-glow');
    container.addEventListener('mousemove', e => {
      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      }
    });
  }
}
