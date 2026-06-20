// ============================================================
// Home Page — Redesigned Premium Landing Page & Dashboard
// ============================================================

function renderHome(container) {
  // ── Gather dynamic data from localStorage ──
  const stats = storage.getOverallStats();
  const streak = storage.getStreak();
  const progress = storage.getProgress();
  const weakTopics = storage.getWeakTopics();
  const quizHistory = storage.getQuizHistory();

  // Calculate XP points: 20 XP per problem attempted + 30 XP per correct answer + 100 XP per streak day
  const totalXp = (stats.totalProblems - stats.totalCorrect) * 20 + stats.totalCorrect * 50 + streak.current * 100;

  // Identify strength areas (topics with accuracy >= 75%)
  const strengthAreas = topics.filter(t => {
    const acc = storage.getTopicAccuracy(t.id);
    return acc >= 75;
  });

  // Calculate total study time estimation
  const studyTimeMins = Math.round(stats.totalProblems * 1.2 + stats.totalQuizzes * 4.5 + (quizHistory.reduce((sum, h) => sum + h.timeSpent, 0) / 60));

  // ── Difficulty and XP helpers ──
  const difficultyColor = (d) => {
    switch (d) {
      case 'Easy': return 'var(--success)';
      case 'Medium': return 'var(--warning)';
      case 'Hard': return 'var(--error)';
      default: return 'var(--text-tertiary)';
    }
  };

  const getXpReward = (d) => {
    switch (d) {
      case 'Easy': return 500;
      case 'Medium': return 750;
      case 'Hard': return 1000;
      default: return 500;
    }
  };

  // ── Build Bento Cards for all 12 chapters ──
  const topicCardsHTML = topics.map((topic, index) => {
    const completion = storage.getTopicCompletionPercent(topic.id, topic.exampleCount || 4);
    const qCount = questions.filter(q => q.topicId === topic.id).length;
    const xpReward = getXpReward(topic.difficulty);
    const delay = (index * 0.05).toFixed(2);

    return `
      <article class="card topic-card card-glow" 
               style="--topic-bg-color: ${topic.color}20; animation: pageEnter 0.6s var(--ease-spring) ${delay}s both;" 
               data-topic-id="${topic.id}" role="link" tabindex="0" aria-label="View ${topic.name}">
        <div class="bento-card-header">
          <div class="topic-icon" style="background-color: ${topic.color}15; color: ${topic.color}; margin-bottom: 0;">
            ${topic.icon}
          </div>
          <div class="circular-progress-wrapper" aria-label="Topic progress: ${completion}%">
            <svg width="42" height="42" viewBox="0 0 52 52">
              <circle cx="26" cy="26" r="22" fill="none" stroke="var(--border-light)" stroke-width="4"/>
              <circle class="circular-progress-circle" cx="26" cy="26" r="22" fill="none" stroke="${topic.color}" stroke-width="4"
                stroke-dasharray="138.2" stroke-dashoffset="${138.2 - (completion / 100) * 138.2}"
                stroke-linecap="round"/>
            </svg>
            <div class="circular-progress-text" style="font-size: 0.68rem;">${completion}%</div>
          </div>
        </div>
        <h3 style="font-size: 1.15rem; margin-top: var(--space-2);">${topic.name}</h3>
        <p style="flex-grow: 1; font-size: 0.85rem; margin-bottom: var(--space-4);">${topic.description}</p>
        <div style="margin-top: auto; display: flex; flex-direction: column; gap: var(--space-2);">
          <div class="topic-card-meta" style="font-size: 0.76rem; border-top: 1px solid var(--border-light); padding-top: var(--space-2);">
            <span>📖 ${topic.chapters || 'Chapter'}</span>
            <span style="color: ${difficultyColor(topic.difficulty)}; font-weight: 600;">
              ${topic.difficulty}
            </span>
            <span>✏️ ${qCount} Quizzes</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 2px;">
            <span class="xp-reward-tag">✨ ${xpReward} XP</span>
            <span style="font-size: 0.78rem; color: var(--text-tertiary); font-weight: 500;">Practice →</span>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // ── Render Page Shell ──
  container.innerHTML = `
    <!-- ═══════════ Hero Section ═══════════ -->
    <section class="hero" aria-label="Hero Banner" style="perspective: 1000px; padding: var(--space-12) 0 var(--space-8); display: grid; grid-template-columns: 1.2fr 0.8fr; gap: var(--space-8); align-items: center; text-align: left;">
      
      <!-- Floating glassmorphic math pills -->
      <div class="math-float card" style="top: -5%; left: 35%; animation-delay: 0s; padding: var(--space-2) var(--space-4); border-radius: var(--radius-full); font-size: 1.2rem; backdrop-filter: blur(8px); font-weight: bold; color: var(--primary-500);">\\(x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\)</div>
      <div class="math-float card" style="top: 30%; left: -5%; animation-delay: 1.5s; padding: var(--space-2) var(--space-3); border-radius: var(--radius-full); font-size: 1.3rem; backdrop-filter: blur(8px); color: var(--accent-600);">\\(\\sin^2\\theta + \\cos^2\\theta = 1\\)</div>
      <div class="math-float card" style="bottom: 5%; left: 40%; animation-delay: 3s; padding: var(--space-2) var(--space-3); border-radius: var(--radius-full); font-size: 1.2rem; backdrop-filter: blur(8px); color: var(--success);">\\(a_n = a + (n-1)d\\)</div>
      
      <div>
        <!-- Badge -->
        <div class="hero-badge" style="animation: pageEnter 0.6s var(--ease-spring) both;">
          <span>✨</span>
          <span>Future of Math Education</span>
        </div>

        <!-- Main heading with gradient text -->
        <h1 style="animation: pageEnter 0.6s var(--ease-spring) 0.1s both; text-align: left; font-size: clamp(2.5rem, 5vw, 3.8rem);">
          Master Class 10<br><span style="background: linear-gradient(135deg, var(--primary-500), var(--accent-500)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Mathematics with AI</span>
        </h1>

        <!-- Subtitle -->
        <p style="animation: pageEnter 0.6s var(--ease-spring) 0.2s both; margin: 0 0 var(--space-8); text-align: left; max-width: 540px;">
          Learn concepts, solve doubts, practice questions, and score higher with your personal AI Math Tutor. Interactive visual proofs and gamified tracking keep you learning daily!
        </p>

        <!-- CTA buttons -->
        <div class="hero-actions" style="animation: pageEnter 0.6s var(--ease-spring) 0.3s both; justify-content: flex-start;">
          <a href="#/topics" class="btn btn-primary btn-lg" aria-label="Start learning topics" style="font-size: 1.05rem; padding: var(--space-3) var(--space-8); border-radius: var(--radius-md);">
            🚀 Start Learning Free
          </a>
          <button id="hero-watch-demo" class="btn btn-secondary btn-lg" aria-label="Watch demo" style="font-size: 1.05rem; padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);">
            🎬 Watch Demo
          </button>
        </div>
      </div>

      <!-- Hero Visuals Column -->
      <div style="animation: pageEnter 0.6s var(--ease-spring) 0.4s both;">
        <div class="card" style="padding: var(--space-5); border-radius: var(--radius-lg); background: linear-gradient(135deg, var(--bg-card), rgba(153, 205, 216, 0.04)); border: 1px solid var(--border-medium); box-shadow: var(--shadow-lg); width: 100%; max-width: 360px; margin-left: auto;">
          <h3 style="font-size: 1rem; margin-bottom: var(--space-3); display: flex; align-items: center; gap: var(--space-2); color: var(--primary-500);">
            📐 Quadratic Equation Visualizer
          </h3>
          
          <!-- Miniature Dynamic Graph Canvas -->
          <div style="position: relative; border-radius: var(--radius-sm); overflow: hidden; background: var(--bg-primary); border: 1px solid var(--border-light); margin-bottom: var(--space-4);">
            <canvas id="hero-graph" width="310" height="130" style="display: block; width: 100%; height: 130px;"></canvas>
          </div>

          <!-- Dynamic solver form -->
          <div style="display: flex; gap: var(--space-2); align-items: center; margin-bottom: var(--space-3);">
            <div style="flex: 1; text-align: center;">
              <label style="font-size: 0.65rem; color: var(--text-tertiary); display: block; font-weight: 700;">a</label>
              <input type="number" id="quad-a" value="1" style="width: 100%; padding: 4px; font-size: 0.8rem; text-align: center; border-radius: 6px;">
            </div>
            <div style="flex: 1; text-align: center;">
              <label style="font-size: 0.65rem; color: var(--text-tertiary); display: block; font-weight: 700;">b</label>
              <input type="number" id="quad-b" value="-2" style="width: 100%; padding: 4px; font-size: 0.8rem; text-align: center; border-radius: 6px;">
            </div>
            <div style="flex: 1; text-align: center;">
              <label style="font-size: 0.65rem; color: var(--text-tertiary); display: block; font-weight: 700;">c</label>
              <input type="number" id="quad-c" value="-3" style="width: 100%; padding: 4px; font-size: 0.8rem; text-align: center; border-radius: 6px;">
            </div>
            <button id="quad-solve-btn" class="btn btn-primary btn-sm" style="padding: 6px 12px; border-radius: 6px; margin-top: 12px; font-size: 0.8rem;">Solve</button>
          </div>

          <div id="quad-solution-output" style="font-size: 0.8rem; line-height: 1.4; color: var(--text-secondary); background: rgba(0,0,0,0.02); padding: var(--space-2); border-radius: 6px; font-family: var(--font-mono); border: 1px solid var(--border-light);">
            Roots of \\(x^2 - 2x - 3 = 0\\):<br>
            <span style="color: var(--success); font-weight: 700;">x = 3, x = -1</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ Personalised Dashboard Bento ═══════════ -->
    <section aria-label="Student Learning Dashboard" style="margin-top: var(--space-8);">
      <div class="section-header" style="animation: pageEnter 0.6s var(--ease-spring) 0.5s both;">
        <h2>⚡ Your Mastery Command Center</h2>
        <p>Pick up where you left off, review recommendations, and claim your daily XP rewards!</p>
        <div class="section-line"></div>
      </div>

      <div class="bento-grid">
        <!-- Streak widget -->
        <div class="card bento-span-2" style="animation: pageEnter 0.6s var(--ease-spring) 0.6s both; display: flex; flex-direction: row; align-items: center; gap: var(--space-6); background: linear-gradient(135deg, var(--bg-card), rgba(239, 68, 68, 0.03)); border-color: rgba(239, 68, 68, 0.15);">
          <div class="streak-ring-wrapper">
            <svg width="90" height="90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="var(--border-light)" stroke-width="6"/>
              <circle class="streak-ring-ring ${streak.current > 0 ? 'streak-active-day' : ''}" cx="50" cy="50" r="40" fill="none" stroke="var(--error)" stroke-width="6"
                stroke-dasharray="251.2" stroke-dashoffset="${251.2 - Math.min(streak.current, 7) / 7 * 251.2}"
                stroke-linecap="round"/>
            </svg>
            <div class="streak-flame" style="position: absolute; font-size: 2.2rem; transform: scale(${streak.current > 0 ? 1 : 0.8}); filter: ${streak.current > 0 ? 'none' : 'grayscale(1)'}">🔥</div>
          </div>
          <div>
            <h3 style="font-family: var(--font-display); font-size: 1.4rem; margin-bottom: 2px;">Daily Streak: ${streak.current} Days</h3>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: var(--space-3);">Keep the flame burning! Complete 5 problems today to secure your streak.</p>
            <div style="display: flex; gap: var(--space-2);">
              ${['M','T','W','T','F','S','S'].map((day, i) => {
                const isActive = streak.current > i; 
                const bg = isActive ? 'var(--error)' : 'var(--bg-tertiary)';
                const color = isActive ? 'white' : 'var(--text-tertiary)';
                return `<span style="width: 26px; height: 26px; border-radius: 50%; background: ${bg}; color: ${color}; display: inline-flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 700;">${day}</span>`;
              }).join('')}
            </div>
          </div>
        </div>

        <!-- XP & Level Widget -->
        <div class="card" style="animation: pageEnter 0.6s var(--ease-spring) 0.65s both; justify-content: center; background: linear-gradient(135deg, var(--bg-card), rgba(245, 158, 11, 0.03));">
          <div style="font-size: 0.82rem; color: var(--text-tertiary); font-weight: 700; text-transform: uppercase;">Total Rewards</div>
          <div style="font-family: var(--font-display); font-size: 2.4rem; font-weight: 800; color: var(--warning); margin-bottom: 2px;">
            ✨ ${totalXp} <span style="font-size: 1.1rem; font-weight: 600; color: var(--text-secondary);">XP</span>
          </div>
          <div style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: var(--space-2);">Level ${Math.floor(totalXp / 1000) + 1} Scholar</div>
          <div style="height: 6px; background: var(--bg-tertiary); border-radius: var(--radius-full); overflow: hidden;">
            <div style="width: ${(totalXp % 1000) / 10}%; height: 100%; background: var(--warning); border-radius: var(--radius-full);"></div>
          </div>
          <span style="font-size: 0.7rem; color: var(--text-tertiary); margin-top: 4px; display: block; text-align: right;">${1000 - (totalXp % 1000)} XP to next Level</span>
        </div>

        <!-- Study Time Widget -->
        <div class="card" style="animation: pageEnter 0.6s var(--ease-spring) 0.7s both; justify-content: center; background: linear-gradient(135deg, var(--bg-card), rgba(59, 140, 156, 0.03));">
          <div style="font-size: 0.82rem; color: var(--text-tertiary); font-weight: 700; text-transform: uppercase;">Study Time</div>
          <div style="font-family: var(--font-display); font-size: 2.4rem; font-weight: 800; color: var(--primary-500); margin-bottom: 2px;">
            ⏱️ ${studyTimeMins} <span style="font-size: 1.1rem; font-weight: 600; color: var(--text-secondary);">mins</span>
          </div>
          <p style="font-size: 0.82rem; color: var(--text-secondary); margin: 0;">Calculated from active solving times & concept reads.</p>
        </div>

        <!-- Weak & Strength Areas -->
        <div class="card bento-span-2" style="animation: pageEnter 0.6s var(--ease-spring) 0.75s both; justify-content: space-between; background: linear-gradient(135deg, var(--bg-card), rgba(16, 185, 129, 0.02));">
          <h3 style="font-family: var(--font-display); font-size: 1.2rem; margin-bottom: var(--space-4);">🎯 Learning Analytics Summary</h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); width: 100%;">
            <div>
              <span style="font-size: 0.78rem; font-weight: 700; color: var(--error); display: block; margin-bottom: var(--space-2);">⚠️ FOCUS TOPICS (Accuracy < 70%)</span>
              ${weakTopics.length === 0 ? `
                <div style="font-size: 0.82rem; color: var(--text-tertiary); padding: var(--space-2); background: rgba(0,0,0,0.01); border-radius: 8px;">No weak areas detected! Take more quizzes.</div>
              ` : `
                <div style="display: flex; flex-direction: column; gap: var(--space-2);">
                  ${weakTopics.slice(0, 2).map(wt => {
                    const t = topics.find(tp => tp.id === wt.topicId);
                    return `<a href="#/topic/${wt.topicId}" style="display: flex; justify-content: space-between; padding: 6px 10px; background: rgba(239, 68, 68, 0.05); border-radius: 6px; font-size: 0.82rem; color: var(--error); font-weight: 600;"><span>${t ? t.icon + ' ' + t.name : wt.topicId}</span><span>${wt.accuracy}%</span></a>`;
                  }).join('')}
                </div>
              `}
            </div>
            <div>
              <span style="font-size: 0.78rem; font-weight: 700; color: var(--success); display: block; margin-bottom: var(--space-2);">🏆 STRENGTHS (Accuracy >= 75%)</span>
              ${strengthAreas.length === 0 ? `
                <div style="font-size: 0.82rem; color: var(--text-tertiary); padding: var(--space-2); background: rgba(0,0,0,0.01); border-radius: 8px;">Keep solving quizzes to unlock strengths!</div>
              ` : `
                <div style="display: flex; flex-direction: column; gap: var(--space-2);">
                  ${strengthAreas.slice(0, 2).map(t => {
                    const acc = storage.getTopicAccuracy(t.id);
                    return `<div style="display: flex; justify-content: space-between; padding: 6px 10px; background: rgba(16, 185, 129, 0.05); border-radius: 6px; font-size: 0.82rem; color: var(--success); font-weight: 600;"><span>${t.icon} ${t.name}</span><span>${acc}%</span></div>`;
                  }).join('')}
                </div>
              `}
            </div>
          </div>
        </div>

        <!-- Daily Checklist Goals -->
        <div class="card bento-span-2" style="animation: pageEnter 0.6s var(--ease-spring) 0.8s both; background: linear-gradient(135deg, var(--bg-card), rgba(139, 92, 246, 0.02));">
          <h3 style="font-family: var(--font-display); font-size: 1.2rem; margin-bottom: var(--space-3);">📋 Daily Quests</h3>
          <div style="display: flex; flex-direction: column; gap: var(--space-3);">
            <label style="display: flex; align-items: center; gap: var(--space-3); font-size: 0.88rem; cursor: pointer;">
              <input type="checkbox" checked disabled style="width: 18px; height: 18px; accent-color: var(--primary-500);">
              <span style="text-decoration: line-through; color: var(--text-tertiary);">Log in today (+100 XP)</span>
            </label>
            <label style="display: flex; align-items: center; gap: var(--space-3); font-size: 0.88rem; cursor: pointer;">
              <input type="checkbox" ${stats.totalQuizzes > 0 ? 'checked disabled' : ''} id="goal-quiz-check" style="width: 18px; height: 18px; accent-color: var(--primary-500);">
              <span style="${stats.totalQuizzes > 0 ? 'text-decoration: line-through; color: var(--text-tertiary);' : ''}">Complete 1 timed quiz in the practice arena (+250 XP)</span>
            </label>
            <label style="display: flex; align-items: center; gap: var(--space-3); font-size: 0.88rem; cursor: pointer;">
              <input type="checkbox" id="goal-doubt-check" style="width: 18px; height: 18px; accent-color: var(--primary-500);">
              <span>Solve a tricky problem using AI Doubt Scanner (+300 XP)</span>
            </label>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ Learning Modules (12 chapters) ═══════════ -->
    <section aria-label="Learning Modules" style="margin-top: var(--space-16);">
      <div class="section-header">
        <h2>📚 Class 10 NCERT Chapter Modules</h2>
        <p>Master all 12 core mathematical subjects step by step, earn achievements, and prepare for your boards.</p>
        <div class="section-line"></div>
      </div>

      <div class="bento-grid">
        ${topicCardsHTML}
      </div>
    </section>

    <!-- ═══════════ Student Success Section ═══════════ -->
    <section aria-label="Student Success Stories" style="margin-top: var(--space-16); padding: var(--space-8) 0;">
      <div class="section-header">
        <h2>🏆 Student Success Stories</h2>
        <p>Real results from Class 10 students who went from math anxiety to board toppers.</p>
        <div class="section-line"></div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--space-6);">
        <!-- Student 1 -->
        <div class="card" style="padding: var(--space-6); background: var(--bg-card); position: relative; border-radius: var(--radius-lg);">
          <div style="display: flex; align-items: center; gap: var(--space-4); margin-bottom: var(--space-4);">
            <div style="width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, var(--primary-400), var(--primary-600)); display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 1.2rem;">RS</div>
            <div>
              <h4 style="margin: 0; font-family: var(--font-display); font-size: 1.05rem;">Rohan Sharma</h4>
              <span style="font-size: 0.78rem; color: var(--text-tertiary);">CBSE Board 2026 Topper (98/100 Math)</span>
            </div>
          </div>
          <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; font-style: italic;">
            "The AI Doubt Solver was my savior. Whenever I got stuck on past year questions late at night, I would just type it in and get instant visual steps. The gamified streak kept me solving at least 5 questions every single day!"
          </p>
          <div class="before-after-card" style="padding: var(--space-3) var(--space-4); margin-top: var(--space-4);">
            <div class="comparison-stat">
              <span class="comp-val before" style="font-size: 1.5rem;">62%</span>
              <span class="comp-lbl" style="font-size: 0.7rem;">Mock Score</span>
            </div>
            <div style="font-size: 1.2rem; color: var(--text-tertiary);">→</div>
            <div class="comparison-stat">
              <span class="comp-val after" style="font-size: 1.5rem;">98%</span>
              <span class="comp-lbl" style="font-size: 0.7rem;">Final Board Exam</span>
            </div>
          </div>
        </div>

        <!-- Student 2 -->
        <div class="card" style="padding: var(--space-6); background: var(--bg-card); position: relative; border-radius: var(--radius-lg);">
          <div style="display: flex; align-items: center; gap: var(--space-4); margin-bottom: var(--space-4);">
            <div style="width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, var(--accent-400), var(--accent-600)); display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 1.2rem;">AK</div>
            <div>
              <h4 style="margin: 0; font-family: var(--font-display); font-size: 1.05rem;">Ananya Kothari</h4>
              <span style="font-size: 0.78rem; color: var(--text-tertiary);">ICSE Board Topper (99/100 Math)</span>
            </div>
          </div>
          <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; font-style: italic;">
            "Formula Sprint was so addictive! I used to play it in the bus ride to school. It helped me memorize all trigonometry identities and surface area formulas without boring rote learning. Highly recommend this platform."
          </p>
          <div class="before-after-card" style="padding: var(--space-3) var(--space-4); margin-top: var(--space-4);">
            <div class="comparison-stat">
              <span class="comp-val before" style="font-size: 1.5rem;">55%</span>
              <span class="comp-lbl" style="font-size: 0.7rem;">Mock Score</span>
            </div>
            <div style="font-size: 1.2rem; color: var(--text-tertiary);">→</div>
            <div class="comparison-stat">
              <span class="comp-val after" style="font-size: 1.5rem;">99%</span>
              <span class="comp-lbl" style="font-size: 0.7rem;">Final Board Exam</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ Parent Dashboard Preview ═══════════ -->
    <section aria-label="Parent Hub Preview" style="margin-top: var(--space-12); margin-bottom: var(--space-16);">
      <div class="parent-dashboard-card">
        <div style="display: flex; align-items: center; gap: var(--space-4); margin-bottom: var(--space-6); flex-wrap: wrap;">
          <div style="background-color: rgba(59, 140, 156, 0.1); color: var(--primary-500); font-size: 2.2rem; width: 64px; height: 64px; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center;">
            👨‍👩‍👦
          </div>
          <div>
            <h3 style="font-family: var(--font-display); font-size: 1.5rem; margin-bottom: 2px;">Parent Connect Portal</h3>
            <p style="font-size: 0.88rem; color: var(--text-secondary); margin: 0;">Weekly performance reports, learning analytics, and strengths review for parents.</p>
          </div>
          <button class="btn btn-secondary btn-sm" style="margin-left: auto;" onclick="alert('This triggers email updates and links the parents portal. Full configuration is available in Profile Settings.')">
            ⚙️ Link Parent Account
          </button>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: var(--space-5); margin-top: var(--space-4);">
          <div style="padding: var(--space-4); background: var(--bg-secondary); border-radius: var(--radius-md); border: 1px solid var(--border-light);">
            <div style="font-size: 0.82rem; color: var(--text-tertiary); font-weight: 700; text-transform: uppercase;">Weekly Study Consistency</div>
            <div style="font-size: 1.3rem; font-weight: 700; color: var(--success); margin: 6px 0 2px;">92% On Track</div>
            <span style="font-size: 0.78rem; color: var(--text-secondary);">Your child has met the daily problem goal 6 out of 7 days this week.</span>
          </div>

          <div style="padding: var(--space-4); background: var(--bg-secondary); border-radius: var(--radius-md); border: 1px solid var(--border-light);">
            <div style="font-size: 0.82rem; color: var(--text-tertiary); font-weight: 700; text-transform: uppercase;">Predicted Board score</div>
            <div style="font-size: 1.3rem; font-weight: 700; color: var(--primary-500); margin: 6px 0 2px;">88–92% Range</div>
            <span style="font-size: 0.78rem; color: var(--text-secondary);">Calculated from average quiz accuracies. Up +4% from last week.</span>
          </div>

          <div style="padding: var(--space-4); background: var(--bg-secondary); border-radius: var(--radius-md); border: 1px solid var(--border-light);">
            <div style="font-size: 0.82rem; color: var(--text-tertiary); font-weight: 700; text-transform: uppercase;">Recommended Focus</div>
            <div style="font-size: 1.3rem; font-weight: 700; color: var(--warning); margin: 6px 0 2px;">Surface Areas</div>
            <span style="font-size: 0.78rem; color: var(--text-secondary);">Requires revision. Let child solve 5 easy practice problems in Surface Areas.</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ Watch Demo Video Modal ═══════════ -->
    <div id="demo-modal" class="search-overlay" role="dialog" aria-label="Demo Video Walkthrough" style="align-items: center; justify-content: center;">
      <div class="card" style="width: 100%; max-width: 640px; margin: 0 var(--space-4); padding: var(--space-6); background: var(--bg-secondary); border-radius: var(--radius-lg); position: relative;">
        <button id="close-demo-modal" style="position: absolute; top: var(--space-4); right: var(--space-4); font-size: 1.5rem; line-height: 1; cursor: pointer;">✕</button>
        <h3 style="font-family: var(--font-display); margin-bottom: var(--space-4); font-size: 1.4rem;">🎬 Math Mastery 10 Platform Walkthrough</h3>
        
        <!-- Mock Video Frame -->
        <div style="background: #000; aspect-ratio: 16/9; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative; border-radius: var(--radius-md); overflow: hidden; margin-bottom: var(--space-4);">
          <div style="text-align: center; color: white; padding: var(--space-4); z-index: 2;">
            <div style="font-size: 3rem; margin-bottom: var(--space-2); cursor: pointer; animation: pulse 2s infinite;" id="demo-play-icon">▶️</div>
            <h4 style="margin: 0; font-size: 1.1rem;">Interactive Demo Mode</h4>
            <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 4px;">Click play to trigger the interactive platform tour</p>
          </div>
          <!-- Grid lines for futuristic style -->
          <div style="position: absolute; inset: 0; opacity: 0.15; background: linear-gradient(rgba(153,205,216,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(153,205,216,0.1) 1px, transparent 1px); background-size: 20px 20px;"></div>
        </div>

        <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
          Math Mastery 10 offers NCERT alignment with AI integrations. In this walkthrough, explore the AI Doubt Solver scanner, the gamified quizzes in our Practice Arena, the Formula Sprint game, and the parental progress preview report.
        </p>
      </div>
    </div>
  `;

  // ── Watch Demo Modal Logic ──
  const demoModal = container.querySelector('#demo-modal');
  container.querySelector('#hero-watch-demo')?.addEventListener('click', () => {
    demoModal.classList.add('open');
  });
  container.querySelector('#close-demo-modal')?.addEventListener('click', () => {
    demoModal.classList.remove('open');
  });
  demoModal.addEventListener('click', (e) => {
    if (e.target === demoModal) demoModal.classList.remove('open');
  });
  container.querySelector('#demo-play-icon')?.addEventListener('click', () => {
    alert("Starting interactive tour! We will redirect you to the topics page first.");
    demoModal.classList.remove('open');
    window.location.hash = '#/topics';
  });

  // ── Quadratic Equations Hero Widget Solver and Graph ──
  const quadAInput = container.querySelector('#quad-a');
  const quadBInput = container.querySelector('#quad-b');
  const quadCInput = container.querySelector('#quad-c');
  const quadSolveBtn = container.querySelector('#quad-solve-btn');
  const quadOutput = container.querySelector('#quad-solution-output');
  const canvas = container.querySelector('#hero-graph');

  function solveAndDrawQuadratic() {
    const a = parseFloat(quadAInput.value) || 1;
    const b = parseFloat(quadBInput.value) || 0;
    const c = parseFloat(quadCInput.value) || 0;

    const D = b * b - 4 * a * c;
    let rootsText = '';

    if (D > 0) {
      const r1 = ((-b + Math.sqrt(D)) / (2 * a)).toFixed(2);
      const r2 = ((-b - Math.sqrt(D)) / (2 * a)).toFixed(2);
      rootsText = `Roots of \\(${a !== 1 ? a : ''}x^2 ${b >= 0 ? '+' + b : b}x ${c >= 0 ? '+' + c : c} = 0\\):<br><span style="color: var(--success); font-weight: 700;">x = ${r1}, x = ${r2}</span>`;
    } else if (D === 0) {
      const r = (-b / (2 * a)).toFixed(2);
      rootsText = `Roots of \\(${a !== 1 ? a : ''}x^2 ${b >= 0 ? '+' + b : b}x ${c >= 0 ? '+' + c : c} = 0\\):<br><span style="color: var(--success); font-weight: 700;">Equal Roots: x = ${r}</span>`;
    } else {
      rootsText = `Roots of \\(${a !== 1 ? a : ''}x^2 ${b >= 0 ? '+' + b : b}x ${c >= 0 ? '+' + c : c} = 0\\):<br><span style="color: var(--error); font-weight: 700;">No Real Roots (D < 0)</span>`;
    }

    quadOutput.innerHTML = rootsText;
    if (window.renderMath) window.renderMath(quadOutput);

    // Redraw graph
    drawParabola(a, b, c);
  }

  function drawParabola(a, b, c) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    // Draw Grid
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--border-light').trim() || 'rgba(0,0,0,0.06)';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 20) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
    }
    for (let y = 0; y < height; y += 20) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
    }

    // Axes
    const centerX = width / 2;
    const centerY = height / 2;
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-tertiary').trim() || 'rgba(0,0,0,0.2)';
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(0, centerY); ctx.lineTo(width, centerY); ctx.stroke(); // X-Axis
    ctx.beginPath(); ctx.moveTo(centerX, 0); ctx.lineTo(centerX, height); ctx.stroke(); // Y-Axis

    // Plot Parabola
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--primary-500').trim() || '#8b5cf6';
    ctx.lineWidth = 2.5;
    ctx.beginPath();

    const scaleX = 15; // pixels per unit
    const scaleY = 15;

    let started = false;
    for (let px = 0; px < width; px++) {
      const x = (px - centerX) / scaleX;
      const y = a * x * x + b * x + c;
      const py = centerY - y * scaleY;

      if (py >= 0 && py <= height) {
        if (!started) {
          ctx.moveTo(px, py);
          started = true;
        } else {
          ctx.lineTo(px, py);
        }
      }
    }
    ctx.stroke();
  }

  // Initial solve and drawing
  setTimeout(() => {
    solveAndDrawQuadratic();
  }, 100);

  quadSolveBtn?.addEventListener('click', solveAndDrawQuadratic);

  // ── Add Mouse Tracking for Card Glow Effect ──
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

  // ── Attach click & keyboard listeners to topic cards ──
  const topicCards = container.querySelectorAll('.topic-card[data-topic-id]');
  topicCards.forEach(card => {
    const topicId = card.getAttribute('data-topic-id');

    card.addEventListener('click', () => {
      window.location.hash = `#/topic/${topicId}`;
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.location.hash = `#/topic/${topicId}`;
      }
    });
  });

  // ── Render KaTeX math ──
  if (window.renderMath) window.renderMath(container);
}
