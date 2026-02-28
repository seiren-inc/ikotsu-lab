import type { Metadata } from 'next';
import { Inter, Noto_Sans_JP } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FixedCTA from '@/components/layout/FixedCTA';
import { JsonLd, generateOrganizationSchema, generateLocalBusinessSchema } from '@/lib/schema/jsonld';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: 'Ikotsu Lab｜粉骨・洗骨の専門機関',
  description:
    '粉骨・洗骨の専門機関 Ikotsu Lab（遺骨ラボ）。工程公開・料金透明・全国対応。散骨・改葬・保存のための遺骨前処理を専門機関品質で提供します。',
  metadataBase: new URL('https://ikotsu-lab.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: 'Ikotsu Lab｜粉骨・洗骨の専門機関',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          メインコンテンツへスキップ
        </a>

        <Header />

        <main id="main-content">
          {children}
        </main>

        <Footer />
        <FixedCTA />

        {/* Global Schema */}
        <JsonLd data={generateOrganizationSchema()} />
        <JsonLd data={generateLocalBusinessSchema()} />
      </body>
    </html>
  );
}
