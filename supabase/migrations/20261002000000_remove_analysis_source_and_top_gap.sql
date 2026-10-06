-- These fields are not part of the analysis record. Founders should interpret
-- the evidence themselves instead of receiving a generated "top gap" verdict.
alter table public.analyses
  drop column if exists source,
  drop column if exists top_gap;
