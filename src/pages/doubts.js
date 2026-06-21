// ============================================================
// Doubt Clearing Page — AI Doubt Solver & AI Tutor Chat
// ============================================================

function renderDoubts(container) {
  let isScanning = false;
  let selectedSampleImg = null;
  let isCameraActive = false;
  let cameraStream = null;
  let ocrProgressText = '';
  let ocrResultText = '';
  let activeTypeFilter = 'all';
  let chatMessages = [
    { sender: 'assistant', text: 'Hi! I am your AI Math Tutor 🤖. Ask me any doubt, paste a formula, or select a question to scan above. I can explain concepts, give step-by-step hints, or show visual diagrams!' }
  ];

  const sampleScans = [
    {
      id: 'scan-real',
      title: 'Real Numbers Proof',
      problem: 'Prove that \\(\\sqrt{5}\\) is irrational.',
      topicId: 'real-numbers',
      questionType: 'Short Answer',
      imgSrc: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMTUwIiB2aWV3Qm94PSIwIDAgMjAwIDE1MCI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxNTAiIGZpbGw9IiMyZDM3NDgiIHJ4PSI4Ii8+PHBhdGggZD0iTTAgMjBoMjAwTTAgMTMwaDIwMCIgc3Ryb2tlPSIjNGE1NTY4IiBzdHJva2Utd2lkdGg9IjEiLz48dGV4dCB4PSIxNSIgeT0iNDUiIGZpbGw9IiNhMGFlYzAiIGZvbnQtZmFtaWx5PSJDb3VyaWVyIE5ldywgbW9ub3NwYWNlIiBmb250LXNpemU9IjEyIj5OQ0VSVCBDbGFzcyAxMDwvdGV4dD48dGV4dCB4PSIxNSIgeT0iNzAiIGZpbGw9IiNlY2M5NGIiIGZvbnQtZmFtaWx5PSJHZW9yZ2lhLCBzZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiPlByb3ZlIHRoYXQg4oiaNTwvdGV4dD48dGV4dCB4PSIxNSIgeT0iOTUiIGZpbGw9IiNlY2M5NGIiIGZvbnQtZmFtaWx5PSJHZW9yZ2lhLCBzZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiPmlzIGlycmF0aW9uYWwuPC90ZXh0PjxjaXJjbGUgY3g9IjE3MCIgY3k9IjQwIiByPSIxMCIgZmlsbD0iIzMxOTc5NSIgb3BhY2l0eT0iMC4zIi8+PC9zdmc+',
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
      questionType: 'Short Answer',
      imgSrc: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMTUwIiB2aWV3Qm94PSIwIDAgMjAwIDE1MCI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxNTAiIGZpbGw9IiMxYTIwMmMiIHJ4PSI4Ii8+PHBhdGggZD0iTTIwIDB2MTUwTTE4MCAwdjE1MCIgc3Ryb2tlPSIjMmQzNzQ4IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjQiLz48dGV4dCB4PSIzMCIgeT0iNDUiIGZpbGw9IiM3MTgwOTYiIGZvbnQtZmFtaWx5PSJDb3VyaWVyIE5ldywgbW9ub3NwYWNlIiBmb250LXNpemU9IjEyIj5Tb2x2ZSBFcXVhdGlvbjo8L3RleHQ+PHRleHQgeD0iMzAiIHk9Ijc1IiBmaWxsPSIjZjZhZDU1IiBmb250LWZhbWl5PSJHZW9yZ2lhLCBzZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiPjJ4XjIgLSA1eCArIDMgPSAwPC90ZXh0Pjx0ZXh0IHg9IjMwIiB5PSIxMDUiIGZpbGw9IiM0ZmQxYzUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIj51c2luZyBmb3JtdWxhIG1ldGhvZDwvdGV4dD48L3N2Zz4=',
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
      questionType: 'Short Answer',
      imgSrc: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMTUwIiB2aWV3Qm94PSIwIDAgMjAwIDE1MCI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxNTAiIGZpbGw9IiNlYmY4ZmYiIHJ4PSI4Ii8+PHBhdGggZD0iTTAgMzBoMjAwTTAgNjBoMjAwTTAgOTBoMjAwTTAgMTIwaDIwME00MCAwdjE1ME04MCAwdjE1ME0xMjAgMHYxNTBNMTYwIDB2MTUwIiBzdHJva2U9IiNiZWUzZjgiIHN0cm9rZS13aWR0aD0iMC41Ii8+PHRleHQgeD0iMTUiIHk9IjQwIiBmaWxsPSIjNGE1NTY4IiBmb250LWZhbWl5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIj5Vcmlnb25vbWV0cnkgRG91YnQ8L3RleHQ+PHRleHQgeD0iMTUiIHk9Ijc1IiBmaWxsPSIjMmI2Y2IwIiBmb250LWZhbWl5PSJHZW9yZ2lhLCBzZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiPnNpbiDOuSA9IDMvNTwvdGV4dD48dGV4dCB4PSIxOSIgeT0iMTA1IiBmaWxsPSIjMmI2Y2IwIiBmb250LWZhbWl5PSJHZW9yZ2lhLCBzZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiPkZpbmQgdGFuIM64PC90ZXh0Pjwvc3ZnPg==',
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
    },
    {
      id: 'scan-mcq',
      title: 'Discriminant MCQ',
      problem: 'The discriminant of the quadratic equation 2x^2 - 4x + 3 = 0 is:\n(a) -8\n(b) 8\n(c) 4\n(d) -4',
      topicId: 'quadratic-equations',
      questionType: 'Multiple Choice (MCQ)',
      imgSrc: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMTUwIiB2aWV3Qm94PSIwIDAgMjAwIDE1MCI+CiAgPHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxNTAiIGZpbGw9IiMyZDM3NDgiIHJ4PSI4Ii8+CiAgPHRleHQgeD0iMTUiIHk9IjMwIiBmaWxsPSIjYTBhZWMwIiBmb250LWZhbWl5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIj5NQ1EgUVVFU1RJT048L3RleHQ+CiAgPHRleHQgeD0iMTUiIHk9IjU1IiBmaWxsPSIjZjZhZDU1IiBmb250LWZhbWl5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmb250LXdlaWdodD0iYm9sZCI+RGlzY3JpbWluYW50IG9mPC90ZXh0PgogIDx0ZXh0IHg9IjE1IiB5PSI3NSIgZmlsbD0iI2Y2YWQ1NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZvbnQtd2VpZ2h0PSJib2xkIj4yeF4yIC0gNHggKyAzID0gMD88L3RleHQ+CiAgPHRleHQgeD0iMTUiIHk9IjEwMCIgZmlsbD0iI2NiZDVlMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAiPihhKSAtOCAgIChiKSA4PC90ZXh0PgogIDx0ZXh0IHg9IjE1IiB5PSIxMjAiIGZpbGw9IiNjYmQ1ZTAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIj4oYykgNCAgICAoZCkgLTQ8L3RleHQ+Cjwvc3ZnPg==',
      solution: `<strong>Equation:</strong> \\(2x^2 - 4x + 3 = 0\\)<br><br>
<strong>Step-by-Step Solution:</strong><br>
1. Identify coefficients: \\(a = 2, b = -4, c = 3\\).<br>
2. Use the Discriminant formula: \\(D = b^2 - 4ac\\).<br>
3. Substitute the values:
\\[D = (-4)^2 - 4(2)(3)\\]
\\[D = 16 - 24 = -8\\]
4. Since \\(D = -8\\), the correct option is **(a)**.`
    },
    {
      id: 'scan-ar',
      title: 'Triangles Similarity AR',
      problem: 'Assertion (A): All equilateral triangles are similar.\nReason (R): Two triangles are similar if their corresponding angles are equal and their corresponding sides are proportional.',
      topicId: 'triangles',
      questionType: 'Assertion-Reason',
      imgSrc: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMTUwIiB2aWV3Qm94PSIwIDAgMjAwIDE1MCI+CiAgPHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxNTAiIGZpbGw9IiMxYTIwMmMiIHJ4PSI4Ii8+CiAgPHRleHQgeD0iMTUiIHk9IjMwIiBmaWxsPSIjYTBhZWMwIiBmb250LWZhbWl5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIj5BU1NFUlRJT04tUkVBU09OPC90ZXh0PgogIDx0ZXh0IHg9IjE1IiB5PSI1NSIgZmlsbD0iI2UyZThmMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZvbnQtd2VpZ2h0PSJib2xkIj5Bc3NlcnRpb24gKEEpOiBBbGwgZXF1aWxhdGVyYWw8L3RleHQ+CiAgPHRleHQgeD0iMTUiIHk9Ijc1IiBmaWxsPSIjZTJlOGYwIiBmb250LWZhbWl5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmb250LXdlaWdodD0iYm9sZCI+dHJpYW5nbGVzIGFyZSBzaW1pbGFyLjwvdGV4dD4KICA8dGV4dCB4PSIxNSIgeT0iMTAwIiBmaWxsPSIjZTJlOGYwIiBmb250LWZhbWl5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjExIiBmb250LXdlaWdodD0iYm9sZCI+UmVhc29uIChSKTogQ29ycmVzcG9uZGluZyBhbmdsZXM8L3RleHQ+CiAgPHRleHQgeD0iMTUiIHk9IjEyMCIgZmlsbD0iI2UyZThmMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZvbnQtd2VpZ2h0PSJib2xkIj5hcmUgZXF1YWwsIHNpZGVzIHByb3BvcnRpb25hbC48L3RleHQ+Cjwvc3ZnPg==',
      solution: `<strong>Assertion (A):</strong> All equilateral triangles are similar. <span style="color: var(--success); font-weight:700;">(True)</span><br>
<strong>Reason (R):</strong> Two triangles are similar if their corresponding angles are equal and their corresponding sides are proportional. <span style="color: var(--success); font-weight:700;">(True)</span><br><br>
<strong>Explanation:</strong><br>
1. Every equilateral triangle has all three interior angles equal to \\(60^\\circ\\). Thus, for any two equilateral triangles, their corresponding angles are always equal (both are \\(60^\\circ\\)).<br>
2. Because all sides are equal in an equilateral triangle, the ratio of corresponding sides is always equal (e.g. \\(s_1/s_2 = s_1/s_2 = s_1/s_2\\)).<br>
3. By the definition of similarity given in **Reason (R)**, all equilateral triangles are similar. Thus, Reason is the correct explanation for Assertion.<br><br>
<strong>Answer:</strong> Both (A) and (R) are true and (R) is the correct explanation of (A).`
    }
  ];

  render();

  function render() {
    const doubts = storage.getDoubts();

    // Filter doubts by question type
    const filteredDoubts = doubts.filter(d => {
      if (activeTypeFilter === 'all') return true;
      const type = (d.questionType || classifyQuestionType(d.question)).toLowerCase();
      if (activeTypeFilter === 'mcq') return type.includes('mcq') || type.includes('multiple choice');
      if (activeTypeFilter === 'short') return type.includes('short') || type.includes('numerical') || type.includes('long');
      if (activeTypeFilter === 'assertion') return type.includes('assertion') || type.includes('reason');
      return true;
    });

    container.innerHTML = `
      <div class="section-header">
        <h2>❓ AI Doubt Workspace</h2>
        <p>Instantly scan photo math questions or chat directly with your personal AI Math Tutor</p>
        <div class="section-line"></div>
      </div>

      <div class="doubts-workspace-grid">
        
        <!-- Doubt Scanner Column -->
        <div>
          <div class="card card-glow" style="padding: var(--space-6); margin-bottom: var(--space-6);">
            <h3 style="font-family: var(--font-display); margin-bottom: var(--space-3); display: flex; align-items: center; gap: var(--space-2);">
              📸 Photo Math Scanner
            </h3>
            <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: var(--space-5);">
              Drag & drop a homework photo, or choose one of our sample problem photos below to test the instant laser scanner:
            </p>

            <!-- Sample selection -->
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: var(--space-3); margin-bottom: var(--space-6);">
              ${sampleScans.map(s => `
                <div class="card sample-scan-btn ${selectedSampleImg?.id === s.id ? 'selected' : ''}" data-scan-id="${s.id}" style="padding: var(--space-2); cursor: pointer; border-radius: var(--radius-md); text-align: center; display: flex; flex-direction: column; justify-content: space-between;">
                  <img src="${s.imgSrc}" alt="${s.title}" style="height: 60px; width: 100%; object-fit: cover; border-radius: var(--radius-sm); margin-bottom: var(--space-2); opacity: 0.85;">
                  <span style="font-size: 0.72rem; font-weight: 700; display: block; line-height: 1.2;">${s.title}</span>
                </div>
              `).join('')}
            </div>

            <!-- Upload Area & Scanner -->
            <div class="scanner-dropzone" id="scanner-dropzone" style="cursor: ${(isCameraActive || selectedSampleImg) ? 'default' : 'pointer'};">
              ${isScanning ? `
                <div class="scanner-container">
                  <div class="scanner-laser"></div>
                  <img src="${selectedSampleImg.imgSrc}" class="scanner-img">
                </div>
                <div style="margin-top: var(--space-4);">
                  <div class="streak-flame" style="font-size: 1.8rem; animation: rotate 1.5s linear infinite; display: inline-block; margin-bottom: var(--space-2);">🌀</div>
                  <h4 id="scanner-status" style="font-family: var(--font-display); font-size: 1rem; color: var(--primary-500);">${ocrProgressText || 'Scanning Question Text...'}</h4>
                </div>
              ` : isCameraActive ? `
                <div class="camera-container" style="margin: 0 auto;">
                  <video id="camera-video" class="camera-video" autoplay playsinline></video>
                  <div class="camera-grid-overlay"></div>
                  <div id="camera-flash" style="position: absolute; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:25;"></div>
                  <div class="camera-controls">
                    <button class="btn btn-secondary btn-sm" id="camera-cancel-btn" style="background: rgba(255,255,255,0.25); color: white; border: none; font-size: 0.8rem;">✕ Cancel</button>
                    <button class="camera-btn-shutter" id="camera-shutter-btn" title="Snap Photo"></button>
                    <div style="width: 70px;"></div>
                  </div>
                </div>
              ` : selectedSampleImg ? `
                <div class="scanner-container">
                  <img src="${selectedSampleImg.imgSrc}" class="scanner-img" style="filter: none;">
                </div>
                ${ocrResultText ? `
                  <div class="ocr-result-box">
                    <div class="ocr-result-header">
                      <span>📝 Recognized Text</span>
                      <span style="font-size: 0.75rem; color: var(--success); font-weight:700;">✔ Scan Complete</span>
                    </div>
                    <div class="ocr-result-text">${escapeHtml(ocrResultText)}</div>
                    <div style="margin-top: var(--space-2); display: flex; align-items: center; gap: var(--space-2);">
                      <span style="font-size: 0.76rem; color: var(--text-tertiary);">Identified Type:</span>
                      <span class="badge" style="background: rgba(139, 92, 246, 0.15); color: var(--primary-500); font-weight: 700; font-size: 0.72rem;">
                        ${classifyQuestionType(ocrResultText)}
                      </span>
                    </div>
                  </div>
                ` : ''}
                <div style="margin-top: var(--space-4); display: flex; gap: var(--space-3); justify-content: center;">
                  <button class="btn btn-primary" id="trigger-scan-btn">${ocrResultText ? '🔄 Re-Solve' : '🔍 Scan & Solve'}</button>
                  <button class="btn btn-secondary" id="clear-scan-btn">✕ Clear</button>
                </div>
              ` : `
                <div style="font-size: 2.5rem; margin-bottom: var(--space-2);">📤</div>
                <h4>Drag & Drop Homework Image</h4>
                <p style="font-size: 0.78rem; color: var(--text-tertiary); margin-top: 4px; margin-bottom: var(--space-3);">Supports JPG, PNG, or camera snap</p>
                <button class="scanner-camera-toggle-btn" id="activate-camera-btn" style="z-index: 10;">
                  📷 Take Camera Snap
                </button>
                <input type="file" id="scanner-file-input" accept="image/*" style="display: none;">
              `}
            </div>
          </div>

          <!-- Solution History / Previous Doubts -->
          <div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-4); flex-wrap: wrap; gap: var(--space-2);">
              <h3 style="font-family: var(--font-display); font-size: 1.25rem;">📜 Saved Doubts (${filteredDoubts.length})</h3>
              ${doubts.length > 0 ? `<button class="btn btn-ghost btn-sm" id="clear-all-doubts" style="color: var(--error);">🗑️ Clear All</button>` : ''}
            </div>

            <!-- Question Type Filters -->
            <div class="filter-bar" id="history-type-filters" style="margin-bottom: var(--space-4); display: flex; gap: var(--space-2); flex-wrap: wrap;">
              <button class="filter-chip ${activeTypeFilter === 'all' ? 'active' : ''}" data-type="all">All Types</button>
              <button class="filter-chip ${activeTypeFilter === 'mcq' ? 'active' : ''}" data-type="mcq">MCQ</button>
              <button class="filter-chip ${activeTypeFilter === 'short' ? 'active' : ''}" data-type="short">Short Answer</button>
              <button class="filter-chip ${activeTypeFilter === 'assertion' ? 'active' : ''}" data-type="assertion">Assertion-Reason</button>
            </div>

            ${filteredDoubts.length === 0 ? `
              <div class="card card-glow" style="padding: var(--space-6); text-align: center; border-radius: var(--radius-lg); background: var(--bg-card);">
                <div style="font-size: 1.8rem; margin-bottom: var(--space-2); opacity: 0.5;">💬</div>
                <p style="font-size: 0.88rem; color: var(--text-tertiary);">No doubts match this question type filter.</p>
              </div>
            ` : `
              <div class="doubt-list" style="display: flex; flex-direction: column; gap: var(--space-4);">
                ${filteredDoubts.map(d => {
                  const topic = topics.find(t => t.id === d.topicId);
                  const date = new Date(d.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
                  const qType = d.questionType || classifyQuestionType(d.question);
                  return `
                    <div class="card card-glow" style="padding: var(--space-5); border-radius: var(--radius-lg); background: var(--bg-card);">
                      <div class="doubt-meta" style="display: flex; align-items: center; gap: var(--space-3); font-size: 0.78rem; color: var(--text-tertiary); margin-bottom: var(--space-3); flex-wrap: wrap;">
                        <span>📅 ${date}</span>
                        ${topic ? `<span class="badge" style="background: ${topic.color}15; color: ${topic.color}; font-size: 0.72rem;">${topic.icon} ${topic.name}</span>` : ''}
                        <span class="badge" style="background: rgba(139, 92, 246, 0.1); color: var(--primary-500); font-weight: 700; font-size: 0.72rem;">
                          ${qType}
                        </span>
                        <span class="doubt-status answered" style="margin-left: auto; color: var(--success); font-weight: 700;">✅ Solved</span>
                      </div>
                      <div class="doubt-question" style="font-weight: 600; font-size: 0.95rem; margin-bottom: var(--space-3); border-bottom: 1px solid var(--border-light); padding-bottom: var(--space-2); white-space: pre-line;">
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
        <div class="card card-glow" style="padding: var(--space-5); position: sticky; top: 90px; border-radius: var(--radius-lg); background: var(--bg-card); display: flex; flex-direction: column; gap: var(--space-4);">
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
        ocrResultText = '';
        render();
      });
    });

    container.querySelector('#clear-scan-btn')?.addEventListener('click', () => {
      selectedSampleImg = null;
      ocrResultText = '';
      render();
    });

    container.querySelector('#trigger-scan-btn')?.addEventListener('click', runScanAnimation);

    // Camera trigger events
    container.querySelector('#activate-camera-btn')?.addEventListener('click', (e) => {
      e.stopPropagation(); // Avoid triggering file input click
      startCamera();
    });

    container.querySelector('#camera-cancel-btn')?.addEventListener('click', stopCamera);
    container.querySelector('#camera-shutter-btn')?.addEventListener('click', capturePhoto);

    // File Input & Drag-Drop events
    const dropzone = container.querySelector('#scanner-dropzone');
    const fileInput = container.querySelector('#scanner-file-input');

    if (dropzone && fileInput) {
      dropzone.addEventListener('click', (e) => {
        if (e.target.closest('#activate-camera-btn') || isCameraActive || selectedSampleImg) return;
        fileInput.click();
      });

      dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        if (!isCameraActive && !selectedSampleImg) {
          dropzone.classList.add('drag-active');
        }
      });

      dropzone.addEventListener('dragleave', () => {
        dropzone.classList.remove('drag-active');
      });

      dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.classList.remove('drag-active');
        if (isCameraActive || selectedSampleImg) return;

        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
          handleSelectedFile(file);
        } else {
          if (window.showToast) window.showToast('Please drop a valid image file.', 'warning');
        }
      });

      fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) handleSelectedFile(file);
      });
    }

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

    container.querySelectorAll('#history-type-filters .filter-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        activeTypeFilter = btn.dataset.type;
        render();
      });
    });

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
  }

  // ── Camera Methods ──
  function startCamera() {
    isCameraActive = true;
    selectedSampleImg = null;
    ocrResultText = '';
    render();

    const video = container.querySelector('#camera-video');
    if (!video) return;

    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      .then(stream => {
        cameraStream = stream;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.error('Error accessing camera:', err);
        isCameraActive = false;
        render();
        if (window.showToast) window.showToast('Unable to access camera: ' + err.message, 'error');
      });
  }

  function stopCamera() {
    if (cameraStream) {
      cameraStream.getTracks().forEach(track => track.stop());
      cameraStream = null;
    }
    isCameraActive = false;
    render();
  }

  function capturePhoto() {
    const video = container.querySelector('#camera-video');
    const flash = container.querySelector('#camera-flash');
    if (!video) return;

    if (flash) {
      flash.classList.add('camera-flash-active');
    }

    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/jpeg');

    setTimeout(() => {
      stopCamera();
      selectedSampleImg = {
        id: 'user-captured',
        title: 'Captured Homework',
        imgSrc: dataUrl,
        isUserUploaded: true,
        problem: 'Scanning captured photo...'
      };
      render();
    }, 300);
  }

  // ── File Selection Handler ──
  function handleSelectedFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      selectedSampleImg = {
        id: 'user-uploaded',
        title: 'Uploaded Image',
        imgSrc: e.target.result,
        isUserUploaded: true,
        problem: 'Scanning uploaded image...'
      };
      ocrResultText = '';
      render();
    };
    reader.readAsDataURL(file);
  }

  // ── Scanner Laser Scan Animation & OCR Solver ──
  function runScanAnimation() {
    if (!selectedSampleImg) return;
    isScanning = true;
    ocrProgressText = 'Configuring OCR Engine...';
    render();

    if (typeof Tesseract !== 'undefined') {
      Tesseract.recognize(
        selectedSampleImg.imgSrc,
        'eng',
        {
          logger: m => {
            if (m.status === 'recognizing text') {
              ocrProgressText = `Scanning text: ${Math.round(m.progress * 100)}%`;
              const statusEl = container.querySelector('#scanner-status');
              if (statusEl) statusEl.textContent = ocrProgressText;
            }
          }
        }
      ).then(({ data: { text } }) => {
        console.log('Recognized text:', text);
        ocrResultText = text;
        solveExtractedText(text);
      }).catch(err => {
        console.error('OCR Error:', err);
        runMockSolver();
      });
    } else {
      console.warn('Tesseract.js is not loaded. Using fallback mock solver.');
      runMockSolver();
    }
  }

  // ── Smart Solver & Question Matcher ──
  // ── Question Type Classifier ──
  function classifyQuestionType(text, matchedQuestion) {
    if (matchedQuestion) {
      if (matchedQuestion.type === 'mcq') return 'Multiple Choice (MCQ)';
      if (matchedQuestion.type === 'numerical') return 'Numerical';
    }
    const clean = text.replace(/\s+/g, ' ').toLowerCase();
    
    // 1. Assertion-Reason
    if (clean.includes('assertion') && (clean.includes('reason') || clean.includes('(r)') || clean.includes(' r '))) {
      return 'Assertion-Reason';
    }
    
    // 2. MCQ
    const mcqPatterns = [
      /(?:[a-d]\s*[\.\:\)]|\([a-d]\))/i,
      /option\s*[a-d]/i,
      /correct\s*option/i,
      /multiple\s*choice/i
    ];
    if (mcqPatterns.some(p => p.test(text)) || clean.includes('options:') || clean.includes('choose the correct')) {
      return 'Multiple Choice (MCQ)';
    }
    
    // 3. Short Answer (Prove / Show / Find / Calculate)
    if (clean.includes('prove') || clean.includes('show that') || clean.includes('explain') || clean.includes('why') || clean.includes('justify') || clean.includes('verify')) {
      return 'Short/Long Answer';
    }
    
    return 'Short Answer';
  }

  // ── Normalize OCR Math text ──
  function normalizeMathText(text) {
    let normalized = text.toLowerCase();
    
    // Replace '×' or '*' with 'x' for algebraic variables
    normalized = normalized.replace(/×/g, 'x');
    normalized = normalized.replace(/\*/g, 'x');

    // Replace common OCR errors for x^2 -
    // "x24" or "x^24" -> "x^2 -"
    normalized = normalized.replace(/x(?:^2|²|2)4/g, 'x^2 - ');
    // "x27" or "x^27" -> "x^2 +"
    normalized = normalized.replace(/x(?:^2|²|2)7/g, 'x^2 + ');
    
    // Replace unicode superscripts with regular ones
    normalized = normalized.replace(/²/g, '^2');
    
    return normalized;
  }

  // ── Smart Solver & Question Matcher ──
  function solveExtractedText(ocrText) {
    const normalizedOCR = normalizeMathText(ocrText);

    // Compile practice questions and samples
    const allSources = [
      ...sampleScans.map(s => ({ type: 'sample', id: s.id, question: s.problem.replace(/\\\(|\\\)|\\\[|\\\]/g, ''), solution: s.solution, topicId: s.topicId })),
      ...questions.map(q => ({ type: 'practice', id: q.id, question: q.question, solution: Array.isArray(q.solution) ? q.solution.join('<br>') : q.solution, topicId: q.topicId }))
    ];

    let bestMatch = null;
    let bestScore = 0;

    const getWords = (str) => new Set(str.toLowerCase().match(/[a-z0-9]+/g) || []);
    const ocrWords = getWords(normalizedOCR);

    if (ocrWords.size > 0) {
      for (const src of allSources) {
        const srcWords = getWords(src.question);
        if (srcWords.size === 0) continue;

        let intersectionSize = 0;
        srcWords.forEach(w => {
          if (ocrWords.has(w)) intersectionSize++;
        });

        const score = intersectionSize / Math.max(ocrWords.size, srcWords.size);
        if (score > bestScore) {
          bestScore = score;
          bestMatch = src;
        }
      }
    }

    console.log('Best match score:', bestScore, 'Match:', bestMatch);

    let questionText = ocrText.trim();
    let solutionHtml = '';
    let topicId = 'real-numbers';

    if (bestScore > 0.75 && bestMatch) {
      solutionHtml = `
        <div style="margin-bottom: var(--space-3); font-weight:700; color: var(--success);">
          🎯 Matched Question from Question Bank (${Math.round(bestScore * 100)}% match confidence)
        </div>
        ${bestMatch.solution}
      `;
      questionText = bestMatch.question;
      topicId = bestMatch.topicId;
    } else {
      const solved = attemptDynamicSolve(normalizedOCR);
      if (solved) {
        solutionHtml = solved.solution;
        topicId = solved.topicId;
        questionText = solved.question || ocrText;
      } else {
        const tutorSolved = generateKeywordTutorial(normalizedOCR);
        solutionHtml = tutorSolved.solution;
        topicId = tutorSolved.topicId;
      }
    }

    storage.addDoubt({
      topicId: topicId,
      question: questionText,
      solution: solutionHtml,
      status: 'answered',
      questionType: classifyQuestionType(questionText, bestScore > 0.75 ? bestMatch : null)
    });

    isScanning = false;
    selectedSampleImg = null;
    render();
    if (window.showToast) window.showToast('Solution generated successfully! Saved in history.', 'success');
  }

  // ── Dynamic Solvers ──
  function attemptDynamicSolve(text) {
    let cleanText = text.replace(/\s+/g, '');
    
    // Auto-append =0 for expressions if it looks like a quadratic expression
    if (!cleanText.includes('=') && (cleanText.includes('x^2') || cleanText.includes('x²') || cleanText.includes('x2'))) {
      cleanText += '=0';
    }

    // 1. Quadratic Equation: ax^2 + bx + c = 0 (and other forms)
    const quadCoeffs = parseQuadraticCoefficients(cleanText);
    if (quadCoeffs) {
      const { a, b, c } = quadCoeffs;
      if (a !== 0) {
        return solveQuadratic(a, b, c);
      }
    }
    
    // 2. Real Numbers HCF / LCM
    if (text.includes('hcf') || text.includes('lcm')) {
      const numbers = text.match(/\d+/g);
      if (numbers && numbers.length >= 2) {
        const n1 = parseInt(numbers[0]);
        const n2 = parseInt(numbers[1]);
        if (n1 > 0 && n2 > 0) {
          return solveHcfLcm(n1, n2, text.includes('hcf'));
        }
      }
    }

    // 3. Irrational Proof
    if ((text.includes('prove') || text.includes('show')) && (text.includes('irrational') || text.includes('rational'))) {
      const sqrtMatch = text.match(/(?:sqrt|√|root)\s*\(?(\d+)\)?/) || text.match(/root\s+(\d+)/);
      if (sqrtMatch) {
        const num = parseInt(sqrtMatch[1]);
        const root = Math.sqrt(num);
        if (root % 1 !== 0) {
          return solveIrrationalProof(num);
        }
      }
    }

    // 4. Arithmetic Progression Sequence: a, a+d, a+2d, a+3d
    const apMatch = text.match(/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
    if (apMatch) {
      const terms = apMatch.slice(1, 5).map(Number);
      const d1 = terms[1] - terms[0];
      const d2 = terms[2] - terms[1];
      const d3 = terms[3] - terms[2];
      if (d1 === d2 && d2 === d3) {
        return solveAP(terms[0], d1);
      }
    }

    return null;
  }

  function parseQuadraticCoefficients(cleanText) {
    const text = cleanText.toLowerCase();

    // Form A: ax^2 + bx + c = 0
    const matchA = text.match(/^([+-]?\d*)[xX](?:\^2|²|2)([+-]\d*)[xX]([+-]\d+)=0$/);
    if (matchA) {
      return {
        a: parseCoeff(matchA[1]),
        b: parseCoeff(matchA[2]),
        c: parseInt(matchA[3])
      };
    }

    // Form B: ax^2 + bx = 0
    const matchB = text.match(/^([+-]?\d*)[xX](?:\^2|²|2)([+-]\d*)[xX]=0$/);
    if (matchB) {
      return {
        a: parseCoeff(matchB[1]),
        b: parseCoeff(matchB[2]),
        c: 0
      };
    }

    // Form C: ax^2 + c = 0
    const matchC = text.match(/^([+-]?\d*)[xX](?:\^2|²|2)([+-]\d+)=0$/);
    if (matchC) {
      return {
        a: parseCoeff(matchC[1]),
        b: 0,
        c: parseInt(matchC[2])
      };
    }

    // Form D: ax^2 = 0
    const matchD = text.match(/^([+-]?\d*)[xX](?:\^2|²|2)=0$/);
    if (matchD) {
      return {
        a: parseCoeff(matchD[1]),
        b: 0,
        c: 0
      };
    }

    return null;
  }

  function parseCoeff(str) {
    if (str === '' || str === '+') return 1;
    if (str === '-') return -1;
    return parseInt(str);
  }

  function solveQuadratic(a, b, c) {
    // Construct equation string
    let eqParts = [];
    if (a === 1) eqParts.push("x^2");
    else if (a === -1) eqParts.push("-x^2");
    else eqParts.push(`${a}x^2`);

    if (b !== 0) {
      if (b === 1) eqParts.push("+ x");
      else if (b === -1) eqParts.push("- x");
      else if (b > 0) eqParts.push(`+ ${b}x`);
      else eqParts.push(`- ${Math.abs(b)}x`);
    }

    if (c !== 0) {
      if (c > 0) eqParts.push(`+ ${c}`);
      else eqParts.push(`- ${Math.abs(c)}`);
    }
    eqParts.push("= 0");
    const eqStr = eqParts.join(" ");

    const discriminant = b * b - 4 * a * c;
    const minusB = -b;
    const twoA = 2 * a;

    let solution = `
      <strong>Equation Detected:</strong> \\(${eqStr}\\)<br><br>
      <strong>Step-by-Step Solver:</strong><br>
      1. Identify coefficients: \\(a = ${a}\\), \\(b = ${b}\\), \\(c = ${c}\\).<br>
      2. Compute the Discriminant \\(D = b^2 - 4ac\\):
      \\[D = (${b})^2 - 4(${a})(${c}) = ${b*b} - ${4*a*c} = ${discriminant}\\]
    `;

    if (discriminant < 0) {
      solution += `
        Since the discriminant \\(D < 0\\), the equation has **no real roots** (roots are complex/imaginary).<br><br>
        <strong>Complex Roots:</strong>
        \\[x = \\frac{-b \\pm i\\sqrt{-D}}{2a}\\]
        \\[x = \\frac{${minusB} \\pm i\\sqrt{${-discriminant}}}{${twoA}}\\]
      `;
    } else {
      const sqrtD = Math.sqrt(discriminant);
      solution += `
        Since the discriminant \\(D \\ge 0\\), the roots are real.<br>
        3. Apply the Quadratic Formula:
        \\[x = \\frac{-b \\pm \\sqrt{D}}{2a}\\]
      `;
      
      if (sqrtD % 1 === 0) {
        const r1 = (minusB + sqrtD) / twoA;
        const r2 = (minusB - sqrtD) / twoA;
        solution += `
          Substitute the values:
          \\[x = \\frac{${minusB} \\pm ${sqrtD}}{${twoA}}\\]
          Find the two distinct roots:
          - Root 1: \\(x_1 = \\frac{${minusB} + ${sqrtD}}{${twoA}} = ${r1.toFixed(2).replace('.00', '')}\\)
          - Root 2: \\(x_2 = \\frac{${minusB} - ${sqrtD}}{${twoA}} = ${r2.toFixed(2).replace('.00', '')}\\)<br><br>
          <strong>Answer:</strong> \\(x = ${r1.toFixed(2).replace('.00', '')}\\) and \\(x = ${r2.toFixed(2).replace('.00', '')}\\).
        `;
      } else {
        solution += `
          Substitute the values:
          \\[x = \\frac{${minusB} \\pm \\sqrt{${discriminant}}}{${twoA}}\\]
          <strong>Answer:</strong> \\(x = \\frac{${minusB} + \\sqrt{${discriminant}}}{${twoA}}\\) and \\(x = \\frac{${minusB} - \\sqrt{${discriminant}}}{${twoA}}\\).
        `;
      }
    }

    return {
      topicId: 'quadratic-equations',
      question: `Solve ${eqStr} using quadratic formula`,
      solution: solution
    };
  }

  function solveHcfLcm(n1, n2, isHcfRequested) {
    function getPrimeFactors(n) {
      const factors = {};
      let d = 2;
      let temp = n;
      while (temp > 1) {
        while (temp % d === 0) {
          factors[d] = (factors[d] || 0) + 1;
          temp /= d;
        }
        d++;
        if (d * d > temp) {
          if (temp > 1) {
            factors[temp] = (factors[temp] || 0) + 1;
            break;
          }
        }
      }
      return factors;
    }

    const f1 = getPrimeFactors(n1);
    const f2 = getPrimeFactors(n2);

    const printFactorization = (num, factors) => {
      const parts = Object.entries(factors).map(([p, power]) => `${p}^{${power}}`);
      return `\\(${num} = ${parts.join(' \\times ')}\\)`;
    };

    let gcd = 1;
    const allPrimes = new Set([...Object.keys(f1), ...Object.keys(f2)].map(Number));
    allPrimes.forEach(p => {
      if (f1[p] && f2[p]) {
        gcd *= Math.pow(p, Math.min(f1[p], f2[p]));
      }
    });
    
    const lcm = (n1 * n2) / gcd;

    let solution = `
      <strong>Numbers:</strong> \\(${n1}\\) and \\(${n2}\\)<br><br>
      <strong>Step-by-Step prime factorisation method:</strong><br>
      1. Find the prime factorisation of each number:<br>
      - ${printFactorization(n1, f1)}<br>
      - ${printFactorization(n2, f2)}<br><br>
      2. **HCF (Highest Common Factor)**: Product of the smallest powers of all common prime factors.<br>
      \\[\\text{HCF}(${n1}, ${n2}) = ${gcd}\\]
      3. **LCM (Lowest Common Multiple)**: Product of the greatest powers of all prime factors involved.<br>
      \\[\\text{LCM}(${n1}, ${n2}) = ${lcm}\\]<br>
      4. **Verification relation:**
      \\[\\text{HCF} \\times \\text{LCM} = ${gcd} \\times ${lcm} = ${gcd * lcm}\\]
      \\[\\text{Product of Numbers} = ${n1} \\times ${n2} = ${n1 * n2}\\]
      Since \\(${gcd * lcm} = ${n1 * n2}\\), the relation is verified! ✓<br><br>
      <strong>Answer:</strong> The HCF is **${gcd}** and the LCM is **${lcm}**.
    `;

    return {
      topicId: 'real-numbers',
      question: `Find the HCF and LCM of ${n1} and ${n2}`,
      solution: solution
    };
  }

  function solveIrrationalProof(num) {
    const solution = `
      <strong>Theorem:</strong> Prove that \\(\\sqrt{${num}}\\) is irrational.<br><br>
      <strong>Proof (by Contradiction):</strong><br>
      1. Assume, to the contrary, that \\(\\sqrt{${num}}\\) is rational.<br>
      2. Therefore, we can write \\(\\sqrt{${num}} = \\frac{p}{q}\\) where \\(p\\) and \\(q\\) are co-prime integers (sharing no common factors other than 1) and \\(q \\neq 0\\).<br>
      3. Squaring both sides:
      \\[${num} = \\frac{p^2}{q^2} \\implies p^2 = ${num}q^2 \\quad \\text{--- (Eq 1)}\\]
      4. Since \\(p^2\\) is divisible by ${num}, by prime number theorems, \\(p\\) must also be divisible by ${num}. Let \\(p = ${num}k\\) for some integer \\(k\\).<br>
      5. Substitute \\(p = ${num}k\\) into Eq 1:
      \\[(${num}k)^2 = ${num}q^2 \\implies ${num*num}k^2 = ${num}q^2 \\implies q^2 = ${num}k^2\\]
      6. This means \\(q^2\\) is divisible by ${num}, hence \\(q\\) must also be divisible by ${num}.<br>
      7. Therefore, \\(p\\) and \\(q\\) both share ${num} as a common factor. This **contradicts** our assumption that \\(p\\) and \\(q\\) are co-prime.<br>
      8. Thus, our initial assumption is false. \\(\\sqrt{${num}}\\) is irrational. <span style="color: var(--success); font-weight:700;">Q.E.D.</span>
    `;

    return {
      topicId: 'real-numbers',
      question: `Prove that sqrt(${num}) is irrational`,
      solution: solution
    };
  }

  function solveAP(a, d) {
    const sequenceStr = `${a}, ${a + d}, ${a + 2*d}, ${a + 3*d}, \\ldots`;
    const solution = `
      <strong>Arithmetic Progression (AP) Detected:</strong> \\(${sequenceStr}\\)<br><br>
      <strong>AP Characteristics:</strong><br>
      - First term \\(a = ${a}\\)<br>
      - Common difference \\(d = ${d}\\)<br><br>
      <strong>General Formulas for this AP:</strong><br>
      1. **nth Term Formula \\(a_n\\)**:
      \\[a_n = a + (n-1)d = ${a} + (n-1)(${d}) = ${d}n + ${a - d}\\]
      Example (10th term): \\(a_{10} = ${a} + 9 \\times (${d}) = ${a + 9 * d}\\).<br><br>
      2. **Sum of First n Terms \\(S_n\\)**:
      \\[S_n = \\frac{n}{2}[2a + (n-1)d] = \\frac{n}{2}[2(${a}) + (n-1)(${d})]\\]
      Example (sum of first 20 terms): \\(S_{20} = 10 \\times [${2*a} + 19 \\times (${d})] = ${10 * (2*a + 19 * d)}\\).
    `;

    return {
      topicId: 'arithmetic-progressions',
      question: `Analyze the AP sequence ${a}, ${a+d}, ${a+2*d}, ...`,
      solution: solution
    };
  }

  function generateKeywordTutorial(ocrText) {
    let topicId = 'real-numbers';
    let solutionHtml = '';

    if (ocrText.includes('trig') || ocrText.includes('sin') || ocrText.includes('cos') || ocrText.includes('tan') || ocrText.includes('theta')) {
      topicId = 'trigonometry';
      solutionHtml = `
        <strong>Topic: Introduction to Trigonometry</strong><br><br>
        Based on the scanned text containing trigonometric terms, here is the core reference concept:<br>
        1. **Trigonometric Ratios:** In a right triangle \\(\\triangle ABC\\) (right-angled at B):
        - \\(\\sin \\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}\\)<br>
        - \\(\\cos \\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}\\)<br>
        - \\(\\tan \\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}} = \\frac{\\sin \\theta}{\\cos \\theta}\\)<br><br>
        2. **Reciprocal Relations:**
        - \\(\\csc \\theta = \\frac{1}{\\sin \\theta}\\), \\(\\sec \\theta = \\frac{1}{\\cos \\theta}\\), \\(\\cot \\theta = \\frac{1}{\\tan \\theta}\\)<br><br>
        3. **Standard Values Table:**
        - \\(\\sin 30^\\circ = \\frac{1}{2}\\), \\(\\sin 45^\\circ = \\frac{1}{\\sqrt{2}}\\), \\(\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}\\)<br>
        - \\(\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}\\), \\(\\cos 45^\\circ = \\frac{1}{\\sqrt{2}}\\), \\(\\cos 60^\\circ = \\frac{1}{2}\\)<br>
        - \\(\\tan 30^\\circ = \\frac{1}{\\sqrt{3}}\\), \\(\\tan 45^\\circ = 1\\), \\(\\tan 60^\\circ = \\sqrt{3}\\)<br><br>
        4. **Trigonometric Identities:**
        - \\(\\sin^2 \\theta + \\cos^2 \\theta = 1\\)<br>
        - \\(1 + \\tan^2 \\theta = \\sec^2 \\theta\\)<br>
        - \\(1 + \\cot^2 \\theta = \\csc^2 \\theta\\)
      `;
    } else if (ocrText.includes('circle') || ocrText.includes('tangent') || ocrText.includes('secant') || ocrText.includes('radius')) {
      topicId = 'circles';
      solutionHtml = `
        <strong>Topic: Circles & Tangents Theorems</strong><br><br>
        Based on the scanned text containing circle terms, here are the key Class 10 NCERT theorems:<br><br>
        <strong>Theorem 10.1:</strong> The tangent at any point of a circle is perpendicular to the radius through the point of contact.<br>
        - If \\(OP\\) is the radius and \\(XY\\) is the tangent line touching at \\(P\\), then \\(OP \\perp XY\\).<br><br>
        <strong>Theorem 10.2:</strong> The lengths of tangents drawn from an external point to a circle are equal.<br>
        - If tangents \\(PA\\) and \\(PB\\) are drawn from external point \\(P\\) to touch the circle at \\(A\\) and \\(B\\), then:
        \\[PA = PB\\]
        - In this scenario, \\(\\triangle OAP \\cong \\triangle OBP\\) where \\(O\\) is the center. This implies:
          - \\(\\angle OPA = \\angle OPB\\) (tangents are equally inclined to the line joining the center).
          - \\(\\angle AOP = \\angle BOP\\) (tangents subtend equal angles at the center).
      `;
    } else if (ocrText.includes('triangl') || ocrText.includes('similar') || ocrText.includes('theorem') || ocrText.includes('pythagora')) {
      topicId = 'triangles';
      solutionHtml = `
        <strong>Topic: Triangles & Similarity Theorems</strong><br><br>
        Based on the scanned text containing geometry/triangle terms, here are the core concepts:<br><br>
        1. **Basic Proportionality Theorem (BPT / Thales Theorem):**<br>
        If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio.<br>
        - In \\(\\triangle ABC\\), if \\(DE \\parallel BC\\), then:
        \\[\\frac{AD}{DB} = \\frac{AE}{EC}\\]
        2. **Similarity Criteria (AAA, SAS, SSS):**<br>
        Two triangles are similar if their corresponding angles are equal and their corresponding sides are proportional.<br>
        3. **Pythagoras Theorem:**<br>
        In a right-angled triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides:
        \\[AC^2 = AB^2 + BC^2\\]
      `;
    } else if (ocrText.includes('mean') || ocrText.includes('median') || ocrText.includes('mode') || ocrText.includes('stat')) {
      topicId = 'statistics';
      solutionHtml = `
        <strong>Topic: Statistics Formulas</strong><br><br>
        Based on the scanned text containing statistical terms, here are the grouped data formulas:<br><br>
        1. **Mean (Direct Method):**
        \\[\\text{Mean } \\bar{x} = \\frac{\\sum f_i x_i}{\\sum f_i}\\]
        2. **Mean (Assumed Mean Method):**
        \\[\\text{Mean } \\bar{x} = a + \\frac{\\sum f_i d_i}{\\sum f_i} \\quad \\text{where } d_i = x_i - a\\]
        3. **Mode of Grouped Data:**
        \\[\\text{Mode} = l + \\left( \\frac{f_1 - f_0}{2f_1 - f_0 - f_2} \\right) \\times h\\]
        Where \\(l\\) is lower limit of modal class, \\(f_1\\) is freq of modal class, \\(f_0\\) is freq of preceding class, \\(f_2\\) is freq of succeeding class, and \\(h\\) is class width.<br><br>
        4. **Median of Grouped Data:**
        \\[\\text{Median} = l + \\left( \\frac{\\frac{N}{2} - cf}{f} \\right) \\times h\\]
        Where \\(cf\\) is cumulative frequency of preceding class and \\(f\\) is frequency of median class.
      `;
    } else {
      topicId = 'real-numbers';
      solutionHtml = `
        <strong>Topic: Class 10 NCERT Doubt Help</strong><br><br>
        The AI Tutor has successfully scanned the homework image. Here are step-by-step instructions to tackle this math topic:<br><br>
        1. **Understand Key Terms:** Look at variables, equations, or geometry terms.<br>
        2. **Identify Formulas:** Check the **<a href="#/formulas">Formulas tab</a>** in the navigation bar to see if this matches any standard NCERT formulas.<br>
        3. **Write Down Given Values:** State all parameters explicitly.<br>
        4. **Solve Systematically:** Show every algebraic manipulation step. Don't skip intermediate division or subtraction steps to score full marks in CBSE board exams!
      `;
    }

    return {
      topicId: topicId,
      question: `Scanned doubt: "${ocrText.length > 50 ? ocrText.substring(0, 50) + '...' : ocrText}"`,
      solution: solutionHtml
    };
  }

  // ── Fallback Mock Solver ──
  function runMockSolver() {
    const statusEl = container.querySelector('#scanner-status');
    const stages = [
      { delay: 600, text: '📸 Image Loaded Successfully...' },
      { delay: 1200, text: '🔍 OCR scanning question text...' },
      { delay: 1800, text: '🤖 AI tutor generating step-by-step math proof...' }
    ];

    stages.forEach(stage => {
      setTimeout(() => {
        if (statusEl) statusEl.textContent = stage.text;
      }, stage.delay);
    });

    setTimeout(() => {
      let questionText = selectedSampleImg.problem ? selectedSampleImg.problem.replace(/\\\(|\\\)|\\\[|\\\]/g, '') : 'Scanned Homework Problem';
      let solutionHtml = selectedSampleImg.solution || `<strong>Topic:</strong> Algebra/NCERT doubts<br><br><strong>Solution:</strong> We resolved your doubt successfully! Please see detailed topic guidance in formulas or chapters.`;
      let topicId = selectedSampleImg.topicId || 'real-numbers';

      storage.addDoubt({
        topicId: topicId,
        question: questionText,
        solution: solutionHtml,
        status: 'answered',
        questionType: selectedSampleImg.questionType || classifyQuestionType(questionText)
      });

      isScanning = false;
      ocrResultText = questionText;
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

    // Generate response
    let reply = '';
    const normalizedQuery = normalizeMathText(userText);
    const solved = attemptDynamicSolve(normalizedQuery);

    if (solved) {
      reply = `
        <div style="margin-bottom: var(--space-3); font-weight:700; color: var(--success);">
          🎯 Solved Question Dynamically
        </div>
        ${solved.solution}
      `;
    } else {
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
    }

    setTimeout(() => {
      // Remove thinking indicator
      const thinkingEl = container.querySelector('#tutor-thinking');
      if (thinkingEl) thinkingEl.remove();

      const finalReply = `
        <div style="margin-bottom: var(--space-2); font-size: 0.78rem; color: var(--text-tertiary); display: flex; align-items: center; gap: var(--space-2);">
          <span>Identified Question Type:</span>
          <span class="badge" style="background: rgba(139, 92, 246, 0.1); color: var(--primary-500); font-weight: 700; font-size: 0.72rem;">${qType}</span>
        </div>
        ${reply}
      `;

      chatMessages.push({ sender: 'assistant', text: finalReply });
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
