# Website Resmi Nasi Kulit Mak Igun (Cabang Surabaya Pusat)

Website resmi untuk warung kuliner **Nasi Kulit Mak Igun**, hasil kolaborasi antara desainer **Ivan Gunawan** dan MasterChef Indonesia **King Abdi**.

---

## 🎨 Identitas Visual & Desain
Website ini didesain mengacu pada referensi identitas resmi Instagram [@nasikulitmakigun.surabayapusat](https://www.instagram.com/nasikulitmakigun.surabayapusat/?hl=en) dan logo original:

- **Warna Utama:** 
  - Vibrant Warm Orange (`#FF6700`)
  - Deep Royal Purple (`#5A1679`)
  - Accent Sunshine Yellow (`#FFC400`)
  - Warm Off-White / Cream (`#FFF9F2`)
- **Tipografi:** 
  - Font Judul Display: `Titan One` & `Fredoka` (bergaya pop-art kuliner playful, ceria, dan menggugah selera).
  - Font Konten / Body: `Plus Jakarta Sans` (modern, rapi, dan mudah dibaca di mobile/desktop).

---

## 📁 Struktur Folder Gambar (Mudah Diganti & Dikelola)

Seluruh foto dan aset visual telah **dipisahkan secara rapi ke dalam folder `images/`** dengan penamaan yang sangat jelas:

```text
nasikulit-makigun-website/
├── images/
│   ├── branding/                  <-- Identitas & Logo
│   │   ├── logo.jpg               (Logo Mak Igun di Navbar & Cover)
│   │   └── menu-asli.jpeg         (Foto lembar papan menu fisik asli)
│   │
│   ├── menu/                      <-- Foto 33 Menu Makanan & Minuman
│   │   ├── nasi-kulit-lengkap.jpg
│   │   ├── paket-cumi.jpg
│   │   ├── paket-paru.jpg
│   │   ├── paket-udang.jpg
│   │   ├── paket-ayam-kecombrang.jpg
│   │   ├── paket-daging-kisi.jpg
│   │   ├── cumi-oseng-kecombrang.jpg
│   │   ├── kulit-ayam.jpg
│   │   ├── paru-oseng.jpg
│   │   ├── daging-kisi-oseng.jpg
│   │   ├── es-teh-manis.jpg
│   │   ├── es-jeruk.jpg
│   │   ├── sambal-bawang.jpg
│   │   └── ... (semua menu terdaftar lengkap)
│   │
│   ├── galeri/                    <-- Foto Galeri & Suasana Warung
│   │   ├── galeri-1-nasi-kulit.jpg
│   │   ├── galeri-2-cumi-kecombrang.jpg
│   │   ├── galeri-3-suasana-warung.jpg
│   │   ├── galeri-4-sambal-spesial.jpg
│   │   ├── galeri-5-paru-kisi.jpg
│   │   └── galeri-6-minuman-segar.jpg
│   │
│   └── PETUNJUK_MENGGANTI_GAMBAR.txt  <-- Panduan teks mudah dipahami
```

> **Cara Mengganti Gambar:** Cukup masukkan/timpa file foto baru Anda ke dalam folder tersebut dengan nama file yang sama (misal `nasi-kulit-lengkap.jpg`). Website akan langsung memuat foto baru tanpa perlu mengubah kode!

---

## 📂 Struktur Halaman & Fitur Website

1. **Halaman 1: Cover Depan (Hero Cover)**
   - Logo Nasi Kulit Mak Igun besar dengan efek visual pop-art playful.
   - Tagline utama & sticker badge viral ("100% Halal", "Racikan Juara Ivan Gunawan & King Abdi", "Mulai Rp 15.400").
   - Tombol Call-to-Action cepat: *Buka Daftar Menu*, *Simulasi Pesanan (Order WA)*, dan *Lokasi Outlet*.

2. **Halaman 2: Daftar Menu Lengkap & Interaktif**
   - Diadaptasi lengkap dari gambar menu otentik (`images/branding/menu-asli.jpeg`).
   - Fitur Filter Kategori: Menu Bintang Utama, Menu Paket, Lauk Oseng Viral, Minuman Segar, dan Pelengkap/Sambal.
   - **Fitur Live Search**: Pencarian menu instan secara real-time.
   - **Modal Zoom Brosur Fisik**: Tombol untuk melihat lembar foto menu asli beresolusi tinggi dalam tampilan popup Lightbox.
   - **Simulasi Keranjang Pesanan (Order WhatsApp)**: Pengunjung bisa memilih menu, mengatur jumlah porsi, mengisi nama & catatan, lalu otomatis membuat pesan WhatsApp yang terformat rapi ke nomor `087777728228`.

3. **Halaman 3: Galeri Foto Instagram**
   - Kartu galeri hidangan lezat, kulit ayam krispi keemasan, sambal nampol, serta suasana outlet dine-in.
   - Fitur Lightbox popup ketika foto diklik.
   - Tombol tautan langsung ke Instagram `@nasikulitmakigun.surabayapusat`.

4. **Halaman 4: Alamat & Jam Operasional**
   - **Lokasi Utama:** Jl. Pregolan No. 11, Tegalsari, Kec. Tegalsari, Kota Surabaya, Jawa Timur 60262.
   - **Jam Buka:** Setiap Hari: 10.00 – 00.00 WIB (Buka sampai tengah malam).
   - **Status Buka Dinamis:** Indikator otomatis mendeteksi apakah warung sedang buka atau tutup berdasarkan waktu lokal.
   - **Peta Interaktif:** Google Maps Embed interaktif langsung mengarah ke Jl. Pregolan 11 Surabaya.

5. **Halaman 5: Kontak, Media Sosial & Pesan Online**
   - Saluran resmi Instagram cabang & pusat.
   - Layanan WhatsApp Hotline Pemesanan: `087777728228`.
   - Tombol pesan online delivery partner: GoFood, GrabFood, ShopeeFood.
   - Formulir formulir kritik & saran / ulasan pelanggan.

---

## 🚀 Cara Menjalankan Website

### Opsi 1: Buka Langsung (Tanpa Server / Offline)
Cukup klik ganda (double-click) file `index.html` pada File Explorer:
```text
C:\Users\Abie\nasikulit-makigun-website\index.html
```

### Opsi 2: Jalankan via Local Web Server (Node.js)
Buka terminal / PowerShell di folder proyek ini:
```powershell
cd C:\Users\Abie\nasikulit-makigun-website
node server.js
```
Lalu buka browser di:
```text
http://localhost:3000
```
