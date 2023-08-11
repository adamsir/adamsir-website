import { ThemeProvider } from '#/components/theme-provider';
import '#/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';

const font = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Adam Šír',
  description: 'Personal page of Adam Šír',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
