/**
 * NASI KULIT MAK IGUN - INTERACTIVE SCRIPT
 * Cabang Surabaya Pusat (Jl. Pregolan 11)
 * WhatsApp Hotline: 087777728228
 * Semua path gambar menggunakan folder lokal: images/menu/
 */

// Data Menu Lengkap Mak Igun sesuai foto lembar menu resmi
const MENU_ITEMS = [
  {
    id: 'nasi-kulit-lengkap',
    name: 'Nasi Kulit Lengkap',
    category: 'utama',
    price: 15400,
    tag: 'Bintang Utama ⭐',
    tagClass: 'tag-star',
    desc: 'Menu wajib & paling populer! Nasi putih/jagung, kulit ayam krispi gurih melimpah, oseng buncis renyah, serundeng wangi, ebi goreng, kuah gurih & sambal pedas nampol.',
    image: 'images/menu/nasi-kulit-lengkap.jpg',
    star: true
  },
  {
    id: 'paket-cumi',
    name: 'Paket Nasi Lengkap Cumi',
    category: 'paket',
    price: 27800,
    tag: 'Paket Puas 🦑',
    tagClass: 'tag-packet',
    desc: 'Nasi putih/jagung + Kulit ayam krispi + Cumi Oseng Kecombrang empuk wangi pedas + Oseng buncis + Serundeng + Sambal pilihan.',
    image: 'images/menu/paket-cumi.jpg'
  },
  {
    id: 'paket-paru',
    name: 'Paket Nasi Lengkap Paru',
    category: 'paket',
    price: 26500,
    tag: 'Paket Puas 🥩',
    tagClass: 'tag-packet',
    desc: 'Nasi putih/jagung + Kulit ayam krispi + Paru sapi oseng gurih kenyal legit + Oseng buncis + Serundeng + Sambal mantap.',
    image: 'images/menu/paket-paru.jpg'
  },
  {
    id: 'paket-udang',
    name: 'Paket Nasi Lengkap Udang',
    category: 'paket',
    price: 28800,
    tag: 'Paket Puas 🦐',
    tagClass: 'tag-packet',
    desc: 'Nasi putih/jagung + Kulit krispi gurih + Udang Balado segar bumbu meresap + Oseng buncis + Serundeng + Sambal.',
    image: 'images/menu/paket-udang.jpg'
  },
  {
    id: 'paket-ayam-kecombrang',
    name: 'Paket Nasi Lengkap Ayam Kecombrang',
    category: 'paket',
    price: 25300,
    tag: 'Aroma Juara 🌸',
    tagClass: 'tag-packet',
    desc: 'Nasi putih/jagung + Kulit krispi + Ayam oseng bunga kecombrang wangi menggugah selera + Pelengkap lengkap.',
    image: 'images/menu/paket-ayam-kecombrang.jpg'
  },
  {
    id: 'paket-daging-kisi',
    name: 'Paket Nasi Lengkap Daging Kisi',
    category: 'paket',
    price: 31300,
    tag: 'Menu Sultan 👑',
    tagClass: 'tag-packet',
    desc: 'Paket istimewa dengan potongan daging kisi sapi empuk berbumbu rempah oseng gurih khas King Abdi + Kulit crispy lengkap.',
    image: 'images/menu/paket-daging-kisi.jpg'
  },
  {
    id: 'cumi-oseng-kecombrang',
    name: 'Cumi Oseng Kecombrang',
    category: 'lauk',
    price: 14400,
    tag: 'Viral Banget 🔥',
    tagClass: 'tag-viral',
    desc: 'Cumi segar dipotong empuk, dioseng bersama irisan bunga kecombrang dan cabai rawit pedas harum khas Mak Igun.',
    image: 'images/menu/cumi-oseng-kecombrang.jpg'
  },
  {
    id: 'kulit-ayam-ala-carte',
    name: 'Kulit Ayam Krispi (Porsi)',
    category: 'lauk',
    price: 10900,
    tag: 'Best Seller 🍗',
    tagClass: 'tag-star',
    desc: 'Extra porsi kulit ayam goreng tepung khas Mak Igun yang super renyah kriuk-kriuk tahan lama dengan bumbu gurih meresap.',
    image: 'images/menu/kulit-ayam.jpg'
  },
  {
    id: 'paru-oseng',
    name: 'Paru Oseng Mercon',
    category: 'lauk',
    price: 12900,
    tag: 'Pedas Nampol 🌶️',
    tagClass: 'tag-viral',
    desc: 'Paru sapi pilihan yang diungkep empuk kemudian dioseng pedas gurih, tanpa bau amis, legit dan renyah.',
    image: 'images/menu/paru-oseng.jpg'
  },
  {
    id: 'daging-kisi-oseng',
    name: 'Daging Kisi Oseng',
    category: 'lauk',
    price: 17900,
    tag: 'Daging Empuk 🥩',
    tagClass: 'tag-viral',
    desc: 'Potongan urat dan daging kisi sapi lembut dioseng dengan bumbu rempah gurih pedas khas racikan Nusantara.',
    image: 'images/menu/daging-kisi-oseng.jpg'
  },
  {
    id: 'ayam-oseng-kecombrang',
    name: 'Ayam Oseng Kecombrang',
    category: 'lauk',
    price: 11900,
    tag: 'Wangi Khas 🌺',
    tagClass: 'tag-viral',
    desc: 'Suwiran daging ayam empuk ditumis dengan irisan kecombrang segar dan bumbu oseng spesial.',
    image: 'images/menu/ayam-oseng-kecombrang.jpg'
  },
  {
    id: 'udang-balado',
    name: 'Udang Balado',
    category: 'lauk',
    price: 15400,
    tag: 'Seafood Favorit 🦐',
    tagClass: 'tag-viral',
    desc: 'Udang manis segar berbalut bumbu balado pedas manis gurih yang pas di lidah.',
    image: 'images/menu/udang-balado.jpg'
  },
  {
    id: 'ayam-rempah',
    name: 'Ayam Rempah Mak Igun',
    category: 'lauk',
    price: 12900,
    tag: 'Bumbu Meresap 🍗',
    tagClass: 'tag-viral',
    desc: 'Potongan ayam goreng rempah gurih khas bumbu tradisional nusantara dengan aroma rempah kuat.',
    image: 'images/menu/ayam-rempah.jpg'
  },
  {
    id: 'babat-gongso',
    name: 'Babat Gongso',
    category: 'lauk',
    price: 12900,
    tag: 'Gongso Juara 🍲',
    tagClass: 'tag-viral',
    desc: 'Babat sapi bersih dan empuk dimasak gongso manis gurih pedas khas citarasa Jawa Timur.',
    image: 'images/menu/babat-gongso.jpg'
  },
  {
    id: 'iso-gongso',
    name: 'Iso Gongso',
    category: 'lauk',
    price: 12900,
    tag: 'Jeroan Gurih 🥣',
    tagClass: 'tag-viral',
    desc: 'Usus sapi pilihan (iso) dimasak tumis gongso dengan kecap manis dan rempah pilihan.',
    image: 'images/menu/iso-gongso.jpg'
  },
  {
    id: 'ceker-oseng',
    name: 'Ceker Oseng Mercon',
    category: 'lauk',
    price: 11900,
    tag: 'Kenyal Pedas 🌶️',
    tagClass: 'tag-viral',
    desc: 'Ceker ayam super empuk lepas tulang berselimut bumbu pedas mercon nampol.',
    image: 'images/menu/ceker-oseng.jpg'
  },
  {
    id: 'usus-oseng',
    name: 'Usus Oseng Gurih',
    category: 'lauk',
    price: 6900,
    tag: 'Ekonomis Enak 🥢',
    tagClass: 'tag-viral',
    desc: 'Usus ayam bersih dioseng bumbu kuning pedas manis gurih.',
    image: 'images/menu/usus-oseng.jpg'
  },
  {
    id: 'telur-balado',
    name: 'Telur Balado',
    category: 'lauk',
    price: 7800,
    tag: 'Klasik Mantap 🥚',
    tagClass: 'tag-viral',
    desc: 'Telur bulat goreng disiram sambal balado merah merona gurih.',
    image: 'images/menu/telur-balado.jpg'
  },
  {
    id: 'terong-balado',
    name: 'Terong Balado',
    category: 'lauk',
    price: 7600,
    tag: 'Sayur Balado 🍆',
    tagClass: 'tag-viral',
    desc: 'Potongan terong ungu lembut bermandikan sambal balado harum.',
    image: 'images/menu/terong-balado.jpg'
  },
  {
    id: 'tempe-orek',
    name: 'Tempe Orek',
    category: 'lauk',
    price: 6900,
    tag: 'Pelengkap Sedap 🥜',
    tagClass: 'tag-viral',
    desc: 'Tempe manis gurih renyah dimasak kecap dengan potongan cabai.',
    image: 'images/menu/tempe-orek.jpg'
  },
  {
    id: 'es-teh-manis',
    name: 'Es Teh / Hangat Manis',
    category: 'minuman',
    price: 6000,
    tag: 'Favorit Segar 🥤',
    tagClass: 'tag-drink',
    desc: 'Teh melati wangi seduh tradisional dengan es batu dingin menyegarkan tenggorokan.',
    image: 'images/menu/es-teh-manis.jpg'
  },
  {
    id: 'es-jeruk',
    name: 'Es Jeruk Peras',
    category: 'minuman',
    price: 10000,
    tag: 'Jeruk Asli 🍊',
    tagClass: 'tag-drink',
    desc: 'Perasan jeruk segar asli dengan gula murni dan es batu dingin pelepas dahaga.',
    image: 'images/menu/es-jeruk.jpg'
  },
  {
    id: 'es-limau',
    name: 'Es Limau Segar',
    category: 'minuman',
    price: 10000,
    tag: 'Asam Segar 🍋',
    tagClass: 'tag-drink',
    desc: 'Minuman jeruk limau khas yang asam manis semriwing, cocok sehabis makan pedas.',
    image: 'images/menu/es-limau.jpg'
  },
  {
    id: 'es-coklat',
    name: 'Es Coklat Kental',
    category: 'minuman',
    price: 12000,
    tag: 'Manis Legit 🍫',
    tagClass: 'tag-drink',
    desc: 'Coklat pekat manis creamy disajikan dengan es batu dingin nikmat.',
    image: 'images/menu/es-coklat.jpg'
  },
  {
    id: 'es-mangga',
    name: 'Es Mangga Manis',
    category: 'minuman',
    price: 10000,
    tag: 'Buah Segar 🥭',
    tagClass: 'tag-drink',
    desc: 'Rasa mangga tropis harum dan manis dingin yang sangat menyegarkan.',
    image: 'images/menu/es-mangga.jpg'
  },
  {
    id: 'teh-pucuk',
    name: 'Teh Pucuk Harum (Botol)',
    category: 'minuman',
    price: 5000,
    tag: 'Kemasan Botol 🍃',
    tagClass: 'tag-drink',
    desc: 'Teh Pucuk Harum dingin dalam kemasan botol praktis.',
    image: 'images/menu/teh-pucuk.jpg'
  },
  {
    id: 'air-mineral',
    name: 'Air Mineral Dingin',
    category: 'minuman',
    price: 6000,
    tag: 'Air Mineral 💧',
    tagClass: 'tag-drink',
    desc: 'Air mineral kemasan botol dingin menyegarkan.',
    image: 'images/menu/air-mineral.jpg'
  },
  {
    id: 'oseng-buncis',
    name: 'Oseng Buncis (Porsi Tambahan)',
    category: 'ekstra',
    price: 4900,
    tag: 'Sayur Renyah 🥬',
    tagClass: 'tag-packet',
    desc: 'Tumis buncis muda potong iris yang renyah dan gurih khas pelengkap Mak Igun.',
    image: 'images/menu/oseng-buncis.jpg'
  },
  {
    id: 'sambal-bawang',
    name: 'Sambal Bawang Juara',
    category: 'ekstra',
    price: 4400,
    tag: 'Super Pedas 🌶️',
    tagClass: 'tag-viral',
    desc: 'Sambal bawang ulek kasar dengan siraman minyak panas gurih, pedasnya bikin nagih!',
    image: 'images/menu/sambal-bawang.jpg'
  },
  {
    id: 'sambal-terasi',
    name: 'Sambal Terasi Gurih',
    category: 'ekstra',
    price: 4400,
    tag: 'Aroma Terasi 🦐',
    tagClass: 'tag-viral',
    desc: 'Sambal terasi matang beraroma sedap dan rasa pedas manis gurih yang medok.',
    image: 'images/menu/sambal-terasi.jpg'
  },
  {
    id: 'nasi-jagung',
    name: 'Extra Nasi Jagung Gurih',
    category: 'ekstra',
    price: 6300,
    tag: 'Nasi Khas 🌽',
    tagClass: 'tag-packet',
    desc: 'Nasi jagung khas Jawa Timur yang pulen, gurih dan harum, jodoh sempurna kulit krispi.',
    image: 'images/menu/nasi-jagung.jpg'
  },
  {
    id: 'nasi-biasa',
    name: 'Extra Nasi Putih Biasa',
    category: 'ekstra',
    price: 4400,
    tag: 'Nasi Pulen 🍚',
    tagClass: 'tag-packet',
    desc: 'Nasi putih hangat pulen satu porsi.',
    image: 'images/menu/nasi-biasa.jpg'
  },
  {
    id: 'kerupuk',
    name: 'Kerupuk Renyah',
    category: 'ekstra',
    price: 3000,
    tag: 'Kriuk Renyah 🥨',
    tagClass: 'tag-packet',
    desc: 'Kerupuk putih blek kaleng khas warung nusantara.',
    image: 'images/menu/kerupuk.jpg'
  }
];

// Shopping cart state
let cart = [];

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderMenu(MENU_ITEMS);
  initMenuFilters();
  initMenuSearch();
  initModals();
  initCart();
  checkOpenStatus();
  initFeedbackForm();
});

// Format Rupiah
function formatRupiah(number) {
  return 'Rp ' + number.toLocaleString('id-ID');
}

// 1. Navbar & Mobile Drawer
function initNavbar() {
  const header = document.querySelector('.main-header');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky header background
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    highlightCurrentSection();
  });

  // Hamburger toggle
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // Active section indicator on scroll
  function highlightCurrentSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset + 120;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(l => l.classList.remove('active'));
        if (navLink) navLink.classList.add('active');
      }
    });
  }
}

// 2. Render Menu Cards
function renderMenu(items) {
  const menuGrid = document.getElementById('menuGrid');
  if (!menuGrid) return;

  if (items.length === 0) {
    menuGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 50px 20px;">
        <h4 style="font-family: var(--font-heading); color: var(--color-purple); font-size: 1.3rem;">Menu tidak ditemukan 😢</h4>
        <p style="color: var(--color-text-muted); margin-top: 8px;">Coba gunakan kata kunci pencarian yang lain.</p>
      </div>
    `;
    return;
  }

  menuGrid.innerHTML = items.map(item => `
    <article class="menu-card ${item.star ? 'featured-star' : ''}" data-category="${item.category}">
      <span class="card-top-tag ${item.tagClass}">${item.tag}</span>
      <div class="menu-card-img-wrap">
        <img class="menu-card-img" src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='images/branding/logo.jpg'" />
      </div>
      <div class="menu-card-body">
        <h4 class="menu-card-title">${item.name}</h4>
        <p class="menu-card-desc">${item.desc}</p>
        <div class="menu-card-footer">
          <div class="menu-card-price">
            ${formatRupiah(item.price)}
          </div>
          <button class="add-cart-btn" onclick="addToCart('${item.id}')" title="Tambahkan ${item.name} ke pesanan">
            <span>+ Pesan</span>
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

// 3. Filter Menu by Category
function initMenuFilters() {
  const tabs = document.querySelectorAll('.category-tab-btn');
  const searchInput = document.getElementById('menuSearchInput');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      if (searchInput) searchInput.value = '';

      const category = tab.getAttribute('data-category');
      if (category === 'all') {
        renderMenu(MENU_ITEMS);
      } else {
        const filtered = MENU_ITEMS.filter(item => item.category === category);
        renderMenu(filtered);
      }
    });
  });
}

// 4. Instant Search on Menu
function initMenuSearch() {
  const searchInput = document.getElementById('menuSearchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase().trim();
    const tabs = document.querySelectorAll('.category-tab-btn');
    
    // Reset active tab to 'all'
    tabs.forEach(t => t.classList.remove('active'));
    document.querySelector('.category-tab-btn[data-category="all"]')?.classList.add('active');

    if (!keyword) {
      renderMenu(MENU_ITEMS);
      return;
    }

    const filtered = MENU_ITEMS.filter(item => 
      item.name.toLowerCase().includes(keyword) || 
      item.desc.toLowerCase().includes(keyword)
    );
    renderMenu(filtered);
  });
}

// 5. Modals Management (Cart, Physical Menu Lightbox, Gallery Lightbox)
function initModals() {
  // Modal Closes
  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modal = e.target.closest('.modal-overlay');
      if (modal) modal.classList.remove('active');
    });
  });

  // Close when clicking overlay backdrop
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });
  });

  // Physical menu brochure zoom button
  const viewMenuBrochureBtn = document.getElementById('viewMenuBrochureBtn');
  const menuBrochureModal = document.getElementById('menuBrochureModal');
  if (viewMenuBrochureBtn && menuBrochureModal) {
    viewMenuBrochureBtn.addEventListener('click', () => {
      menuBrochureModal.classList.add('active');
    });
  }

  // Gallery Card Click to open Lightbox
  const galleryCards = document.querySelectorAll('.gallery-card');
  const galleryModal = document.getElementById('galleryModal');
  const galleryModalImg = document.getElementById('galleryModalImg');
  const galleryModalTitle = document.getElementById('galleryModalTitle');
  const galleryModalDesc = document.getElementById('galleryModalDesc');

  galleryCards.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      const title = card.getAttribute('data-title') || 'Nasi Kulit Mak Igun';
      const desc = card.getAttribute('data-desc') || 'Cabang Surabaya Pusat';

      if (galleryModal && galleryModalImg) {
        galleryModalImg.src = img.src;
        if (galleryModalTitle) galleryModalTitle.textContent = title;
        if (galleryModalDesc) galleryModalDesc.textContent = desc;
        galleryModal.classList.add('active');
      }
    });
  });
}

// 6. Cart / Order Simulation
function initCart() {
  const cartToggleBtns = document.querySelectorAll('.cart-toggle-trigger');
  const cartModal = document.getElementById('cartModal');
  const sendWhatsAppBtn = document.getElementById('sendWhatsAppBtn');

  cartToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (cartModal) {
        updateCartModal();
        cartModal.classList.add('active');
      }
    });
  });

  if (sendWhatsAppBtn) {
    sendWhatsAppBtn.addEventListener('click', handleWhatsAppOrder);
  }
}

function addToCart(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  const existing = cart.find(c => c.id === itemId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  updateCartBadges();
  showToast(`"${item.name}" ditambahkan ke pesanan! 🍗`);
}

function changeCartQty(itemId, delta) {
  const itemIndex = cart.findIndex(c => c.id === itemId);
  if (itemIndex === -1) return;

  cart[itemIndex].qty += delta;
  if (cart[itemIndex].qty <= 0) {
    cart.splice(itemIndex, 1);
  }

  updateCartBadges();
  updateCartModal();
}

function updateCartBadges() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const badges = document.querySelectorAll('.cart-badge-count');
  badges.forEach(badge => {
    badge.textContent = totalItems;
  });
}

function updateCartModal() {
  const container = document.getElementById('cartItemsList');
  const totalDisplay = document.getElementById('cartTotalDisplay');
  const emptyState = document.getElementById('cartEmptyState');
  const formWrap = document.getElementById('cartOrderFormWrap');

  if (!container || !totalDisplay) return;

  if (cart.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    if (formWrap) formWrap.style.display = 'none';
    totalDisplay.textContent = 'Rp 0';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';
  if (formWrap) formWrap.style.display = 'block';

  let totalPrice = 0;
  container.innerHTML = cart.map(item => {
    const itemTotal = item.price * item.qty;
    totalPrice += itemTotal;
    return `
      <div class="cart-item-row">
        <div class="cart-item-info">
          <h5>${item.name}</h5>
          <p>${formatRupiah(item.price)} × ${item.qty} = <strong>${formatRupiah(itemTotal)}</strong></p>
        </div>
        <div class="cart-item-qty-controls">
          <button class="qty-btn" onclick="changeCartQty('${item.id}', -1)" title="Kurang">-</button>
          <span style="font-weight: 700; min-width: 20px; text-align: center;">${item.qty}</span>
          <button class="qty-btn" onclick="changeCartQty('${item.id}', 1)" title="Tambah">+</button>
        </div>
      </div>
    `;
  }).join('');

  totalDisplay.textContent = formatRupiah(totalPrice);
}

function handleWhatsAppOrder() {
  if (cart.length === 0) {
    alert('Keranjang pesanan masih kosong. Silakan pilih menu terlebih dahulu!');
    return;
  }

  const nameInput = document.getElementById('orderCustomerName');
  const typeSelect = document.getElementById('orderTypeSelect');
  const notesInput = document.getElementById('orderCustomerNotes');

  const customerName = nameInput ? nameInput.value.trim() || 'Pelanggan' : 'Pelanggan';
  const orderType = typeSelect ? typeSelect.value : 'Makan di Tempat (Dine-in)';
  const customerNotes = notesInput ? notesInput.value.trim() : '-';

  let totalPrice = 0;
  let menuListText = '';

  cart.forEach((item, index) => {
    const subtotal = item.price * item.qty;
    totalPrice += subtotal;
    menuListText += `${index + 1}. *${item.name}* (x${item.qty}) = ${formatRupiah(subtotal)}\n`;
  });

  const waMessage = `Halo Nasi Kulit Mak Igun Cabang Surabaya Pusat! 👋\n` +
    `Saya ingin memesan menu via Website Resmi:\n\n` +
    `👤 *Nama:* ${customerName}\n` +
    `🍽️ *Tipe Pesanan:* ${orderType}\n` +
    `📝 *Catatan Tambahan:* ${customerNotes}\n\n` +
    `📋 *Daftar Menu yang Dipesan:*\n` +
    `${menuListText}\n` +
    `💰 *Total Estimasi:* *${formatRupiah(totalPrice)}*\n` +
    `*(Belum termasuk PB 1 / Ongkir jika delivery)*\n\n` +
    `Mohon konfirmasi ketersediaan dan total pembayarannya ya. Terima kasih! 🙏`;

  const waUrl = `https://wa.me/6287777728228?text=${encodeURIComponent(waMessage)}`;
  window.open(waUrl, '_blank');
}

// 7. Toast Notification
function showToast(message) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span>✨</span> <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// 8. Live Status Check (10:00 - 00:00 WIB)
function checkOpenStatus() {
  const statusBadge = document.getElementById('liveStatusBadge');
  if (!statusBadge) return;

  const now = new Date();
  // Surabaya is WIB (UTC+7)
  const utcHours = now.getUTCHours();
  const wibHours = (utcHours + 7) % 24;

  const isOpen = (wibHours >= 10 && wibHours < 24);

  if (isOpen) {
    statusBadge.className = 'location-badge-status status-open';
    statusBadge.innerHTML = `<span class="status-indicator-dot"></span> BUKA SEKARANG • 10.00 - 00.00 WIB`;
  } else {
    statusBadge.className = 'location-badge-status';
    statusBadge.style.backgroundColor = '#FFEBEE';
    statusBadge.style.color = '#C62828';
    statusBadge.innerHTML = `<span class="status-indicator-dot" style="background:#C62828"></span> TUTUP SEMENTARA • Buka Jam 10.00 WIB`;
  }
}

// 9. Feedback / Review Form
function initFeedbackForm() {
  const form = document.getElementById('feedbackForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]')?.value || 'Kakak';
    alert(`Terima kasih banyak ${name}! Masukan & saran Anda telah kami terima untuk kemajuan Nasi Kulit Mak Igun. ❤️`);
    form.reset();
  });
}
