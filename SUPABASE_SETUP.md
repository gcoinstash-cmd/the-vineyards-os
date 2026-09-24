# Supabase Turnkey Setup — The Vineyards OS

Follow these 3 quick steps to wire your Supabase backend to **The Vineyards OS** in under 3 minutes.

---

### Step 1: Create Supabase Project
1. Log into your [Supabase Dashboard](https://app.supabase.com).
2. Click **New Project** and name it `the-vineyards`.
3. Set a secure database password and select your closest deployment region.

---

### Step 2: Run Database Schema & Seed Data
1. Open the **SQL Editor** tab in your Supabase dashboard.
2. Open `supabase/schema.sql` from this package, paste its contents into the editor, and click **Run**.
3. Open `supabase/seed.sql` from this package, paste its contents into the editor, and click **Run**.
4. Both the allocations, tasting reservations, cellar drops, and club members tables with Row Level Security (RLS) are now initialized!

---

### Step 3: Wire Environment Variables
1. Copy `.env.example` to `.env` in the root of your project:
   ```bash
   cp .env.example .env
   ```
2. In your Supabase Dashboard, go to **Settings > API**.
3. Copy the **Project URL** and **Anon / Public Key** and paste them into `.env`:
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```
4. Start your development server or trigger your deployment build:
   ```bash
   npm run dev
   ```

---

### Step 4: Admin Bypass Passkey
- Go to `/admin` on your deployment or click **"[ SOMMELIER PASS ]"** in the navigation header.
- Demo Passkey: `vineyards2026`
- Enjoy your private estate vineyard and cellar management platform!
