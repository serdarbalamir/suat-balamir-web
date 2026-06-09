# Suat Balamir — Teknik Yayın Platformu

Su, atıksu ve yağmur suyu yönetimi üzerine teknik yayın ve mühendislik bilgi platformu.
Astro (statik site) + Decap CMS (içerik yönetimi) ile geliştirilmiştir.

## Komutlar

| Komut | Açıklama |
|-------|----------|
| `npm install` | Bağımlılıkları kurar |
| `npm run dev` | Geliştirme sunucusu — http://localhost:4321 |
| `npm run cms` | Geliştirme sunucusu **+ yerel CMS** — http://localhost:4321/admin |
| `npm run build` | Üretim derlemesi (`dist/` klasörüne) |
| `npm run preview` | Derlenmiş siteyi yerelde önizler |

> Not: Bu makinede Node.js `~/.local/node/current` altında kuruludur. Komutlardan önce
> `export PATH="$HOME/.local/node/current/bin:$PATH"` çalıştırın (veya bunu `~/.zshrc`'ye ekleyin).

## İçerik Yönetimi (CMS)

İçerikler `/admin` panelinden, kod bilgisi gerektirmeden yönetilir:

- **Makaleler** — dergi yazıları; "İlk Yayın Tarihi" ve "İlk Yayınlandığı Kaynak" alanlarıyla
- **LinkedIn İçgörüleri** — kısa formlu paylaşımlar, orijinal LinkedIn bağlantısıyla
- **Teknik Kütüphane** — standart özetleri, hesap yöntemleri, tasarım kriterleri
- **Ürünler ve Çözümler** — teknik özellik tablosu, kullanım alanları, broşür/doküman yükleme
- **Grafikler** — Chart.js grafikleri JSON verisi olarak (kod yazmadan düzenlenir)
- **Site Ayarları** — biyografi, iletişim bilgileri, uzmanlık alanları, kariyer zaman çizelgesi

### Yerel kullanım

```bash
npm run cms
# Tarayıcıda: http://localhost:4321/admin
```

`local_backend: true` sayesinde giriş istemez; değişiklikler doğrudan dosyalara yazılır.

### Canlıya alındığında

Site GitHub + Netlify üzerinde yayınlandığında `public/admin/config.yml` içinde:

1. `local_backend: true` satırını silin
2. `backend` bloğunu Netlify Identity (git-gateway) veya GitHub OAuth ile yapılandırın

Böylece Suat Bey, herhangi bir tarayıcıdan `suatbalamir.com/admin` adresine girip
yazı ekleyebilir; her kayıt otomatik olarak siteyi yeniden derler ve yayınlar.

## Makale İçinde Özel Bloklar

Markdown gövdesinde HTML kullanılabilir:

**Grafik ekleme** (Grafikler koleksiyonundaki dosya adıyla):

```html
<div data-chart="kirlilik-siniflari"></div>
```

**Teknik vurgu kutuları:**

```html
<div class="callout callout-teknik">
<p class="callout-title">Teknik Not</p>
<p>İçerik...</p>
</div>
```

Kutu türleri: `callout-teknik` (mavi), `callout-standart` (gri),
`callout-uyari` (amber), `callout-formul` (koyu, formüller için).

## İçerik Yeniden Kullanım Akışı

Bir dergi makalesi şu formatlara dönüştürülebilir — hepsi CMS'ten:

1. **Tam makale** → Makaleler koleksiyonu (`ilkYayinKaynagi` alanı doldurularak)
2. **Standart özeti** → Teknik Kütüphane kaydı
3. **Kısa tezler** → birden çok LinkedIn İçgörüsü
4. **İlgili ürün** → Ürünler koleksiyonu (standart referanslarıyla çapraz bağlantı)
5. **PDF** → makale kaydına "İndirilebilir PDF" olarak eklenir

## Yayınlama (öneri)

1. GitHub'a push edin
2. Netlify'da "Import from Git" ile bağlayın — build komutu `npm run build`, çıktı `dist`
3. İletişim formu Netlify Forms ile otomatik çalışır (`data-netlify="true"` hazır)
4. Alan adını (suatbalamir.com) Netlify'a yönlendirin
5. `astro.config.mjs` içindeki `site` değerini gerçek alan adıyla güncelleyin
