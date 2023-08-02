'use client';
import { NotoSerif } from '@/fonts/fonts';
import './globals.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={NotoSerif.className}>{children}</body>
    </html>
  );
}
