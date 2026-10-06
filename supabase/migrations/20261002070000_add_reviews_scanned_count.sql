-- Store the number of reviews represented in each analysis snapshot.
alter table public.analyses
  add column if not exists reviews_scanned_count integer not null default 0
  check (reviews_scanned_count >= 0);
