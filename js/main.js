/* ---------- Cart (in-memory + localStorage-free per artifact rules -> uses simple cookie-free session var,
   but for a real deployed site (outside Claude artifacts) localStorage is fine — enabled below). ---------- */
const CART_KEY = "gemsmark_cart";

function getCart(){
  try{
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  }catch(e){ return []; }
}
function saveCart(cart){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}
function addToCart(productId, qty){
  qty = qty || 1;
  const cart = getCart();
  const existing = cart.find(i => i.id === productId);
  if (existing) existing.qty += qty;
  else cart.push({ id: productId, qty });
  saveCart(cart);
}
function removeFromCart(productId){
  saveCart(getCart().filter(i => i.id !== productId));
}
function setQty(productId, qty){
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item){ item.qty = Math.max(1, qty); saveCart(cart); }
}
function clearCart(){ saveCart([]); }
function cartCount(){ return getCart().reduce((n,i)=>n+i.qty, 0); }
function updateCartCount(){
  document.querySelectorAll(".cart-count").forEach(el => el.textContent = cartCount());
}

/* ---------- Nav toggle (mobile) ---------- */
function initNav(){
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => {
    const open = links.style.display === "flex";
    links.style.display = open ? "none" : "flex";
    links.style.flexDirection = "column";
    links.style.position = "absolute";
    links.style.top = "72px";
    links.style.left = "0"; links.style.right = "0";
    links.style.background = "#FAF7EF";
    links.style.padding = "20px 32px";
    links.style.borderBottom = "1px solid rgba(10,6,80,0.14)";
    links.style.gap = "18px";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  initNav();
});
