import { Route, Routes } from 'react-router-dom';
import { CookieBanner } from '@/components/CookieBanner';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ScrollToTop } from '@/src/components/ScrollToTop';
import { AboutPage } from '@/src/pages/AboutPage';
import { ContactPage } from '@/src/pages/ContactPage';
import { CookiesPage } from '@/src/pages/CookiesPage';
import { FaqPage } from '@/src/pages/FaqPage';
import { HomePage } from '@/src/pages/HomePage';
import { NotFoundPage } from '@/src/pages/NotFoundPage';
import { PricingPage } from '@/src/pages/PricingPage';
import { PrivacyPage } from '@/src/pages/PrivacyPage';
import { TermsPage } from '@/src/pages/TermsPage';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-grid bg-[size:72px_72px] opacity-[0.04]" />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/precios" element={<PricingPage />} />
            <Route path="/sobre-factux" element={<AboutPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            <Route path="/politica-de-privacidad" element={<PrivacyPage />} />
            <Route path="/terminos" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </>
  );
}
