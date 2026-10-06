-- Preserve app listing descriptions while giving the field an accurate name.
alter table public.analysis_competitors
  rename column subtitle to app_summary;
