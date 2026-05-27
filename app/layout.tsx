import type { Metadata } from 'next';
import './globals.css';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: {
    default: 'FactuX | Facturacion inteligente para emisores en Ecuador',
    template: '%s | FactuX',
  },
  description:
    'FactuX ayuda a profesionales y negocios a emitir comprobantes con una experiencia moderna, ordenada y lista para crecer.',
  metadataBase: new URL('https://factux.ec'),
  openGraph: {
    title: 'FactuX',
    description:
      'Facturacion inteligente para emisores en Ecuador con una experiencia clara, profesional y escalable.',
    url: 'https://factux.ec',
    siteName: 'FactuX',
    locale: 'es_EC',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <div className="relative min-h-screen overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-grid bg-[size:72px_72px] opacity-[0.04]" />
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
