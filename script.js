/**
 * NASI KULIT MAK IGUN - INTERACTIVE SCRIPT
 * Cabang Surabaya Pusat (Jl. Pregolan 11)
 * WhatsApp Hotline: 087777728228
 * Semua path gambar menggunakan folder lokal: images/menu/
 */

// Data Menu Lengkap Bawaan Pabrik Mak Igun sesuai foto lembar menu resmi
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

// Konfigurasi Informasi Toko Bawaan (Legacy fallback)
const DEFAULT_SITE_SETTINGS = {
  announcement: "🔥 Cabang Surabaya Pusat: Jl. Pregolan No. 11, Tegalsari • Buka Setiap Hari 10:00 - 00:00 WIB",
  waNumber: "087777728228",
  waDisplay: "0877-7772-8228",
  address: "Jl. Pregolan No. 11, Tegalsari, Surabaya",
  openHoursText: "Setiap Hari: 10.00 – 00.00 WIB",
  openHour: 10,
  closeHour: 24
};

// Konfigurasi Cover Depan Bawaan
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

// Konfigurasi 6 Foto Galeri Bawaan
const DEFAULT_GALLERY_ITEMS = [
  {
    id: "gal-1",
    title: "Nasi Kulit Lengkap Bintang Utama",
    badge: "Menu Favorit",
    image: "images/galeri/galeri-1-nasi-kulit.jpg",
    desc: "Porsi melimpah dengan kulit krispi gurih, oseng buncis, ebi goreng, serundeng, dan sambal khas racikan King Abdi."
  },
  {
    id: "gal-2",
    title: "Cumi Oseng Kecombrang Gurih Pedas",
    badge: "Viral Banget",
    image: "images/galeri/galeri-2-cumi-kecombrang.jpg",
    desc: "Aroma wangi bunga kecombrang berpadu dengan cumi kenyal empuk dan cabai rawit pedas nendang."
  },
  {
    id: "gal-3",
    title: "Suasana Outlet Nyaman & Ramai",
    badge: "Suasana Outlet",
    image: "images/galeri/galeri-3-suasana-warung.jpg",
    desc: "Dine-in area yang bersih, sejuk, dan ramah keluarga di Jalan Pregolan No. 11 Surabaya."
  },
  {
    id: "gal-4",
    title: "Sambal Bawang & Sambal Terasi Medok",
    badge: "Sambal Juara",
    image: "images/galeri/galeri-4-sambal-spesial.jpg",
    desc: "Ulekan sambal pedas nampol dengan racikan minyak gurih yang bikin suapan nasi tak ingin berhenti."
  },
  {
    id: "gal-5",
    title: "Paru Oseng & Daging Kisi Lembut",
    badge: "Lauk Spesial",
    image: "images/galeri/galeri-5-paru-kisi.jpg",
    desc: "Potongan jeroan dan daging sapi empuk yang dimasak meresap tanpa amis, gurih legit."
  },
  {
    id: "gal-6",
    title: "Minuman Dingin Pelepas Dahaga",
    badge: "Pelepas Dahaga",
    image: "images/galeri/galeri-6-minuman-segar.jpg",
    desc: "Es teh manis wangi melati, es limau asam segar, dan es jeruk peras sehabis makan pedas."
  }
];

// Konfigurasi Lokasi & Alamat Bawaan
const DEFAULT_LOCATION_DATA = {
  branchName: "Cabang Surabaya Pusat",
  address: "Jl. Pregolan No. 11, Tegalsari, Kec. Tegalsari, Kota Surabaya, Jawa Timur 60262",
  openHoursText: "Buka Setiap Hari: Pukul 10.00 – 00.00 WIB (Tengah Malam)",
  openHour: 10,
  closeHour: 24,
  facilities: "Makan di Tempat (Dine-in), Bungkus Bawa Pulang (Takeaway), Pesan Antar Online (GoFood, GrabFood, ShopeeFood), Tempat Bersih & Nyaman, Parkir Tersedia.",
  paymentMethods: "QRIS (BCA, Mandiri, GoPay, OVO, Dana, ShopeePay), Transfer Bank, dan Tunai (Cash).",
  mapsUrl: "https://maps.google.com/?q=Nasi+Kulit+Mak+Igun+Jl.+Pregolan+No.+11+Surabaya",
  mapEmbedSrc: "https://maps.google.com/maps?q=Jl.+Pregolan+No.+11,+Tegalsari,+Surabaya&t=&z=16&ie=UTF8&iwloc=&output=embed",
  mapTitle: "Peta Lokasi Jl. Pregolan 11 Surabaya",
  mapBadge: "Tegalsari, Surabaya",
  otherBranch: "Cabang Tenggilis: Jl. Raya Tenggilis No. 60, Surabaya Timur (Instagram: @nasikulitmakigun.tenggilis)"
};

// Konfigurasi Kontak & Media Sosial Bawaan
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

// Konfigurasi Promo & Voucher Bawaan
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

// Konfigurasi Tema & Warna Bawaan
const DEFAULT_THEME_DATA = {
  primaryColor: '#FF6700',
  secondaryColor: '#5A1679',
  accentColor: '#FFC400',
  bgColor: '#FFF9F2'
};

// Konfigurasi Navbar & Header Bawaan
const DEFAULT_NAVBAR_DATA = {
  logo: 'images/branding/logo.jpg',
  brandTitle: 'NASI KULIT MAK IGUN',
  brandSub: 'Surabaya Pusat',
  announcementText: '🔥 Cabang Surabaya Pusat: Jl. Pregolan No. 11, Tegalsari • Buka Setiap Hari 10:00 - 00:00 WIB',
  announcementBadge: 'LIVE',
  orderBtnText: 'Pesan Menu'
};

// Konfigurasi Seksi Menu Bawaan
const DEFAULT_MENU_SECTION_DATA = {
  subtitle: 'Daftar Menu Resmi',
  title: 'Pilihan Menu <span>Nasi Kulit Mak Igun</span>',
  desc: 'Dari menu paket komplit, lauk oseng viral kecombrang, jeroan gongso mantap, hingga es pelepas dahaga. Semua harga tertera transparan sesuai buku menu resmi!',
  brochureTitle: '📖 Ingin Melihat Lembar Menu Aslinya?',
  brochureDesc: 'Tersedia foto papan menu fisik Mak Igun original beresolusi tinggi langsung dari outlet cabang Surabaya Pusat.',
  brochureBtnText: 'Lihat Foto Menu Fisik (Zoom)',
  brochureImage: 'images/branding/menu-asli.jpeg',
  searchPlaceholder: 'Cari menu favoritmu (cth: Cumi, Paru, Kulit, Es Jeruk)...',
  footerNote: '* Catatan: Harga tertera pada menu belum termasuk PB 1. Tersedia pilihan Nasi Putih atau Nasi Jagung (+Rp 1.500).'
};

// Konfigurasi Seksi Galeri Bawaan
const DEFAULT_GALLERY_SECTION_DATA = {
  subtitle: 'Galeri Visual Instagram',
  title: 'Kenikmatan & Suasana <span>Mak Igun</span>',
  desc: 'Intip hidangan menggoda selera, kriuknya kulit ayam renyah keemasan, dan kehangatan suasana warung Nasi Kulit Mak Igun cabang Surabaya Pusat.',
  igBtnText: 'Follow Instagram @nasikulitmakigun.surabayapusat',
  igBtnUrl: 'https://www.instagram.com/nasikulitmakigun.surabayapusat/?hl=en'
};

// Konfigurasi Footer Bawaan
const DEFAULT_FOOTER_DATA = {
  brandTitle: 'NASI KULIT MAK IGUN',
  brandDesc: 'Kuliner nasi kulit ayam krispi legendaris hasil kolaborasi desainer ternama <strong>Ivan Gunawan</strong> dan MasterChef <strong>King Abdi</strong>. Gurih renyah melimpah dengan racikan sambal khas Jawa Timur.',
  halalBadge: '⭐ 100% Halal & Higienis',
  copyright: '© 2026 <strong>Nasi Kulit Mak Igun</strong>. Hak Cipta Dilindungi.',
  disclaimer: 'Desain Website terinspirasi dari identitas resmi Instagram @nasikulitmakigun.surabayapusat'
};

// Akun Admin Bawaan
const DEFAULT_ADMIN_CRED = {
  username: "admin",
  password: "makigun123"
};

// Kunci Penyimpanan Lokal (LocalStorage Keys)
const STORAGE_KEYS = {
  THEME: 'makigun_theme_v1',
  NAVBAR: 'makigun_navbar_v1',
  MENU_SECTION: 'makigun_menu_sec_v1',
  MENUS: 'makigun_menus_v1',
  COVER: 'makigun_cover_v1',
  GALLERY_SECTION: 'makigun_gal_sec_v1',
  GALLERY: 'makigun_gallery_v1',
  LOCATION: 'makigun_location_v1',
  CONTACT: 'makigun_contact_v1',
  FOOTER: 'makigun_footer_v1',
  SETTINGS: 'makigun_settings_v1',
  PROMO: 'makigun_promo_v1',
  PROMO_SHOWN_SESSION: 'makigun_promo_shown_session_v1',
  AUTH: 'makigun_admin_auth_v1',
  SESSION: 'makigun_admin_session_v1'
};

// State Aktif Aplikasi
let currentThemeData = { ...DEFAULT_THEME_DATA };
let currentNavbarData = { ...DEFAULT_NAVBAR_DATA };
let currentMenuSectionData = { ...DEFAULT_MENU_SECTION_DATA };
let currentMenuItems = [];
let currentCoverData = { ...DEFAULT_COVER_DATA };
let currentGallerySectionData = { ...DEFAULT_GALLERY_SECTION_DATA };
let currentGalleryItems = [];
let currentLocationData = { ...DEFAULT_LOCATION_DATA };
let currentContactData = { ...DEFAULT_CONTACT_DATA };
let currentFooterData = { ...DEFAULT_FOOTER_DATA };
let currentSettings = { ...DEFAULT_SITE_SETTINGS };
let currentPromoData = { ...DEFAULT_PROMO_DATA };
let appliedVoucher = null;
let cart = [];

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  loadAllData();
  initPromo();
  initMenuFilters();
  initMenuSearch();
  initModals();
  initCart();
  checkOpenStatus();
  initFeedbackForm();

  // Real-time synchronization across browser tabs (when modified in Admin Dashboard)
  window.addEventListener('storage', (e) => {
    if (Object.values(STORAGE_KEYS).includes(e.key)) {
      loadAllData();
    }
  });
});

// Format Rupiah
function formatRupiah(number) {
  return 'Rp ' + (number || 0).toLocaleString('id-ID');
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

  if (!items || items.length === 0) {
    menuGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 50px 20px;">
        <h4 style="font-family: var(--font-heading); color: var(--color-purple); font-size: 1.3rem;">Menu tidak ditemukan 😢</h4>
        <p style="color: var(--color-text-muted); margin-top: 8px;">Coba gunakan kata kunci pencarian yang lain.</p>
      </div>
    `;
    return;
  }

  menuGrid.innerHTML = items.map(item => {
    const isAvailable = item.available !== false;
    return `
      <article class="menu-card ${item.star ? 'featured-star' : ''} ${!isAvailable ? 'sold-out' : ''}" data-category="${item.category}">
        <span class="card-top-tag ${item.tagClass || 'tag-star'}">${item.tag || 'Spesial'}</span>
        <div class="menu-card-img-wrap">
          <img class="menu-card-img" src="${item.image || 'images/branding/logo.jpg'}" alt="${item.name}" loading="lazy" onerror="this.src='images/branding/logo.jpg'" />
        </div>
        <div class="menu-card-body">
          <h4 class="menu-card-title">${item.name}</h4>
          <p class="menu-card-desc">${item.desc || ''}</p>
          <div class="menu-card-footer">
            <div class="menu-card-price">
              ${formatRupiah(item.price)}
            </div>
            ${isAvailable ? `
              <button class="add-cart-btn" onclick="addToCart('${item.id}')" title="Tambahkan ${item.name} ke pesanan">
                <span>+ Pesan</span>
              </button>
            ` : `
              <button class="add-cart-btn" disabled title="Menu sedang habis">
                <span>Habis</span>
              </button>
            `}
          </div>
        </div>
      </article>
    `;
  }).join('');
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
        renderMenu(currentMenuItems);
      } else {
        const filtered = currentMenuItems.filter(item => item.category === category);
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
      renderMenu(currentMenuItems);
      return;
    }

    const filtered = currentMenuItems.filter(item => 
      item.name.toLowerCase().includes(keyword) || 
      (item.desc && item.desc.toLowerCase().includes(keyword)) ||
      (item.tag && item.tag.toLowerCase().includes(keyword))
    );
    renderMenu(filtered);
  });
}

// 5. Modals Management
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

  // Gallery Card Click to open Lightbox (Event Delegation for Dynamic Cards)
  const galleryGrid = document.getElementById('galleryGrid');
  const galleryModal = document.getElementById('galleryModal');
  const galleryModalImg = document.getElementById('galleryModalImg');
  const galleryModalTitle = document.getElementById('galleryModalTitle');
  const galleryModalDesc = document.getElementById('galleryModalDesc');

  if (galleryGrid) {
    galleryGrid.addEventListener('click', (e) => {
      const card = e.target.closest('.gallery-card');
      if (!card) return;
      const img = card.querySelector('img');
      const title = card.getAttribute('data-title') || 'Nasi Kulit Mak Igun';
      const desc = card.getAttribute('data-desc') || 'Cabang Surabaya Pusat';

      if (galleryModal && galleryModalImg) {
        galleryModalImg.src = img ? img.src : '';
        if (galleryModalTitle) galleryModalTitle.textContent = title;
        if (galleryModalDesc) galleryModalDesc.textContent = desc;
        galleryModal.classList.add('active');
      }
    });
  }
}

// 6. Cart / Order Simulation
function initCart() {
  const cartToggleBtns = document.querySelectorAll('.cart-toggle-trigger');
  const cartModal = document.getElementById('cartModal');
  const sendWhatsAppBtn = document.getElementById('sendWhatsAppBtn');
  const applyVoucherBtn = document.getElementById('btnApplyCartVoucher');
  const voucherInput = document.getElementById('cartVoucherCodeInput');

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

  if (applyVoucherBtn && voucherInput) {
    applyVoucherBtn.addEventListener('click', () => {
      applyCartVoucher(voucherInput.value);
    });
    voucherInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        applyCartVoucher(voucherInput.value);
      }
    });
  }
}

function addToCart(itemId) {
  const item = currentMenuItems.find(i => i.id === itemId);
  if (!item) return;

  if (item.available === false) {
    alert(`Maaf, menu "${item.name}" saat ini sedang habis!`);
    return;
  }

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
  const subtotalDisplay = document.getElementById('cartSubtotalDisplay');
  const emptyState = document.getElementById('cartEmptyState');
  const formWrap = document.getElementById('cartOrderFormWrap');
  const discountRow = document.getElementById('cartDiscountRow');
  const discountCodeLabel = document.getElementById('cartDiscountCodeLabel');
  const discountAmountDisplay = document.getElementById('cartDiscountAmountDisplay');
  const bonusNotice = document.getElementById('cartBonusNotice');
  const bonusNoticeText = document.getElementById('cartBonusNoticeText');

  if (!container || !totalDisplay) return;

  if (cart.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    if (formWrap) formWrap.style.display = 'none';
    totalDisplay.textContent = 'Rp 0';
    if (subtotalDisplay) subtotalDisplay.textContent = 'Rp 0';
    if (discountRow) discountRow.style.display = 'none';
    if (bonusNotice) bonusNotice.style.display = 'none';
    appliedVoucher = null;
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

  if (subtotalDisplay) subtotalDisplay.textContent = formatRupiah(totalPrice);

  let discount = 0;
  if (appliedVoucher) {
    const minSpend = currentPromoData.minPurchase || 0;
    if (totalPrice >= minSpend) {
      discount = appliedVoucher.discount;
      if (discountRow) {
        discountRow.style.display = 'flex';
        if (discountCodeLabel) discountCodeLabel.textContent = appliedVoucher.code;
        if (discountAmountDisplay) discountAmountDisplay.textContent = `-${formatRupiah(discount)}`;
      }
      if (appliedVoucher.bonusText && bonusNotice && bonusNoticeText) {
        bonusNotice.style.display = 'block';
        bonusNoticeText.textContent = appliedVoucher.bonusText;
      }
    } else {
      if (discountRow) discountRow.style.display = 'none';
      if (bonusNotice) bonusNotice.style.display = 'none';
    }
  } else {
    if (discountRow) discountRow.style.display = 'none';
    if (bonusNotice) bonusNotice.style.display = 'none';
  }

  const finalTotal = Math.max(0, totalPrice - discount);
  totalDisplay.textContent = formatRupiah(finalTotal);
}

function applyCartVoucher(code) {
  const msgEl = document.getElementById('cartVoucherMessage');
  const cleanCode = (code || '').toUpperCase().trim();

  if (!cleanCode) {
    appliedVoucher = null;
    if (msgEl) {
      msgEl.style.display = 'none';
      msgEl.textContent = '';
    }
    updateCartModal();
    return;
  }

  if (currentPromoData.active && cleanCode === (currentPromoData.code || '').toUpperCase().trim()) {
    let subtotal = 0;
    cart.forEach(item => { subtotal += item.price * item.qty; });
    const minSpend = currentPromoData.minPurchase || 0;

    if (minSpend > 0 && subtotal < minSpend) {
      appliedVoucher = null;
      if (msgEl) {
        msgEl.className = 'cart-voucher-msg error';
        msgEl.style.display = 'block';
        msgEl.textContent = `Minimal belanja ${formatRupiah(minSpend)} untuk menggunakan kode ${cleanCode}. (Kurang ${formatRupiah(minSpend - subtotal)})`;
      }
    } else {
      appliedVoucher = {
        code: cleanCode,
        discount: currentPromoData.discountAmount || 0,
        bonusText: currentPromoData.bonusText || ''
      };
      if (msgEl) {
        msgEl.className = 'cart-voucher-msg success';
        msgEl.style.display = 'block';
        msgEl.textContent = `✅ Voucher ${cleanCode} berhasil digunakan! Diskon ${formatRupiah(currentPromoData.discountAmount)}.`;
      }
      showToast(`Voucher ${cleanCode} berhasil dipasang! 🎁`);
    }
  } else {
    appliedVoucher = null;
    if (msgEl) {
      msgEl.className = 'cart-voucher-msg error';
      msgEl.style.display = 'block';
      msgEl.textContent = `❌ Kode voucher "${cleanCode}" tidak valid atau promo sudah berakhir.`;
    }
  }
  updateCartModal();
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

  let promoSectionText = '';
  let discount = 0;
  if (appliedVoucher && totalPrice >= (currentPromoData.minPurchase || 0)) {
    discount = appliedVoucher.discount;
    promoSectionText = `🎁 *Voucher Promo:* ${appliedVoucher.code} (-${formatRupiah(discount)})\n`;
    if (appliedVoucher.bonusText) {
      promoSectionText += `🎉 *Bonus Promo:* ${appliedVoucher.bonusText}\n`;
    }
  }

  const finalTotal = Math.max(0, totalPrice - discount);

  const waMessage = `Halo Nasi Kulit Mak Igun Cabang Surabaya Pusat! 👋\n` +
    `Saya ingin memesan menu via Website Resmi:\n\n` +
    `👤 *Nama:* ${customerName}\n` +
    `🍽️ *Tipe Pesanan:* ${orderType}\n` +
    `📝 *Catatan Tambahan:* ${customerNotes}\n\n` +
    `📋 *Daftar Menu yang Dipesan:*\n` +
    `${menuListText}\n` +
    `💰 *Subtotal Menu:* ${formatRupiah(totalPrice)}\n` +
    (promoSectionText ? `${promoSectionText}` : '') +
    `💵 *Total Estimasi:* *${formatRupiah(finalTotal)}*\n` +
    `*(Belum termasuk PB 1 / Ongkir jika delivery)*\n\n` +
    `Mohon konfirmasi ketersediaan dan total pembayarannya ya. Terima kasih! 🙏`;

  const waNumClean = (currentSettings.waNumber || '087777728228').replace(/[^0-9]/g, '');
  const waTarget = waNumClean.startsWith('0') ? '62' + waNumClean.substring(1) : waNumClean;

  const waUrl = `https://wa.me/${waTarget}?text=${encodeURIComponent(waMessage)}`;
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

// 8. Live Status Check
function checkOpenStatus() {
  const statusBadge = document.getElementById('liveStatusBadge');
  if (!statusBadge) return;

  const now = new Date();
  const utcHours = now.getUTCHours();
  const wibHours = (utcHours + 7) % 24;

  const openH = currentLocationData.openHour !== undefined ? currentLocationData.openHour : 10;
  const closeH = currentLocationData.closeHour !== undefined ? currentLocationData.closeHour : 24;

  const isOpen = (wibHours >= openH && wibHours < closeH);

  if (isOpen) {
    statusBadge.className = 'location-badge-status status-open';
    statusBadge.style.backgroundColor = '';
    statusBadge.style.color = '';
    statusBadge.innerHTML = `<span class="status-indicator-dot"></span> BUKA SEKARANG • ${currentLocationData.openHoursText || '10.00 - 00.00 WIB'}`;
  } else {
    statusBadge.className = 'location-badge-status';
    statusBadge.style.backgroundColor = '#FFEBEE';
    statusBadge.style.color = '#C62828';
    statusBadge.innerHTML = `<span class="status-indicator-dot" style="background:#C62828"></span> TUTUP SEMENTARA • Buka Jam ${openH}.00 WIB`;
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

// ==========================================
// DATA PERSISTENCE & RENDERING LOGIC
// ==========================================

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Render Galeri Pelanggan Secara Dinamis
function renderGallery(items) {
  const container = document.getElementById('galleryGrid');
  if (!container) return;

  if (!items || items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--color-text-muted); font-size: 0.95rem;">
        Belum ada foto galeri yang ditambahkan. Buka Panel Admin untuk menambahkan foto.
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(item => `
    <div class="gallery-card" data-title="${escapeHtml(item.title)}" data-desc="${escapeHtml(item.desc || '')}">
      ${item.badge ? `<span class="gallery-badge">${escapeHtml(item.badge)}</span>` : ''}
      <img src="${escapeHtml(item.image || 'images/branding/logo.jpg')}" alt="${escapeHtml(item.title)}" loading="lazy" onerror="this.src='images/branding/logo.jpg'">
      <div class="gallery-overlay">
        <h4>${escapeHtml(item.title)}</h4>
        <p>${escapeHtml(item.desc || '')}</p>
      </div>
    </div>
  `).join('');
}

// Terapkan Data Cover Depan
function applyCoverData(cover) {
  if (!cover) return;

  // Logo
  const logoEl = document.getElementById('coverLogoImg');
  if (logoEl && cover.logo) logoEl.src = cover.logo;

  // Badges
  const b1 = document.getElementById('coverBadge1');
  if (b1 && cover.badge1) b1.textContent = cover.badge1;
  const b2 = document.getElementById('coverBadge2');
  if (b2 && cover.badge2) b2.textContent = cover.badge2;

  // Title
  const titleEl = document.getElementById('coverTitle');
  if (titleEl) {
    const t1 = cover.title1 || 'KULIT KRISPI GURIH';
    const t2 = cover.title2 || 'PEDASNYA BIKIN NAGIH!';
    titleEl.innerHTML = `${escapeHtml(t1)}<br><span>${escapeHtml(t2)}</span>`;
  }

  // Tagline
  const taglineEl = document.getElementById('coverTagline');
  if (taglineEl && cover.tagline) {
    taglineEl.innerHTML = cover.tagline;
  }

  // Highlights
  const h1Icon = document.getElementById('coverHighlight1Icon');
  const h1Title = document.getElementById('coverHighlight1Title');
  const h1Desc = document.getElementById('coverHighlight1Desc');
  if (h1Icon && cover.highlight1Icon) h1Icon.textContent = cover.highlight1Icon;
  if (h1Title && cover.highlight1Title) h1Title.textContent = cover.highlight1Title;
  if (h1Desc && cover.highlight1Desc) h1Desc.textContent = cover.highlight1Desc;

  const h2Icon = document.getElementById('coverHighlight2Icon');
  const h2Title = document.getElementById('coverHighlight2Title');
  const h2Desc = document.getElementById('coverHighlight2Desc');
  if (h2Icon && cover.highlight2Icon) h2Icon.textContent = cover.highlight2Icon;
  if (h2Title && cover.highlight2Title) h2Title.textContent = cover.highlight2Title;
  if (h2Desc && cover.highlight2Desc) h2Desc.textContent = cover.highlight2Desc;

  const h3Icon = document.getElementById('coverHighlight3Icon');
  const h3Title = document.getElementById('coverHighlight3Title');
  const h3Desc = document.getElementById('coverHighlight3Desc');
  if (h3Icon && cover.highlight3Icon) h3Icon.textContent = cover.highlight3Icon;
  if (h3Title && cover.highlight3Title) h3Title.textContent = cover.highlight3Title;
  if (h3Desc && cover.highlight3Desc) h3Desc.textContent = cover.highlight3Desc;

  // CTA Buttons Text
  const cta1 = document.getElementById('coverCta1Text');
  if (cta1 && cover.cta1Text) cta1.textContent = cover.cta1Text;
  const cta2 = document.getElementById('coverCta2Text');
  if (cta2 && cover.cta2Text) cta2.textContent = cover.cta2Text;
  const cta3 = document.getElementById('coverCta3Text');
  if (cta3 && cover.cta3Text) cta3.textContent = cover.cta3Text;

  // Stickers
  const s1 = document.getElementById('coverSticker1');
  if (s1 && cover.sticker1) s1.textContent = cover.sticker1;
  const s2 = document.getElementById('coverSticker2');
  if (s2 && cover.sticker2) s2.textContent = cover.sticker2;
  const s3 = document.getElementById('coverSticker3');
  if (s3 && cover.sticker3) s3.textContent = cover.sticker3;
  const s4 = document.getElementById('coverSticker4');
  if (s4 && cover.sticker4) s4.textContent = cover.sticker4;
}

// Terapkan Skema Warna Tema
function applyThemeData(theme) {
  if (!theme) return;
  const root = document.documentElement;
  if (theme.primaryColor) {
    root.style.setProperty('--color-orange', theme.primaryColor);
    root.style.setProperty('--color-orange-dark', theme.primaryColor);
  }
  if (theme.secondaryColor) {
    root.style.setProperty('--color-purple', theme.secondaryColor);
    root.style.setProperty('--color-purple-dark', theme.secondaryColor);
  }
  if (theme.accentColor) {
    root.style.setProperty('--color-yellow', theme.accentColor);
  }
  if (theme.bgColor) {
    root.style.setProperty('--color-bg-page', theme.bgColor);
  }
}

// Terapkan Data Navbar & Header
function applyNavbarData(nav) {
  if (!nav) return;
  const logo = document.getElementById('navBrandLogo');
  const title = document.getElementById('navBrandTitle');
  const sub = document.getElementById('navBrandSub');
  const annText = document.getElementById('topAnnouncementText');
  const annBadge = document.getElementById('topAnnouncementBadge');
  const orderBtn = document.getElementById('navOrderBtnText');

  if (logo && nav.logo) logo.src = nav.logo;
  if (title && nav.brandTitle) title.textContent = nav.brandTitle;
  if (sub && nav.brandSub) sub.textContent = nav.brandSub;
  if (annText && nav.announcementText) annText.textContent = nav.announcementText;
  if (annBadge && nav.announcementBadge) annBadge.textContent = nav.announcementBadge;
  if (orderBtn && nav.orderBtnText) orderBtn.textContent = nav.orderBtnText;
}

// Terapkan Data Seksi Menu (Header, Brosur, & Catatan Kaki)
function applyMenuSectionData(sec) {
  if (!sec) return;
  const sub = document.getElementById('menuSubtitle');
  const title = document.getElementById('menuTitle');
  const desc = document.getElementById('menuDesc');
  const bTitle = document.getElementById('brochureBannerTitle');
  const bDesc = document.getElementById('brochureBannerDesc');
  const bBtn = document.getElementById('brochureBtnText');
  const bModalImg = document.getElementById('menuBrochureModalImg');
  const bModalImgStatic = document.querySelector('#menuBrochureModal img');
  const searchInput = document.getElementById('menuSearchInput');
  const footerNote = document.getElementById('menuFooterNote');

  if (sub && sec.subtitle) sub.textContent = sec.subtitle;
  if (title && sec.title) title.innerHTML = sec.title;
  if (desc && sec.desc) desc.textContent = sec.desc;
  if (bTitle && sec.brochureTitle) bTitle.textContent = sec.brochureTitle;
  if (bDesc && sec.brochureDesc) bDesc.textContent = sec.brochureDesc;
  if (bBtn && sec.brochureBtnText) bBtn.textContent = sec.brochureBtnText;
  if (bModalImg && sec.brochureImage) bModalImg.src = sec.brochureImage;
  else if (bModalImgStatic && sec.brochureImage) bModalImgStatic.src = sec.brochureImage;
  if (searchInput && sec.searchPlaceholder) searchInput.placeholder = sec.searchPlaceholder;
  if (footerNote && sec.footerNote) footerNote.textContent = sec.footerNote;
}

// Terapkan Data Seksi Galeri (Header & Tautan IG)
function applyGallerySectionData(sec) {
  if (!sec) return;
  const sub = document.getElementById('gallerySubtitle');
  const title = document.getElementById('galleryTitle');
  const desc = document.getElementById('galleryDesc');
  const igBtn = document.getElementById('galleryIgBtn');
  const igBtnText = document.getElementById('galleryIgBtnText');

  if (sub && sec.subtitle) sub.textContent = sec.subtitle;
  if (title && sec.title) title.innerHTML = sec.title;
  if (desc && sec.desc) desc.textContent = sec.desc;
  if (igBtn && sec.igBtnUrl) igBtn.href = sec.igBtnUrl;
  if (igBtnText && sec.igBtnText) igBtnText.textContent = sec.igBtnText;
}

// Terapkan Data Footer & Hak Cipta
function applyFooterData(footer) {
  if (!footer) return;
  const title = document.getElementById('footerBrandTitle');
  const desc = document.getElementById('footerBrandDesc');
  const halal = document.getElementById('footerHalalBadge');
  const copy = document.getElementById('footerCopyright');
  const disc = document.getElementById('footerDisclaimer');

  if (title && footer.brandTitle) title.textContent = footer.brandTitle;
  if (desc && footer.brandDesc) desc.innerHTML = footer.brandDesc;
  if (halal && footer.halalBadge) halal.textContent = footer.halalBadge;
  if (copy && footer.copyright) copy.innerHTML = footer.copyright;
  if (disc && footer.disclaimer) disc.textContent = footer.disclaimer;
}

// Terapkan Data Lokasi & Alamat
function applyLocationData(loc) {
  if (!loc) return;

  const sub = document.getElementById('locSubtitle');
  const title = document.getElementById('locTitle');
  const desc = document.getElementById('locDesc');
  const otherTitle = document.getElementById('locOtherBranchTitle');

  if (sub && loc.subtitle) sub.textContent = loc.subtitle;
  if (title && loc.title) title.innerHTML = loc.title;
  if (desc && loc.desc) desc.textContent = loc.desc;
  if (otherTitle && loc.otherBranchTitle) otherTitle.textContent = loc.otherBranchTitle;

  const branch = document.getElementById('locBranchName');
  if (branch && loc.branchName) branch.textContent = loc.branchName;

  const addr = document.getElementById('locAddressText');
  if (addr && loc.address) addr.textContent = loc.address;

  const hours = document.getElementById('locHoursText');
  if (hours && loc.openHoursText) hours.innerHTML = loc.openHoursText;

  const fac = document.getElementById('locFacilitiesText');
  if (fac && loc.facilities) fac.textContent = loc.facilities;

  const pay = document.getElementById('locPaymentText');
  if (pay && loc.paymentMethods) pay.textContent = loc.paymentMethods;

  const mapsBtn = document.getElementById('locMapsBtn');
  if (mapsBtn && loc.mapsUrl) mapsBtn.href = loc.mapsUrl;

  const mapEmbed = document.getElementById('locMapIframe');
  if (mapEmbed && loc.mapEmbedSrc) mapEmbed.src = loc.mapEmbedSrc;

  const mapTitle = document.getElementById('locMapTitle');
  if (mapTitle && loc.mapTitle) mapTitle.textContent = loc.mapTitle;

  const mapBadge = document.getElementById('locMapBadge');
  if (mapBadge && loc.mapBadge) mapBadge.textContent = loc.mapBadge;

  const other = document.getElementById('locOtherBranchText');
  if (other && loc.otherBranch) other.textContent = loc.otherBranch;

  // Update Footer info
  const footerBranch = document.getElementById('footerBranchTitle');
  if (footerBranch && loc.branchName) footerBranch.textContent = loc.branchName + ':';

  const footerAddr = document.getElementById('footerAddressText');
  if (footerAddr && loc.address) footerAddr.textContent = loc.address;

  const footerHours = document.getElementById('footerHoursText');
  if (footerHours && loc.openHoursText) footerHours.textContent = loc.openHoursText;

  checkOpenStatus();
}

// Terapkan Data Kontak & Medsos
function applyContactData(contact) {
  if (!contact) return;

  const sub = document.getElementById('contactSubtitle');
  const title = document.getElementById('contactTitle');
  const desc = document.getElementById('contactDesc');
  const igBTitle = document.getElementById('contactIgBranchTitle');
  const igBDesc = document.getElementById('contactIgBranchDesc');
  const waTitle = document.getElementById('contactWaTitle');
  const waDesc = document.getElementById('contactWaDesc');
  const igOTitle = document.getElementById('contactIgOfficialTitle');
  const igODesc = document.getElementById('contactIgOfficialDesc');
  const partTitle = document.getElementById('contactPartnershipTitle');
  const partDesc = document.getElementById('contactPartnershipDesc');
  const floatWa = document.getElementById('floatingWaText');
  const delivTitle = document.getElementById('deliveryTitle');
  const delivSub = document.getElementById('deliverySubtitle');
  const feedTitle = document.getElementById('feedbackBoxTitle');
  const feedDesc = document.getElementById('feedbackBoxDesc');
  const feedBtn = document.getElementById('feedbackSubmitBtn');

  if (sub && contact.subtitle) sub.textContent = contact.subtitle;
  if (title && contact.title) title.innerHTML = contact.title;
  if (desc && contact.desc) desc.textContent = contact.desc;
  if (igBTitle && contact.igBranchTitle) igBTitle.textContent = contact.igBranchTitle;
  if (igBDesc && contact.igBranchDesc) igBDesc.textContent = contact.igBranchDesc;
  if (waTitle && contact.waTitle) waTitle.textContent = contact.waTitle;
  if (waDesc && contact.waDesc) waDesc.textContent = contact.waDesc;
  if (igOTitle && contact.igOfficialTitle) igOTitle.textContent = contact.igOfficialTitle;
  if (igODesc && contact.igOfficialDesc) igODesc.textContent = contact.igOfficialDesc;
  if (partTitle && contact.partnershipTitle) partTitle.textContent = contact.partnershipTitle;
  if (partDesc && contact.partnershipDesc) partDesc.textContent = contact.partnershipDesc;
  if (floatWa && contact.floatingWaText) floatWa.textContent = contact.floatingWaText;
  if (delivTitle && contact.deliveryTitle) delivTitle.textContent = contact.deliveryTitle;
  if (delivSub && contact.deliverySubtitle) delivSub.textContent = contact.deliverySubtitle;
  if (feedTitle && contact.feedbackTitle) feedTitle.textContent = contact.feedbackTitle;
  if (feedDesc && contact.feedbackDesc) feedDesc.textContent = contact.feedbackDesc;
  if (feedBtn && contact.feedbackSubmitBtn) feedBtn.textContent = contact.feedbackSubmitBtn;

  // Top announcement
  const annEl = document.getElementById('topAnnouncementText');
  if (annEl && contact.announcement) annEl.textContent = contact.announcement;

  // WhatsApp
  if (contact.waNumber) {
    const waClean = contact.waNumber.replace(/[^0-9]/g, '');
    const waFormatted = waClean.startsWith('0') ? '62' + waClean.substring(1) : waClean;

    document.querySelectorAll('a[href*="wa.me"]').forEach(a => {
      try {
        const url = new URL(a.href);
        const textParam = url.searchParams.get('text');
        a.href = `https://wa.me/${waFormatted}${textParam ? '?text=' + encodeURIComponent(textParam) : ''}`;
      } catch (e) {
        a.href = `https://wa.me/${waFormatted}`;
      }
    });

    document.querySelectorAll('a[href*="tel:"]').forEach(a => {
      a.href = `tel:${waClean}`;
    });

    const contactWaLink = document.getElementById('contactWaLink');
    if (contactWaLink) {
      contactWaLink.textContent = (contact.waDisplay || contact.waNumber) + ' (Chat WA)';
    }

    const footerWaLink = document.getElementById('footerWaLink');
    if (footerWaLink) {
      footerWaLink.textContent = contact.waDisplay || contact.waNumber;
    }
  }

  // Instagram Branch
  const igBranchLink = document.getElementById('contactIgBranchLink');
  if (igBranchLink) {
    if (contact.igBranchUrl) igBranchLink.href = contact.igBranchUrl;
    if (contact.igBranchHandle) igBranchLink.textContent = contact.igBranchHandle;
  }

  const galleryIgBtn = document.getElementById('galleryIgBtn');
  const galleryIgBtnText = document.getElementById('galleryIgBtnText');
  if (galleryIgBtn && contact.igBranchUrl) galleryIgBtn.href = contact.igBranchUrl;
  if (galleryIgBtnText && contact.igBranchHandle) galleryIgBtnText.textContent = `Follow Instagram ${contact.igBranchHandle}`;

  const footerIgLink = document.getElementById('footerIgLink');
  if (footerIgLink) {
    if (contact.igBranchUrl) footerIgLink.href = contact.igBranchUrl;
    if (contact.igBranchHandle) footerIgLink.textContent = contact.igBranchHandle;
  }

  // Instagram Official
  const igOfficialLink = document.getElementById('contactIgOfficialLink');
  if (igOfficialLink) {
    if (contact.igOfficialUrl) igOfficialLink.href = contact.igOfficialUrl;
    if (contact.igOfficialHandle) igOfficialLink.textContent = contact.igOfficialHandle;
  }

  // Delivery
  const gofood = document.getElementById('deliveryGoFoodLink');
  if (gofood && contact.gofoodUrl) gofood.href = contact.gofoodUrl;

  const grabfood = document.getElementById('deliveryGrabFoodLink');
  if (grabfood && contact.grabfoodUrl) grabfood.href = contact.grabfoodUrl;

  const shopeefood = document.getElementById('deliveryShopeeFoodLink');
  if (shopeefood && contact.shopeefoodUrl) shopeefood.href = contact.shopeefoodUrl;

  // Partnership
  const partnerLink = document.getElementById('contactPartnershipLink');
  if (partnerLink && contact.phoneHotline) {
    partnerLink.href = `tel:${contact.phoneHotline.replace(/[^0-9]/g, '')}`;
    partnerLink.textContent = `Hubungi Hotline ${contact.phoneHotline}`;
  }
}

function loadAllData() {
  // 0. Theme
  try {
    const storedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
    currentThemeData = storedTheme ? { ...DEFAULT_THEME_DATA, ...JSON.parse(storedTheme) } : { ...DEFAULT_THEME_DATA };
  } catch (e) {
    currentThemeData = { ...DEFAULT_THEME_DATA };
  }

  // 0. Navbar
  try {
    const storedNav = localStorage.getItem(STORAGE_KEYS.NAVBAR);
    currentNavbarData = storedNav ? { ...DEFAULT_NAVBAR_DATA, ...JSON.parse(storedNav) } : { ...DEFAULT_NAVBAR_DATA };
  } catch (e) {
    currentNavbarData = { ...DEFAULT_NAVBAR_DATA };
  }

  // 0. Menu Section
  try {
    const storedMenuSec = localStorage.getItem(STORAGE_KEYS.MENU_SECTION);
    currentMenuSectionData = storedMenuSec ? { ...DEFAULT_MENU_SECTION_DATA, ...JSON.parse(storedMenuSec) } : { ...DEFAULT_MENU_SECTION_DATA };
  } catch (e) {
    currentMenuSectionData = { ...DEFAULT_MENU_SECTION_DATA };
  }

  // 1. Menus
  try {
    const storedMenus = localStorage.getItem(STORAGE_KEYS.MENUS);
    if (storedMenus) {
      currentMenuItems = JSON.parse(storedMenus);
    } else {
      currentMenuItems = [...DEFAULT_MENU_ITEMS];
      localStorage.setItem(STORAGE_KEYS.MENUS, JSON.stringify(currentMenuItems));
    }
  } catch (e) {
    console.error('Gagal membaca menu dari localStorage:', e);
    currentMenuItems = [...DEFAULT_MENU_ITEMS];
  }

  // 2. Cover Data
  try {
    const storedCover = localStorage.getItem(STORAGE_KEYS.COVER);
    if (storedCover) {
      currentCoverData = { ...DEFAULT_COVER_DATA, ...JSON.parse(storedCover) };
    } else {
      currentCoverData = { ...DEFAULT_COVER_DATA };
      localStorage.setItem(STORAGE_KEYS.COVER, JSON.stringify(currentCoverData));
    }
  } catch (e) {
    console.error('Gagal membaca cover dari localStorage:', e);
    currentCoverData = { ...DEFAULT_COVER_DATA };
  }

  // 2.5 Gallery Section
  try {
    const storedGalSec = localStorage.getItem(STORAGE_KEYS.GALLERY_SECTION);
    currentGallerySectionData = storedGalSec ? { ...DEFAULT_GALLERY_SECTION_DATA, ...JSON.parse(storedGalSec) } : { ...DEFAULT_GALLERY_SECTION_DATA };
  } catch (e) {
    currentGallerySectionData = { ...DEFAULT_GALLERY_SECTION_DATA };
  }

  // 3. Gallery Items
  try {
    const storedGallery = localStorage.getItem(STORAGE_KEYS.GALLERY);
    if (storedGallery) {
      currentGalleryItems = JSON.parse(storedGallery);
    } else {
      currentGalleryItems = [...DEFAULT_GALLERY_ITEMS];
      localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(currentGalleryItems));
    }
  } catch (e) {
    console.error('Gagal membaca galeri dari localStorage:', e);
    currentGalleryItems = [...DEFAULT_GALLERY_ITEMS];
  }

  // 4. Location Data
  try {
    const storedLoc = localStorage.getItem(STORAGE_KEYS.LOCATION);
    if (storedLoc) {
      currentLocationData = { ...DEFAULT_LOCATION_DATA, ...JSON.parse(storedLoc) };
    } else {
      currentLocationData = { ...DEFAULT_LOCATION_DATA };
      localStorage.setItem(STORAGE_KEYS.LOCATION, JSON.stringify(currentLocationData));
    }
  } catch (e) {
    console.error('Gagal membaca lokasi dari localStorage:', e);
    currentLocationData = { ...DEFAULT_LOCATION_DATA };
  }

  // 5. Contact & Socials Data
  try {
    const storedContact = localStorage.getItem(STORAGE_KEYS.CONTACT);
    if (storedContact) {
      currentContactData = { ...DEFAULT_CONTACT_DATA, ...JSON.parse(storedContact) };
    } else {
      currentContactData = { ...DEFAULT_CONTACT_DATA };
      localStorage.setItem(STORAGE_KEYS.CONTACT, JSON.stringify(currentContactData));
    }
  } catch (e) {
    console.error('Gagal membaca kontak dari localStorage:', e);
    currentContactData = { ...DEFAULT_CONTACT_DATA };
  }

  // 5.5 Footer Data
  try {
    const storedFooter = localStorage.getItem(STORAGE_KEYS.FOOTER);
    currentFooterData = storedFooter ? { ...DEFAULT_FOOTER_DATA, ...JSON.parse(storedFooter) } : { ...DEFAULT_FOOTER_DATA };
  } catch (e) {
    currentFooterData = { ...DEFAULT_FOOTER_DATA };
  }

  // 6. Promo & Voucher Data
  try {
    const storedPromo = localStorage.getItem(STORAGE_KEYS.PROMO);
    if (storedPromo) {
      currentPromoData = { ...DEFAULT_PROMO_DATA, ...JSON.parse(storedPromo) };
    } else {
      currentPromoData = { ...DEFAULT_PROMO_DATA };
      localStorage.setItem(STORAGE_KEYS.PROMO, JSON.stringify(currentPromoData));
    }
  } catch (e) {
    console.error('Gagal membaca promo dari localStorage:', e);
    currentPromoData = { ...DEFAULT_PROMO_DATA };
  }

  // Render Initial Views
  applyThemeData(currentThemeData);
  applyNavbarData(currentNavbarData);
  applyCoverData(currentCoverData);
  applyMenuSectionData(currentMenuSectionData);
  renderMenu(currentMenuItems);
  applyGallerySectionData(currentGallerySectionData);
  renderGallery(currentGalleryItems);
  applyLocationData(currentLocationData);
  applyContactData(currentContactData);
  applyFooterData(currentFooterData);
  renderPromoUI(currentPromoData);
  checkOpenStatus();

  // Sync with local server API if running on HTTP
  if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => {
        if (!data) return;
        if (data.theme) {
          currentThemeData = { ...DEFAULT_THEME_DATA, ...data.theme };
          localStorage.setItem(STORAGE_KEYS.THEME, JSON.stringify(currentThemeData));
          applyThemeData(currentThemeData);
        }
        if (data.navbar) {
          currentNavbarData = { ...DEFAULT_NAVBAR_DATA, ...data.navbar };
          localStorage.setItem(STORAGE_KEYS.NAVBAR, JSON.stringify(currentNavbarData));
          applyNavbarData(currentNavbarData);
        }
        if (data.menuSection) {
          currentMenuSectionData = { ...DEFAULT_MENU_SECTION_DATA, ...data.menuSection };
          localStorage.setItem(STORAGE_KEYS.MENU_SECTION, JSON.stringify(currentMenuSectionData));
          applyMenuSectionData(currentMenuSectionData);
        }
        if (data.menus && Array.isArray(data.menus) && data.menus.length > 0) {
          currentMenuItems = data.menus;
          localStorage.setItem(STORAGE_KEYS.MENUS, JSON.stringify(currentMenuItems));
          renderMenu(currentMenuItems);
        }
        if (data.cover) {
          currentCoverData = { ...DEFAULT_COVER_DATA, ...data.cover };
          localStorage.setItem(STORAGE_KEYS.COVER, JSON.stringify(currentCoverData));
          applyCoverData(currentCoverData);
        }
        if (data.gallerySection) {
          currentGallerySectionData = { ...DEFAULT_GALLERY_SECTION_DATA, ...data.gallerySection };
          localStorage.setItem(STORAGE_KEYS.GALLERY_SECTION, JSON.stringify(currentGallerySectionData));
          applyGallerySectionData(currentGallerySectionData);
        }
        if (data.gallery && Array.isArray(data.gallery)) {
          currentGalleryItems = data.gallery;
          localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(currentGalleryItems));
          renderGallery(currentGalleryItems);
        }
        if (data.location) {
          currentLocationData = { ...DEFAULT_LOCATION_DATA, ...data.location };
          localStorage.setItem(STORAGE_KEYS.LOCATION, JSON.stringify(currentLocationData));
          applyLocationData(currentLocationData);
        }
        if (data.contact) {
          currentContactData = { ...DEFAULT_CONTACT_DATA, ...data.contact };
          localStorage.setItem(STORAGE_KEYS.CONTACT, JSON.stringify(currentContactData));
          applyContactData(currentContactData);
        }
        if (data.footer) {
          currentFooterData = { ...DEFAULT_FOOTER_DATA, ...data.footer };
          localStorage.setItem(STORAGE_KEYS.FOOTER, JSON.stringify(currentFooterData));
          applyFooterData(currentFooterData);
        }
        if (data.promo) {
          currentPromoData = { ...DEFAULT_PROMO_DATA, ...data.promo };
          localStorage.setItem(STORAGE_KEYS.PROMO, JSON.stringify(currentPromoData));
          renderPromoUI(currentPromoData);
        }
      })
      .catch(() => {
        // Silently continue in offline / file mode
      });
  }
}

function saveMenusToStorage(items) {
  currentMenuItems = [...items];
  try {
    localStorage.setItem(STORAGE_KEYS.MENUS, JSON.stringify(currentMenuItems));
  } catch (e) {
    console.error('Gagal menyimpan menu ke localStorage:', e);
  }

  syncToServer();

  // Re-render
  renderMenu(currentMenuItems);
}

function saveCoverToStorage(cover) {
  currentCoverData = { ...currentCoverData, ...cover };
  try {
    localStorage.setItem(STORAGE_KEYS.COVER, JSON.stringify(currentCoverData));
  } catch (e) {
    console.error('Gagal menyimpan cover ke localStorage:', e);
  }

  syncToServer();
  applyCoverData(currentCoverData);
}

function saveGalleryToStorage(items) {
  currentGalleryItems = [...items];
  try {
    localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(currentGalleryItems));
  } catch (e) {
    console.error('Gagal menyimpan galeri ke localStorage:', e);
  }

  syncToServer();
  renderGallery(currentGalleryItems);
}

function saveLocationToStorage(loc) {
  currentLocationData = { ...currentLocationData, ...loc };
  try {
    localStorage.setItem(STORAGE_KEYS.LOCATION, JSON.stringify(currentLocationData));
  } catch (e) {
    console.error('Gagal menyimpan lokasi ke localStorage:', e);
  }

  syncToServer();
  applyLocationData(currentLocationData);
}

function saveContactToStorage(contact) {
  currentContactData = { ...currentContactData, ...contact };
  try {
    localStorage.setItem(STORAGE_KEYS.CONTACT, JSON.stringify(currentContactData));
  } catch (e) {
    console.error('Gagal menyimpan kontak ke localStorage:', e);
  }

  syncToServer();
  applyContactData(currentContactData);
}

function savePromoToStorage(promo) {
  currentPromoData = { ...currentPromoData, ...promo };
  try {
    localStorage.setItem(STORAGE_KEYS.PROMO, JSON.stringify(currentPromoData));
  } catch (e) {
    console.error('Gagal menyimpan promo ke localStorage:', e);
  }

  syncToServer();
  renderPromoUI(currentPromoData);
}

function syncToServer() {
  if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
    fetch('/api/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        theme: currentThemeData,
        navbar: currentNavbarData,
        menuSection: currentMenuSectionData,
        menus: currentMenuItems,
        cover: currentCoverData,
        gallerySection: currentGallerySectionData,
        gallery: currentGalleryItems,
        location: currentLocationData,
        contact: currentContactData,
        footer: currentFooterData,
        settings: currentSettings,
        promo: currentPromoData
      })
    }).catch(err => console.log('Sync status:', err.message));
  }
}

// ==========================================
// PROMO & VOUCHER SYSTEM FUNCTIONS
// ==========================================
function renderPromoUI(promo) {
  const strip = document.getElementById('promoStripBanner');
  const floatingBtn = document.getElementById('floatingPromoBtn');

  if (!promo || !promo.active) {
    if (strip) strip.style.display = 'none';
    if (floatingBtn) floatingBtn.style.display = 'none';
    return;
  }

  if (strip) {
    strip.style.display = 'block';
    const b = document.getElementById('stripPromoBadge');
    const t = document.getElementById('stripPromoText');
    const c = document.getElementById('stripPromoCode');
    if (b) b.textContent = promo.badge || '🔥 PROMO';
    if (t) t.textContent = promo.subtitle ? `${promo.title} - ${promo.subtitle}` : promo.title;
    if (c) c.textContent = promo.code || 'MAKIGUNHEMAT';
  }

  if (floatingBtn) {
    floatingBtn.style.display = 'flex';
  }

  // Populate Promo Modal
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

function initPromo() {
  const stripBtn = document.getElementById('btnOpenPromoModal');
  const floatingBtn = document.getElementById('floatingPromoBtn');
  const promoModal = document.getElementById('promoModal');
  const copyBtn = document.getElementById('btnCopyPromoCode');
  const claimBtn = document.getElementById('btnClaimPromoAction');

  function openPromo() {
    if (promoModal) promoModal.classList.add('active');
  }

  if (stripBtn) stripBtn.addEventListener('click', openPromo);
  if (floatingBtn) floatingBtn.addEventListener('click', openPromo);

  // Copy voucher code
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const code = currentPromoData.code || 'MAKIGUNHEMAT';
      navigator.clipboard.writeText(code).then(() => {
        copyBtn.textContent = '✅ Tersalin!';
        copyBtn.classList.add('copied');
        showToast(`Kode voucher "${code}" berhasil disalin! 📋`);
        setTimeout(() => {
          copyBtn.textContent = '📋 Salin Kode';
          copyBtn.classList.remove('copied');
        }, 2500);
      }).catch(() => {
        showToast(`Kode voucher: ${code}`);
      });
    });
  }

  // Claim Promo Button in Popup
  if (claimBtn) {
    claimBtn.addEventListener('click', () => {
      const voucherInput = document.getElementById('cartVoucherCodeInput');
      if (voucherInput) {
        voucherInput.value = currentPromoData.code || '';
      }
      applyCartVoucher(currentPromoData.code);
      if (promoModal) promoModal.classList.remove('active');

      if (cart.length > 0) {
        const cartModal = document.getElementById('cartModal');
        if (cartModal) cartModal.classList.add('active');
        showToast('Voucher promo berhasil dipasang di keranjang! 🎉');
      } else {
        const menuSection = document.getElementById('menu');
        if (menuSection) menuSection.scrollIntoView({ behavior: 'smooth' });
        showToast(`Voucher ${currentPromoData.code} aktif! Silakan pilih menu paket favorit Anda 🍗`);
      }
    });
  }

  // Auto popup on first visit per session
  setTimeout(() => {
    checkAutoPromoPopup();
  }, 1200);
}

function checkAutoPromoPopup() {
  if (!currentPromoData.active || !currentPromoData.autoPopup) return;
  const alreadySeen = sessionStorage.getItem(STORAGE_KEYS.PROMO_SHOWN_SESSION);
  if (!alreadySeen) {
    const promoModal = document.getElementById('promoModal');
    if (promoModal) {
      promoModal.classList.add('active');
      sessionStorage.setItem(STORAGE_KEYS.PROMO_SHOWN_SESSION, 'true');
    }
  }
}

// Backward compatibility helper
function applySiteSettings(settings) {
  if (!settings) return;
  if (settings.announcement) {
    const annEl = document.getElementById('topAnnouncementText');
    if (annEl) annEl.textContent = settings.announcement;
  }
}
