-- =============================================================
-- GEMS MARK — Supabase schema
-- Run this once in your Supabase project: SQL Editor -> New query -> paste -> Run
-- =============================================================

-- Profiles: extends Supabase's built-in auth.users with a role flag
create table if not exists profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text,
  role text default 'buyer' check (role in ('buyer','seller')),
  created_at timestamp with time zone default now()
);

-- Auto-create a profile row whenever someone signs up
create or replace function handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, role)
  values (new.id, new.raw_user_meta_data->>'full_name', coalesce(new.raw_user_meta_data->>'role','buyer'));
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure handle_new_user();

-- Orders
create table if not exists orders (
  id uuid default gen_random_uuid() primary key,
  buyer_id uuid references auth.users on delete set null,
  full_name text not null,
  email text not null,
  phone text not null,
  address text not null,
  city text not null,
  country text,
  notes text,
  items jsonb not null,              -- [{id, title, qty, price_usd}]
  total_usd numeric not null,
  total_pkr numeric not null,
  payment_method text not null,      -- 'bank_transfer' | 'payoneer'
  status text default 'pending' check (status in ('pending','processing','shipped','delivered','cancelled')),
  courier text,                       -- 'FedEx' | 'SkyNet Worldwide Express' | 'UPS' | 'DHL'
  tracking_number text,
  created_at timestamp with time zone default now()
);

-- Row Level Security
alter table profiles enable row level security;
alter table orders enable row level security;

-- Profiles: a user can read/update only their own profile
create policy "Users read own profile" on profiles for select using (auth.uid() = id);
create policy "Users update own profile" on profiles for update using (auth.uid() = id);

-- Orders: buyers can see & create their own orders
create policy "Buyers view own orders" on orders for select using (auth.uid() = buyer_id);
create policy "Anyone can place an order" on orders for insert with check (true);

-- Orders: sellers (role = 'seller') can view & update ALL orders
create policy "Sellers view all orders" on orders for select using (
  exists (select 1 from profiles where profiles.id = auth.uid() and profiles.role = 'seller')
);
create policy "Sellers update all orders" on orders for update using (
  exists (select 1 from profiles where profiles.id = auth.uid() and profiles.role = 'seller')
);

-- =============================================================
-- To make your client the "seller" (so they can see the dashboard):
-- after they sign up once through the normal signup page, run:
--
--   update profiles set role = 'seller' where id =
--     (select id from auth.users where email = 'gemsmarkjewelry@gmail.com');
--
-- =============================================================
