/* Stone guide content — provided directly by the client. */
const STONE_GUIDE = [
  { slug: "amethyst", name: "Amethyst", birthstone: "February",
    text: "A rich purple quartz, amethyst has long been associated with calm, clarity, and protection. It was once considered as precious as diamonds and rubies, worn by royalty and clergy alike. Today it remains one of the most popular gemstones for rings thanks to its deep, regal color that pairs beautifully with the cool tone of silver." },
  { slug: "moonstone", name: "Moonstone", birthstone: "June (alternate)",
    text: "Moonstone has a soft, glowing shimmer that seems to shift as it catches the light — a quality known as \"adularescence.\" It's often linked to intuition, balance, and new beginnings, making it a popular choice for meaningful gifts. Its milky, ethereal look feels especially at home in silver settings." },
  { slug: "turquoise", name: "Turquoise", birthstone: "December",
    text: "One of the oldest gemstones used in jewelry, turquoise has a distinctive blue-green color that has been treasured across cultures for thousands of years, from ancient Egypt to the Southwestern United States. It's often associated with protection and good fortune, and its earthy color makes it a striking contrast against polished silver." },
  { slug: "garnet", name: "Garnet", birthstone: "January",
    text: "Best known for its deep red tone, garnet actually comes in a range of colors, including green, orange, and purple. Historically it was believed to protect travelers and symbolize friendship and trust. Its warm, wine-like color offers a beautiful contrast to the coolness of silver." },
  { slug: "citrine", name: "Citrine", birthstone: null,
    text: "With its warm yellow-to-orange hue, citrine is often called the \"stone of light\" and is associated with positivity, warmth, and abundance. It's a durable, affordable alternative to yellow diamonds and adds a sunny pop of color to any ring design." },
  { slug: "peridot", name: "Peridot", birthstone: "August",
    text: "Peridot's fresh, lime-green color makes it instantly recognizable. Formed deep within the earth's mantle, this stone has been prized since ancient times and is thought to bring good health and restful sleep. It looks especially vivid set against bright, polished silver." },
  { slug: "aquamarine", name: "Aquamarine", birthstone: "March",
    text: "Named after the Latin words for \"water of the sea,\" aquamarine has a soft, clear blue tone reminiscent of ocean shallows. It's traditionally been associated with calm, courage, and clear communication — a gentle, elegant stone for everyday wear." },
  { slug: "rose-quartz", name: "Rose Quartz", birthstone: null,
    text: "Known as the stone of unconditional love, rose quartz has a soft pink, slightly translucent appearance. It's a gentle, romantic choice for rings and a popular gift for anniversaries or special occasions." },
  { slug: "labradorite", name: "Labradorite", birthstone: null,
    text: "Labradorite is prized for its \"labradorescence\" — flashes of blue, green, and gold that seem to appear and disappear as the stone moves in the light. Its mysterious, ever-changing sheen makes it a favorite for those who want a truly one-of-a-kind piece." },
  { slug: "opal", name: "Opal", birthstone: "October",
    text: "Opal is famous for its play of color — tiny flashes of rainbow hues shifting within the stone. No two opals look exactly alike, making each ring genuinely unique. It's associated with creativity, inspiration, and hope." },
  { slug: "topaz", name: "Topaz", birthstone: "November (alternate)",
    text: "Topaz is available in a wide range of colors, though blue and golden tones are among the most popular for jewelry. It's associated with strength and confidence, and its clarity gives it a bright, polished look in silver settings." },
  { slug: "agate", name: "Agate", birthstone: null,
    text: "Agate is known for its striking natural bands and patterns, with no two stones ever looking exactly alike — it comes in a wide range of colors, from earthy browns and greys to deep reds and blues. It's often associated with strength, balance, and grounding energy, and its unique, layered look makes every ring feel truly one-of-a-kind." },
  { slug: "emerald", name: "Emerald", birthstone: "May",
    text: "Emerald's deep, saturated green has made it one of the most treasured gemstones throughout history, worn by royalty and associated with wisdom, growth, and renewal. Its rich color makes a striking statement in silver settings, especially for those drawn to bold, classic jewelry." },
  { slug: "dur-e-najaf", name: "Dur-e-Najaf", birthstone: null,
    text: "Dur-e-Najaf is a beloved translucent white-to-grey stone with a soft, glass-like shimmer, historically sourced near Najaf, Iraq. It holds deep spiritual and cultural significance, particularly in South Asian and Shia Muslim traditions, and is commonly worn as a ring stone believed to bring peace, protection, and blessings to its wearer. Its gentle, understated glow pairs beautifully with silver." },
  { slug: "ruby", name: "Ruby", birthstone: "July",
    text: "Ruby's vivid red color has made it a symbol of passion, protection, and vitality for centuries. As one of the most durable gemstones, it holds up well to everyday wear, and its bold color makes it a popular choice for both engagement-style rings and statement pieces." },
  { slug: "sapphire", name: "Sapphire", birthstone: "September",
    text: "While most associated with deep blue, sapphire also occurs in shades of pink, yellow, and white. It has long symbolized wisdom, loyalty, and nobility, and its hardness and durability make it an excellent choice for rings meant for daily wear." },
  { slug: "black-onyx", name: "Black Onyx", birthstone: null,
    text: "With its deep, solid black color, onyx offers a bold, modern contrast to silver. It's often associated with strength, protection, and grounding energy, making it a popular choice for both minimalist and statement rings." },
];

const STONE_CARE = [
  "Avoid harsh chemicals — remove rings before applying perfume, lotion, or cleaning products.",
  "Store separately — keep gemstone rings in a soft pouch or lined box to prevent scratching.",
  "Clean gently — use a soft, dry cloth for silver, and a mild soap-and-water solution for most stones (avoid this for porous stones like turquoise and opal).",
  "Take off before activities — remove rings before swimming, exercising, or doing housework to protect both the stone and the setting.",
  "Get periodic checks — have prongs and settings checked occasionally to make sure stones stay secure.",
];

/* ==========================================================================
   Stone guide imagery.
   For stones we actually sell, use a real photo of one of our own pieces.
   For stones with no product yet, use a brand-styled illustration (color-
   matched faceted gem icon) rather than a stock photo — keeps the guide
   consistent and avoids using images we don't hold the rights to. Swap
   these for real macro photography of loose stones whenever available.
   ========================================================================== */
const STONE_GUIDE_COLOR = {
  amethyst: "#6a3fa0", moonstone: "#cfd6e6", turquoise: "#2f8f8a",
  garnet: "#6e1423", citrine: "#c58a2e", peridot: "#7c9a3a",
  aquamarine: "#7fc4c9", "rose-quartz": "#e6a9b8", labradorite: "#4d5b66",
  opal: "#e9e4da", topaz: "#3a6ea5", agate: "#8a4a3a", emerald: "#0f6b4a",
  "dur-e-najaf": "#c9c7cf", ruby: "#7a1f2b", sapphire: "#1b3f7a", "black-onyx": "#1a1a1a",
};

function stoneGuideImage(slug){
  if (typeof PRODUCTS !== "undefined"){
    const match = PRODUCTS.find(p => p.stone === slug && p.hasRealPhotos);
    if (match) return match.images[0];
  }
  // Real PNG files (not data-URIs) so nothing strips them in any browser/network setup
  return `assets/stones/${slug}.png`;
}
