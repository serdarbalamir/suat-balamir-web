# Suat Balamir — Teknik Yayın Platformu

Suat Balamir'in (Gezer Endüstri Genel Müdür Yardımcısı, Su ve Çevre Teknolojileri
Dergisi konuk yazarı) su/atıksu/yağmur suyu mühendisliği otorite platformu.
Sahibi içerikleri kendi yönetir; teknik değişiklikler bu repo üzerinden yapılır.

## Canlı Adresler

- Site: https://suatbalamir.netlify.app
- Yönetim paneli: https://suatbalamir.netlify.app/admin (GitHub hesabıyla giriş: `mrsuat57` veya `serdarbalamir`)

## Mimarî

- **Astro 6** statik site + **Decap CMS** (görsel yönetim paneli)
- İçerikler markdown/JSON dosyalarıdır — veritabanı yoktur
- **Dağıtım otomatiktir:** `main` dalına atılan her commit'i Netlify ~1-2 dakikada
  derleyip yayınlar (Netlify projesi: "suatbalamir", Serdar'ın hesabında).
  Yönetim panelindeki "Yayımla" da aynı yoldan gider (panel → commit → otomatik derleme).

## Komutlar

```bash
npm install        # ilk kurulumda
npm run dev        # geliştirme sunucusu → localhost:4321
npm run cms        # dev sunucu + yerel admin paneli → localhost:4321/admin
npm run build      # üretim derlemesi → dist/
```

Gereksinim: Node.js 22+. (Not: Serdar'ın Mac'inde Node `~/.local/node/current/bin`
altındadır ve PATH'te değildir; başka makinelerde normal kurulum yeterli.)

## İçerik Nerede?

| İçerik | Konum | Not |
|--------|-------|-----|
| Makaleler | `src/content/makaleler/*.md` | `ilkYayinKaynagi`/`ilkYayinUrl` alanları dergi kaynağını gösterir |
| LinkedIn içgörüleri | `src/content/icgoruler/*.md` | kısa formlu; `linkedinUrl` orijinal gönderiye gider |
| Teknik kütüphane | `src/content/kutuphane/*.md` | standart özetleri, hesap yöntemleri |
| Ürünler | `src/content/urunler/*.md` | spec tablosu frontmatter'da |
| Grafikler | `src/data/charts/*.json` | Chart.js verisi; makale içinde `<div data-chart="dosya-adi"></div>` ile gömülür |
| Site ayarları / biyografi | `src/data/site.json` | ad, unvan, iletişim, uzmanlıklar |
| Kariyer zaman çizelgesi | `src/data/timeline.json` | Hakkında sayfası |
| Yüklenen medya | `public/uploads/` | panel buraya yükler |

Şema tanımları: `src/content.config.ts` — kategori listeleri burada ve
`public/admin/config.yml` içinde **senkron tutulmalıdır**.

## Makale İçi Özel Bloklar

```html
<div data-chart="kirlilik-siniflari"></div>   <!-- grafik gömme -->
<div class="callout callout-teknik"><p class="callout-title">Teknik Not</p><p>...</p></div>
```
Kutu türleri: `callout-teknik` (mavi), `callout-standart` (gri), `callout-uyari`
(amber), `callout-formul` (koyu).

## Tasarım

- Renkler/tipografi: `src/styles/global.css` içindeki CSS değişkenleri (lacivert
  `--navy-800`, su mavisi `--water-600`). Kurumsal/mühendislik görünümü korunmalı;
  parlak renkler ve aşırı animasyondan kaçınılmalı.
- Sayfa iskeleti + SEO (OG, JSON-LD): `src/layouts/BaseLayout.astro`
- Site adı, alan adı: `astro.config.mjs` (`site:` değeri — özel alan adına geçince güncellenecek)

## Dokunurken Dikkat

- `public/admin/config.yml` içindeki `backend:` bloğu canlı panel girişini taşır
  (GitHub OAuth, Netlify üzerinden) — bozulursa panel girişi çalışmaz.
- Repo **public kalmalı**: Netlify ücretsiz planı, private repoda ekip dışı
  katkıcıların (mrsuat57) commit'lerini derlemeyi reddeder.
- İçerik dosyalarını panel de düzenlediği için, yerelde çalışmaya başlamadan
  önce `git pull` çekmek çakışmaları önler.

## Yol Haritası (bekleyenler)

- Özel alan adı (suatbalamir.com planlanıyor) → Netlify'da bağla + `astro.config.mjs` güncelle
- İngilizce sürüm (arayüz + seçili ana makaleler; içerik onaylandıktan sonra)
- Dergi arşivinden kalan makalelerin taşınması
- Hakkında sayfasındaki kariyer/eğitim zaman çizelgesinin gerçek bilgilerle doldurulması
