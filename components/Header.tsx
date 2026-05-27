import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/precios', label: 'Precios' },
  { href: '/sobre-factux', label: 'Sobre FactuX' },
  { href: '/contacto', label: 'Contacto' },
  { href: '/faq', label: 'FAQ' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="container-shell pt-5">
        <div className="flex items-center justify-between rounded-full border border-white/70 bg-white/80 px-6 py-4 shadow-soft backdrop-blur">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
              FX
            </div>
            <div>
              <div className="text-base font-semibold text-ink">FactuX</div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate">Public Site</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={siteConfig.appLoginUrl}
              className="button-secondary hidden sm:inline-flex"
            >
              Iniciar sesion
            </Link>
            <Link href="/contacto" className="button-primary hidden sm:inline-flex">
              Solicitar demo
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
