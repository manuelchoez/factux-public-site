'use client';

import Link from 'next/link';
import { useState } from 'react';
import { siteConfig } from '@/lib/siteConfig';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/precios', label: 'Precios' },
  { href: '/sobre-factux', label: 'Sobre FactuX' },
  { href: '/contacto', label: 'Contacto' },
  { href: '/faq', label: 'FAQ' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="container-shell pt-4 sm:pt-5">
        <div className="rounded-[28px] border border-white/70 bg-white/80 px-4 py-4 shadow-soft backdrop-blur sm:px-6">
          <div className="flex items-center justify-between gap-4">
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
              <Link href={siteConfig.appLoginUrl} className="button-secondary hidden sm:inline-flex">
                Iniciar sesion
              </Link>
              <Link href="/contacto" className="button-primary hidden sm:inline-flex">
                Solicitar demo
              </Link>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-ink lg:hidden"
                onClick={() => setMobileMenuOpen((value) => !value)}
                aria-expanded={mobileMenuOpen}
                aria-label="Abrir menu"
              >
                <span className="text-lg leading-none">{mobileMenuOpen ? '×' : '≡'}</span>
              </button>
            </div>
          </div>

          {mobileMenuOpen ? (
            <div className="mt-4 rounded-[24px] border border-white/70 bg-white/95 p-4 shadow-soft lg:hidden">
              <nav className="grid gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-ink transition hover:bg-[#f4f7fb]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <Link
                  href={siteConfig.appLoginUrl}
                  className="button-secondary w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Iniciar sesion
                </Link>
                <Link
                  href="/contacto"
                  className="button-primary w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Solicitar demo
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
