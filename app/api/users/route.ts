import { NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const { data, error } = await getSupabase().from('users').select('id,name,email,initials').order('name', { ascending: true });
    if (error) throw error;
    return NextResponse.json({ users: data });
  } catch (error) {
    console.error('Could not load users from Supabase.', error);
    return NextResponse.json({ error: 'Could not load users from Supabase.' }, { status: 500 });
  }
}
