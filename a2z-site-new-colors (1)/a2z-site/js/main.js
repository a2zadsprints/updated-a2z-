/**
 * A2Z ADS & PRINTS - Official Interactive Web Application
 * Mount Road / Triplicane, Chennai
 * Specialized in 3D LED Signage, ACP Cladding, Metal & Acrylic Letters, Digital Printing
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initPrintingStudio();
  initGalleryData();
  initContactForm();
  initLightbox();
});

/* ==========================================================================
   Navigation & Scroll Effects
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  // Sticky header class & Scroll Spy on scroll & Scroll-to-top button
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    if (scrollToTopBtn) {
      if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
      } else {
        scrollToTopBtn.classList.remove('visible');
      }
    }

    let currentSectionId = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    } else if (window.scrollY < 200) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#home') {
          link.classList.add('active');
        }
      });
    }
  });

  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile menu toggle
  if (toggle && navMenu) {
    toggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      toggle.classList.toggle('active');
    });

    // Close mobile menu when clicking nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        toggle.classList.remove('active');
      });
    });
  }
}

/* ==========================================================================
   Gallery & Portfolio Data
   ========================================================================== */
const galleryItems = [
  // 1. ACP Cladding LED Letters
  {
    id: 1,
    title: "Commercial Retail Facade ACP Cladding with 3D LED Letters",
    category: "acp-cladding",
    categoryName: "ACP Cladding + 3D LED",
    image: "assets/images/categories/acp-cladding/acp-cladding-1.jpg",
    specs: "Grade 304 Trim, 4mm Heavy ACP Sheet, Samsung LED Modules",
    desc: "Complete architectural facade paneling with high-lumen 3D channel letters installed on a prominent commercial storefront."
  },
  {
    id: 2,
    title: "Storefront Fascia Cladding with Backlit Letters",
    category: "acp-cladding",
    categoryName: "ACP Cladding + 3D LED",
    image: "assets/images/categories/acp-cladding/acp-cladding-2.jpg",
    specs: "Matte Black ACP Finish, Pure White Front-Lit Letters",
    desc: "Seamless exterior ACP paneling with weatherproof silicone grooving and sharp illumination."
  },
  {
    id: 3,
    title: "High-Gloss Architectural ACP Elevation Board",
    category: "acp-cladding",
    categoryName: "ACP Cladding + 3D LED",
    image: "assets/images/categories/acp-cladding/acp-cladding-3.jpg",
    specs: "Dual-Tone Metallic Cladding, 3D Acrylic Front-Lit",
    desc: "Custom architectural entrance sign built to withstand coastal Chennai weather conditions."
  },
  {
    id: 4,
    title: "Showroom Front ACP Cladding Installation",
    category: "acp-cladding",
    categoryName: "ACP Cladding + 3D LED",
    image: "assets/images/categories/acp-cladding/acp-cladding-4.jpg",
    specs: "Weather-resistant PVDF Coating, 12V Rainproof Power Supply",
    desc: "Precision fitted composite sheets with hidden fastener MS sub-frame."
  },

  // 2. ACP Cut LED Board
  {
    id: 5,
    title: "Precision CNC Stencil Route-Cut ACP Glow Board",
    category: "acp-cut-led",
    categoryName: "ACP CNC Route Cut",
    image: "assets/images/categories/acp-cut-led/acp-cut-led-1.jpg",
    specs: "3mm High Density Cast Acrylic Backer, Warm White LED",
    desc: "Fine-detailed typography routed out of ACP panel with internal high-diffuser acrylic for continuous soft glow."
  },
  {
    id: 6,
    title: "Clinic & Corporate CNC Stencil Backlit Board",
    category: "acp-cut-led",
    categoryName: "ACP CNC Route Cut",
    image: "assets/images/categories/acp-cut-led/acp-cut-led-2.jpg",
    specs: "Midnight Blue ACP, High Contrast Backlighting",
    desc: "Sleek, flush-finish signboard favored by medical establishments and executive offices."
  },
  {
    id: 7,
    title: "Illuminated Geometric Stencil Sign",
    category: "acp-cut-led",
    categoryName: "ACP CNC Route Cut",
    image: "assets/images/categories/acp-cut-led/acp-cut-led-3.jpg",
    specs: "Multi-Color Internal Acrylic Layering",
    desc: "Vibrant backlit silhouette effects with zero letter protrusion for ultra-clean aesthetics."
  },

  // 3. ACP LED Board
  {
    id: 8,
    title: "Full Commercial Storefront ACP 3D LED Board",
    category: "acp-led-board",
    categoryName: "ACP 3D LED Board",
    image: "assets/images/categories/acp-led-board/acp-led-board-1.jpg",
    specs: "Deep Red Gloss ACP, Cast Acrylic 3D Raised Letters",
    desc: "High-impact roadside signboard with maximum night luminescence and crisp daylight contrast."
  },
  {
    id: 9,
    title: "Retail Shop Fascia with 3D Glowing Typography",
    category: "acp-led-board",
    categoryName: "ACP 3D LED Board",
    image: "assets/images/categories/acp-led-board/acp-led-board-2.jpg",
    specs: "6500K Cool White High-Lumen LED, IP67 Waterproof",
    desc: "Standard commercial grade illuminated retail board engineered for long continuous duty."
  },
  {
    id: 10,
    title: "Boutique Signboard with Edge Glow & Front Light",
    category: "acp-led-board",
    categoryName: "ACP 3D LED Board",
    image: "assets/images/categories/acp-led-board/acp-led-board-3.jpg",
    specs: "Dual-Illuminated Acrylic Letters, 18-Gauge MS Framing",
    desc: "Sophisticated night visibility with vivid color balance and zero light leakage."
  },

  // 4. Acrylic Letters
  {
    id: 11,
    title: "Precision Laser-Cut 3D Acrylic Channel Letters",
    category: "acrylic-letters",
    categoryName: "3D Acrylic Letters",
    image: "assets/images/categories/acrylic-letters/acrylic-letters-1.jpg",
    specs: "10mm Solid Cast Acrylic, Flame Polished Edges",
    desc: "Crisp laser-cut letter forms with crystal edge refraction and rich color depth."
  },
  {
    id: 12,
    title: "Vibrant Colored Cast Acrylic Typography",
    category: "acrylic-letters",
    categoryName: "3D Acrylic Letters",
    image: "assets/images/categories/acrylic-letters/acrylic-letters-2.jpg",
    specs: "UV-Resistant Virgin Acrylic, Front Lit",
    desc: "Solid pigmented acrylic that maintains original color brilliance under harsh sunlight without fading."
  },
  {
    id: 13,
    title: "Custom Script Font Acrylic 3D Fabrication",
    category: "acrylic-letters",
    categoryName: "3D Acrylic Letters",
    image: "assets/images/categories/acrylic-letters/acrylic-letters-3.jpg",
    specs: "Handcrafted Side Returns, Even Light Diffusion",
    desc: "Intricate script logos fabricated with precision hand-forming and internal LED runs."
  },

  // 5. Aluminium Trimcap Letters
  {
    id: 14,
    title: "Anodized Aluminium Trimcap Channel Letters",
    category: "aluminium-trimcap",
    categoryName: "Aluminium Trimcap",
    image: "assets/images/categories/aluminium-trimcap/aluminium-trimcap-1.jpg",
    specs: "Extruded Aluminium Rim, UV Polycarbonate Face",
    desc: "Industry-standard robust trimcap construction designed for zero maintenance and extreme wind resistance."
  },
  {
    id: 15,
    title: "Heavy-Duty Channel Lettering for Supermarkets & Plazas",
    category: "aluminium-trimcap",
    categoryName: "Aluminium Trimcap",
    image: "assets/images/categories/aluminium-trimcap/aluminium-trimcap-2.jpg",
    specs: "Black Anodized Trimcap, High Output LED Injection Modules",
    desc: "Strong side rim prevents acrylic warping and light bleeding around letter edges."
  },
  {
    id: 16,
    title: "Architectural Exterior Trimcap Sign Elements",
    category: "aluminium-trimcap",
    categoryName: "Aluminium Trimcap",
    image: "assets/images/categories/aluminium-trimcap/aluminium-trimcap-3.jpg",
    specs: "120mm Deep Returns, Dual Sealed Against Water & Insects",
    desc: "Sealed enclosure keeps spiders and dust out, maintaining full brightness for years."
  },

  // 6. Back Structure & Heavy MS Rooftop Signs
  {
    id: 17,
    title: "Heavy MS Structural Back Frame for Rooftop Billboard",
    category: "back-structure",
    categoryName: "Rooftop & Heavy MS",
    image: "assets/images/categories/back-structure/back-structure-1.jpg",
    specs: "ISMC Heavy Channel & Angle Iron, Zinc Chromate Primer",
    desc: "Heavy-duty steel truss structure custom fabricated and anchored to building columns to handle high cyclone winds."
  },
  {
    id: 18,
    title: "Terrace High-Rise Steel Grid Installation",
    category: "back-structure",
    categoryName: "Rooftop & Heavy MS",
    image: "assets/images/categories/back-structure/back-structure-2.jpg",
    specs: "Anti-Rust Epoxy Coated MS Truss, Chemical Anchors",
    desc: "Engineered back-support structure ensuring giant 3D letters remain securely vertical at height."
  },
  {
    id: 19,
    title: "Cantilever Mounting Framework for Highway / Road Facing Signs",
    category: "back-structure",
    categoryName: "Rooftop & Heavy MS",
    image: "assets/images/categories/back-structure/back-structure-3.jpg",
    specs: "Gusset-Reinforced Joints, Welded to Rigorous Structural Specs",
    desc: "Durable foundation frame built for long-term commercial outdoor billboard deployment."
  },

  // 7. Flex Lighting Glow Sign Boards
  {
    id: 20,
    title: "Commercial Translucent Flex Glow Signboard",
    category: "flex-lighting",
    categoryName: "Flex Glow Signs",
    image: "assets/images/categories/flex-lighting/flex-lighting-1.jpg",
    specs: "High-Tension Star Flex Media, Heavy-Gauge GI Box",
    desc: "Cost-effective, highly durable translucent backlit flex signboard providing vibrant wide-area night visibility."
  },
  {
    id: 21,
    title: "Retail Storefront Backlit Flex Lightbox",
    category: "flex-lighting",
    categoryName: "Flex Glow Signs",
    image: "assets/images/categories/flex-lighting/flex-lighting-2.jpg",
    specs: "LED Tube & Module Internal Array, Weatherproof Beadings",
    desc: "Fast turnaround signboard solution ideal for supermarkets, clinics, and consumer brands."
  },

  // 8. Interior Branding & Corporate Reception
  {
    id: 22,
    title: "Corporate Reception Backdrop & 3D Typography",
    category: "interior-branding",
    categoryName: "Interior & Reception",
    image: "assets/images/categories/interior-branding/interior-branding-1.jpg",
    specs: "Brushed Metal Finish, Standoff Glass Mount, Warm Halo Backlit",
    desc: "Prestige reception branding for executive boardrooms, tech offices, and luxury clinics."
  },
  {
    id: 23,
    title: "Executive Office Wall Emblem & Directional Signage",
    category: "interior-branding",
    categoryName: "Interior & Reception",
    image: "assets/images/categories/interior-branding/interior-branding-2.jpg",
    specs: "Solid 8mm Acrylic with Metallic Foil Overlay",
    desc: "Clean interior aesthetic signage crafted for modern architectural workspaces."
  },

  // 9. LED Modules & Channel Technology
  {
    id: 24,
    title: "High-Lumen IP68 Injection Molded LED Optics",
    category: "led-modules",
    categoryName: "LED Module Tech",
    image: "assets/images/categories/led-modules/led-modules-1.jpg",
    specs: "160-Degree Wide Angle Lens, Constant Current IC, Samsung Chips",
    desc: "Commercial grade LED modules ensuring zero dark spots, uniform letter face glow, and up to 50,000 hours operating life."
  },
  {
    id: 25,
    title: "Heavy-Duty Rainproof Meanwell Power Driver Systems",
    category: "led-modules",
    categoryName: "LED Module Tech",
    image: "assets/images/categories/led-modules/led-modules-2.jpg",
    specs: "Short Circuit & Overload Protection, Metal Aluminum Shell",
    desc: "We use only industrial grade regulated power units to guarantee long-term stability without flickering."
  },

  // 10. Liquid Epoxy & Resin Letters
  {
    id: 26,
    title: "Seamless Liquid Acrylic & Epoxy Resin 3D Letters",
    category: "liquid-letters",
    categoryName: "Liquid Resin Letters",
    image: "assets/images/categories/liquid-letters/liquid-letters-1.jpg",
    specs: "Polymer Liquid Resin Casting, Borderless Crystal Glow",
    desc: "The pinnacle of neon illumination: seamless poured liquid acrylic that looks like smooth glowing colored glass."
  },
  {
    id: 27,
    title: "Rimless Liquid Resin Glow Sign for Luxury Boutiques",
    category: "liquid-letters",
    categoryName: "Liquid Resin Letters",
    image: "assets/images/categories/liquid-letters/liquid-letters-2.jpg",
    specs: "Ultra-Bright 10,000K Illumination, Zero Seams",
    desc: "Rimless letters deliver unmatched luminosity, visible from great distances under direct streetlights."
  },
  {
    id: 28,
    title: "Intricate Liquid Acrylic Custom Font Signage",
    category: "liquid-letters",
    categoryName: "Liquid Resin Letters",
    image: "assets/images/categories/liquid-letters/liquid-letters-3.jpg",
    specs: "Smooth Glossy Glass-Like Surface, Fade-Proof Dye",
    desc: "Premium liquid polymer craftsmanship providing edge-to-edge brilliant illumination."
  },

  // 11. Metal Letters (SS 304, Titanium Gold & Brass)
  {
    id: 29,
    title: "Grade 304 Titanium Gold Mirror Finish Metal 3D Letters",
    category: "metal-letters",
    categoryName: "Metal & Luxury (SS 304)",
    image: "assets/images/categories/metal-letters/metal-letters-1.jpg",
    specs: "PVD Coated Titanium Gold, SS 304 Base, Warm Halo Backlit",
    desc: "Corrosion-proof luxury metal letters tailored for high-end jewelers, prestigious corporations, and hotels."
  },
  {
    id: 30,
    title: "Brushed Satin Stainless Steel 3D Typography",
    category: "metal-letters",
    categoryName: "Metal & Luxury (SS 304)",
    image: "assets/images/categories/metal-letters/metal-letters-2.jpg",
    specs: "Grade 304 SS, Precision Argon Welded Side Returns",
    desc: "Understated executive elegance with brushed satin grain finish and invisible wall mount studding."
  },
  {
    id: 31,
    title: "Warm Halo Backlit Golden Metal Letters",
    category: "metal-letters",
    categoryName: "Metal & Luxury (SS 304)",
    image: "assets/images/categories/metal-letters/metal-letters-3.jpg",
    specs: "3000K Golden Halo Backlighting, Brass Hue Finish",
    desc: "Creates a floating 3D aura effect with light projecting backward onto granite, wood, or ACP walls."
  },
  {
    id: 32,
    title: "Heavy Mirror Chrome Stainless Steel Signage",
    category: "metal-letters",
    categoryName: "Metal & Luxury (SS 304)",
    image: "assets/images/categories/metal-letters/metal-letters-4.jpg",
    specs: "100% Rust-Proof in Coastal Sea Air, Hand Polished",
    desc: "Exceptional reflective depth that mirrors daytime surroundings and dazzles under architectural lighting."
  },

  // 12. Mini Zebra Edge-Lit 3D Letters
  {
    id: 33,
    title: "Mini Zebra Layered Edge-Lit 3D Acrylic Letters",
    category: "zebra-letters",
    categoryName: "Mini Zebra Edge-Lit",
    image: "assets/images/categories/zebra-letters/zebra-letters-1.jpg",
    specs: "Layered Dual-Tone Acrylic, Side-Emitting Lighting Channels",
    desc: "Specialized layered zebra construction projecting glowing parallel light lines along letter borders."
  },
  {
    id: 34,
    title: "Architectural Depth Zebra Typography for Cafes & Studios",
    category: "zebra-letters",
    categoryName: "Mini Zebra Edge-Lit",
    image: "assets/images/categories/zebra-letters/zebra-letters-2.jpg",
    specs: "Custom Colored Edge Strata, Front Shielded Face",
    desc: "A modern design trend giving an unmistakable layered sci-fi neon look."
  },
  {
    id: 35,
    title: "Micro-Profile Zebra Edge Glow Lettering",
    category: "zebra-letters",
    categoryName: "Mini Zebra Edge-Lit",
    image: "assets/images/categories/zebra-letters/zebra-letters-3.jpg",
    specs: "High-Density Opal Edge Diffusion, Vibrant Luminescence",
    desc: "Intricately stacked acrylic giving sharp lines and eye-catching depth."
  }
];

let activeLightboxIndex = 0;
let currentFilteredList = [...galleryItems];

/* ==========================================================================
   Gallery Rendering & Filter Tabs
   ========================================================================== */
function initGalleryData() {
  const galleryGrid = document.getElementById('galleryGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');

  if (!galleryGrid) return;

  renderGallery(galleryItems);

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterCategory = btn.getAttribute('data-filter');
      if (filterCategory === 'all') {
        currentFilteredList = [...galleryItems];
      } else {
        currentFilteredList = galleryItems.filter(item => item.category === filterCategory);
      }
      renderGallery(currentFilteredList);
    });
  });
}

// Global filter function triggered from category cards
window.filterGallery = function(categorySlug) {
  const filterButtons = document.querySelectorAll('.filter-btn');
  let matchedBtn = null;
  filterButtons.forEach(b => {
    b.classList.remove('active');
    if (b.getAttribute('data-filter') === categorySlug) {
      matchedBtn = b;
    }
  });

  if (matchedBtn) {
    matchedBtn.classList.add('active');
    currentFilteredList = galleryItems.filter(item => item.category === categorySlug);
  } else {
    // If specific button doesn't exist, show all or filtered
    currentFilteredList = galleryItems.filter(item => item.category === categorySlug);
    if (currentFilteredList.length === 0) currentFilteredList = [...galleryItems];
  }
  renderGallery(currentFilteredList);

  const portfolioSec = document.getElementById('portfolio');
  if (portfolioSec) {
    portfolioSec.scrollIntoView({ behavior: 'smooth' });
  }
};

function renderGallery(items) {
  const galleryGrid = document.getElementById('galleryGrid');
  if (!galleryGrid) return;

  if (items.length === 0) {
    galleryGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <p>No project photos found in this category.</p>
      </div>`;
    return;
  }

  galleryGrid.innerHTML = items.map((item, index) => `
    <div class="gallery-item" data-index="${index}" onclick="openLightbox(${index})">
      <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.src='assets/images/hero/hero-showcase.jpg'">
      <div class="gallery-zoom-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          <line x1="11" y1="8" x2="11" y2="14"></line>
          <line x1="8" y1="11" x2="14" y2="11"></line>
        </svg>
      </div>
      <div class="gallery-hover-overlay">
        <span class="gallery-cat-pill">${item.categoryName}</span>
        <h4 class="gallery-caption">${item.title}</h4>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   Lightbox Modal
   ========================================================================== */
function initLightbox() {
  const modal = document.getElementById('lightboxModal');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');

  if (!modal) return;

  closeBtn?.addEventListener('click', closeLightbox);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  prevBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    navigateLightbox(-1);
  });

  nextBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    navigateLightbox(1);
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });
}

function openLightbox(index) {
  const modal = document.getElementById('lightboxModal');
  if (!modal) return;

  activeLightboxIndex = index;
  updateLightboxContent();
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}
window.openLightbox = openLightbox;

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (!modal) return;

  modal.classList.remove('active');
  document.body.style.overflow = '';
}
window.closeLightbox = closeLightbox;

function navigateLightbox(direction) {
  activeLightboxIndex += direction;
  if (activeLightboxIndex < 0) {
    activeLightboxIndex = currentFilteredList.length - 1;
  } else if (activeLightboxIndex >= currentFilteredList.length) {
    activeLightboxIndex = 0;
  }
  updateLightboxContent();
}

function updateLightboxContent() {
  const item = currentFilteredList[activeLightboxIndex];
  if (!item) return;

  const imgEl = document.getElementById('lightboxImg');
  const titleEl = document.getElementById('lightboxTitle');
  const catEl = document.getElementById('lightboxCategory');
  const specsEl = document.getElementById('lightboxSpecs');
  const waBtn = document.getElementById('lightboxWhatsAppBtn');

  if (imgEl) imgEl.src = item.image;
  if (titleEl) titleEl.textContent = item.title;
  if (catEl) catEl.textContent = item.categoryName;
  if (specsEl) specsEl.textContent = item.specs || item.desc;

  if (waBtn) {
    const text = encodeURIComponent(`Hi A2Z Ads & Prints, I am interested in this design from your website gallery:\n\n*${item.title}*\nCategory: ${item.categoryName}\nSpecs: ${item.specs}\n\nPlease share quotation details.`);
    waBtn.href = `https://wa.me/919840471297?text=${text}`;
  }
}

/* ==========================================================================
   Contact & Site Survey Form
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('siteSurveyForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('surveyName')?.value || '';
    const phone = document.getElementById('surveyPhone')?.value || '';
    const signType = document.getElementById('surveySignType')?.value || '';
    const location = document.getElementById('surveyLocation')?.value || '';
    const notes = document.getElementById('surveyNotes')?.value || '';

    const msg = [
      `*A2Z ADS & PRINTS - Site Measurement & Quote Request*`,
      `Client Name: ${name}`,
      `Contact Phone: ${phone}`,
      `Signage Category: ${signType}`,
      `Site Location / Landmark: ${location}`,
      notes ? `Requirements: ${notes}` : null,
      ``,
      `Requested via Website. Please contact me for site visit & measurement.`
    ].filter(Boolean).join('\n');

    const waUrl = `https://wa.me/919840471297?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
  });
}

/* ==========================================================================
   Interactive Digital Printing & Industrial Machinery Studio
   ========================================================================== */
function initPrintingStudio() {
  const machines = {
    cnc: {
      title: "Heavy-Duty CNC Router (12x5 Bed)",
      subtitle: "12 Ft × 5 Ft Vacuum Bed • ±0.05mm Micro-Step Precision • Acrylic, ACP, Brass & MDF 3D Cutting",
      image: "assets/images/machinery/cnc-router-12x5.jpg",
      alt: "Industrial Heavy-Duty CNC Router 12x5 Flatbed Machine with Vacuum Matrix Table",
      specs: {
        width: "12 Ft × 5 Ft",
        dpi: "±0.05 mm",
        speed: "24,000 RPM",
        inks: "Acrylic, ACP, Brass"
      }
    },
    laser: {
      title: "Precision Laser Cutting & Engraving Suite (8x4 Bed)",
      subtitle: "8 Ft × 4 Ft Bed • Cast Virgin Acrylic 3D Profiling • Flame-Polished Glass-Clear Edges",
      image: "assets/images/machinery/cnc-router-12x5-alt.jpg",
      alt: "Precision Industrial Laser Cutting and Engraving Suite 8x4 Bed",
      specs: {
        width: "8 Ft × 4 Ft",
        dpi: "0.01 mm",
        speed: "150W Reci CO2",
        inks: "Cast Acrylic / SS"
      }
    },
    mutoh: {
      title: "Mutoh XpertJet 1681SR Pro Eco-Solvent Printer",
      subtitle: "DropMaster 2 Dynamic Micro-Piezo • 3-5 Years Outdoor Weatherproof Eco-Solvent",
      image: "assets/images/printers/mutoh-ecosolvent-printer.jpg",
      alt: "Mutoh XpertJet 1681SR Pro Eco-Solvent Wide Format Commercial Printer",
      labels: { width: "Print Width", dpi: "Max Resolution", speed: "Print Speed", inks: "Ink System" },
      specs: {
        width: "64 Inches",
        dpi: "1440 DPI",
        speed: "30 m²/hr",
        inks: "MS51 Eco-Sol"
      }
    },
    bender: {
      title: "GT-NL130 CNC Channel Letter Bending Machine",
      subtitle: "Automatic Aluminium Strip Bending • Clean Trimcap & Channel Letter Returns • Faster Than Hand-Bending",
      image: "assets/images/machinery/gt-nl130-bending-machine.jpg",
      alt: "GT-NL130 CNC Aluminium Channel Letter Bending Machine",
      lightBg: true,
      labels: { width: "Model", dpi: "Process", speed: "Operation", inks: "Material Handled" },
      specs: {
        width: "GT-NL130",
        dpi: "CNC Auto Bending",
        speed: "Computer Controlled",
        inks: "Aluminium Channel Strip"
      }
    },
    colorjet: {
      title: "Colorjet VERVE Hybrid UV Flatbed & Roll Printer",
      subtitle: "Hybrid UV-LED Printing • Rigid Boards & Roll Media in One Machine • Sharp, Scratch-Resistant Prints",
      image: "assets/images/printers/colorjet-verve-hybrid-uv.jpg",
      alt: "Colorjet VERVE Hybrid UV Flatbed and Roll-to-Roll Printer",
      lightBg: true,
      labels: { width: "Machine Type", dpi: "Curing", speed: "Print Modes", inks: "Media Handled" },
      specs: {
        width: "Hybrid Flatbed + Roll",
        dpi: "UV-LED Curing",
        speed: "Rigid & Roll-to-Roll",
        inks: "Acrylic, ACP, Vinyl, Flex"
      }
    },
    lasercnc: {
      title: "Heavy-Duty CNC Router (12x5 Bed)",
      subtitle: "12 Ft × 5 Ft Vacuum Bed • ±0.05mm Micro-Step Precision • Acrylic, ACP, Brass & MDF 3D Cutting",
      image: "assets/images/machinery/cnc-router-12x5.jpg",
      alt: "Industrial Heavy-Duty CNC Router 12x5 Flatbed Machine with Vacuum Matrix Table",
      specs: {
        width: "12 Ft × 5 Ft",
        dpi: "±0.05 mm",
        speed: "24,000 RPM",
        inks: "Acrylic, ACP, Brass"
      }
    }
  };

  const substrates = {
    castvinyl: {
      name: "Cast Vinyl Sticker + Matt/Gloss Lamination",
      durability: "5+ Years Outdoor Guarantee",
      desc: "Premium 100-micron polymeric cast vinyl with bubble-free air-egress adhesive, sealed with cold UV overlaminate. Resistant to Chennai sun, rain, and pressure washing.",
      tags: ["Storefront Glass Branding", "Vehicle Fleet Graphics", "Non-Fading"],
      waMsg: "Hi A2Z Ads & Prints, I would like an instant quote for Cast Vinyl Sticker printing with lamination."
    },
    backlitflex: {
      name: "Star Backlit Glow Flex (550 GSM)",
      durability: "3-5 Years Weatherproof",
      desc: "Heavyweight translucent polyester backlit flex engineered specifically for internal LED lightbox diffusion. High tensile strength against monsoon winds.",
      tags: ["Glowing Lightbox Signs", "Retail Fascia Boards", "High Contrast Night Glow"],
      waMsg: "Hi A2Z Ads & Prints, I need a quotation for Star Backlit Glow Flex banner printing."
    },
    directuv: {
      name: "Direct UV Flatbed on Cast Acrylic / Sunboard Sheet",
      durability: "7+ Years Indoor / 3+ Years Outdoor",
      desc: "Direct UV-cured ink printing onto solid 3mm to 10mm virgin acrylic and high-density foam sheets. Multi-layer white ink understrike for maximum opacity on colored or clear panels.",
      tags: ["Corporate Reception Wall", "Architectural Signage", "Zero Edge Peeling"],
      waMsg: "Hi A2Z Ads & Prints, I need a quotation for Direct UV Flatbed printing on Acrylic / Sunboard."
    },
    canvas: {
      name: "Textured Artist Canvas & Backlit Textile",
      durability: "10+ Years Indoor Longevity",
      desc: "Museum-grade 380 GSM textured cotton canvas and fire-retardant tension fabric. Ultra-wide color gamut delivers vivid photographic reproductions and luxury wall art.",
      tags: ["Interior Murals", "Gallery Art Prints", "Seamless Tension Fabric"],
      waMsg: "Hi A2Z Ads & Prints, I need an estimate for Artist Canvas / Fabric Banner printing."
    },
    oneway: {
      name: "One-Way Vision Micro-Perforated Window Film",
      durability: "3 Years Outdoor Life",
      desc: "Precision 60/40 perforated window film allowing full vibrant brand visibility from outside while maintaining crystal clear visibility and shade from inside.",
      tags: ["Showroom Glass Facades", "Office Privacy", "Vehicle Rear Glass"],
      waMsg: "Hi A2Z Ads & Prints, I need a quotation for One-Way Vision window film printing and fixing."
    },
    radium: {
      name: "Commercial Reflective Radium & Neon Vinyl",
      durability: "5-7 Years Retro-Reflective",
      desc: "Micro-prismatic retro-reflective sheeting engineered for high night-time luminosity under headlights and street illumination. Compliant with commercial safety standards.",
      tags: ["Night Directional Signs", "Safety Wayfinding", "Commercial Parking"],
      waMsg: "Hi A2Z Ads & Prints, I need a quotation for Reflective Radium vinyl printing."
    }
  };

  const tabButtons = document.querySelectorAll('.machine-tab-btn');
  const stageImg = document.getElementById('stageMachineImg');
  const stageTitle = document.getElementById('stageMachineTitle');
  const stageSubtitle = document.getElementById('stageMachineSubtitle');
  const specWidth = document.getElementById('specWidth');
  const specDpi = document.getElementById('specDpi');
  const specSpeed = document.getElementById('specSpeed');
  const specInks = document.getElementById('specInks');
  const scanLine = document.querySelector('.laser-scan-line');

  const subButtons = document.querySelectorAll('.substrate-btn');
  const subName = document.getElementById('subName');
  const subDurability = document.getElementById('subDurability');
  const subDesc = document.getElementById('subDesc');
  const subTags = document.getElementById('subTags');
  const subWaBtn = document.getElementById('subWaBtn');

  const dpiPills = document.querySelectorAll('.dpi-pill');
  const dpiValueLabel = document.getElementById('dpiValueLabel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetMachineKey = btn.getAttribute('data-machine');
      const machine = machines[targetMachineKey];
      if (!machine) return;

      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (stageImg) {
        stageImg.style.opacity = '0';
        stageImg.style.transform = 'scale(0.96)';
        setTimeout(() => {
          stageImg.src = machine.image;
          stageImg.alt = machine.alt;
          stageImg.style.opacity = '1';
          stageImg.style.transform = 'scale(1)';
        }, 200);
      }

      document.querySelector('.machine-visual-stage')?.classList.toggle('light-photo', !!machine.lightBg);
      if (stageTitle) stageTitle.textContent = machine.title;
      if (stageSubtitle) stageSubtitle.textContent = machine.subtitle;
      if (specWidth) specWidth.textContent = machine.specs.width;
      if (specDpi) specDpi.textContent = machine.specs.dpi;
      if (specSpeed) specSpeed.textContent = machine.specs.speed;
      if (specInks) specInks.textContent = machine.specs.inks;

      const defaultLabels = { width: "Bed Working Area", dpi: "Repeatability", speed: "Spindle Speed", inks: "Materials Handled" };
      const lbl = machine.labels || defaultLabels;
      const setLbl = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text; };
      setLbl('specWidthLbl', lbl.width);
      setLbl('specDpiLbl', lbl.dpi);
      setLbl('specSpeedLbl', lbl.speed);
      setLbl('specInksLbl', lbl.inks);

      if (scanLine) {
        scanLine.style.animation = 'none';
        void scanLine.offsetWidth;
        scanLine.style.animation = 'laser-scan 3.5s ease-in-out infinite';
      }
    });
  });

  subButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const subKey = btn.getAttribute('data-sub');
      const sub = substrates[subKey];
      if (!sub) return;

      subButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (subName) subName.textContent = sub.name;
      if (subDurability) subDurability.textContent = sub.durability;
      if (subDesc) subDesc.textContent = sub.desc;

      if (subTags) {
        subTags.innerHTML = sub.tags.map(t => `<span class="mat-tag">${t}</span>`).join('');
      }

      if (subWaBtn) {
        subWaBtn.href = `https://wa.me/919840471297?text=${encodeURIComponent(sub.waMsg)}`;
      }

      if (scanLine) {
        scanLine.style.boxShadow = '0 0 25px #fd0053, 0 0 50px #fd0053';
        setTimeout(() => {
          scanLine.style.boxShadow = '0 0 16px #fd0053, 0 0 30px #fd0053';
        }, 800);
      }
    });
  });

  dpiPills.forEach(pill => {
    pill.addEventListener('click', () => {
      dpiPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const dpiText = pill.getAttribute('data-dpi') || '1440 DPI';
      if (dpiValueLabel) dpiValueLabel.textContent = dpiText;
    });
  });
}
