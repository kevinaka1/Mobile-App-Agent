-- Theme ordering is derived from mention counts; prevalence is no longer stored.
alter table public.review_themes
  drop constraint if exists review_themes_analysis_id_sentiment_rank_key;

drop index if exists public.review_themes_analysis_sentiment_rank_idx;

alter table public.review_themes
  drop column if exists prevalence,
  drop column if exists rank;
