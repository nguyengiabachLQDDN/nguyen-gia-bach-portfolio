import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import '../globals.css';
import { getPersonJsonLd, getRootMetadata } from '../metadata';

const instrumentSans = localFont({
  src: '../fonts/instrument-sans-latin.woff2',
  variable: '--font-instrument-sans',
  display: 'swap',
  weight: '400 600',
});

const ibmPlexMono = localFont({
  src: [
    { path: '../fonts/ibm-plex-mono-400-latin.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/ibm-plex-mono-500-latin.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/ibm-plex-mono-600-latin.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

export const metadata: Metadata = getRootMetadata();
export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f2f0ea',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${ibmPlexMono.variable}`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              ...getPersonJsonLd(),
            }),
          }}
        />
      </body>
    </html>
  );
}
