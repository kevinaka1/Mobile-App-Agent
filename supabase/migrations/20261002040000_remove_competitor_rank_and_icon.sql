-- Keep competitors in result-array order; visual icons belong in the UI only.
alter table public.analysis_competitors
  drop constraint if exists analysis_competitors_analysis_id_rank_key;

drop index if exists public.analysis_competitors_analysis_rank_idx;

alter table public.analysis_competitors
  drop column if exists rank,
  drop column if exists icon;
