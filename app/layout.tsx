import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Nguyen Gia Bach — Student Engineer',
    template: '%s',
  },
  description:
    'Portfolio of Nguyen Gia Bach, a student engineer working across physics, scientific software, astronomy, and robotics.',
  keywords: ['Nguyen Gia Bach', 'student engineer', 'physics', 'software', 'robotics', 'astronomy'],
  authors: [{ name: 'Nguyen Gia Bach' }],
  creator: 'Nguyen Gia Bach',
  openGraph: {
    type: 'website',
    title: 'Nguyen Gia Bach — Student Engineer',
    description: 'Physics · Software · Robotics',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nguyen Gia Bach — Student Engineer',
    description: 'Physics · Software · Robotics',
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
