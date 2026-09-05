/* ==========================================================================
   GEMS MARK — Product data
   Sourced from gemsmark.etsy.com (titles, materials, USD pricing, real
   reviews). PKR figures are calculated automatically from FX_RATE below —
   update that one number whenever the rate should refresh, or wire it to
   a live FX API later.

   Photos: only listings marked "hasRealPhotos:true" have real Etsy photo
   URLs (fetched directly from the store). Every other product uses a
   placeholder illustration and is marked `placeholderImage:true` — swap
   the `images` array for the client's real photography before go-live.

   Pendants: the Etsy "Pendants (7)" category exists but its individual
   listings weren't reachable during this build — the 4 pendant entries
   below are SAMPLE placeholders (clearly flagged) so the shop layout and
   checkout flow can be built and tested now. Replace with the real
   pendant listings/photos as soon as they're available.
   ========================================================================== */

const FX_RATE = 277.5; // 1 USD in PKR — update periodically

const STONE_INFO = {
  amethyst:   { label: "Amethyst",   birthstone: "February" },
  moonstone:  { label: "Moonstone",  birthstone: "June (alternate)" },
  turquoise:  { label: "Turquoise",  birthstone: "December" },
  garnet:     { label: "Garnet",     birthstone: "January" },
  citrine:    { label: "Citrine",    birthstone: null },
  peridot:    { label: "Peridot",    birthstone: "August" },
  aquamarine: { label: "Aquamarine", birthstone: "March" },
  "rose-quartz": { label: "Rose Quartz", birthstone: null },
  labradorite:{ label: "Labradorite",birthstone: null },
  opal:       { label: "Opal",       birthstone: "October" },
  topaz:      { label: "Topaz",      birthstone: "November (alternate)" },
  agate:      { label: "Agate",      birthstone: null },
  emerald:    { label: "Emerald",    birthstone: "May" },
  "dur-e-najaf": { label: "Dur-e-Najaf", birthstone: null },
  ruby:       { label: "Ruby",       birthstone: "July" },
  sapphire:   { label: "Sapphire",   birthstone: "September" },
  "black-onyx": { label: "Black Onyx", birthstone: null },
  moissanite: { label: "Moissanite", birthstone: null },
  coral:      { label: "Coral",      birthstone: null },
};

const PRODUCTS = [
  {
    id: "emerald-zamrud-classic",
    title: "Natural Emerald Ring | 925 Sterling Silver | Zamrud Gemstone",
    stone: "emerald",
    type: "ring",
    price: 330.00,
    originalPrice: 440.00,
    material: "925 Sterling Silver, natural Emerald (Zamrud)",
    description: "A deep, saturated emerald set in solid 925 sterling silver — handcrafted with a bezel setting that lets the stone's natural color carry the piece. Made to order; all ring sizes available.",
    sizesNote: "All sizes available — tell us your ring size at checkout or via custom order notes.",
    processing: "10–12 business days",
    hasRealPhotos: true,
    images: [
      "https://i.etsystatic.com/62419654/r/il/7a7eb0/7929813317/il_794xN.7929813317_8etc.jpg",
      "https://i.etsystatic.com/62419654/r/il/0e471d/7929808289/il_794xN.7929808289_bh67.jpg",
      "https://i.etsystatic.com/62419654/r/il/6e3238/7929808715/il_794xN.7929808715_gayo.jpg",
      "https://i.etsystatic.com/62419654/r/il/d7146f/7929808567/il_794xN.7929808567_ath0.jpg",
      "https://i.etsystatic.com/62419654/r/il/2ae5d2/7929808577/il_794xN.7929808577_i8b8.jpg"
    ]
  },
  {
    id: "emerald-square-statement",
    title: "Green Square Emerald Ring | 925 Sterling Silver | Natural Zamrud",
    stone: "emerald", type: "ring",
    price: 423.75, originalPrice: 565.00,
    material: "925 Sterling Silver, natural Emerald",
    description: "A bold square-cut emerald in a substantial silver setting — a statement piece for anyone drawn to rich, saturated green.",
    processing: "10–12 business days",
    hasRealPhotos: true,
    images: ["https://i.etsystatic.com/62419654/r/il/c7764d/7993200407/il_794xN.7993200407_lm0f.jpg"]
  },
  {
    id: "ruby-yaqoot-gold-plated",
    title: "Natural Ruby Ring | 925 Sterling Silver | Yaqoot Gold-Plated",
    stone: "ruby", type: "ring",
    price: 442.50, originalPrice: 590.00,
    material: "925 Sterling Silver (gold-plated band), natural Ruby (Yaqoot)",
    description: "A vivid natural ruby on a gold-plated silver band — Yaqoot has long symbolised passion and vitality, and this cut shows the stone at its most confident.",
    processing: "10–12 business days",
    hasRealPhotos: true,
    images: ["https://i.etsystatic.com/62419654/r/il/f4102d/8009432199/il_794xN.8009432199_6m21.jpg"]
  },
  {
    id: "ruby-red-classic",
    title: "Natural Red Ruby Ring | 925 Sterling Silver | Yaqoot Gemstone",
    stone: "ruby", type: "ring",
    price: 303.75, originalPrice: 405.00,
    material: "925 Sterling Silver, natural Ruby",
    description: "A classic red ruby silhouette in solid sterling silver, handmade with a clean, wearable-everyday profile.",
    processing: "10–12 business days",
    hasRealPhotos: true,
    images: ["https://i.etsystatic.com/62419654/r/il/f24289/7929820019/il_794xN.7929820019_pe5v.jpg"]
  },
  {
    id: "ruby-zircon-halo",
    title: "Natural Ruby Ring | 925 Sterling Silver | Yaqoot With Zircons",
    stone: "ruby", type: "ring",
    price: 281.25, originalPrice: 375.00,
    material: "925 Sterling Silver, natural Ruby, Zircon accents",
    description: "A central ruby framed with a halo of zircons for extra sparkle — handcrafted for a more formal, statement look.",
    processing: "10–12 business days",
    hasRealPhotos: true,
    images: ["https://i.etsystatic.com/62419654/r/il/782e79/7947439516/il_794xN.7947439516_l2gk.jpg"]
  },
  {
    id: "ruby-signet",
    title: "Natural Red Ruby Ring | Sterling Silver, Signet Style",
    stone: "ruby", type: "ring",
    price: 206.25, originalPrice: 275.00,
    material: "925 Sterling Silver, natural Ruby",
    description: "A signet-style silhouette with a bold ruby face — understated on the sides, confident up front.",
    processing: "10–12 business days",
    hasRealPhotos: true,
    images: ["https://i.etsystatic.com/62419654/r/il/a153e1/7905817706/il_794xN.7905817706_nhqh.jpg"]
  },
  {
    id: "ruby-zircon-signet",
    title: "Men's Natural Red Ruby Ring | Sterling Silver | Zircons | Signet Style",
    stone: "ruby", type: "ring",
    price: 228.75, originalPrice: 305.00,
    material: "925 Sterling Silver, natural Ruby, Zircon accents",
    description: "A signet-style ruby ring with a border of zircons for extra shine — a versatile everyday-to-formal piece.",
    processing: "10–12 business days",
    hasRealPhotos: true,
    images: ["https://i.etsystatic.com/62419654/c/2380/2380/299/309/il/969879/7948333995/il_794xN.7948333995_lusp.jpg"]
  },
  {
    id: "ruby-gift-for-him",
    title: "Natural Handmade Red Ruby Ring | 925 Sterling Silver | Gift for Him",
    stone: "ruby", type: "ring",
    price: 238.41, originalPrice: 317.88,
    material: "925 Sterling Silver, natural Ruby (Yaqoot)",
    description: "A warm, wine-red ruby handset in silver — a considered gift piece with a quietly confident finish.",
    processing: "10–12 business days",
    hasRealPhotos: true,
    images: ["https://i.etsystatic.com/62419654/r/il/a5d937/7454009143/il_794xN.7454009143_7htz.jpg"]
  },
  {
    id: "sapphire-neelam-trio",
    title: "Natural Big Blue Sapphire (Neelam) with Ruby & Moissanite",
    stone: "sapphire", type: "ring",
    price: 404.05, originalPrice: 538.73,
    material: "925 Sterling Silver, natural Sapphire, Ruby accent, Moissanite accents",
    description: "A large natural blue sapphire (Neelam) at the centre, flanked by a ruby and moissanite accents — sapphire has long symbolised wisdom and loyalty.",
    processing: "10–12 business days",
    hasRealPhotos: true,
    images: ["https://i.etsystatic.com/62419654/r/il/642f0e/7512796725/il_794xN.7512796725_fma3.jpg"]
  },
  {
    id: "turquoise-feroza-classic",
    title: "Natural Blue Feroza Ring | Turquoise Stone | 925 Sterling Silver",
    stone: "turquoise", type: "ring",
    price: 168.75, originalPrice: 225.00,
    material: "925 Sterling Silver, natural Turquoise (Feroza)",
    description: "A striking blue-green turquoise in solid silver — one of the oldest gemstones in jewelry history, prized for its earthy, protective character.",
    processing: "10–12 business days",
    hasRealPhotos: true,
    images: ["https://i.etsystatic.com/62419654/r/il/46fab6/8506676787/il_794xN.8506676787_9tut.jpg"]
  },
  {
    id: "turquoise-feroza-bold",
    title: "Natural Turquoise | Blue Feroza Stone | 925 Sterling Silver",
    stone: "turquoise", type: "ring",
    price: 183.75, originalPrice: 245.00,
    material: "925 Sterling Silver, natural Turquoise",
    description: "A bolder-cut turquoise set for everyday wear, with the stone's natural veining left visible.",
    processing: "10–12 business days",
    hasRealPhotos: true,
    images: ["https://i.etsystatic.com/62419654/r/il/f69ca4/8453805946/il_794xN.8453805946_jh7o.jpg"]
  },
  {
    id: "peridot-green-classic",
    title: "Natural Peridot Ring | Handmade Green Gemstone Ring",
    stone: "peridot", type: "ring",
    price: 217.50, originalPrice: 290.00,
    material: "925 Sterling Silver, natural Peridot",
    description: "Peridot's fresh lime-green tone set bright against polished silver — formed deep in the earth's mantle and prized since ancient times.",
    processing: "10–12 business days",
    hasRealPhotos: true,
    images: ["https://i.etsystatic.com/62419654/r/il/53d9d1/7957639660/il_794xN.7957639660_5ezm.jpg"]
  },
  {
    id: "citrine-statement",
    title: "Natural Citrine Ring | 925 Sterling Silver | Statement Ring",
    stone: "citrine", type: "ring",
    price: 303.75, originalPrice: 405.00,
    material: "925 Sterling Silver, natural Citrine",
    description: "A warm yellow citrine — the 'stone of light' — cut for a confident, statement-ready silhouette.",
    processing: "10–12 business days",
    hasRealPhotos: true,
    images: ["https://i.etsystatic.com/62419654/r/il/945768/7948296817/il_794xN.7948296817_c148.jpg"]
  },
  {
    id: "moissanite-diamond-10ct",
    title: "10 Carat Moissanite Diamond Ring | Handmade 925 Sterling Silver",
    stone: "moissanite", type: "ring",
    price: 472.78, originalPrice: 630.37,
    material: "925 Sterling Silver, 10ct Moissanite",
    description: "A brilliant 10-carat moissanite in solid silver — maximum sparkle, handmade setting.",
    processing: "10–12 business days",
    hasRealPhotos: true,
    images: ["https://i.etsystatic.com/62419654/r/il/631f69/7506205092/il_794xN.7506205092_rqf8.jpg"]
  },
  {
    id: "moissanite-gold-band",
    title: "Moissanite Ring | 925 Sterling Silver Gold-Plated Band",
    stone: "moissanite", type: "ring",
    price: 183.75, originalPrice: 245.00,
    material: "925 Sterling Silver (gold-plated), Moissanite",
    description: "A brighter, more affordable moissanite piece on a gold-plated silver band — everyday sparkle.",
    processing: "10–12 business days",
    hasRealPhotos: true,
    images: ["https://i.etsystatic.com/62419654/r/il/c6720e/8285205123/il_794xN.8285205123_ojyv.jpg"]
  },
  {
    id: "agate-blood-red-aqeeq",
    title: "Natural Blood Red Yemeni Agate | 925 Sterling Silver | Aqeeq Ring",
    stone: "agate", type: "ring",
    price: 158.29, originalPrice: 211.06,
    material: "925 Sterling Silver, natural Yemeni Agate (Aqeeq)",
    description: "Deep blood-red Yemeni Aqeeq, one of GemsMark's most loved cuts — no two stones look exactly alike.",
    processing: "10–12 business days",
    hasRealPhotos: true,
    images: ["https://i.etsystatic.com/62419654/r/il/3cd3d0/7607356455/il_794xN.7607356455_kvha.jpg"]
  },
  {
    id: "agate-blood-red-aqeeq-2",
    title: "Natural Agate Ring For Men | Handcrafted Yemeni Blood Red Aqeeq | 925 Sterling Silver",
    stone: "agate", type: "ring",
    price: 150.00, originalPrice: 200.00,
    material: "925 Sterling Silver, natural Yemeni Agate (Aqeeq)",
    description: "A handcrafted blood-red Aqeeq with a cleaner, simpler bezel — one of our most requested everyday pieces.",
    processing: "10–12 business days",
    hasRealPhotos: true,
    images: ["https://i.etsystatic.com/62419654/r/il/51519a/7637528036/il_794xN.7637528036_jath.jpg"]
  },
  {
    id: "agate-green-aqeeq",
    title: "Natural Green Yemeni Agate Ring | 925 Sterling Silver | Aqeeq",
    stone: "agate", type: "ring",
    price: 161.25, originalPrice: 215.00,
    material: "925 Sterling Silver, natural Yemeni Agate",
    description: "Earthy green Yemeni Aqeeq in a handmade silver setting — grounding and understated.",
    processing: "10–12 business days",
    hasRealPhotos: true,
    images: ["https://i.etsystatic.com/62419654/r/il/db28cc/8458863306/il_794xN.8458863306_2opz.jpg"]
  },
  {
    id: "agate-brown-aqeeq",
    title: "Natural Brown Yemeni Agate | 925 Sterling Silver | Aqeeq Ring",
    stone: "agate", type: "ring",
    price: 161.25, originalPrice: 215.00,
    material: "925 Sterling Silver, natural Yemeni Agate",
    description: "Warm brown-banded agate with natural striping — every stone genuinely one of a kind.",
    processing: "10–12 business days",
    hasRealPhotos: true,
    images: ["https://i.etsystatic.com/62419654/c/2608/2608/185/195/il/9fbc3f/7944509191/il_794xN.7944509191_5kas.jpg"]
  },
  {
    id: "agate-black-aqeeq",
    title: "Natural Yemeni Agate Ring | Black Aqeeq Gemstone | Handmade",
    stone: "agate", type: "ring",
    price: 157.50, originalPrice: 210.00,
    material: "925 Sterling Silver, natural Black Agate",
    description: "Deep black Aqeeq for a bold, minimalist look — strength and grounding in a quiet silhouette.",
    processing: "10–12 business days",
    hasRealPhotos: true,
    images: ["https://i.etsystatic.com/62419654/r/il/95fa53/7798512971/il_794xN.7798512971_d61w.jpg"]
  },
  {
    id: "agate-white-oval",
    title: "Natural White Agate | Oval Yemeni Aqeeq | Handmade Silver Ring",
    stone: "agate", type: "ring",
    price: 161.25, originalPrice: 215.00,
    material: "925 Sterling Silver, natural White Agate",
    description: "A softer, oval-cut white agate with subtle natural cloud patterning.",
    processing: "10–12 business days",
    hasRealPhotos: true,
    images: ["https://i.etsystatic.com/62419654/r/il/5f68a7/7905526819/il_794xN.7905526819_6xyb.jpg"]
  },
  {
    id: "agate-zulfiqar-motif",
    title: "Natural Blood Red Agate | Yemeni Aqeeq | Zulfiqar Sword Motifs",
    stone: "agate", type: "ring",
    price: 191.25, originalPrice: 255.00,
    material: "925 Sterling Silver, natural Agate",
    description: "Blood-red Aqeeq set in a band detailed with Zulfiqar sword motifs on either side — a piece with cultural weight as well as color.",
    processing: "10–12 business days",
    hasRealPhotos: true,
    images: ["https://i.etsystatic.com/62419654/c/2777/2777/101/111/il/38e0b5/7923997767/il_794xN.7923997767_hm8k.jpg"]
  },
  {
    id: "dur-e-najaf-clear",
    title: "Natural Real Dur-e-Najaf | Handmade 925 Sterling Silver Ring",
    stone: "dur-e-najaf", type: "ring",
    price: 213.54, originalPrice: 284.72,
    material: "925 Sterling Silver, natural Dur-e-Najaf (clear quartz)",
    description: "A translucent white-to-grey Dur-e-Najaf with a soft glass-like shimmer — historically sourced near Najaf, Iraq, and worn for its spiritual significance.",
    processing: "10–12 business days",
    hasRealPhotos: true,
    images: ["https://i.etsystatic.com/62419654/c/672/672/60/60/il/81e63c/7406027408/il_794xN.7406027408_imna.jpg"]
  },
  {
    id: "coral-marjan",
    title: "Handcrafted Red Coral (Marjan) Ring | Sterling Silver",
    stone: "coral", type: "ring",
    price: 228.75, originalPrice: 305.00,
    material: "925 Sterling Silver, natural Red Coral (Marjan)",
    description: "A warm, organic red coral piece — Marjan has a long history in South Asian jewelry traditions.",
    processing: "10–12 business days",
    hasRealPhotos: true,
    images: ["https://i.etsystatic.com/62419654/r/il/7ac1a3/7857544006/il_794xN.7857544006_a1a2.jpg"]
  },

  /* ---------------- PENDANTS (real GemsMark listings) ---------------- */
  {
    id: "pendant-agate-1",
    title: "Natural Yemeni Agate Pendant | 925 Sterling Silver | Handcrafted Aqeeq Necklace | Unisex",
    stone: "agate", type: "pendant",
    price: 123.75, originalPrice: 165.00,
    material: "925 Sterling Silver, natural Yemeni Agate (Aqeeq)",
    description: "A handcrafted Aqeeq pendant, unisex in design — a smaller, everyday way to wear a natural gemstone.",
    processing: "10–12 business days",
    hasRealPhotos: true,
    images: ["https://i.etsystatic.com/62419654/r/il/3cb455/8008688384/il_794xN.8008688384_79cw.jpg"]
  },
  {
    id: "pendant-agate-2",
    title: "Yemeni Aqeeq Pendant | 925 Sterling Silver | Handcrafted Natural Aqeeq Necklace | Unisex",
    stone: "agate", type: "pendant",
    price: 195.00, originalPrice: 260.00,
    material: "925 Sterling Silver, natural Yemeni Agate (Aqeeq)",
    description: "A larger Aqeeq pendant with a bolder silhouette, hand-set in solid sterling silver.",
    processing: "10–12 business days",
    hasRealPhotos: true,
    images: ["https://i.etsystatic.com/62419654/c/2608/2608/189/195/il/5d49e4/8007116416/il_794xN.8007116416_2at9.jpg"]
  },
  {
    id: "pendant-agate-3",
    title: "Natural Yemeni Agate Pendant | 925 Sterling Silver | Handcrafted Aqeeq Necklace | Unisex",
    stone: "agate", type: "pendant",
    price: 146.25, originalPrice: 195.00,
    material: "925 Sterling Silver, natural Yemeni Agate (Aqeeq)",
    description: "A mid-size Aqeeq pendant with natural banding — every stone genuinely one of a kind.",
    processing: "10–12 business days",
    hasRealPhotos: true,
    images: ["https://i.etsystatic.com/62419654/r/il/c972ea/8033790405/il_794xN.8033790405_s08a.jpg"]
  },
  {
    id: "pendant-agate-4",
    title: "Natural Yemeni Agate Pendant | 925 Sterling Silver | Handcrafted Aqeeq Necklace | Unisex",
    stone: "agate", type: "pendant",
    price: 153.75, originalPrice: 205.00,
    material: "925 Sterling Silver, natural Yemeni Agate (Aqeeq)",
    description: "A handcrafted Aqeeq pendant with a deep, saturated tone — a quiet, versatile everyday piece.",
    processing: "10–12 business days",
    hasRealPhotos: true,
    images: ["https://i.etsystatic.com/62419654/r/il/19e268/8029637531/il_794xN.8029637531_f2vb.jpg"]
  },
];

// ---- derived helpers ----
function pkr(usd){
  return Math.round(usd * FX_RATE).toLocaleString('en-PK');
}
function findProduct(id){
  return PRODUCTS.find(p => p.id === id);
}
// Approximate real gemstone colors, used only until real product photography is added
const STONE_COLOR = {
  emerald: "#0f6b4a", ruby: "#7a1f2b", sapphire: "#1b3f7a", turquoise: "#2f8f8a",
  peridot: "#7c9a3a", citrine: "#c58a2e", moissanite: "#d8dbe0", agate: "#8a4a3a",
  "dur-e-najaf": "#c9c7cf", coral: "#b5493a",
};
function placeholderSVG(stoneKey, label){
  const stoneFill = STONE_COLOR[stoneKey] || "#7c7893";
  const bg = '%23F1ECDF';
  const fg = encodeURIComponent(stoneFill);
  const txt = encodeURIComponent(label);
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Crect width='600' height='600' fill='${bg}'/%3E%3Ccircle cx='300' cy='250' r='4' fill='none' stroke='%23D69F3E' stroke-width='1' stroke-dasharray='2 4'/%3E%3Cpolygon points='300,150 380,230 300,370 220,230' fill='${fg}' opacity='0.85'/%3E%3Cpolygon points='300,150 380,230 300,260 220,230' fill='${fg}' opacity='0.55'/%3E%3Ctext x='300' y='450' font-family='Georgia,serif' font-size='24' fill='%230A0650' text-anchor='middle'%3E${txt}%3C/text%3E%3Ctext x='300' y='478' font-family='Arial,sans-serif' font-size='13' letter-spacing='2' fill='%23D69F3E' text-anchor='middle'%3EPHOTO COMING SOON%3C/text%3E%3C/svg%3E`;
}
function productImage(product){
  if (product.images && product.images.length) return product.images[0];
  const label = STONE_INFO[product.stone] ? STONE_INFO[product.stone].label : product.title.slice(0,18);
  return placeholderSVG(product.stone, label);
}
