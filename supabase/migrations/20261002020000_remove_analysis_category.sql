-- Category is inferred at runtime to choose mock data and is not analysis data.
alter table public.analyses
  drop column if exists category;
