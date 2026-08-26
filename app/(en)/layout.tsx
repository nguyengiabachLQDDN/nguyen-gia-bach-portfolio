import type { Metadata } from 'next';
import '../globals.css';
import { getPersonJsonLd, getRootMetadata } from '../metadata';

export const metadata: Metadata = getRootMetadata();

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
