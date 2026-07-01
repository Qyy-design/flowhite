const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const links = [...document.querySelectorAll("[data-page-link]")];
const pages = [...document.querySelectorAll("[data-page]")];
const footerLogo = document.querySelector(".footer-logo");
const langButton = document.querySelector(".lang");
let currentLanguage = "zh";

const englishCopy = [
  { selector: '[data-page-link="products"]', text: "Products" },
  { selector: '[data-page-link="culture"]', text: "Culture" },
  { selector: '[data-page-link="stores"]', text: "Stores" },
  { selector: '[data-page-link="impact"]', text: "Brand Impact" },
  { selector: "#products .hero-copy h1", text: "Space Reveals the World" },
  {
    selector: "#products .hero-copy p",
    text: "Each object holds a quiet pause, where nature appears in its purest form"
  },
  { selector: "#products > .section.narrow:not(.launch):not(.series):not(.hot) .section-title h2", text: "Categories" },
  { selector: "#products > .section.narrow:not(.launch):not(.series):not(.hot) .section-title p", text: "Brand classification" },
  { selector: ".category-grid h3", text: ["Rings", "Bracelets", "Necklaces", "Earrings"] },
  { selector: ".launch .section-title h2", text: "New Arrivals" },
  { selector: ".launch .section-title p", text: "New product launch" },
  { selector: ".launch-text h3", text: ["Moon Tide Glow · Silver Earrings", "Snowlit Heart · Jade Necklace"] },
  { selector: ".launch-text .en", text: ["Lunar silver shaped by hand", "Kunlun jade held in silver veins"] },
  {
    selector: ".launch-text p:not(.en)",
    text: [
      "The waxing and waning moon is held in a silver gleam by the ear. Each crescent edge is hand-hammered with wave-like texture, moving like moonlight over tides and echoing an Eastern sense of moonrise above the sea.",
      "Kunlun jade is carved into a translucent icy heart, while silver is cast into a leaf-vein setting by lost-wax technique. It feels like a living emblem growing out of snow, carrying the lasting promise of a cherished bond."
    ]
  },
  { selector: ".series .section-title h2", text: "Collections" },
  { selector: ".series .section-title p", text: "Series classification" },
  { selector: ".series-card h3", text: ["Monsoon Notes", "Floating Light", "Perching Branches", "Botanical Chronicle"] },
  {
    selector: ".series-card p",
    text: [
      "Cloud paths gathered into jewelry",
      "Soft whispers woven into ear-side light",
      "Morning dew growing gently at the neckline",
      "Blossoms condensed along the collarbone"
    ]
  },
  { selector: ".hot .section-title h2", text: "Popular Pieces" },
  { selector: ".hot .section-title p", text: "Hot product" },
  { selector: "#culture .hero-copy h1", text: "Nature Made, Every Being Alive" },
  {
    selector: "#culture .hero-copy p",
    text: "In conversation with nature, we give every piece its life and spirit"
  },
  {
    selector: ".story-cards .copy-stack p",
    text: [
      "Flowhite comes from the design idea of whitespace and the flowing state of life.",
      "We hope everyone who chooses and wears flowhite can keep a breathing space for themselves: private, free, and joyful.",
      "Nature is our most precious source of inspiration and the home we cherish most. With natural dreams as our starting point, we use eco-conscious materials and sustainable craft to transform natural beauty and dreamlike mystery into wearable art.",
      "Every piece is a tribute to nature.",
      "We believe jewelry is more than decoration; it is an attitude. Inspired by natural dreams, our designs break convention by abstracting and artfully reshaping natural elements into distinctive pieces.",
      "Express yourself bravely and live with your own radiance."
    ]
  },
  { selector: ".center-copy h2", text: "Design Concept" },
  { selector: ".center-copy .en-title", text: "Design concept" },
  {
    selector: ".center-copy .copy-stack p",
    text: [
      "Nature and dreams are among the richest spaces of imagination. We draw from living forms, collect the fleeting colors of dreams, and weave the two into art that moves at the fingertips. Every piece is a private murmur between nature and dream, carrying a longing for a more beautiful life.",
      "Through the Natural Dream collection, we hope to share nature's beauty and dreamlike mystery with every wearer, so even in a busy city they can feel a moment of quiet and wonder."
    ]
  },
  { selector: ".inspire-title h2", text: "Inspiration" },
  { selector: ".inspire-title p", text: "Source of inspiration" },
  {
    selector: ".inspire-copy-left p",
    text: [
      "We turn our gaze to the earth, where every answer to beauty is hidden.",
      "The veins of a fallen leaf, the arc of morning dew, and the spiral of a shell are all exquisite drafts written by nature. We do not invent them; we translate them, turning dragonfly wings into silver lightness, clouds into pearl softness, and waves into crystalline brilliance."
    ]
  },
  {
    selector: ".inspire-copy-right p",
    text: [
      "Inspired by butterflies, we transform their fluttering posture into earrings, necklaces, and rings, using light materials and gentle colors to create a dreamy, graceful mood.",
      "Inspired by dragonflies, we capture their airy movement and abstract the lines of their wings and bodies into earrings, brooches, and bracelets. Hollow carving and enamel craft reveal their delicacy, as if a summer pond moment were held at the fingertips."
    ]
  },
  { selector: ".vision h2", text: "Brand Vision" },
  { selector: ".vision .en-title", text: "Brand vision" },
  {
    selector: ".vision article > p:not(.en-title)",
    text: "Through our designs, we hope every wearer can feel the beauty of nature and dreams, discover their own distinct charm, and find calm and wonder within a busy urban life."
  },
  { selector: "#stores .hero-copy h1", text: "Meet the Murmur of Nature and Dreams at Flowhite" },
  {
    selector: "#stores .hero-copy p",
    text: "Let jewelry become a poetic place for your conversation with nature"
  },
  { selector: ".suzhou-copy h2", text: "Suzhou" },
  { selector: ".suzhou-copy .en-title", text: "Suzhou Store" },
  { selector: ".suzhou-copy p:not(.en-title)", text: "No. 60-62 Yanjia Lane, Gusu District, Suzhou, Jiangsu" },
  { selector: ".chengdu-copy h2", text: "Chengdu" },
  { selector: ".chengdu-copy .en-title", text: "Chengdu Store" },
  { selector: ".chengdu-copy p:not(.en-title)", text: "No. 4 Jianshe South Branch Road, Eastern Suburb Memory Park, Chenghua District, Chengdu, Sichuan" },
  { selector: ".tianjin-copy h2", text: "Tianjin" },
  { selector: ".tianjin-copy .en-title", text: "Tianjin Stores" },
  {
    selector: ".tianjin-copy p:not(.en-title)",
    text: "No. 102 Chongqing Road, Heping District, Tianjin<br />1F Joy City, Nankai District, Tianjin<br />No. 69 Chifeng Road, Heping District, Tianjin"
  },
  { selector: ".service-copy h2", text: "Offline Services" },
  { selector: ".service-copy .en-title", text: "Offline service" },
  {
    selector: ".service-copy li",
    text: [
      "Personal design consultation: one-on-one styling and design advice, with recommendations or custom pieces based on each customer's taste, style, and needs.",
      "Engraving service: names, dates, or personal messages can be engraved onto selected pieces, adding emotional value.",
      "Comfortable try-on areas with mirrors, lighting, and photo props allow customers to try freely and share their looks.",
      "Natural Dream themed blind boxes offer a fixed-price surprise piece for customers who enjoy discovery."
    ]
  },
  {
    selector: ".service-extra li",
    text: [
      "Eco-conscious packaging uses sustainable materials to express the brand's environmental values.",
      "Charity partnerships support nature protection organizations, with part of the proceeds from each piece donated to environmental causes."
    ]
  },
  { selector: "#impact .hero-copy h1", text: "Wear the Echo of Nature" },
  {
    selector: "#impact .hero-copy p",
    text: "Sustainable materials, offline experiences, and public-good partnerships extend the warmth of the brand"
  },
  { selector: ".impact article h2", text: ["Eco Packaging", "Charity Partnerships", "Real Experiences"] },
  {
    selector: ".impact article p",
    text: [
      "Packaging is made with eco-conscious materials to share the brand's sustainable vision.",
      "We partner with nature protection organizations and donate part of each sale to environmental work.",
      "Through store displays, try-on services, and themed blind boxes, Natural Dream enters everyday life."
    ]
  },
  {
    selector: ".site-footer nav button",
    text: ["Brand News", "Partners", "Contact Us", "How to Buy", "After-sales", "Join Us"]
  }
];

const i18nTargets = englishCopy.map((entry) => {
  const nodes = [...document.querySelectorAll(entry.selector)];
  return {
    ...entry,
    nodes,
    zh: nodes.map((node) => node.innerHTML)
  };
});

function readSavedLanguage() {
  try {
    return localStorage.getItem("flowhite-language") === "en" ? "en" : "zh";
  } catch {
    return "zh";
  }
}

function saveLanguage(language) {
  try {
    localStorage.setItem("flowhite-language", language);
  } catch {
    // Local files can block storage in some browsers; the toggle still works for this visit.
  }
}

function setLanguage(language, persist = true) {
  const isEnglish = language === "en";
  currentLanguage = isEnglish ? "en" : "zh";

  document.documentElement.lang = isEnglish ? "en" : "zh-CN";
  document.documentElement.dataset.language = currentLanguage;
  document.title = isEnglish ? "flowhite Jewelry" : "flowhite 流白首饰";

  i18nTargets.forEach(({ nodes, zh, text }) => {
    const copy = Array.isArray(text) ? text : nodes.map(() => text);

    nodes.forEach((node, index) => {
      node.innerHTML = isEnglish ? copy[index] : zh[index];
    });
  });

  if (langButton) {
    langButton.innerHTML = isEnglish ? "EN<span>/CN</span>" : "CN<span>/EN</span>";
    langButton.setAttribute("aria-label", isEnglish ? "切换到中文" : "Switch to English");
    langButton.setAttribute("title", isEnglish ? "切换到中文" : "Switch to English");
  }

  if (persist) {
    saveLanguage(language);
  }
}

function showPage(pageName) {
  const target = pages.some((page) => page.dataset.page === pageName) ? pageName : "products";

  pages.forEach((page) => {
    page.classList.toggle("active", page.dataset.page === target);
  });

  links.forEach((link) => {
    link.classList.toggle("active", link.dataset.pageLink === target);
  });

  header.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
  window.scrollTo(0, 0);
}

function syncFromHash() {
  showPage((window.location.hash || "#products").replace("#", ""));
}

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 18);
}

links.forEach((link) => {
  link.addEventListener("click", () => {
    showPage(link.dataset.pageLink);
  });
});

footerLogo?.addEventListener("click", () => showPage("products"));

menuButton?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

langButton?.addEventListener("click", () => {
  const nextLanguage = currentLanguage === "en" ? "zh" : "en";
  setLanguage(nextLanguage);
});

window.addEventListener("hashchange", syncFromHash);
window.addEventListener("scroll", updateHeader, { passive: true });

setLanguage(readSavedLanguage(), false);
syncFromHash();
updateHeader();
