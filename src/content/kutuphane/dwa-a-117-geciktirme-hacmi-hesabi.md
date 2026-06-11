---
title: "DWA-A 117'ye Göre Geciktirme Hacmi Hesabı — Adım Adım"
description: "Geciktirme deposu hacminin DWA-A 117 yaklaşımıyla, çoklu yağış süresi taraması üzerinden belirlenmesi: girdiler, hesap adımları ve örnek tablo."
pubDate: 2026-06-03
kategori: "Hesaplama Yöntemleri"
standartlar:
  - DWA-A 117
tags:
  - geciktirme deposu
  - hacim hesabı
  - kısma debisi
featured: true
draft: false
---

## Hesabın Mantığı

Geciktirme hacmi, **gelen akış ile izin verilen çıkış (kısma) debisi arasındaki farkın** zaman içinde birikmesidir. DWA-A 117'nin temel kuralı: hacim, tek bir yağış süresiyle değil, **bir dizi yağış süresi taranarak** hesaplanır ve en büyük sonuç tasarıma esas alınır.

## Girdiler

| Girdi | Sembol | Tipik Kaynak |
|-------|--------|--------------|
| Bağlı geçirimsiz alan | A_u (ha) | Parsel planı × akış katsayıları |
| Yağış istatistiği | r(D,T) (l/s·ha) | İDF eğrileri / KOSTRA benzeri veri |
| Tekrarlama periyodu | T (yıl) | Koruma hedefi (tipik 5–30 yıl) |
| Kısma debisi | Q_dr (l/s) | Mansap kapasitesi veya izin verilen özgül debi |
| Risk/iklim katsayısı | f_z (–) | DWA-A 117 tabloları + iklim payı |

## Hesap Adımları

1. **Etkin alanı belirle:** A_u = Σ (alan × akış katsayısı)
2. **Yağış süresi seti seç:** D = 5, 10, 15, 20, 30, 45, 60, 90, 120, 180 dk...
3. **Her D için gelen hacmi hesapla:** V_gelen(D) = r(D,T) × A_u × D
4. **Her D için çıkan hacmi düş:** V_çıkan(D) = Q_dr × D
5. **Gerekli hacim:** V(D) = [V_gelen(D) − V_çıkan(D)] × f_z
6. **Tasarım hacmi:** V_tasarım = max{V(D)} — en büyük değeri veren süre "kritik süre"dir.

<div class="callout callout-formul">
<p class="callout-title">Pratik Kural</p>
<p>Kısma debisi küçüldükçe kritik yağış süresi <strong>uzar</strong> ve gerekli hacim büyür. Q_dr, etkin alanın tasarım yağışındaki pik debisinin %10–20'sine indirildiğinde, kritik süre çoğunlukla 30–90 dk bandına oturur.</p>
</div>

## Örnek Tarama Tablosu (Temsili)

A_u = 2,0 ha; T = 10 yıl; Q_dr = 40 l/s; f_z = 1,2 için:

| D (dk) | r(D,10) (l/s·ha) | V_gelen (m³) | V_çıkan (m³) | V(D) (m³) |
|--------|------------------|--------------|--------------|-----------|
| 10 | 230 | 276 | 24 | 302 |
| 20 | 165 | 396 | 48 | 418 |
| 30 | 130 | 468 | 72 | **475** |
| 60 | 85 | 612 | 144 | 562 → kontrol* |
| 120 | 50 | 720 | 288 | 518 |

\* Uzun sürelerde tablo değerleri yerel İDF eğrisine göre değişir; örnekte kritik süre 60 dk civarındadır. Tarama, hacmin azalmaya başladığı süreye kadar genişletilmelidir.

## Tasarım Sonrası Kontroller

- **Taşma güvenliği:** T üstü olaylar için acil savak ve güvenli taşma güzergâhı
- **Boşalma süresi:** Deponun ardışık yağışlara hazır olması için tipik hedef ≤ 24 saat
- **Çökelti yönetimi:** Taban eğimi, yıkama sistemi, bakım erişimi
- **Kısma elemanı:** Vorteks regülatör / orifis seçimi ve karakteristik eğrisinin hacim hesabına yansıtılması
