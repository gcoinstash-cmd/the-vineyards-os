-- ==============================================================================
-- THE VINEYARDS OS — SUPABASE RELATIONAL SCHEMA
-- Luxury Estate, Community HOA & Amenity Dispatch Operating System
-- ==============================================================================

create extension if not exists "uuid-ossp";

-- 1. RESIDENT NOTICES & COMMUNITY FEED
create table if not exists public.feed_items (
    id uuid primary key default gen_random_uuid(),
    category text not null check (category in ('Event', 'Notice', 'Announcement')),
    title text not null,
    summary text not null,
    content text not null,
    author text not null default 'Estate Management',
    image_url text,
    likes_count integer not null default 0,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. HOA DUES & SPECIAL ASSESSMENTS
create table if not exists public.assessments (
    id uuid primary key default gen_random_uuid(),
    unit_number text not null,
    resident_name text not null,
    category text not null default 'Quarterly HOA Assessment',
    amount numeric(10, 2) not null,
    status text not null default 'Pending' check (status in ('Pending', 'Paid', 'Past Due')),
    due_date date not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. MAINTENANCE TICKETS
create table if not exists public.maintenance_tickets (
    id uuid primary key default gen_random_uuid(),
    unit_number text not null,
    title text not null,
    description text not null,
    priority text not null check (priority in ('Normal', 'Urgent', 'Low')),
    status text not null default 'Submitted' check (status in ('Submitted', 'Scheduled', 'In Progress', 'Completed')),
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. SMART GUEST PASSES & RFID ACCREDITATION
create table if not exists public.guest_passes (
    id uuid primary key default gen_random_uuid(),
    visitor_name text not null,
    unit_number text not null,
    date_valid date not null,
    pass_type text not null default 'Day Visitor' check (pass_type in ('Day Visitor', 'Contractor', 'Overnight')),
    rfid_code text unique not null,
    status text not null default 'Active' check (status in ('Active', 'Expired', 'Revoked')),
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS POLICIES
alter table public.feed_items enable row level security;
alter table public.assessments enable row level security;
alter table public.maintenance_tickets enable row level security;
alter table public.guest_passes enable row level security;

create policy "Public read feed" on public.feed_items for select using (true);
create policy "Public read assessments" on public.assessments for select using (true);
create policy "Public create tickets" on public.maintenance_tickets for insert with check (true);
create policy "Public read tickets" on public.maintenance_tickets for select using (true);
create policy "Public read guest passes" on public.guest_passes for select using (true);
