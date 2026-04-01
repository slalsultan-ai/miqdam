import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "مِقدام — حوّل حفظ القرآن إلى مباراة!",
  description: "منصة تفاعلية تحوّل حفظ القرآن الكريم إلى مغامرة كروية حماسية للأطفال",
  manifest: "/manifest.json",
  icons: { icon: "/icon-192.png", apple: "/icon-512.png" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0D7C3D",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Amiri+Quran&family=Tajawal:wght@400;500;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
