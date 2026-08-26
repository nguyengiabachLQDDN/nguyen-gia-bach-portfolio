import type { Metadata } from 'next';
import '../globals.css';
import { getPersonJsonLd, getRootMetadata } from '../metadata';

export const metadata: Metadata = getRootMetadata('vi');

export default function VietnameseRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getPersonJsonLd('vi')) }}
        />
      </body>
    </html>
  );
}
