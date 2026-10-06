-- Analysis rows represent completed snapshots in the current MVP; they don't
-- need a workflow status field until asynchronous jobs are introduced.
alter table public.analyses
  drop column if exists status;
