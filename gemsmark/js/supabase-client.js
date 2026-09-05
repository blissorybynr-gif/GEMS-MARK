/* ==========================================================================
   GEMS MARK — Supabase connection
   1. Create a free project at https://supabase.com
   2. Run supabase-schema.sql (in the project root) in the SQL editor
   3. Paste your Project URL + anon public key below
   4. In Supabase → Authentication → Providers, make sure "Email" is enabled
   Until real keys are added, auth/order calls will fail gracefully and the
   site will show a friendly "not connected yet" message instead of crashing.
   ========================================================================== */

const SUPABASE_URL = "https://uaxwpowfxdjlwjodyzlk.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_UFo48vC9dokPZ15KLtP1tw_w8eAr_gT";

let supabaseClient = null;
function getSupabase(){
  if (supabaseClient) return supabaseClient;
  if (!window.supabase || SUPABASE_URL.startsWith("YOUR_")) return null;
  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  return supabaseClient;
}

const NOT_CONNECTED_MSG = "This feature needs Supabase connected first — see js/supabase-client.js for the 2-minute setup.";

/* ---------- Auth ---------- */
async function signUpBuyer(email, password, fullName){
  const sb = getSupabase();
  if (!sb) return { error: NOT_CONNECTED_MSG };
  const { data, error } = await sb.auth.signUp({
    email, password,
    options: { data: { full_name: fullName, role: "buyer" } }
  });
  if (error) return { error: error.message };
  return { data };
}

async function signInBuyer(email, password){
  const sb = getSupabase();
  if (!sb) return { error: NOT_CONNECTED_MSG };
  const { data, error } = await sb.auth.signInWithPassword({ email, password });
  if (error) return { error: error.message };
  return { data };
}

async function signOutBuyer(){
  const sb = getSupabase();
  if (!sb) return;
  await sb.auth.signOut();
}

async function getCurrentUser(){
  const sb = getSupabase();
  if (!sb) return null;
  const { data } = await sb.auth.getUser();
  return data ? data.user : null;
}

/* ---------- Orders ---------- */
async function createOrder(order){
  const sb = getSupabase();
  if (!sb) return { error: NOT_CONNECTED_MSG };
  const user = await getCurrentUser();
  const { data, error } = await sb.from("orders").insert([{
    buyer_id: user ? user.id : null,
    full_name: order.fullName,
    email: order.email,
    phone: order.phone,
    address: order.address,
    city: order.city,
    country: order.country,
    zip: order.zip,
    notes: order.notes,
    items: order.items,
    total_usd: order.totalUsd,
    total_pkr: order.totalPkr,
    payment_method: order.paymentMethod,
    status: "pending",
    courier: null,
    tracking_number: null,
  }]).select();
  if (error) return { error: error.message };
  return { data };
}

async function getMyOrders(){
  const sb = getSupabase();
  if (!sb) return { error: NOT_CONNECTED_MSG };
  const user = await getCurrentUser();
  if (!user) return { error: "Please log in to see your orders." };
  const { data, error } = await sb.from("orders").select("*").eq("buyer_id", user.id).order("created_at", { ascending: false });
  if (error) return { error: error.message };
  return { data };
}

/* ---------- Seller dashboard ---------- */
async function getAllOrders(){
  const sb = getSupabase();
  if (!sb) return { error: NOT_CONNECTED_MSG };
  const { data, error } = await sb.from("orders").select("*").order("created_at", { ascending: false });
  if (error) return { error: error.message };
  return { data };
}

async function updateOrderStatus(orderId, fields){
  const sb = getSupabase();
  if (!sb) return { error: NOT_CONNECTED_MSG };
  const { data, error } = await sb.from("orders").update(fields).eq("id", orderId).select();
  if (error) return { error: error.message };
  return { data };
}
