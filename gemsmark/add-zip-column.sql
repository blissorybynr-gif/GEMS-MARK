-- Run this once in Supabase SQL Editor to add the ZIP/postal code field
-- (only needed because the orders table was already created before this field existed)
alter table orders add column if not exists zip text;
