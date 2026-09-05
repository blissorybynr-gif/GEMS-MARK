# Gems Mark Website — Setup Guide

This is a plain HTML/CSS/JS website (no build step needed) with Supabase powering
buyer accounts, order storage, and the seller dashboard.

## What's included
- `index.html` — Homepage
- `shop.html` — Product catalog with filtering
- `product.html` — Product detail page
- `about.html` — Brand story
- `blog.html` / `blog-post.html` — Stone guide
- `contact.html` — Contact + custom order enquiry
- `login.html` / `signup.html` — Buyer authentication
- `account.html` — Buyer order history / tracking
- `dashboard.html` — Seller order management (update status, courier, tracking #)
- `cart.html` / `checkout.html` — Cart and manual-payment checkout
- `privacy-policy.html` — Privacy policy (filled in from your brief)
- `supabase-schema.sql` — Database setup script
- `js/products-data.js` — Product catalog (edit this to add/remove products)
- `js/stones-data.js` — Stone guide blog content
- `js/supabase-client.js` — Where your Supabase keys go

## Step 1 — Create a free Supabase project
1. Go to https://supabase.com → Sign up (free, no credit card)
2. Click "New Project" → name it "gemsmark" → set a database password (save it somewhere) → choose a region close to Pakistan/your customers
3. Once it's created, go to the **SQL Editor** (left sidebar)
4. Open `supabase-schema.sql` from this folder, copy all of it, paste into the SQL editor, click **Run**
5. Go to **Project Settings → API** (left sidebar, gear icon)
6. Copy the **Project URL** and the **anon public** key

## Step 2 — Connect the website to Supabase
1. Open `js/supabase-client.js` in any text editor
2. Replace:
   ```js
   const SUPABASE_URL = "YOUR_SUPABASE_PROJECT_URL";
   const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";
   ```
   with the values you copied
3. Save the file

## Step 3 — Make your client the "seller" (so they see the dashboard)
1. Have the client sign up once through `signup.html` on the live site (with gemsmarkjewelry@gmail.com or whichever email they'll use to manage orders)
2. Back in Supabase → SQL Editor, run:
   ```sql
   update profiles set role = 'seller' where id =
     (select id from auth.users where email = 'gemsmarkjewelry@gmail.com');
   ```
3. Now when that account logs in and visits `dashboard.html`, they'll see all orders

## Step 4 — Deploy for free
1. Push this whole folder to a GitHub repository (see earlier chat for exact git commands, or use Cursor/GitHub Desktop's "Publish" button)
2. Go to https://netlify.com or https://vercel.com → sign up free with GitHub
3. "Add new site" → "Import an existing project" → pick your repo → deploy
4. You'll get a free live URL like `gemsmark.netlify.app` immediately
5. When the client buys a real domain, connect it in Netlify/Vercel's domain settings — no rebuild needed

## Things still marked as placeholders — update before launch
- **Pendant products** (`js/products-data.js`, entries with `isSample: true`) — replace with real photos/listings once available
- **Bank Transfer / Payoneer account details** — currently just say "will be sent to your email"; add the real account details in `checkout.html` (search for "seller account info to be added here") and wire up an email step (e.g. via a free automation tool) to actually send them
- **Chatbot / automation embed** — once you have the script/link, paste it right before `</body>` on every page (or just on the pages you want it), typically a single `<script>` tag
- **"The Seasons" font** — this is a paid retail font not available for web embedding. The site currently uses Cinzel + Cormorant Garamond as a close free substitute. If you purchase a webfont license for The Seasons, replace the `@font-face`/Google Fonts import at the top of `css/style.css`

## Currency conversion
`js/products-data.js` has a single `FX_RATE` constant (USD → PKR) used everywhere prices are shown. Update that number periodically, or later swap it for a live exchange-rate API call.
