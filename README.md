# 2zek - Visionary Digital Bridge

Modern, çok dilli, Next.js 16 tabanlı dijital ajans landing page'i.

## Teknolojiler

- **Next.js 16.1.4** - React framework (Turbopack)
- **React 19** - UI kütüphanesi
- **TypeScript** - Tip güvenliği
- **Tailwind CSS 4** - Styling
- **next-intl** - Çok dilli destek (tr-TR, en-US)
- **next-themes** - Dark/Light mode
- **Framer Motion** - Animasyonlar
- **Bun** - Package manager & runtime

## Proje Yapısı

```
src/
├── app/[locale]/       # Sayfa rotaları (i18n destekli)
├── components/
│   ├── home/           # Ana sayfa bileşenleri (Hero, BentoGrid, Portfolio)
│   └── layout/         # Layout bileşenleri (Navbar, Footer)
├── i18n/               # Uluslararasılaştırma yapılandırması
│   ├── routing.ts      # Dil rotaları
│   └── request.ts      # Mesaj yükleyici
├── messages/           # Çeviri dosyaları
│   ├── en-US.json
│   └── tr-TR.json
└── middleware.ts       # i18n middleware
```

## Kurulum

```bash
# Bağımlılıkları yükle
bun install

# Geliştirme sunucusunu başlat
bun run dev

# Production build
bun run build

# Production sunucusu
bun run start
```

## Özellikler

- 🌐 **Çok Dilli** - Türkçe ve İngilizce desteği
- 🌙 **Dark/Light Mode** - Tema değiştirme
- 📱 **Responsive** - Mobil uyumlu tasarım
- ⚡ **Hızlı** - Turbopack ile optimize
- 🎨 **Modern UI** - Glassmorphism, gradient ve animasyonlar

## Geliştirme

Varsayılan port: `http://localhost:3000`

- `/en-US` - İngilizce
- `/tr-TR` - Türkçe
