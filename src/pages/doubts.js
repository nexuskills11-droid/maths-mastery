// ============================================================
// Doubt Clearing Page — AI Doubt Solver & AI Tutor Chat
// ============================================================

function renderDoubts(container) {
  let isScanning = false;
  let selectedSampleImg = null;
  let chatMessages = [
    { sender: 'assistant', text: 'Hi! I am your AI Math Tutor 🤖. Ask me any doubt, paste a formula, or select a question to scan above. I can explain concepts, give step-by-step hints, or show visual diagrams!' }
  ];

  // Sample homework question templates to scan
  const sampleScans = [
    {
      id: 'scan-real',
      title: 'Real Numbers Proof',
      problem: 'Prove that \\(\\sqrt{5}\\) is irrational.',
      topicId: 'real-numbers',
      imgSrc: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=200', // Math notebook styling
      solution: `<strong>Theorem:</strong> \\(\\sqrt{5}\\) is irrational.<br><br>
<strong>Proof (by Contradiction):</strong><br>
1. Assume, to the contrary, that \\(\\sqrt{5}\\) is rational.<br>
2. Therefore, we can write \\(\\sqrt{5} = \\frac{p}{q}\\) where \\(p\\) and \\(q\\) are co-prime integers (sharing no common factors other than 1) and \\(q \\neq 0\\).<br>
3. Squaring both sides:
\\[5 = \\frac{p^2}{q^2} \\implies p^2 = 5q^2 \\quad \\text{--- (Eq 1)}\\]
4. Since \\(p^2\\) is divisible by 5, by prime theorem, \\(p\\) must also be divisible by 5. Let \\(p = 5k\\) for some integer \\(k\\).<br>
5. Substitute \\(p = 5k\\) into Eq 1:
\\[(5k)^2 = 5q^2 \\implies 25k^2 = 5q^2 \\implies q^2 = 5k^2\\]
6. This means \\(q^2\\) is divisible by 5, hence \\(q\\) must also be divisible by 5.<br>
7. Therefore, \\(p\\) and \\(q\\) both share 5 as a common factor. This **contradicts** our assumption that \\(p\\) and \\(q\\) are co-prime.<br>
8. Thus, our initial assumption is false. \\(\\sqrt{5}\\) is irrational. <span style="color: var(--success); font-weight:700;">Q.E.D.</span>`
    },
    {
      id: 'scan-quad',
      title: 'Quadratic roots',
      problem: 'Solve \\(2x^2 - 5x + 3 = 0\\) using the quadratic formula.',
      topicId: 'quadratic-equations',
      imgSrc: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1141?auto=format&fit=crop&q=80&w=200',
      solution: `<strong>Equation:</strong> \\(2x^2 - 5x + 3 = 0\\)<br><br>
<strong>Step-by-Step Solution:</strong><br>
1. Identify coefficients: \\(a = 2\\), \\(b = -5\\), \\(c = 3\\).<br>
2. Calculate the Discriminant \\(D = b^2 - 4ac\\):
\\[D = (-5)^2 - 4(2)(3) = 25 - 24 = 1\\]
Since \\(D > 0\\), we have two distinct real roots.<br>
3. Apply the Quadratic Formula:
\\[x = \\frac{-b \\pm \\sqrt{D}}{2a}\\]
4. Substitute values:
\\[x = \\frac{-(-5) \\pm \\sqrt{1}}{2(2)} = \\frac{5 \\pm 1}{4}\\]
5. Find the two roots:
- Root 1: \\(x_1 = \\frac{5 + 1}{4} = \\frac{6}{4} = 1.5\\)
- Root 2: \\(x_2 = \\frac{5 - 1}{4} = \\frac{4}{4} = 1\\)<br><br>
<strong>Answer:</strong> \\(x = 1.5\\) and \\(x = 1\\).`
    },
    {
      id: 'scan-trig',
      title: 'Trig Identity',
      problem: 'If \\(\\sin \\theta = \\frac{3}{5}\\), find the value of \\(\\tan \\theta\\).',
      topicId: 'trigonometry',
      imgSrc: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=200',
      solution: `<strong>Given:</strong> \\(\\sin \\theta = \\frac{3}{5}\\)<br><br>
<strong>Method 1: Right-Angled Triangle</strong><br>
1. Let \\(\\sin \\theta = \\frac{\\text{Opposite (BC)}}{\\text{Hypotenuse (AC)}} = \\frac{3}{5}\\). Let \\(BC = 3k\\) and \\(AC = 5k\\).<br>
2. Use Pythagoras theorem to find Adjacent (AB):
\\[AC^2 = AB^2 + BC^2 \\implies (5k)^2 = AB^2 + (3k)^2\\]
\\[25k^2 = AB^2 + 9k^2 \\implies AB^2 = 16k^2 \\implies AB = 4k\\]
3. Compute \\(\\tan \\theta\\):
\\[\\tan \\theta = \\frac{\\text{Opposite (BC)}}{\\text{Adjacent (AB)}} = \\frac{3k}{4k} = \\frac{3}{4}\\]<br>
<strong>Method 2: Trigonometric Identity</strong><br>
1. \\(\\cos^2 \\theta = 1 - \\sin^2 \\theta = 1 - \\left(\\frac{3}{5}\\right)^2 = 1 - \\frac{9}{25} = \\frac{16}{25} \\implies \\cos \\theta = \\frac{4}{5}\\).<br>
2. \\(\\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta} = \\frac{3/5}{4/5} = \\frac{3}{4}\\).`
    }
  ];

  render();

  function render() {
    const doubts = storage.getDoubts();

    container.innerHTML = `
      <div class="section-header">
        <h2>❓ AI Doubt Workspace</h2>
        <p>Instantly scan photo math questions or chat directly with your personal AI Math Tutor</p>
        <div class="section-line"></div>
      </div>

      <div style="display: grid; grid-template-columns: 1.1fr 0.9fr; gap: var(--space-8); align-items: start;">
        
        <!-- Doubt Scanner Column -->
        <div>
          <div class="card" style="padding: var(--space-6); margin-bottom: var(--space-6);">
            <h3 style="font-family: var(--font-display); margin-bottom: var(--space-3); display: flex; align-items: center; gap: var(--space-2);">
              📸 Photo Math Scanner
            </h3>
            <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: var(--space-5);">
              Drag & drop a homework photo, or choose one of our sample problem photos below to test the instant laser scanner:
            </p>

            <!-- Sample selection -->
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-3); margin-bottom: var(--space-6);">
              ${sampleScans.map(s => `
                <div class="card sample-scan-btn" data-scan-id="${s.id}" style="padding: var(--space-2); cursor: pointer; border-radius: var(--radius-md); text-align: center; border-color: ${selectedSampleImg?.id === s.id ? 'var(--primary-500)' : 'var(--border-light)'}; background: ${selectedSampleImg?.id === s.id ? 'rgba(153, 205, 216, 0.06)' : 'var(--bg-secondary)'};">
                  <img src="${s.imgSrc}" alt="${s.title}" style="height: 60px; width: 100%; object-fit: cover; border-radius: var(--radius-sm); margin-bottom: var(--space-2); opacity: 0.85;">
                  <span style="font-size: 0.72rem; font-weight: 700; display: block; line-height: 1.2;">${s.title}</span>
                </div>
              `).join('')}
            </div>

            <!-- Upload Area & Scanner -->
            <div class="scanner-dropzone" id="scanner-dropzone">
              ${isScanning ? `
                <div class="scanner-container">
                  <div class="scanner-laser"></div>
                  <img src="${selectedSampleImg.imgSrc}" class="scanner-img">
                </div>
                <div style="margin-top: var(--space-4);">
                  <div class="streak-flame" style="font-size: 1.8rem; animation: rotate 1.5s linear infinite; display: inline-block; margin-bottom: var(--space-2);">🌀</div>
                  <h4 id="scanner-status" style="font-family: var(--font-display); font-size: 1rem; color: var(--primary-500);">Scanning Question Text...</h4>
                </div>
              ` : selectedSampleImg ? `
                <div class="scanner-container">
                  <img src="${selectedSampleImg.imgSrc}" class="scanner-img" style="filter: none;">
                </div>
                <div style="margin-top: var(--space-4); display: flex; gap: var(--space-3); justify-content: center;">
                  <button class="btn btn-primary" id="trigger-scan-btn">🔍 Scan & Solve</button>
                  <button class="btn btn-secondary" id="clear-scan-btn">✕ Clear</button>
                </div>
              ` : `
                <div style="font-size: 2.5rem; margin-bottom: var(--space-2);">📤</div>
                <h4>Drag & Drop Homework Image</h4>
                <p style="font-size: 0.78rem; color: var(--text-tertiary); margin-top: 4px;">Supports JPG, PNG, or camera snap (Mock upload)</p>
              `}
            </div>
          </div>

          <!-- Solution History / Previous Doubts -->
          <div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-4);">
              <h3 style="font-family: var(--font-display); font-size: 1.25rem;">📜 Saved Doubts (${doubts.length})</h3>
              ${doubts.length > 0 ? `<button class="btn btn-ghost btn-sm" id="clear-all-doubts" style="color: var(--error);">🗑️ Clear All</button>` : ''}
            </div>

            ${doubts.length === 0 ? `
              <div class="card" style="padding: var(--space-6); text-align: center; border-radius: var(--radius-lg); background: var(--bg-card);">
                <div style="font-size: 1.8rem; margin-bottom: var(--space-2); opacity: 0.5;">💬</div>
                <p style="font-size: 0.88rem; color: var(--text-tertiary);">No questions resolved yet. Scan a sample above or submit a doubt in the AI Tutor chat!</p>
              </div>
            ` : `
              <div class="doubt-list" style="display: flex; flex-direction: column; gap: var(--space-4);">
                ${doubts.map(d => {
                  const topic = topics.find(t => t.id === d.topicId);
                  const date = new Date(d.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
                  return `
                    <div class="card" style="padding: var(--space-5); border-radius: var(--radius-lg); background: var(--bg-card);">
                      <div class="doubt-meta" style="display: flex; align-items: center; gap: var(--space-3); font-size: 0.78rem; color: var(--text-tertiary); margin-bottom: var(--space-3);">
                        <span>📅 ${date}</span>
                        ${topic ? `<span class="badge" style="background: ${topic.color}15; color: ${topic.color}; font-size: 0.72rem;">${topic.icon} ${topic.name}</span>` : ''}
                        <span class="doubt-status answered" style="margin-left: auto; color: var(--success); font-weight: 700;">✅ Solved</span>
                      </div>
                      <div class="doubt-question" style="font-weight: 600; font-size: 0.95rem; margin-bottom: var(--space-3); border-bottom: 1px solid var(--border-light); padding-bottom: var(--space-2);">
                        Q: ${escapeHtml(d.question)}
                      </div>
                      <div class="fade-in" style="padding: var(--space-4); background: rgba(85, 139, 110, 0.03); border: 1px solid rgba(85, 139, 110, 0.1); border-radius: var(--radius-md); font-size: 0.9rem; line-height: 1.6; color: var(--text-secondary);">
                        ${d.solution}
                      </div>
                      <div style="display: flex; gap: var(--space-2); margin-top: var(--space-3); justify-content: flex-end; border-top: 1px solid var(--border-light); padding-top: var(--space-3);">
                        <button class="bookmark-btn btn-ghost btn-sm ${d.bookmarked ? 'bookmarked' : ''}" data-action="bookmark" data-id="${d.id}" style="font-size: 0.82rem;">
                          ${d.bookmarked ? '⭐ Saved' : '☆ Save'}
                        </button>
                        <button class="btn btn-ghost btn-sm" data-action="delete" data-id="${d.id}" style="color: var(--error); font-size: 0.82rem;">
                          🗑️ Delete
                        </button>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            `}
          </div>
        </div>

        <!-- AI Tutor Chat Box Column -->
        <div class="card" style="padding: var(--space-5); position: sticky; top: 90px; border-radius: var(--radius-lg); background: var(--bg-card); display: flex; flex-direction: column; gap: var(--space-4);">
          <h3 style="font-family: var(--font-display); font-size: 1.15rem; margin-bottom: 2px; display: flex; align-items: center; gap: var(--space-2);">
            🤖 AI Tutor Chat
          </h3>
          <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0;">Ask doubts, requests visual proofs, or alternate methods in real-time:</p>
          
          <div class="tutor-chat-box">
            <div class="tutor-chat-messages" id="tutor-chat-messages">
              ${chatMessages.map(m => `
                <div class="tutor-msg ${m.sender === 'user' ? 'user' : 'assistant'}">
                  <div class="tutor-msg-header">${m.sender === 'user' ? 'You' : 'AI Math Tutor'}</div>
                  <div>${m.text}</div>
                </div>
              `).join('')}
            </div>

            <!-- Quick chips prompts -->
            <div class="tutor-quick-chips">
              <button class="quick-chip" data-prompt="Explain Pythagoras Theorem visually">📐 Visual Pythagoras</button>
              <button class="quick-chip" data-prompt="Give me a hint for Quadratic Formula roots">💡 Quadratic Hint</button>
              <button class="quick-chip" data-prompt="How do I calculate the Median of grouped data?">📊 Median Formula</button>
              <button class="quick-chip" data-prompt="Explain HCF vs LCM differences">🔢 HCF vs LCM</button>
            </div>

            <!-- Inputs -->
            <div class="tutor-chat-input-area">
              <input type="text" id="tutor-chat-input" placeholder="Ask your math tutor..." style="flex: 1; border-radius: var(--radius-full); padding: var(--space-2) var(--space-4);" autocomplete="off">
              <button class="btn btn-primary btn-icon" id="tutor-chat-send" style="width: 38px; height: 38px;">
                ➔
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    // Render KaTeX in solutions
    if (window.renderMath) window.renderMath(container);

    // Scroll chat to bottom
    const chatBox = container.querySelector('#tutor-chat-messages');
    if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;

    // Attach Scanner events
    container.querySelectorAll('.sample-scan-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.scanId;
        selectedSampleImg = sampleScans.find(s => s.id === id);
        render();
      });
    });

    container.querySelector('#clear-scan-btn')?.addEventListener('click', () => {
      selectedSampleImg = null;
      render();
    });

    container.querySelector('#trigger-scan-btn')?.addEventListener('click', runScanAnimation);

    // Chat events
    container.querySelector('#tutor-chat-send')?.addEventListener('click', handleChatSubmit);
    container.querySelector('#tutor-chat-input')?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleChatSubmit();
    });

    container.querySelectorAll('.quick-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        handlePromptClick(btn.dataset.prompt);
      });
    });

    // Saved doubts actions
    container.querySelector('#clear-all-doubts')?.addEventListener('click', () => {
      if (confirm('Delete all saved doubts?')) {
        const doubts = storage.getDoubts();
        doubts.forEach(d => storage.deleteDoubt(d.id));
        render();
        if (window.showToast) window.showToast('Cleared all saved doubts', 'info');
      }
    });

    container.querySelectorAll('[data-action="delete"]').forEach(btn => {
      btn.addEventListener('click', () => {
        storage.deleteDoubt(parseInt(btn.dataset.id));
        render();
        if (window.showToast) window.showToast('Doubt deleted', 'info');
      });
    });

    container.querySelectorAll('[data-action="bookmark"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        const doubt = storage.getDoubts().find(d => d.id === id);
        if (doubt) {
          storage.updateDoubt(id, { bookmarked: !doubt.bookmarked });
          render();
          if (window.showToast) window.showToast(doubt.bookmarked ? 'Bookmark removed' : 'Doubt bookmarked!', 'success');
        }
      });
    });
  }

  // ── Scanner Laser Scan Animation ──
  function runScanAnimation() {
    if (!selectedSampleImg) return;
    isScanning = true;
    render();

    const statusEl = container.querySelector('#scanner-status');
    const stages = [
      { delay: 600, text: '📸 Image Uploaded Successfully...' },
      { delay: 1200, text: '🔍 OCR scanning question text...' },
      { delay: 1800, text: '🤖 AI tutor generating step-by-step math proof...' }
    ];

    stages.forEach(stage => {
      setTimeout(() => {
        if (statusEl) statusEl.textContent = stage.text;
      }, stage.delay);
    });

    setTimeout(() => {
      // Add doubt to storage
      storage.addDoubt({
        topicId: selectedSampleImg.topicId,
        question: selectedSampleImg.problem.replace(/\\\(|\\\)|\\\[|\\\]/g, ''),
        solution: selectedSampleImg.solution,
        status: 'answered'
      });

      isScanning = false;
      selectedSampleImg = null;
      render();
      if (window.showToast) window.showToast('Solution generated successfully! Saved in history.', 'success');
    }, 2400);
  }

  // ── Conversational Chatbot Logic ──
  function handleChatSubmit() {
    const input = container.querySelector('#tutor-chat-input');
    const text = input?.value.trim();
    if (!text) return;

    input.value = '';
    chatMessages.push({ sender: 'user', text });
    render();

    // Trigger AI typing reply
    triggerTutorReply(text);
  }

  function handlePromptClick(promptText) {
    chatMessages.push({ sender: 'user', text: promptText });
    render();
    triggerTutorReply(promptText);
  }

  function triggerTutorReply(userText) {
    const chatContainer = container.querySelector('#tutor-chat-messages');
    
    // Add dynamic thinking indicator
    if (chatContainer) {
      chatContainer.insertAdjacentHTML('beforeend', `
        <div class="tutor-msg assistant" id="tutor-thinking">
          <div class="tutor-msg-header">AI Math Tutor</div>
          <div style="display: flex; gap: 4px; padding: 4px 0;">
            <span style="animation: bounce 1.2s infinite; font-size: 1.2rem; line-height: 1;">.</span>
            <span style="animation: bounce 1.2s infinite 0.2s; font-size: 1.2rem; line-height: 1;">.</span>
            <span style="animation: bounce 1.2s infinite 0.4s; font-size: 1.2rem; line-height: 1;">.</span>
          </div>
        </div>
      `);
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    // Generate response based on keywords
    let reply = '';
    const query = userText.toLowerCase();

    if (query.includes('pythagoras')) {
      reply = `<strong>Pythagoras Theorem Proof Visualized:</strong><br><br>
In a right-angled triangle \\(\\triangle ABC\\) where \\(\\angle B = 90^\\circ\\):
\\[AC^2 = AB^2 + BC^2\\]
<strong>Visual Concept:</strong> If you draw a square on each side of the triangle:
- The area of the square on the hypotenuse (\\(AC^2\\)) equals the sum of the areas of the squares on the base (\\(AB^2\\)) and height (\\(BC^2\\)).<br><br>
<em>Proof outline:</em> By drawing an altitude \\(BD \\perp AC\\), we create similar triangles:
- \\(\\triangle ADB \\sim \\triangle ABC \\implies AB^2 = AD \\cdot AC\\)
- \\(\\triangle BDC \\sim \\triangle ABC \\implies BC^2 = CD \\cdot AC\\)
Adding both: \\(AB^2 + BC^2 = AC(AD + CD) = AC^2\\). ✓`;
    } else if (query.includes('quadratic')) {
      reply = `<strong>Quadratic Formula Roots Hint:</strong><br><br>
For any equation \\(ax^2 + bx + c = 0\\):
1. First calculate the **Discriminant** \\(D = b^2 - 4ac\\).
2. If \\(D < 0\\), stop! There are no real solutions (roots are imaginary).
3. If \\(D \\ge 0\\), use the formula:
\\[x = \\frac{-b \\pm \\sqrt{D}}{2a}\\]
Example: For \\(x^2 - 5x + 6 = 0\\), \\(D = 25 - 24 = 1\\). So \\(x = \\frac{5 \\pm 1}{2}\\), giving \\(x = 3\\) and \\(x = 2\\).`;
    } else if (query.includes('median')) {
      reply = `<strong>Grouped Median Formula:</strong><br><br>
To find the median of grouped data:
\\[\\text{Median} = l + \\left( \\frac{\\frac{N}{2} - cf}{f} \\right) \\times h\\]
Where:
- \\(l\\) = lower limit of the **median class** (the class interval where cumulative frequency exceeds \\(N/2\\)).
- \\(N\\) = total frequency.
- \\(cf\\) = cumulative frequency of the **preceding class**.
- \\(f\\) = frequency of the median class.
- \\(h\\) = width of the class interval.`;
    } else if (query.includes('hcf') || query.includes('lcm')) {
      reply = `<strong>HCF vs LCM Differences:</strong><br><br>
1. **HCF (Highest Common Factor):** Product of the **smallest powers** of all common prime factors.
2. **LCM (Lowest Common Multiple):** Product of the **greatest powers** of all prime factors involved.
<br>
<strong>Crucial Property:</strong>
\\[\\text{HCF}(a, b) \\times \\text{LCM}(a, b) = a \\times b\\]
Example: For 12 and 18:
- \\(12 = 2^2 \\times 3\\)
- \\(18 = 2 \\times 3^2\\)
- \\(\\text{HCF} = 2^1 \\times 3^1 = 6\\)
- \\(\\text{LCM} = 2^2 \\times 3^2 = 36\\)
- Verify: \\(6 \\times 36 = 216\\) and \\(12 \\times 18 = 216\\). ✓`;
    } else {
      reply = `I have logged your question: <em>"${escapeHtml(userText)}"</em>.<br><br>
Here is a general mathematical hint for your query:<br>
1. Identify the chapter topics (e.g., Algebra, Geometry, Statistics).<br>
2. Write down the known coefficients or variables given in the problem.<br>
3. Recall relevant formulas from the **<a href="#/formulas">Formula Sheet</a>** page.<br>
4. Set up the equation, substitute the values, and solve systematically.<br><br>
Feel free to scan a specific photo math problem using the scanner block for a detailed proof!`;
    }

    setTimeout(() => {
      // Remove thinking indicator
      const thinkingEl = container.querySelector('#tutor-thinking');
      if (thinkingEl) thinkingEl.remove();

      chatMessages.push({ sender: 'assistant', text: reply });
      render();
    }, 1500);
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// Simple keyframe helper for typing bubble bounce in JS
if (!document.getElementById('bounce-animation-style')) {
  const style = document.createElement('style');
  style.id = 'bounce-animation-style';
  style.innerHTML = `
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-4px); }
    }
    @keyframes rotate {
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
}
