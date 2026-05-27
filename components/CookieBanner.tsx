'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const COOKIE_CONSENT_KEY = 'factux.cookie-consent';

type ConsentState = 'accepted' | 'rejected' | null;

export function CookieBanner() {
  const [consent, setConsent] = useState<ConsentState>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const storedValue = window.localStorage.getItem(COOKIE_CONSENT_KEY);

    if (storedValue === 'accepted' || storedValue === 'rejected') {
      setConsent(storedValue);
    }

    setReady(true);
  }, []);

  const saveConsent = (value: Exclude<ConsentState, null>) => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
    setConsent(value);
  };

  if (!ready || consent !== null) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6">
      <div className="container-shell">
        <div className="card-surface border-ink/10 bg-white/95 p-4 shadow-[0_24px_80px_rgba(12,23,40,0.22)] sm:p-5">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">
                Cookies
              </div>
              <p className="mt-3 text-sm leading-7 text-slate sm:text-base">
                Utilizamos cookies esenciales para el funcionamiento del sitio y, si lo
                autorizas, cookies adicionales para analitica y mejora de la experiencia.
                Puedes revisar los detalles en nuestra{' '}
                <Link href="/cookies" className="font-semibold text-ink underline decoration-ink/30 underline-offset-4">
                  politica de cookies
                </Link>
                .
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:self-start">
              <button
                type="button"
                onClick={() => saveConsent('rejected')}
                className="button-secondary w-full sm:w-auto"
              >
                Rechazar
              </button>
              <button
                type="button"
                onClick={() => saveConsent('accepted')}
                className="button-primary w-full sm:w-auto"
              >
                Aceptar todas
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
