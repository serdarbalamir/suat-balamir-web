---
title: "Yağmur Suyu Yönetiminde Attenuation Tank (Geciktirme Deposu) Tasarımı"
description: "Geciktirme depolarının işlevi, DWA-A 117 standardına göre hacim boyutlandırma yaklaşımı ve pik debi kontrolünün kentsel taşkın yönetimindeki rolü."
pubDate: 2026-06-01
ilkYayinTarihi: 2026-06-01
ilkYayinKaynagi: "Su ve Çevre Teknolojileri Dergisi, Sayı 215"
ilkYayinUrl: "https://www.suvecevre.com/yayin/1289/yagmur-suyu-yonetiminde-attenuation-tank-geciktirme-deposu-tasarimi_40073.html"
kategori: "Yağmur Suyu Yönetimi"
tags:
  - geciktirme deposu
  - attenuation tank
  - DWA-A 117
  - pik debi
  - depolama hacmi
featured: true
draft: false
---

## Suyu Hızla Uzaklaştırmak Değil, Kontrol Etmek

Geleneksel drenaj anlayışı, yağmur suyunu mümkün olan en kısa sürede sistemden uzaklaştırmayı hedefler. Ancak kentleşmeyle birlikte geçirimsiz yüzeylerin artması, bu yaklaşımın kendisini sorunun parçası hâline getirmiştir: Her yeni gelişme alanı, mansaptaki şebekeye ve dereye **daha yüksek pik debiler** gönderir. Sonuç; kapasitesi aşılan kolektörler, taşan dereler ve zorlanan arıtma tesisleridir.

Modern yaklaşım suyu hızla uzaklaştırmak yerine **kontrol etmeyi ve geciktirmeyi** esas alır. Bu yaklaşımın temel mühendislik yapısı **geciktirme deposudur** (attenuation tank / Regenrückhaltebecken).

## Geciktirme Deposunun İşlevi

Geciktirme deposu, yağış sırasında oluşan fazla yüzey akışını **geçici olarak depolar** ve mansaba **kontrollü bir debiyle** (throttle discharge) geri verir. Temel işlevleri:

- Pik debinin mansap kapasitesine indirgenmesi
- Mevcut şebeke ve alıcı ortamın hidrolik korunması
- Taşkın riskinin azaltılması
- Yeni gelişme alanlarının mevcut altyapıya **nötr hidrolik etkiyle** bağlanabilmesi

<div class="callout callout-teknik">
<p class="callout-title">Tasarım İlkesi</p>
<p>Depo hacmi, <strong>giren hidrograf ile çıkan (kısılmış) debi arasındaki farkın</strong> zaman içindeki birikimidir. Çıkış debisi genellikle mansap şebekesinin kapasitesi veya alıcı ortam için izin verilen özgül debi (ör. doğal arazi akışına eşdeğer 5–15 l/s·ha) üzerinden belirlenir.</p>
</div>

## DWA-A 117'ye Göre Hacim Boyutlandırma

Alman DWA-A 117 standardının kritik kuralı şudur: **Depo hacmi tek bir yağış süresine göre hesaplanamaz.** Kısa süreli şiddetli yağışlar yüksek pik ancak küçük hacim; uzun süreli yağışlar düşük pik ancak büyük toplam hacim üretir. Hangi sürenin belirleyici olduğu, kısma debisine bağlıdır.

Bu nedenle hesap, **farklı yağış süreleri için tekrarlanır** ve en büyük hacmi veren süre tasarıma esas alınır:

| Yağış süresi D | Yağış şiddeti r(D,T) | Gelen hacim | Çıkan hacim (Q_dr × D) | Gerekli depo hacmi |
|---------------|---------------------|-------------|------------------------|--------------------|
| 10 dk | yüksek | orta | küçük | orta |
| 30 dk | orta | büyük | orta | **maksimum** |
| 60 dk | düşük | büyük | büyük | orta |
| 120 dk | düşük | çok büyük | çok büyük | küçük |

<div class="callout callout-formul">
<p class="callout-title">Basitleştirilmiş Hacim İfadesi</p>
<p>V(D) = [ Q<sub>giren</sub>(D) − Q<sub>kısma</sub> ] × D × f<sub>z</sub><br><br>
V<sub>tasarım</sub> = max{ V(D) }  — tüm D süreleri içinde en büyük değer<br><br>
f<sub>z</sub> : risk/iklim katsayısı (DWA-A 117'de tekrarlama periyodu ve belirsizliklere göre)</p>
</div>

### Hesabı Etkileyen Başlıca Parametreler

1. **Bağlı geçirimsiz alan (A_u):** Çatılar, yollar, otoparklar — akış katsayılarıyla indirgenmiş etkin alan.
2. **Tekrarlama periyodu (T):** Deponun korumayı hedeflediği yağış sıklığı (tipik olarak 5–30 yıl; kritik altyapıda daha yüksek).
3. **Kısma debisi (Q_dr):** Mansaba verilebilecek maksimum debi — genellikle vorteks tip debi regülatörü ile sağlanır.
4. **İklim faktörü:** Gelecek yağış artışları için %15–30 mertebesinde hacim payı.

## Uygulama Notları

- **Debi kontrolü:** Sabit orifisler tıkanma ve değişken karşı basınç sorunları yaşar; **vorteks tip regülatörler** hareketli parça olmadan stabil kısma sağlar.
- **Çökelti yönetimi:** Depo tabanında öz temizleme eğimi, gerektiğinde basınçlı yıkama sistemi öngörülmelidir.
- **Taşma güvenliği:** Tasarım yağışı aşıldığında devreye girecek güvenli taşma hattı (acil savak) zorunludur.
- **Bakım erişimi:** Menhol yerleşimi ve havalandırma, işletme güvenliği kriterlerine göre planlanmalıdır.
- **Modüler çözümler:** Betonarme depoların yanında, hafif ve hızlı kurulan modüler depolama blokları özellikle parsel ölçeğinde yaygınlaşmaktadır.

## Türkiye'de Geciktirme Deposu İhtiyacı

Yağmur suyu geciktirme hacimleri, Türkiye'de henüz imar mevzuatının standart bir bileşeni değildir. Oysa hızlı kentleşen havzalarda her yeni site, AVM veya sanayi parseli, mansap şebekesine ilave pik yük bindirmektedir. **"Gelişme öncesi pik debiyi aşma" (runoff neutrality)** ilkesinin ruhsat koşulu hâline getirilmesi; hem mevcut şebekelerin ömrünü uzatacak hem de dere kapasitelerine yönelik baskıyı azaltacaktır.

## Sonuç

Geciktirme deposu tasarımı, basit bir hazne hesabı değil; yağış istatistiği, mansap kapasitesi, kısma teknolojisi ve işletme gerekliliklerini birlikte ele alan bir **sistem tasarımıdır**. DWA-A 117'nin çoklu yağış süresi yaklaşımı, güvenli tarafta kalan ve ekonomik hacimler üretmenin kanıtlanmış yoludur.

---

### Kaynaklar

1. DWA-A 117. *Bemessung von Regenrückhalteräumen.* DWA, Hennef.
2. DWA-A 138. *Planung, Bau und Betrieb von Anlagen zur Versickerung von Niederschlagswasser.*
3. EN 752. *Drain and sewer systems outside buildings.*
