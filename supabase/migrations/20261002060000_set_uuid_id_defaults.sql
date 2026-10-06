-- Ensure Supabase generates real UUID primary keys for every seeded entity.
alter table public.users
  alter column id set default gen_random_uuid();

alter table public.ideas
  alter column id set default gen_random_uuid();

alter table public.analyses
  alter column id set default gen_random_uuid();

alter table public.analysis_competitors
  alter column id set default gen_random_uuid();

alter table public.review_themes
  alter column id set default gen_random_uuid();
