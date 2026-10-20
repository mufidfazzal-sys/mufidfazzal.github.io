/**
 * NASI KULIT MAK IGUN - DEDICATED ADMIN PORTAL SCRIPT
 * Standalone Portal: admin.html
 * Sinkronisasi data real-time ke data.json & localStorage
 */

// Data Menu Lengkap Bawaan Pabrik Mak Igun
const DEFAULT_MENU_ITEMS = [
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
    price: 29800,
    tag: 'Daging Empuk 🍖',
    tagClass: 'tag-packet',
    desc: 'Nasi putih/jagung + Kulit ayam krispi + Daging sapi kisi empuk bumbu rempah medok + Oseng buncis + Serundeng + Sambal.',
    image: 'images/menu/paket-daging-kisi.jpg'
  },
  {
    id: 'cumi-oseng-kecombrang',
    name: 'Cumi Oseng Kecombrang (Ala Carte)',
    category: 'lauk',
    price: 19800,
    tag: 'Best Seller 🔥',
    tagClass: 'tag-viral',
    desc: 'Porsi lauk cumi segar empuk dipadu potongan bunga kecombrang wangi khas Nusantara dan cabai rawit pedas nikmat.',
    image: 'images/menu/cumi-oseng-kecombrang.jpg'
  },
  {
    id: 'kulit-ayam-porsi',
    name: 'Kulit Ayam Krispi (Porsi Ekstra)',
    category: 'lauk',
    price: 15400,
    tag: 'Signature 🍗',
    tagClass: 'tag-star',
    desc: 'Satu piring penuh kulit ayam renyah keemasan bertekstur krunci dengan racikan bumbu rempah gurih khas Mak Igun.',
    image: 'images/menu/kulit-ayam.jpg'
  },
  {
    id: 'paru-oseng',
    name: 'Paru Sapi Oseng Gurih',
    category: 'lauk',
    price: 18700,
    tag: 'Favorit 👍',
    tagClass: 'tag-packet',
    desc: 'Paru sapi pilihan bertekstur lembut di dalam dan krispi di luar, dioseng dengan bumbu pedas gurih meresap.',
    image: 'images/menu/paru-oseng.jpg'
  },
  {
    id: 'daging-kisi-oseng',
    name: 'Daging Kisi Sapi Oseng',
    category: 'lauk',
    price: 21800,
    tag: 'Spesial 🥩',
    tagClass: 'tag-packet',
    desc: 'Daging kisi sapi empuk kenyal dengan bumbu oseng rempah pedas yang bikin nasi sebakul cepat habis.',
    image: 'images/menu/daging-kisi-oseng.jpg'
  },
  {
    id: 'ayam-oseng-kecombrang',
    name: 'Ayam Oseng Kecombrang',
    category: 'lauk',
    price: 16500,
    tag: 'Wangi Khas 🌸',
    tagClass: 'tag-packet',
    desc: 'Suwiran ayam gurih dioseng dengan irisan honje / bunga kecombrang segar dan bumbu oseng harum menggoda.',
    image: 'images/menu/ayam-oseng-kecombrang.jpg'
  },
  {
    id: 'udang-balado',
    name: 'Udang Balado Merah',
    category: 'lauk',
    price: 20900,
    tag: 'Pedas Mantap 🦐',
    tagClass: 'tag-viral',
    desc: 'Udang segar renyah dibalut sambal balado merah pedas manis gurih yang medok khas masakan rumahan.',
    image: 'images/menu/udang-balado.jpg'
  },
  {
    id: 'ayam-rempah',
    name: 'Ayam Goreng Rempah Mak Igun',
    category: 'lauk',
    price: 15400,
    tag: 'Klasik 🍗',
    tagClass: 'tag-star',
    desc: 'Potongan ayam empuk berbumbu rempah kuning gurih bertabur serundeng renyah dan wangi.',
    image: 'images/menu/ayam-rempah.jpg'
  },
  {
    id: 'babat-gongso',
    name: 'Babat Sapi Gongso',
    category: 'lauk',
    price: 18700,
    tag: 'Gongso Sedap 🍲',
    tagClass: 'tag-packet',
    desc: 'Babat sapi empuk bebas bau amis dimasak gongso kecap manis pedas berempah gurih legit.',
    image: 'images/menu/babat-gongso.jpg'
  },
  {
    id: 'iso-gongso',
    name: 'Iso Sapi Gongso',
    category: 'lauk',
    price: 18700,
    tag: 'Gurih Legit 🥩',
    tagClass: 'tag-packet',
    desc: 'Usus/iso sapi empuk dioseng gongso dengan kecap istimewa dan cabai rawit pedas mantap.',
    image: 'images/menu/iso-gongso.jpg'
  },
  {
    id: 'usus-oseng',
    name: 'Usus Ayam Pedas Manis',
    category: 'lauk',
    price: 12100,
    tag: 'Gurih Murah 😋',
    tagClass: 'tag-packet',
    desc: 'Usus ayam bersih higienis dioseng bumbu kuning pedas gurih, kenyal nikmat buat teman makan nasi.',
    image: 'images/menu/usus-oseng.jpg'
  },
  {
    id: 'ceker-oseng',
    name: 'Ceker Mercon Tanpa Tulang',
    category: 'lauk',
    price: 14300,
    tag: 'Pedas Mercon 🌶️',
    tagClass: 'tag-viral',
    desc: 'Ceker empuk kenyal dengan bumbu sambal mercon merah membara yang bikin keringat bercucuran.',
    image: 'images/menu/ceker-oseng.jpg'
  },
  {
    id: 'telur-balado',
    name: 'Telur Balado / Dadar Krispi',
    category: 'lauk',
    price: 6600,
    tag: 'Lauk Hemat 🥚',
    tagClass: 'tag-packet',
    desc: 'Pilihan telur balado bumbu merah atau telur dadar krispi gurih bersarang lezat.',
    image: 'images/menu/telur-balado.jpg'
  },
  {
    id: 'tempe-orek',
    name: 'Tempe Orek Manis Gurih',
    category: 'lauk',
    price: 5500,
    tag: 'Pelengkap 🧆',
    tagClass: 'tag-packet',
    desc: 'Tempe potong renyah dioseng kecap manis legit, bawang dan cabai merah harum.',
    image: 'images/menu/tempe-orek.jpg'
  },
  {
    id: 'oseng-buncis',
    name: 'Oseng Buncis Spesial',
    category: 'ekstra',
    price: 5500,
    tag: 'Sayur Segar 🥬',
    tagClass: 'tag-packet',
    desc: 'Tumis buncis muda bertekstur kress kress dengan potongan cabai dan bawang wangi penyeimbang lauk goreng.',
    image: 'images/menu/oseng-buncis.jpg'
  },
  {
    id: 'terong-balado',
    name: 'Terong Balado Pedas Manis',
    category: 'ekstra',
    price: 6600,
    tag: 'Sayur Balado 🍆',
    tagClass: 'tag-viral',
    desc: 'Terong ungu lembut berlumur saus balado pedas manis gurih yang legit.',
    image: 'images/menu/terong-balado.jpg'
  },
  {
    id: 'nasi-biasa',
    name: 'Nasi Putih Pulen (Porsi)',
    category: 'ekstra',
    price: 5500,
    tag: 'Pokok 🍚',
    tagClass: 'tag-star',
    desc: 'Nasi putih beras pilihan bertekstur pulen, hangat, dan wangi.',
    image: 'images/menu/nasi-biasa.jpg'
  },
  {
    id: 'nasi-jagung',
    name: 'Nasi Jagung Khas Jatim (Porsi)',
    category: 'ekstra',
    price: 5500,
    tag: 'Favorit Warga 🌽',
    tagClass: 'tag-star',
    desc: 'Campuran nasi putih dan bulir jagung pipil halus beraroma harum dan gurih alami khas Jawa Timur.',
    image: 'images/menu/nasi-jagung.jpg'
  },
  {
    id: 'sambal-bawang',
    name: 'Sambal Bawang Mak Igun',
    category: 'ekstra',
    price: 4400,
    tag: 'Juara Pedas 🌶️',
    tagClass: 'tag-viral',
    desc: 'Sambal bawang ulek siram minyak panas dengan rasa pedas nyelekit, asin gurih, dan wangi bawang menggoda.',
    image: 'images/menu/sambal-bawang.jpg'
  },
  {
    id: 'sambal-terasi',
    name: 'Sambal Terasi Tomat Matang',
    category: 'ekstra',
    price: 4400,
    tag: 'Khas Nusantara 🍅',
    tagClass: 'tag-viral',
    desc: 'Sambal terasi goreng matang dengan paduan tomat segar dan terasi bakar harum sedap.',
    image: 'images/menu/sambal-terasi.jpg'
  },
  {
    id: 'kerupuk',
    name: 'Kerupuk Putih / Kaleng',
    category: 'ekstra',
    price: 2200,
    tag: 'Renyah 🍘',
    tagClass: 'tag-packet',
    desc: 'Kerupuk renyah gurih pelengkap wajib makan nasi kulit biar makin nikmat.',
    image: 'images/menu/kerupuk.jpg'
  },
  {
    id: 'es-teh-manis',
    name: 'Es Teh Manis Jumbo',
    category: 'minuman',
    price: 5500,
    tag: 'Penyegar 🥤',
    tagClass: 'tag-drink',
    desc: 'Seduhan teh melati wangi khas Jawa dengan es batu melimpah penawar pedas paling ampuh.',
    image: 'images/menu/es-teh-manis.jpg'
  },
  {
    id: 'es-jeruk',
    name: 'Es Jeruk Peras Asli',
    category: 'minuman',
    price: 7700,
    tag: 'Vitamin C 🍊',
    tagClass: 'tag-drink',
    desc: 'Perasan jeruk peras asli segar manis alami dengan sensasi bulir buah jeruk segar.',
    image: 'images/menu/es-jeruk.jpg'
  },
  {
    id: 'es-limau',
    name: 'Es Teh Jeruk Nipis / Limau',
    category: 'minuman',
    price: 7700,
    tag: 'Segar Asem 🍋',
    tagClass: 'tag-drink',
    desc: 'Paduan teh segar dengan perasan jeruk nipis limau yang wangi dan menyegarkan tenggorokan.',
    image: 'images/menu/es-limau.jpg'
  },
  {
    id: 'es-mangga',
    name: 'Es Mangga Selasih',
    category: 'minuman',
    price: 9900,
    tag: 'Spesial Buah 🥭',
    tagClass: 'tag-drink',
    desc: 'Minuman mangga manis segar berpadu butiran selasih lembut dan es batu dingin melegakan dahaga.',
    image: 'images/menu/es-mangga.jpg'
  },
  {
    id: 'es-coklat',
    name: 'Es Coklat Kental Mak Igun',
    category: 'minuman',
    price: 9900,
    tag: 'Manis Creamy 🍫',
    tagClass: 'tag-drink',
    desc: 'Minuman coklat kental manis creamy yang cocok disantap setelah makan pedas nampol.',
    image: 'images/menu/es-coklat.jpg'
  },
  {
    id: 'air-mineral',
    name: 'Air Mineral Prima Botol',
    category: 'minuman',
    price: 4400,
    tag: 'Sehat 💧',
    tagClass: 'tag-drink',
    desc: 'Air mineral kemasan botol higienis dan menyegarkan.',
    image: 'images/menu/air-mineral.jpg'
  },
  {
    id: 'teh-pucuk',
    name: 'Teh Pucuk Harum Dingin',
    category: 'minuman',
    price: 5500,
    tag: 'Kemasan 🍵',
    tagClass: 'tag-drink',
    desc: 'Teh melati dalam kemasan botol siap minum dari pucuk daun teh pilihan.',
    image: 'images/menu/teh-pucuk.jpg'
  }
];

const DEFAULT_COVER_DATA = {
  logo: "images/branding/logo.jpg",
  badge1: "👑 Kolaborasi Ivan Gunawan & King Abdi",
  badge2: "📍 Cabang Surabaya Pusat",
  title1: "KULIT KRISPI GURIH",
  title2: "PEDASNYA BIKIN NAGIH!",
  tagline: "Nikmati sensasi gurih renyah <strong>Kulit Ayam Krispi melimpah</strong> berpadu dengan oseng cumi kecombrang, paru empuk, dan aneka sambal sedap khas Nusantara.",
  highlight1Icon: "💰",
  highlight1Title: "Mulai Rp 15.400",
  highlight1Desc: "Harga ramah di kantong, porsi kenyang",
  highlight2Icon: "🌙",
  highlight2Title: "Buka Sampai Malam",
  highlight2Desc: "10.00 – 00.00 WIB setiap hari",
  highlight3Icon: "🍚",
  highlight3Title: "Nasi Putih / Nasi Jagung",
  highlight3Desc: "Pilihan nasi jagung khas Jatim yang gurih",
  cta1Text: "Buka Daftar Menu Lengkap",
  cta2Text: "Simulasi Pesanan (Order WA)",
  cta3Text: "📍 Lokasi Jl. Pregolan 11",
  sticker1: "🔥 PALING VIRAL DI SURABAYA!",
  sticker2: "👑 RACIKAN KING ABDI & IVAN GUNAWAN",
  sticker3: "✨ 100% KULIT CRISPY JUARA",
  sticker4: "🌶️ SAMBAL BAWANG GURIH NAMPOL"
};

const DEFAULT_GALLERY_ITEMS = [
  {
    id: 'galeri-1',
    title: 'Nasi Kulit Lengkap Bintang Utama',
    badge: 'Menu Favorit ⭐',
    image: 'images/galeri/galeri-1-nasi-kulit.jpg',
    desc: 'Sepiring penuh kenikmatan: nasi hangat, kulit ayam super krispi keemasan, oseng buncis renyah, serundeng wangi, ebi gurih dan sambal bawang nampol!'
  },
  {
    id: 'galeri-2',
    title: 'Cumi Oseng Kecombrang Menggugah Selera',
    badge: 'Viral Banget 🔥',
    image: 'images/galeri/galeri-2-cumi-kecombrang.jpg',
    desc: 'Lauk oseng paling dicari di Surabaya! Tekstur cumi empuk tidak alot dengan keharuman bunga kecombrang segar yang bikin nagih.'
  },
  {
    id: 'galeri-3',
    title: 'Suasana Hangat Outlet Surabaya Pusat',
    badge: 'Dine-in Seru 🏠',
    image: 'images/galeri/galeri-3-suasana-warung.jpg',
    desc: 'Makan bareng teman & keluarga di Jl. Pregolan No. 11 Surabaya. Tempat nyaman, full musik, bersih, dan pelayanan cepat ramah.'
  },
  {
    id: 'galeri-4',
    title: 'Sambal Bawang & Terasi Ulek Asli',
    badge: 'Sambal Juara 🌶️',
    image: 'images/galeri/galeri-4-sambal-spesial.jpg',
    desc: 'Racikan sambal spesial buatan tangan dengan cabai rawit segar dan siraman minyak panas gurih yang bikin suapan pertama langsung jatuh cinta.'
  },
  {
    id: 'galeri-5',
    title: 'Paru Sapi & Daging Kisi Oseng',
    badge: 'Lauk Istimewa 🥩',
    image: 'images/galeri/galeri-5-paru-kisi.jpg',
    desc: 'Pilihan lauk daging sapi dengan bumbu rempah medok, gurih manis pedas meresap sempurna sampai ke serat terdalam.'
  },
  {
    id: 'galeri-6',
    title: 'Kesegaran Es Teh & Es Jeruk Peras',
    badge: 'Pelepas Dahaga 🥤',
    image: 'images/galeri/galeri-6-minuman-segar.jpg',
    desc: 'Segelas es teh manis jumbo dan es jeruk peras murni penawar rasa pedas nampol Nasi Kulit Mak Igun.'
  }
];

const DEFAULT_LOCATION_DATA = {
  branchName: "Cabang Surabaya Pusat",
  address: "Jl. Pregolan No. 11, Tegalsari, Kec. Tegalsari, Kota Surabaya, Jawa Timur 60262",
  openHoursText: "Buka Setiap Hari: 10.00 – 00.00 WIB",
  openHour: 10,
  closeHour: 24,
  facilities: "Dine-in Nyaman, Area Ber-AC, Parkir Motor & Mobil, Musholla Dekat",
  paymentMethods: "Cash, QRIS (BCA, Mandiri, ShopeePay, GoPay, OVO, Dana), Debit",
  mapsUrl: "https://maps.app.goo.gl/wK4bJtJ1jNqZ3X87A",
  mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.727581729052!2d112.7381273!3d-7.2661389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb900d895555%3A0x6b47c0f1885f6e80!2sJl.%20Pregolan%20No.11%2C%20Tegalsari%2C%20Kec.%20Tegalsari%2C%20Surabaya%2C%20Jawa%20Timur%2060262!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
  mapTitle: "Jl. Pregolan No. 11, Tegalsari",
  mapBadge: "Surabaya Pusat",
  otherBranch: "Segera hadir outlet tambahan di Surabaya Barat & Surabaya Timur!"
};

const DEFAULT_CONTACT_DATA = {
  announcement: "🔥 Cabang Surabaya Pusat: Jl. Pregolan No. 11, Tegalsari • Buka Setiap Hari 10:00 - 00:00 WIB",
  waNumber: "087777728228",
  waDisplay: "0877-7772-8228",
  igBranchHandle: "@nasikulitmakigun.surabayapusat",
  igBranchUrl: "https://www.instagram.com/nasikulitmakigun.surabayapusat/?hl=en",
  igOfficialHandle: "@nasikulitmakigun",
  igOfficialUrl: "https://www.instagram.com/nasikulitmakigun/?hl=en",
  gofoodUrl: "https://gofood.link",
  grabfoodUrl: "https://food.grab.com",
  shopeefoodUrl: "https://shopee.co.id/shopeefood",
  phoneHotline: "087777728228"
};

const DEFAULT_PROMO_DATA = {
  active: true,
  autoPopup: true,
  badge: "🔥 PROMO SPESIAL GAJIAN",
  title: "PAKET BUNDLING PUAS GAJIAN!",
  subtitle: "Makan Enak Berdua Makin Hemat & Kenyang",
  description: "Beli 2 Paket Nasi Lengkap (Cumi / Paru / Udang), dapatkan potongan diskon langsung Rp 5.000 + GRATIS 1 Es Teh Manis Segar racikan Mak Igun!",
  code: "MAKIGUNHEMAT",
  discountAmount: 5000,
  minPurchase: 45000,
  bonusText: "GRATIS 1 Es Teh Manis Segar",
  validUntil: "Berlaku s/d 31 Oktober 2026",
  bannerImage: "images/menu/paket-cumi.jpg",
  terms: "Berlaku khusus pemesanan WhatsApp, Takeaway, dan Dine-in di Cabang Surabaya Pusat."
};

const DEFAULT_ADMIN_CRED = {
  username: "admin",
  password: "makigun123"
};

const STORAGE_KEYS = {
  MENUS: 'makigun_menus_v1',
  COVER: 'makigun_cover_v1',
  GALLERY: 'makigun_gallery_v1',
  LOCATION: 'makigun_location_v1',
  CONTACT: 'makigun_contact_v1',
  SETTINGS: 'makigun_settings_v1',
  PROMO: 'makigun_promo_v1',
  AUTH: 'makigun_admin_auth_v1',
  SESSION: 'makigun_admin_session_v1'
};

// State Variables
let currentMenuItems = [];
let currentCoverData = { ...DEFAULT_COVER_DATA };
let currentGalleryItems = [];
let currentLocationData = { ...DEFAULT_LOCATION_DATA };
let currentContactData = { ...DEFAULT_CONTACT_DATA };
let currentPromoData = { ...DEFAULT_PROMO_DATA };
let currentSettings = {};

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  loadAllAdminData();
  initAdminAuth();
  initAdminDashboard();
  initModalCloseHandlers();
});

// Helper Format Rupiah
function formatRupiah(number) {
  return 'Rp ' + (number || 0).toLocaleString('id-ID');
}

// ==========================================
// AUTHENTICATION & SESSION MANAGEMENT
// ==========================================
function getAdminCredentials() {
  try {
    const cred = localStorage.getItem(STORAGE_KEYS.AUTH);
    return cred ? JSON.parse(cred) : DEFAULT_ADMIN_CRED;
  } catch (e) {
    return DEFAULT_ADMIN_CRED;
  }
}

function setAdminCredentials(username, password) {
  const cred = { username, password };
  localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(cred));
}

function isAdminLoggedIn() {
  return sessionStorage.getItem(STORAGE_KEYS.SESSION) === 'true';
}

function setAdminSession(isLoggedIn) {
  if (isLoggedIn) {
    sessionStorage.setItem(STORAGE_KEYS.SESSION, 'true');
  } else {
    sessionStorage.removeItem(STORAGE_KEYS.SESSION);
  }
}

function updateAdminView() {
  const loginSection = document.getElementById('adminLoginSection');
  const dashboardSection = document.getElementById('adminDashboardSection');

  if (isAdminLoggedIn()) {
    if (loginSection) loginSection.style.display = 'none';
    if (dashboardSection) dashboardSection.style.display = 'flex';
    renderAdminMenuTable(currentMenuItems);
    updateAdminStats();
  } else {
    if (loginSection) loginSection.style.display = 'flex';
    if (dashboardSection) dashboardSection.style.display = 'none';
  }
}

function initAdminAuth() {
  const loginForm = document.getElementById('adminLoginForm');
  const logoutBtn = document.getElementById('adminLogoutBtn');

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const u = document.getElementById('adminUsernameInput').value.trim();
      const p = document.getElementById('adminPasswordInput').value.trim();
      const errorMsg = document.getElementById('loginErrorMsg');

      const validCred = getAdminCredentials();
      if (u === validCred.username && p === validCred.password) {
        if (errorMsg) errorMsg.style.display = 'none';
        setAdminSession(true);
        loginForm.reset();
        showToast('Berhasil login ke Portal Pengelola! 👑');
        updateAdminView();
      } else {
        if (errorMsg) errorMsg.style.display = 'block';
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      if (confirm('Yakin ingin keluar dari sesi Admin Mak Igun?')) {
        setAdminSession(false);
        updateAdminView();
        showToast('Anda telah logout dari portal admin.');
      }
    });
  }

  updateAdminView();
}

// ==========================================
// DATA LOADING & PERSISTENCE
// ==========================================
function loadAllAdminData() {
  // 1. Menus
  try {
    const storedMenus = localStorage.getItem(STORAGE_KEYS.MENUS);
    currentMenuItems = storedMenus ? JSON.parse(storedMenus) : [...DEFAULT_MENU_ITEMS];
  } catch (e) {
    currentMenuItems = [...DEFAULT_MENU_ITEMS];
  }

  // 2. Cover
  try {
    const storedCover = localStorage.getItem(STORAGE_KEYS.COVER);
    currentCoverData = storedCover ? { ...DEFAULT_COVER_DATA, ...JSON.parse(storedCover) } : { ...DEFAULT_COVER_DATA };
  } catch (e) {
    currentCoverData = { ...DEFAULT_COVER_DATA };
  }

  // 3. Gallery
  try {
    const storedGallery = localStorage.getItem(STORAGE_KEYS.GALLERY);
    currentGalleryItems = storedGallery ? JSON.parse(storedGallery) : [...DEFAULT_GALLERY_ITEMS];
  } catch (e) {
    currentGalleryItems = [...DEFAULT_GALLERY_ITEMS];
  }

  // 4. Location
  try {
    const storedLoc = localStorage.getItem(STORAGE_KEYS.LOCATION);
    currentLocationData = storedLoc ? { ...DEFAULT_LOCATION_DATA, ...JSON.parse(storedLoc) } : { ...DEFAULT_LOCATION_DATA };
  } catch (e) {
    currentLocationData = { ...DEFAULT_LOCATION_DATA };
  }

  // 5. Contact
  try {
    const storedContact = localStorage.getItem(STORAGE_KEYS.CONTACT);
    currentContactData = storedContact ? { ...DEFAULT_CONTACT_DATA, ...JSON.parse(storedContact) } : { ...DEFAULT_CONTACT_DATA };
  } catch (e) {
    currentContactData = { ...DEFAULT_CONTACT_DATA };
  }

  // 6. Promo
  try {
    const storedPromo = localStorage.getItem(STORAGE_KEYS.PROMO);
    currentPromoData = storedPromo ? { ...DEFAULT_PROMO_DATA, ...JSON.parse(storedPromo) } : { ...DEFAULT_PROMO_DATA };
  } catch (e) {
    currentPromoData = { ...DEFAULT_PROMO_DATA };
  }

  // Sync from server API if online
  if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => {
        if (!data) return;
        if (data.menus && Array.isArray(data.menus) && data.menus.length > 0) {
          currentMenuItems = data.menus;
          localStorage.setItem(STORAGE_KEYS.MENUS, JSON.stringify(currentMenuItems));
          if (isAdminLoggedIn()) {
            renderAdminMenuTable(currentMenuItems);
            updateAdminStats();
          }
        }
        if (data.cover) {
          currentCoverData = { ...DEFAULT_COVER_DATA, ...data.cover };
          localStorage.setItem(STORAGE_KEYS.COVER, JSON.stringify(currentCoverData));
        }
        if (data.gallery && Array.isArray(data.gallery)) {
          currentGalleryItems = data.gallery;
          localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(currentGalleryItems));
        }
        if (data.location) {
          currentLocationData = { ...DEFAULT_LOCATION_DATA, ...data.location };
          localStorage.setItem(STORAGE_KEYS.LOCATION, JSON.stringify(currentLocationData));
        }
        if (data.contact) {
          currentContactData = { ...DEFAULT_CONTACT_DATA, ...data.contact };
          localStorage.setItem(STORAGE_KEYS.CONTACT, JSON.stringify(currentContactData));
        }
        if (data.promo) {
          currentPromoData = { ...DEFAULT_PROMO_DATA, ...data.promo };
          localStorage.setItem(STORAGE_KEYS.PROMO, JSON.stringify(currentPromoData));
        }
      })
      .catch(() => {});
  }
}

function syncToServer() {
  if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
    fetch('/api/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        menus: currentMenuItems,
        cover: currentCoverData,
        gallery: currentGalleryItems,
        location: currentLocationData,
        contact: currentContactData,
        promo: currentPromoData,
        settings: currentSettings
      })
    }).catch(err => console.log('Sync status:', err.message));
  }
}

function saveMenusToStorage(items) {
  currentMenuItems = [...items];
  try {
    localStorage.setItem(STORAGE_KEYS.MENUS, JSON.stringify(currentMenuItems));
  } catch (e) {
    console.error('Gagal simpan menu:', e);
  }
  syncToServer();
  renderAdminMenuTable(currentMenuItems);
  updateAdminStats();
}

function saveCoverToStorage(cover) {
  currentCoverData = { ...currentCoverData, ...cover };
  try {
    localStorage.setItem(STORAGE_KEYS.COVER, JSON.stringify(currentCoverData));
  } catch (e) {
    console.error('Gagal simpan cover:', e);
  }
  syncToServer();
}

function saveGalleryToStorage(items) {
  currentGalleryItems = [...items];
  try {
    localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(currentGalleryItems));
  } catch (e) {
    console.error('Gagal simpan galeri:', e);
  }
  syncToServer();
  renderAdminGalleryTable(currentGalleryItems);
}

function saveLocationToStorage(loc) {
  currentLocationData = { ...currentLocationData, ...loc };
  try {
    localStorage.setItem(STORAGE_KEYS.LOCATION, JSON.stringify(currentLocationData));
  } catch (e) {
    console.error('Gagal simpan lokasi:', e);
  }
  syncToServer();
}

function saveContactToStorage(contact) {
  currentContactData = { ...currentContactData, ...contact };
  try {
    localStorage.setItem(STORAGE_KEYS.CONTACT, JSON.stringify(currentContactData));
  } catch (e) {
    console.error('Gagal simpan kontak:', e);
  }
  syncToServer();
}

function savePromoToStorage(promo) {
  currentPromoData = { ...currentPromoData, ...promo };
  try {
    localStorage.setItem(STORAGE_KEYS.PROMO, JSON.stringify(currentPromoData));
  } catch (e) {
    console.error('Gagal simpan promo:', e);
  }
  syncToServer();
}

// ==========================================
// DASHBOARD NAVIGATION & TAB INITIALIZATION
// ==========================================
function initAdminDashboard() {
  // Tabs Navigation
  const tabBtns = document.querySelectorAll('.admin-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.admin-tab-pane').forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const tabName = btn.getAttribute('data-tab');

      if (tabName === 'menu') {
        document.getElementById('adminPaneMenu')?.classList.add('active');
        renderAdminMenuTable(currentMenuItems);
        updateAdminStats();
      }
      if (tabName === 'cover') {
        document.getElementById('adminPaneCover')?.classList.add('active');
        loadCoverForm();
      }
      if (tabName === 'galeri') {
        document.getElementById('adminPaneGaleri')?.classList.add('active');
        renderAdminGalleryTable(currentGalleryItems);
      }
      if (tabName === 'alamat') {
        document.getElementById('adminPaneAlamat')?.classList.add('active');
        loadLocationForm();
      }
      if (tabName === 'kontak') {
        document.getElementById('adminPaneKontak')?.classList.add('active');
        loadContactForm();
      }
      if (tabName === 'promo') {
        document.getElementById('adminPanePromo')?.classList.add('active');
        loadPromoForm();
      }
      if (tabName === 'settings') {
        document.getElementById('adminPaneSettings')?.classList.add('active');
        loadAdminAccountForm();
      }
    });
  });

  // 1. Menu Search & Category Filter
  const adminSearch = document.getElementById('adminMenuSearch');
  const adminCategoryFilter = document.getElementById('adminCategoryFilter');

  function filterAdminMenu() {
    const q = (adminSearch?.value || '').toLowerCase().trim();
    const cat = adminCategoryFilter?.value || 'all';

    const filtered = currentMenuItems.filter(item => {
      const matchCat = (cat === 'all') || (item.category === cat);
      const matchQuery = !q || item.name.toLowerCase().includes(q) || ((item.desc || '').toLowerCase().includes(q)) || ((item.tag || '').toLowerCase().includes(q));
      return matchCat && matchQuery;
    });

    renderAdminMenuTable(filtered);
  }

  if (adminSearch) adminSearch.addEventListener('input', filterAdminMenu);
  if (adminCategoryFilter) adminCategoryFilter.addEventListener('change', filterAdminMenu);

  // 2. Menu Form Modal & Submit
  const btnOpenAddMenu = document.getElementById('btnOpenAddMenuModal');
  const menuFormModal = document.getElementById('menuFormModal');
  const menuItemForm = document.getElementById('menuItemForm');
  const menuFormFileInput = document.getElementById('menuFormFileInput');
  const menuFormImage = document.getElementById('menuFormImage');
  const menuFormImgPreview = document.getElementById('menuFormImgPreview');

  if (btnOpenAddMenu) {
    btnOpenAddMenu.addEventListener('click', () => {
      openAddMenuModal();
    });
  }

  if (menuFormFileInput) {
    menuFormFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => {
        if (menuFormImage) menuFormImage.value = evt.target.result;
        if (menuFormImgPreview) menuFormImgPreview.src = evt.target.result;
      };
      reader.readAsDataURL(file);
    });
  }

  if (menuFormImage) {
    menuFormImage.addEventListener('input', () => {
      if (menuFormImgPreview) menuFormImgPreview.src = menuFormImage.value || 'images/branding/logo.jpg';
    });
  }

  if (menuItemForm) {
    menuItemForm.addEventListener('submit', handleSaveMenuItem);
  }

  // 3. Cover Settings
  const coverSettingsForm = document.getElementById('coverSettingsForm');
  const coverLogoFileInput = document.getElementById('coverLogoFileInput');
  const settingCoverLogo = document.getElementById('settingCoverLogo');
  const coverLogoPreview = document.getElementById('coverLogoPreview');

  if (coverLogoFileInput) {
    coverLogoFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => {
        if (settingCoverLogo) settingCoverLogo.value = evt.target.result;
        if (coverLogoPreview) coverLogoPreview.src = evt.target.result;
      };
      reader.readAsDataURL(file);
    });
  }

  if (settingCoverLogo) {
    settingCoverLogo.addEventListener('input', () => {
      if (coverLogoPreview) coverLogoPreview.src = settingCoverLogo.value || 'images/branding/logo.jpg';
    });
  }

  if (coverSettingsForm) {
    coverSettingsForm.addEventListener('submit', handleSaveCover);
  }

  // 4. Gallery Settings
  const btnOpenAddGallery = document.getElementById('btnOpenAddGalleryModal');
  const galleryItemForm = document.getElementById('galleryItemForm');
  const galleryFormFileInput = document.getElementById('galleryFormFileInput');
  const galleryFormImage = document.getElementById('galleryFormImage');
  const galleryFormImgPreview = document.getElementById('galleryFormImgPreview');

  if (btnOpenAddGallery) {
    btnOpenAddGallery.addEventListener('click', () => {
      openAddGalleryModal();
    });
  }

  if (galleryFormFileInput) {
    galleryFormFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => {
        if (galleryFormImage) galleryFormImage.value = evt.target.result;
        if (galleryFormImgPreview) galleryFormImgPreview.src = evt.target.result;
      };
      reader.readAsDataURL(file);
    });
  }

  if (galleryFormImage) {
    galleryFormImage.addEventListener('input', () => {
      if (galleryFormImgPreview) galleryFormImgPreview.src = galleryFormImage.value || 'images/branding/logo.jpg';
    });
  }

  if (galleryItemForm) {
    galleryItemForm.addEventListener('submit', handleSaveGalleryItem);
  }

  // 5. Location Form
  const locationSettingsForm = document.getElementById('locationSettingsForm');
  if (locationSettingsForm) {
    locationSettingsForm.addEventListener('submit', handleSaveLocation);
  }

  // 6. Contact Form
  const contactSettingsForm = document.getElementById('contactSettingsForm');
  if (contactSettingsForm) {
    contactSettingsForm.addEventListener('submit', handleSaveContact);
  }

  // 7. Promo Settings Form
  const adminPromoForm = document.getElementById('adminPromoForm');
  if (adminPromoForm) {
    adminPromoForm.addEventListener('submit', handleSavePromo);
  }

  // Preview button in admin
  const btnPreviewPromo = document.getElementById('btnPreviewPromoModal');
  if (btnPreviewPromo) {
    btnPreviewPromo.addEventListener('click', () => {
      const previewData = {
        ...currentPromoData,
        badge: document.getElementById('adminPromoBadge')?.value.trim() || currentPromoData.badge,
        title: document.getElementById('adminPromoTitle')?.value.trim() || currentPromoData.title,
        subtitle: document.getElementById('adminPromoSubtitle')?.value.trim() || '',
        description: document.getElementById('adminPromoDesc')?.value.trim() || currentPromoData.description,
        code: (document.getElementById('adminPromoCode')?.value.trim() || currentPromoData.code).toUpperCase(),
        discountAmount: parseInt(document.getElementById('adminPromoDiscount')?.value, 10) || 0,
        minPurchase: parseInt(document.getElementById('adminPromoMinPurchase')?.value, 10) || 0,
        bonusText: document.getElementById('adminPromoBonusText')?.value.trim() || '',
        validUntil: document.getElementById('adminPromoValidity')?.value.trim() || currentPromoData.validUntil,
        bannerImage: document.getElementById('adminPromoImage')?.value.trim() || currentPromoData.bannerImage
      };
      populatePromoModal(previewData);
      const promoModal = document.getElementById('promoModal');
      if (promoModal) promoModal.classList.add('active');
    });
  }

  // Promo image upload
  const promoImgFileInput = document.getElementById('adminPromoImageFile');
  if (promoImgFileInput) {
    promoImgFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => {
        const urlInput = document.getElementById('adminPromoImage');
        const preview = document.getElementById('adminPromoImagePreview');
        const nameLabel = document.getElementById('adminPromoImageFileName');
        if (urlInput) urlInput.value = evt.target.result;
        if (preview) preview.src = evt.target.result;
        if (nameLabel) nameLabel.textContent = file.name;
      };
      reader.readAsDataURL(file);
    });
  }

  // Password Form Submit
  const adminPasswordForm = document.getElementById('adminPasswordForm');
  if (adminPasswordForm) {
    adminPasswordForm.addEventListener('submit', handleUpdateAdminPassword);
  }

  // Export Data JSON
  const btnExportData = document.getElementById('btnExportData');
  if (btnExportData) {
    btnExportData.addEventListener('click', handleExportDataJSON);
  }

  // Import Data JSON
  const importFileInput = document.getElementById('importFileInput');
  if (importFileInput) {
    importFileInput.addEventListener('change', handleImportDataJSON);
  }

  // Reset Default Data
  const btnResetDefault = document.getElementById('btnResetDefault');
  if (btnResetDefault) {
    btnResetDefault.addEventListener('click', handleResetDefaultData);
  }
}

// Modal Close Handlers
function initModalCloseHandlers() {
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });
  });

  document.querySelectorAll('.modal-close-btn, .modal-close-btn-action').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      if (modal) modal.classList.remove('active');
    });
  });
}

// ==========================================
// 1. KELOLA MENU LOGIC
// ==========================================
function updateAdminStats() {
  const totalEl = document.getElementById('statTotalMenu');
  const availEl = document.getElementById('statAvailableMenu');
  const soldEl = document.getElementById('statSoldOutMenu');

  const total = currentMenuItems.length;
  const avail = currentMenuItems.filter(i => i.available !== false).length;
  const sold = total - avail;

  if (totalEl) totalEl.textContent = total;
  if (availEl) availEl.textContent = avail;
  if (soldEl) soldEl.textContent = sold;
}

function renderAdminMenuTable(items) {
  const tbody = document.getElementById('adminMenuTableBody');
  if (!tbody) return;

  if (!items || items.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; padding: 30px; color: var(--color-text-muted);">
          Tidak ada menu ditemukan. Silakan tambah menu baru atau reset pencarian.
        </td>
      </tr>
    `;
    return;
  }

  const categoryLabels = {
    utama: 'Nasi Kulit Utama',
    paket: 'Paket Lengkap',
    lauk: 'Lauk & Oseng',
    minuman: 'Minuman Segar',
    ekstra: 'Ekstra & Sambal'
  };

  tbody.innerHTML = items.map(item => {
    const isAvail = item.available !== false;
    const availBadge = isAvail
      ? `<span class="admin-badge-available">Tersedia</span>`
      : `<span class="admin-badge-soldout">Habis</span>`;

    const toggleText = isAvail ? 'Tandai Habis' : 'Tandai Tersedia';
    const toggleClass = isAvail ? 'admin-btn-toggle-sold' : 'admin-btn-toggle-avail';

    return `
      <tr>
        <td>
          <img src="${item.image || 'images/branding/logo.jpg'}" alt="${item.name}" class="admin-table-img" />
        </td>
        <td>
          <strong style="color: var(--color-purple-dark); font-size: 0.95rem;">${item.name}</strong>
          ${item.star ? '<span title="Menu Bintang ⭐" style="margin-left: 4px;">⭐</span>' : ''}
          <div style="font-size: 0.78rem; color: var(--color-text-muted); max-width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
            ${item.desc || '-'}
          </div>
        </td>
        <td>
          <span style="font-size: 0.82rem; background: var(--color-purple-soft); color: var(--color-purple); padding: 3px 8px; border-radius: var(--radius-sm); font-weight: 600;">
            ${categoryLabels[item.category] || item.category}
          </span>
        </td>
        <td>
          <strong style="color: var(--color-orange-dark);">${formatRupiah(item.price)}</strong>
        </td>
        <td>
          <span style="font-size: 0.8rem; font-weight: 700;">${item.tag || '-'}</span>
        </td>
        <td>
          ${availBadge}
        </td>
        <td style="text-align: center;">
          <div class="admin-table-actions">
            <button class="admin-btn-action admin-btn-edit" onclick="openEditMenuModal('${item.id}')" title="Edit Menu">
              ✏️
            </button>
            <button class="admin-btn-action ${toggleClass}" onclick="toggleMenuAvailability('${item.id}')" title="${toggleText}">
              ${isAvail ? '🚫' : '✅'}
            </button>
            <button class="admin-btn-action admin-btn-delete" onclick="handleDeleteMenuItem('${item.id}')" title="Hapus Menu">
              🗑️
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function openAddMenuModal() {
  const form = document.getElementById('menuItemForm');
  const title = document.getElementById('menuFormModalTitle');
  const idInput = document.getElementById('menuFormId');
  const imgPreview = document.getElementById('menuFormImgPreview');
  const modal = document.getElementById('menuFormModal');

  if (form) form.reset();
  if (title) title.textContent = 'Tambah Menu Baru';
  if (idInput) idInput.value = '';
  if (imgPreview) imgPreview.src = 'images/branding/logo.jpg';
  document.getElementById('menuFormAvailable').checked = true;

  if (modal) modal.classList.add('active');
}

window.openEditMenuModal = function(id) {
  const item = currentMenuItems.find(i => i.id === id);
  if (!item) return;

  const title = document.getElementById('menuFormModalTitle');
  const idInput = document.getElementById('menuFormId');
  const nameInput = document.getElementById('menuFormName');
  const catInput = document.getElementById('menuFormCategory');
  const priceInput = document.getElementById('menuFormPrice');
  const tagInput = document.getElementById('menuFormTag');
  const tagClassInput = document.getElementById('menuFormTagClass');
  const imgInput = document.getElementById('menuFormImage');
  const imgPreview = document.getElementById('menuFormImgPreview');
  const descInput = document.getElementById('menuFormDesc');
  const starInput = document.getElementById('menuFormStar');
  const availInput = document.getElementById('menuFormAvailable');
  const modal = document.getElementById('menuFormModal');

  if (title) title.textContent = `Edit Menu: ${item.name}`;
  if (idInput) idInput.value = item.id;
  if (nameInput) nameInput.value = item.name || '';
  if (catInput) catInput.value = item.category || 'utama';
  if (priceInput) priceInput.value = item.price || 0;
  if (tagInput) tagInput.value = item.tag || '';
  if (tagClassInput) tagClassInput.value = item.tagClass || 'tag-star';
  if (imgInput) imgInput.value = item.image || '';
  if (imgPreview) imgPreview.src = item.image || 'images/branding/logo.jpg';
  if (descInput) descInput.value = item.desc || '';
  if (starInput) starInput.checked = !!item.star;
  if (availInput) availInput.checked = item.available !== false;

  if (modal) modal.classList.add('active');
};

function handleSaveMenuItem(e) {
  e.preventDefault();
  const idInput = document.getElementById('menuFormId');
  const name = document.getElementById('menuFormName').value.trim();
  const category = document.getElementById('menuFormCategory').value;
  const price = parseInt(document.getElementById('menuFormPrice').value, 10) || 0;
  const tag = document.getElementById('menuFormTag').value.trim();
  const tagClass = document.getElementById('menuFormTagClass').value;
  const image = document.getElementById('menuFormImage').value.trim() || 'images/branding/logo.jpg';
  const desc = document.getElementById('menuFormDesc').value.trim();
  const star = document.getElementById('menuFormStar').checked;
  const available = document.getElementById('menuFormAvailable').checked;

  if (!name || price <= 0) {
    alert('Nama menu dan harga yang valid wajib diisi!');
    return;
  }

  const existingId = idInput.value;
  let updatedList = [...currentMenuItems];

  if (existingId) {
    const idx = updatedList.findIndex(i => i.id === existingId);
    if (idx !== -1) {
      updatedList[idx] = {
        ...updatedList[idx],
        name,
        category,
        price,
        tag,
        tagClass,
        image,
        desc,
        star,
        available
      };
      showToast(`Menu "${name}" berhasil diperbarui! ✅`);
    }
  } else {
    const newId = 'menu-' + Date.now();
    updatedList.unshift({
      id: newId,
      name,
      category,
      price,
      tag: tag || 'Menu Baru 🌟',
      tagClass: tagClass || 'tag-star',
      image,
      desc,
      star,
      available
    });
    showToast(`Menu baru "${name}" berhasil ditambahkan! 🍗`);
  }

  saveMenusToStorage(updatedList);
  document.getElementById('menuFormModal')?.classList.remove('active');
}

window.toggleMenuAvailability = function(id) {
  const updatedList = currentMenuItems.map(item => {
    if (item.id === id) {
      const newAvail = item.available === false ? true : false;
      const statusText = newAvail ? 'Tersedia' : 'Habis';
      showToast(`Menu "${item.name}" sekarang ${statusText}!`);
      return { ...item, available: newAvail };
    }
    return item;
  });

  saveMenusToStorage(updatedList);
};

window.handleDeleteMenuItem = function(id) {
  const item = currentMenuItems.find(i => i.id === id);
  if (!item) return;

  if (confirm(`Yakin ingin menghapus menu "${item.name}" dari daftar?`)) {
    const updatedList = currentMenuItems.filter(i => i.id !== id);
    saveMenusToStorage(updatedList);
    showToast(`Menu "${item.name}" telah dihapus! 🗑️`);
  }
};

// ==========================================
// 2. KELOLA COVER LOGIC
// ==========================================
function loadCoverForm() {
  const logo = document.getElementById('settingCoverLogo');
  const preview = document.getElementById('coverLogoPreview');
  const b1 = document.getElementById('settingCoverBadge1');
  const b2 = document.getElementById('settingCoverBadge2');
  const t1 = document.getElementById('settingCoverTitle1');
  const t2 = document.getElementById('settingCoverTitle2');
  const tag = document.getElementById('settingCoverTagline');

  const h1Icon = document.getElementById('settingCoverH1Icon');
  const h1Title = document.getElementById('settingCoverH1Title');
  const h1Desc = document.getElementById('settingCoverH1Desc');
  const h2Icon = document.getElementById('settingCoverH2Icon');
  const h2Title = document.getElementById('settingCoverH2Title');
  const h2Desc = document.getElementById('settingCoverH2Desc');
  const h3Icon = document.getElementById('settingCoverH3Icon');
  const h3Title = document.getElementById('settingCoverH3Title');
  const h3Desc = document.getElementById('settingCoverH3Desc');

  const cta1 = document.getElementById('settingCoverCta1Text');
  const cta2 = document.getElementById('settingCoverCta2Text');
  const cta3 = document.getElementById('settingCoverCta3Text');

  const s1 = document.getElementById('settingCoverSticker1');
  const s2 = document.getElementById('settingCoverSticker2');
  const s3 = document.getElementById('settingCoverSticker3');
  const s4 = document.getElementById('settingCoverSticker4');

  if (logo) logo.value = currentCoverData.logo || '';
  if (preview) preview.src = currentCoverData.logo || 'images/branding/logo.jpg';
  if (b1) b1.value = currentCoverData.badge1 || '';
  if (b2) b2.value = currentCoverData.badge2 || '';
  if (t1) t1.value = currentCoverData.title1 || '';
  if (t2) t2.value = currentCoverData.title2 || '';
  if (tag) tag.value = currentCoverData.tagline || '';

  if (h1Icon) h1Icon.value = currentCoverData.highlight1Icon || '💰';
  if (h1Title) h1Title.value = currentCoverData.highlight1Title || '';
  if (h1Desc) h1Desc.value = currentCoverData.highlight1Desc || '';
  if (h2Icon) h2Icon.value = currentCoverData.highlight2Icon || '🌙';
  if (h2Title) h2Title.value = currentCoverData.highlight2Title || '';
  if (h2Desc) h2Desc.value = currentCoverData.highlight2Desc || '';
  if (h3Icon) h3Icon.value = currentCoverData.highlight3Icon || '🍚';
  if (h3Title) h3Title.value = currentCoverData.highlight3Title || '';
  if (h3Desc) h3Desc.value = currentCoverData.highlight3Desc || '';

  if (cta1) cta1.value = currentCoverData.cta1Text || '';
  if (cta2) cta2.value = currentCoverData.cta2Text || '';
  if (cta3) cta3.value = currentCoverData.cta3Text || '';

  if (s1) s1.value = currentCoverData.sticker1 || '';
  if (s2) s2.value = currentCoverData.sticker2 || '';
  if (s3) s3.value = currentCoverData.sticker3 || '';
  if (s4) s4.value = currentCoverData.sticker4 || '';
}

function handleSaveCover(e) {
  e.preventDefault();
  const updatedCover = {
    ...currentCoverData,
    logo: document.getElementById('settingCoverLogo')?.value.trim() || currentCoverData.logo,
    badge1: document.getElementById('settingCoverBadge1')?.value.trim() || currentCoverData.badge1,
    badge2: document.getElementById('settingCoverBadge2')?.value.trim() || currentCoverData.badge2,
    title1: document.getElementById('settingCoverTitle1')?.value.trim() || currentCoverData.title1,
    title2: document.getElementById('settingCoverTitle2')?.value.trim() || currentCoverData.title2,
    tagline: document.getElementById('settingCoverTagline')?.value.trim() || currentCoverData.tagline,

    highlight1Icon: document.getElementById('settingCoverH1Icon')?.value.trim() || '💰',
    highlight1Title: document.getElementById('settingCoverH1Title')?.value.trim() || '',
    highlight1Desc: document.getElementById('settingCoverH1Desc')?.value.trim() || '',

    highlight2Icon: document.getElementById('settingCoverH2Icon')?.value.trim() || '🌙',
    highlight2Title: document.getElementById('settingCoverH2Title')?.value.trim() || '',
    highlight2Desc: document.getElementById('settingCoverH2Desc')?.value.trim() || '',

    highlight3Icon: document.getElementById('settingCoverH3Icon')?.value.trim() || '🍚',
    highlight3Title: document.getElementById('settingCoverH3Title')?.value.trim() || '',
    highlight3Desc: document.getElementById('settingCoverH3Desc')?.value.trim() || '',

    cta1Text: document.getElementById('settingCoverCta1Text')?.value.trim() || '',
    cta2Text: document.getElementById('settingCoverCta2Text')?.value.trim() || '',
    cta3Text: document.getElementById('settingCoverCta3Text')?.value.trim() || '',

    sticker1: document.getElementById('settingCoverSticker1')?.value.trim() || '',
    sticker2: document.getElementById('settingCoverSticker2')?.value.trim() || '',
    sticker3: document.getElementById('settingCoverSticker3')?.value.trim() || '',
    sticker4: document.getElementById('settingCoverSticker4')?.value.trim() || ''
  };

  saveCoverToStorage(updatedCover);
  showToast('Pengaturan Cover berhasil disimpan! 🖼️');
}

// ==========================================
// 3. KELOLA GALERI LOGIC
// ==========================================
function renderAdminGalleryTable(items) {
  const tbody = document.getElementById('adminGalleryTableBody');
  if (!tbody) return;

  if (!items || items.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; padding: 25px; color: var(--color-text-muted);">
          Belum ada foto galeri. Silakan tambahkan foto baru.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = items.map(item => `
    <tr>
      <td>
        <img src="${item.image || 'images/branding/logo.jpg'}" alt="${item.title}" class="admin-table-img" />
      </td>
      <td>
        <strong style="color: var(--color-purple-dark);">${item.title}</strong>
      </td>
      <td>
        <span class="admin-gallery-badge">${item.badge || '-'}</span>
      </td>
      <td>
        <div style="font-size: 0.8rem; color: var(--color-text-muted); max-width: 320px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
          ${item.desc || '-'}
        </div>
      </td>
      <td style="text-align: center;">
        <div class="admin-table-actions">
          <button class="admin-btn-action admin-btn-edit" onclick="openEditGalleryModal('${item.id}')" title="Edit Foto">
            ✏️
          </button>
          <button class="admin-btn-action admin-btn-delete" onclick="handleDeleteGalleryItem('${item.id}')" title="Hapus Foto">
            🗑️
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

function openAddGalleryModal() {
  const form = document.getElementById('galleryItemForm');
  const title = document.getElementById('galleryFormModalTitle');
  const idInput = document.getElementById('galleryFormId');
  const imgPreview = document.getElementById('galleryFormImgPreview');
  const modal = document.getElementById('galleryFormModal');

  if (form) form.reset();
  if (title) title.textContent = 'Tambah Foto Galeri Baru';
  if (idInput) idInput.value = '';
  if (imgPreview) imgPreview.src = 'images/branding/logo.jpg';

  if (modal) modal.classList.add('active');
}

window.openEditGalleryModal = function(id) {
  const item = currentGalleryItems.find(g => g.id === id);
  if (!item) return;

  const title = document.getElementById('galleryFormModalTitle');
  const idInput = document.getElementById('galleryFormId');
  const titleInput = document.getElementById('galleryFormTitle');
  const badgeInput = document.getElementById('galleryFormBadge');
  const imgInput = document.getElementById('galleryFormImage');
  const imgPreview = document.getElementById('galleryFormImgPreview');
  const descInput = document.getElementById('galleryFormDesc');
  const modal = document.getElementById('galleryFormModal');

  if (title) title.textContent = `Edit Foto Galeri: ${item.title}`;
  if (idInput) idInput.value = item.id;
  if (titleInput) titleInput.value = item.title || '';
  if (badgeInput) badgeInput.value = item.badge || '';
  if (imgInput) imgInput.value = item.image || '';
  if (imgPreview) imgPreview.src = item.image || 'images/branding/logo.jpg';
  if (descInput) descInput.value = item.desc || '';

  if (modal) modal.classList.add('active');
};

function handleSaveGalleryItem(e) {
  e.preventDefault();
  const idInput = document.getElementById('galleryFormId');
  const title = document.getElementById('galleryFormTitle').value.trim();
  const badge = document.getElementById('galleryFormBadge').value.trim();
  const image = document.getElementById('galleryFormImage').value.trim() || 'images/branding/logo.jpg';
  const desc = document.getElementById('galleryFormDesc').value.trim();

  if (!title) {
    alert('Judul foto wajib diisi!');
    return;
  }

  const existingId = idInput.value;
  let updatedList = [...currentGalleryItems];

  if (existingId) {
    const idx = updatedList.findIndex(g => g.id === existingId);
    if (idx !== -1) {
      updatedList[idx] = { ...updatedList[idx], title, badge, image, desc };
      showToast(`Foto "${title}" berhasil diperbarui! ✅`);
    }
  } else {
    const newId = 'galeri-' + Date.now();
    updatedList.push({ id: newId, title, badge, image, desc });
    showToast(`Foto baru "${title}" berhasil ditambahkan! 📸`);
  }

  saveGalleryToStorage(updatedList);
  document.getElementById('galleryFormModal')?.classList.remove('active');
}

window.handleDeleteGalleryItem = function(id) {
  const item = currentGalleryItems.find(g => g.id === id);
  if (!item) return;

  if (confirm(`Yakin ingin menghapus foto "${item.title}" dari galeri?`)) {
    const updatedList = currentGalleryItems.filter(g => g.id !== id);
    saveGalleryToStorage(updatedList);
    showToast(`Foto "${item.title}" telah dihapus! 🗑️`);
  }
};

// ==========================================
// 4. KELOLA LOKASI LOGIC
// ==========================================
function loadLocationForm() {
  const bName = document.getElementById('settingLocBranchName');
  const addr = document.getElementById('settingLocAddress');
  const openText = document.getElementById('settingLocOpenHoursText');
  const openH = document.getElementById('settingLocOpenHour');
  const closeH = document.getElementById('settingLocCloseHour');
  const fac = document.getElementById('settingLocFacilities');
  const pay = document.getElementById('settingLocPayment');
  const maps = document.getElementById('settingLocMapsUrl');
  const embed = document.getElementById('settingLocMapEmbed');
  const title = document.getElementById('settingLocMapTitle');
  const badge = document.getElementById('settingLocMapBadge');
  const other = document.getElementById('settingLocOtherBranch');

  if (bName) bName.value = currentLocationData.branchName || '';
  if (addr) addr.value = currentLocationData.address || '';
  if (openText) openText.value = currentLocationData.openHoursText || '';
  if (openH) openH.value = currentLocationData.openHour ?? 10;
  if (closeH) closeH.value = currentLocationData.closeHour ?? 24;
  if (fac) fac.value = currentLocationData.facilities || '';
  if (pay) pay.value = currentLocationData.paymentMethods || '';
  if (maps) maps.value = currentLocationData.mapsUrl || '';
  if (embed) embed.value = currentLocationData.mapEmbedSrc || '';
  if (title) title.value = currentLocationData.mapTitle || '';
  if (badge) badge.value = currentLocationData.mapBadge || '';
  if (other) other.value = currentLocationData.otherBranch || '';
}

function handleSaveLocation(e) {
  e.preventDefault();
  const openH = parseInt(document.getElementById('settingLocOpenHour')?.value, 10);
  const closeH = parseInt(document.getElementById('settingLocCloseHour')?.value, 10);

  const updatedLoc = {
    ...currentLocationData,
    branchName: document.getElementById('settingLocBranchName')?.value.trim() || currentLocationData.branchName,
    address: document.getElementById('settingLocAddress')?.value.trim() || currentLocationData.address,
    openHoursText: document.getElementById('settingLocOpenHoursText')?.value.trim() || currentLocationData.openHoursText,
    openHour: isNaN(openH) ? 10 : openH,
    closeHour: isNaN(closeH) ? 24 : closeH,
    facilities: document.getElementById('settingLocFacilities')?.value.trim() || currentLocationData.facilities,
    paymentMethods: document.getElementById('settingLocPayment')?.value.trim() || currentLocationData.paymentMethods,
    mapsUrl: document.getElementById('settingLocMapsUrl')?.value.trim() || currentLocationData.mapsUrl,
    mapEmbedSrc: document.getElementById('settingLocMapEmbed')?.value.trim() || currentLocationData.mapEmbedSrc,
    mapTitle: document.getElementById('settingLocMapTitle')?.value.trim() || currentLocationData.mapTitle,
    mapBadge: document.getElementById('settingLocMapBadge')?.value.trim() || currentLocationData.mapBadge,
    otherBranch: document.getElementById('settingLocOtherBranch')?.value.trim() || currentLocationData.otherBranch
  };

  saveLocationToStorage(updatedLoc);
  showToast('Informasi alamat & lokasi cabang berhasil disimpan! 📍');
}

// ==========================================
// 5. KELOLA KONTAK LOGIC
// ==========================================
function loadContactForm() {
  const ann = document.getElementById('settingContactAnnouncement');
  const waNum = document.getElementById('settingContactWaNumber');
  const waDisp = document.getElementById('settingContactWaDisplay');
  const igBHandle = document.getElementById('settingContactIgBranchHandle');
  const igBUrl = document.getElementById('settingContactIgBranchUrl');
  const igOHandle = document.getElementById('settingContactIgOfficialHandle');
  const igOUrl = document.getElementById('settingContactIgOfficialUrl');
  const gofood = document.getElementById('settingContactGofoodUrl');
  const grabfood = document.getElementById('settingContactGrabfoodUrl');
  const shopeefood = document.getElementById('settingContactShopeefoodUrl');
  const phone = document.getElementById('settingContactPhoneHotline');

  if (ann) ann.value = currentContactData.announcement || '';
  if (waNum) waNum.value = currentContactData.waNumber || '';
  if (waDisp) waDisp.value = currentContactData.waDisplay || '';
  if (igBHandle) igBHandle.value = currentContactData.igBranchHandle || '';
  if (igBUrl) igBUrl.value = currentContactData.igBranchUrl || '';
  if (igOHandle) igOHandle.value = currentContactData.igOfficialHandle || '';
  if (igOUrl) igOUrl.value = currentContactData.igOfficialUrl || '';
  if (gofood) gofood.value = currentContactData.gofoodUrl || '';
  if (grabfood) grabfood.value = currentContactData.grabfoodUrl || '';
  if (shopeefood) shopeefood.value = currentContactData.shopeefoodUrl || '';
  if (phone) phone.value = currentContactData.phoneHotline || '';
}

function handleSaveContact(e) {
  e.preventDefault();
  const updatedContact = {
    ...currentContactData,
    announcement: document.getElementById('settingContactAnnouncement')?.value.trim() || currentContactData.announcement,
    waNumber: document.getElementById('settingContactWaNumber')?.value.trim() || currentContactData.waNumber,
    waDisplay: document.getElementById('settingContactWaDisplay')?.value.trim() || currentContactData.waDisplay,
    igBranchHandle: document.getElementById('settingContactIgBranchHandle')?.value.trim() || currentContactData.igBranchHandle,
    igBranchUrl: document.getElementById('settingContactIgBranchUrl')?.value.trim() || currentContactData.igBranchUrl,
    igOfficialHandle: document.getElementById('settingContactIgOfficialHandle')?.value.trim() || currentContactData.igOfficialHandle,
    igOfficialUrl: document.getElementById('settingContactIgOfficialUrl')?.value.trim() || currentContactData.igOfficialUrl,
    gofoodUrl: document.getElementById('settingContactGofoodUrl')?.value.trim() || currentContactData.gofoodUrl,
    grabfoodUrl: document.getElementById('settingContactGrabfoodUrl')?.value.trim() || currentContactData.grabfoodUrl,
    shopeefoodUrl: document.getElementById('settingContactShopeefoodUrl')?.value.trim() || currentContactData.shopeefoodUrl,
    phoneHotline: document.getElementById('settingContactPhoneHotline')?.value.trim() || currentContactData.phoneHotline
  };

  saveContactToStorage(updatedContact);
  showToast('Kontak & media sosial berhasil disimpan! 📱');
}

// ==========================================
// 6. KELOLA PROMO LOGIC
// ==========================================
function loadPromoForm() {
  const activeInput = document.getElementById('adminPromoActive');
  const autoPopupInput = document.getElementById('adminPromoAutoPopup');
  const badgeInput = document.getElementById('adminPromoBadge');
  const titleInput = document.getElementById('adminPromoTitle');
  const subtitleInput = document.getElementById('adminPromoSubtitle');
  const descInput = document.getElementById('adminPromoDesc');
  const codeInput = document.getElementById('adminPromoCode');
  const discountInput = document.getElementById('adminPromoDiscount');
  const minPurchaseInput = document.getElementById('adminPromoMinPurchase');
  const bonusInput = document.getElementById('adminPromoBonusText');
  const validityInput = document.getElementById('adminPromoValidity');
  const imageInput = document.getElementById('adminPromoImage');
  const imagePreview = document.getElementById('adminPromoImagePreview');
  const termsInput = document.getElementById('adminPromoTerms');

  if (activeInput) activeInput.checked = currentPromoData.active !== false;
  if (autoPopupInput) autoPopupInput.checked = currentPromoData.autoPopup !== false;
  if (badgeInput) badgeInput.value = currentPromoData.badge || '';
  if (titleInput) titleInput.value = currentPromoData.title || '';
  if (subtitleInput) subtitleInput.value = currentPromoData.subtitle || '';
  if (descInput) descInput.value = currentPromoData.description || '';
  if (codeInput) codeInput.value = currentPromoData.code || '';
  if (discountInput) discountInput.value = currentPromoData.discountAmount || 0;
  if (minPurchaseInput) minPurchaseInput.value = currentPromoData.minPurchase || 0;
  if (bonusInput) bonusInput.value = currentPromoData.bonusText || '';
  if (validityInput) validityInput.value = currentPromoData.validUntil || '';
  if (imageInput) imageInput.value = currentPromoData.bannerImage || '';
  if (imagePreview) imagePreview.src = currentPromoData.bannerImage || 'images/menu/paket-cumi.jpg';
  if (termsInput) termsInput.value = currentPromoData.terms || '';
}

function handleSavePromo(e) {
  e.preventDefault();
  const updatedPromo = {
    ...currentPromoData,
    active: document.getElementById('adminPromoActive')?.checked ?? true,
    autoPopup: document.getElementById('adminPromoAutoPopup')?.checked ?? true,
    badge: document.getElementById('adminPromoBadge')?.value.trim() || currentPromoData.badge,
    title: document.getElementById('adminPromoTitle')?.value.trim() || currentPromoData.title,
    subtitle: document.getElementById('adminPromoSubtitle')?.value.trim() || '',
    description: document.getElementById('adminPromoDesc')?.value.trim() || currentPromoData.description,
    code: (document.getElementById('adminPromoCode')?.value.trim() || currentPromoData.code).toUpperCase(),
    discountAmount: parseInt(document.getElementById('adminPromoDiscount')?.value, 10) || 0,
    minPurchase: parseInt(document.getElementById('adminPromoMinPurchase')?.value, 10) || 0,
    bonusText: document.getElementById('adminPromoBonusText')?.value.trim() || '',
    validUntil: document.getElementById('adminPromoValidity')?.value.trim() || currentPromoData.validUntil,
    bannerImage: document.getElementById('adminPromoImage')?.value.trim() || currentPromoData.bannerImage,
    terms: document.getElementById('adminPromoTerms')?.value.trim() || currentPromoData.terms
  };

  savePromoToStorage(updatedPromo);
  showToast('Pengaturan Promo & Pop-up berhasil disimpan! 🎁');
}

function populatePromoModal(promo) {
  const mb = document.getElementById('promoModalBadge');
  const mi = document.getElementById('promoModalImage');
  const md = document.getElementById('promoDiscountBadge');
  const mt = document.getElementById('promoModalTitle');
  const ms = document.getElementById('promoModalSubtitle');
  const mdesc = document.getElementById('promoModalDesc');
  const mc = document.getElementById('promoVoucherCode');
  const mv = document.getElementById('promoModalValidity');
  const mmin = document.getElementById('promoModalMinSpend');
  const mbonus = document.getElementById('promoModalBonus');
  const mbonustext = document.getElementById('promoModalBonusText');

  if (mb) mb.textContent = promo.badge || '🔥 PROMO SPESIAL';
  if (mi) mi.src = promo.bannerImage || 'images/menu/paket-cumi.jpg';
  if (md) md.textContent = promo.discountAmount ? `HEMAT ${formatRupiah(promo.discountAmount)}` : 'PROMO SPESIAL';
  if (mt) mt.textContent = promo.title || 'PAKET PROMO';
  if (ms) ms.textContent = promo.subtitle || '';
  if (mdesc) mdesc.textContent = promo.description || '';
  if (mc) mc.textContent = promo.code || 'MAKIGUNHEMAT';
  if (mv) mv.textContent = `⏳ ${promo.validUntil || 'Berlaku terbatas'}`;
  if (mmin) mmin.textContent = promo.minPurchase ? `💰 Min. Belanja ${formatRupiah(promo.minPurchase)}` : 'Tanpa Minimum';

  if (mbonus && mbonustext) {
    if (promo.bonusText && promo.bonusText.trim() !== '') {
      mbonus.style.display = 'block';
      mbonustext.textContent = promo.bonusText;
    } else {
      mbonus.style.display = 'none';
    }
  }
}

// ==========================================
// 7. AKUN & CADANGAN DATA LOGIC
// ==========================================
function loadAdminAccountForm() {
  const cred = getAdminCredentials();
  const uInput = document.getElementById('newAdminUsername');
  const pInput = document.getElementById('newAdminPassword');
  const cInput = document.getElementById('confirmAdminPassword');

  if (uInput) uInput.value = cred.username;
  if (pInput) pInput.value = '';
  if (cInput) cInput.value = '';
}

function handleUpdateAdminPassword(e) {
  e.preventDefault();
  const uInput = document.getElementById('newAdminUsername');
  const pInput = document.getElementById('newAdminPassword');
  const cInput = document.getElementById('confirmAdminPassword');

  const u = uInput?.value.trim();
  const p = pInput?.value.trim();
  const c = cInput?.value.trim();

  if (!u || !p) {
    alert('Username dan password tidak boleh kosong!');
    return;
  }

  if (p !== c) {
    alert('Konfirmasi password tidak cocok dengan password baru!');
    return;
  }

  setAdminCredentials(u, p);
  pInput.value = '';
  cInput.value = '';
  showToast('Kredensial admin berhasil diperbarui! 🔑');
}

function handleExportDataJSON() {
  const exportPayload = {
    app: 'Nasi Kulit Mak Igun',
    version: '2.0',
    exportDate: new Date().toISOString(),
    menus: currentMenuItems,
    cover: currentCoverData,
    gallery: currentGalleryItems,
    location: currentLocationData,
    contact: currentContactData,
    promo: currentPromoData,
    settings: currentSettings
  };

  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(exportPayload, null, 2));
  const downloadAnchor = document.createElement('a');
  const dateFormatted = new Date().toISOString().slice(0, 10);
  downloadAnchor.setAttribute('href', dataStr);
  downloadAnchor.setAttribute('download', `makigun_full_backup_${dateFormatted}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();

  showToast('File backup lengkap JSON berhasil diunduh! 📥');
}

function handleImportDataJSON(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const parsed = JSON.parse(evt.target.result);
      if (confirm('Pulihkan seluruh konfigurasi (Menu, Cover, Galeri, Alamat, Kontak, dan Promo) dari file cadangan ini?')) {
        if (parsed.menus && Array.isArray(parsed.menus)) {
          saveMenusToStorage(parsed.menus);
        }
        if (parsed.cover) {
          saveCoverToStorage(parsed.cover);
        }
        if (parsed.gallery && Array.isArray(parsed.gallery)) {
          saveGalleryToStorage(parsed.gallery);
        }
        if (parsed.location) {
          saveLocationToStorage(parsed.location);
        }
        if (parsed.contact) {
          saveContactToStorage(parsed.contact);
        }
        if (parsed.promo) {
          savePromoToStorage(parsed.promo);
        }
        showToast('Seluruh data berhasil dipulihkan dari cadangan! 📤');
      }
    } catch (err) {
      alert('Gagal membaca file JSON: ' + err.message);
    }
  };
  reader.readAsText(file);
  e.target.value = '';
}

function handleResetDefaultData() {
  if (confirm('PERINGATAN: Seluruh menu, cover, galeri foto, alamat, kontak, dan promo kustom Anda akan direset kembali ke kondisi awal pabrik Mak Igun. Lanjutkan?')) {
    saveMenusToStorage(DEFAULT_MENU_ITEMS);
    saveCoverToStorage(DEFAULT_COVER_DATA);
    saveGalleryToStorage(DEFAULT_GALLERY_ITEMS);
    saveLocationToStorage(DEFAULT_LOCATION_DATA);
    saveContactToStorage(DEFAULT_CONTACT_DATA);
    savePromoToStorage(DEFAULT_PROMO_DATA);
    showToast('Seluruh data berhasil direset ke pengaturan default! 🔄');
  }
}

// Toast Notification
function showToast(message) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
