// ============================================================
// Topics Library Page — Browse all 12 NCERT Class 10 topics
// ============================================================

function renderTopics(container) {
  const progress = storage.getProgress();

  container.innerHTML = `
    <div class="section-header">
      <h2>📚 Topic Library</h2>
      <p>Master all 12 chapters of Class 10 NCERT Mathematics</p>
      <div class="section-line"></div>
    </div>

    <div class="topics-grid">
      ${topics.map(topic => {
        const tp = progress[topic.id] || { viewed: false, completedExamples: [], quizzesTaken: 0 };
        const completionPct = storage.getTopicCompletionPercent(topic.id, topic.exampleCount);
        return `
          <div class="card topic-card card-glow stagger-item" data-topic-id="${topic.id}" tabindex="0" role="button" aria-label="View ${topic.name}">
            <div class="topic-icon" style="background: ${topic.color}20; color: ${topic.color};">
              ${topic.icon}
            </div>
            <h3>${topic.name}</h3>
            <p>${topic.description}</p>
            <div class="topic-card-meta">
              <span>📖 ${topic.chapters}</span>
              <span class="badge badge-${topic.difficulty.toLowerCase()}">${topic.difficulty}</span>
              <span>💡 ${topic.exampleCount} examples</span>
            </div>
            <div class="topic-progress">
              <div class="topic-progress-bar" style="width: ${completionPct}%; background: ${topic.color};"></div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  // Attach click listeners
  container.querySelectorAll('.topic-card').forEach(card => {
    const handler = () => {
      window.location.hash = '#/topic/' + card.dataset.topicId;
    };
    card.addEventListener('click', handler);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler(); }
    });
  });
}
