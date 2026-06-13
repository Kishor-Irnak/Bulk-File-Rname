import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Script from 'next/script';
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  metadataBase: new URL('https://bulkrenametool.com'),
  title: {
    default: 'Free Bulk File Renamer Online | BulkRenameTool',
    template: '%s | BulkRenameTool'
  },
  description: 'Rename hundreds of files at once in your browser. Add prefixes, suffixes, auto-number, find & replace. 100% free. No software. No signup.',
  keywords: [
    'bulk rename files online', 'batch rename tool', 
    'rename multiple files', 'bulk file renamer',
    'online file renamer free', 'rename files in bulk',
    'batch rename files free', 'rename 100 files at once'
  ],
  authors: [{ name: 'BulkRenameTool' }],
  creator: 'BulkRenameTool',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bulkrenametool.com',
    siteName: 'BulkRenameTool',
    title: 'Free Bulk File Renamer Online | BulkRenameTool',
    description: 'Rename hundreds of files at once in your browser. No software, no signup, 100% free.',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'BulkRenameTool - Free Online Bulk File Renamer'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Bulk File Renamer Online | BulkRenameTool',
    description: 'Rename hundreds of files at once in your browser. No software, no signup, 100% free.',
    images: ['/og-image.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: 'https://bulkrenametool.com'
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)} suppressHydrationWarning>
      <head>
        {/* Preconnect to critical third-party origins to speed up analytics loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WGFNGZKQ');`}
        </Script>
        {/* End Google Tag Manager */}

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WGFNGZKQ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-C2KS36YS9B"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-C2KS36YS9B');
          `}
        </Script>
        {/* End Google Analytics */}
        {/* Placeholder for Google AdSense - add script tag here in the future if needed */}
        {/* <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXX" crossOrigin="anonymous" strategy="afterInteractive" /> */}
        
        <ThemeProvider>
          <Header />
          <main className="flex-grow flex flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
