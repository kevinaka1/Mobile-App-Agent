import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';
const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get('userId')?.trim() ?? '';
  if (!uuidPattern.test(userId)) return NextResponse.json({ error: 'A valid userId UUID query parameter is required.' }, { status: 400 });

  try {
    const supabase = getSupabase();
    const { data: ideas, error: ideasError } = await supabase.from('ideas').select('id,name,description,created_at').eq('user_id', userId);
    if (ideasError) throw ideasError;
    if (!ideas.length) return NextResponse.json({ history: [] });

    const ideaById = new Map(ideas.map((idea) => [idea.id, idea]));
    const { data: analyses, error: analysesError } = await supabase
      .from('analyses').select('id,idea_id,created_at').in('idea_id', [...ideaById.keys()]).order('created_at', { ascending: false });
    if (analysesError) throw analysesError;

    const history = analyses.flatMap((analysis) => {
      const idea = ideaById.get(analysis.idea_id);
      return idea ? [{ analysisId: analysis.id, ideaId: idea.id, name: idea.name, description: idea.description, createdAt: analysis.created_at }] : [];
    });
    return NextResponse.json({ history });
  } catch (error) {
    console.error('Could not load this user’s history from Supabase.', error);
    return NextResponse.json({ error: 'Could not load this user’s history from Supabase.' }, { status: 500 });
  }
}
