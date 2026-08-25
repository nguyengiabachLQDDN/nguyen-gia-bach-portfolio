import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://nguyen-gia-bach-portfolio.gbachnguyen.chatgpt.site'),
  title: {
    default: 'Nguyen Gia Bach — Student Engineer',
    template: '%s',
  },
  description:
    'Portfolio of Nguyen Gia Bach, a student engineer working across physics, scientific software, astronomy, and robotics.',
  keywords: ['Nguyen Gia Bach', 'student engineer', 'physics', 'software', 'robotics', 'astronomy'],
  authors: [{ name: 'Nguyen Gia Bach' }],
  creator: 'Nguyen Gia Bach',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://nguyen-gia-bach-portfolio.gbachnguyen.chatgpt.site',
    title: 'Nguyen Gia Bach — Student Engineer',
    description: 'Physics · Software · Robotics',
    images: [
      {
        url: 'https://nguyen-gia-bach-portfolio.gbachnguyen.chatgpt.site/og.png',
        width: 1200,
        height: 630,
        alt: 'Nguyen Gia Bach — Physics, Software, Robotics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nguyen Gia Bach — Student Engineer',
    description: 'Physics · Software · Robotics',
    images: ['https://nguyen-gia-bach-portfolio.gbachnguyen.chatgpt.site/og.png'],
  },
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
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Nguyen Gia Bach',
              description: 'Student engineer working across physics, software, and robotics.',
              affiliation: {
                '@type': 'EducationalOrganization',
                name: 'Le Quy Don High School for the Gifted, Da Nang',
              },
              sameAs: [
                'https://github.com/nguyengiabachLQDDN',
                'https://www.linkedin.com/in/nguyen-gia-bach-996333386',
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
