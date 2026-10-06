import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase';
import type { Sentiment } from '@/types/market';

export const dynamic = 'force-dynamic';
const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function reviewCountLabel(count: number): string {
  return count >= 1000 ? `${(count / 1000).toFixed(1).replace(/\.0$/, '')}k` : String(count);
}

export async function GET(request: NextRequest) {
  const analysisId = request.nextUrl.searchParams.get('analysisId')?.trim() ?? '';
  if (!uuidPattern.test(analysisId)) return NextResponse.json({ error: 'A valid analysisId UUID query parameter is required.' }, { status: 400 });

  try {
    const supabase = getSupabase();
    const { data: analysis, error: analysisError } = await supabase.from('analyses')
      .select('id,idea_id,similar_app_count,reviews_scanned_count,sentiment_group_count,created_at').eq('id', analysisId).maybeSingle();
    if (analysisError) throw analysisError;
    if (!analysis) return NextResponse.json({ error: 'That saved market snapshot was not found.' }, { status: 404 });

    const [ideaResult, competitorResult, themeResult] = await Promise.all([
      supabase.from('ideas').select('id,user_id,name,description,created_at').eq('id', analysis.idea_id).single(),
      supabase.from('analysis_competitors').select('id,app_name,app_summary,app_url,rating,match_percent').eq('analysis_id', analysis.id).order('match_percent', { ascending: false, nullsFirst: false }),
      supabase.from('review_themes').select('id,sentiment,summary,example_review,mentions').eq('analysis_id', analysis.id).order('mentions', { ascending: false })
    ]);
    if (ideaResult.error) throw ideaResult.error;
    if (competitorResult.error) throw competitorResult.error;
    if (themeResult.error) throw themeResult.error;

    const reviewThemes: Record<Sentiment, Array<{ id: string; name: string; example: string; mentions: number }>> = { positive: [], average: [], negative: [] };
    themeResult.data.forEach((theme) => reviewThemes[theme.sentiment as Sentiment].push({
      id: theme.id, name: theme.summary, example: theme.example_review, mentions: theme.mentions
    }));

    const snapshot = {
      idea: {
        id: ideaResult.data.id, userId: ideaResult.data.user_id, name: ideaResult.data.name,
        description: ideaResult.data.description, createdAt: ideaResult.data.created_at
      },
      analysis: {
        id: analysis.id, ideaId: analysis.idea_id, similarAppCount: analysis.similar_app_count,
        reviewsScannedCount: analysis.reviews_scanned_count, sentimentGroupCount: analysis.sentiment_group_count,
        createdAt: analysis.created_at
      },
      competitors: competitorResult.data.map((app) => ({
        id: app.id, name: app.app_name, appSummary: app.app_summary, url: app.app_url,
        rating: app.rating, similarityPercent: app.match_percent
      })),
      reviewThemes,
      summary: {
        similarAppCount: analysis.similar_app_count, reviewsScannedCount: analysis.reviews_scanned_count,
        reviewCountLabel: reviewCountLabel(analysis.reviews_scanned_count), sentimentGroupCount: analysis.sentiment_group_count
      },
      isDemo: true
    };
    return NextResponse.json({ snapshot });
  } catch (error) {
    console.error('Could not load the market snapshot from Supabase.', error);
    return NextResponse.json({ error: 'Could not load the market snapshot from Supabase.' }, { status: 500 });
  }
}
