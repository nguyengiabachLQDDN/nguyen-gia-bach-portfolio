import type { Metadata, Viewport } from 'next';
import '../globals.css';
import { getPersonJsonLd, getRootMetadata } from '../metadata';

export const metadata: Metadata = getRootMetadata();
export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#061116',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
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
