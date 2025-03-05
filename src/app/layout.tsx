import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Projetos Alura',
  description:
    'Projeto para listar e paginar todos os projetos realizados por mim com a orientação dos instrutores da Alura.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <body
        className={`${montserrat.variable} antialiased  text-base overflow-x-hidden xl:text-lg`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
