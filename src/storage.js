// ============================================================
// Storage Manager — localStorage persistence for all app data
// ============================================================

const STORAGE_PREFIX = 'mm10-';

const DEFAULTS = {
  progress: {},        // { topicId: { viewed: bool, completedExamples: [], quizzesTaken: int } }
  quizHistory: [],     // [{ date, topicId, score, total, difficulty, timeSpent }]
  doubts: [],          // [{ id, date, topicId, question, status, solution, bookmarked }]
  bookmarks: [],       // [{ type, id, date }] — formulas, doubts, etc.
  streak: { current: 0, lastDate: null, best: 0 },
  settings: { dailyGoal: 5 },
};

class StorageManager {
  constructor() {
    this.useMemory = false;
    this.memoryStorage = {};
    try {
      // Test if localStorage is available
      localStorage.setItem('mm10-test', 'test');
      localStorage.removeItem('mm10-test');
    } catch (e) {
      this.useMemory = true;
      console.warn('LocalStorage is blocked/unavailable. Falling back to in-memory storage.');
    }

    // Initialize any missing keys
    for (const [key, def] of Object.entries(DEFAULTS)) {
      if (this._get(key) === null) {
        this._set(key, def);
      }
    }
  }

  _key(name) { return STORAGE_PREFIX + name; }

  _get(name) {
    if (this.useMemory) {
      return this.memoryStorage[name] !== undefined ? this.memoryStorage[name] : null;
    }
    try {
      const raw = localStorage.getItem(this._key(name));
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  }

  _set(name, value) {
    if (this.useMemory) {
      this.memoryStorage[name] = value;
      return;
    }
    try {
      localStorage.setItem(this._key(name), JSON.stringify(value));
    } catch (e) {
      console.warn('Storage write failed:', e);
    }
  }

  // ── Progress ──
  getProgress() { return this._get('progress') || {}; }

  getTopicProgress(topicId) {
    const progress = this.getProgress();
    return progress[topicId] || { viewed: false, completedExamples: [], quizzesTaken: 0 };
  }

  markTopicViewed(topicId) {
    const progress = this.getProgress();
    if (!progress[topicId]) progress[topicId] = { viewed: false, completedExamples: [], quizzesTaken: 0 };
    progress[topicId].viewed = true;
    this._set('progress', progress);
  }

  markExampleCompleted(topicId, exampleIndex) {
    const progress = this.getProgress();
    if (!progress[topicId]) progress[topicId] = { viewed: false, completedExamples: [], quizzesTaken: 0 };
    if (!progress[topicId].completedExamples.includes(exampleIndex)) {
      progress[topicId].completedExamples.push(exampleIndex);
    }
    this._set('progress', progress);
  }

  getTopicCompletionPercent(topicId, totalExamples) {
    const tp = this.getTopicProgress(topicId);
    if (!totalExamples) return 0;
    return Math.round((tp.completedExamples.length / totalExamples) * 100);
  }

  // ── Quiz History ──
  getQuizHistory() { return this._get('quizHistory') || []; }

  addQuizResult(result) {
    const history = this.getQuizHistory();
    history.unshift({
      id: Date.now(),
      date: new Date().toISOString(),
      ...result
    });
    this._set('quizHistory', history);

    // Update topic progress
    const progress = this.getProgress();
    if (!progress[result.topicId]) progress[result.topicId] = { viewed: false, completedExamples: [], quizzesTaken: 0 };
    progress[result.topicId].quizzesTaken = (progress[result.topicId].quizzesTaken || 0) + 1;
    this._set('progress', progress);

    // Update streak
    this.updateStreak();
  }

  getTopicAccuracy(topicId) {
    const history = this.getQuizHistory().filter(h => h.topicId === topicId || topicId === 'all');
    if (history.length === 0) return 0;
    const totalCorrect = history.reduce((sum, h) => sum + h.score, 0);
    const totalQuestions = history.reduce((sum, h) => sum + h.total, 0);
    return totalQuestions ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
  }

  getOverallStats() {
    const history = this.getQuizHistory();
    const totalQuizzes = history.length;
    const totalProblems = history.reduce((s, h) => s + h.total, 0);
    const totalCorrect = history.reduce((s, h) => s + h.score, 0);
    const accuracy = totalProblems ? Math.round((totalCorrect / totalProblems) * 100) : 0;
    return { totalQuizzes, totalProblems, totalCorrect, accuracy };
  }

  // ── Streaks ──
  getStreak() { return this._get('streak') || { current: 0, lastDate: null, best: 0 }; }

  updateStreak() {
    const streak = this.getStreak();
    const today = new Date().toISOString().split('T')[0];

    if (streak.lastDate === today) return; // Already counted today

    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (streak.lastDate === yesterday) {
      streak.current += 1;
    } else {
      streak.current = 1;
    }

    streak.lastDate = today;
    if (streak.current > streak.best) streak.best = streak.current;
    this._set('streak', streak);
  }

  // ── Doubts ──
  getDoubts() { return this._get('doubts') || []; }

  addDoubt(doubt) {
    const doubts = this.getDoubts();
    const newDoubt = {
      id: Date.now(),
      date: new Date().toISOString(),
      status: 'pending',
      bookmarked: false,
      solution: null,
      ...doubt
    };
    doubts.unshift(newDoubt);
    this._set('doubts', doubts);
    return newDoubt;
  }

  updateDoubt(id, updates) {
    const doubts = this.getDoubts();
    const idx = doubts.findIndex(d => d.id === id);
    if (idx >= 0) {
      doubts[idx] = { ...doubts[idx], ...updates };
      this._set('doubts', doubts);
    }
  }

  deleteDoubt(id) {
    const doubts = this.getDoubts().filter(d => d.id !== id);
    this._set('doubts', doubts);
  }

  // ── Bookmarks ──
  getBookmarks() { return this._get('bookmarks') || []; }

  toggleBookmark(type, itemId) {
    const bookmarks = this.getBookmarks();
    const idx = bookmarks.findIndex(b => b.type === type && b.id === itemId);
    if (idx >= 0) {
      bookmarks.splice(idx, 1);
    } else {
      bookmarks.push({ type, id: itemId, date: new Date().toISOString() });
    }
    this._set('bookmarks', bookmarks);
    return idx < 0; // returns true if bookmarked, false if removed
  }

  isBookmarked(type, itemId) {
    return this.getBookmarks().some(b => b.type === type && b.id === itemId);
  }

  // ── Weak Areas ──
  getWeakTopics() {
    const history = this.getQuizHistory();
    const topicStats = {};
    history.forEach(h => {
      if (!topicStats[h.topicId]) topicStats[h.topicId] = { correct: 0, total: 0 };
      topicStats[h.topicId].correct += h.score;
      topicStats[h.topicId].total += h.total;
    });

    return Object.entries(topicStats)
      .map(([topicId, stats]) => ({
        topicId,
        accuracy: stats.total ? Math.round((stats.correct / stats.total) * 100) : 0,
        attempts: stats.total
      }))
      .filter(t => t.accuracy < 70)
      .sort((a, b) => a.accuracy - b.accuracy);
  }

  // ── Reset ──
  resetAll() {
    for (const key of Object.keys(DEFAULTS)) {
      this._set(key, DEFAULTS[key]);
    }
  }
}

const storage = new StorageManager();
