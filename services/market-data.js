/*
 * Mock persistence and query layer for the prototype.
 * The public methods and returned snapshot shape are the UI's data contract.
 * Replace this adapter with API requests when a backend is available.
 */
const mockDatabase = window.MarketFixtures;

function createId(prefix) {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`;
}

function inferCategory(description) {
  const idea = description.toLowerCase();
  if (/meal|food|recipe|cook|fridge|grocery|diet|nutrition/.test(idea)) return 'meal';
  if (/budget|money|finance|spend|bank|saving/.test(idea)) return 'budget';
  if (/fitness|workout|run|exercise|gym|training/.test(idea)) return 'fitness';
  return 'general';
}

function reviewCountLabel(count) {
  return count >= 1000 ? `${(count / 1000).toFixed(1).replace(/\.0$/, '')}k` : String(count);
}

function getIdea(ideaId) {
  return mockDatabase.ideas.find(idea => idea.id === ideaId);
}

function toSnapshot(analysis) {
  if (!analysis) return null;
  const idea = getIdea(analysis.ideaId);
  const competitors = mockDatabase.analysisCompetitors
    .filter(row => row.analysisId === analysis.id)
    .sort((a, b) => a.rank - b.rank)
    .map(row => ({
      id: row.id,
      name: row.appName,
      subtitle: row.subtitle,
      url: row.appUrl,
      icon: row.icon,
      rating: row.rating,
      similarityPercent: row.matchPercent,
      rank: row.rank
    }));
  const reviewThemes = { positive: [], average: [], negative: [] };
  mockDatabase.reviewThemes
    .filter(row => row.analysisId === analysis.id)
    .sort((a, b) => a.rank - b.rank)
    .forEach(row => reviewThemes[row.sentiment].push({
      id: row.id,
      name: row.summary,
      example: row.exampleReview,
      mentions: row.mentions,
      prevalence: row.prevalence,
      rank: row.rank
    }));

  return {
    idea,
    analysis: { ...analysis },
    competitors,
    reviewThemes,
    summary: {
      similarAppCount: analysis.similarAppCount,
      reviewsScannedCount: analysis.reviewsScannedCount,
      reviewCountLabel: reviewCountLabel(analysis.reviewsScannedCount),
      sentimentGroupCount: analysis.sentimentGroupCount,
      topOpportunity: analysis.topGap
    },
    source: analysis.source,
    isDemo: analysis.source === 'mock'
  };
}

window.MarketDataService = {
  async listUsers() {
    return mockDatabase.users.map(user => ({ ...user }));
  },

  async listHistory(userId) {
    const userIdeaIds = new Set(mockDatabase.ideas.filter(idea => idea.userId === userId).map(idea => idea.id));
    return mockDatabase.analyses
      .filter(analysis => userIdeaIds.has(analysis.ideaId))
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
      .map(analysis => {
        const idea = getIdea(analysis.ideaId);
        return { analysisId: analysis.id, ideaId: idea.id, name: idea.name, description: idea.description, status: analysis.status, createdAt: analysis.createdAt };
      });
  },

  async getSnapshot(analysisId) {
    return toSnapshot(mockDatabase.analyses.find(analysis => analysis.id === analysisId));
  },

  async createAnalysis({ userId, description }) {
    const category = inferCategory(description);
    const createdAt = new Date().toISOString();
    const ideaId = createId('idea');
    const analysisId = createId('analysis');
    const idea = { id: ideaId, userId, name: description.slice(0, 52), description, createdAt };
    const catalog = mockDatabase.catalogs[category];

    mockDatabase.ideas.push(idea);
    mockDatabase.analyses.push({
      id: analysisId,
      ideaId,
      status: 'completed',
      similarAppCount: catalog.competitors.length,
      reviewsScannedCount: 8400,
      sentimentGroupCount: 3,
      topGap: category === 'meal' ? 'Personalized meal planning' : 'A clearer, more personalized experience',
      source: 'mock',
      category,
      createdAt
    });

    catalog.competitors.forEach((app, index) => mockDatabase.analysisCompetitors.push({
      id: createId('competitor'),
      analysisId,
      appName: app.name,
      subtitle: app.subtitle,
      appUrl: `https://example.test/mock-apps/${encodeURIComponent(app.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''))}`,
      icon: app.icon,
      rank: index + 1,
      rating: app.rating,
      matchPercent: app.similarityPercent
    }));

    Object.entries(catalog.reviewThemes).forEach(([sentiment, themes]) => themes.forEach((theme, index) => mockDatabase.reviewThemes.push({
      id: createId('theme'),
      analysisId,
      sentiment,
      summary: theme.name,
      exampleReview: theme.example,
      mentions: theme.mentions,
      prevalence: theme.prevalence,
      rank: index + 1
    })));

    return toSnapshot(mockDatabase.analyses.find(analysis => analysis.id === analysisId));
  }
};
