import localFont from 'next/font/local';
import { Noto_Serif } from 'next/font/google';

export const Rosmatika = localFont({
  src: './Rosmatika.ttf',
  display: 'swap',
});

export const NotoSerif = Noto_Serif({
  subsets: ['latin'],
  display: 'swap',
});
