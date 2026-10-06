const mockData = require('../../data/market-fixtures.json');
const { requireUuidByMockId, upsertAndReturnIds } = require('./lib.js');

async function seedReviewThemes(supabase, analysisUuidByMockId) {
  const mockThemes = mockData.reviewThemes.map(theme => ({
    mock_id: theme.mockId,
    mock_analysis_id: theme.mockAnalysisId,
    sentiment: theme.sentiment,
    summary: theme.summary,
    example_review: theme.exampleReview,
    mentions: theme.mentions
  }));
  const themes = mockThemes.map(({ mock_analysis_id, ...theme }) => ({
    ...theme,
    analysis_id: requireUuidByMockId(analysisUuidByMockId, mock_analysis_id, 'mock_analysis_id')
  }));
  return upsertAndReturnIds(supabase, 'review_themes', themes);
}

module.exports = { seedReviewThemes };
