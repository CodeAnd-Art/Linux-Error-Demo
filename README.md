# 🖥️ System Crash Simulator

**Gerçekçi sistem çöküş ekranlarını simüle eden mobil web uygulaması**

## 🎮 Özellikler

- 📱 **5 Farklı Çöküş Simülasyonu:**
  - **Tecno Spark** - Tecno mobil cihaz boot hatası
  - **Android** - Android sistem hatası
  - **iOS** - Apple iOS çöküş
  - **BSOD** - Windows Mavi Ekran
  - **Linux** - Linux kernel panic

- 🎬 **HEPSINI OYNAT** - Tüm çöküşleri sırasıyla göster

## 📱 Mobil Uyumlu

✅ Responsive tasarım (tüm ekran boyutları)
✅ Touch-friendly interface
✅ Tam ekran mod (fullscreen)
✅ PWA (Progressive Web App) - Uygulama olarak yüklenebilir
✅ Offline çalışma desteği

## 🚀 Hızlı Başlangıç

### 1. **Web Tarayıcısından**
```
https://codeand-art.github.io/Linux-Error-Demo/
```

### 2. **Telefonunuza Uygulama Olarak Yükle**

**Android (Chrome):**
1. Siteyi açın
2. 3 nokta menüsü → "Uygulamayı yükle"
3. Homescreen'de görünecek

**iPhone (Safari):**
1. Siteyi açın
2. Paylaş → "Ana Ekrana Ekle"
3. Homescreen'de görünecek

## 📋 Dosya Yapısı

```
Linux-Error-Demo/
├── index.html        # Ana sayfa & Menu
├── style.css         # Mobil responsive tasarım
├── script.js         # Çöküş simülasyonları
├── manifest.json     # PWA konfigürasyonu
├── sw.js             # Service Worker (offline)
├── icon.svg          # Uygulama ikonu
└── README.md         # Bu dosya
```

## 🎨 Teknolojiler

- **HTML5** - Yapı
- **CSS3** - Responsive tasarım
- **JavaScript** - Interaktif çöküş animasyonları
- **PWA** - Native app deneyimi
- **Service Worker** - Offline destek

## 🎯 Kullanım

1. **Menüden bir çöküş seçin** ✨
2. **Animasyonu izleyin** 🎬
3. **X butonuyla çıkın** ✕

## ⚙️ Özelleştirme

### Yeni Çöküş Ekleme (script.js)
```javascript
const crashMessages = {
    yeniCokus: [
        "Hata mesajı 1",
        "Hata mesajı 2",
        // ...
    ]
};
```

### Stil Değiştirme (style.css)
```css
.yeni-crash {
    color: #ffffff;
    background: #000000;
}
```

## 📝 Notlar

⚠️ Bu uygulama **eğitim amaçlı** gerçekçi sistem hatalarını simüle etmek için tasarlanmıştır.

## 📄 Lisans

Açık kaynak - Özgürce kullanabilirsiniz

## 👨‍💻 Geliştirici

**CodeAnd-Art** - Mobil Web Uygulamaları

---

**Eğlenmeyi unutmayın!** 🎉
